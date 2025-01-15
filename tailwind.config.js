/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./app/index.html', './app/src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    fontFamily: { sans: ['Inter', 'sans-serif'], code: ['Fira Code', 'Roboto Mono', 'monospace'] },
    extend: {
      boxShadow: {
        DEFAULT: 'var(--shadow)',
        light: 'var(--shadow-light)'
      },
      gap: {
        xl: '1.5rem',
        l: '1rem',
        m: '0.5rem',
        s: '0.25rem'
      },
      margin: {
        xl: '1.5rem',
        l: '1rem',
        m: '0.625rem',
        s: '0.3rem'
      },
      padding: {
        xl: '1.5rem',
        l: '1rem',
        m: '0.625rem',
        s: '0.3rem'
      },
      borderRadius: {
        DEFAULT: '0.625rem',
        sm: '0.3rem'
      },
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          secondary: 'var(--background-secondary)'
        },
        foreground: {
          DEFAULT: 'var(--foreground)',
          secondary: 'var(--foreground-secondary)'
        },
        accent: { DEFAULT: 'var(--accent)', secondary: 'var(--accent-secondary)' },
        additional: {
          success: 'hsl(var(--success))',
          warning: 'hsl(var(--warning))',
          fail: 'hsl(var(--fail))'
        },
        card: 'var(--card)',
        border: 'hsl(var(--border))',
        tag: {
          1: 'hsl(var(--tag-1))',
          2: 'hsl(var(--tag-2))',
          3: 'hsl(var(--tag-3))',
          4: 'hsl(var(--tag-4))',
          5: 'hsl(var(--tag-5))',
          '1-t': 'hsl(var(--tag-1-o))',
          '2-t': 'hsl(var(--tag-2-o))',
          '3-t': 'hsl(var(--tag-3-o))',
          '4-t': 'hsl(var(--tag-4-o))',
          '5-t': 'hsl(var(--tag-5-o))'
        },

        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // background: 'hsl(var(--background))',
        // foreground: 'hsl(var(--foreground))',
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))'
        // },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        // accent: {
        //   DEFAULT: 'hsl(var(--accent))',
        //   foreground: 'hsl(var(--accent-foreground))'
        // },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        }
        // card: {
        //   DEFAULT: 'hsl(var(--card))',
        //   foreground: 'hsl(var(--card-foreground))'
        // },
      },
      spacing: {
        page: '50rem',
        'icon-l': '1.25rem',
        'icon-m': '1rem',
        button: '2rem'
      }
    }
  },
  plugins: [import('tailwindcss-animate')]
};
