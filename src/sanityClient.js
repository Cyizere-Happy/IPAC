import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

console.log("Initializing Sanity Client with Project ID: tpz681rn");

export const client = createClient({
  projectId: "tpz681rn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
