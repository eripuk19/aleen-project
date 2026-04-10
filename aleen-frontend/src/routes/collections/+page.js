import { env } from '$env/dynamic/public';

export async function load({ fetch }) {
  const res = await fetch(`${env.PUBLIC_STRAPI_URL}/api/collections?populate=*`);

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