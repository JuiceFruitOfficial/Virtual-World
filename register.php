<?php
$data=$_POST["data"];
$user=explode(";", $data) [0];
for ($x = 1; $x > 0; $x+=1) {
    if ($x==1) {
        $user2=$user;
    }else{
        $user2=$user.$x;
    }
    echo $x;
   if (is_file("users/".$user2.".txt")==false) {
    $file=fopen("users/".$user2.".txt", "w");
    fwrite($file, $data);
    fclose($file);
    $x=(-1);
}
} 


?>