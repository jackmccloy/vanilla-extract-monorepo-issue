import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import * as path from 'path';

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    config.plugins.push(vanillaExtractPlugin());

    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: '@orchestra/core',
            replacement: path.resolve(__dirname, '../../../packages/core/'),
          },
        ],
      },
    };
  },
};
