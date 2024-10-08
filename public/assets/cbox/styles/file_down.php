<?php

$data = "
https://demo.innovastudio.com/assets/styles/006.png,
https://demo.innovastudio.com/assets/styles/007.png,
https://demo.innovastudio.com/assets/styles/008.png,
https://demo.innovastudio.com/assets/styles/009.png,
https://demo.innovastudio.com/assets/styles/010.png,
https://demo.innovastudio.com/assets/styles/011.png,
https://demo.innovastudio.com/assets/styles/012.png,
https://demo.innovastudio.com/assets/styles/013.png,
https://demo.innovastudio.com/assets/styles/014.png,
https://demo.innovastudio.com/assets/styles/015.png,
https://demo.innovastudio.com/assets/styles/016.png,
https://demo.innovastudio.com/assets/styles/017.png,
https://demo.innovastudio.com/assets/styles/018.png,
https://demo.innovastudio.com/assets/styles/019.png,
https://demo.innovastudio.com/assets/styles/020.png,
https://demo.innovastudio.com/assets/styles/021.png,
https://demo.innovastudio.com/assets/styles/022.png,
https://demo.innovastudio.com/assets/styles/023.png,
https://demo.innovastudio.com/assets/styles/024.png,
https://demo.innovastudio.com/assets/styles/025.png,
https://demo.innovastudio.com/assets/styles/026.png,
https://demo.innovastudio.com/assets/styles/027.png,
https://demo.innovastudio.com/assets/styles/028.png,
https://demo.innovastudio.com/assets/styles/029.png,
https://demo.innovastudio.com/assets/styles/030.png,
https://demo.innovastudio.com/assets/styles/031.png,
https://demo.innovastudio.com/assets/styles/032.png,
https://demo.innovastudio.com/assets/styles/033.png,
https://demo.innovastudio.com/assets/styles/034.png,
https://demo.innovastudio.com/assets/styles/035.png,
https://demo.innovastudio.com/assets/styles/036.png,
https://demo.innovastudio.com/assets/styles/037.png,
https://demo.innovastudio.com/assets/styles/038.png,
https://demo.innovastudio.com/assets/styles/039.png,
https://demo.innovastudio.com/assets/styles/040.png,
https://demo.innovastudio.com/assets/styles/041.png,
https://demo.innovastudio.com/assets/styles/042.png,
https://demo.innovastudio.com/assets/styles/043.png,
https://demo.innovastudio.com/assets/styles/044.png,
https://demo.innovastudio.com/assets/styles/045.png,
https://demo.innovastudio.com/assets/styles/046.png,
https://demo.innovastudio.com/assets/styles/047.png,
https://demo.innovastudio.com/assets/styles/048.png,
https://demo.innovastudio.com/assets/styles/049.png,
https://demo.innovastudio.com/assets/styles/050.png,
https://demo.innovastudio.com/assets/styles/051.png,
https://demo.innovastudio.com/assets/styles/052.png,
https://demo.innovastudio.com/assets/styles/053.png,
https://demo.innovastudio.com/assets/styles/054.png,
https://demo.innovastudio.com/assets/styles/055.png,
https://demo.innovastudio.com/assets/styles/056.png,
https://demo.innovastudio.com/assets/styles/057.png,
https://demo.innovastudio.com/assets/styles/058.png,
https://demo.innovastudio.com/assets/styles/059.png,
https://demo.innovastudio.com/assets/styles/060.png,
https://demo.innovastudio.com/assets/styles/061.png,
https://demo.innovastudio.com/assets/styles/062.png,
https://demo.innovastudio.com/assets/styles/063.png,
https://demo.innovastudio.com/assets/styles/064.png,
https://demo.innovastudio.com/assets/styles/065.png,
https://demo.innovastudio.com/assets/styles/066.png,
https://demo.innovastudio.com/assets/styles/067.png,
https://demo.innovastudio.com/assets/styles/068.png,
https://demo.innovastudio.com/assets/styles/069.png,
https://demo.innovastudio.com/assets/styles/070.png,
https://demo.innovastudio.com/assets/styles/071.png,
https://demo.innovastudio.com/assets/styles/072.png,
https://demo.innovastudio.com/assets/styles/073.png,
https://demo.innovastudio.com/assets/styles/074.png,
https://demo.innovastudio.com/assets/styles/075.png,
https://demo.innovastudio.com/assets/styles/076.png,
https://demo.innovastudio.com/assets/styles/077.png,
https://demo.innovastudio.com/assets/styles/078.png,
https://demo.innovastudio.com/assets/styles/079.png,
https://demo.innovastudio.com/assets/styles/080.png,
https://demo.innovastudio.com/assets/styles/081.png,
https://demo.innovastudio.com/assets/styles/082.png,
https://demo.innovastudio.com/assets/styles/083.png,
https://demo.innovastudio.com/assets/styles/084.png,
https://demo.innovastudio.com/assets/styles/085.png,
https://demo.innovastudio.com/assets/styles/086.png,
https://demo.innovastudio.com/assets/styles/087.png,
https://demo.innovastudio.com/assets/styles/088.png,
https://demo.innovastudio.com/assets/styles/089.png,
https://demo.innovastudio.com/assets/styles/090.png,
https://demo.innovastudio.com/assets/styles/091.png,
https://demo.innovastudio.com/assets/styles/092.png,
https://demo.innovastudio.com/assets/styles/093.png
";



$fileUrls = explode(",", $data);

$localDirectory = '';

foreach ($fileUrls as $fileUrl) {
    // Get the filename from the URL
    $filename = basename($fileUrl);
    $localFilePath = $localDirectory . $filename;

    // Open the remote file
    $remoteFile = fopen($fileUrl, 'rb');

    if ($remoteFile === false) {
        echo 'Failed to open remote file: ' . $fileUrl . PHP_EOL;
        continue;
    }

    // Open the local file for writing
    $localFile = fopen($localFilePath, 'wb');

    if ($localFile === false) {
        echo 'Failed to open local file for writing: ' . $localFilePath . PHP_EOL;
        continue;
    }

    // Read the remote file and write it to the local file
    while (!feof($remoteFile)) {
        fwrite($localFile, fread($remoteFile, 1024 * 8), 1024 * 8);
    }

    // Close the file handles
    fclose($remoteFile);
    fclose($localFile);

    echo 'File downloaded successfully: ' . $fileUrl . PHP_EOL;
}
