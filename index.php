<?php

$request = trim($_SERVER['REQUEST_URI'], '/'); // Remove the first '/'

if ($request == '') {
    $request = 'home';
}

$file = "pages/{$request}.php";

if (file_exists($file)) {
    include $file;
} else {
    include 'pages/errors/404.php';
}