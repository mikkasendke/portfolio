<script lang="ts">
	import ArticlePreview from "./ArticlePreview.svelte";
    type ArticlePreview_t = {
        title: string;
        description: string;
        image: string;
        alt: string;
    }
    let articlePreviews: ArticlePreview_t[] = [
        {
            title: "Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet",
            image: "https://picsum.photos/1920/1080",
            alt: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet",
            image: "https://picsum.photos/1920/1080",
            alt: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet",
            image: "https://picsum.photos/1920/1080",
            alt: "Lorem ipsum dolor sit amet"
        }
    ];

</script>

<section class="px-[20vh] py-4">
    <h1 class="text-6xl">Blog posts</h1>
    <br />
    <div class="p-5">
        <div class="grid grid-cols-2">
            {#each articlePreviews as articlePreview}
                <ArticlePreview articlePreview={articlePreview} />
            {/each}
        </div>
    </div>
</section>

