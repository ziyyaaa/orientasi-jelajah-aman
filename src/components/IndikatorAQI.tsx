import { LaporanUdara } from "../../types/udara";

interface IndikatorAQIProps {
  laporan: LaporanUdara;
}

export default function IndikatorAQI({ laporan }: IndikatorAQIProps) {
  let warna = "";

  if (laporan.tingkat === "BAIK") {
    warna = "green";
  } else if (laporan.tingkat === "SEDANG") {
    warna = "orange";
  } else if (laporan.tingkat === "TIDAK SEHAT") {
    warna = "red";
  } else {
    warna = "darkred";
  }

  return (
    <div>
      <p>
        AQI: <strong>{laporan.indeksAQI}</strong>
      </p>

      <p style={{ color: warna }}>
        Status: <strong>{laporan.tingkat}</strong>
      </p>
    </div>
  );
}