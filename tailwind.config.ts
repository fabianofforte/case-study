import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage : {
      'img_bg_hero' : " url('src/assets/bg_hero.jpg') ",
  },
    extend: {
      colors: {
      'primary-blue':'#106EB0',
      'primary-orange':'#EC7000',
      'primary-gray':'#33303E',
      'gray-phone':'#F$F$F$',
      'txt-gray':'#7A7786',
      'opacity-gray':'rgba(100, 80, 57, 0.1)'
      }
    },
  },
  plugins: [],
}
export default config
