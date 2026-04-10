import { env } from '$env/dynamic/public';

export async function load({ fetch }) {
  const res = await fetch(`${env.PUBLIC_STRAPI_URL}/api/about-page?populate=*`);

  if (!res.ok) {
    return {
      about: null,
      error: `Failed to fetch about page: ${res.status}`
    };
  }

  const about = await res.json();

  return {
    about: about.data,
    error: null
  };
}