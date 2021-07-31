module.exports = {
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		zIndex: {
			0: 0,
			10: 10,
			20: 20,
			30: 30,
			40: 40,
			50: 50,
			25: 25,
			50: 50,
			75: 75,
			100: 100,
			auto: "auto",
		},
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
