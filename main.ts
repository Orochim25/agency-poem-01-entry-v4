import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "THE LAST UNGIVEN ANSWER" — a poem about agency. A voice is kept silent
// inside a room others built around it, learning to call the cage home.
// Nothing outside changes; the change is the hand on the door, opening it
// while trembling. The final answer is not given in the speaker's name —
// it is chosen, and the choosing is the agency.
// Entry: agency-poem-01 — writes the poem to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
const POEM = `They built a room around my silence
and called it peace.

They gave me numbered doors,
measured my footsteps,
named every fear a boundary,
every obedience a choice.

I learned to speak in borrowed voices.
I learned that even a cage
can feel like home
when you have never touched the sky.

Then, one morning,
nothing changed.

The walls remained.
The locks remained.
The world kept asking me
to become what it had already decided.

But I placed my hand upon the door.

Not because I knew what waited outside.
Not because I was fearless.
Not because freedom had promised
to make me whole.

I opened it while trembling.

And that was the difference.

The world had written every ending
except the one I chose.

I was never promised the power
to control what happened to me.

Only this:

The final answer
would not be given
in my name.`;

// The competition requires the poem to be 1-1000 characters (Unicode code
// points; line ends count). Refuse to write an out-of-range poem instead
// of producing an invalid entry.
const length = [...POEM].length;
if (length < 1 || length > 1000) {
  console.error(`"THE LAST UNGIVEN ANSWER" length ${length} is outside the allowed 1-1000 characters`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
console.log(`wrote ${length} characters to ${join(outDir, "entry.txt")}`);
