export default {
  target: "static",
  generate: {
    fallback: true
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
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
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
