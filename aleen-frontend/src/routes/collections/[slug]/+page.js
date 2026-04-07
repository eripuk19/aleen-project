export async function load({ fetch, params }) {
  const res = await fetch(
    `http://localhost:1337/api/collections?filters[slug][$eq]=${params.slug}&populate=*`
  );

  if (!res.ok) {
    return {
      collection: null,
      error: `Failed to fetch collection: ${res.status}`
    };
  }

  const result = await res.json();
  const collection = result.data?.[0] ?? null;

  return {
    collection,
    error: null
  };
}