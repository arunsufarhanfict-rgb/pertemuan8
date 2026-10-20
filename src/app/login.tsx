import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function masuk() {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Data belum lengkap', 'Isi email dan password terlebih dahulu.');
      return;
    }
    router.replace('/home');
  }

  return (
    <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.brandArea}>
        <Text style={styles.brand}>NESTORA</Text>
        <Text style={styles.tagline}>FIND YOUR PERFECT STAY</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.eyebrow}>SELAMAT DATANG</Text>
        <Text style={styles.title}>Mulai perjalananmu.</Text>
        <Text style={styles.subtitle}>Masuk untuk menemukan vila dan kamar hotel pilihan.</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="nama@email.com" placeholderTextColor="#929BA8" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Masukkan password" placeholderTextColor="#929BA8" value={password} onChangeText={setPassword} secureTextEntry />
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={masuk}>
          <Text style={styles.buttonText}>Masuk  →</Text>
        </Pressable>
        <Text style={styles.note}>Demo tugas: gunakan email dan password apa saja.</Text>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#101B2D', justifyContent: 'center', padding: 20 },
  brandArea: { alignItems: 'center', marginBottom: 25 },
  brand: { color: '#D8B56D', fontSize: 25, fontWeight: '800', letterSpacing: 5 },
  tagline: { color: '#C7CFDA', fontSize: 10, letterSpacing: 2, marginTop: 8 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: 23 },
  eyebrow: { color: '#A78035', fontSize: 11, fontWeight: '800', letterSpacing: 2 },
  title: { color: '#101B2D', fontSize: 27, fontWeight: '800', marginTop: 10 },
  subtitle: { color: '#737D8B', lineHeight: 21, marginTop: 8, marginBottom: 15 },
  label: { color: '#263348', fontWeight: '700', marginTop: 12, marginBottom: 7 },
  input: { borderWidth: 1, borderColor: '#E0E5EC', backgroundColor: '#F8FAFC', borderRadius: 12, paddingHorizontal: 13, paddingVertical: 13, color: '#101B2D' },
  button: { backgroundColor: '#101B2D', borderRadius: 13, padding: 15, alignItems: 'center', marginTop: 23 },
  buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' },
  pressed: { opacity: 0.75 },
  note: { color: '#929BA8', textAlign: 'center', fontSize: 11, marginTop: 14 },
});
