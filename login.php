<?php
$data=$_POST["data"];
$user=explode(";", $data) [0];
$password=explode(";", $data) [1];
for ($x = 1; $x > 0; $x+=1) {
    if ($x==1) {
        $user2=$user;
    }else{
        $user2=$user.$x;
    }
    echo $x;
   if (is_file("users/".$user2.".txt")) {
    $file=fopen("users/".$user2.".txt", "r");
    $filedata=fread($file,filesize("users/".$user2.".txt"));
    $password2=explode(";",$filedata) [1];
    fclose($file);
    if ($password==$password2) {
        echo "<script>top.postMessage('logged in;".$user2."','*')</script>";
        $x=(-1);
    }
    
}else{
    echo "<script>top.postMessage('nopass','*')</script>";
    $x=(-1);
}
} 


?>