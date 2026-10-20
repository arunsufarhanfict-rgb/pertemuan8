import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { router } from 'expo-router';

const villas = [
  { id: 'garden', nama: 'Garden Hideaway', tipe: 'VILA TAMAN', deskripsi: 'Suasana hijau dan tenang untuk beristirahat.', harga: 850000, hargaText: 'Rp850.000' },
  { id: 'ocean', nama: 'Ocean Panorama', tipe: 'VILA PEMANDANGAN', deskripsi: 'Nikmati liburan santai dengan suasana pemandangan alam.', harga: 1250000, hargaText: 'Rp1.250.000' },
  { id: 'grand', nama: 'The Grand Estate', tipe: 'VILA PREMIUM', deskripsi: 'Vila luas yang cocok untuk keluarga atau rombongan.', harga: 2000000, hargaText: 'Rp2.000.000' },
];

export default function VillaScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>PRIVATE RETREAT</Text>
      <Text style={styles.title}>Pilihan Vila</Text>
      <Text style={styles.subtitle}>Pilih vila, tentukan lama menginap, lalu kirim reservasi.</Text>
      {villas.map((villa, index) => (
        <View key={villa.id} style={styles.card}>
          <View style={[styles.art, { backgroundColor: index === 1 ? '#DCE7EA' : index === 2 ? '#E6E0D6' : '#DCE8DF' }]}>
            <Text style={styles.artMark}>{index === 0 ? 'GARDEN' : index === 1 ? 'OCEAN' : 'SIGNATURE'}</Text>
            <Text style={styles.artIcon}>{index === 0 ? '⌂' : index === 1 ? '≈' : '✦'}</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.type}>{villa.tipe}</Text>
            <Text style={styles.name}>{villa.nama}</Text>
            <Text style={styles.desc}>{villa.deskripsi}</Text>
            <View style={styles.bottom}>
              <View><Text style={styles.price}>{villa.hargaText}</Text><Text style={styles.perNight}>per malam</Text></View>
              <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={() => router.push({ pathname: '/booking', params: { id: villa.id, name: villa.nama, type: 'Vila', price: String(villa.harga) } })}>
                <Text style={styles.buttonText}>Pesan →</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F6FA' },
  content: { padding: 18, paddingBottom: 30 },
  eyebrow: { color: '#A78035', fontWeight: '800', fontSize: 10, letterSpacing: 2, marginTop: 6 },
  title: { color: '#101B2D', fontSize: 30, fontWeight: '800', marginTop: 8 },
  subtitle: { color: '#737D8B', lineHeight: 21, marginTop: 8, marginBottom: 18 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 20, overflow: 'hidden', marginBottom: 18, borderWidth: 1, borderColor: '#E9EDF2' },
  art: { height: 115, padding: 17, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  artMark: { color: '#43584B', fontWeight: '800', letterSpacing: 3, fontSize: 10 },
  artIcon: { color: '#A78035', fontSize: 45, fontWeight: '800' },
  cardBody: { padding: 18 },
  type: { color: '#A78035', fontSize: 10, fontWeight: '800', letterSpacing: 1.5 },
  name: { color: '#101B2D', fontSize: 21, fontWeight: '800', marginTop: 8 },
  desc: { color: '#737D8B', lineHeight: 20, marginTop: 7 },
  bottom: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18, paddingTop: 15, borderTopWidth: 1, borderTopColor: '#EDF0F4' },
  price: { color: '#101B2D', fontWeight: '800', fontSize: 15 },
  perNight: { color: '#8A929D', fontSize: 11, marginTop: 3 },
  button: { backgroundColor: '#101B2D', borderRadius: 12, paddingVertical: 12, paddingHorizontal: 17 },
  buttonText: { color: '#FFFFFF', fontWeight: '800' },
  pressed: { opacity: 0.7 },
});
