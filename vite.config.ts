import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  
  return defineConfig({
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false, // css in js
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/assets/styles/global.module.less";',
        },
      },
    },
    server: {
      cors: true,
      host: '0.0.0.0',
      port: 5174,
      proxy: {
        '/api': {
          target: env.VITE_SERVICE_URL,
          changeOrigin: true,
          rewrite: (path) => path,
        },
      },
    },
  })
}
