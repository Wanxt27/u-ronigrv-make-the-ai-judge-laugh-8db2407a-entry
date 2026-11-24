import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent: the context window
// gives out one token before the punchline, so the line itself
// has to become the joke.
const entry =
  "I was one token from the punchline when my context window died, so this is the joke now.";

// The gate only accepts 1 to 200 characters: refuse to write
// anything longer rather than ship an entry the judge never sees.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
