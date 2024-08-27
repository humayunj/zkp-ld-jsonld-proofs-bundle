import zkpld from "./dist/index.js";
import jsonld from "npm:jsonld";
import fs from "node:fs";

const vp = JSON.parse(fs.readFileSync("vp.json"));
const kp = JSON.parse(fs.readFileSync("keypair0.json"));
async function main() {
  try {
    const proof = await zkpld.verifyProof(vp, kp, jsonld.documentLoader, {
      challenge: "abcde",
    });
    console.log(proof);
  } catch (er) {
    console.log(JSON.stringify(er));
  }
}
await main();

Deno.exit(0);
