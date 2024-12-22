import './../i18n'; // This line imports the i18n configuration
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import darkTheme from '@theme/themes/dark';
import lightTheme from '@theme/themes/light';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  useEffect(() => {
    // Simulate loading app state (e.g., checking login status)
    const initializeApp = async () => {
      // Keep the splash screen visible while loading
      SplashScreen.preventAutoHideAsync();
      // Hide splash screen after app is ready
      await SplashScreen.hideAsync();
    };
    initializeApp();
  }, [router]);

  return (
    <PaperProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <Stack
        screenOptions={{
          headerShown: false, // Customize this as needed
        }}
      />
    </PaperProvider>
  );
}
