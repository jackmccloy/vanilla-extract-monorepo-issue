import { StoryContext, Story } from '@storybook/react';

// this import will cause storybook to fail
// import { baseTheme } from '@orchestra/themes';

// this import works as expected
import { baseTheme } from './base-theme.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: Story, context: StoryContext) => {
    const theme = context.globals.theme;

    document.documentElement.setAttribute('class', baseTheme);

    return <Story />;
  },
];
