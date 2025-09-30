<script lang="ts">
  export let data;
  const { posts } = data;
</script>

<svelte:head>
  <title>Blog | Martin Melody</title>
  <meta
    name="description"
    content="Browse longer-form writing on software projects, learning, and career reflections."
  />
</svelte:head>

<section class="mx-auto w-[80%] md:w-[60%] lg:w-[50%] py-10 md:py-16">
  <h1 class="text-2xl md:text-3xl font-semibold text-foreground mb-6">Blog</h1>
  <p class="text-muted-foreground text-base md:text-lg mb-8">
    Articles and notes on what I\'m learning, building, and thinking about.
  </p>

  <div class="flex flex-col gap-6">
    {#each posts as post}
      <a
        href={`/blog/${post.slug}`}
        class="block p-5 border rounded-lg border-border hover:border-primary transition-colors"
      >
        <p class="text-xs md:text-sm text-muted-foreground">
          {new Date(post.published).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <h2 class="text-xl md:text-2xl font-semibold text-foreground mt-1">
          {post.title}
        </h2>
        <p class="text-sm md:text-base text-muted-foreground mt-2">
          {post.summary}
        </p>
        <span class="mt-3 inline-block text-sm text-primary">Read more →</span>
      </a>
    {/each}
  </div>
</section>
