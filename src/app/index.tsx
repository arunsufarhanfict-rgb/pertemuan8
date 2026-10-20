import { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => router.replace('/login'), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logo}><Text style={styles.logoLetter}>N</Text></View>
      <Text style={styles.brand}>NESTORA</Text>
      <Text style={styles.tagline}>YOUR STAY, YOUR STORY</Text>
      <ActivityIndicator color="#D8B56D" style={{ marginTop: 28 }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101B2D', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 78, height: 78, borderRadius: 24, borderWidth: 2, borderColor: '#D8B56D', alignItems: 'center', justifyContent: 'center', marginBottom: 18 },
  logoLetter: { color: '#D8B56D', fontSize: 46, fontWeight: '800' },
  brand: { color: '#FFFFFF', fontSize: 30, fontWeight: '800', letterSpacing: 5 },
  tagline: { color: '#D8B56D', fontSize: 10, letterSpacing: 3, marginTop: 10 },
});
