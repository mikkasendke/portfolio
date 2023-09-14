type Article = {
    title: string,
    description: string,
    image: Image,
    content: string,
    release_date: Date,
    tags: string[],
};

type ArticlePreviewData = {
    title: string,
    description: string,
    tags: string[],
    image: Image,
    alt: string,
};

type Image = {
    src: string,
    alt: string,
};
