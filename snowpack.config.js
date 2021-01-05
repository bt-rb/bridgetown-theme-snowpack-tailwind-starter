// https://www.snowpack.dev/reference/configuration#config.mount
const mount = {
  frontend: "/dist",
  bridgetown: "/",
  public: { url: "/", static: true, resolve: false }
};

// https://www.snowpack.dev/plugins
const plugins = [
  ['@snowpack/plugin-build-script', { cmd: 'postcss', input: ['.css'], output: ['.css'] }],
  ['@snowpack/plugin-run-script', { cmd: 'bin/bridgetown build', watch: '$1 --watch' }]
];

// https://www.snowpack.dev/reference/configuration#config.installoptions
const installOptions = {
  NODE_ENV: true,
};

// https://www.snowpack.dev/reference/configuration#config.devoptions
const devOptions = {
  hmrDelay: 1000,
};

// https://www.snowpack.dev/reference/configuration#config.buildoptions
const buildOptions = {
  metaDir: "dist/javascript",
  out: "output",
  clean: true
};

// https://www.snowpack.dev/guides/optimize-and-bundle
const experiments = {
  optimize: {
    bundle: true,
    minify: true,
    manifest: true,
    target: 'es2018'
  },
  source: "skypack"
};

module.exports = {
  mount,
  plugins,
  installOptions,
  devOptions,
  buildOptions,
  experiments
};
