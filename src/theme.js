import { Platform } from 'react-native';

const theme = {
  colors: {
    headingColor: '#ffffff',
    headingBackground: '#24292e',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 20,
  },
  fonts: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
    default: 'System',
  }),
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  error: {
    color: '#d73a4a',
    borderColor: '#d73a4a',
  },
};

export default theme;
