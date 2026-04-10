import { env } from '$env/dynamic/public';

export async function load({ fetch }) {
  const [homepageRes, collectionsRes, dressesRes] = await Promise.all([
    fetch(`${env.PUBLIC_STRAPI_URL}/api/homepage?populate=*`),
    fetch(`${env.PUBLIC_STRAPI_URL}/api/collections?populate=*`),
    fetch(`${env.PUBLIC_STRAPI_URL}/api/dresses?filters[featured][$eq]=true&populate=*`)
  ]);

  if (!homepageRes.ok || !collectionsRes.ok || !dressesRes.ok) {
    return {
      homepage: null,
      collections: [],
      featuredDresses: [],
      error: 'Failed to fetch homepage data'
    };
  }

  const homepage = await homepageRes.json();
  const collections = await collectionsRes.json();
  const dresses = await dressesRes.json();

  return {
    homepage: homepage.data,
    collections: collections.data ?? [],
    featuredDresses: dresses.data ?? [],
    error: null
  };
}