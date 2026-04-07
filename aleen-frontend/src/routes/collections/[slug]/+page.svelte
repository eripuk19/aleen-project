<script>
  let { data } = $props();

  const collection = data.collection;
  const dresses = data.dresses ?? [];

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
  <section class="px-6 py-16 max-w-6xl mx-auto">
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

    <p class="text-lg leading-8 max-w-3xl mb-12">
      {description}
    </p>

    <h2 class="text-3xl font-semibold mb-8">Dresses in this Collection</h2>

    {#if dresses.length === 0}
      <p>No dresses found for this collection.</p>
    {:else}
      <div class="grid md:grid-cols-2 gap-8">
        {#each dresses as dress}
          <article class="border rounded-xl overflow-hidden shadow-sm">
            {#if dress.images?.[0]}
              <img
                src={`http://localhost:1337${dress.images[0].url}`}
                alt={dress.altText || dress.title}
                class="w-full h-80 object-cover"
              />
            {/if}

            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-3">{dress.title}</h3>

              <p class="text-sm leading-6 mb-4">
                {dress.shortDescription}
              </p>

              <p class="text-sm font-medium text-gray-600 mb-4">
                {dress.priceLabel}
              </p>

              <a
                href={`/dresses/${dress.slug}`}
                class="inline-block underline"
              >
                View Dress
              </a>
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </section>
{/if}