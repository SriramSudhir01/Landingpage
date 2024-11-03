import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-02-25',
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getTestimonials() {
  return client.fetch(`
    *[_type == "testimonial"] {
      _id,
      name,
      role,
      content,
      image
    }
  `);
}

export async function getFeatures() {
  return client.fetch(`
    *[_type == "feature"] {
      _id,
      title,
      description,
      icon
    }
  `);
}

export async function getPricingPlans() {
  return client.fetch(`
    *[_type == "pricingPlan"] {
      _id,
      name,
      price,
      features,
      isPopular
    }
  `);
}