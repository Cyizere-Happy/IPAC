import { createClient } from "@sanity/client";
import fs from "fs";

const client = createClient({
  projectId: "tpz681rn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

async function runDiagnostics() {
  const types = ["blog", "gallery", "project", "overview", "workshop"];
  let report = "--- SANITY DIAGNOSTICS ---\n";

  for (const type of types) {
    try {
      const data = await client.fetch(`*[_type == "${type}"]`);
      report += `Type "${type}": Found ${data.length} documents.\n`;
      if (data.length > 0) {
        report += `  Sample document keys: ${Object.keys(data[0]).join(", ")}\n`;
        // Log specific structure of first document
        report += `  Sample data: ${JSON.stringify(data[0]).substring(0, 100)}...\n`;
      }
    } catch (err) {
      report += `Type "${type}": FAILED - ${err.message}\n`;
    }
  }

  fs.writeFileSync("diagnostics_report.txt", report);
  console.log("Report generated in diagnostics_report.txt");
}

runDiagnostics();
