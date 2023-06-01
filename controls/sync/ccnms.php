<?php
    class CCNMSSYNC{
        static function init(){

            $last = self::last();
            $max  = self::period();

            $usage = $last['usage']>0 ? $last['usage'] : 0;
            $process = $last['process']>0 ? $last['process'] : 0;

            $psql = "SELECT COUNT(id) as total FROM process_sum WHERE id>'$process'";
            $psql = mysqli_fetch_assoc(mysqli_query(ccnms(), $psql));

            if($psql['total'] > 0):
                $data = [ 
                    'config' => json_encode(ConfigsController::all()),
                    'usage'  => json_encode(self::usage($usage, $max['usage'])),
                    'process' => json_encode(self::process($process, $max['process']))
                ];

                $url = "https://dashboard.camara.org/ccnms/sync";
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_POST, 1);
                $post = $data;
                curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

                # ignore SSL verification
                curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
                curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

                $result = curl_exec($ch);
                if (curl_errno($ch)) {
                    echo 'Error:' . curl_error($ch);
                }
                curl_close($ch);

                if($result=='OK'):
                    self::update($max['usage'], $max['process']);
                    echo 'OK';
                endif;
            endif;
        }

        static function update($usage, $process){
            $sql = "INSERT INTO sync VALUES(1, $usage, $process) ON DUPLICATE KEY UPDATE `usage`=$usage, `process`=$process";
            mysqli_query(ccnms(), $sql);
        }

        static function last(){
            $sql = "SELECT * FROM sync";
            return mysqli_fetch_assoc(mysqli_query(ccnms(), $sql));
        }

        static function period(){            
            $sql[0] = "SELECT id FROM pc_usage ORDER BY id DESC LIMIT 1"; 
            $sql[1] = "SELECT id FROM process_sum ORDER BY id DESC LIMIT 1";

            return [
                'usage' => mysqli_fetch_assoc(mysqli_query(ccnms(), $sql[0]))['id'],
                'process' => mysqli_fetch_assoc(mysqli_query(ccnms(), $sql[1]))['id']
            ];
        }

        static function usage($id, $max){
            $sql = "SELECT * FROM pc_usage WHERE id>'$id' AND id<='$max'";
            $res = mysqli_fetch_all(mysqli_query(ccnms(), $sql), MYSQLI_ASSOC);

            return $res;
        }

        static function process($id, $max){
            $sql = "SELECT * FROM process_sum WHERE id>'$id' AND id<='$max'";
            $res = mysqli_fetch_all(mysqli_query(ccnms(), $sql), MYSQLI_ASSOC);

            return $res;
        }

        static function check_data(){
            # view the last usage data from `sync`
            $last = self::last();

            # count from pc_usage
            $sql = "SELECT COUNT(id) as total FROM pc_usage WHERE id>'$last[usage]'";
            $sql = mysqli_fetch_assoc(mysqli_query(ccnms(), $sql));

            # if there is data return the data, otherwise return 'no data found'
            if($sql['total'] > 0):
                echo $sql['total'];
            else:
                echo 'no data found';
            endif;
        }
    }
