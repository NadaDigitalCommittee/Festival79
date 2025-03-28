import type { Config } from "tailwindcss"

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                theme: "#e84220",

                light: {
                    primary: "#000000",
                    secondary: "#414145",

                    background: "#ffffff",
                },

                dark: {
                    primary: "#dad8e5",
                    secondary: "#c2c0cf",

                    background: "#27272a",

                    muted: "#3f3f46",
                },
            },
            fontFamily: {
                body: "var(--font-montserrat), var(--font-bizudpgothic)",
                date: "var(--font-ptsansnarrow)",
            },
            keyframes: {
                logo: {
                    "0%": {
                        "stroke-dashoffset": "1000px",
                        "fill-opacity": "0",
                    },
                    "70%": {
                        "stroke-dashoffset": "300px",
                        "fill-opacity": "0",
                        "stroke-opacity": "1",
                    },
                    "100%": {
                        "stroke-dashoffset": "0px",
                        "fill-opacity": "1",
                        "stroke-opacity": "0",
                    },
                },
                logo_sway_horizontal: {
                    "0%": {
                        transform: "translateX(0px)",
                    },
                    "25%": {
                        transform: "translateX(-4px)",
                    },
                    "50%": {
                        transform: "translateX(0px)",
                    },
                    "75%": {
                        transform: "translateX(4px)",
                    },
                },
                logo_sway_vertical: {
                    "0%": {
                        transform: "translateY(0px)",
                    },
                    "25%": {
                        transform: "translateY(-4px)",
                    },
                    "50%": {
                        transform: "translateY(0px)",
                    },
                    "75%": {
                        transform: "translateY(4px)",
                    },
                },
            },
            animation: {
                logo_var_1:
                    "logo 3.0s ease-in 0s alternate forwards, logo_sway_horizontal 8.2s ease-in-out 3.5s infinite alternate, logo_sway_vertical 9s ease-in-out 3.2s infinite alternate",
                logo_var_2:
                    "logo 3.0s ease-in 0s alternate forwards, logo_sway_horizontal 7.8s ease-in-out 3.3s infinite alternate, logo_sway_vertical 12s ease-in-out 3.1s infinite alternate",
                logo_var_3:
                    "logo 3.0s ease-in 0s alternate forwards, logo_sway_horizontal 8.0s ease-in-out 3.6s infinite alternate, logo_sway_vertical 10.0s ease-in-out 3.4s infinite alternate",
                logo_var_4:
                    "logo 3.0s ease-in 0s alternate forwards, logo_sway_horizontal 9.2s ease-in-out 3.2s infinite alternate, logo_sway_vertical 8.5s ease-in-out 3.3s infinite alternate",
            },
            container: {
                center: true,
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                },
            },
        },
    },
    plugins: [],
} satisfies Config
