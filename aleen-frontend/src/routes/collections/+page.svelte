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

<section class="px-6 py-16 max-w-6xl mx-auto">
  <h1 class="text-4xl md:text-5xl font-bold text-center mb-12">
    Our Collections
  </h1>

  {#if data.error}
    <p class="text-center">{data.error}</p>
  {:else if data.collections.length === 0}
    <p class="text-center">No collections found.</p>
  {:else}
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each data.collections as collection}
        <article class="border rounded-xl overflow-hidden shadow-sm">
          {#if collection.coverImage}
            <img
              src={`http://localhost:1337${collection.coverImage.url}`}
              alt={collection.title}
              class="w-full h-64 object-cover"
            />
          {/if}

          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-3">
              {collection.title}
            </h2>

            <p class="text-sm leading-6 mb-4">
              {collection.description?.[0]?.children?.[0]?.text ?? 'No description available.'}
            </p>

            <p class="text-sm font-medium text-gray-600">
              Slug: {collection.slug}
            </p>
          </div>
        </article>
      {/each}
    </div>
  {/if}
</section>