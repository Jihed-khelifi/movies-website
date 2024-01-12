import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { config } from 'dotenv';

config();

const pathSrc = path.resolve(__dirname, 'src')
const port = 3000;
const host = '127.0.0.1';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: `${pathSrc}/`,
      },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      { find: '@store', replacement: resolve(__dirname, 'src/store') },
      { find: '@composables', replacement: resolve(__dirname, 'src/composables') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      { find: '@views', replacement: resolve(__dirname, 'src/views') },
      { find: '@router', replacement: resolve(__dirname, 'src/router') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
      { find: '@services', replacement: resolve(__dirname, 'src/services') },
    ],
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      extensions: ['vue', 'md'],
      resolvers: [IconsResolver(), ElementPlusResolver({
        importStyle: 'sass',
      })],
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  server: {
    port,
    host,
  },

});
