<script lang="ts">


let dark_mode_symbol = "☀";
function toggleDarkMode() {
    const html = document.querySelector('html');
    if(!html) return;
    html.classList.toggle('dark') ? dark_mode_symbol = "☀" : dark_mode_symbol = "🌙";
}
</script>

<header class="flex items-center p-4 bg-gray-100 dark:bg-gray-700">
    <a href="/"><icon class="text-4xl select-none">👨‍💻</icon></a>
    <nav class="flex justify-center flex-grow">
        <ul class="text-xl">
            <li class="inline p-2"><a href="/">Home</a></li>
            <li class="inline p-2"><a href="/blog">Blog</a></li>
            <li class="inline p-2"><a href="/recommendations">Recommendations</a></li>
            <li class="inline p-2"><a href="/cv">CV</a></li>
        </ul>
    </nav>
    <button class="text-2xl" on:click={toggleDarkMode}>{ dark_mode_symbol }</button>
</header>

