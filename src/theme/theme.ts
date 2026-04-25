import "@assets/css/index.scss"

export const theme = {
  space: [0, 4, 8, 16, 32],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  colors: {
    gray: ['#efefef', '#ddd', '#333', '#111'],
    primary: 'rebeccapurple',
  },
  sizes: {
    default: '90vw',
    max: '540px',
  },
  text: {
    heading: {
      backgroundColor: 'primary',
      color: 'background',
      fontWeight: 'bold',
      margin: '0 auto',
      maxWidth: 'max',
      padding: 3,
      width: 'default',
      a: {
        color: 'inherit',
      },
    },
  },
  layout: {
    container: {
    },
  },
};

export type Theme = typeof theme; 
export default theme;

