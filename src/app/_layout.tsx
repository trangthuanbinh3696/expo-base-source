import './../i18n'; // This line imports the i18n configuration
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
