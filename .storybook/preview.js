
export const parameters = {
  options: {
    storySort: {
      order: ['Foundation', 'Components'],
    },
  },
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}