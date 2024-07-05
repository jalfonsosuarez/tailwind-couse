import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Hanken-Grotesk': ['Hanken-Grotesk', 'sans-serif'],
      },
      // colores personalizados:
      colors: {
        "azul-claro": "#243cff",
        "azul-oscuro": "#0d1b3e",

        // Colores para el proyecto reto del componente.
        "Light-slate-blue": "hsl(252, 100%, 67%)",
        "Light-royal-blue": "hsl(241, 81%, 54%)",
        "Violet-blue": "hsla(256, 72%, 46%, 1)",
        "Persian-blue": "hsla(241, 72%, 46%, 0)",
        "White": "hsl(0, 0%, 100%)",
        "Pale-blue": "hsl(221, 100%, 96%)",
        "Light-lavender": "hsl(241, 100%, 89%)",
        "Dark-gray-blue": "hsl(224, 30%, 27%)",
        "Dark-gray-blue-alfa": "hsl(224, 30%, 27%,0.5)",
        "Lightred": "hsl(0, 100%, 67%)",
        "Lightred-alfa": "hsla(0, 100%, 67%,0.1)",
        "Orangeyellow": "hsl(39, 100%, 56%)",
        "Orangeyellow-alfa": "hsl(39, 100%, 56%,0.1)",
        "Greenteal": "hsl(166, 100%, 37%)",
        "Greenteal-alfa": "hsl(166, 100%, 37%,0.1)",
        "Cobaltblue": "hsl(234, 85%, 45%)",
        "Cobaltblue-alfa": "hsl(234, 85%, 45%,0.1)",
        
      },
      // Tamaños personalizados.
      spacing: {
        "98": "357px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
