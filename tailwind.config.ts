import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "essential-blue": "rgb(29, 106, 255)",
                "essential-light-blue": "rgb(227, 245, 255)",
            },
        },
    },
    plugins: [],
};
export default config;
