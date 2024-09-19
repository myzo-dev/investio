<?php
    $title = "404";
    $description = "404";
    ob_start();
?>

<section class="container section-offset">
    <h2>404</h2>
</section>

<?php
    $content = ob_get_clean();
    include 'layouts/default.php';
?>
