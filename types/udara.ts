export interface LaporanUdara {
  kota: string;
  indeksAQI: number;
  tingkat: "BAIK" | "SEDANG" | "TIDAK SEHAT" | "BERBAHAYA";
  wajib: boolean;
  diperbaruiPada?: string;
}