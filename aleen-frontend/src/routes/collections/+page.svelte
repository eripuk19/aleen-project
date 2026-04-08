<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>Collections | Aleen Sabbagh</title>
  <meta
    name="description"
    content="Explore the luxury dress collections by Aleen Sabbagh."
  />
</svelte:head>

<section class="lux-section">
  <div class="lux-container">
    <div class="text-center mb-14">
      <p class="lux-script text-5xl text-[var(--gold)] mb-3">Collections</p>
      <h1 class="text-5xl md:text-6xl font-semibold mb-4">The World of Aleen Sabbagh</h1>
      <p class="lux-muted text-lg max-w-2xl mx-auto leading-8">
        Discover curated collections shaped by elegance, femininity, and couture-inspired refinement.
      </p>
    </div>

    {#if data.error}
      <p class="text-center">{data.error}</p>
    {:else if data.collections.length === 0}
      <p class="text-center">No collections found.</p>
    {:else}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each data.collections as collection}
          <a
            href={`/collections/${collection.slug}`}
            class="lux-card group"
          >
            {#if collection.coverImage}
              <img
                src={`http://localhost:1337${collection.coverImage.url}`}
                alt={collection.title}
                class="w-full h-80 object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            {/if}

            <div class="p-6">
              <p class="lux-eyebrow mb-3">Luxury Collection</p>
              <h2 class="text-3xl font-semibold mb-3">
                {collection.title}
              </h2>

              <p class="text-sm leading-7 lux-muted">
                {collection.description?.[0]?.children?.[0]?.text ?? 'No description available.'}
              </p>
            </div>
          </a>
        {/each}
      </div>
    {/if}
  </div>
</section>