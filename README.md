# Instructions

From the `apps/docs` directory, running `yarn storybook` will start the storybook server.

When a `vanilla-extract` theme is imported from the same project (as it is at the head of `main`),
Storybook will render as expected. When the same theme, however, is imported from a different project, Storybook will not render and the console will show an error.

The top of `apps/docs/.storybook/preview.tsx` is set up to allow you toggle between the working
and non-working example:

```
// this import will cause storybook to fail
// import { baseTheme } from '@orchestra/themes';

// this import works as expected
import { baseTheme } from './base-theme.css';
```

This is a repro using `vite` and `turborepo`, but I have reproduced this issue with other bundlers
(webpack 4 and webpack 5) as well as other monorepo-management tools (`lerna`).
