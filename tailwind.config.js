/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: { Montserrat: ["Montserrat"] },
			backgroundColor: { whiteDefault: "#DEE5EF", blueDefault: "#223975" },
			textColor: { whiteDefault: "#DEE5EF", blueDefault: "#223975" },
		},
	},
	plugins: [],
}
