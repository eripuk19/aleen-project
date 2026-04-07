export async function load({ fetch, params }) {
  const res = await fetch(
    `http://localhost:1337/api/dresses?filters[slug][$eq]=${params.slug}&populate=*`
  );

  if (!res.ok) {
    return {
      dress: null,
      error: `Failed to fetch dress: ${res.status}`
    };
  }

  const result = await res.json();

  return {
    dress: result.data?.[0] ?? null,
    error: null
  };
}