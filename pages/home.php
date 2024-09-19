<?php
    $title = "Domov";
    $description = "No jak by ňe";
    ob_start();
?>

<section class="container gap-16 grid grid-cols-12 items-start">
    <div class="investments-section p-24 col-span-12 lg:col-span-8 rounded-16 bg-neutral-800">
        <header class="flex justify-between items-center">
            <h5 class="font-semibold">Investície</h5>
            <p class="text-sm">Celková hodnota: <strong class="investments-section-sum">0€</strong></p>
        </header>

        <ul class="investments-section-list max-h-[480px] lg:max-h-none overflow-auto lg:overflow-visible my-24 space-y-8"></ul>

        <footer>
            <button class="investments-form-modal-button button button-primary w-full">Vytvoriť záznam</button>
        </footer>
    </div>

    <aside class="p-24 col-span-12 lg:col-span-4 lg:sticky lg:top-16 rounded-16 bg-neutral-800">
        <header class="mb-24">
            <h5 class="font-semibold">Graf</h5>
        </header>

        <div>
            <canvas id="investments-chart"></canvas>
        </div>
    </aside>
</section>

<section class="investments-form-modal p-24 hidden justify-center items-center fixed inset-0 bg-neutral-800/90">
    <form class="investments-form space-y-8 max-w-[1000px]">
        <input class="input" type="text" name="name" placeholder="Názov" required>
        <input class="input" type="number" name="value" placeholder="Suma (€)" min="0" required>
        <button class="button button-primary mt-16 w-full" type="submit">Submit</button>
    </form>
</section>

<?php
    $content = ob_get_clean();
    include 'layouts/default.php';
?>
