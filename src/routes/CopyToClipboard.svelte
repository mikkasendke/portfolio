<script lang="ts">
import { fade } from "svelte/transition";
export let text: string;
let copied = false;
const copy = () => {
    navigator.clipboard.writeText(text);
    copied = true;
}
</script>

 
<button on:click={copy} class="flex flex-row gap-3 px-5 py-2 text-xl rounded-md border cursor-pointer border-[#bbbbb9] hover:bg-[#c9c9dd] bg-[#e9e9ff] dark:hover:bg-[#405070] dark:border-[#7070c0] dark:bg-[#203050]">
    <div>{text}</div>
    <div>|</div>
    <div>
    {#if copied}
        <i transition:fade={{ delay: 250, duration: 300 }} class="fa-solid fa-check"></i>
    {:else}
        <i class="fa-regular fa-copy"></i>
    {/if}
    </div>
</button>
