<?php

header("Content-type:application/json");
$human = $_POST["words"];
$data = array("query" => $human, "lang" => "en","sessionId"=>"1234567890");                                                                    
$data_string = json_encode($data); 


$ch = curl_init();

curl_setopt($ch, CURLOPT_URL,            "https://api.api.ai/v1/query?v=20150910" );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt($ch, CURLOPT_POST,           1 );
curl_setopt($ch, CURLOPT_POSTFIELDS,     $data_string); 
curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Authorization:Bearer 53f504474b194e0d99a57ddfbd68654c','Content-Type:application/json')); 

echo $result=curl_exec ($ch);

?>