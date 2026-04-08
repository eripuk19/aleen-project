<script>
  let { data } = $props();

  const about = data.about;
  const description =
    about?.description?.[0]?.children?.[0]?.text ?? '';
</script>

<svelte:head>
  <title>{about?.seoTitle || 'About Aleen Sabbagh'}</title>
  <meta
    name="description"
    content={about?.seoDescription || 'About Aleen Sabbagh'}
  />
</svelte:head>

{#if data.error}
  <p class="p-8 text-center">{data.error}</p>
{:else if !about}
  <p class="p-8 text-center">About page not found.</p>
{:else}
  <section class="lux-section">
    <div class="lux-container grid lg:grid-cols-2 gap-12 items-center">
      <div>
        {#if about.image}
          <img
            src={`http://localhost:1337${about.image.url}`}
            alt={about.title}
            class="w-full rounded-[2rem] shadow-[0_20px_50px_rgba(31,26,23,0.08)]"
          />
        {/if}
      </div>

      <div>
        <p
          class="text-3xl md:text-4xl font-semibold tracking-[0.08em] text-[#6f4e37] mb-2"
          style="font-family: 'Cormorant Garamond', serif;"
        >
          Aleen Sabbagh
        </p>
        <h1 class="text-5xl md:text-6xl font-semibold mb-4">
          {about.title}
        </h1>
        <div class="lux-divider mb-6"></div>

        <p class="text-lg leading-9 lux-muted">
          {description}
        </p>
      </div>
    </div>
  </section>
{/if}