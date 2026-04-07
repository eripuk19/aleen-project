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
  <section class="px-6 py-16 max-w-6xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <p class="uppercase tracking-[0.3em] text-sm mb-4 text-gray-500">
          Luxury Fashion
        </p>

        <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">
          {homepage.heroTitle}
        </h1>

        <p class="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
          {homepage.heroSubtitle}
        </p>

        <div class="flex gap-4">
          <a
            href="/collections"
            class="px-6 py-3 bg-black text-white rounded-lg"
          >
            Explore Collections
          </a>

          <a
            href="/contact"
            class="px-6 py-3 border rounded-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div>
        {#if homepage.heroImage}
          <img
            src={`http://localhost:1337${homepage.heroImage.url}`}
            alt={homepage.heroImage.alternativeText || homepage.heroTitle}
            class="w-full rounded-2xl shadow-sm"
          />
        {/if}
      </div>
    </div>
  </section>

  <section class="px-6 py-16 max-w-6xl mx-auto">
    <div class="max-w-3xl">
      <h2 class="text-3xl md:text-4xl font-semibold mb-6">
        The Brand
      </h2>

      <p class="text-lg leading-8 text-gray-700">
        {featuredText}
      </p>
    </div>
  </section>

  <section class="px-6 py-16 max-w-6xl mx-auto">
    <div class="flex items-center justify-between mb-10">
      <h2 class="text-3xl md:text-4xl font-semibold">
        Featured Collections
      </h2>
      <a href="/collections" class="underline">View all</a>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each collections as collection}
        <a
          href={`/collections/${collection.slug}`}
          class="block border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
        >
          {#if collection.coverImage}
            <img
              src={`http://localhost:1337${collection.coverImage.url}`}
              alt={collection.title}
              class="w-full h-72 object-cover"
            />
          {/if}

          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3">{collection.title}</h3>
            <p class="text-sm leading-6 text-gray-700">
              {collection.description?.[0]?.children?.[0]?.text ?? ''}
            </p>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <section class="px-6 py-16 max-w-6xl mx-auto">
    <div class="flex items-center justify-between mb-10">
      <h2 class="text-3xl md:text-4xl font-semibold">
        Featured Dresses
      </h2>
    </div>

    {#if featuredDresses.length === 0}
      <p>No featured dresses found.</p>
    {:else}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each featuredDresses as dress}
          <a
            href={`/dresses/${dress.slug}`}
            class="block border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {#if dress.images?.[0]}
              <img
                src={`http://localhost:1337${dress.images[0].url}`}
                alt={dress.altText || dress.title}
                class="w-full h-80 object-cover"
              />
            {/if}

            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-3">{dress.title}</h3>
              <p class="text-sm leading-6 text-gray-700 mb-4">
                {dress.shortDescription}
              </p>
              <p class="text-sm font-medium text-gray-600">
                {dress.priceLabel}
              </p>
            </div>
          </a>
        {/each}
      </div>
    {/if}
  </section>

  <section class="px-6 py-20 max-w-6xl mx-auto">
    <div class="border rounded-2xl p-10 md:p-14 text-center">
      <h2 class="text-3xl md:text-4xl font-semibold mb-4">
        Discover Timeless Elegance
      </h2>
      <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        Explore the world of Aleen Sabbagh and find luxury dresses designed with sophistication, detail, and modern femininity.
      </p>
      <a
        href="/contact"
        class="inline-block px-6 py-3 bg-black text-white rounded-lg"
      >
        Get in Touch
      </a>
    </div>
  </section>
{:else}
  <p class="p-8 text-center">No homepage data found.</p>
{/if}