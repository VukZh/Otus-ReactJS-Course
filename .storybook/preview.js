import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle } from 'styled-components';
import '../src/components/inputRangeStyle.css';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
  }
`;
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];
