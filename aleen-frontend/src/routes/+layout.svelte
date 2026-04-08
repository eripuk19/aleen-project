<script>
  import '../app.css';
  let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
  <header class="sticky top-0 z-50 backdrop-blur-md bg-[rgba(248,243,236,0.82)] border-b border-[rgba(31,26,23,0.06)]">
    <div class="lux-container px-6 py-4 flex items-center justify-between">
      <a href="/" class="flex flex-col leading-none">
        <span
          class="text-3xl md:text-4xl font-semibold tracking-[0.08em] text-[#6f4e37]"
          style="font-family: 'Cormorant Garamond', serif;"
        >
          Aleen Sabbagh
        </span>
        <span class="text-[11px] tracking-[0.35em] uppercase mt-1 text-[var(--gold)]">
          Luxury Dresses
        </span>
      </a>

      <nav class="flex gap-6 text-sm md:text-base text-[var(--text)]">
        <a href="/" class="hover:text-[var(--gold)] transition">Home</a>
        <a href="/collections" class="hover:text-[var(--gold)] transition">Collections</a>
        <a href="/about" class="hover:text-[var(--gold)] transition">About</a>
        <a href="/contact" class="hover:text-[var(--gold)] transition">Contact</a>
      </nav>
    </div>
  </header>

  <main class="flex-1">
    {@render children()}
  </main>

  <footer class="mt-16 border-t border-[rgba(31,26,23,0.06)] bg-[rgba(255,255,255,0.35)]">
    <div class="lux-container px-6 py-10 text-center">
      <p
        class="text-3xl md:text-4xl font-semibold tracking-[0.08em] text-[#6f4e37] mb-2"
        style="font-family: 'Cormorant Garamond', serif;"
      >
        Aleen Sabbagh
      </p>
      <p class="text-sm lux-muted">Luxury fashion dresses with timeless elegance and modern femininity.</p>
      <p class="text-xs tracking-[0.2em] uppercase mt-4 lux-muted">© 2026 All rights reserved</p>
    </div>
  </footer>
</div>