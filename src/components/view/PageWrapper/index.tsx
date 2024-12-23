import { useAppTheme } from '@theme/theme';
import { StyleSheet, ViewProps } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

interface PageWrapperProps extends SafeAreaViewProps {}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { colors } = useAppTheme();
  return <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default PageWrapper;
