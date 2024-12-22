import { MD3DarkTheme } from 'react-native-paper';

const darkTheme = {
  ...MD3DarkTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
};

export default darkTheme;
