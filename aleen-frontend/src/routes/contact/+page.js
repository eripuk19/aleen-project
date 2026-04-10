import { env } from '$env/dynamic/public';

export async function load({ fetch }) {
  const res = await fetch(`${env.PUBLIC_STRAPI_URL}/api/contact-page?populate=*`);

  if (!res.ok) {
    return {
      contact: null,
      error: `Failed to fetch contact page: ${res.status}`
    };
  }

  const contact = await res.json();

  return {
    contact: contact.data,
    error: null
  };
}