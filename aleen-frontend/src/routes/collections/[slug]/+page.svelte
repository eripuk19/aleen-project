<script>
  let { data } = $props();

  const collection = data.collection;
  const description =
    collection?.description?.[0]?.children?.[0]?.text ?? '';
</script>

<svelte:head>
  <title>{collection?.seoTitle || collection?.title || 'Collection'}</title>
  <meta
    name="description"
    content={collection?.seoDescription || 'Luxury fashion collection'}
  />
</svelte:head>

{#if data.error}
  <p class="p-8 text-center">{data.error}</p>
{:else if !collection}
  <p class="p-8 text-center">Collection not found.</p>
{:else}
  <section class="px-6 py-16 max-w-5xl mx-auto">
    {#if collection.coverImage}
      <img
        src={`http://localhost:1337${collection.coverImage.url}`}
        alt={collection.title}
        class="w-full rounded-xl mb-8"
      />
    {/if}

    <h1 class="text-4xl md:text-5xl font-bold mb-6">
      {collection.title}
    </h1>

    <p class="text-lg leading-8 max-w-3xl">
      {description}
    </p>
  </section>
{/if}