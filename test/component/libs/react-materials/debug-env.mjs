import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("=== DEBUG ENVIRONMENT ===");
console.log("Current working directory:", process.cwd());
console.log("Script directory:", __dirname);

console.log("\n=== NODE ENV ===");
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Env type module:", process.env.npm_package_type || "(not defined)");

console.log("\n=== FILE STRUCTURE ===");
const configsDir = path.resolve(__dirname, "test-configs");
if (fs.existsSync(configsDir)) {
  console.log("Found test-configs directory:");
  const files = fs.readdirSync(configsDir);
  for (const file of files) {
    console.log(" -", file);
  }
} else {
  console.log("❌ test-configs directory not found at:", configsDir);
}

const baseConfigPath = path.resolve(configsDir, "jest.base.config.ts");
console.log("\nChecking jest.base.config.ts at:", baseConfigPath);
console.log("Exists:", fs.existsSync(baseConfigPath));

console.log("\n=== PACKAGE.JSON ===");
try {
  const pkgPath = path.resolve(__dirname, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  console.log("type:", pkg.type ?? "(none)");
  console.log("scripts:", Object.keys(pkg.scripts || {}));
} catch (e) {
  console.log("❌ Failed to read package.json:", e.message);
}

console.log("\n=== TSCONFIG.JSON ===");
try {
  const tsconfigPath = path.resolve(__dirname, "tsconfig.json");
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf-8"));
  console.log("compilerOptions.module:", tsconfig.compilerOptions?.module);
  console.log("compilerOptions.target:", tsconfig.compilerOptions?.target);
} catch (e) {
  console.log("❌ Failed to read tsconfig.json:", e.message);
}

console.log("\n=== Done. ===");
