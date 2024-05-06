import { terbilang } from "./angkaMenjadiTerbilang";

export const bulanTerbilang = (hari: any, bulan: any, tahun: any) => {
  const angkaHari = terbilang(hari * 1);
  const angkaTahun = terbilang(tahun * 1);
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const angkaBulan = namaBulan[bulan * 1 - 1];

  const terbilangTanggal = `${angkaHari} ${angkaBulan} ${angkaTahun}`;
  return terbilangTanggal;
};
