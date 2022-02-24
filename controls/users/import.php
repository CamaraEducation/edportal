<?php
class UsersImport{
    public static function students(){
        if (isset($_POST["import"])){
            $allowedFileType = ['application/vnd.ms-excel','text/xls','text/xlsx','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
        
            if(in_array($_FILES["file"]["type"],$allowedFileType)){

                $targetPath = FileUploader::upload($file = 'file', $dir = 'sheet/source/' );
                //move_uploaded_file($_FILES['file']['tmp_name'], $targetPath);
                
                $Reader = new SpreadsheetReader($targetPath);
                
                $sheetCount = count($Reader->sheets());
                for($i=0;$i<$sheetCount;$i++){
                    
                    $Reader->ChangeSheet($i);
                    
                    foreach ($Reader as $Row){

                        if($i > 0 or $Row[0] == 'REG ID'){continue;}
                        
                        $username   = mysqli_real_escape_string(conn(), $Row[0]);
                        $fname      = mysqli_real_escape_string(conn(), $Row[1]);
                        $lname      = mysqli_real_escape_string(conn(), $Row[2]);
                        $gender     = mysqli_real_escape_string(conn(), $Row[3]);
                        $year       = mysqli_real_escape_string(conn(), $Row[4]);
                        $class      = mysqli_real_escape_string(conn(), $Row[5]);
            
                        if (!empty($username) and !empty($fname) and !empty($lname) and !empty($gender) and !empty($year) and !empty($class)) {
                            $query = "INSERT INTO users (id, username, first_name, last_name, user_gender, user_class, user_age) VALUES (DEFAULT, '$username', '$fname', '$lname', '$gender', '$class', '$year')";
                            if(mysqli_query(conn(), $query)){
                                header("Location: /users/student" );
                            }else{
                                echo 'error occured';
                            }
                        }else{
                            echo "field missing";
                        }
                    } 
                
                }
            }else {
                return "Invalid File Type. Upload Excel File.";
            }
        }
    }
}
?>