export async function load({ fetch }) {
  const res = await fetch('http://localhost:1337/api/collections?populate=*');

  if (!res.ok) {
    return {
      collections: [],
      error: `Failed to fetch collections: ${res.status}`
    };
  }

  const collections = await res.json();

  return {
    collections: collections.data,
    error: null
  };
}