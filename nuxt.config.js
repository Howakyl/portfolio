export default {
  target: "static",
  components: true,
  buildModules: [
    [
      "@nuxt/image",
      {
        provider: "static",
      },
    ],
  ],
  extractCSS: {
    ignoreOrder: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|vue)$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  head: {
    title: "Kyle Howard - Software Engineer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      },
    ],
  },
  // server: {
  //   host: "10.0.0.5",
  // },
  plugins: [
    {
      src: "./plugins/analytics.js",
      mode: "client",
    },
  ],
};
