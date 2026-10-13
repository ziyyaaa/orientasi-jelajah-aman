// src/app/(tabs)/riwayat.tsx
import { useState, useCallback } from "react";
import { View, Text, Button, Alert, Platform } from "react-native";
import { useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { ambilSemuaFavorit, hapusFavorit } from "../../services/favoritStorage";
import { KotaFavorit } from "../../../types/favorit";

export default function TabRiwayat() {
    const [daftarFavorit, setDaftarFavorit] = useState<KotaFavorit[]>([]);

    useFocusEffect(
        useCallback(() => {
            ambilSemuaFavorit().then(setDaftarFavorit);
        }, [])
    );

    const hapusSekarang = async (id: number) => {
        await hapusFavorit(id);
        const data = await ambilSemuaFavorit();
        setDaftarFavorit(data);
    };

    const konfirmasiHapus = (id: number, nama: string) => {
        // Alert.alert tidak jalan di web, jadi web pakai window.confirm
        if (Platform.OS === "web") {
            if (window.confirm(`Yakin hapus ${nama}?`)) {
                hapusSekarang(id);
            }
            return;
        }

        Alert.alert(
            "Konfirmasi Hapus",
            `Yakin hapus ${nama}?`,
            [
                {
                    text: "Batal",
                    style: "cancel",
                },
                {
                    text: "Hapus",
                    style: "destructive",
                    onPress: () => hapusSekarang(id),
                },
            ]
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 16, gap: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Kota Favorit
            </Text>

            <Text>
                Tersimpan {daftarFavorit.length} kota
            </Text>

            {daftarFavorit.length === 0 && (
                <Text>Belum ada kota favorit</Text>
            )}

            {daftarFavorit.map((kota) => (
                <View
                    key={kota.id}
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text>{kota.nama}</Text>

                    <Button
                        title="Hapus"
                        color="red"
                        onPress={() => konfirmasiHapus(kota.id, kota.nama)}
                    />
                </View>
            ))}
        </SafeAreaView>
    );
}