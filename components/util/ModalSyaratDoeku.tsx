import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { terbilang } from "./angkaMenjadiTerbilang";
import { bulanTerbilang } from "./bulanTerbilang";
import toRupiah from "./toRupiah";
// import { getEB } from "./EventBus";

export default function ModalSyaratDoeku({
  id_trb,
  lender,
}: {
  id_trb: string;
  lender: {
    name: string;
    address: string;
    email: string;
    phone: string;
    sign: string;
  };
}) {
  const [trbData, setTrbdata] = useState({});
  const [loading, setLoading] = useState(false);
  const [bunga, setBunga] = useState(0);
  const [future, setFuture] = useState();
  const [hfuture, sethFuture] = useState(1);
  const [bfuture, setbFuture] = useState(1);
  const [tfuture, settFuture] = useState(2001);
  const [amount, setAmount] = useState();
  const [repayone, setRepayone] = useState();
  const [repaytwo, setRepaytwo] = useState();
  const [repaythree, setRepaythree] = useState();
  const [detailBorrower, setDetailborrower] = useState();
  const dt = DateTime.now().setZone("Asia/Singapore");
  const compDate = dt.toFormat("dd-MM-yyyy hh:mm:ss");
  const mmyy = dt.toFormat("MMyy");
  const bulan = dt.toFormat("MM");
  const hari = dt.toFormat("dd");
  const tahun = dt.toFormat("yy");

  //   useEffect(() => {
  //     fetchData = async (id_trb) => {
  //       const body = {};
  //       const borrower = await getEB(
  //         body,
  //         `/api/eventbus/ceklending?id_trb=${id_trb}`,
  //         setLoading
  //       );
  //       setDetailborrower(borrower);
  //     };
  //     fetchData(id_trb);
  //   }, []);

  //   useEffect(() => {
  //     if (detailBorrower) {
  //       const mybunga =
  //         detailBorrower.amountdebt -
  //         (detailBorrower?.repayone +
  //           detailBorrower.repaytwo +
  //           detailBorrower.repaythree);
  //       setBunga(mybunga);

  //       setFuture(dt.plus({ days: detailBorrower.tenor }).toFormat("dd-MM-yyyy"));
  //       sethFuture(dt.plus({ days: detailBorrower.tenor }).toFormat("dd"));
  //       setbFuture(dt.plus({ days: detailBorrower.tenor }).toFormat("MM"));
  //       settFuture(dt.plus({ days: detailBorrower.tenor }).toFormat("yy"));

  //       setAmount(detailBorrower.amountdebt);
  //       setRepayone(detailBorrower.repayone);
  //       setRepaytwo(detailBorrower.repaytwo);
  //       setRepaythree(detailBorrower.repaythree);
  //       setTrbdata(detailBorrower);
  //     }
  //   }, [detailBorrower]);

  return (
    <View style={styles.container}>
      <Text style={styles.headingModal}>
        PERJANJIAN LAYANAN PENDANAAN BERSAMA BERBASIS TEKNOLOGI INFORMASI ANTARA
        PT. DOEKU PEDULI INDONESIA DENGAN PT. KRESNA PUTRA INDONESIA
      </Text>
      {/* <Text style={styles.textModalcen}>
        Nomor : {trbData?.id_ub}/DPI-KPI/PM/{mmyy}
      </Text> */}
      <Text style={styles.textModaljus}>
        Padahari ini, Tanggal {hari}-{bulan}-20{tahun} (
        {bulanTerbilang(hari, bulan, `20${tahun}`)}) telah dibuat dan
        ditandatangani perjanjian Layanan Pendanaan Bersama Berbasis Teknologi
        Informasi (“Perjanjian Layanan” atau Perjanjian”) dan berdasarkan Surat
        Kuasa tanggal 25 Februari 2020 Pendana kepada Pihak Penyelenggara oleh
        antara :
      </Text>
      <View style={styles.column1}>
        <Text>1.</Text>
        <View>
          <Text>
            <Text style={styles.textModalb}>Tuan HENDRA DWIJOSEPUTRO</Text>,
            Wirawasta, bertempat tinggal di Makassar, Jalan Bougenville Raya No.
            8 Makassar, pemegang Kartu Tanda Penduduk Nomor 7371093105820007
            demikian bertindak dalam jabatannya selaku Direktur untuk dan atas
            nama{" "}
            <Text style={styles.textModalb}>
              PT. DOEKU PEDULI INDONESIA, Berkedudukan di Makassar,
            </Text>{" "}
            yang anggaran dasarnya didirikan dengan akta tertanggal 15 Mei 2019
            Nomor 04, yang dibuat dihadapan IWAN SETIAWAN JAURY, Sarjana Hukum,
            Magister Kenotariatan, Notaris di Kabupaten Gowa. Akta mana telah
            mendapat pengesahan dari Menteri Hukum dan Hak Asasi Manusia
            Republik Indonesia, demikian berdasarkan Keputusannya tertanggal 16
            Mei 2019 Nomor AHU-0024645.AH.01.01.Tahun 2019 dan kemudian
            berturut-turut diubah dan terakhir diubah dengan akta tertanggal 26
            September 2019 Nomor 09, yang dibuat dihadapan IWAN SETIAWAN JAURY,
            SH,M.Kn, Notaris di Kabupaten Gowa, anggaran dasar mana telah
            diterima dan dicatat dalam Sistem Administrasi Badan Hukum
            Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia
            tertanggal 26 September 2019 Nomor AHU-AH.01.03-033772 selanjutnya
            disebut : “Perseroan”;
          </Text>
          <Text>
            -untuk selanjutnya akan disebut :{" "}
            <Text style={styles.textModalb}>Penyelenggara.</Text>
          </Text>
        </View>
      </View>
      <View style={styles.column1}>
        <Text>2.</Text>
        <View>
          <Text>
            <Text style={styles.textModalb}>PT. KRESNA PUTRA INDONESIA</Text>,
            sebuah korporasi yang diorganisasi dan ada di bawah dan berdasarkan
            Hukum Negara Republik Indonesia yang anggaran dasarnya didirikan
            dengan akta tertanggal 20 Juni 2019 Nomor 03, yang dibuat dihadapan
            IWAN SETIAWAN JAURY, Sarjana Hukum, Magister Kenotariatan, Notaris
            di Kabupaten Gowa. Akta mana telah mendapat pengesahan dari Menteri
            Hukum dan Hak Asasi Manusia Republik Indonesia tertanggal 20 Juni
            2019 Nomor AHU.0029364.AH.01.01, dan memiliki alamat kantor di Jalan
            Andi Tonro No. 18 B Tombolo Somba Opu, Kabupaten Gowa, Sulawesi
            Selatan, yang di wakili oleh Direktur Perseroan{" "}
            <Text style={styles.textModalb}>Tuan RAYMOND ALEXANDER OETAMA</Text>
          </Text>
          <Text>
            -untuk selanjutnya akan disebut :{" "}
            <Text style={styles.textModalb}>Pendana</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.textModaljus}>
        -untuk selanjutnya masing-masing disebut : “Para Pihak”.
      </Text>
      <Text style={styles.textModaljus}>
        -Kedua belah pihak telah sepakat untuk mengadakan ikatan perjanjian
        Layanan Pinjam Meminjam Uang Berbasis Teknologi dengan
        ketentuan-ketentuan dan syarat-syarat sebagai berikut :
      </Text>
      <Text style={styles.headingModal}>Pasal 1</Text>
      <Text style={styles.headingModal}>Definisi</Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>
          “Layanan Pendanaan Bersama Berbasis Teknologi Informasi”
        </Text>{" "}
        adalah Penyelenggaraan layanan jasa keuangan untuk mempertemukan Pendana
        dengan Peminjam dalam rangka melakukan perjanjian pinjam meminjam dalam
        mata uang rupiah secara langsung melalui sistem elektronik dengan
        menggunakan jaringan internet.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Sistem Elektronik”</Text> adalah
        serangkaian perangkat dan prosedur elektronik yang berfungsi
        mempersiapkan, mengumpulkan, mengolah, menganalisis, menyimpan,
        menampilkan, mengumumkan, mengirimkan, dan/atau menyebarkan informasi
        elektronik dibidang layanan jasa keuangan.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Teknologi Informasi”</Text> adalah
        suatu teknik untuk mengumpulkan, menyiapkan, menyimpan, memproses,
        mengumumkan, menganalisis, dan/atau menyebarkan informasi di bidang
        layanan jasa keuangan.
      </Text>
      <Text style={styles.textModaljus}>
        “Penyelenggara Layanan Pendanaan Bersama Berbasis Teknologi Informasi
        yang selanjutnya disebut Penyelenggara adalah Badan Hukum Indonesia yang
        menyediakan, mengelola, dan mengoperasikan Layanan Pinjam Meminjam Uang
        Berbasis Teknologi Informasi. Dalam hal ini PT. DOEKU PEDULI INDONESIA
        dengan produk bernama "DOEKU" adalah perusahaan penyelenggara yang
        berbentuk badan hukum Layanan Pendanaan Bersama Berbasis Teknologi
        Informasi yang menyediakan, mengelola, dan mengoperasikan Layanan
        Pendanaan Bersama Berbasis Teknologi Informasi berdasarkan Peraturan
        Otoritas Jasa Keuangan Nomor 10/POJK.05/2022 tentang Layanan Pendanaan
        Bersama Berbasis Teknologi Informasi ("POJK10").
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“PENDANA”</Text> adalah orang, badan
        hukum, dan/atau badan usaha yang mempunyai piutang karena perjanjian
        Layanan Pinjam Meminjam uang berbasis Teknologi informasi.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“PEMINJAM”</Text> adalah orang dan/atau
        badan hukum yang mempunyai utang karena Perjanjian Layanan Pinjam
        Meminjam Uang Berbasis Teknologi.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Pengguna”</Text> Layanan Pinjam
        Meminjam uang berbasis Teknologi Informasi yang selanjutnya disebut
        pengguna” adalah Pendana dan Peminjam yang menggunakan Layanan Pinjam
        Meminjam Uang Berbasis Teknologi Informasi.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}> “Dokumen Elektronik”</Text> adalah
        setiap informasi elektronik yang dibuat, diteruskan, dikirimkan,
        diterima, atau disimpan dalam bentuk analog, digital, elektromagnetik,
        optikal, atau sejenisnya, yang dapat dilihat, ditampilkan, dan/atau
        didengar melalui komputer atau Sistem Elektonik termasuk tetapi tidak
        terbatas pada tulisan, suara, gambar, peta rancangan, foto atau
        sejenisnya, huruf, tanda, angka, kode akses, simbol atau perforasi yang
        memiliki makna atau arti atau atau dapat dipahami oleh orang yang mampu
        memahaminya sebagaimana dimaksud dalam Undang-undang Nomor 11 Tahun 2008
        tentang Informasi dan Transaksi Eletronik.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Perjanjian Pinjaman”</Text> adalah
        kontrak antara Pendana dan Peminjam dimana mereka saling menyetujui
        fasilitas pinjaman dengan batas maksimum total pemberian pinjaman dana
        sebesar {amount && toRupiah(amount || 0, { floatingPoint: 0 })},- (
        {terbilang(amount || 0)} rupiah) dan OJK dapat melakukan peninjauan
        kembali atas batas maksimum total pemberian pinjaman dana tersebut.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}> ”Pinjaman” </Text> adalah sejumlah dana
        yang ditempatkan di Rekening DOEKU yang dipinjamkan oleh Pendana kepada
        Penyelenggara melalui penggunaan Platform PinjamAja.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Platform Doeku” </Text>
        adalah (a) portal web dan atau versi mobile dari portal web yang dibuat,
        dimiliki dan dioperasikan oleh DOEKU yang saat ini terletak di dan dapat
        diakses pada URL berikut: www.doeku.co.id berikut perubahan URL tersebut
        dari waktu ke waktu; dan/atau (b) aplikasi mobile dari www.doeku.id yang
        dibuat, dimiliki dan dioperasikan oleh DOEKU termasuk melalui IOS dan
        android berikut perubahannya dari waktu ke waktu.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Virtual Account”</Text>
        adalah Nomor Rekening yang diberikan oleh Pendana kepada Peminjam untuk
        melaksanakan kewajibannya membayar pinjaman sesuai dengan Perjanjian.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}> “Rekening bersama” </Text>
        selanjutnya disebut “Rekening Escrow” adalah Rekening yang dipegang oleh
        Penyelenggara yang berisi dana yang dikumpulkan bersama. Dana di dalam
        escrow account tersebut digunakan oleh Penyelenggara untuk melaksanakan
        layanan Pinjam Meminjam.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Tanggal Efektif”</Text>
        adalah tanggal Perjanjian berlaku secara efektif setelah Peminjam
        menerima uang dari Pendana melalui rekening Bank Pendana.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Tanggal Berakhir”</Text>
        adalah Tanggal berakhirnya perjanjian secara otomatis dengan mendasarkan
        kepada tanggal efektif dan jangka waktu dari pinjaman.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Hari Kalender”</Text>
        adalah hari (selain hari sabtu, minggu termasuk hari libur nasional)
        dimana bank – bank dibuka untuk usaha pada umumnya.{" "}
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Jangka waktu”</Text>
        adalah Jangka waktu dari fasilitas Pinjaman yang didalamnya termasuk
        Tanggal efektif dan Tanggal berakhirnya Pinjaman.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Suku Bunga”</Text>
        adalah nilai dari pinjaman yang dinyatakan sebagai sekian persen dari
        uang pokok pada tiap waktu yang disepakati. Peminjam harus membayar
        kepada Pendana sejumlah uang yang merupakan ukuran harga sumber daya
        dari pinjaman.{" "}
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Biaya Pajak”</Text>
        adalah biaya yang terkait dengan kewajiban pembayaran pajak atas
        penghasilan atas bunga sebesar 15% (lima belas persen) dari bunga.{" "}
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}> “Hukum” </Text>
        adalah setiap undang-undang dan peraturan, surat keputusan atau
        kebijakan yang memiliki kekuatan hukum termasuk peraturan, peraturan
        daerah dan peraturan perundang-undangan yang berada dibawah lainnya,
        persyaratan dan pedoman dari pemerintah pusat, provinsi, wilayah,
        kotamadya, kabupaten atau pemerintahan regional atau otoritas gabungan
        pemerintahan dan swasta, termasuk yang dari Republik Indonesia dan
        yuridiksi terkait lainnya, dan termasuk kementerian, departemen, komisi,
        biro, dewan, administratif dan atau lembaga atau badan pengatur atau
        instrumen lain darinya yang secara hukum disyaratkan untuk dipatuhi oleh
        suatu pihak, termasuk hukum dan keadilan bersama.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}> "Force Majeure" </Text>
        adalah salah satu peristiwa atau keadaan berikut yang secara langsung
        mempengaruhi kemampuan salah satu atau kedua Pihak untuk melakukan
        kewajibannya berdasarkan Perjanjian ini, termasuk: (a) korban atau
        penghukuman; (b) badai, gempa bumi, angin topan, tornado, banjir atau
        tindakan Tuhan lainnya; (c) perang, aksi terorisme, pemberontakan,
        kerusuhan atau kerusuhan sipil lainnya; (d) epidemi, pembatasan
        karantina atau pembatasan atau penasihat kesehatan publik lainnya; (e)
        pemogokan atau penguncian atau gangguan tenaga kerja lainnya; (f)
        gangguan terhadap layanan transportasi lokal, nasional atau
        internasional; (g) gangguan terhadap layanan internet lokal, nasional
        atau internasional; (h) pemadaman listrik; (i) konfigurasi perangkat
        Pengguna; atau (j ) setiap peristiwa lain yang berada di luar kendali
        wajar Para Pihak yang akan mempengaruhi operasi layanan berdasarkan
        Perjanjian ini.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}> “Produk” </Text>
        mengacu pada pengguna yang mengakses fasilitas baik sebagai Peminjam
        dan/atau Pendana.
      </Text>
      <Text style={styles.headingModal}>Pasal 2</Text>
      <Text style={styles.headingModal}>HAK DAN KEWAJIBAN PARA PIHAK</Text>
      <Text style={styles.headingModal}>Hak dan Kewajiban Pendana</Text>
      <Text style={styles.textModaljus}>Hak Pendana, yaitu :</Text>
      <Text style={styles.textModaljus}>
        a. Dapat mengakses Fasilitas pinjaman sebagai Pendana dan untuk
        menikmati pemeliharaan dan pengembangan Fasilitas pinjaman;
      </Text>
      <Text style={styles.textModaljus}>
        b. Menerima pembayaran pelunasan pinjaman dan bunga Pinjaman tepat
        waktu; dan
      </Text>
      <Text style={styles.textModaljus}>
        c. Menjatuhkan denda kepada Peminjam yang relevan sebagai konsekuensi
        dari kegagalan sebagaimana diatur dalam perjanjian layanan pinjaman
        antara Pendana dan Peminjam.
      </Text>
      <Text style={styles.textModaljus}>Kewajiban Pendana, yaitu:</Text>
      <Text style={styles.textModaljus}>
        a. Menggunakan Fasilitas layanan sesuai dengan hukum dan peraturan yang
        berlaku di Republik Indonesia.
      </Text>
      <Text style={styles.textModaljus}>
        b. Membayar Komisi kepada Penyelenggara sesuai dengan yang telah
        disepakati.
      </Text>
      <Text style={styles.textModaljus}>
        c. Melaksanakan kewajiban lain yang ditetapkan dalam Perjanjian ini.
      </Text>
      <Text style={styles.headingModal}>Hak dan Kewajiban Penyelenggara</Text>
      <Text style={styles.textModaljus}>Hak Penyelenggara, yaitu:</Text>
      <Text style={styles.textModaljus}>
        Untuk menerima manfaat dari pinjaman sesuai dengan Syarat dan ketentuan
        disebutkan dalam Perjanjian ini; dan
      </Text>
      <Text style={styles.textModaljus}>Kewajiban Penyelenggara, yaitu:</Text>
      <Text style={styles.textModaljus}>
        1. Penyelenggara harus membuat fasilitas pinjaman yang tersedia untuk
        Pendana dan bertanggungjawab untuk pemeliharaan dan pengembangan
        diperlukan untuk memastikan interface sukses dari layanan.
      </Text>
      <Text style={styles.textModaljus}>
        2. Penyelenggara harus memiliki rekening escrow dan rekening virtual
        untuk tujuan Fasilitas Pinjaman;
      </Text>
      <Text style={styles.textModaljus}>
        3. Penyelenggara harus menetapkan rekening Virtual untuk setiap
        Peminjam, di mana Peminjam wajib melakukan pembayaran melalui rekening
        escrow Penyelenggara untuk dihubungkan ke rekening Virtual Pendana;
      </Text>
      <Text style={styles.textModaljus}>
        4. Penyelenggara harus memastikan keamanan Fasilitas pinjaman dan semua
        Data Pribadi yang dikumpulkan dari Pendana melalui Fasilitas pinjaman;
      </Text>
      <Text style={styles.textModaljus}>
        5. Dalam melaksanakan kewajiban ini, Penyelenggara harus
        mempertimbangkan Aturan Undang-Undang Nomor 11 Tahun 2008 sebagaimana
        telah diubah dengan Undang-undang Nomor 19 Tahun 2016 tentang Informasi
        dan Transaksi Elektronik serta peraturan dan ketentuan pelaksanaannya
        (Peraturan Menteri Komunikasi dan Informatika No. 20 tahun 2016 tentang
        Perlindungan Data Pribadi dalam Sistem Elektronik) ("Keputusan
        PrivasiData”);
      </Text>
      <Text style={styles.textModaljus}>
        6. Penyelenggara harus mengembangkan dan memelihara sistem layanan
        pelanggan untuk mengatasi masalah Peminjam yang timbul dari dan
        sehubungan dengan penggunaan Fasilitas Pinjaman;
      </Text>
      <Text style={styles.textModaljus}>
        7. Penyelenggara wajib menyediakan Dokumen Elektronik menggunakan
        istilah sederhana, frasa, dan/atau kalimat dalam bahasa Indonesia yang
        mudah dibaca dan dimengerti oleh Pengguna, karena dianggap berguna dan
        tepat; dan
      </Text>
      <Text style={styles.textModaljus}>
        8. Penyelenggara akan membantu Pendana dalam mengumpulkan pembayaran
        dari Peminjam antara lain: mengirimkan pemberitahuan atau peringatan
        surat kepada Peminjam atas nama Pendana, termasuk namun tidak terbatas
        pada melihat mengenai tanggal jatuh tempo, instruksi pembayaran dan
        pemberitahuan lain yang diperlukan dan mengumpulkan pembayaran dari
        Peminjam yang akan diteruskan ke Pendana sebagai pembayaran kembali
        Pinjaman.
      </Text>

      <Text style={styles.headingModal}>Pasal 3</Text>
      <Text style={styles.headingModal}>PEMBERIAN PINJAMAN</Text>
      <Text style={styles.textModaljus}>
        Pendana selaku pemilik modal menyerahkan sejumlah uang tertentu kepada
        Pihak Penyelenggara untuk dipergunakan sebagai dana layanan pinjaman
        uang berbasis Teknologi Informasi, dengan rincian pinjaman sebagai
        berikut :
      </Text>
      <Text style={styles.textModaljus}>a. JumlahPinjaman</Text>
      <Text style={styles.textModaljus}>
        Jumlah Pinjaman yang diberikan oleh Pendana kepada Penyelenggara sebesar
        {amount && toRupiah(amount || 0, { floatingPoint: 0 })},- (
        {terbilang(amount || 0)} rupiah)
      </Text>
      <Text style={styles.textModaljus}>b. Suku BungaPinjaman</Text>
      {/* <Text style={styles.textModaljus}>
        Suku Bunga Pinjaman yang berlaku atas setiap pinjaman yang diberikan
        berdasarkan Pasal 3 (a) akan dikenakan bunga sebesar{" "}
        {trbData?.tenor == 61
          ? "0.15%"
          : trbData?.tenor == 75
            ? "0.13%"
            : "0.1%"}{" "}
        {trbData?.tenor == 61
          ? "Nol koma Lima Belas Persen"
          : trbData?.tenor == 75
            ? "Nol koma Tiga Belas Persen"
            : "Nol koma Satu Persen"}{" "}
        perhari.
      </Text> */}
      <Text style={styles.textModaljus}>c. Jangka WaktuPinjaman</Text>
      {/* <Text style={styles.textModaljus}>
        Jangka Waktu Pinjaman yang diberikan yaitu selama {trbData?.tenor} (
        {terbilang(trbData?.tenor ? trbData?.tenor : 0)}) hari terhitung sejak
        dana Pinjaman diberikan oleh Pendana kepada Peminjam yaitu pada tanggal{" "}
        {compDate} ({bulanTerbilang(hari, bulan, tahun)}) dan berakhir pada
        tanggal {future} ({bulanTerbilang(hfuture, bfuture, tfuture)}) Untuk
        pembayaran ini merupakan satu kesatuan dan bagian yang tidak terpisahkan
        dari Perjanjian ini.
      </Text> */}
      <Text style={styles.headingModal}>Pasal 4 </Text>
      <Text style={styles.headingModal}>BIAYA LAYANAN</Text>
      <Text style={styles.textModaljus}>
        Pendana dengan ini setuju untuk memberikan Biaya Layanan untuk
        kepentingan Penyelenggara sebesar 4% (Empat persen) dari bunga atau
        keuntungan yang terima oleh pendana.
      </Text>
      <Text style={styles.headingModal}>Pasal 5 </Text>
      <Text style={styles.headingModal}>BIAYA PAJAK</Text>
      <Text style={styles.textModaljus}>
        Pendana dengan ini setuju dengan adanya pemotongan pajak yang dilakukan
        oleh penyelenggara sebesar 15% dari bunga pembayaran angsuran.
      </Text>
      <Text style={styles.headingModal}>Pasal 6</Text>
      <Text style={styles.headingModal}>DENDA</Text>
      <Text style={styles.textModaljus}>
        Apabila Peminjam tidak atau gagal membayar pinjaman maka kewajiban
        Peminjam untuk tetap membayar jumlah pinjaman yang telah wajib
        dibayarnya pada saat itu. Peminjam membayar bunga denda atas jumlah
        pinjaman yang tidak atau lalai dibayar tersebut kepada Pendana sebesar
        0,1 % (nol koma satu persen) setiap hari setelah lewatnya Jangka Waktu
        Pinjaman maksimal 90 (sembilan puluh) hari yang telah dihitung dari
        jumlah pinjaman (pokok pinjaman).
      </Text>
      <Text style={styles.headingModal}>Pasal 7</Text>
      <Text style={styles.headingModal}>
        INFORMASI PENGGUNAAN DANA OLEH PENYELENGGARA
      </Text>
      <Text style={styles.textModaljus}>
        Penyelenggara akan memberikan Informasi layanan kepada Pendana berupa :
      </Text>
      <Text style={styles.textModaljus}>
        a. Jumlah dana yang dipinjamkan kepada Peminjam;
      </Text>
      <Text style={styles.textModaljus}>
        b. Tujuan pemanfaatan dana oleh Peminjam ;
      </Text>
      <Text style={styles.textModaljus}>c. Besaran bunga pinjaman;dan</Text>
      <Text style={styles.textModaljus}>d. Jangka waktu pinjaman.</Text>

      <Text style={styles.headingModal}>Pasal 8</Text>
      <Text style={styles.headingModal}>BATASAN TANGGUNG JAWAB</Text>
      <Text style={styles.textModaljus}>
        Penyelenggara tidak akan bertanggung jawab atas setiap dan semua klaim,
        kewajiban, gugatan, proses atau klaim dari segala macam sifat, kerugian,
        kerusakan atau biaya yang timbul dari atau sehubungan dengan pelaksanaan
        Perjanjian ini sejauh terjadinya Force Majeure, termasuk, namun tidak
        terbatas pada (i) penggunaan Fasilitas secara ilegal, tidak wajar atau
        tidak sah; (ii) setiap gangguan, cacat atau kerusakan Fasilitas; (iii)
        setiap ketidakmampuan Penyelenggara untuk melaksanakan kewajibannya
        kepada Pengguna dengan alasan tindakan Pendana atau tindakan atau
        kelalaian Pihak Terkait; atau (iv) segala pelanggaran Para Pihak atas
        kewajiban itikad baik dan kesepakatan yang adil. Dalam hal apapun
        Penyelenggara bertanggung jawab atas gangguan bisnis, kerusakan
        konsekuensial, insidental atau tidak langsung khusus, yang timbul dari
        Perjanjian ini karena terjadinya Force Majeure, baik berdasarkan
        pelanggaran
      </Text>
      <Text style={styles.textModaljus}>
        kontrak, kesalahan (termasuk kelalaian), tanggung jawab produk, pihak
        yang bertindak dengan itikad buruk atau sebaliknya, dan apakah Penyedia
        telah diberitahu tentang kemungkinan kerusakan tersebut.
      </Text>
      <Text style={styles.headingModal}>Pasal 9</Text>
      <Text style={styles.headingModal}>PENYEBARAN DATA PENERIMA PINJAMAN</Text>
      <Text style={styles.textModaljus}>
        Penyebaran data Penerima Pinjaman oleh pihak penyelenggara dan Pemberi
        Pinjaman Diberikan kepada pihak ketiga yang telah bekerjasama dengan
        pihak penyelenggara, antara lain :
      </Text>
      <Text style={styles.textModaljus}>
        1. PT Verihubs Inteligensia Nusantara (eKYC)
      </Text>
      <Text style={styles.textModaljus}>
        Sebagai pihak penyedia layanan jasa eKYC dan tanda tangan digital
        tersertifikasi atas pinjaman yang di ajukan oleh Penerima Pinjaman
        kepada Pemberi Pinjaman yang diajukan pada penyelenggara aplikasi Doeku{" "}
      </Text>
      <Text style={styles.textModaljus}>
        2. PT Citra International Underwriters (Asuransi){" "}
      </Text>
      <Text style={styles.textModaljus}>
        Sebagai pihak penyedia asuransi pinjaman berbasis online yang
        menggunakan data pengguna sebagai dokumen atas klaim apabila penerima
        pinjaman mengalami gagal bayar atas pinjaman yang diberikan oleh Pemberi
        Pinjaman
      </Text>
      <Text style={styles.textModaljus}>
        3. PT. Collmatra Perkasa Indonesia (Collection)
      </Text>
      <Text style={styles.textModaljus}>
        Sebagai pihak yang bergerak dalam bidang jasa penagihan / collection
        dibawah naungan asosiasi AFPI dan OJK, yang membutuhkan semua
        kelengkapan dokumen/data dari penerima pinjaman untuk menangih pinjaman
        yang gagal bayar setelah lewat 90 hari sesuai syarat dari OJK
      </Text>
      <Text style={styles.textModaljus}>
        Penyebaran data Penerima Pinjaman oleh pihak penyelenggara dan Pemberi
        Pinjaman Diberikan kepada pihak ketiga yang telah bekerjasama dengan
        pihak penyelenggara, antara lain :
      </Text>
      <Text style={styles.textModaljus}>
        1. PT Verihubs Inteligensia Nusantara (eKYC)
      </Text>

      <Text style={styles.textModaljus}>
        2. PT Citra International Underwriters (Asuransi){" "}
      </Text>

      <Text style={styles.textModaljus}>
        3. PT. Collmatra Perkasa Indonesia (Collection)
      </Text>
      <Text style={styles.textModaljus}>
        Data yang terima oleh pihak ketiga dan penyelenggara akan dipergunakan
        dalam jangka waktu 2 (dua) tahun terhitung sejak pengguna menyetujui
        perjanjian ini.
      </Text>
      <Text style={styles.textModaljus}>
        Tujuan Kepemilikan dan penggunaan data pengguna oleh Pihak Ketiga
        sebagai berikut :
      </Text>
      <Text style={styles.textModaljus}>
        1. PT Verihubs Inteligensia Nusantara (eKYC)
      </Text>
      <Text style={styles.textModaljus}>
        Sebagai pihak penyedia layanan jasa eKYC dan tanda tangan digital
        tersertifikasi atas pinjaman yang di ajukan oleh Penerima Pinjaman
        kepada Pemberi Pinjaman yang diajukan pada penyelenggara aplikasi Doeku{" "}
      </Text>
      <Text style={styles.textModaljus}>
        2. PT Citra International Underwriters (Asuransi){" "}
      </Text>
      <Text style={styles.textModaljus}>
        Sebagai pihak penyedia asuransi pinjaman berbasis online yang
        menggunakan data pengguna sebagai dokumen atas klaim apabila penerima
        pinjaman mengalami gagal bayar atas pinjaman yang diberikan oleh Pemberi
        Pinjaman
      </Text>
      <Text style={styles.textModaljus}>
        3. PT. Collmatra Perkasa Indonesia (Collection)
      </Text>
      <Text style={styles.textModaljus}>
        Sebagai pihak yang bergerak dalam bidang jasa penagihan / collection
        dibawah naungan asosiasi AFPI dan OJK, yang membutuhkan semua
        kelengkapan dokumen/data dari penerima pinjaman untuk menangih pinjaman
        yang gagal bayar setelah lewat 90 hari sesuai syarat dari OJK
      </Text>
      <Text style={styles.textModaljus}>
        Pihak Pengguna menyetujui adanya Penyebaran data Pengguna yang dilakukan
        oleh Pihak Ketiga.
      </Text>
      <Text style={styles.headingModal}>Pasal 10</Text>
      <Text style={styles.headingModal}>BERAKHIRNYA PERJANJIAN</Text>
      <Text style={styles.textModaljus}>
        Perjanjian ini akan berlaku pada Tanggal Efektif dan akan terus berlaku
        sepenuhnya kecuali diakhiri oleh salah satu Pihak, dengan atau tanpa
        sebab, dengan memberikan pemberitahuan tertulis kepada Pihak lainnya 7
        (tujuh) hari sebelum tanggal pengakhiran yang dimaksud.
      </Text>
      <Text style={styles.textModaljus}>
        Penyelenggara juga dapat mengakhiri Perjanjian ini secara sepihak dengan
        tanpa pemberitahuan sebelumnya kepada Pendana jika:
      </Text>
      <Text style={styles.textModaljus}>
        Keberadaan atau kepribadian hukum dari Pendana harus berhenti atau harus
        izin atau lisensi untuk mengoperasikan dan melakukan bisnis ditunda,
        dibatalkan atau dicabut; Jika Pendana telah diputuskan pailit atau
        bangkrut, atau jika eksekusi mempengaruhi sebagian besar asetnya
        diterbitkan menentangnya; atau jika Pendana memberikan asetnya untuk
        kepentingan kreditornya; Melakukan suatu tindakan atau kelalaian yang
        merupakan pelanggaran materil atau secara jelas tidak konsisten dengan
        Perjanjian ini; Keterlambatan dari Pendana untuk mematuhi kewajibannya
        berdasarkan Perjanjian ini;dan Peminjam melanggar representasi dan
        jaminan berdasarkan Perjanjian ini. Berakhirnya atau pengakhiran
        Perjanjian ini tidak akan membebaskan kewajiban apa pun yang sudah ada
        karena salah satu Pihak.
      </Text>
      <Text style={styles.textModaljus}>
        Para Pihak dengan ini melepaskan permohonan dan manfaat Pasal 1266 KUH
        Perdata yang mengharuskan keputusan pengadilan untuk penghentian
        perjanjian.
      </Text>
      <Text style={styles.headingModal}>Pasal 11</Text>
      <Text style={styles.headingModal}>PENYELESAIAN SENGKETA</Text>
      <Text style={styles.textModaljus}>
        Para Pihak sepakat untuk menyelesaikan sengketa secara damai dengan
        jalan musyawarah untuk mufakat dalam jangka waktu 30 (tiga puluh) hari
        kalender. Jika penyelesaian secara musyawarah untuk mufakat tidak dapat
        dicapai, Para Pihak setuju bahwa mereka akan tunduk pada yurisdiksi
        eksklusif pengadilan Indonesia khususnya di pengadilan Negeri Kota
        Makassar. Para Pihak mengakui bahwa Identitas mereka mungkin terungkap
        dalam hal bahwa Pendana atau penerima haknya harus menegakkan Perjanjian
        ini untuk memenuhi pembayaran Pinjaman.
      </Text>
      <Text style={styles.textModaljus}>
        Apabila Pihak Peminjam tidak dapat menyelesaikan pelunasan pembayaran
        pinjamannya dalam jangka waktu yang sudah ditentukan dalam Pasal 3 Point
        c, maka Pihak penyelenggara akan menyelesaikan sengketa tersebut dengan
        melakukan Black list data peminjam tersebut kepada Otoritas Jasa
        Keuangan.
      </Text>
      <Text style={styles.textModaljus}>
        Dalam hal Penyelenggara tidak dapat melanjutkan kegiatannya dalam
        memberikan Fasilitas Pinjam meminjam, Para Pihak akan berusaha untuk
        jangka waktu 30 (tiga puluh) hari kerja setelah penghentian
        pemberitahuan kegiatan Penyelenggara untuk menyelesaikan sengketa secara
        damai antara Para Pihak.
      </Text>
      <Text style={styles.textModaljus}>
        Jika para pihak tidak dapat mencapai kesepakatan untuk menyelesaikan
        sengketa dalam jangka waktu tersebut, maka salah satu Pihak dapat
        menyelesaikan sengketa sesuai dengan Mekanisme Penyelesaian Sengketa
        sebagaimana diatur dalam Pasal 9.1 diatas.
      </Text>
      <Text style={styles.headingModal}>Pasal 12</Text>
      <Text style={styles.headingModal}>
        MEKANISME DAN PROSEDUR PENYELESAIAN KEWAJIBAN PENGGUNA
      </Text>
      <Text style={styles.textModaljus}>
        1. Dalam hal Izin Penyelenggara layanan Pinjam Meminjam dicabut oleh
        Otoritas Jasa Keuangan, maka penyelenggara menampaikan surat pernyataan
        rencana penyelesaian Hak dan Kewajiban Pengguna secara tertulis dan
        elektronik kepada OJK.
      </Text>
      <Text style={styles.textModaljus}>
        2. Melaksanakan RUPS terkait pembubaran Penyelenggaraan atau Perubahan
        kegiatan usaha lain.
      </Text>
      <Text style={styles.textModaljus}>
        3. Menyelesaikan seluruh hak dan kewajiban Pengguna dengan tahapan
        sebagai berikut : a. Menghentikan penerimaan Permohonan Pinjaman baru;
        b. Menghentikan penerimaan Permohonan Pendana baru; c. Menyelesaikan
        seluruh proses Pinjaman sesuai dengan batas waktu yang telah disetujui
        oleh Pendana dan Peminjam dalam Perjanjian yang telah disepakati bersama
        sebelumnya; d. Menyampaikan laporan pembubaran pelaksanaan kegiatan
        usaha kepada OJK dengan melampirkan : 1) Risalah rapat umum pemegang
        saham atau rapat anggota; 2) Perubahan anggaran dasar yang telah
        disahkan oleh instansi berwenang; dan 3) Bukti penyelesaian seluruh hak
        dan kewajiban pengguna layanan pinjam meminjam.
      </Text>
      <Text style={styles.headingModal}>Pasal 13</Text>
      <Text style={styles.headingModal}>PEMBERITAHUAN </Text>
      <Text style={styles.textModaljus}>
        Semua pemberitahuan, permintaan atau komunikasi lain berdasarkan
        Perjanjian ini harus secara tertulis dan akan dianggap telah diberikan
        hanya jika disampaikan secara pribadi, melalui transmisi faksimili, atau
        dikirim melalui surat tercatat atau melalui surat elektronik kepada Para
        Pihak di alamat berikut, faksimili angka, dan alamat email (atau ke
        alamat lain sebagaimana diberikan secara tertulis kepada Pihak lainnya):
      </Text>
      <Text style={styles.headingModal}>A. Penyelenggara </Text>
      <Text style={styles.textModalcen}>Nama : PT. DOEKU PEDULIINDONESIA</Text>
      <Text style={styles.textModalcen}>
        Alamat : Business Park CPI, Jalan Boulevard CPI Blok A5/5 Makassar
      </Text>
      <Text style={styles.textModalcen}>E-mail : Doeku0519@gmail.com</Text>
      <Text style={styles.textModalcen}>
        Telepon : (0411) 6000808 / 08I94281086{" "}
      </Text>
      <Text style={styles.textModalcen}>
        ContactPerson : HENDRA DWIJOSEPUTRO{" "}
      </Text>
      <Text style={styles.headingModal}>B. Pendana </Text>
      <Text style={styles.textModalcen}>Nama : {lender?.name}</Text>
      <Text style={styles.textModalcen}>Alamat : {lender?.address}</Text>
      <Text style={styles.textModalcen}>E-mail : {lender?.email}</Text>
      <Text style={styles.textModalcen}>Telepon : 0{lender?.phone}</Text>
      <Text style={styles.textModaljus}>
        Dalam hal terjadi perubahan alamat harus diberitahukan secara tertulis
        selambat-lambatnya 5 (lima) hari kerja sebelum perubahan alamat berlaku
        efektif. Jika perubahan alamat tersebut tidak diberitahukan, maka
        surat-menyurat telah diberikan semestinya yang ditujukan ke alamat
        terakhir yang tercatat pada masing-masing Pihak.
      </Text>
      <Text style={styles.headingModal}>Pasal 14</Text>
      <Text style={styles.headingModal}>KETENTUAN LAIN </Text>
      <Text style={styles.textModaljus}>
        Hal-hal yang belum diatur atau belum cukup diatur atau perubahan atau
        tambahan atas setiap kesepakatan dalam perjanjian ini akan dirundingkan
        bersama dan akan diatur lebih lanjut dalam Perjanjian tambahan
        (addendum) yang merupakan satu kesatuan dan bagian yang tidak
        terpisahkan dari Perjanjian ini.
      </Text>
      <Text style={styles.headingModal}>Pasal 15</Text>
      <Text style={styles.headingModal}>PENUTUP</Text>
      <Text style={styles.textModaljus}>
        Demikian Perjanjian ini ditandatangani dengan tanda tangan elektronik
        dan dimuat dalam Dokumen Elektronik oleh PARA PIHAK pada hari, tanggal,
        bulan dan tahun tersebut pada bagian awal Perjanjian ini yang mempunyai
        kekuatan hukum dengan ada persetujuan elektronik dari para pihak.
      </Text>
      <View style={styles.columnttds}>
        <View style={styles.columnttd}>
          <Text style={styles.textModaljus}>Menyetujui/Approve</Text>
          <View style={styles.columnttdDet}>
            <Image
              source={{
                uri: `${process.env.EXPO_PUBLIC_SERVICE_J1}/sign/lender/${lender.sign}`,
              }}
              style={styles.ttdImage}
            />
            <View>
              <Text style={styles.textModaljus}>
                Di tanda tangani Elentronik:{" "}
              </Text>
              <Text style={styles.textModaljus}>{lender.name} </Text>
              <Text style={styles.textModaljus}>{compDate} WITA</Text>
            </View>
          </View>
          <Text style={styles.textModalttd}>Pendana/The Company</Text>
          <Text style={styles.textModaljus}>
            Tanda Tangan Digital/ Digital Signature
          </Text>
        </View>
        <View style={styles.columnttd}>
          <Text style={styles.textModaljus}>Menyetujui/Approve</Text>
          <View style={styles.columnttdDet}>
            <Text>Perlu Persetujuan Penyelenaggra</Text>
          </View>
          <Text style={styles.textModalttd}>HENDRA DWIJOSEPUTRO</Text>
          <Text style={styles.textModaljus}>
            Tanda Tangan Digital/ Digital Signature
          </Text>
        </View>
      </View>
      <Text style={styles.headingModal}>
        LAMPIRAN PERJANJIAN LAYANAN PINJAMAN UANG BERBASIS TEKNOLOGI INFORMASI
      </Text>
      <Text style={styles.headingModal}>BERBASIS TEKNOLOGI INFORMASI</Text>
      <Text style={styles.headingModal}>Pasal 3</Text>
      <Text style={styles.headingModal}>PEMBERIAN PINJAMAN</Text>
      <Text style={styles.textModalb}>a. JUMLAHPINJAMAN</Text>
      <Text style={styles.textModaljus}>
        Jumlah Pinjaman yang diberikan oleh Pendana kepada Penyelenggara, antara
        lain : 1. Sebesar Rp. 500.000,- (lima ratus riburupiah) 2. Sebesar Rp.
        1.000.000,- (satu juta rupiah) 3. Sebesar Rp. 2.000.000,- (dua juta
        rupiah) 4. Sebesar Rp. 3.000.000,- (tiga juta rupiah) 5. Sebesar Rp.
        4.000.000,- (empat juta rupiah) 6. Sebesar Rp. 5.000.000,- (lima
        jutarupiah) 7. Sebesar Rp. 6.000.000,- (enam juta rupiah) 8. Sebesar Rp.
        7.000.000,- (tujuh juta rupiah) 9. Sebesar Rp. 8.000.000,- (delapan juta
        rupiah) 10. Sebesar Rp. 9.000.000,- (sembilan juta rupiah) 11. Sebesar
        Rp.10.000.000,- (sepuluh juta rupiah) 12. Sebesar Rp.11.000.000,-
        (sebelas juta rupiah) 13. Sebesar Rp.12.000.000,- (dua belas juta
        rupiah) 14. Sebesar Rp.13.000.000,- (tiga belas juta rupiah) 15. Sebesar
        Rp.14.000.000,- (empat belas juta rupiah) 16. Sebesar Rp.15.000.000,-
        (lima belas juta rupiah) 17. Sebesar Rp.16.000.000,- (enam belas juta
        rupiah) 18. Sebesar Rp.17.000.000,- (tujuh belas juta rupiah) 19.
        Sebesar Rp.18.000.000,- (delapan belas juta rupiah) 20. Sebesar
        Rp.19.000.000,- (Sembilan belas juta rupiah) 21. Sebesar Rp.20.000.000,-
        (dua puluh juta rupiah) 22. Sebesar Rp.21.000.000,- (dua puluh satu juta
        rupiah) 23. Sebesar Rp.22.000.000,- (dua puluh dua juta rupiah) 24.
        Sebesar Rp.23.000.000,- (dua puluh tiga juta rupiah) 25. Sebesar
        Rp.24.000.000,- (dua puluh empat juta rupiah) 26. Sebesar
        Rp.25.000.000,- (dua puluh lima juta rupiah) 27. Sebesar Rp.26.000.000,-
        (dua puluh enam juta rupiah) 28. Sebesar Rp.27.000.000,- (dua puluh juta
        juta rupiah) 29. Sebesar Rp.28.000.000,- (dua puluh delapan juta rupiah)
        30. Sebesar Rp.29.000.000,- (dua puluh sembilan juta rupiah) 31. Sebesar
        Rp.30.000.000,- (tiga puluh juta rupiah)
      </Text>
      <Text style={styles.textModalb}>b. SUKU BUNGA</Text>
      <Text style={styles.textModaljus}>
        Jangka waktu 61 (enam puluh satu) hari dikenakan bunga sebesar 0,15 %
        (nol koma lima belas persen) per hari: 2. Jangka waktu 75 (tujuh puluh
        lima) hari dikenakan bunga sebesar 0,13 % (nol koma tiga belas persen)
        per hari; 3. Jangka waktu 90 (sembilan puluh) hari dikenakan bunga
        sebesar 0,1 % (nol koma saru persen) perhari
      </Text>
      <Text style={styles.textModalb}>c. JANGKA WAKTU PINJAMAN</Text>
      <Text style={styles.textModaljus}>
        Jangka waktu pinjaman terhitung sejak peminjam telah mendapatkan
        pinjaman dari Pendana sampai jangka waktu yang disepakati oleh peminjam
      </Text>
      <Text style={styles.headingModal}>Pasal 4</Text>
      <Text style={styles.headingModal}>KOMISI</Text>
      <Text style={styles.textModaljus}>
        Komisi dikenakan sebesar 10 % (sepuluh persen) dari bunga atau
        keuntungan yang terima oleh pendana.
      </Text>
      <Text style={styles.headingModal}>Pasal 5</Text>
      <Text style={styles.headingModal}>DENDA</Text>
      <Text style={styles.textModaljus}>
        Denda bunga sebesar bunga denda atas jumlah pinjaman yang tidak atau
        lalai dibayar tersebut kepada Pendana sebesar 0,1 % (nol koma satu
        persen) setiap hari setelah lewatnya Jangka Waktu Pinjaman maksimal 90
        (sembilan puluh) hari yang telah dihitung dari jumlah pinjaman (pokok
        pinjaman)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 6,
    marginBottom: 40,
  },
  headingModal: {
    width: "100%",
    fontFamily: "InterBold",
    fontSize: 14,
    textAlign: "center",
  },
  textModal: {
    fontFamily: "InterMedium",
    fontSize: 12,
    width: "100%",
  },
  textModalb: {
    fontFamily: "InterBold",
    fontSize: 12,
    width: "100%",
  },
  textModalcen: {
    fontFamily: "InterMedium",
    fontSize: 12,
    textAlign: "center",
    width: "100%",
  },
  textModaljus: {
    fontFamily: "InterMedium",
    fontSize: 12,
    textAlign: "justify",
    width: "100%",
  },
  textModalttd: {
    fontFamily: "InterMedium",
    fontSize: 12,
    textAlign: "justify",
    width: "100%",
    textDecorationLine: "underline",
  },
  textModalls: {
    fontFamily: "InterMedium",
    fontSize: 12,
    textAlign: "justify",
    width: "100%",
    marginLeft: 16,
  },
  textModallm: {
    fontFamily: "InterMedium",
    fontSize: 12,
    textAlign: "justify",
    width: "100%",
    marginLeft: 20,
  },
  column1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    gap: 4,
  },
  columnttds: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  columnttdDet: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  columnttd: {
    flexDirection: "column",
    gap: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginVertical: 20,
  },
  ttdImage: {
    width: 100,
    height: 100,
  },
});
