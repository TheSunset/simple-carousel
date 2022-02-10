// rollup.config.js
import babel from "rollup-plugin-babel";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";

export default [
	// CommonJS
	{
		input: "./src/Carousel.tsx",
		output: [
			{
				file: pkg.module,
				format: "es",
        // preserveModules: false,
			},
			{
				file: pkg.main,
				format: "umd",
				name: "sunset"
			}
		],
		external: [...Object.keys(pkg.dependencies || {})],
		plugins: [
			babel({
				exclude: "node_modules/**",
			}),
			typescript({ tsconfig: "./tsconfig.json"}),
			postcss({
				plugins: [autoprefixer()],
				sourceMap: false,
				extract: true,
				minimize: true,
			}),
			terser(), // minifies generated bundles
		],
	},
];
