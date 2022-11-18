// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    // 所有API接口时会存在的密钥，仅在服务器端使用的私钥
    apiSecret: 'mei123',
    // 定义可以在客户端使用的公钥
    public: {
      apiBase: '/api',
      apiPublicKey: 'mei',
    },
  },
  typescript: {
    strict: true,
  },
  alias: {
    '@': './src',
    '@/*': './src/*',
    '@c': './src/components',
    '@c/*': './src/components/*',
  },
  app: {
    // 设置每个页面中 head 公共的部分
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],
      // script link style noscript 都可以在这里设置
    },
    keepalive: false,
  },
  components: {
    // 让在这个文件夹下的组件都可以自动注册，而不需要手动的import
    dirs: [
      {
        path: './src/components',
        global: true,
      },
      './src/components',
    ],
  },
  dir: {
    // 修改 nuxt 中默认的几个文件夹位置
    layouts: './src/layouts',
    middleware: './src/middleware',
    pages: './src/pages',
  },
  appConfig: {
    // 一般在外部的app.config.ts文件中定义
    // theme: 'default',
  },
})
