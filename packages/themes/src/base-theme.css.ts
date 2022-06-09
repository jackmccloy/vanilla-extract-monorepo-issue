import { style, createTheme, createThemeContract } from '@vanilla-extract/css';

export const themeContract = createThemeContract({
  spacing: {
    absolute: {
      none: '',
      base: '',
      plus01: '',
      plus02: '',
    },
    relative: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
    },
  },
});

const baseThemeCore = createTheme(themeContract, {
  spacing: {
    absolute: { none: '0', base: '24px', plus01: '32px', plus02: '56px' },
    relative: {
      1: `${100 * (1 / 12)}%`,
      2: `${100 * (2 / 12)}%`,
      3: `${100 * (3 / 12)}%`,
      4: `${100 * (4 / 12)}%`,
      5: `${100 * (5 / 12)}%`,
      6: `${100 * (6 / 12)}%`,
      7: `${100 * (7 / 12)}%`,
      8: `${100 * (8 / 12)}%`,
      9: `${100 * (9 / 12)}%`,
      10: `${100 * (10 / 12)}%`,
      11: `${100 * (11 / 12)}%`,
      12: `${100 * (12 / 12)}%`,
    },
  },
});

const baseThemeOverrides = {
  vars: {
    // [exampleOverride]: 'value',
  },
};

export const baseTheme = style([baseThemeCore, baseThemeOverrides]);
