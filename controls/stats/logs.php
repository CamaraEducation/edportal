<?php
class LogsController{
    public static function log_video_view($id){
        $user = $_SESSION['id'];
        $sql = "SELECT count(id) as views FROM video_views WHERE video_id = '$id' AND user_id = '$user' AND date(time) = date(CURRENT_TIMESTAMP)";
        $data = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
        if($data['views'] == 0){
            $log = "INSERT INTO video_views (video_id, user_id) VALUES ('$id', '$user')";
            mysqli_query(conn(), $log);
        }
    }

    public static function log_page_visit(){
        $page = $_SERVER['REQUEST_URI'] == '/' ? 'home' : substr($_SERVER['REQUEST_URI'], 1);
        $user = $_SESSION['id'];
        $sql = "SELECT count(id) as views FROM page_visit WHERE page = '$page' AND visitor = '$user' AND date(time) = date(CURRENT_TIMESTAMP)";
        $data = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
        if($data['views'] == 0){
            $log = "INSERT INTO page_visit VALUES (DEFAULT, '$user', '$page', DEFAULT, DEFAULT)";
            mysqli_query(conn(), $log);
        }
    }

    public static function log_live_time(){
        LogsController::log_page_visit();
        $page = $_SERVER['REQUEST_URI'] == '/' ? 'home' : substr($_SERVER['REQUEST_URI'], 1);
        $user = $_SESSION['id'];
        $duration = $_POST['duration'];
        $sql= "UPDATE page_visit SET live = '$duration' WHERE page = '$page' AND visitor = '$user' AND date(time) = date(CURRENT_TIMESTAMP)";
        mysqli_query(conn(), $sql);
    }
}
?>