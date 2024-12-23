import font from '@theme/font';
import { configureFonts, MD3DarkTheme } from 'react-native-paper';

const darkTheme = {
  ...MD3DarkTheme, // or MD3DarkTheme
  colors: {
    // main color
    mainColorODark900: '#EF4623',
    mainColorOLight900: '#F4801F',
    mainColorGDark900: '#4C4C4E',
    mainColorGLight900: '#CCCED0',
    mainColorBlue500: '#16B1FF',
    mainColorSuccessGreen600: '#4EB800',
    mainColorWarningYellow500: '#FFB400',
    mainColorErrorRed500: '#F0383E',
    // orange dark
    orangeDark50: '#FEF8F6',
    orangeDark100: '#FEF4F2',
    orangeDark200: '#FDE3DE',
    orangeDark300: '#FBD1C8',
    orangeDark400: '#F8AC9C',
    orangeDark500: '#F58770',
    orangeDark600: '#F3785E',
    orangeDark700: '#F16244',
    orangeDark800: '#F15C3D',
    orangeDark900: '#EF4623',
    // orange light
    orangeLight50: '#FEF7F2',
    orangeLight100: '#FDECDD',
    orangeLight200: '#FCDFC7',
    orangeLight300: '#FAC69A',
    orangeLight400: '#F8AC6D',
    orangeLight500: '#F7A25B',
    orangeLight600: '#F69341',
    orangeLight700: '#F58F3A',
    orangeLight800: '#F58A31',
    orangeLight900: '#F4801F',
    // gray dark
    grayDark50: '#F4F4F4',
    grayDark100: '#E4E4E4',
    grayDark200: '#D2D2D3',
    grayDark300: '#AEAEAF',
    grayDark400: '#8B8B8C',
    grayDark500: '#7C7C7E',
    grayDark600: '#676769',
    grayDark700: '#616163',
    grayDark800: '#5A5A5C',
    grayDark900: '#4C4C4E',
    // gray light
    grayLight50: '#FCFCFC',
    grayLight100: '#F7F8F8',
    grayLight200: '#F2F3F3',
    grayLight300: '#E8E9EA',
    grayLight400: '#DEDFE0',
    grayLight500: '#DADBDD',
    grayLight600: '#D4D5D7',
    grayLight700: '#D2D4D6',
    grayLight800: '#D0D2D4',
    grayLight900: '#CCCED0',
    // blue Info
    blueInfo50: '#E8F7FF',
    blueInfo100: '#BFEAFF',
    blueInfo200: '#94DBFF',
    blueInfo300: '#63CBFF',
    blueInfo400: '#45C1FF',
    blueInfo500: '#16B1FF',
    blueInfo600: '#14A1E8',
    blueInfo700: '#107EB5',
    blueInfo800: '#0C618C',
    blueInfo900: '#094A6B',
    // green success
    greenSuccess50: '#EEFAE6',
    greenSuccess100: '#CBEFB0',
    greenSuccess200: '#B1E78A',
    greenSuccess300: '#8EDB54',
    greenSuccess400: '#78D533',
    greenSuccess500: '#56CA00',
    greenSuccess600: '#4EB800',
    greenSuccess700: '#3D8F00',
    greenSuccess800: '#2F6F00',
    greenSuccess900: '#245500',
    // yellow warning
    yellowWarning50: '#FFF8E6',
    yellowWarning100: '#FFE8B0',
    yellowWarning200: '#FFDD8A',
    yellowWarning300: '#FFCD54',
    yellowWarning400: '#FFC333',
    yellowWarning500: '#FFB400',
    yellowWarning600: '#E8A400',
    yellowWarning700: '#B58000',
    yellowWarning800: '#8C6300',
    yellowWarning900: '#6B4C00',
    // red error
    redError50: '#FEEBEC',
    redError100: '#FAC1C3',
    redError200: '#F8A3A6',
    redError300: '#F57A7E',
    redError400: '#F36065',
    redError500: '#F0383E',
    redError600: '#DA3338',
    redError700: '#AA282C',
    redError800: '#841F22',
    redError900: '#65181A',
    // white
    white50: '##ffffff0d',
    white100: '#ffffff1a',
    white200: '#ffffff33',
    white300: '#FFFFFF4d',
    white400: '#ffffff66',
    white500: '#ffffff80',
    white600: '#ffffff99',
    white700: '#ffffffb3',
    white800: '#ffffffcc',
    white900: '#ffffffe6',
  },
  fonts: configureFonts({
    config: font,
  }),
};

export default darkTheme;
