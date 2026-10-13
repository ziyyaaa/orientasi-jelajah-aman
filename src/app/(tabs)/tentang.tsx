import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { typeScale, spacing } from "../../constants/styles";

export default function Tentang() {
    return (
        <SafeAreaView style={{ padding: 16 }}>
            <Text
                accessibilityLabel="Judul halaman Tentang Weather App"
                style={{
                    fontSize: typeScale.judul,
                    fontWeight: "bold",
                }}
            >
                Weather App
            </Text>

            <Text
                style={{
                    marginTop: spacing.kecil,
                    fontSize: typeScale.subjudul,
                }}
            >
                Aplikasi untuk membantu pengguna melihat informasi
                cuaca dan kualitas udara.
            </Text>

            <Text
                style={{
                    marginTop: spacing.sedang,
                    fontSize: typeScale.isi,
                }}
            >
                Versi 1.0.0
            </Text>
        </SafeAreaView>
    );
}