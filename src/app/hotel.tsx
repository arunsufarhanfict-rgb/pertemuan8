import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { router } from 'expo-router';

const rooms = [
  { id: 'standard', nama: 'Standard Room', tipe: 'STANDAR', deskripsi: 'Pilihan praktis dan nyaman untuk perjalanan singkat.', harga: 450000, hargaText: 'Rp450.000', icon: '▤' },
  { id: 'vip', nama: 'VIP Room', tipe: 'VIP', deskripsi: 'Ruang lebih luas dengan kenyamanan dan fasilitas tambahan.', harga: 900000, hargaText: 'Rp900.000', icon: '✦' },
  { id: 'president', nama: 'President Suite', tipe: 'PRESIDENT', deskripsi: 'Suite premium untuk pengalaman menginap yang istimewa.', harga: 1800000, hargaText: 'Rp1.800.000', icon: '♛' },
];

export default function HotelScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>CITY COMFORT</Text>
      <Text style={styles.title}>Kamar Hotel</Text>
      <Text style={styles.subtitle}>Pilih tipe kamar dan lanjutkan untuk mengatur reservasi.</Text>
      {rooms.map((room, index) => (
        <View key={room.id} style={styles.card}>
          <View style={[styles.art, index === 0 ? styles.standard : index === 1 ? styles.vip : styles.president]}>
            <Text style={styles.artLabel}>NESTORA HOTEL</Text>
            <Text style={styles.artIcon}>{room.icon}</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.type}>{room.tipe}</Text>
            <Text style={styles.name}>{room.nama}</Text>
            <Text style={styles.desc}>{room.deskripsi}</Text>
            <View style={styles.bottom}>
              <View><Text style={styles.price}>{room.hargaText}</Text><Text style={styles.perNight}>per malam</Text></View>
              <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={() => router.push({ pathname: '/booking', params: { id: room.id, name: room.nama, type: 'Hotel', price: String(room.harga) } })}>
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
  standard: { backgroundColor: '#E2E8EF' },
  vip: { backgroundColor: '#DDE5E0' },
  president: { backgroundColor: '#E9E0D2' },
  artLabel: { color: '#43516A', fontWeight: '800', letterSpacing: 2, fontSize: 10 },
  artIcon: { color: '#A78035', fontSize: 39, fontWeight: '800' },
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
