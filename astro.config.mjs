// @ts-check
import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://umeya.life",
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
  },
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: "ja",
      de: "ja"
    }
  },
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    }),
    sitemap({
      i18n: {
        defaultLocale: "ja",
        locales: {
          ja: 'ja-JP',
          en: 'en-US',
          de: 'de-DE',
        },
      }
    })
  ]
});