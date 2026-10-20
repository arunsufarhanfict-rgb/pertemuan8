import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>WELCOME TO NESTORA</Text>
        <Text style={styles.title}>Temukan tempat{'\n'}untuk merasa di rumah.</Text>
        <Text style={styles.subtitle}>Penginapan pilihan untuk liburan dan perjalananmu.</Text>
        <View style={styles.heroPill}><Text style={styles.heroPillText}>✦  COMFORT • STYLE • EXPERIENCE</Text></View>
      </View>

      <Text style={styles.sectionTitle}>Pilih penginapan</Text>
      <Text style={styles.sectionSub}>Ketuk salah satu kategori untuk melihat pilihan.</Text>

      <Pressable onPress={() => router.push('/villa')} style={({ pressed }) => [styles.choice, styles.villa, pressed && styles.pressed]}>
        <View style={styles.symbol}><Text style={styles.symbolText}>⌂</Text></View>
        <Text style={styles.category}>PRIVATE RETREAT</Text>
        <Text style={styles.choiceTitle}>Vila</Text>
        <Text style={styles.description}>Lebih privat, tenang, dan cocok untuk waktu berkualitas.</Text>
        <Text style={styles.link}>Jelajahi vila  →</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/hotel')} style={({ pressed }) => [styles.choice, styles.hotel, pressed && styles.pressed]}>
        <View style={[styles.symbol, { backgroundColor: '#34465F' }]}><Text style={styles.symbolText}>▤</Text></View>
        <Text style={styles.category}>CITY COMFORT</Text>
        <Text style={[styles.choiceTitle, { color: '#FFFFFF' }]}>Kamar Hotel</Text>
        <Text style={[styles.description, { color: '#D0D7E2' }]}>Pilih kamar Standar, VIP, atau President Suite.</Text>
        <Text style={styles.link}>Jelajahi kamar  →</Text>
      </Pressable>
      <Text style={styles.footer}>NESTORA • YOUR STAY, YOUR STORY</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F6FA' },
  content: { padding: 20, paddingBottom: 32 },
  hero: { backgroundColor: '#101B2D', borderRadius: 24, padding: 23, marginBottom: 26 },
  eyebrow: { color: '#D8B56D', fontWeight: '800', fontSize: 10, letterSpacing: 2 },
  title: { color: '#FFFFFF', fontSize: 29, lineHeight: 36, fontWeight: '800', marginTop: 13 },
  subtitle: { color: '#C7CFDA', lineHeight: 21, marginTop: 11 },
  heroPill: { alignSelf: 'flex-start', backgroundColor: '#26354A', borderRadius: 30, paddingHorizontal: 12, paddingVertical: 8, marginTop: 18 },
  heroPillText: { color: '#D8B56D', fontSize: 9, fontWeight: '800', letterSpacing: 1 },
  sectionTitle: { color: '#101B2D', fontSize: 23, fontWeight: '800' },
  sectionSub: { color: '#737D8B', marginTop: 6, marginBottom: 18 },
  choice: { borderRadius: 22, padding: 22, minHeight: 220, justifyContent: 'flex-end', marginBottom: 16 },
  villa: { backgroundColor: '#DCE8DF' },
  hotel: { backgroundColor: '#17263D' },
  symbol: { position: 'absolute', top: 20, left: 20, width: 44, height: 44, borderRadius: 14, backgroundColor: '#C4D8C9', alignItems: 'center', justifyContent: 'center' },
  symbolText: { color: '#17263D', fontSize: 26, fontWeight: '800' },
  category: { color: '#A78035', fontWeight: '800', fontSize: 10, letterSpacing: 2, marginBottom: 6 },
  choiceTitle: { color: '#101B2D', fontSize: 27, fontWeight: '800' },
  description: { color: '#586675', lineHeight: 20, marginTop: 6 },
  link: { color: '#D8B56D', fontWeight: '800', marginTop: 15 },
  pressed: { opacity: 0.78, transform: [{ scale: 0.99 }] },
  footer: { color: '#9AA2AD', textAlign: 'center', fontSize: 10, letterSpacing: 1.2, marginTop: 10 },
});
