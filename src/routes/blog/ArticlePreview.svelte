<script lang="ts">
export let articlePreview: ArticlePreviewData;
</script>

<section class="w-[50vh] p-2 transform transition-transform hover:scale-110">
<a href="/">
    <div class="bild bg-gray-400 w-full rounded-xl">
        <img class="rounded-xl" src={articlePreview.image} alt={articlePreview.alt} />
    </div>
    <div class="text break-words p-2">
        <h2 class="text-2xl font-bold">{articlePreview.title}</h2>
        <p class="text-lg">{articlePreview.description}</p>
    </div>
</a>
</section>
