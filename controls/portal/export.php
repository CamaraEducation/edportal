<?php
class PortalExport{
    public static function all(){
        $sql = "SELECT *, YEAR(`time`) as age FROM page_visit WHERE live>0";
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }

    public static function apps(){
        $sql = "SELECT (SELECT `name` FROM apps a WHERE a.id = v.app ) AS title, visitor, REPLACE(app, app, 'APP') AS con_type, `time`, YEAR(`time`) as age FROM app_visits v";
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }

    public static function video(){
        $sql = "SELECT v.`title`, v.description, vv.user_id AS visitor, REPLACE(v.id, v.id, 'VIDEO') AS con_type, vv.`time`, YEAR(vv.time) AS age FROM video_views vv, video v WHERE v.id = vv.video_id;";        
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }

    public static function doc(){
        $sql = "SELECT d.name as title, dv.user_id AS visitor, REPLACE(d.id, d.id, 'DOC') AS con_type, dv.time, YEAR(TIME) AS age FROM doc_views dv, document d WHERE d.id=dv.doc_id";
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }
}
?>