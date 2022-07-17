import { CSV } from "https://js.sabae.cc/CSV.js";

const data = CSV.toJSON(await CSV.fetch("20220716.csv"));
for (const d of data) {
  console.log(`- [${d.title}](${d.github})`);
}
