import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://GAPV-Coder.github.io/Practice-Rick-Morty/",
	plugins: [react()],
});
