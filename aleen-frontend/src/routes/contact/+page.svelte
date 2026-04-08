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
  <section class="lux-section">
    <div class="lux-container">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <p
          class="text-3xl md:text-4xl font-semibold tracking-[0.08em] text-[#6f4e37] mb-2"
          style="font-family: 'Cormorant Garamond', serif;"
        >
          Aleen Sabbagh
        </p>
        <h1 class="text-5xl md:text-6xl font-semibold mb-4">
          {contact.title}
        </h1>
        <p class="text-lg lux-muted leading-8">
          For inquiries, appointments, and collection details, contact Aleen Sabbagh directly.
        </p>
      </div>

      <div class="lux-card max-w-3xl mx-auto p-10 md:p-14">
        <div class="grid gap-6 text-lg">
          <div>
            <p class="lux-eyebrow mb-2">Email</p>
            <p>{contact.email}</p>
          </div>

          <div>
            <p class="lux-eyebrow mb-2">Phone</p>
            <p>{contact.phone}</p>
          </div>

          <div>
            <p class="lux-eyebrow mb-2">Instagram</p>
            <p>{contact.instagram}</p>
          </div>

          <div>
            <p class="lux-eyebrow mb-2">Address</p>
            <p>{contact.address}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}