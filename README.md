# This is a project that uses typescript vue3 nuxt3 vue-router scss to build an animated responsive side navigation bar with menus

At the beginning, use a nuxt3 module that I [established before](https://github.com/Megnate/my-nuxt3-default-module) to build the basic part. 

It should no chinese name in this projects path

# pnpm

use with this code `pnpm install --shamefully-hoist`

generate a file that name: `.npmrc` , write the code inside the file: `shamefully-hoist=true`

# Naive UI

Read [the document](https://www.naiveui.com/zh-CN/os-theme/docs/installation)

Install: `ni -D naive-ui`

Need to install the fonts: `ni -D vfonts`

[xicons](https://www.xicons.org/)

Main process in using nuxt3: 

- Install `naive-ui` and `@css-render/vue3-ssr`

- Add some code in `nuxt.config.ts`


# SASS

Within the terminal, should use the below command into the terminal:

-  `sass`: use sass

-  `sass-loader`: loads each sass/scss file and compiles them to css

-  `@nuxtjs/style-resources`: ensure the variables and maxins are available in all of the pages without the need to import them in every file

Write the code in `nuxt.config.ts` :

```javascript

modules: [
  '@nuxtjs/style-resources',
],
css: [
  '@/assets/indes.scss',
],

```

# Tailwind CSS

Install `tailwindcss` and its peer dependencies via npm `npm install -D @nuxtjs/tailwindcss tailwindcss@latest postcss@latest autoprefixer@latest`

Add the code `buildModules: ['@nuxtjf/tailwindcss']` that has changed to `modules`

Add the object in `nuxt.config.ts` file:

```javascript

// use './' or '@/' didnot work except '~/'
css: ['~/src/assets/tailwind.css'],
postcss: {
  plugins: {
    tailwindcss: {},
    autpprefixer: {},
  },
},

```

Run the init command `npx tailwindcss init` to generate a `tailwind.config.js` file

Text these codes in `tailwind.config.js` :

```javascript

content: [
  './src/components/**/*.{vue,js}',
  './src/components/*.{vue,js}',
  './src/layouts/**/*.vue',
  './src/layouts/*.vue',
  './src/pages/**/*.vue',
  './src/pages/*.vue',
  './plugins/*.{js,ts}',
  './nuxt.config.{js,ts}',
  './app.vue',
],

```

Text these codes in `assets/tailwind.css` :

```css

@tailwind base;
@tailwind components;
@tailwind utilities;

```