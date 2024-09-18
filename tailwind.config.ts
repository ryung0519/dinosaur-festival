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
        background: "var(--background)", // 배경색을 CSS 변수로 확장
        foreground: "var(--foreground)", // 글자 색을 CSS 변수로 확장
        'font-color': "var(--font-color)",  // 폰트 색상 추가
      },
    },
  },
  plugins: [],
};
export default config;
