<script lang="ts">

let isDarkModeEnabled = false;
function toggleDarkMode() {
    const html = document.querySelector('html');
    if(!html) return;
    isDarkModeEnabled = html.classList.toggle('dark');
}
</script>

<header class="flex items-center p-4 bg-gray-100 dark:bg-gray-700">
    <a href="/" class="text-xl transform transition-color duration-100 hover:text-blue-700 hover:dark:text-blue-300">MS</a>

    <nav class="flex justify-center flex-grow">
        <ul class="text-xl">
            <li class="inline p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600"><a href="/">Home</a></li>
            <li class="inline p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600"><a href="/blog">Blog</a></li>
            <li class="inline p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600"><a href="/recommendations">Recommendations</a></li>
            <li class="inline p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600"><a href="/cv">CV</a></li>
        </ul>
    </nav>
    <button class="text-2xl" on:click={toggleDarkMode}>
        {#if isDarkModeEnabled}
            <i class="fa-solid fa-circle-half-stroke fa-rotate-180"></i>
        {:else}
            <i class="fa-solid fa-circle-half-stroke"></i>
        {/if}
    </button>
</header>

