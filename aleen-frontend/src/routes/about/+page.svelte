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
  <section class="px-6 py-16 max-w-5xl mx-auto">
    {#if about.image}
      <img
        src={`http://localhost:1337${about.image.url}`}
        alt={about.title}
        class="w-full rounded-xl mb-8"
      />
    {/if}

    <h1 class="text-4xl md:text-5xl font-bold mb-6">
      {about.title}
    </h1>

    <p class="text-lg leading-8 max-w-3xl">
      {description}
    </p>
  </section>
{/if}