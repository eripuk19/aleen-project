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
  <section class="lux-section pb-8">
    <div class="lux-container">
      {#if collection.coverImage}
        <img
          src={`http://localhost:1337${collection.coverImage.url}`}
          alt={collection.title}
          class="w-full rounded-[2rem] mb-10 shadow-[0_20px_50px_rgba(31,26,23,0.08)]"
        />
      {/if}

      <div class="max-w-3xl mb-14">
        <p class="lux-script text-5xl text-[var(--gold)] mb-2">Collection</p>
        <h1 class="text-5xl md:text-6xl font-semibold mb-4">
          {collection.title}
        </h1>
        <div class="lux-divider mb-6"></div>
        <p class="text-lg leading-9 lux-muted">
          {description}
        </p>
      </div>
    </div>
  </section>

  <section class="lux-section pt-0">
    <div class="lux-container">
      <div class="mb-10">
        <p class="lux-script text-4xl text-[var(--gold)] mb-2">Signature Pieces</p>
        <h2 class="text-4xl md:text-5xl font-semibold">Dresses in this Collection</h2>
      </div>

      {#if dresses.length === 0}
        <p>No dresses found for this collection.</p>
      {:else}
        <div class="grid md:grid-cols-2 gap-8">
          {#each dresses as dress}
            <a href={`/dresses/${dress.slug}`} class="lux-card group">
              {#if dress.images?.[0]}
                <img
                  src={`http://localhost:1337${dress.images[0].url}`}
                  alt={dress.altText || dress.title}
                  class="w-full h-[28rem] object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              {/if}

              <div class="p-6">
                <h3 class="text-3xl font-semibold mb-3">{dress.title}</h3>

                <p class="text-sm leading-7 lux-muted mb-4">
                  {dress.shortDescription}
                </p>

                <p class="text-sm tracking-[0.15em] uppercase text-[var(--gold)]">
                  {dress.priceLabel}
                </p>
              </div>
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </section>
{/if}