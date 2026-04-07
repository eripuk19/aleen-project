export async function load({ fetch }) {
  const [homepageRes, collectionsRes, dressesRes] = await Promise.all([
    fetch('http://localhost:1337/api/homepage?populate=*'),
    fetch('http://localhost:1337/api/collections?populate=*'),
    fetch('http://localhost:1337/api/dresses?filters[featured][$eq]=true&populate=*')
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