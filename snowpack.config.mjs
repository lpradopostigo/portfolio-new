/** @type {import('snowpack').SnowpackUserConfig } */
export default {
  optimize: {
    bundle: false,
    minify: true,
    target: "es2018",
    treeshake: true,
  },
  mount: {
    public: { url: "/", static: true },
    source: { url: "/distributable" },
    assets: { url: "/assets" },
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-postcss",
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "source": ".*", "dest": "/index.html"},
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
    open: "none",
  },
  buildOptions: {
    /* ... */
  },
};
