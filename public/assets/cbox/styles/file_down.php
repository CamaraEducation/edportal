<?php

$data = "
    /assets/cbox/styles/006.png,
    /assets/cbox/styles/007.png,
    /assets/cbox/styles/008.png,
    /assets/cbox/styles/009.png,
    /assets/cbox/styles/010.png,
    /assets/cbox/styles/011.png,
    /assets/cbox/styles/012.png,
    /assets/cbox/styles/013.png,
    /assets/cbox/styles/014.png,
    /assets/cbox/styles/015.png,
    /assets/cbox/styles/016.png,
    /assets/cbox/styles/017.png,
    /assets/cbox/styles/018.png,
    /assets/cbox/styles/019.png,
    /assets/cbox/styles/020.png,
    /assets/cbox/styles/021.png,
    /assets/cbox/styles/022.png,
    /assets/cbox/styles/023.png,
    /assets/cbox/styles/024.png,
    /assets/cbox/styles/025.png,
    /assets/cbox/styles/026.png,
    /assets/cbox/styles/027.png,
    /assets/cbox/styles/028.png,
    /assets/cbox/styles/029.png,
    /assets/cbox/styles/030.png,
    /assets/cbox/styles/031.png,
    /assets/cbox/styles/032.png,
    /assets/cbox/styles/033.png,
    /assets/cbox/styles/034.png,
    /assets/cbox/styles/035.png,
    /assets/cbox/styles/036.png,
    /assets/cbox/styles/037.png,
    /assets/cbox/styles/038.png,
    /assets/cbox/styles/039.png,
    /assets/cbox/styles/040.png,
    /assets/cbox/styles/041.png,
    /assets/cbox/styles/042.png,
    /assets/cbox/styles/043.png,
    /assets/cbox/styles/044.png,
    /assets/cbox/styles/045.png,
    /assets/cbox/styles/046.png,
    /assets/cbox/styles/047.png,
    /assets/cbox/styles/048.png,
    /assets/cbox/styles/049.png,
    /assets/cbox/styles/050.png,
    /assets/cbox/styles/051.png,
    /assets/cbox/styles/052.png,
    /assets/cbox/styles/053.png,
    /assets/cbox/styles/054.png,
    /assets/cbox/styles/055.png,
    /assets/cbox/styles/056.png,
    /assets/cbox/styles/057.png,
    /assets/cbox/styles/058.png,
    /assets/cbox/styles/059.png,
    /assets/cbox/styles/060.png,
    /assets/cbox/styles/061.png,
    /assets/cbox/styles/062.png,
    /assets/cbox/styles/063.png,
    /assets/cbox/styles/064.png,
    /assets/cbox/styles/065.png,
    /assets/cbox/styles/066.png,
    /assets/cbox/styles/067.png,
    /assets/cbox/styles/068.png,
    /assets/cbox/styles/069.png,
    /assets/cbox/styles/070.png,
    /assets/cbox/styles/071.png,
    /assets/cbox/styles/072.png,
    /assets/cbox/styles/073.png,
    /assets/cbox/styles/074.png,
    /assets/cbox/styles/075.png,
    /assets/cbox/styles/076.png,
    /assets/cbox/styles/077.png,
    /assets/cbox/styles/078.png,
    /assets/cbox/styles/079.png,
    /assets/cbox/styles/080.png,
    /assets/cbox/styles/081.png,
    /assets/cbox/styles/082.png,
    /assets/cbox/styles/083.png,
    /assets/cbox/styles/084.png,
    /assets/cbox/styles/085.png,
    /assets/cbox/styles/086.png,
    /assets/cbox/styles/087.png,
    /assets/cbox/styles/088.png,
    /assets/cbox/styles/089.png,
    /assets/cbox/styles/090.png,
    /assets/cbox/styles/091.png,
    /assets/cbox/styles/092.png,
    /assets/cbox/styles/093.png
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
