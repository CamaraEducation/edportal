<?php
class SysSyncController{
	public static function last(){
		//fetch the last sync data
		$last = "SELECT * FROM sync";
		return mysqli_fetch_assoc(mysqli_query(conn(), $last));
	}

	public static function period(){
		$all = "SELECT id FROM page_visit ORDER BY id DESC LIMIT 1";
		$all = mysqli_fetch_assoc(mysqli_query(conn(), $all));

		$app = "SELECT id FROM app_visits ORDER BY id DESC LIMIT 1";
		$app = mysqli_fetch_assoc(mysqli_query(conn(), $app));

		$vid = "SELECT id FROM video_views ORDER BY id DESC LIMIT 1";
		$vid = mysqli_fetch_assoc(mysqli_query(conn(), $vid));

		$doc = "SELECT id FROM doc_views ORDER BY id DESC LIMIT 1";
		$doc = mysqli_fetch_assoc(mysqli_query(conn(), $doc));

		return ['all' => $all['id'], 'app' => $app['id'], 'vid' => $vid['id'], 'doc' => $doc['id']];
	}

	public static function init(){
		if(is_sync() == true){
			$last = self::last();
			$max  = self::period();
			$page = $last['site']; $app = $last['app']; $vid = $last['vid']; $doc = $last['doc']; 

			//count the amount of data
			$psql = "SELECT COUNT(id) FROM page_visit WHERE id>'$page' AND live>0";
			$psql = mysqli_fetch_assoc(mysqli_query(conn(), $psql));

			/****************************************************************************************
			 * @var $gdata :: general data - consists of all page visit regardless of content type *
			 * @var $cdata :: content data - consists of specific data i.e video, apps and docs    *
			*****************************************************************************************/
			if($psql >= 10){
				$gdata = self::all($page, $max['all']);
				$cdata = array_merge(self::apps($app, $max['app']), self::video($vid, $max['vid']), self::doc($doc, $max['doc']));
				return ['gdata' => $gdata, 'cdata' => $cdata, 'max' => $max];
			}
		}else{
			die('connection could not be established');
		}
	}

	public static function check(){
		if(is_sync() == true){
			$s1 = 'ok';
		}elseif(is_sync() == true){
			$s2 = 'ok';
		}elseif(is_sync() == true){
			$s3 = 'ok';
		}
		return ['s1' => $s1, 's2' => $s2, 's3' => $s3];
	}

	//fetch all data usage statistics
	public static function all($id, $max){
        $sql = "SELECT *, YEAR(`time`) as age FROM page_visit WHERE id>'$id' AND id<='$max' AND uri != 'home' AND live>0";
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }

	//fetch app usage statistics
    public static function apps($id, $max){
        $sql = "SELECT (SELECT `name` FROM apps a WHERE a.id = v.app ) AS title, visitor, REPLACE(app, app, 'APP') AS con_type, `time`, YEAR(`time`) as age FROM app_visits v WHERE id>'$id' AND id<='$max'";
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }

	//fetch video statistics
    public static function video($id, $max){
        $sql = "SELECT v.`title`, v.description, vv.user_id AS visitor, REPLACE(v.id, v.id, 'VIDEO') AS con_type, vv.`time`, YEAR(vv.time) AS age FROM video_views vv, video v WHERE vv.id>'$id' AND vv.id<='$max' AND v.id = vv.video_id;";        
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }

	//fetch doc reading statistics
    public static function doc($id, $max){
        $sql = "SELECT d.name as title, dv.user_id AS visitor, REPLACE(d.id, d.id, 'DOC') AS con_type, dv.time, YEAR(TIME) AS age FROM doc_views dv, document d WHERE dv.id>'$id' AND dv.id<='$max' AND d.id=dv.doc_id";
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }

	public static function update($max){
		$sql = "UPDATE sync SET site='$max[all]', app='$max[app]', vid='$max[vid]', doc='$max[doc]'";
		mysqli_query(conn(), $sql);
	}
}

?>