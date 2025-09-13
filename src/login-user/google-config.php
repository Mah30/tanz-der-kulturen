<?php
require_once '../vendor/autoload.php';

$client = new Google_Client();
$client->setClientId('32665327911-oau1trkq3av58pnlberie25t1sue1qdi.apps.googleusercontent.com');
$client->setClientSecret('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');
$client->setRedirectUri('http://localhost/iwalewa/login-user/google-callback.php');
$client->addScope("email");
$client->addScope("profile");
?>
