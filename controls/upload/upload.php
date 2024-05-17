<?php
class FileUploader{
    public static function upload($file='media', $dir=''){
        $target_dir = getcwd(). "/upload/$dir";
        $imageFileType = strtolower(pathinfo($_FILES[$file]["name"],PATHINFO_EXTENSION));
        $_FILES["media"]['name'] = round(microtime(true)) . rand(1111, 99999) . '.' . $imageFileType;
        $target_file = $target_dir . basename($_FILES["media"]["name"]); $uploadOk = 1;
        
        /*if(isset($target_dir)) {
            if($_FILES["media"]['type']=='image/'.$imageFileType or $_FILES["media"]['type']=='video/'.$imageFileType or $_FILES["media"]['type']=='image/jpeg') {
                $uploadOk = 1;
            } else {
                $uploadOk = 0;
            }
        }*/
        
        if ($uploadOk == 0) {
            echo "Wrong media format.";
        } else {
            if (move_uploaded_file($_FILES[$file]["tmp_name"], $target_file)) {
                return $target_file;
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        }
    }
}
?>