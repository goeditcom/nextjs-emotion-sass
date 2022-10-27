const theme = {
  colors: {
    primary: 'blue',
    secondary: 'red',
    warning: 'yellow',
  },
};

export type BackgroundVariants = keyof typeof theme.colors;

export type AppTheme = typeof theme;

export default theme;
