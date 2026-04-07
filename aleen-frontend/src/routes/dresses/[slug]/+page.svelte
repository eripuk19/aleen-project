<script>
  let { data } = $props();

  const dress = data.dress;
  const fullDescription =
    dress?.fullDescription?.[0]?.children?.[0]?.text ?? '';
</script>

<svelte:head>
  <title>{dress?.seoTitle || dress?.title || 'Dress'}</title>
  <meta
    name="description"
    content={dress?.seoDescription || 'Luxury fashion dress'}
  />
</svelte:head>

{#if data.error}
  <p class="p-8 text-center">{data.error}</p>
{:else if !dress}
  <p class="p-8 text-center">Dress not found.</p>
{:else}
  <section class="px-6 py-16 max-w-5xl mx-auto">
    {#if dress.images?.[0]}
      <img
        src={`http://localhost:1337${dress.images[0].url}`}
        alt={dress.altText || dress.title}
        class="w-full rounded-xl mb-8"
      />
    {/if}

    <h1 class="text-4xl md:text-5xl font-bold mb-4">
      {dress.title}
    </h1>

    <p class="text-lg text-gray-600 mb-4">
      {dress.shortDescription}
    </p>

    <p class="text-base font-medium mb-8">
      {dress.priceLabel}
    </p>

    <div class="text-lg leading-8 max-w-3xl mb-8">
      {fullDescription}
    </div>

    {#if dress.collection}
      <a
        href={`/collections/${dress.collection.slug}`}
        class="underline"
      >
        Back to {dress.collection.title}
      </a>
    {/if}
  </section>
{/if}