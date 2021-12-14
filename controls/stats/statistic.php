<?php
class StatsController{
    public static function get_video_view($id){
        $sql = "SELECT count(id) as views FROM video_views";
        $sql = mysqli_query(conn(), $sql);
        $video = mysqli_fetch_assoc($sql);

        return $video['views'];
    }

    public static function count_user(){
        $sql = "SELECT count(id) as users FROM users";
        $sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
        
        return $sql['users'];
    }

    public static function count_video(){
        $sql = "SELECT count(id) as videos FROM video";
        $sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
        
        return $sql['videos'];
    }

    public static function count_document(){
        $sql = "SELECT count(id) as docs FROM document";
        $sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
        
        return $sql['docs'];
    }

    public static function count_app_visits(){
        $uri = substr($_SERVER['REQUEST_URI'], 1);
        $sql = "SELECT COUNT(uri) AS all_time, 
                (SELECT COUNT(uri) FROM page_visit WHERE uri='$uri' AND MONTH(TIME) = MONTH(CURRENT_TIMESTAMP)) AS month_time,
                (SELECT COUNT(uri) FROM page_visit WHERE URI='$uri' AND DATE(TIME) = DATE(CURRENT_TIMESTAMP)) AS today
            FROM page_visit WHERE URI='$uri'";

        return mysqli_fetch_assoc(mysqli_query(conn(), $sql));
    }

    public static function count_video_view(){
        $sql = "SELECT COUNT(id) AS all_time, 
            (SELECT COUNT(id) FROM video_views WHERE MONTH(TIME) = MONTH(CURRENT_TIMESTAMP)) AS monthly,
            (SELECT COUNT(id) FROM video_views WHERE DATE(TIME) = DATE(CURRENT_TIMESTAMP)) AS today
        FROM video_views";
        return mysqli_fetch_assoc(mysqli_query(conn(), $sql));
    }
}
?>