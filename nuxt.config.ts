// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : [],
    },
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer',
          ]
        : ['@juggle/resize-observer'],
  },
  css: ['~/src/assets/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
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
    '@': './src/',
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
        { title: 'nuxt3-sidebar' },
      ],
      // script link style noscript 都可以在这里设置
    },
    keepalive: false,
  },
  components: {
    // 让在这个文件夹下的组件都可以自动注册，而不需要手动的import
    dirs: [
      {
        path: './components',
        global: true,
      },
      './components',
    ],
  },
  dir: {
    // 修改 nuxt 中默认的几个文件夹位置
    layouts: './layouts',
    middleware: './middleware',
    pages: './pages',
  },
  appConfig: {
    // 一般在外部的app.config.ts文件中定义
    // theme: 'default',
  },
})
