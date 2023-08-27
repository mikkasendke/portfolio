<script lang="ts">
	import { onMount } from "svelte";

onMount(() => {
    const html = document.querySelector('html');
    if(!html) return;
    const darkmode = localStorage.getItem('darkmode');
    if(darkmode === 'true') {
        toggleDarkMode();
    }
})

let darkmodeSymbol = '🌙';
function toggleDarkMode() {
    const html = document.querySelector('html');
    if(!html) return;
    html.classList.toggle('dark');
    if(html.classList.contains('dark')) {
        darkmodeSymbol = '☀️';
        localStorage.setItem('darkmode', 'true');
    } else {
        darkmodeSymbol = '🌙';
        localStorage.setItem('darkmode', 'false');
    }
}
</script>

<header class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 text-black dark:text-white">
    <a href="https://www.github.com/mikkasendke"><icon class="text-4xl select-none">👨‍💻</icon></a>
    <nav class="flex justify-center flex-grow">
        <ul class="text-xl">
            <li class="inline p-2"><a href="/">Home</a></li>
            <li class="inline p-2"><a href="/blog">Blog</a></li>
            <li class="inline p-2"><a href="/cv">CV</a></li>
        </ul>
    </nav>
    <button class="text-2xl" on:click={toggleDarkMode}>{darkmodeSymbol}</button>
</header>

