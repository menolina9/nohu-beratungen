import adapter from '@sveltejs/adapter-static';
import { mdsvex } from "mdsvex";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".md"],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".md"],
			layout: {
				blog: "src/routes/blog/blog.layout.svelte"
			}
		})
	],
	kit: {
		adapter: adapter()
	},
};

export default config;
