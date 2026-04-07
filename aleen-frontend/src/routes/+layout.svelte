<script>
  let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
  <header class="border-b">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="/" class="text-2xl font-bold">
        Aleen Sabbagh
      </a>

      <nav class="flex gap-6 text-sm md:text-base">
        <a href="/" class="hover:underline">Home</a>
        <a href="/collections" class="hover:underline">Collections</a>
        <a href="/about" class="hover:underline">About</a>
        <a href="/contact" class="hover:underline">Contact</a>
      </nav>
    </div>
  </header>

  <main class="flex-1">
    {@render children()}
  </main>

  <footer class="border-t mt-16">
    <div class="max-w-6xl mx-auto px-6 py-6 text-sm text-center">
      © 2026 Aleen Sabbagh. All rights reserved.
    </div>
  </footer>
</div>