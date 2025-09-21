const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
        extend: {
            colors: {
                void: '#0d0d12', // Primary background
                consciousness: '#e0ede7', // Main text
                neural: '#03ff7e', // Accent/Highlight/Title
                'button-text': '#0c1718', // Button text
                'memory-gray': '#b8bec6', // Description/Muted
                // Optional: error/warning for completeness
                'error-red': '#ff4b4b',
                'warning-amber': '#ffd166',
            },
            fontFamily: {
                terminal: ['Fira Mono', 'monospace'],
            },
        },
    },
};

export default config;
