<script>
import CopyToClipboard from "./CopyToClipboard.svelte";

let firstName = "Mikka"
setInterval(() => {
    firstName = "Mikka"
}, 1000);

</script>

<svelte:head>
	<title>Mikka Sendke</title>
	<meta name="description" content="Portfolio website" />
</svelte:head>

<section class="h-[50vh] flex flex-col justify-center items-center">
    <h1 class="text-6xl">{firstName} Sendke</h1>
    <h2 class="text-4xl p-5">Student at <a href="https://www.uni-hamburg.de" class="text-blue-700 dark:text-blue-300">UHH</a></h2>

    <br />
    <CopyToClipboard text="mikka-sendke.com"/>
    <br />

    <article class="">
        <h3 class="text-2xl flex justify-center"><strong>Find me on</strong></h3>
        <br />
        <ul class="text-5xl">
            <li class="inline p-5"><a href="https://github.com/mikkasendke"><icon class="fa-brands fa-github transform transition-transform hover:scale-110"></icon></a></li>
            <li class="inline p-5"><a href="https://www.youtube.com/@mikkasendke"><icon class="fa-brands fa-youtube transform transition-transform hover:scale-110"></icon></a></li>
            <li class="inline p-5"><a href="https://twitter.com/mikkasendke"><icon class="fa-brands fa-twitter transform transition-transform hover:scale-110"></icon></a></li>
            <li class="inline p-5"><a href="https://linkedin.com"><icon class="fa-brands fa-linkedin transform transition-transform hover:scale-110"></icon></a></li>
        </ul>
    </article>
</section>

<style>
</style>
