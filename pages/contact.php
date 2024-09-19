<?php
    $title = "Kontakt";
    $description = "Kontakt";
    ob_start();
?>

<section class="container section-offset">
    <h2>Čoskoro</h2>
</section>

<?php
    $content = ob_get_clean();
    include 'layouts/default.php';
?>
