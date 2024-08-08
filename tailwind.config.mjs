import { extractTailwindOnYaml, getColors } from '@fluwy/ui/tailwind';
import path from 'path';

const colors = getColors(path.join(__dirname, './app/themes'));

/** @type {import('tailwindcss').Config} */
export default {
	content: {
		files: ['./src/**/*.{html,js,svelte,ts,yaml,yml}', './app/**/*.{yaml,yml}'],
		extract: {
			yaml: extractTailwindOnYaml
		}
	},
	theme: {
		extend: {
			colors
		}
	},

	plugins: [import('@tailwindcss/typography')]
};
