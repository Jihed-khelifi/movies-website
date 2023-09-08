import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import { resolve } from 'path';
import { defineConfig } from 'vite';
import { config } from 'dotenv';

config();

const port = 3000;
const host = '127.0.0.1';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [IconsResolver(), ElementPlusResolver()],
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
  server: {
    port,
    host,
  },
  resolve: {
    alias: [
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      { find: '@views', replacement: resolve(__dirname, 'src/views') },
      { find: '@router', replacement: resolve(__dirname, 'src/router') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
    ],
  },
});
