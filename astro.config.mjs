// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "/src/styles/global" as g;
          @use "/src/styles/foundation" as *;
          @use "/src/styles/layout" as *;
          `,
        }
      }
    }
  }
});
