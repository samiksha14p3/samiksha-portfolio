import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes the production build work from any GitHub Pages repo path,
// for example: https://username.github.io/samiksha-portfolio/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/samiksha14p3/samiksha-portfolio',
});
