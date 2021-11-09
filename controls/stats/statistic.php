<?php
class StatsController{
    public static function get_video_view($id){
        $sql = "SELECT count(id) as views FROM video_views";
        $sql = mysqli_query(conn(), $sql);
        $video = mysqli_fetch_assoc($sql);

        return $video['views'];
    }
}
?>