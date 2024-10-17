import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import cdn from "vite-plugin-cdn-import";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		cdn({
			modules: [
				"react",
				"react-dom",
				// {
				// 	name: "pptxgenjs",
				// 	var: "PptxGenJS",
				// 	path: "dist/pptxgen.bundle.js",
				// },
				// {
				// 	name: "date-fns",
				// 	var: "dateFns",
				// 	path: "cdn.min.js",
				// },
			],
		}),
	],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					// u: ["color"],
					// u: ["color", "date-fns"],
					// r: ["react", "react-dom", "react-router-dom"],
					r: ["react-router-dom"],
					// p: ["pptxgenjs"],
				},
			},
		},
	},
	esbuild: {
		drop: ["console", "debugger"], // https://esbuild.github.io/api/#drop
	},
});
