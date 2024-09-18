<?php
    $title = "Domov";
    $description = "No jak by ňe";
    ob_start();
?>

<section class="container gap-16 grid grid-cols-12 items-start">
    <div class="investments-section p-24 col-span-8 rounded-16 bg-neutral-800">
        <header class="flex justify-between items-center">
            <h5 class="font-semibold">Investície</h5>
            <p>Celková hodnota: <strong class="investments-section-sum">0€</strong></p>
        </header>

        <ul class="investments-section-list my-24 space-y-8"></ul>

        <footer>
            <button class="investments-form-modal-button button button-primary w-full">Vytvoriť záznam</button>
        </footer>
    </div>

    <aside class="p-32 col-span-4 rounded-16 bg-neutral-800">
        <header class="mb-24">
            <h5 class="font-semibold">Graf</h5>
        </header>
    </aside>
</section>

<section class="investments-form-modal hidden justify-center items-center fixed inset-0 bg-neutral-800/85">
    <form class="investments-form space-y-8 max-w-[1000px]">
        <input class="input" type="text" name="name" placeholder="Názov" required>
        <input class="input" type="number" name="value" placeholder="Suma (€)" required>
        <button class="button button-primary mt-16 w-full" type="submit">Submit</button>
    </form>
</section>

<?php
    $content = ob_get_clean();
    include 'layouts/default.php';
?>
