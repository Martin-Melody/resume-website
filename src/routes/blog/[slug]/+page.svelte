<script lang="ts">
  export let data;
  const { post } = data;
</script>

<svelte:head>
  <title>{post.title} | Blog</title>
  <meta name="description" content={post.summary} />
</svelte:head>

<article class="mx-auto w-[80%] md:w-[60%] lg:w-[50%] py-10 md:py-16 text-foreground">
  <p class="text-sm text-muted-foreground">
    {new Date(post.published).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </p>
  <h1 class="text-3xl md:text-4xl font-semibold mt-3">{post.title}</h1>
  <p class="text-lg md:text-xl text-muted-foreground mt-4">{post.summary}</p>

  <p class="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
    This is a placeholder article body. Replace it with your Markdown-rendered content or
    manually written HTML once you connect the blog to a real content source. You can keep this
    layout to provide a consistent reading experience while iterating on the content pipeline.
  </p>
</article>
