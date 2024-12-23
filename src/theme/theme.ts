import { useTheme } from 'react-native-paper';
import lightTheme from './themes/light';

export type AppTheme = typeof lightTheme;
export const useAppTheme = () => useTheme<AppTheme>();
