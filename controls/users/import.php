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
                        //print_r($Row);
                        //$username = Row[0], $fname = Row[1], $lname = Row[2], $gender = Row[3], $year = Row[4], $class = Row[5]
                        
                        $pass = 123456; $role = 6;
                        $username   = mysqli_real_escape_string(conn(), $Row[0]);
                        $fname      = mysqli_real_escape_string(conn(), $Row[1]);
                        $lname      = mysqli_real_escape_string(conn(), $Row[2]);
                        $gender     = mysqli_real_escape_string(conn(), $Row[3]);
                        $year       = mysqli_real_escape_string(conn(), $Row[4]);
                        $class      = mysqli_real_escape_string(conn(), $Row[5]);


                        /*
            
                        if (!empty($class_id) || !empty($term_id) || !empty($student_id)|| !empty($form) || !empty($stream)) {
                            $query = "insert into class_students(class_id,term_id,student_id,form,stream) values ('".$class_id."','".$term_id."','".$student_id."','".$form."','".$stream."')";
                            $result = mysqli_query(conn(), $query);
                        
                            if (!empty($result)) {
                                echo "<script>
                                        alert (\"students have been succesfully uploaded\");
                                        //window.location.pathname = \"/include/projects.php\"
                                    </script>";
                                
                            } else {
                                echo "<script>
                                        alert (\"Excell file failed to be uploaded\");
                                        //window.location.pathname = \"/include/projects.php\"
                                    </script>";
                            }
                        } */
                    } 
                
                }
            }
            else
            {
                    return "Invalid File Type. Upload Excel File.";
            }
        }
    }
}
?>