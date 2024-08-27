const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const { terser } = require("rollup-plugin-terser");
const pluginDeno = require("rollup-plugin-node-deno");
const replace = require("@rollup/plugin-replace").default;

module.exports = {
  input: "index.mjs", // Entry point of your library

  output: {
    file: "dist/index.js", // Output file
    format: "es", // CommonJS format
    // sourcemap: true, // Generates sourcemap,
    inlineDynamicImports: true,
  },
  plugins: [
    commonjs(), // Converts CommonJS modules to ES6
    resolve({
      browser: false,
    }), // Resolves node_modules dependencies
    replace({
      preventAssignment: true,
      "process.env": "{}",
      delimiters: ["", ""],
    }),
    // terser(), // Minifies the bundle
    pluginDeno(),
  ],
};
