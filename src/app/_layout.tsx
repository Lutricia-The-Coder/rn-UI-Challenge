import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Rosmatika: require('../../assets/fonts/Rosmatika Regular.ttf'),
    SauceGrotesk: require('../../assets/fonts/SauceGrotesk-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#F8D52D',
        },
      }}
    />
  );
}