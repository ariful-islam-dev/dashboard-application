import { transform } from 'typescript';

const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    fontFamily:{
      colonna: ["Colonna MT", "sans-serif"],
      verdana: ["Verdana", "arial", "serif"],

    },
    screens: {
      '2xsm':'375px',
      xsm: '425px',
      '3xl':'20000px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#1c2434',
        'black-2': '#010101',
        body: '#64748B',
        bodydark: '#AEB7C0',
        bodydark1: '#DEE4EE',
        bodydark2: '#8A99AF',
        primary: '#3C50E0',
        secondary: '#80CAEE',
        stroke: '#E2E8F0',
        gray: "#eff4fb",
        graydark:'#333A48',
        'gray-2': '#f7f9fc',
        'gray-3': '#fafafa',
        boxdark:'#24303f',
        'boxdark-2': '#1a222c',
        strokedark: '#2e3a47'
      },
      fontSize: {
        'title-xxl': ['44px', '55px'],
        'title-xl': ['36px', '45px'],
        'title-xl2': ['33px', '45px'],
        'title-lg': ['28px', '35px'],
        'title-md': ['24px', '30px'],
        'title-md2': ['26px', '30px'],
        'title-sm': ['20px', '26px'],
        'title-xsm': ['18px', '24px'],
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
         8.5: '2.125rem',
        9.5: '2.375rem',
        10.5: '2.625rem',
        11: '2.75rem',
        11.5: '2.875rem',
        12.5: '3.125rem',
        13: '3.25rem',
        13.5: '3.375rem',
        14: '3.5rem',
        14.5: '3.625rem',
        15: '3.75rem',
        
      },
      maxWidth: {
        2.5: '0.625rem',
        3: '0.75rem',
        4: '1rem',
        11: '2.75rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        22.5: '6.625rem',
        25: '6.25rem',
        30: '7.5rem',
        35: '8.75rem',
        40: '10rem',
        42.5: '10.625rem',
        44: '11rem',
        45: '11.25rem',
        70: '17.5rem',
        90: '23.5rem',
        125: '31.25rem',
      },
      maxHeight: {
        35: '8.75rem',
        70: '17.5rem',
        90: '22.5rem',
        550: '34.375rem',
        300: '18.75rem',
      },
      minWidth: {
        22.5: '5.625rem',
        42.5: '10.625rem',
        47.5: '11.875rem',
        75.5: '18.75rem',
      },
      zIndex: {
        999999:'999999',
        99999:'99999',
        9999:'9999',
        999:'999',
        99:'99',
        99:'99',
        9:'9',
        1:'1'
      },
      opacity: {
        65: '0.65'
      },
      backgroundImage: {},
      content: {},
      transitionProperty: {
        width: 'width', stroke: 'stroke'
      },
      borderWidth: {
        6: '6px',
      },
      boxShadow: {
        default: '0px 8px 13px -3px rgba(0,0,0,0.07)',
        card: '0px 1px 3px rgba(0,0,0,0.12)',
        'card-2': '0px 1px 3px rgba(0,0,0,0.05)',
      },
      dropShadow: {
        1: '0px 1px 0px #E2E8F0',
        2: '0px 1px 4px rgba(0,0,0,0.12)'
      },
      keyframes: {
        rotating: {
          '0% 100%': { transform: 'rotate(360deg'}, 
          '50%': { transform: 'rotate(0deg'}, 
        }
      },
      animation: {
        'ping-once': 'ping 5s cubic-bezier(0,0,0.2, 1)',
        rotating: 'rotating 30s linear infinite',
        'spin-1.5': 'spin 1.5s linear infinite',
        'spin-2': 'spin 2s linear infinite',
        'spin-3': 'spin 3s linear infinite'
      }
    },
  },
  plugins: [],
}

