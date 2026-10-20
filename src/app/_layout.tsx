import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#101B2D' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: '#F4F6FA' },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ title: 'Masuk', headerShown: false }} />
        <Stack.Screen name="home" options={{ title: 'NESTORA', headerBackVisible: false }} />
        <Stack.Screen name="villa" options={{ title: 'Pilihan Vila' }} />
        <Stack.Screen name="hotel" options={{ title: 'Kamar Hotel' }} />
        <Stack.Screen name="booking" options={{ title: 'Reservasi Penginapan' }} />
        <Stack.Screen name="confirmation" options={{ title: 'Reservasi Berhasil', headerBackVisible: false }} />
      </Stack>
    </>
  );
}
