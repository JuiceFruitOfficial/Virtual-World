
<?php
$name=$_POST["projectname"];
$target_dir = "uploads/".$name."/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$description=$_POST["desc"];
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
if (is_dir($target_dir)==false) {
  mkdir($target_dir);
}


// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}

$f = fopen($target_dir."description.html", "w");
fwrite($f, $description);
fclose($f);


// Allow certain file formats
if($imageFileType != "html" && $imageFileType != "js" && $imageFileType != "css"
&& $imageFileType != "php" && $imageFileType != "zip" && $imageFileType != "rar") {
  echo "Sorry, only HTML, CSS, PHP, JavaScript (JS), zip & rar files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
      if ($imageFileType=="php") {
          rename($target_dir.basename( $_FILES["fileToUpload"]["name"]), $target_dir.str_replace(".php", "(php).txt", basename( $_FILES["fileToUpload"]["name"])));
      }
    echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}
?>
