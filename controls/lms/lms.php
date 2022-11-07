<?php 
class LmsController{
    public static function index(){
        return db()->query('SELECT * FROM subjects');
    }

    public static function count_course($id){
        return db()->fetch('SELECT COUNT(id) AS courses FROM course WHERE sid = ?', $id);
    }
    
    public static function count_my(){
        return db()->fetch('SELECT COUNT(id) AS courses FROM course WHERE `uid` = ?', $_SESSION['id']);
    }

    public static function my_course(){
        return db()->query('SELECT * FROM course WHERE `uid` = ?', $_SESSION['id']);
    }

    public static function create(){
        
        $cover  = json_encode([
            'cover'  => '/' . FileUploader::upload($file = 'cover', $dir = 'course/'),
            'banner' => '/' . FileUploader::upload($file = 'banner', $dir = 'course/')
        ], JSON_UNESCAPED_SLASHES);

        $query = db()->query( 'INSERT INTO course',[
            'uid'   => $_SESSION['id'],
            'title' => mysqli_real_escape_string(conn(), $_POST['name']),
            'desc'  => mysqli_real_escape_string(conn(), $_POST['description']),
            'sid'   => mysqli_real_escape_string(conn(), $_POST['subject']),
            'cid'   => mysqli_real_escape_string(conn(), $_POST['class']),
            'tags'  => mysqli_real_escape_string(conn(), $_POST['tags']),
            'cover' => $cover,
        ]);

        if($query): echo 'success'; else: echo 'failed'; endif;
    }

    public static function update(){

    }

    public static function delete(){

    }

    public static function view(){

    }
}