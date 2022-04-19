<?php
class SysSyncController{
	public static function last(){
		//fetch the last sync data
		$last = "SELECT * FROM sync";
		return mysqli_fetch_assoc(mysqli_query(conn(), $last));
	}

	public static function init(){
		if(is_connected() == true){
			$last = self::last();			
			$page = $last['site']; $app = $last['app']; $vid = $last['vid']; $doc = $last['doc']; 

			//count the amount of data
			$psql = "SELECT COUNT(id) FROM page_visit WHERE id>'$page' AND live>0";
			$psql = mysqli_fetch_assoc(mysqli_query(conn(), $psql));

			/****************************************************************************************
			 * @var $gdata :: general data - consists of all page visit regardless of content type *
			 * @var $cdata :: content data - consists of specific data i.e video, apps and docs    *
			*****************************************************************************************/
			if($psql >= 100){
				$gdata = self::all($page);
				$cdata = array_merge(self::apps($app), self::video($vid), self::doc($doc));
				return ['gdata' => $gdata, 'cdata' => $cdata];
			}
		}
	}

	public static function check(){
		if(is_connected() == true){

		}else if(is_connected() == true){

		}
	}

	//fetch all data usage statistics
	public static function all($id){
        $sql = "SELECT *, YEAR(`time`) as age FROM page_visit WHERE id>'$id' AND live>0";
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }

	//fetch app usage statistics
    public static function apps($id){
        $sql = "SELECT (SELECT `name` FROM apps a WHERE a.id = v.app ) AS title, visitor, REPLACE(app, app, 'APP') AS con_type, `time`, YEAR(`time`) as age FROM app_visits v WHERE id>'$id'";
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }

	//fetch video statistics
    public static function video($id){
        $sql = "SELECT v.`title`, v.description, vv.user_id AS visitor, REPLACE(v.id, v.id, 'VIDEO') AS con_type, vv.`time`, YEAR(vv.time) AS age FROM video_views vv, video v WHERE vv.id>'$id' AND v.id = vv.video_id;";        
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }

	//fetch doc reading statistics
    public static function doc($id){
        $sql = "SELECT d.name as title, dv.user_id AS visitor, REPLACE(d.id, d.id, 'DOC') AS con_type, dv.time, YEAR(TIME) AS age FROM doc_views dv, document d WHERE dv.id>'$id' AND d.id=dv.doc_id";
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }
}

?>