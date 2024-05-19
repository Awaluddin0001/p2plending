import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import MyButton from "@/components/util/myButton";
import { color } from "@/constants/Colors";

export default function TermCond() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const setCheckedHandler = () => {
    setIsChecked((is) => !is);
  };

  const routeHandler = () => {
    router.push("/phoneNumber");
  };

  const endScroll = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: {
    layoutMeasurement: { height: number; width: number };
    contentOffset: { y: number };
    contentSize: { height: number; width: number };
  }) => {
    const paddingToBottom = 1000;
    if (layoutMeasurement && contentOffset && contentSize) {
      return (
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom
      );
    }
  };
  return (
    <View style={styles.wraperSection}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ width: "95%", paddingTop: 15 }}
        onScroll={({ nativeEvent }) => {
          if (endScroll(nativeEvent)) {
            setIsDisable(false);
          }
        }}
        testID="scroll-view"
        scrollEventThrottle={400}
      >
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>SYARAT DAN KETENTUAN</Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>1. DEFINISI</Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1</Text>
          <Text style={styles.normalText}>
            Untuk tujuan S&K ini, istilah yang didefinisikan dalam Pasal ini,
            dan dimanapun dalam S&K ini, akan memiliki arti sebagai berikut:
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.1</Text>
          <Text style={styles.normalText}>
            “Hari Kerja” adalah hari (selain Sabtu, Minggu, atau hari libur
            nasional) ketika bank komersil melaksanakan bisnis di Jakarta;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.2</Text>
          <Text style={styles.normalText}>
            “Hukum” adalah setiap undang-undang dan peraturan, surat keputusan
            atau kebijakan yang memiliki kekuatan hukum termasuk peraturan,
            peraturan daerah, dan perundangan bawahan lainnya, persyaratan dan
            pedoman dari pemerintah pusat, provinsi, wilayah, kotamadya,
            kabupaten, atau pemerintahan regional atau otoritas gabungan
            pemerintahan dan swasta, termasuk yang dari Republik Indonesia dan
            yuridiksi terkait lainnya, dan termasuk kementerian, departemen,
            komisi, biro, dewan, administratif dan atau lembaga atau badan
            pengatur atau instrumen lain darinya yang secara hukum disyaratkan
            untuk dipatuhi oleh suatu pihak, termasuk hukum dan keadilan
            bersama;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.3</Text>
          <Text style={styles.normalText}>
            “Layanan Pendanaan Bersama Berbasis Teknologi Informasi yang
            selanjutnya disingkat LPBBTI” adalah penyelenggaraan layanan jasa
            keuangan untuk mempertemukan pemberi dana dengan penerima dana dalam
            melakukan Pemberi danaan konvensional atau berdasarkan prinsip
            syariah secara langsung melalui sistem elektronik dengan menggunakan
            internet.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.4</Text>
          <Text style={styles.normalText}>
            “Pendanaan” adalah penyaluran dana dari pemberi dana kepada penerima
            dana dengan suatu janji yang akan dibayarkan atau dikembalikan
            sesuai dengan jangka waktu tertentu dalam transaksi LPBBTI pada
            layanandan Platform Doeku.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.5</Text>
          <Text style={styles.normalText}>
            “Penyelenggara LPBBTI” yang selanjutnya disebut Penyelenggara adalah
            badan hukum Indonesia yang menyediakan, mengelola, dan
            mengoperasikan LPBBTI baik secara konvensional atau berdasarkan
            Prinsip Syariah dalam hal ini Penyelenggara yang di maksud adalah
            Platform Doeku.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.6</Text>
          <Text style={styles.normalText}>
            “Penerima Dana atau Peminjam” adalah orang perseorangan, badan
            hukum, dan/atau badan usaha yang menerima pendanaan dari pemberi
            dana melalui jasa dan layanan Platform Doeku. dalam bidang Layanan
            Pendanaan Bersama Berbasis Teknologi Informasi berdasarkan POJK 10
            tahun 2022.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.7</Text>
          <Text style={styles.normalText}>
            “Pemberi Dana atau Pendana” adalah orang perseorangan, badan hukum,
            dan/atau badan usaha yang memberikan pendanaan kepada penerima dana
            melalui jasa dan layanan Platform Doeku dalam bidang Layanan
            Pendanaan Bersama Berbasis Teknologi Informasi berdasarkan POJK 10
            tahun 2022.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.8</Text>
          <Text style={styles.normalText}>
            “Pengguna LPBBTI” yang selanjutnya disebut Pengguna adalah Pemberi
            Dana dan Penerima Dana. yang menggunakan jasa dan layanan Doeku atau
            memanfaatkan Platform Doeku berdasarkan POJK 10 tahun 2022.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.9</Text>
          <Text style={styles.normalText}>
            “Rekening Escrow Account” adalah rekening escrow account yang
            meliputi virtual account atas nama masing-masing Pendana dan Doeku
            (Nama Pendana) yang disediakan oleh bank yang bekerjasama dengan
            Doeku, dimana Pendana diwajibkan untuk meletakkan sejumlah dana;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.10</Text>
          <Text style={styles.normalText}>
            “POJK 10” adalah Peraturan Otoritas Jasa Keuangan Nomor
            10/POJK.05/2022 tentang Layanan Pendanaan Bersama Berbasis Teknologi
            Informasi yang mengatur bidang usaha Layanan Pinjam Meminjam Uang
            Berbasis Teknologi Informasi.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.11</Text>
          <Text style={styles.normalText}>
            ”Pinjaman” adalah sejumlah dana yang ditempatkan di Rekening Doeku
            dan dipinjamkan oleh Pendana kepada Peminjam melalui penggunaan
            Platform Doeku;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.12</Text>
          <Text style={styles.normalText}>
            “Permintaan Pinjaman” adalah sebagaimana yang diatur di Pasal 7.1 di
            bawah ini;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.13</Text>
          <Text style={styles.normalText}>
            ”Petugas”, yang hubungannya dengan Doeku, adalah setiap direktur
            dan/atau pegawai dari Doeku yang telah masuk dalam daftar pegawai
            Doeku dan terikat oleh perjanjian kerja dengan Doeku atau
            kesepakatan lain sebagai pihak yang ditugaskan atau diberi wewenang
            tertentu oleh Doeku untuk melaksanakan suatu tugas untuk dan atas
            nama atau demi kepentingan Doeku;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.14</Text>
          <Text style={styles.normalText}>
            “Platform Doeku” adalah (a) portal web dan atau versi mobile dari
            portal web yang dibuat, dimiliki dan dioperasikan oleh Doeku yang
            saat ini terletak di dan dapat di akses pada URL berikut:
            www.doeku.id berikut perubahan URL tersebut dari waktu ke waktu;
            dan/atau (b) aplikasi mobile dari www.doeku.id yang dibuat, dimiliki
            dan dioperasikan oleh Doeku, termasuk iOS dan android berikut
            perubahannya dari waktu ke waktu
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.15</Text>
          <Text style={styles.normalText}>
            “Doeku” adalah PT Doeku Peduli Indonesia, suatu perusahaan
            penyelenggara Layanan Pendanaan Bersama Berbasis Teknologi Informasi
            yang menyediakan, mengelola, dan mengoperasikan Layanan Pendanaan
            Bersama Berbasis Teknologi Informasi berdasarkan Peraturan Otoritas
            Jasa Keuangan Nomor 10/POJK.05/2022 tentang Layanan Pendanaan
            Bersama Berbasis Teknologi Informasi (“POJK 10”).
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>1.1.16</Text>
          <Text style={styles.normalText}>
            “S&K”, adalah Syarat dan Ketentuan ini yang dapat direvisi,
            diamandemen, atau ditambah dari waktu ke waktu oleh Doeku.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>2. UMUM</Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>2.1</Text>
          <Text style={styles.normalText}>
            Apabila terdapat perbedaan dan pertentangan antara S&K dan
            perjanjian yang mengikat Anda dengan Doeku, maka yang berlaku adalah
            ketentuan dalam perjanjian yang berlaku dan Anda wajib mematuhi
            ketentuan perjanjian tersebut sepanjang mengenai ketentuan yang
            bertentangan dengan S&K.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>2.2</Text>
          <Text style={styles.normalText}>
            Dalam S&K ini, semua rujukan kepada badan hukum atau individu,
            adalah juga sebagai merujuk kepada agen yang sah, penerima hak
            pengalihan, penerus, ataupun kuasa/wakil dari badan hukum atau
            individu tersebut selama dianggap wajar. Ungkapan bermakna tunggal
            diartikan sebagai ungkapan bermakna jamak dan sebaliknya;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>2.3</Text>
          <Text style={styles.normalText}>
            Tidak ada Hukum (atau interpretasinya) yang menyatakan ambiguitas
            dalam suatu dokumen diartikan untuk melawan pihak yang mempersiapkan
            dokumen terkait S&K ini.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>2.4</Text>
          <Text style={styles.normalText}>
            Setiap rujukan Hukum, peraturan, undang-undang atau penetapan adalah
            merujuk pada amandemen dan perubahan peraturan terkait, atau
            peraturan yang berada dibawah Hukum, peraturan, atau penetapan
            tersebut.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>2.5</Text>
          <Text style={styles.normalText}>
            Pemberi dana yang belum memiliki pengetahuan dan pengalaman dalam
            LPBBTI, disarankan untuk tidak menggunakan layanan ini.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>2.6</Text>
          <Text style={styles.normalText}>
            Penerima dana harus mempertimbangkan tingkat bunga pinjaman dan
            biaya lainnya sesuai dengan kemampuan dalam melunasi pinjaman.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>2.7</Text>
          <Text style={styles.normalText}>
            Setiap kecurangan tercatat secara digital di dunia maya dan dapat
            diketahui masyarakat luas di media sosial.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>2.8</Text>
          <Text style={styles.normalText}>
            Pengguna harus membaca dan memahami informasi ini sebelum membuat
            keputusan menjadi Pemberi dana atau Penerima dana.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>2.9</Text>
          <Text style={styles.normalText}>
            Judul yang digunakan untuk S&K ini hanya untuk penjelasan dan
            referensi saja, dan tidak mempengaruhi penafsiran, atau menjadi
            bahan pertimbangan, dalam interpretasi S&K ini.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>3. JASA YANG DIBERIKAN</Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>3.1</Text>
          <Text style={styles.normalText}>
            S&K ini merupakan syarat-syarat dan ketentuan-ketentuan dimana Doeku
            akan memberikan jasa dan layanannya dengan pengoperasian Platform
            Doeku yang akan memfasilitasi proses pemberian Pinjaman kepada
            Peminjam ("Jasa").
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>3.2</Text>
          <Text style={styles.normalText}>
            Anda menyetujui bahwa Doeku mempunyai pertimbangan tunggal dan
            absolut untuk menentukan apakah Anda dapat masuk dalam daftar calon
            Pendana atau Peminjam dan apakah anda memiliki kelayakan kredit
            (creditworthiness) yang menurut penilaian dan kebijakan Doeku dapat
            diterima sehingga Anda dapat memperoleh Pinjaman. Dalam hal Anda
            tidak masuk dapat masuk dalam daftar calon Pendana atau Peminjam,
            Doeku tidak berhak untuk menyediakan jasa ataupun memunculkan
            kewajiban tambahan apapun kepada Anda sebagai Peminjam atau Pendana.
            Demikian juga halnya jika permohonan Pinjaman Anda ditolak oleh
            Doeku karena alasan apapun, Anda tidak berhak untuk meminta
            penjelasan terperinci mengenai alasan, tolak ukur atau indikator
            penilaian yang menjadi dasar penerimaan atau penolakan tersebut, dan
            Anda tidak berhak menuntut ganti rugi, pemberian hak atau
            penggantian maupun kompensasi dalam wujud apapun kepada Doeku.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>3.3</Text>
          <Text style={styles.normalText}>
            Ketentuan Penyediaan Jasa dari Doeku akan tunduk pada Hukum dan S&K
            ini, dan Doeku tidak bertanggung jawab atas tindakan yang diambil
            oleh pihak manapun dalam rangka mematuhi Hukum dan S&K ini kecuali
            memperoleh persetujuan terlebih dahulu dari Doeku
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>3.4</Text>
          <Text style={styles.normalText}>
            Setiap transaksi dan kegiatan LPBBTI atau pelaksanaan kesepakatan
            mengenai LPBBTI antara atau yang melibatkan Penyelenggara,Pemberi
            dana dan/atau Penerima dana wajib dilakukan melalui escrow account
            dan virtual account atau paymen gateway sebagai mana yang diwajibkan
            berdasarkan Peraturan Otoritas Jasa Keuangan Nomor 10/POJK.05/2022
            tentang Layanan Pendanaan Bersama Berbasis Teknologi Informasi dan
            pelanggaran atau ketidakpatuhan terhadap ketentuan tersebut
            merupakan bukti telah terjadinya pelanggaran hukum oleh
            Penyelenggara sehingga Penyelenggara wajib menanggung ganti rugi
            yang diderita oleh masing-masing Pengguna sebagai akibat langsung
            dari pelanggaran hukum tersebut diatas tanpa mengurangi hak Pengguna
            yang menderita kerugian menurut Kitab Undang-Undang Hukum Perdata.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>3.5</Text>
          <Text style={styles.normalText}>
            Kecuali diatur lain, Jasa yang disediakan oleh Doeku dapat termasuk
            memfasilitasi Pinjaman, atau jenis jasa lain yang Doeku akan
            perkenalkan dari waktu ke waktu.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>4. PENGAKUAN</Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>4.1</Text>
          <Text style={styles.normalText}>
            Anda memahami, mengakui, dan setuju bahwa Doeku tidak dan tidak akan
            pernah:
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>4.1.1</Text>
          <Text style={styles.normalText}>
            menyelenggarakan simpanan dalam bentuk apapun seperti giro,
            deposito, sertifikat deposito, tabungan dan atau bentuk lainnya yang
            dipersamakan dengan itu;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>4.1.2</Text>
          <Text style={styles.normalText}>menjalankan pendanaan modal;</Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>4.1.3</Text>
          <Text style={styles.normalText}>
            memihak salah satu pihak, baik Peminjam maupun Pendana dalam
            perjanjian pinjaman
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>4.1.4</Text>
          <Text style={styles.normalText}>
            menjalankan kegiatan perbankan, pasar modal, jasa keuangan non-bank,
            dan kegiatan lainnya sebagaimana diatur oleh Otoritas Jasa Keuangan
            ("OJK") dan Bank Indonesia ("BI");
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>4.1.5</Text>
          <Text style={styles.normalText}>
            menyediakan jasa peringkat kredit atau bentuk kegiatan lainnya yang
            dipersamakan dengan itu sebagaimana diatur oleh OJK dan BI; atau
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>4.1.6</Text>
          <Text style={styles.normalText}>
            menyediakan jasa penyimpanan/ penitipan.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>4.2</Text>
          <Text style={styles.normalText}>
            Anda memahami, mengakui, dan setuju bahwa peran Doeku hanya bersifat
            administratif dan sebagai fasilitator yang mengatur pengikatan
            antara Peminjam dan Pendana ke dalam perjanjian fasilitas Pinjaman
            terkait. Anda juga memahami bahwa sebagai perusahaan yang bergerak
            di bidang Layanan Pendanaan Bersama Berbasis Teknologi Informasi
            berdasarkan Peraturan Otoritas Jasa Keuangan Nomor 10/POJK.05/2022
            tentang Layanan Pendanaan Bersama Berbasis Teknologi Informasi
            ("POJK 10"), PT Doeku Peduli Indonesia ("Doeku") telah resmi berizin
            dan diawasi oleh Otoritas Jasa Keuangan ("OJK") sebagai
            Penyelenggara Layaanan Pendanaan Bersama Berbasis Teknologi
            Informasi dengan Surat Tanda Bukti Berizin dari OJK Nomor
            KEP-82/D.05/2021 tanggal 30 Agustus 2021 sehingga pelaksanaan
            kegiatan usahanya diawasi secara ketat oleh OJK berdasarkan
            Peraturan Otoritas Jasa Keuangan Nomor 10/POJK.05/2022 tentang
            Layanan Pendanaan Bersama Berbasis Teknologi Informasi.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>
            5. PERLINDUNGAN DATA PRIBADI{" "}
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>5.1</Text>
          <Text style={styles.normalText}>
            Dengan ini, Anda menyetujui bahwa Doeku dapat mengumpulkan,
            menyimpan, memproses, membuka informasi, mengakses, mengkaji, dan/
            atau menggunakan data pribadi (termasuk informasi pribadi yang
            sensitif) tentang Anda, baik yang didapatkan melalui Anda ataupun
            melalui sumber lain yang sesuai dengan Hukum yang berlaku ("Data
            Pribadi"), Selanjutnya Anda akan menyatakan dan setuju dengan
            ketentuan Data Pribadi yang dijelaskan dalam Pasal 18 S&K di bawah
            ini.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>5.2</Text>
          <Text style={styles.normalText}>
            Dengan ini, Anda menyetujui bahwa Doeku dapat mengumpulkan,
            menyimpan, memproses, membuka informasi, mengakses, mengkaji, dan/
            atau menggunakan data pribadi (termasuk informasi pribadi yang
            sensitif) tentang Anda, baik yang didapatkan melalui Anda ataupun
            melalui sumber lain yang sesuai dengan Hukum yang berlaku ("Data
            Pribadi"), Selanjutnya Anda akan menyatakan dan setuju dengan
            ketentuan Data Pribadi yang dijelaskan dalam Pasal 18 S&K di bawah
            ini.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>5.3</Text>
          <Text style={styles.normalText}>
            Jika Doeku disyaratkan oleh Hukum untuk mengungkapkan Data Pribadi,
            maka sepanjang diwajibkan oleh ketentuan Hukum, Doeku akan
            memberitahukan kepada pemilik Data Pribadi dalam waktu 3 (tiga) Hari
            Kerja sebelum Data Pribadi diungkapkan.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>
            6. UJI KELAYAKAN CALON PEMINJAM
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>6.1</Text>
          <Text style={styles.normalText}>
            Ketika menerima aplikasi Jasa, penilai kredit dari Doeku akan
            mengadakan uji kelayakan calon Peminjam. Selama proses berlangsung,
            Doeku akan menghubungi lembaga, perusahaan, atau individu terkait
            untuk mencari informasi, melakukan verifikasi, dan konfirmasi
            informasi terkait Peminjam, termasuk (namun tidak terbatas pada)
            catatan historis hukum dan kredit. Peminjam wajib memberikan izin
            dan kuasa kepada Doeku untuk melakukan hal-hal tersebut.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>6.2</Text>
          <Text style={styles.normalText}>
            Kecuali Doeku diwajibkan oleh hukum, atau telah menerima izin
            tertulis sebelumnya dari Peminjam, Doeku tidak akan memberikan
            informasi atau membuka dokumen yang diberikan oleh Peminjam kepada
            pihak ketiga.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>6.3</Text>
          <Text style={styles.normalText}>
            Setelah hasil yang memadai dari uji kelayakan oleh Doeku, Doeku akan
            menginfokan Peminjam mengenai syarat dan ketentuan Jasa melalui
            Email dan apakah Peminjam dapat masuk dalam daftar calon Peminjam
            dalam Platform Doeku.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>
            7. PERMINTAAN PINJAMAN DARI PEMINJAM
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>7.1</Text>
          <Text style={styles.normalText}>
            Setelah Peminjam setuju pada syarat dan ketentuan dari Jasa,
            Peminjam harus men-mengajukan aplikasi pengajuan pinjaman, yang akan
            menunjukkan Jumlah yang Dibutuhkan ("Permintaan Pinjaman").
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>7.2</Text>
          <Text style={styles.normalText}>
            Permintaan Pinjaman tidak mengatur perjanjian untuk menambah jumlah
            Pinjaman kepada Peminjam melalui siapapun. Permintaan tersebut hanya
            merupakan permintaan komitmen dana untuk dipinjam. Untuk menghindari
            keragu-raguan, Permintaan Pinjaman bukanlah penawaran; Permintaan
            Pinjaman tersebut mengatur undangan atas tindakan
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>7.3</Text>
          <Text style={styles.normalText}>
            Jumlah maksimal fasilitas Pinjaman yang dapat diberikan kepada
            Peminjam adalah sejumlah yang tertera di Permintaan Pinjaman.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>7.4</Text>
          <Text style={styles.normalText}>
            Setelah pengajuan Permintaan Pinjaman oleh Peminjam, Peminjam setuju
            untuk mengikatkan diri dalam perjanjian dan dokumen lain yang
            terkait fasilitas Pinjaman (jika ada) dalam jangka waktu yang
            ditentukan oleh Doeku. Peminjam dengan ini setuju bahwa kegagalan
            dalam mengikatkan diri dalam perjanjian atau dokumen lain terkait
            dalam jangka waktu tersebut berakibat pada Peminjam wajib membayar
            denda kepada Doeku sejumlah ___% dari jumlah Permintaan Pinjaman.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>8. PEMBAYARAN OLEH PEMINJAM</Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>8.1</Text>
          <Text style={styles.normalText}>
            Pembayaran kembali Pinjaman, dengan bunga, harus dilakukan secara
            berkala. Ketika Peminjam mengalami gagal bayar, Doeku akan
            memberikan peringatan tidak dilakukan pembayaran kepada Peminjam
            dalam jangka waktu 7 (tujuh) Hari Kerja. Apabila Peminjam gagal
            membayar membayar kembali angsuran ketiga secara berturut-turut,
            Peminjam dinyatakan wanprestasi. Apabila terjadi wanprestasi, Doeku
            akan melakukan restrukturisasi skema pembayaran kembali Pinjaman
            Peminjam dan dapat melakukan tindakan hukum dalam proses
            penyelesaian.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>8.2</Text>
          <Text style={styles.normalText}>
            Peminjam memahami, dan setuju untuk mematuhi untuk membayar setiap
            pengaturan fasilitas Pinjaman, biaya lain-lain kepada Doeku dan/
            atau pihak terkait lainnya dalam melakukan pengaturan dan
            administratif fasilitas Pinjaman dan perjanjian terkait. Sebagai
            tambahan, Peminjam sepakat untuk membayar semua denda, biaya
            keterlambatan pembayaran, biaya penagihan, dan biaya lain kepada
            Doeku sebagai hasil dari kegiatan yang dilakukan oleh Doeku atas
            bagian dari Jasa.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>
            9. PERBAHARUAN DATA dan PERJANJIAN BERLANGGANAN
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>9.1</Text>
          <Text style={styles.normalText}>
            Doeku dapat sewaktu-waktu melakukan modifikasi data Peminjam
            dan/atau Pendana("Modifikasi") yang terdapat dalam database Platform
            Doeku. Hal ini termasuk, namun tidak terbatas pada, perbaharuan
            informasi Peminjam dan/atau Pendana, Data Pribadi, dan mengunggah
            dokumen tambahan yang berkaitan dengan data Anda. Anda akan
            diberikan pemberitahuan selama 14 (empat belas) hari kalendar
            ("Periode Pemberitahuan") untuk menerima atau menolak Modifikasi.
            Anda dianggap mengetahui Modifikasi yang dilakukan, apabila tidak
            ada respon yang diberikan kepada Doeku selama Periode Pemberitahuan.
            Anda dapat mengajukan Modifikasi atas Data Pribadi Anda sesuai
            dengan ketentuan yang terdapat pada Prosedur Manajemen Data Pribadi
            yang tersedia di Platform Doeku.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>9.2</Text>
          <Text style={styles.normalText}>
            Doeku berhak dari waktu ke waktu sesuai diskresinya merubah termasuk
            menambahkan maupun mengurangi isi dan bagian Perjanjian Berlangganan
            (“Amandemen”) yang mengikat Pendana/Pelanggan dengan Doeku sebagai
            dasar hukum untuk pemanfaatan jasa dan penggunaan platform Doeku,
            dimana Amandemen ini berlaku efektif pada tanggal dimana Doeku
            memberikan pemberitahuan kepada Pendana melalui e-mail dari Doeku,
            karyawan, perwakilan atau cara lainnya yang ditentukan Doeku perihal
            Amandemen, dengan ketentuan Amandemen tersebut: • Diwajibkan
            berdasarkan ketentuan hukum dan/atau peraturan perundang-undangan
            yang berlaku (“Ketentuan Hukum”) atau sewajarnya diperlukan menurut
            diskresi atau pertimbangan Doeku dalam mendukung upayanya untuk
            mematuhi Ketentuan Hukum atau mengadakan penyesuaian secara
            operasional maupun transaksional terhadap syarat atau ketentuan
            sebagaimana diatur Ketentuan Hukum tersebut; atau • Sewajarnya
            diperlukan untuk kelancaran pelaksanaan Perjanjian Berlangganan yang
            bersangkutan atau pemenuhan kewajiban Pendana/Pelanggan, hak Doeku
            dan/atau Peminjam berdasarkan perjanjian terkait yang disepakati
            atau mengikat masing-masing pihak; • Sewajarnya diperlukan dalam
            rangka memastikan kepatuhan Pendana/Pelanggan terhadap kebijakan dan
            prosedur internal Doeku atau mendukung kelancaran transaksi Pendana
            pada dan melalui platform Doeku; dan • Tidak memiliki dampak
            kerugian material terhadap Pendana yang dapat dikuantifisir secara
            nyata dan dibuktikan oleh Pendana melalui mekanisme pembuktian dalam
            Pasal 1865 dan 1866 Kitab Undang-Undang Hukum Perdata, Pasal 5 ayat
            1 Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi
            Elektronik (berikut perubahannya dari waktu ke waktu) dan Pasal 164
            HIR (Het Herziene Indonesisch Reglement)
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>9.2.1</Text>
          <Text style={styles.normalText}>
            Diwajibkan berdasarkan ketentuan hukum dan/atau peraturan
            perundang-undangan yang berlaku (“Ketentuan Hukum”) atau sewajarnya
            diperlukan menurut diskresi atau pertimbangan Doeku dalam mendukung
            upayanya untuk mematuhi Ketentuan Hukum atau mengadakan penyesuaian
            secara operasional maupun transaksional terhadap syarat atau
            ketentuan sebagaimana diatur Ketentuan Hukum tersebut; atau
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>9.2.2</Text>
          <Text style={styles.normalText}>
            Sewajarnya diperlukan untuk kelancaran pelaksanaan Perjanjian
            Berlangganan yang bersangkutan atau pemenuhan kewajiban
            Pendana/Pelanggan, hak Doeku dan/atau Peminjam berdasarkan
            perjanjian terkait yang disepakati atau mengikat masing-masing
            pihak;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>9.2.3</Text>
          <Text style={styles.normalText}>
            Sewajarnya diperlukan dalam rangka memastikan kepatuhan
            Pendana/Pelanggan terhadap kebijakan dan prosedur internal Doeku
            atau mendukung kelancaran transaksi Pendana pada dan melalui
            platform Doeku; dan
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>9.2.4</Text>
          <Text style={styles.normalText}>
            Tidak memiliki dampak kerugian material terhadap Pendana yang dapat
            dikuantifisir secara nyata dan dibuktikan oleh Pendana melalui
            mekanisme pembuktian dalam Pasal 1865 dan 1866 Kitab Undang-Undang
            Hukum Perdata, Pasal 5 ayat 1 Undang-Undang Nomor 11 Tahun 2008
            tentang Informasi dan Transaksi Elektronik (berikut perubahannya
            dari waktu ke waktu) dan Pasal 164 HIR (Het Herziene Indonesisch
            Reglement)
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>10. REPRENTASI DAN JAMINAN</Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>10.1</Text>
          <Text style={styles.normalText}>
            Peminjam mewakili dan menjamin kepada Doeku bahwa Peminjam
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>10.1.1</Text>
          <Text style={styles.normalText}>
            Perusahaan yang didirikan berdasarkan Hukum Indonesia dan/atau Warga
            Negara Indonesia;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>10.1.2</Text>
          <Text style={styles.normalText}>
            Mampu membayar hutang dan tidak ada alasan yang menyatakan bahwa
            Peminjam tidak mampu membayar hutangnya ketika jatuh tempo dan harus
            dibayar;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>10.1.3</Text>
          <Text style={styles.normalText}>
            Memiliki kapasitas hukum dan telah memperoleh perizinan dan/atau
            persetujuan yang diperlukan berdasarkan Hukum atau perjanjian lain
            yang mana Peminjam terikat untuk mengikatkan diri dalam S&K dan
            melaksanakan kewajiban yang tertera di S&K dan perjanjian lainnya
            terkait. Selanjutnya, Peminjam harus sudah mengambil langkah yang
            diperlukan untuk mengikatkan dirinya dalam Perjanjian dan melakukan
            kewajiban yang terdapat dalam S&K dan perjanjian lainnya terkait.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>10.1.4</Text>
          <Text style={styles.normalText}>
            Kewajiban yang diasumsikan mengikat kepada Peminjam dalam S&K dan
            perjanjian lainnya terkait juga dianggap legal, sah, mengikat, dan
            dapat ditegakkan kepada Peminjam;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>10.1.5</Text>
          <Text style={styles.normalText}>
            Semua informasi yang diberikan Peminjam kepada Doeku adalah benar
            dan akurat secara materi dan sesuai dengan tanggal dokumen diberikan
            atau tanggal yang tertera pada dokumen; dan
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>10.1.6</Text>
          <Text style={styles.normalText}>
            Tidak ada tindakan hukum, gugatan, atau proses hukum, atau didepan
            pengadilan, sidang, badan pemerintahan, agensi atau badan resmi atau
            arbitrator (baik dalam proses atau akan diajukan) yang dapat
            berdampak pada legalitas, keabsahan, atau penegakan S&K ini atau
            perjanjian lainnya yang terkait, atau mempengaruhi kemampuan
            Peminjam untuk menjalankan kewajiban.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>11. KUASA</Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>11.1</Text>
          <Text style={styles.normalText}>
            Peminjam memberikan kuasa Doeku untuk:
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>11.1.1</Text>
          <Text style={styles.normalText}>
            Melaksanakan pengecekan dan penilaian kredit kepada Peminjam
            termasuk melakukan asesmen atau validasi terhadap setiap Data
            Pribadi dan dokumen atau informasi apapun yang diperoleh dari atau
            disingkapkan oleh Peminjam;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>11.1.2</Text>
          <Text style={styles.normalText}>
            Mendapatkan dan melakukan verifikasi informasi mengenai Peminjam,
            sesuai dengan pertimbangan tunggal dan absolut Doeku jika dianggap
            Perlu;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>11.1.3</Text>
          <Text style={styles.normalText}>
            Mendapatkan dan melakukan verifikasi informasi mengenai Peminjam,
            sesuai dengan pertimbangan tunggal dan absolut Doeku jika dianggap
            Perlu;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>11.1.4</Text>
          <Text style={styles.normalText}>
            Mengungkapkan informasi dan/ atau data terkait Peminjam dan
            rekening-rekeningnya, dan/ atau kartu kredit yang dimiliki (jika
            ada) kepada Doeku, atau informasi lainnya yang dipandang penting
            oleh Doeku di:
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>11.1.4.1</Text>
          <Text style={styles.normalText}>
            kantor perwakilan dan cabang dan/ atau perusahaan atau perusahaan
            asosiasi terkait Peminjam, pada juridiksi manapun;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>11.1.4.2</Text>
          <Text style={styles.normalText}>
            Pemerintah atau badan pemerintahan atau badan otoritas;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>11.1.4.3</Text>
          <Text style={styles.normalText}>
            Setiap calon pengalihan hak Peminjam atau pihak yang telah atau
            dapat memiliki hubungan kontraktual dengan Peminjam dalam kaitannya
            dengan fasilitas Pinjaman;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>11.1.4.4</Text>
          <Text style={styles.normalText}>
            Biro kredit, termasuk anggota biro kredit tersebut;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>11.1.4.5</Text>
          <Text style={styles.normalText}>
            Setiap pihak ketiga, penyedia jasa, agen, atau partner bisnis
            (termasuk, tidak terbatas pada, referensi kredit atau agen evaluasi)
            dimanapun situasinya mungkin terjadi; dan
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>11.1.4.6</Text>
          <Text style={styles.normalText}>
            Kepada pihak yang membuka informasi yang diperbolehkan oleh Hukum
            untuk membuka informasi.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>12. GANTI RUGI </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}></Text>
          <Text style={styles.normalText}>
            Peminjam setuju untuk mengganti rugi Doeku dan Petugasnya terhadap
            atas semua kerugian, pajak, biaya, biaya hukum, dan kewajiban (saat
            ini, di masa yang akan datang, kontingensi, atau apapun yang
            berbasis ganti rugi), yang diderita oleh Doeku sebagai hasil atau
            hubungan dari pelanggaran S&K atau perjanjian lainnya terkait yang
            dilakukan oleh Peminjam dan/atau tindakan yang dilakukan oleh Doeku
            ketika terjadinya pelanggaran S&K oleh Peminjam atau perjanjian
            lainnya yang terkait. Resiko Kredit atau Gagal Bayar dan seluruh
            kerugian dari atau terkait dengan kesepakatan LPBBTI ditanggung
            sepenuhnya oleh Pemberi dana. Tidak ada lembaga atau otoritas negara
            yang bertanggung jawab atas resiko gagal bayar dan kerugian
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>13. PENGECUALIAN </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}></Text>
          <Text style={styles.normalText}>
            Doeku ataupun Petugasnya tidak bertanggung jawab secara kontraktual
            dan ketika terjadi pelanggaran Perjanjian, (termasuk kelalaian atau
            pelanggaran kewajiban), untuk (i) terjadinya kehilangan keuntungan,
            bisnis atau pendapatan, (ii) setiap biaya atau beban, atau secara
            tidak langsung, atau langsung, diderita atau disebabkan oleh
            Peminjam sebagai hasil atau dalam hubungan dengan kententuan
            penyediaan Jasa. Pemerintah yaitu dalam hal ini Otoritas Jasa
            Keuangan,tidak bertanggung jawab atas setiap pelanggaran atau
            ketidakpatuhan oleh Pengguna,baik Pemberi dana maupun Penerima
            dana(baik karena kesengajaan atau kelalaian Pengguna)terhadap
            ketentuan peraturan perundang-undangan maupun kesepakatan atau
            perikatan antara Penyelenggara dengan Pemberi dana dan/atau Penerima
            dana.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>14. ESENSI WAKTU </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}></Text>
          <Text style={styles.normalText}>
            Adalah esensial dalam kewajiban dalam perjanjian yang mengikat bagi
            para pihak bahwa Peminjam akan melaksanakan kewajibannya tepat waktu
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>
            15. KETIADAAN PENGABAIAN HAK
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}></Text>
          <Text style={styles.normalText}>
            Kegagalan atau penundaan dalam pelaksanaan suatu hak, kewenangan,
            atau keistimewaan terkait S&K ini tidak akan dianggap sebagai
            pengabaian hak. dan pelaksanaan satu atau sebagian dari suatu hak,
            kewenangan atau keistimewaan tidak akan dianggap menghalangi segala
            konsekuensinya atau atau kelanjutan pelaksanaan dari suatu hak,
            kewajiban atau keistimewaan.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>16. AMANDEMEN</Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>16.1</Text>
          <Text style={styles.normalText}>
            Doeku berhak dari waktu ke waktu sesuai diskresinya merubah termasuk
            menambahkan maupun mengurangi isi dan bagian S&K ini tanpa kewajiban
            maupun formalitas apapun untuk memperoleh persetujuan dari atau
            memberitahukan kepada Calon Peminjam, Peminjam atau pihak ketiga
            manapun. Keberlakuan Syarat dan Ketentuan baru hasil perubahan
            berlaku seketika dan efektif mengikat secara hukum bagi Calon
            Peminjam dan Peminjam saat Doeku menampilkannya dalam Platform Doeku
            dari waktu ke waktu. Oleh karenanya Calon Peminjam: (i) selama masih
            terdaftar pada Platform Doeku; (ii) masih menggunakan atau
            memanfaatkan jasa Doeku; dan/atau (iii) masih mengakses Platform
            Doeku, atau Peminjam dalam hal (i) Peminjam masih memiliki kewajiban
            yang tertunggak atau belum terlaksana pada Para Pendana dan/atau
            Doeku; (ii) Peminjam masih terikat atau merupakan pihak pada
            kesepakatan dalam perjanjian pinjaman atau sejenisnya yang
            melibatkan Doeku dan Para Pendana; dan/atau (iii) Doeku dan/atau
            Para Pendana masih memiliki hak yang dapat ditagih atau dilaksanakan
            terhadap Peminjam, maka masing-masing Calon Peminjam dan Peminjam
            akan bersikap proaktif dalam memeriksa dan memantau Syarat dan
            Ketentuan yang tersedia pada Platform Doeku untuk dapat secara
            kontinyu dan aktif mengetahui hasil perubahan S&K (apabila ada) demi
            memahami ketentuan di dalamnya yang mengikat Calon Peminjam dan
            Peminjam. Tanpa mengurangi atas ketentuan sebelumnya, dimulainya
            atau berlanjutnya Jasa setelah terjadi perubahan tersebut akan
            dianggap sebagai persetujuan dari Peminjam akan berlanjutnya
            perubahan tersebut.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>16.2</Text>
          <Text style={styles.normalText}>
            Untuk kejelasan dan demi menghindari keraguan, Calon Peminjam dan
            Peminjam dapat mengunduh dan menyimpan versi pdf (atau versi lain
            yang disediakan Doeku) dari S&K maupun S&K hasil perubahan (apabila
            ada) yang tersedia pada Platform Doeku dalam rangka mematuhi dan
            memahami setiap ketentuan di dalamnya. Calon Peminjam dan Peminjam
            wajib segera menghubungi pihak perwakilan Doeku (customer service)
            dalam hal terdapat masalah, kegagalan, gangguan atau hambatan dalam
            mengunduh S&K saat ini atau hasil perubahannya agar Doeku dapat
            memberi bantuan atau tindaklanjut dalam mengatasi masalah yang
            terjadi dan memastikan keberhasilan pengunduhan tersebut. Karenanya
            Calon Peminjam dan Peminjam tidak memiliki alasan untuk bersikap
            lalai, tidak memperhatikan, khilaf, mengacuhkan atau melupakan isi
            S&K saat ini maupun hasil perubahan sebagai alasan maupun dalil
            untuk tidak mematuhi setiap ketentuan di dalamnya. Calon Peminjam
            dan Peminjam dianggap telah paham, tanpa paksaan, kekhilafan maupun
            penipuan setiap substansi atau isi S&K maupun S&K hasil perubahan
            (apabila ada) dengan telah diberikan oleh Doeku haknya untuk
            mengunduh dan menyimpan tersebut di atas dalam memahami dan mematuhi
            setiap ketentuan yang berlaku.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>
            17. HUKUM DAN PERATURAN YANG BERLAKU
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>17.1</Text>
          <Text style={styles.normalText}>
            S&K ini akan diatur dan ditafsirkan sesuai dengan ketentuan hukum
            Republik Indonesia;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>17.2</Text>
          <Text style={styles.normalText}>
            Dalam rangka mematuhi gugatan atau tindakan hukum atau prosedur
            (tiap-tiapnya akan disebut sebagai \"Prosedur\") yang terkait
            perselisihan yang timbul akibat atau dalam kaitannya dengan S&K ini,
            setiap pihak akan tunduk pada jurisdiksi Badan Arbitrase Nasional
            Indonesia (BANI)
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.mainheaderText}>
            18. PEMBERITAHUAN DATA PRIBADI
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.1</Text>
          <Text style={styles.normalText}>
            Dari waktu ke waktu, Doeku berhak mengumpulkan informasi dan data
            berikut ini:
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.1.1</Text>
          <Text style={styles.normalText}>
            Data Pribadi terkait pemilik, pemberi dana utama, partner, direktur,
            pegawai atau kuasanya, pegawai, Peminjam, Pendana, pembayar, pihak
            yang dibayarkan, penjamin, penyedia jaminan lainnya, dan pihak-pihak
            lain yang terkait dengan Peminjam dan/atau Pendana (secara bersama,
            semua pihak-pihak yang disebutkan adalah \"Pihak Terkait\"). Data
            pribadi dapat mencakup nama, identitas, tanggal lahir, detil kontrak
            dan informasi personal terkait lainnya; dan
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.1.2</Text>
          <Text style={styles.normalText}>
            Informasi dan data yang didapatkan dari kegiatan umum yang terkait
            dengan Doeku. Data Pribadi tersebut dapat mencakup tanda tangan,
            jawaban dari pertanyaan yang dikhususkan untuk verifikasi keamanan,
            kontak darurat atau detil kontak lainnya.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.2</Text>
          <Text style={styles.normalText}>
            Data Pribadi dari Pihak Terkait dapat diproses, disimpan,
            ditransfer, atau diungkapkan sesuai dengan Hukum yang berlaku.
            Kesepakatan Bersama
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.3</Text>
          <Text style={styles.normalText}>
            Anda akan dianggap menyetujui (atau mendapatkan persetujuan dari
            Pihak Terkait) terhadap pengumpulan, penggunaan, dan pengungkapan
            Data Pribadi Pihak Terkait yang disebutkan diatas oleh Anda secara
            terus menerus, penggunaan oleh jasa Doeku dan/atau persetujuan dari
            syarat dan ketentuan yang tertera
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.4</Text>
          <Text style={styles.normalText}>
            Semua pihak, termasuk Pendana, penjamin atau institusi yang
            menyediakan jasa kepada Doeku, setuju dengan pengumpulan,
            penggunaan, dan pengungkapan data pribadi oleh seseorang secara
            terus menerus, penggunaan oleh jasa Doeku dan/atau persetujuan dari
            syarat dan ketentuan yang tertera. Tujuan Penggunaan dan
            Pengungkapan Informasi
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.5</Text>
          <Text style={styles.normalText}>
            Informasi dan data dapat digunakan dan diungkapkan, termasuk pada
            tempat di dalam dan luar Indonesia untuk tujuan berikut (secara
            keseluruhan disebut \"Tujuan Yang Diizinkan\"):
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.5.1</Text>
          <Text style={styles.normalText}>
            Untuk mengelola akurasi informasi \"mengetahui Peminjam anda\"; dan
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.5.2</Text>
          <Text style={styles.normalText}>
            Untuk melakukan verifikasi identitas atau wakil yang menghubungi
            Doeku, atau mungkin dihubungi oleh Doeku, dan untuk melaksanakan
            atau merespon permintaan, pertanyaan, atau instruksi dari perwakilan
            terverifikasi atau individu lainnya yang mengikuti prosedur keamanan
            saat ini.
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.6</Text>
          <Text style={styles.normalText}>
            Data pribadi dapat diungkapkan, ketika dibolehkan oleh Hukum yang
            berlaku, kepada orang atau badan (di dalam atau di luar Indonesia)
            di bawah (harap dicatat bahwa ini bukanlah daftar lengkap) untuk
            Tujuan Yang Diizinkan atau untuk proses yang sesuai dengan Tujuan
            yang diizinkan dalam kebutuhan:
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.6.1</Text>
          <Text style={styles.normalText}>
            Setiap Agen, kontraktor, atau pihak ketiga penyedia jasa yang
            menyediakan jasa perbankan, pengiriman dana, administrasi, surat
            menyurat, telekomunikasi, pusat telpon, proses bisnis, perjalanan,
            visa, manajemen pengetahuan, sumber daya manusia, proses data,
            teknologi informasi, komputer, pembayaran, pengumpulan hutang,
            pengecekan referensi kredit, atau keamanan atau servis lain kepada
            Doeku dalam kaitannya dengan kegiatan operasional bisnis Doeku;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.6.1</Text>
          <Text style={styles.normalText}>
            Setiap Agen, kontraktor, atau pihak ketiga penyedia jasa yang
            menyediakan jasa perbankan, pengiriman dana, administrasi, surat
            menyurat, telekomunikasi, pusat telpon, proses bisnis, perjalanan,
            visa, manajemen pengetahuan, sumber daya manusia, proses data,
            teknologi informasi, komputer, pembayaran, pengumpulan hutang,
            pengecekan referensi kredit, atau keamanan atau servis lain kepada
            Doeku dalam kaitannya dengan kegiatan operasional bisnis Doeku;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.6.2</Text>
          <Text style={styles.normalText}>
            Individu atau entitas yang merupakan bagian dari Doeku dan dibawah
            kewajiban kerahasiaan dalam pengungkapan entitas Doeku walaupun
            hanya pada tahap yang dibutuhkan untuk memenuhi Tujuan Perizinan
            terkait;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.6.3</Text>
          <Text style={styles.normalText}>
            Individu atau entitas dimana Doeku memiliki kewajiban atau
            diwajibkan untuk mengungkapkan pelaksanaan proses hukum, atau
            kewajiban hukum dalam dan luar negeri, termasuk pengungkapan pada
            pengadilan, sidang dan/ atau otoritas hukum, peraturan, pajak, dan
            pemerintahan;
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.6.4</Text>
          <Text style={styles.normalText}>
            Setiap pihak atau calon pengalihan dari Doeku atau pemindahan dari
            Doeku dalam hubungannya Peminjam, atau seluruh maupun sebagian aset
            atau bisnis Doeku; atau
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.6.5</Text>
          <Text style={styles.normalText}>
            pihak-pihak yang memberikan atau mengajukan untuk memberikan jaminan
            atau jaminan pihak ketiga untuk menjamin atau menjaga kewajiban
            Peminjam. Integrasi dengan Prosedur Manajemen Data Pribadi
          </Text>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.headerText}>18.7</Text>
          <Text style={styles.normalText}>
            Anda wajib untuk memperhatikan dengan teliti Prosedur Manajemen Data
            Pribadi pada Platform Doeku yang berlaku mengikat setiap Pengguna
            secara hukum, sebelum dan saat melakukan aktifitas transaksi dalam
            Platform Doeku dan memanfaatkan layanan Doeku dari waktu ke waktu.
            Prosedur Manajemen Data Pribadi tersebut wajib dipatuhi dengan
            prioritas yang sama dengan S&K ini. Dalam hal terkait kerahasiaan
            atau manajemen penggunaan dan keamanan Data Pribadi atau informasi
            dan dokumen lain dari Anda terdapat pertentangan atau perbedaan
            penafsiran ketentuan Prosedur Manajamen Data Pribadi dengan S&K ini
            yang mengakibatkan kesulitan dalam penerapan dan pelaksanaannya,
            maka ketentuan Prosedur Manajemen Data Pribadi tersebut yang akan
            berlaku dan wajib Anda patuhi sepanjang berkaitan dengan ketentuan
            yang bertentangan atau berbeda penafsiran sebagaimana dijelaskan di
            atas.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.wrapperCheckbox}>
        <Checkbox
          value={isChecked}
          onValueChange={setCheckedHandler}
          disabled={isDisable}
          testID="checkbox"
        />
        <Text style={{ color: isDisable ? "#aaa" : "#000" }}>
          Saya mengerti dan menyetujui syarat dan ketentuan
        </Text>
      </View>
      <MyButton
        testID="button"
        btnText="selanjutnya"
        btnType={isDisable || !isChecked ? "secondary" : "primary"}
        btnWidth="110%"
        onPress={routeHandler}
        btnDisable={isDisable || !isChecked}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wraperSection: {
    flex: 1,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  normalText: {
    fontFamily: "InterRegular",
    textAlign: "justify",
    width: "78%",
  },
  headerText: {
    fontFamily: "InterSemiBold",
    fontSize: 16,
    textAlign: "left",
    width: "20%",
    color: `${color.primary}`,
  },
  mainheaderText: {
    fontFamily: "InterSemiBold",
    fontSize: 16,
    textAlign: "left",
    width: "100%",
    color: `${color.primary}`,
  },
  wrapperCheckbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
  wrapperText: {
    flexDirection: "row",
    marginBottom: 15,
  },
});
