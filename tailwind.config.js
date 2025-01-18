/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			poppins: 'Poppins, sans-serif',
  			josefin: 'Josefin Sans, sans-serif'
  		},
  		colors: {
  			primaryGreen: '#006850',
  			primaryOrange: '#F7830D',
  			textPrimary: '#011510',
  			textSecondary: '#080808',
  			textBlack: '#2E2E2E',
  			textGray: '#161C24',
  			textGraySm: '#454F5B',
  			bgBlack: '#27334B',
  			offBg: '#124C5F'
  		},
  		container: {
  			center: true,
  			screens: {
  				'2xl': '1460px'
  			},
  			padding: '20px'
  		},
  		screens: {
  			xs: '375px',
  			sm: '480px',
  			md: '576px',
  			lg: '767px',
  			xlg: '991px',
  			xl: '1200px',
  			'2xl': '1365px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
};
