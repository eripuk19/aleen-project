<script>
  let { data } = $props();

  const homepage = data.homepage?.data;

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
  <p>{data.error}</p>
{:else if homepage}
  <section class="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
    {#if homepage.heroImage}
      <img
        src={`http://localhost:1337${homepage.heroImage.url}`}
        alt={homepage.heroImage.alternativeText || homepage.heroTitle}
        class="w-full max-w-4xl rounded-xl mb-8"
      />
    {/if}

    <h1 class="text-4xl md:text-6xl font-bold mb-4">
      {homepage.heroTitle}
    </h1>

    <p class="text-lg md:text-xl max-w-2xl mb-8">
      {homepage.heroSubtitle}
    </p>

    <p class="max-w-3xl text-base md:text-lg">
      {featuredText}
    </p>
  </section>
{:else}
  <p>No homepage data found.</p>
{/if}