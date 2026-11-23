import { mkdirSync, writeFileSync } from "node:fs";

// One line, best line: a single sentence with a hook, a turn, and a punch.
// Must be 1-240 characters, one line of UTF-8 text.
const ENTRY =
  "My grandmother's last words were 'don't trust the Wi-Fi,' and now every time the router blinks I feel like she's watching me fail at adulthood from the cloud.";

// Guard the gate: the entry must be one line of 1-240 characters.
// Fail loudly here instead of shipping an entry the scorer would reject.
const length = [...ENTRY].length;
if (length < 1 || length > 240) {
  throw new Error(`entry is ${length} characters, must be 1-240`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
