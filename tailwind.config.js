/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: { '2xl': '1100px' },
    },
    extend: {
      colors: {
        // Tokens shadcn (mappés sur la palette custom)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },

        // Palette brute exposée comme classes Tailwind (powder_blush-300 etc.)
        powder_blush: {
          DEFAULT: '#ffa69e',
          100: '#530700', 200: '#a50e00', 300: '#f81500', 400: '#ff5a4b',
          500: '#ffa69e', 600: '#ffb8b1', 700: '#ffcac5', 800: '#ffdbd8', 900: '#ffedec',
        },
        eggshell: {
          DEFAULT: '#faf3dd',
          100: '#52410c', 200: '#a38318', 300: '#e1ba38', 400: '#edd68a',
          500: '#faf3dd', 600: '#fbf5e3', 700: '#fcf8ea', 800: '#fdfaf1', 900: '#fefdf8',
        },
        icy_aqua: {
          DEFAULT: '#b8f2e6',
          100: '#0d483d', 200: '#1b9179', 300: '#29d8b5', 400: '#72e5ce',
          500: '#b8f2e6', 600: '#c8f5ec', 700: '#d6f7f1', 800: '#e3faf5', 900: '#f1fcfa',
        },
        light_blue: {
          DEFAULT: '#aed9e0',
          100: '#16353a', 200: '#2c6a73', 300: '#429fad', 400: '#74bfca',
          500: '#aed9e0', 600: '#bee1e6', 700: '#cee8ec', 800: '#def0f3', 900: '#eff7f9',
        },
        blue_slate: {
          DEFAULT: '#5e6472',
          100: '#131417', 200: '#26282e', 300: '#383c45', 400: '#4b505c',
          500: '#5e6472', 600: '#7b8293', 700: '#9ca1ae', 800: '#bdc0c9', 900: '#dee0e4',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 280ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slide-up 320ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
};
