module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-orchestra`
  extends: ['orchestra'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
