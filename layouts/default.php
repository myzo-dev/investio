<?php 
    $app_name = 'Investio';
    $meta_title = "{$title} | {$app_name}";
    $meta_description = $description;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo $meta_title ?></title>
    <meta name="title" content="<?php echo $meta_title ?>" />
    <meta name="description" content="<?php echo $meta_description ?>" />
    <meta property="og:title" content="<?php echo $meta_title ?>" />
    <meta property="og:description" content="<?php echo $meta_description ?>" />
    <meta property="twitter:title" content="<?php echo $meta_title ?>" />
    <meta property="twitter:description" content="<?php echo $meta_description ?>" />
    <link rel="stylesheet" href="../assets/css/app.css">
    <script src="../assets/js/app.js" defer></script>
</head>
<body>
    <header>
        <?php require_once('partials/layout/navbar.php') ?>
    </header>

    <main>
        <?php echo $content ?>
    </main>
    
    <footer>
        <?php require_once('partials/layout/footer.php') ?>
    </footer>
</body>
</html>