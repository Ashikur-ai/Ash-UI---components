/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ashUi_primary: '#AC0DDF',
        ashUi_secondary: '#3515AF',
        text_primari: '#f26604', 
        bg_btn_primary: '#f26604', 
        bg_btn_hover: '#da5c04', 
        bg_btn_focus: '#c25203', 
        bg_btn_light: '#fde8d9',
        text_blue: '#004cae',
        text_hover: '#00449d',
        dashboard_color: '#ee6403',
        dashboard_hover:'#d65a03',
      },
    },
  },
  plugins: [require('daisyui'),],
}

