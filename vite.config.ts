import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		tailwindcss(),
		viteStaticCopy({
			targets: [
				{
					src: path.resolve(__dirname, 'CNAME'),
					dest: '.'
				}
			]
		})
	]
});
