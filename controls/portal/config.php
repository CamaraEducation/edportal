<?php
class ConfigsController{
    public static function get($name){
        $sql = "SELECT * FROM config";
        $data =  mysqli_fetch_assoc(mysqli_query(conn(), $sql));

        return $data[$name];
    }

    public static function update(){
        foreach($_POST as $key => $value){ $$key = $value;} $level = implode(',', $level);
        $sql = "UPDATE config SET 
            school = '$school', ownership = '$ownership', category='$level', region='$region', country='$country'
            WHERE 1
        "; if(mysqli_query(conn(), $sql)){ echo 'success';}
    }

    public static function check(){
        if(isset($_SESSION['user_role'])){
            $sql = "SELECT * FROM config";
            $result = mysqli_fetch_assoc(mysqli_query(conn(), $sql));

            foreach($result as $key => $value){
                if(empty($value) and $_SESSION['user_role'] == 1 and $_SERVER['REQUEST_URI'] != '/configure/portal'){
                    header("Location: /configure/portal");
                }
            }
        }


    }
}

?>