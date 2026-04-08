<script>
  let { data } = $props();

  const homepage = data.homepage;
  const collections = data.collections ?? [];
  const featuredDresses = data.featuredDresses ?? [];

  const featuredText =
    homepage?.featuredText?.[0]?.children?.[0]?.text ?? '';
</script>

<svelte:head>
  <title>{homepage?.seoTitle || 'Aleen Sabbagh'}</title>
  <meta
    name="description"
    content={homepage?.seoDescription || 'Luxury fashion dresses'}
  />
</svelte:head>

{#if data.error}
  <p class="p-8 text-center">{data.error}</p>
{:else if homepage}
  <section class="lux-section">
    <div class="lux-container grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p class="lux-script text-5xl text-[var(--gold)] mb-3">Haute Elegance</p>
        <p class="lux-eyebrow mb-5">Luxury Fashion House</p>

        <h1 class="text-6xl md:text-7xl leading-[0.95] font-semibold mb-6">
          {homepage.heroTitle}
        </h1>

        <p class="text-lg md:text-xl lux-muted max-w-xl mb-8 leading-8">
          {homepage.heroSubtitle}
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="/collections" class="lux-button lux-button-primary">
            Explore Collections
          </a>
          <a href="/contact" class="lux-button lux-button-secondary">
            Book an Inquiry
          </a>
        </div>
      </div>

      <div class="relative">
        {#if homepage.heroImage}
          <img
            src={`http://localhost:1337${homepage.heroImage.url}`}
            alt={homepage.heroImage.alternativeText || homepage.heroTitle}
            class="w-full rounded-[2rem] shadow-[0_20px_50px_rgba(31,26,23,0.10)]"
          />
        {/if}
      </div>
    </div>
  </section>

  <section class="lux-section pt-0">
    <div class="lux-container">
      <div class="max-w-3xl">
        <p class="lux-script text-4xl text-[var(--gold)] mb-2">The Brand</p>
        <h2 class="text-5xl font-semibold mb-4">Refined femininity, timeless luxury</h2>
        <div class="lux-divider mb-6"></div>
        <p class="text-lg leading-9 lux-muted">
          {featuredText}
        </p>
      </div>
    </div>
  </section>

  <section class="lux-section">
    <div class="lux-container">
      <div class="flex items-end justify-between gap-6 mb-10">
        <div>
          <p class="lux-script text-4xl text-[var(--gold)] mb-2">Curated</p>
          <h2 class="text-5xl font-semibold">Featured Collections</h2>
        </div>
        <a href="/collections" class="lux-muted underline">View all</a>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each collections as collection}
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
              <h3 class="text-3xl font-semibold mb-3">{collection.title}</h3>
              <p class="text-sm leading-7 lux-muted">
                {collection.description?.[0]?.children?.[0]?.text ?? ''}
              </p>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <section class="lux-section">
    <div class="lux-container">
      <div class="mb-10">
        <p class="lux-script text-4xl text-[var(--gold)] mb-2">Signature Pieces</p>
        <h2 class="text-5xl font-semibold">Featured Dresses</h2>
      </div>

      {#if featuredDresses.length === 0}
        <p>No featured dresses found.</p>
      {:else}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each featuredDresses as dress}
            <a
              href={`/dresses/${dress.slug}`}
              class="lux-card group"
            >
              {#if dress.images?.[0]}
                <img
                  src={`http://localhost:1337${dress.images[0].url}`}
                  alt={dress.altText || dress.title}
                  class="w-full h-96 object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              {/if}

              <div class="p-6">
                <h3 class="text-3xl font-semibold mb-2">{dress.title}</h3>
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

  <section class="lux-section">
    <div class="lux-container">
      <div class="rounded-[2rem] px-8 py-16 md:px-16 text-center bg-[linear-gradient(135deg,#fffaf5_0%,#efe7dc_100%)] border border-[rgba(31,26,23,0.06)]">
        <p class="lux-script text-5xl text-[var(--gold)] mb-3">By Appointment</p>
        <h2 class="text-5xl font-semibold mb-4">Discover timeless couture-inspired elegance</h2>
        <p class="text-lg lux-muted max-w-2xl mx-auto mb-8 leading-8">
          Explore the world of Aleen Sabbagh and inquire about luxury dresses designed with detail, softness, and modern sophistication.
        </p>
        <a
          href="/contact"
          class="lux-button lux-button-primary"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
{:else}
  <p class="p-8 text-center">No homepage data found.</p>
{/if}