<script>
  let { data } = $props();

  const contact = data.contact;
</script>

<svelte:head>
  <title>{contact?.seoTitle || 'Contact Aleen Sabbagh'}</title>
  <meta
    name="description"
    content={contact?.seoDescription || 'Contact Aleen Sabbagh'}
  />
</svelte:head>

{#if data.error}
  <p class="p-8 text-center">{data.error}</p>
{:else if !contact}
  <p class="p-8 text-center">Contact page not found.</p>
{:else}
  <section class="px-6 py-16 max-w-4xl mx-auto">
    <h1 class="text-4xl md:text-5xl font-bold mb-8">
      {contact.title}
    </h1>

    <div class="space-y-4 text-lg">
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Instagram:</strong> {contact.instagram}</p>
      <p><strong>Address:</strong> {contact.address}</p>
    </div>
  </section>
{/if}