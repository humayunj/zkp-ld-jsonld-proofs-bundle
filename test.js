import zkpld from "./dist/index.js";
import jsonld from "npm:jsonld";
import fs from "node:fs";

const vp = JSON.parse(fs.readFileSync("vp.json"));
const kp = JSON.parse(fs.readFileSync("keypair0.json"));
async function main() {
  try {
    const norm = await zkpld.verifyProof(vp, kp, jsonld.documentLoader, {
      challenge: "abcde",
    });
    console.log(norm);
    console.log(await zkpld.keyGen());
  } catch (er) {
    console.log(JSON.stringify(er));
  }
}
await main();

Deno.exit(0);
