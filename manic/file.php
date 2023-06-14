
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

    $data = [
    
        "usage" => "$server_time-$file1_name",
        "apps"  => "$server_time-$file2_name",
        "docs"  => "$server_time-$file3_name",
        "client" => "$client_name"
    ];

    
    function conn(){

        $database = 'portal';
        $username = 'portal';
        $password = 'portal';
        $hostname = 'localhost';

        // connect to database
        $conn = new mysqli($hostname, $username, $password, $database);
        return $conn;
    }

    function insert_data($data){
        # data strucutre: all three files have same structure - DeviceName, Name, StartLocalTime, EndLocalTime, Duration
        # sample data: [{"DeviceName":"CAMARAC-N03VP2M","Name":"Active","StartLocalTime":"2023-06-10 06:49:32","EndLocalTime":"2023-06-10 06:53:31","Duration":3.22}, ... ]

        # database structure: all three tables have samestructure - DeviceName, Name, StartLocalTime, EndLocalTime, Duration
        # tables: manic_usage, manic_apps, manic_docs

        $usage_file = json_decode(file_get_contents($data['usage']));
        $apps_file = json_decode(file_get_contents($data['apps']));
        $docs_file = json_decode(file_get_contents($data['docs']));

        // replace device name with client name
        foreach($usage_file as $row){
            $DeviceName = $data['client'];
            $sql = "INSERT INTO manic_usage VALUES (DEFAULT '$DeviceName', '$row->Name', '$row->StartLocalTime', '$row->EndLocalTime', '$row->Duration'";
            
            mysqli_query(conn(), $sql);
        }

        foreach($apps_file as $row){
            $DeviceName = $data['client'];
            $sql = "INSERT INTO manic_apps VALUES (DEFAULT '$DeviceName', '$row->Name', '$row->StartLocalTime', '$row->EndLocalTime', '$row->Duration'";
            
            mysqli_query(conn(), $sql);
        }

        foreach($docs_file as $row){
            $DeviceName = $data['client'];
            $sql = "INSERT INTO manic_docs VALUES (DEFAULT '$DeviceName', '$row->Name', '$row->StartLocalTime', '$row->EndLocalTime', '$row->Duration'";
            
            mysqli_query(conn(), $sql);
        }        

    }

    insert_data($data);

    echo 'ok';
}


