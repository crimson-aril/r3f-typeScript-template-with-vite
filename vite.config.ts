import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/template-of-r3f-typeScript-with-vite/', // repo name
  build: {
    sourcemap: false // removes main.tsx 404
  }
});
