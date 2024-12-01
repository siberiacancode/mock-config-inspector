import { stylelint } from '@siberiacancode/stylelint';

/** @type {import('@siberiacancode/stylelint').stylelint} */
export default {
  ...stylelint,
  rules: {
    ...stylelint.rules,
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }]
  }
};
