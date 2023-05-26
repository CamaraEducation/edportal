
<?php

$client_name = $_POST['client'];
$server_time = $_SERVER['REQUEST_TIME'];

if (isset($_FILES['file1']) && isset($_FILES['file2']) && isset($_FILES['file3'])) {
    // File 1
    $file1 = $_FILES['file1'];
    $file1_name = $file1['name'];
    $file1_tmp_name = $file1['tmp_name'];

    // File 2
    $file2 = $_FILES['file2'];
    $file2_name = $file2['name'];
    $file2_tmp_name = $file2['tmp_name'];

    // File 3
    $file3 = $_FILES['file3'];
    $file3_name = $file3['name'];
    $file3_tmp_name = $file3['tmp_name'];

    // move the files to the desired location
    move_uploaded_file($file1_tmp_name, 'upload/data/files/'.$server_time."-$file1_name");
    move_uploaded_file($file2_tmp_name, 'upload/data/files/'.$server_time."-$file2_name");
    move_uploaded_file($file3_tmp_name, 'upload/data/files/'.$server_time."-$file3_name");

    $data = <<<DATA
    {
        "usage" : "$server_time-$file1_name",
        "apps"  : "$server_time-$file2_name",
        "docs"  : "$server_time-$file3_name",
        "client" : "$client_name"
    }

DATA;

    $job_file = "data/jobs/$server_time-job.json";
    file_put_contents("upload/$job_file", $data);

    // insert job to database
    $query = "INSERT INTO manic_jobs VALUES (DEFAULT, '$job_file', 'pending')";
    if(mysqli_query(conn(), $query)) echo 'ok';
}

function conn(){

    $database = 'portal';
    $username = 'portal';
    $password = 'portal';
    $hostname = 'localhost';

    // connect to database
    $conn = new mysqli($hostname, $username, $password, $database);
    return $conn;
}


