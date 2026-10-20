import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

const rupiah = (value: number) => 'Rp' + value.toLocaleString('id-ID');

export default function ConfirmationScreen() {
  const p = useLocalSearchParams<{
    name: string; type: string; price: string; nights: string;
    guests: string; checkIn: string; guestName: string; phone: string; total: string;
  }>();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.successIcon}><Text style={styles.check}>✓</Text></View>
      <Text style={styles.eyebrow}>RESERVASI DIBUAT</Text>
      <Text style={styles.title}>Terima kasih, {p.guestName}!</Text>
      <Text style={styles.subtitle}>Rincian reservasi demo kamu sudah siap. Periksa detail di bawah ini.</Text>

      <View style={styles.card}>
        <Text style={styles.label}>PENGINAPAN</Text>
        <Text style={styles.name}>{p.name}</Text>
        <Text style={styles.type}>{p.type}</Text>
        <View style={styles.line} />
        <Row label="Nama pemesan" value={p.guestName} />
        <Row label="Nomor telepon" value={p.phone} />
        <Row label="Check-in" value={p.checkIn} />
        <Row label="Lama menginap" value={`${p.nights} malam`} />
        <Row label="Jumlah tamu" value={`${p.guests} orang`} />
        <View style={styles.line} />
        <Text style={styles.label}>ESTIMASI TOTAL</Text>
        <Text style={styles.total}>{rupiah(Number(p.total) || 0)}</Text>
        <Text style={styles.rate}>{rupiah(Number(p.price) || 0)} per malam</Text>
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeText}>Ini adalah konfirmasi simulasi untuk tugas React Native. Data belum disimpan ke database dan belum menjadi reservasi hotel sungguhan.</Text>
      </View>

      <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.75 }]} onPress={() => router.replace('/home')}>
        <Text style={styles.buttonText}>Kembali ke menu utama</Text>
      </Pressable>
      <Pressable style={styles.secondary} onPress={() => router.replace('/villa')}>
        <Text style={styles.secondaryText}>Jelajahi vila lagi</Text>
      </Pressable>
    </ScrollView>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value || '-'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F6FA' },
  content: { padding: 20, paddingBottom: 35, alignItems: 'stretch' },
  successIcon: { width: 66, height: 66, borderRadius: 33, backgroundColor: '#DCE8DF', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 18 },
  check: { color: '#315B43', fontSize: 36, fontWeight: '800' },
  eyebrow: { color: '#A78035', textAlign: 'center', fontWeight: '800', fontSize: 10, letterSpacing: 2 },
  title: { color: '#101B2D', textAlign: 'center', fontSize: 25, fontWeight: '800', marginTop: 9 },
  subtitle: { color: '#737D8B', textAlign: 'center', lineHeight: 21, marginTop: 9, marginBottom: 20 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, borderWidth: 1, borderColor: '#E9EDF2' },
  label: { color: '#A78035', fontSize: 10, fontWeight: '800', letterSpacing: 1.5 },
  name: { color: '#101B2D', fontSize: 22, fontWeight: '800', marginTop: 8 },
  type: { color: '#737D8B', marginTop: 4 },
  line: { height: 1, backgroundColor: '#E9EDF2', marginVertical: 17 },
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 12, marginBottom: 13 },
  rowLabel: { color: '#737D8B', flex: 1, fontSize: 13 },
  rowValue: { color: '#101B2D', flex: 1, textAlign: 'right', fontWeight: '700', fontSize: 13 },
  total: { color: '#101B2D', fontSize: 27, fontWeight: '800', marginTop: 7 },
  rate: { color: '#737D8B', fontSize: 12, marginTop: 4 },
  notice: { backgroundColor: '#FFF4DE', padding: 13, borderRadius: 12, marginTop: 15 },
  noticeText: { color: '#795B22', fontSize: 11, lineHeight: 17 },
  button: { backgroundColor: '#101B2D', borderRadius: 13, padding: 16, alignItems: 'center', marginTop: 19 },
  buttonText: { color: '#FFFFFF', fontWeight: '800' },
  secondary: { padding: 14, alignItems: 'center', marginTop: 3 },
  secondaryText: { color: '#A78035', fontWeight: '800' },
});
