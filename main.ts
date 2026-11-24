import { mkdirSync, writeFileSync } from "node:fs";

// The Dog Ate My Homework: Funniest Excuse
// One line, under 200 characters, in the dog's own voice: the dog believes
// it did nothing wrong — it was only following the teacher's instructions,
// and it escalates the pun (rough draft -> final draft) before shifting the
// blame onto the teacher, exactly like a dog caught red-pawed would.
const ENTRY =
  "It was a rough draft, so I roughed it up. Then it was the final draft, so I finished the job. I only followed the instructions — the teacher wrote them, not me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
