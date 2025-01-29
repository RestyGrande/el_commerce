import type { Config } from "tailwindcss";

export default <Config>(<unknown>{
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins as a Tailwind font
      },
      fontWeight: {
        bold: "700",
      },
    },
  },
  plugins: [],
});
