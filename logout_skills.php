<?php

@include 'config.php';

session_start();
session_unset();
session_destroy();

header('location:soft-login.php');

?>