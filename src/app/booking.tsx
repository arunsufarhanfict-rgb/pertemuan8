import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

const rupiah = (value: number) => 'Rp' + value.toLocaleString('id-ID');

export default function BookingScreen() {
  const params = useLocalSearchParams<{ id: string; name: string; type: string; price: string }>();
  const name = params.name || 'Penginapan';
  const type = params.type || 'Penginapan';
  const price = Math.max(0, Number(params.price) || 0);
  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState('2026-11-01');
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');

  function submitBooking() {
    if (!guestName.trim() || !phone.trim() || !checkIn.trim()) {
      Alert.alert('Lengkapi data', 'Isi nama pemesan, nomor telepon, dan tanggal check-in.');
      return;
    }
    router.push({
      pathname: '/confirmation',
      params: {
        name, type, price: String(price), nights: String(nights),
        guests: String(guests), checkIn, guestName, phone,
        total: String(price * nights),
      },
    });
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Text style={styles.eyebrow}>BOOK YOUR STAY</Text>
      <Text style={styles.title}>Atur reservasi</Text>
      <Text style={styles.subtitle}>Lengkapi data dan periksa total biaya sebelum konfirmasi.</Text>

      <View style={styles.summary}>
        <Text style={styles.summaryType}>{type.toUpperCase()}</Text>
        <Text style={styles.summaryName}>{name}</Text>
        <Text style={styles.summaryPrice}>{rupiah(price)} <Text style={styles.perNight}>/ malam</Text></Text>
      </View>

      <Text style={styles.section}>Data pemesan</Text>
      <Text style={styles.label}>Nama lengkap</Text>
      <TextInput style={styles.input} value={guestName} onChangeText={setGuestName} placeholder="Nama sesuai identitas" placeholderTextColor="#929BA8" />
      <Text style={styles.label}>Nomor telepon</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Contoh: 081234567890" placeholderTextColor="#929BA8" keyboardType="phone-pad" />

      <Text style={styles.section}>Jadwal menginap</Text>
      <Text style={styles.label}>Tanggal check-in (YYYY-MM-DD)</Text>
      <TextInput style={styles.input} value={checkIn} onChangeText={setCheckIn} placeholder="2026-11-01" placeholderTextColor="#929BA8" />

      <Text style={styles.label}>Lama menginap</Text>
      <View style={styles.stepper}>
        <Pressable accessibilityRole="button" style={styles.stepButton} onPress={() => setNights((n) => Math.max(1, n - 1))}>
          <Text style={styles.stepText}>−</Text>
        </Pressable>
        <View style={styles.stepMiddle}>
          <Text style={styles.stepNumber}>{nights} malam</Text>
          <Text style={styles.stepHint}>{nights === 1 ? '1 hari menginap' : `${nights + 1} hari kalender`}</Text>
        </View>
        <Pressable accessibilityRole="button" style={styles.stepButton} onPress={() => setNights((n) => Math.min(30, n + 1))}>
          <Text style={styles.stepText}>+</Text>
        </Pressable>
      </View>

      <Text style={styles.label}>Jumlah tamu</Text>
      <View style={styles.stepper}>
        <Pressable accessibilityRole="button" style={styles.stepButton} onPress={() => setGuests((n) => Math.max(1, n - 1))}>
          <Text style={styles.stepText}>−</Text>
        </Pressable>
        <View style={styles.stepMiddle}>
          <Text style={styles.stepNumber}>{guests} orang</Text>
          <Text style={styles.stepHint}>Jumlah tamu menginap</Text>
        </View>
        <Pressable accessibilityRole="button" style={styles.stepButton} onPress={() => setGuests((n) => Math.min(20, n + 1))}>
          <Text style={styles.stepText}>+</Text>
        </Pressable>
      </View>

      <View style={styles.totalCard}>
        <Text style={styles.totalLabel}>Estimasi total biaya</Text>
        <Text style={styles.total}>{rupiah(price * nights)}</Text>
        <Text style={styles.totalNote}>{rupiah(price)} × {nights} malam</Text>
      </View>

      <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={submitBooking}>
        <Text style={styles.buttonText}>Konfirmasi reservasi  →</Text>
      </Pressable>
      <Text style={styles.note}>Demo tugas: reservasi ditampilkan di aplikasi dan belum dikirim ke server/database.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F6FA' },
  content: { padding: 20, paddingBottom: 35 },
  eyebrow: { color: '#A78035', fontWeight: '800', fontSize: 10, letterSpacing: 2 },
  title: { color: '#101B2D', fontSize: 29, fontWeight: '800', marginTop: 8 },
  subtitle: { color: '#737D8B', lineHeight: 21, marginTop: 7, marginBottom: 20 },
  summary: { backgroundColor: '#101B2D', borderRadius: 18, padding: 20, marginBottom: 23 },
  summaryType: { color: '#D8B56D', fontWeight: '800', letterSpacing: 2, fontSize: 10 },
  summaryName: { color: '#FFFFFF', fontSize: 22, fontWeight: '800', marginTop: 9 },
  summaryPrice: { color: '#FFFFFF', fontSize: 18, fontWeight: '800', marginTop: 12 },
  perNight: { color: '#C7CFDA', fontSize: 12, fontWeight: '400' },
  section: { color: '#101B2D', fontSize: 18, fontWeight: '800', marginTop: 7, marginBottom: 8 },
  label: { color: '#39465A', fontSize: 13, fontWeight: '700', marginTop: 12, marginBottom: 7 },
  input: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E0E5EC', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 13, color: '#101B2D' },
  stepper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 14, borderWidth: 1, borderColor: '#E0E5EC', padding: 8, marginTop: 4 },
  stepButton: { width: 43, height: 43, borderRadius: 12, backgroundColor: '#101B2D', alignItems: 'center', justifyContent: 'center' },
  stepText: { color: '#FFFFFF', fontSize: 25, fontWeight: '600', lineHeight: 28 },
  stepMiddle: { flex: 1, alignItems: 'center' },
  stepNumber: { color: '#101B2D', fontSize: 16, fontWeight: '800' },
  stepHint: { color: '#8A929D', fontSize: 11, marginTop: 3 },
  totalCard: { backgroundColor: '#E5EDE6', borderRadius: 16, padding: 18, marginTop: 24 },
  totalLabel: { color: '#586675', fontSize: 12 },
  total: { color: '#101B2D', fontSize: 26, fontWeight: '800', marginTop: 5 },
  totalNote: { color: '#586675', fontSize: 12, marginTop: 5 },
  button: { backgroundColor: '#A78035', borderRadius: 13, padding: 16, alignItems: 'center', marginTop: 18 },
  buttonText: { color: '#FFFFFF', fontWeight: '800', fontSize: 15 },
  pressed: { opacity: 0.75 },
  note: { color: '#8A929D', fontSize: 11, lineHeight: 16, marginTop: 13, textAlign: 'center' },
});
