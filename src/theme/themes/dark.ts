import font from '@theme/font';
import { configureFonts, MD3DarkTheme } from 'react-native-paper';

const darkTheme = {
  // ...MD3DarkTheme, // or MD3DarkTheme
  fonts: configureFonts({
    config: font,
  }),
};

export default darkTheme;
