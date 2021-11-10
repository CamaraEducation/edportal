<?php
class LogsController{
    public static function log_video_view($id){
        $user = 1;
        $sql = "SELECT count(id) as views FROM video_views WHERE video_id = '$id' AND user_id = '$user' AND date(time) = date(CURRENT_TIMESTAMP)";
        $data = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
        if($data['views'] == 0){
            $log = "INSERT INTO video_views (video_id, user_id) VALUES ('$id', '$user')";
            mysqli_query(conn(), $log);
        }
    }

    public static function log_page_visit(){
        $page = $_SERVER['REQUEST_URI'];
        $time = 123456789;
        $user = 1;
        $sql = "SELECT count(id) FROM page_visit WHERE page = '$page' AND visitor = '$user' AND time = '$time'";
        if(mysqli_num_rows(mysqli_query(conn(), $sql)) == 0){
            $log = "INSERT INTO page_visit VALUES ('$user', '$page', '$time')";
            mysqli_query(conn(), $log);
        }
    }
}
?>