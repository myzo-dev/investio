<?php
    $title = "Domov";
    $description = "No jak by ňe";
    ob_start();
?>

<section class="container gap-16 grid grid-cols-12">
    <form action="">
        <input type="text">
    </form>
</section>

<?php
    $content = ob_get_clean();
    include 'layouts/default.php';
?>
