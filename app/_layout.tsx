import { Stack } from 'expo-router';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);
// Suppress warnings about missing icons in the tab bar
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, }} />

      <Stack.Screen name="not-found" options={{ title: 'Oops! Not Found' }} />
      
    </Stack>
  );
}
