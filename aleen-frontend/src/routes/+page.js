export async function load({ fetch }) {
  const res = await fetch('http://localhost:1337/api/homepage?populate=*');

  if (!res.ok) {
    return {
      homepage: null,
      error: `Failed to fetch: ${res.status}`
    };
  }

  const homepage = await res.json();

  return {
    homepage,
    error: null
  };
}