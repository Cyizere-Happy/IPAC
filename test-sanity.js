import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "tpz681rn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

async function testConnection() {
  console.log("Testing Sanity connection for project: tpz681rn...");
  try {
    const data = await client.fetch(`*[_type == "blog"]`);
    console.log("Success! Found " + data.length + " blogs.");
    console.log("Full data:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Connection failed:", err.message);
  }
}

testConnection();
