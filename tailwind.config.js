import { createRequire } from "module";
import flowbitePlugin from "flowbite/plugin"

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/dist/esm/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin, require("flowbite-react/dist/plugin/tailwindcss/index.cjs")],
}