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
  <section class="lux-section">
    <div class="lux-container grid lg:grid-cols-2 gap-12 items-start">
      <div>
        {#if dress.images?.[0]}
          <img
            src={`http://localhost:1337${dress.images[0].url}`}
            alt={dress.altText || dress.title}
            class="w-full rounded-[2rem] shadow-[0_20px_50px_rgba(31,26,23,0.08)]"
          />
        {/if}
      </div>

      <div class="pt-4">
        <p class="lux-script text-5xl text-[var(--gold)] mb-2">Couture Piece</p>

        <h1 class="text-5xl md:text-6xl font-semibold mb-4">
          {dress.title}
        </h1>

        <p class="text-lg lux-muted leading-8 mb-5">
          {dress.shortDescription}
        </p>

        <p class="text-sm tracking-[0.18em] uppercase text-[var(--gold)] mb-8">
          {dress.priceLabel}
        </p>

        <div class="lux-divider mb-8"></div>

        <div class="text-lg leading-9 lux-muted mb-10">
          {fullDescription}
        </div>

        {#if dress.collection}
          <a
            href={`/collections/${dress.collection.slug}`}
            class="lux-button lux-button-secondary"
          >
            Back to {dress.collection.title}
          </a>
        {/if}
      </div>
    </div>
  </section>
{/if}