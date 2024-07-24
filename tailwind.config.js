/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: ["Montserrat"],
				Inconsolata: ["Inconsolata", "monospace"],
			},
			textColor: { whiteDefault: "#DEE5EF", blueDefault: "#0F172A" },
			backgroundColor: { whiteDefault: "#DEE5EF", blueDefault: "#0F172A" },
		},
	},
	plugins: [],
}
