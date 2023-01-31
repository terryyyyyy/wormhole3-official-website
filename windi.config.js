import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryColor: '#8534F2',
        color91: '#9100EE',
        colorE3: '#E3E5E8',
        color97: '#979797'
      },
      screens: {
        'xs': { min: '500px' },
        'sm': { min: '768px'},
        'md': { min: '960px' },
        'lg': { min: '1080px' },
        'xl': { min: '1440px' },
      },
      fontFamily: {
        MonsterratBlack: 'MonsterratBlack',
        MonsterratLight: 'MonsterratLight',
        MonsterratMedium: 'MonsterratMedium',
        MonsterratRegular: 'MonsterratRegular',
      },
    }
  }
})
