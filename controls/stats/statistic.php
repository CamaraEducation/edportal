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
}
?>