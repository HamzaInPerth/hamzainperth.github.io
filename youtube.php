<?php
header("Access-Control-Allow-Credentials: true");
header('Content-type: text/javascript');
$api_key = 'AIzaSyAddKSIoBbfCLH2ZI_M9oBnejfucKHbEsA';
$playlist_id =  'PLmveFxy1j5lG2HOgf3edAeF4NbjspgOHF';
$api_url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=25&playlistId='. $playlist_id . '&key=' . $api_key;
echo $content = file_get_contents($api_url, JSON_PRETTY_PRINT);