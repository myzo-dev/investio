<?php
    $title = "Kontakt";
    $description = "No jak by ňe";
    ob_start();
?>

<section>
    <div class="section-offset container">
        <h2>Kontakt</h2>
    </div>
</section>

<?php
    $content = ob_get_clean();
    include 'layouts/default.php';
?>
