import { env } from '$env/dynamic/public';

export async function load({ fetch, params }) {
  const collectionRes = await fetch(
    `${env.PUBLIC_STRAPI_URL}/api/collections?filters[slug][$eq]=${params.slug}&populate=*`
  );

  const dressesRes = await fetch(
    `${env.PUBLIC_STRAPI_URL}/api/dresses?filters[collection][slug][$eq]=${params.slug}&populate=*`
  );

  if (!collectionRes.ok || !dressesRes.ok) {
    return {
      collection: null,
      dresses: [],
      error: 'Failed to fetch collection data'
    };
  }

  const collectionResult = await collectionRes.json();
  const dressesResult = await dressesRes.json();

  return {
    collection: collectionResult.data?.[0] ?? null,
    dresses: dressesResult.data ?? [],
    error: null
  };
}