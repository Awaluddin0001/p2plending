import { DateTime } from "luxon";
import { View, StyleSheet, Text, Image } from "react-native";

import { terbilang } from "./angkaMenjadiTerbilang";
import { bulanTerbilang } from "./bulanTerbilang";

import toRupiah from "@/components/util/toRupiah";

export default function ModalContainer({
  sign,
  hari,
  bulan,
  tahun,
  cd,
  amount,
  angsuran1,
  angsuran2,
  angsuran3,
  tenor,
  bunga,
  adrnik,
}: {
  sign: any;
  hari: any;
  bulan: any;
  tahun: any;
  cd: any;
  amount: any;
  angsuran1: any;
  angsuran2: any;
  angsuran3: any;
  tenor: any;
  bunga: any;
  adrnik: any;
}) {
  const dt = DateTime.now().setZone("Asia/Singapore");
  const compDate = dt.toFormat("dd-MM-yyyy hh:mm:ss");

  return (
    <View style={styles.container}>
      <Text style={styles.headingModal}>
        PERJANJIAN LAYANAN PENDANAAN BERSAMA BERBASIS TEKNOLOGI INFORMASI
      </Text>
      <Text style={styles.textModalcen}>
        Nomor : {cd.id_ub}/DPI/PM/{bulan}
        {tahun}
      </Text>
      <Text style={styles.textModaljus}>
        Padahari ini, Tanggal {hari}-{bulan}-20{tahun} (
        {bulanTerbilang(hari, bulan, `20${tahun}`)}) telah dibuat dan
        ditandatangani perjanjian Layanan Pendanaan Bersama Berbasis Teknologi
        Informasi (“Perjanjian Layanan” atau Perjanjian”) oleh antara:
      </Text>
      <View style={styles.column1}>
        <Text>1.</Text>
        <Text>Belum disetujui oleh pemberi dana</Text>
      </View>
      <View style={styles.column1}>
        <Text>2.</Text>
        <View>
          <Text>Nama : {cd.name}</Text>
          <Text>Alamat : {adrnik.address}</Text>
          <Text>No ktp : {adrnik.nik}</Text>
          <Text>Email : {cd.email}</Text>
          <Text>No hp : 0{cd.phone}</Text>
          <Text>Nomor ID Peminjam : {cd.id_ub}</Text>
          <Text>-untuk selanjutnya akan disebut : PEMINJAM</Text>
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
        <Text style={styles.textModalb}>“Perjanjian Pinjaman”</Text> adalah
        kontrak antara Pendana dan Peminjam dimana mereka saling menyetujui
        fasilitas pinjaman dengan batas maksimum total pemberian pinjaman dana
        sebesar {toRupiah(amount, { floatingPoint: 0 })},- ({terbilang(amount)}{" "}
        rupiah) dan OJK dapat melakukan peninjauan kembali atas batas maksimum
        total pemberian pinjaman dana tersebut.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Permohonan Pinjaman”</Text> adalah
        permohonan yang diajukan secara elektronik oleh Peminjam melalui
        Platform untuk memperoleh Pinjaman.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Data Pribadi”</Text>
        adalah semua data yang dibagikan oleh Pengguna (sebagaimana
        didefinisikan di bawah) berdasarkan ketentuan Perjanjian ini, termasuk
        informasi pribadi, informasi pribadi yang sensitif dan/atau data dan
        informasi non-pribadi.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Pinjaman Peer-to-Peer”</Text>
        adalah metode pembiayaan utang yang memungkinkan individu atau badan
        hukum atau badan usaha untuk meminjam dan meminjamkan uang tanpa
        menggunakan lembaga keuangan sebagai perantara.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Virtual Account”</Text>
        adalah Nomor Rekening yang diberikan oleh Pendana kepada Peminjam untuk
        melaksanakan kewajibannya membayar pinjaman sesuai dengan Perjanjian.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Data Peminjam”</Text>
        adalah Data yang dipergunakan oleh Peminjam untuk mengajukan Pinjaman
        yang dipergunakan untuk keperluan verifikasi dari Pendana.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Struktur Pinjaman”</Text>
        adalah sebuah informasi yang diberikan kepada Peminjam terkait dengan
        pinjaman yang diajukan melalui platform dan telah disetujui oleh
        Pendana.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Jumlah Pinjaman”</Text>
        adalah Jumlah total pinjaman yang dibebankan kepada Peminjam untuk
        dikembalikan kepada Pendana termasuk didalamnya bunga, denda (apabila
        ada), biaya asuransi, serta biaya lainnya yang ditetapkan oleh peraturan
        perundangan-undangan yang telah terakumulasi.
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
        <Text style={styles.textModalb}>“ID Platform Peminjam”</Text>
        adalah akses yang diperoleh Peminjam untuk mengakses platform guna
        mengajukan pinjaman setelah melakukan registrasi.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Platform”</Text>
        adalah platform pinjaman peer-to-peer berbasis internet yang dimiliki
        dan dioperasikan oleh Pendana termasuk namun tidak terbatas terhadap
        domain www.doeku.id.{" "}
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“DavestPay”</Text>
        adalah suatu produk pembayaran tagihan dan pembelian Online ;
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Dokumen Elektronik”</Text>
        adalah setiap informasi elektronik yang dibuat, diteruskan, dikirimkan,
        diterima, atau disimpan dalam bentuk analog, digital, elektromagnetik,
        optikal, atau sejenisnya, yang dapat dilihat, ditampilkan, dan/atau
        didengar melalui komputer atau Sistem Elektronik termasuk tetapi tidak
        terbatas pada tulisan, suara, gambar, peta rancangan, foto atau
        sejenisnya, huruf, tanda, angka, kode akses, simbol atau perforasi yang
        memiliki makna atau arti atau dapat dipahami oleh orang yang mampu
        memahaminya sebagaimana dimaksud dalam Undang- Undang Nomor 11 Tahun
        2008 tentang Informasi dan Transaksi Elektronik.
      </Text>
      <Text style={styles.textModaljus}>
        <Text style={styles.textModalb}>“Tanda Tangan Elektonik”</Text>
        adalah tanda tangan yang terdiri atas Informasi elektonik yang
        dilekatkan, terasosiasi atau terkait dengan informasi elektronik lainnya
        yang digunakan sebagai alat verifikasi dan autentikasi sebagaimana
        dimaksud dalam Undang-Undang Nomor 11 Tahun 2008 Tentang Informasi dan
        Transaksi Elektronik.{" "}
      </Text>
      <Text style={styles.headingModal}>Pasal 2</Text>
      <Text style={styles.headingModal}>SYARAT DAN KETENTUAN</Text>
      <Text style={styles.textModaljus}>
        Peminjam tertarik untuk mengajukan pinjaman melalui platform yang
        ditawarkan dan diberikan oleh Pendana (selanjutnya disebut “Pinjaman”)
        dan untuk itu Peminjam menjamin kepada Pendana bahwa Peminjam akan
        memenuhi persyaratan sebagai berikut :
      </Text>
      <Text style={styles.textModalb}>Persyaratan minimum</Text>
      <Text style={styles.textModaljus}>
        1. Peminjam adalah Warga Negara Indonesia dan tunduk secara sah terhadap
        Hukum Negara Republik Indonesia;
      </Text>
      <Text style={styles.textModaljus}>
        2. Batas Usia Calon Peminjam diatas 20 (dua puluh) tahun sampai usia 65
        (enam puluh lima) tahun saat mengajukan Pinjaman;
      </Text>
      <Text style={styles.textModaljus}>
        3. Pendapatan peminjam harus minimal sebesar{" "}
        {toRupiah(amount, { floatingPoint: 0 })},- ({terbilang(amount)} rupiah)
        ;
      </Text>
      <Text style={styles.textModaljus}>
        4. Alamat di Kartu Tanda Penduduk Peminjam harus sama dengan domisili
        Peminjam secara aktual;
      </Text>
      <Text style={styles.textModalb}>Syarat & Ketentuan</Text>
      <Text style={styles.textModaljus}>
        Peminjam telah setuju terhadap Syarat dan Ketentuan yakni sebagai
        berikut :
      </Text>
      <Text style={styles.textModaljus}>
        a. Peminjam harus terdaftar terlebih dahulu yang dapat dilakukan melalui
        platform untuk mengajukan Pinjaman
      </Text>
      <Text style={styles.textModaljus}>
        b. Apabila Pengajuan Pinjaman telah disetujui oleh Pendana maka Dana
        Pinjaman akan ditransfer Penyelenggara PlatformDoeku kepada Peminjam
        dalam bentuk saldo diDavestpay;
      </Text>
      <Text style={styles.textModaljus}>
        c. Peminjam telah setuju untuk memberikan data Pribadi yang
        dipersyaratkan oleh Pendana untuk mengajukan Pinjaman;{" "}
      </Text>
      <Text style={styles.textModaljus}>
        d. Data Pribadi yang diajukan oleh Peminjam dalam mengajukan pinjaman
        adalah Data Diri Peminjam antara lain Kartu Tanda Penduduk, Nomor
        Rekening Bank, dan NPWP.
      </Text>
      <Text style={styles.textModaljus}>
        e. Jumlah Pinjaman dinyatakan dalam Rupiah, Jumlah pinjaman yang
        diberikan oleh Pendana kepada Peminjam minimal sebesar Rp. 500.000,-
        (limaratus ribu rupiah) dengan jangka waktu maksimal pembayaran pinjaman
        selama 90 (sembilan puluh) hari;
      </Text>
      <Text style={styles.textModaljus}>
        f. Suku bunga Pinjaman akan dikenakan kepada Peminjam sesuai durasi
        jangka waktu yang disetujui oleh Peminjam, antara lain :
      </Text>
      <Text style={styles.textModalls}>
        1. untuk jangka waktu 61 (enam puluh satu) hari pelunasan pinjaman
        dikenakan bunga sebesar 0,15 % (nol koma lima belas persen) per hari;
      </Text>
      <Text style={styles.textModalls}>
        2. untuk jangka waktu 75 (tujuh puluh lima) hari pelunasan pinjaman
        dikenakan bunga sebesar 0,13 % (nol koma tiga belas persen) per hari ;
      </Text>
      <Text style={styles.textModalls}>
        3. untuk jangka waktu 90 (sembilan puluh) hari pelunasan pinjaman
        dikenakan bunga sebesar 0,1 % (nol koma satu persen) per hari ;{" "}
      </Text>
      <Text style={styles.textModalls}>
        4. Apabila lewat dari jangka waktu pinjaman maka akan dikenakan denda
        atas keterlambatan Pembayaran sebesar 0,1 % (nol koma satu persen)
        sampai dengan maksimal 90 (sembilan puluh) hari;
      </Text>
      <Text style={styles.textModaljus}>
        g. Tenor Pinjaman dinyatakan dalam Hari Kalender;
      </Text>
      <Text style={styles.textModaljus}>
        h. Jenis pinjaman adalah Pinjaman Tanpa Jaminan;
      </Text>
      <Text style={styles.textModaljus}>
        i. Jangka waktu pinjaman akan disesuaikan dengan batas waktu yang telah
        disetujui oleh Peminjam, antara lain :
      </Text>
      <Text style={styles.textModalls}>
        1. untuk jangka waktu 61 (enam puluh satu) hari ;
      </Text>
      <Text style={styles.textModalls}>
        2. untuk jangka waktu 75 (tujuhpuluh lima) hari ;
      </Text>
      <Text style={styles.textModalls}>
        3. untuk jangka waktu 90 (sembilan puluh) hari ;
      </Text>
      <Text style={styles.textModaljus}>
        Peminjam akan bertanggung jawab atas ketepatan pembayaran pelunasan
        pinjaman.{" "}
      </Text>
      <Text style={styles.textModaljus}>
        j. Pelunasan atas Pinjaman dilakukan oleh Peminjam dengan cara
        mengangsur kepada Pendana, dengan jangka waktu, masing-masing :
      </Text>
      <Text style={styles.textModalls}>
        1. Untuk jangka waktu 61 (enam puluh satu) hari, dilakukan pembayaran
        dengan mengangsur sebanyak 2 bulan, dengan rincian :
      </Text>
      <Text style={styles.textModallm}>
        • Angsuran I (Pokok dan Bunga) : 30 (tiga puluh) hari{" "}
      </Text>
      <Text style={styles.textModallm}>
        • Angsuran II(Pokok dan Bunga) : 31 (tiga puluh satu) hari{" "}
      </Text>
      <Text style={styles.textModalls}>
        2. Untuk jangka waktu 75 (tujuh puluh lima) hari, dilakukan pembayaran
        dengan mengangsur sebanyak 3 bulan, dengan rincian :
      </Text>
      <Text style={styles.textModallm}>
        • Angsuran I(Pokok dan Bunga) : 30 (tiga puluh) hari
      </Text>
      <Text style={styles.textModallm}>
        • Angsuran II(Pokok dan Bunga) : 30 (tiga puluh)hari
      </Text>
      <Text style={styles.textModallm}>
        • Angsuran III(Pokok dan Bunga) : 15 (lima belas) hari
      </Text>
      <Text style={styles.textModalls}>
        3. Untuk jangka waktu 90 (sembilan puluh) hari, dilakukan pembayaran
        dengan mengangsur sebanyak 3 bulan, dengan rincian :
      </Text>
      <Text style={styles.textModallm}>
        • Angsuran I (Pokok dan Bunga) : 30 (tiga puluh) hari
      </Text>
      <Text style={styles.textModallm}>
        • Angsuran II(Pokok dan Bunga) : 30 (tiga puluh) hari
      </Text>
      <Text style={styles.textModallm}>
        • Angsuran III(Pokok dan Bunga) : 30 (tiga puluh) hari
      </Text>
      <Text style={styles.textModaljus}>
        k. Peminjam akan melakukan pembayaran atas fasilitas pinjaman Pribadi
        yang telah diberikan oleh Pendana sesuai dengan jangka waktu yang telah
        ditentukan dan disepakati oleh Peminjam yang akan dilakukan melalui
        platform Aplikasi DOEKU ataudi website www.doeku.id;
      </Text>
      <Text style={styles.textModaljus}>
        l. Pendana tidak bertanggung jawab bilamana Peminjam telah lalai atau
        salah didalam melakukan pembayaran sepanjang tidak sesuai dengan yang
        ditentukan oleh Penyelenggara ;{" "}
      </Text>
      <Text style={styles.textModaljus}>
        m. Pendana tidak terlibat baik secara langsung dan atau tidak langsung
        dengan jaringan terorisme, Organisasi Kejahatan, Sindikat Pencucian
        Uang, dan hal – hal lain yang melawan hukum;
      </Text>
      <Text style={styles.textModaljus}>
        n. Pendana tidak dalam sengketa atau tersangkut apapun juga atau yang
        menurut Peminjam akan menjadi ancaman dikemudian hari yang dapat
        mempengaruhi kondisi keuangan Peminjam didalam melaksanakan kewajibannya
        berdasarkan Perjanjian ini;{" "}
      </Text>
      <Text style={styles.textModaljus}>
        o. Peminjam tidak dapat mengalihkan setiap hak-hak dan/atau
        kewajiban-kewajiban yang dimilikinya dalam Perjanjian ini baik sebagian
        maupun seluruhnya kepada pihak lain tanpa persetujuan tertulis terlebih
        dahulu dari Pendana.
      </Text>
      <Text style={styles.textModaljus}>
        p. Peminjam wajib melakukan tanda tangan elektronik berdasarkan
        Undang-Undang Nomor 11 Tahun 2008 Tentang Informasi dan Transaksi
        Elektronik{" "}
      </Text>
      <Text style={styles.headingModal}>Pasal 3</Text>
      <Text style={styles.headingModal}>HAK DAN KEWAJIBAN</Text>
      <Text style={styles.textModalb}>HAK DAN KEWAJIBAN PENDANA</Text>
      <Text style={styles.textModaljus}>Hak Pendana, yaitu :</Text>
      <Text style={styles.textModaljus}>
        a. Menerima pembayaran kembali atas sejumlah pinjaman yang diberikan
        ditambah dengan imbalan bunga tepat waktu yang ditetapkan pada
        perjanjian;
      </Text>
      <Text style={styles.textModaljus}>
        b. Untuk mengadakan uji kelayakan terhadap calon Peminjam ;{" "}
      </Text>
      <Text style={styles.textModaljus}>
        c. Untuk mengubah syarat dan ketentuan umum atas kebijakannya sendiri
        dari waktu ke waktu.{" "}
      </Text>
      <Text style={styles.textModaljus}> Kewajiban Pendana, yaitu :</Text>
      <Text style={styles.textModaljus}>
        a. Menyediakan jumlah pinjaman yang telah disetujui Para Pihak
      </Text>
      <Text style={styles.textModaljus}>
        b. Menyediakan akses informasi kepada Peminjam.
      </Text>
      <Text style={styles.textModalb}>HAK DAN KEWAJIBAN PEMINJAM</Text>
      <Text style={styles.textModaljus}>
        Hak Peminjam adalah untuk menerima sejumlah pinjaman setelah dikurangi
        dengan beban dan biaya layanan yang ditetapkan dalam Perjanjian ini.
        Wajib mengembalikan sejumlah pinjaman sesuai dengan jangka waktu yang
        telah disepakati dalam Perjanjian ini.
      </Text>
      <Text style={styles.headingModal}>Pasal 4 </Text>
      <Text style={styles.headingModal}>FASILITAS PINJAMAN</Text>
      <Text style={styles.textModalb}>
        JUMLAH, SUKU BUNGA, ANGSURAN, JANGKA WAKTU PINJAMAN DAN DENDA
        KETERLAMBATAN
      </Text>
      <Text style={styles.textModalb}> Jumlah Pinjaman</Text>
      <Text style={styles.textModaljus}>
        Jumlah pinjaman yang diberikan oleh Pendana kepada Peminjam sebesar{" "}
        {toRupiah(amount, { floatingPoint: 0 })},- ({terbilang(amount)} rupiah)
        Jumlah Pinjaman tersebut diatas akan dikurangi dengan biaya layanan
        sebesar{" "}
        {toRupiah(
          tenor === 61
            ? amount * 0.1
            : tenor === 75
              ? amount * 0.125
              : amount * 0.15,
          { floatingPoint: 0 }
        )}
        ,- (
        {terbilang(
          tenor === 61
            ? amount * 0.1
            : tenor === 75
              ? amount * 0.125
              : amount * 0.15
        )}{" "}
        rupiah) sehingga Peminjam akan menerima sebesar{" "}
        {toRupiah(
          tenor === 61
            ? amount - amount * 0.1
            : tenor === 75
              ? amount - amount * 0.125
              : amount - amount * 0.15,
          { floatingPoint: 0 }
        )}
        ,- (
        {terbilang(
          tenor === 61
            ? amount - amount * 0.1
            : tenor === 75
              ? amount - amount * 0.125
              : amount - amount * 0.15
        )}{" "}
        rupiah) dalam bentuk saldo DavestPay sesuai dengan ketentuan dan
        persyaratan yang berlaku. Jumlah Pinjaman akan dicairkan maksimal 1
        (satu) hari sejak disetujui oleh Pendana.
      </Text>
      <Text style={styles.textModalb}>Suku Bunga Pinjaman</Text>
      <Text style={styles.textModaljus}>
        Jumlah Pinjaman yang diberikan sebesar{" "}
        {toRupiah(amount, { floatingPoint: 0 })},- ({terbilang(amount)} rupiah)
        akan dikenakan Suku Bunga Pinjaman sebesar{" "}
        {tenor === 61 ? "0.15%" : tenor === 75 ? "0.13%" : "0.1%"} ({" "}
        {tenor === 61
          ? "Nol koma Lima Belas Persen"
          : tenor === 75
            ? "Nol koma Tiga Belas Persen"
            : "Nol koma Satu Persen"}
        Nol koma Satu Persen) per hari. Suku Bunga Pinjaman dihitung berdasarkan
        Jangka waktu Pinjaman yang diangsur untuk tiap bulannya (sesuai dengan
        Point 4.1.4) yang tercantum dalam Lampiran. Peminjam setuju dengan ini
        memberi kuasa kepada Pendana untuk sewaktu-waktu merubah ketentuan
        besarnya suku bunga tersebut di atas sesuai perkembangan keadaan pasar
        dan Pendana akan memberitahukan perubahan suku bunga tersebut kepada
        Peminjam. Pemberitahuan mana akan mengikat Peminjam. Tanggal Pembayaran
        bunga adalah setiap tanggal awal dari Perjanjian yaitu tanggal pencairan
        pinjaman, kecuali ditentukan lain oleh Pendana. Bunga tersebut di atas
        terhutang oleh Peminjam sejak tanggal penarikan pinjaman sampai dengan
        hari dan tanggal hutang tersebut dibayar kembali lunas, penuh dan dengan
        sebagaimana mestinya oleh Peminjam kepada Pendana.
      </Text>
      <Text style={styles.textModalb}> Nilai Angsuran Pinjaman</Text>
      <Text style={styles.textModaljus}>
        Peminjam melunasi seluruh pinjamannya secara penuh kepada Pihak Pendana
        dengan cara mengangsur atau bisa dilakukan Pembayaran seluruhnya sebesar
        : {toRupiah(amount + bunga, { floatingPoint: 0 })},- (
        {terbilang(amount + bunga)} rupiah)
      </Text>
      <Text style={styles.textModaljus}>
        a. Untuk jangka waktu {tenor} ({terbilang(tenor)}) hari, dilakukan
        pembayaran dengan mengangsur sebanyak {tenor === 61 ? "2" : "3"} bulan,
        dengan rincian :
      </Text>
      {tenor === 61 ? (
        <>
          <Text style={styles.textModalls}>
            • Angsuran I (Pokok dan Bunga) : 30 (tiga puluh) hari{" "}
            {toRupiah(angsuran1, { floatingPoint: 0 })},- (
            {terbilang(angsuran1)} rupiah)
          </Text>
          <Text style={styles.textModalls}>
            • Angsuran II (Pokok dan Bunga) : 31 (tiga puluh satu) hari
            {toRupiah(angsuran2, { floatingPoint: 0 })},- (
            {terbilang(angsuran2)} rupiah)
          </Text>
        </>
      ) : tenor === 75 ? (
        <>
          <Text style={styles.textModalls}>
            • Angsuran I (Pokok dan Bunga) : 30 (tiga puluh) hari{" "}
            {toRupiah(angsuran1, { floatingPoint: 0 })},- (
            {terbilang(angsuran1)} rupiah)
          </Text>
          <Text style={styles.textModalls}>
            • Angsuran II (Pokok dan Bunga) : 30 (tiga puluh) hari{" "}
            {toRupiah(angsuran2, { floatingPoint: 0 })},- (
            {terbilang(angsuran2)} rupiah)
          </Text>
          <Text style={styles.textModalls}>
            • Angsuran III (Pokok dan Bunga) : 15 (tiga puluh) hari
            {toRupiah(angsuran3, { floatingPoint: 0 })},- (
            {terbilang(angsuran3)} rupiah)
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.textModalls}>
            • Angsuran I (Pokok dan Bunga) : 30 (tiga puluh) hari{" "}
            {toRupiah(angsuran1, { floatingPoint: 0 })},- (
            {terbilang(angsuran1)} rupiah)
          </Text>
          <Text style={styles.textModalls}>
            • Angsuran II (Pokok dan Bunga) : 30 (tiga puluh) hari{" "}
            {toRupiah(angsuran2, { floatingPoint: 0 })},- (
            {terbilang(angsuran2)} rupiah)
          </Text>
          <Text style={styles.textModalls}>
            • Angsuran III (Pokok dan Bunga) : 30 (tiga puluh) hari
            {toRupiah(angsuran3, { floatingPoint: 0 })},- (
            {terbilang(angsuran3)} rupiah)
          </Text>
        </>
      )}
      <Text style={styles.textModalb}>Jangka Waktu Pinjaman</Text>
      <Text style={styles.textModaljus}>
        Jangka waktu pinjaman terhitung sejak Peminjam telah mendapatkan
        pinjaman dari Pendana sampai dengan jangka waktu yang di sepakati.
        Jangka waktu pinjaman selama {terbilang(tenor)} ({tenor}) hari terhitung
        sejak tanggal 00-00-0000 (kosong) dan berakhir pada tanggal 00-00-0000
        (kosong). Jangka waktu Pinjaman dilakukan dengan cara mengangsur dan
        jadwal Angsuran akan tertera pada Platform Aplikasi Doeku masing-masing
        Peminjam.
      </Text>
      <Text style={styles.textModalb}>Denda Keterlambatan</Text>
      <Text style={styles.textModaljus}>
        Apabila Peminjam tidak atau gagal membayar pinjaman maka kewajiban
        Peminjam untuk tetap membayar jumlah pinjaman yang wajib dibayarnya.
        Peminjam wajib membayar bunga denda atas jumlah angsuran yang tidak atau
        lalai dibayar tersebut kepada Pendana sebesar 0,1 % (nol koma satu
        persen) per hari setelah lewatnya jangka waktu yang ditetapkan dan
        dengan batas waktu pinjaman maksimal {tenor} ({terbilang(tenor)}) hari
        yang dihitung dari jumlah pinjaman dan pembayaran jumlah pinjaman
        tersebut dianggap telah lunas dibayar dengan bukti pembayaran yang telah
        disetujui oleh Pendana.
      </Text>
      <Text style={styles.textModalb}> Pembayaran Kembali</Text>
      <Text style={styles.textModaljus}>
        a. Pembayaran kembali akan dilakukan oleh Peminjam kepada Pendana dengan
        ketentuan sebagai berikut :
      </Text>
      <Text style={styles.textModaljus}>
        i. Peminjam wajib melunasi seluruh Jumlah Pinjaman, bunga dan denda yang
        diberikan oleh Pendana dengan cara diangsur sebagaimana disebutkan pada
        Pasal 4 Point 4.1.3.
      </Text>
      <Text style={styles.textModaljus}>
        ii. Pinjaman berakhir pada saat tanggal jatuh tempo pinjaman sesuai
        dengan yang telah disepakati{" "}
      </Text>
      <Text style={styles.textModaljus}>
        b. Setiap pembayaran dari Peminjam, pertama-tama akan diperuntukkan bagi
        pembayaran :
      </Text>
      <Text style={styles.textModaljus}>
        i. biaya terhutang termasuk tidak terbatas pada pajak;
      </Text>
      <Text style={styles.textModaljus}>
        ii. bunga dan pembayaran lainnya selain denda dan pinjaman pokok;
      </Text>
      <Text style={styles.textModaljus}>
        iii. denda yang belum dibayarkan, dan;
      </Text>
      <Text style={styles.textModaljus}>
        iv. Pokok pinjaman yang terhutang.
      </Text>
      <Text style={styles.headingModal}>Pasal 5</Text>
      <Text style={styles.headingModal}>
        Perlindungan Data Pribadi Peminjam
      </Text>
      <Text style={styles.textModaljus}>
        Pendana akan berupaya sebaik mungkin menjaga kerahasiaan setiap Data
        Pribadi Peminjam, baik yang disampaikan langsung oleh Peminjam pada saat
        pendaftaran Akun DOEKU maupun yang dikumpulkan oleh Pendana berdasarkan
        ketentuan Perjanjian ini baik dengan menggunakan perangkat keras dan
        perangkat lunak yang teruji keamanannya secara fisik, elektronik dan
        administrasi yang wajar. Penyebaran data Pribadi Peminjam akan diberikan
        ke penyelenggara Platform Doeku.Data Pribadi Peminjam akan disimpan oleh
        penyelenggara selama jangka waktu pinjaman belum berakhir/dilunasi oleh
        peminjam.
      </Text>
      <Text style={styles.headingModal}>Pasal 6</Text>
      <Text style={styles.headingModal}>
        PENYEBARAN DAN PENGHAPUSAN DATA PRIBADI{" "}
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
        3. PT Collmatra Perkasa Indonesia ( Collection){" "}
      </Text>
      <Text style={styles.textModaljus}>
        Data yang terima oleh pihak ketiga dan penyelenggara akan dipergunakan
        dalam jangka waktu 2 (dua) tahun terhitung sejak pengguna menyetujui
        perjanjian ini. Tujuan Kepemilikan dan penggunaan data pengguna oleh
        Pihak Ketiga sebagai berikut :{" "}
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
        oleh Pihak Ketiga.{" "}
      </Text>
      <Text style={styles.headingModal}>Pasal 7</Text>
      <Text style={styles.headingModal}>Pengakuan Hutang </Text>
      <Text style={styles.textModaljus}>
        Peminjam dengan ini setuju bahwa Peminjam benar-benar dan secara sah
        berhutang kepada Pendana atas utang jumlah penuh setelah menerimanya dan
        setuju untuk membayar seluruh jumlah hutang pada saat jatuh tempo sesuai
        dengan ketentuan.
      </Text>
      <Text style={styles.textModaljus}>
        Dan oleh karena itu Peminjam mengakui bahwa dirinya benar dan secara sah
        telah berhutang kepada Pendana untuk sejumlah uang sebagaimana dimaksud
        di dalam Perjanjian ini ditambah dengan bunga dan biaya-biaya lainnya
        (apabila ada) yang wajib dibayar oleh Peminjam kepada Pendana
        berdasarkan PERJANJIAN ini.
      </Text>
      <Text style={styles.textModaljus}>
        Pendana dengan ini mengakui sebagaimana mestinya dan menerima Pengakuan
        hutang yang diberikan kepada Peminjam.
      </Text>
      <Text style={styles.textModaljus}>
        Tanpa mengabaikan apapun yang bertentangan yang terkandung dalam
        Perjanjian ini, semua pembayaran yang dilakukan atau ditagih oleh
        Penyelenggara Platform DOEKU berdasarkan Perjanjian ini harus diterapkan
        oleh Pendana untuk kepentingan sendiri dalam urutan prioritas berikut,
        (1) untuk setiap jumlah yang kemudian jatuh tempo dan terutang kepada
        Pendana berdasarkan Perjanjian yang tidak tercantum dalam Bagian ini,
        (2) untuk setiap biaya yang kemudian jatuh tempo dan terutang, (3) untuk
        setiap cidera janji yang masih harus dibayar atau bunga keterlambatan
        yang kemudian jatuh tempo dan terutang, (4) untuk bunga yang kemudian
        jatuh tempo dan terutang, dan (5) untuk pokok yang kemudian jatuh tempo
        dan terutang.
      </Text>
      <Text style={styles.textModaljus}>
        Laporan Pembiayaan tersebut bersifat final dan mengikat Peminjam terkait
        jumlah yang setiap saat terutang dari Peminjam, dengan tidak adanya
        kesalahan nyata dalam perhitungan;
      </Text>
      <Text style={styles.textModaljus}>
        Peminjam harus melunasi seluruh pinjaman yang timbul atas tindakan
        wanprestasi/cidera janji sebagaimana diatur didalam Pasal 7 Perjanjian
        ini.
      </Text>
      <Text style={styles.textModaljus}>
        PARA PIHAK dengan ini sepakat dan setuju untuk mengesampingkan Pasal
        1266 KUH Perdata jo. 1267 KUH Perdata dalam hal pengakhiran Perjanjian
        yang mana dibutuhkan Putusan pengadilan untuk pemutusan Perjanjian
      </Text>
      <Text style={styles.headingModal}>Pasal 8</Text>
      <Text style={styles.headingModal}>
        Penyebaran dan penghapusan Data Pribadi
      </Text>
      <Text style={styles.textModaljus}>
        Data Pribadi akan diberikan kepada penyedia platform doeku sebagai
        penyelenggara layanan pinjam meminjam uang berbasis teknologi informasi,
        di mana Platform doeku wajib menyediakan akses kepada pendana atas
        penggunaan dananya dalam hal ini terkait identitas peminjam dan
        menyediakan akses kepada peminjam atas posisi pinjaman yang diterimanya.
        Penyebaran data pengguna oleh platform doeku harus tunduk pada Pasal 44
        POJK10/POJK.05/2022 dimana platform doeku harus tetap menjaga kerahasian
        data pengguna. Penghapusan Data Pribadi pengguna
      </Text>
      <Text style={styles.headingModal}>Pasal 9</Text>
      <Text style={styles.headingModal}>WANPRESTASI/CIDERA JANJI</Text>
      <Text style={styles.textModalb}> Persetujuan Peminjam</Text>
      <Text style={styles.textModaljus}>
        Peminjam dengan ini setuju bilamana :
      </Text>
      <Text style={styles.textModaljus}>
        Peminjam gagal untuk membayar sejumlah pinjaman berdasarkan Perjanjian
        ini atau gagal untuk memenuhi salah satu atau lebih kewajiban
        sebagaimana diatur didalam Perjanjian ini;{" "}
      </Text>
      <Text style={styles.textModaljus}>
        Peminjam telah dinyatakan bangkrut berdasarkan Keputusan Pengadilan yang
        berwenang;
      </Text>
      <Text style={styles.textModaljus}>
        Peminjam terbukti bersalah oleh keputusan pengadilan yang bersifat final
        dan mengikat dari Yurisdiksi manapun terkait dengan kegiatan kriminal
        termasuk namun tidak terbatas pada pencucian uang dan / atau kegiatan
        terorisme;{" "}
      </Text>
      <Text style={styles.textModaljus}>
        Peminjam telah memberikan data yang dipalsukan, salah dan atau
        misrepresentasi (keadaan dimana satu pihak dalam perjanjian membuat
        pernyataan palsu tentang suatu fakta) sebagai data Penerima Pinjaman.
      </Text>
      <Text style={styles.textModalb}> Tindakan Wanprestasi/Cidera Janji</Text>
      <Text style={styles.textModaljus}>
        Berdasarkan seluruh fakta diatas namun termasuk tidak terbatas dapat
        dikategorikan sebagai Wanprestasi/Cidera Janji, dan oleh karenanya maka
        Pendana mempunyai hak untuk :
      </Text>
      <Text style={styles.textModaljus}>
        Mengakhiri Perjanjian secara seketika dan sekaligus namun pengakhiran
        ini tidak menghilangkan hak dan kewajiban Para Pihak yang timbul atas
        adanya Perjanjian ini;{" "}
      </Text>
      <Text style={styles.textModaljus}>
        Meminta Peminjam untuk membayar seluruh sisa hutang pokok, termasuk
        bunga dan denda (apabila ada) serta biaya – biaya lain yang timbul atas
        adanya pengakhiran ini termasuk namun tidak terbatas terhadap biaya –
        biaya penagihan untuk meminta Peminjam melaksanakan kewajiban, biaya
        Advokat,dan biaya – biaya lainnya yang timbul atas upaya Pendana untuk
        menagih hak Pendana ;
      </Text>
      <Text style={styles.textModaljus}>
        Melaksanakan segala upaya hukum termasuk namun tidak terbatas terhadap
        pelaporan kepada pihak kepolisian, atau gugatan kepada Pengadilan
        Negeri.
      </Text>
      <Text style={styles.textModaljus}>
        Apabila Tindakan
        <Text style={styles.textModalb}> WANPRESTASI/CIDERA JANJI</Text> ini
        terjadi karena sengaja dan atau tidak sengaja maka Pihak Pendana dan
        Penyelenggara<Text style={styles.textModalb}> DOEKU</Text> dapat
        mengajukan Blacklist{" "}
        <Text style={styles.textModalb}>
          {" "}
          dan/atau BI Checking ke Lembaga Otoritas Jasa Keuangan (OJK) dan
          Peminjam
        </Text>{" "}
        masuk dalam daftar{" "}
        <Text style={styles.textModalb}> Blacklist OJK dan BI.</Text>
      </Text>
      <Text style={styles.headingModal}>Pasal 10</Text>
      <Text style={styles.headingModal}>BERAKHIRNYA PERJANJIAN</Text>
      <Text style={styles.textModaljus}>Perjanjian berakhir dalam hal :</Text>
      <Text style={styles.textModaljus}>
        1. Ditentukan dalam perjanjian oleh Para Pihak.
      </Text>
      <Text style={styles.textModaljus}>2. Adanya putusan hakim </Text>
      <Text style={styles.textModaljus}>
        3. Apabila tujuan perjanjian telah dicapai.
      </Text>
      <Text style={styles.textModaljus}>
        4. Jangka waktu Perjanjian telah berakhir
      </Text>
      <Text style={styles.textModaljus}>5. Wansprestasi/ingkar janji</Text>
      <Text style={styles.textModaljus}>6. Peminjam meninggal dunia</Text>
      <Text style={styles.headingModal}>Pasal 11</Text>
      <Text style={styles.headingModal}>
        HUKUM YANG MENGATUR PENYELESAIAN SENGKETA
      </Text>
      <Text style={styles.textModaljus}>
        Perjanjian ini tunduk dan diatur oleh Hukum Republik Indonesia. Bahwa
        Para Pihak dengan ini sepakat dan setuju untuk menyelesaikan setiap
        sengketa yang timbul atas adanya hubungan Perjanjian ini, maka Para
        Pihak sepakat dan setuju untuk memilih domisili hukum di Kepaniteraan
        Pengadilan Negeri Makassar ; Tanpa mengabaikan hal tersebut, maka
        Peminjam mengakui dan setuju Bahwa Pendana dapat mengajukan gugatan pada
        setiap pengadilan lainnya di wilayah hukum Indonesia yang sesuai dengan
        domisili hukum Peminjam, Perjanjian ini ditandatangani dengan
        menggunakan tanda tangan elektronik. sebagaimana diatur dalam
        Undang-Undang Republik Indonesia No.11 Tahun 2008 tentang Informasi dan
        Transaksi Elektronik oleh Para Pihak atau perwakilannya yang sah pada
        tanggal sebagaimana disebutkan dibagian awal Perjanjian ini dan akan
        mempunyai kekuatan hukum yang sama dengan Perjanjian yang dibuat dan
        ditandatangani secara basah dan dalam perjanjian ini kami hanya
        memerlukan tanda tangan eletronik antara para pihak yang terlibat dalam
        perjanjian ini. Jika salah satu atau lebih ketentuan yang terkandung
        dalam Perjanjian ini menjadi tidak sah, tidak berlaku atau tidak dapat
        dilaksanakan, maka ketentuan-ketentuan lainnya dalam hal apapun juga
        tidak akan terpengaruh dan akan terus berlaku dan mengikat Para Pihak
        sepanjang tidak mengubah makna dan tujuan dari Perjanjian ini.
      </Text>
      <Text style={styles.headingModal}>Pasal 12</Text>
      <Text style={styles.headingModal}>PEMBERITAHUAN </Text>
      <Text style={styles.textModaljus}>
        Semua pemberitahuan, permintaan atau komunikasi lain berdasarkan
        Perjanjian ini harus secara tertulis dan akan dianggap telah diberikan
        hanya jika disampaikan secara pribadi, melalui transmisi faksimili, atau
        dikirim melalui surat tercatat atau melalui surat elektronik kepada Para
        Pihak di alamat berikut, faksimili angka, dan alamat email (atau ke
        alamat lain sebagaimana diberikan secara tertulis kepada Pihak lainnya):
      </Text>
      <Text style={styles.headingModal}>Peminjam </Text>
      <Text style={styles.textModalcen}>Nama : {cd.id_ub}</Text>
      <Text style={styles.textModalcen}>
        Alamat : JL. tanah seratus sudimara jayaa
      </Text>
      <Text style={styles.textModalcen}>E-mail : {cd.email}</Text>
      <Text style={styles.textModalcen}>Telepon : 0{cd.phone}</Text>
      <Text style={styles.textModaljus}>
        Dalam hal terjadi perubahan alamat harus diberitahukan secara tertulis
        selambat-lambatnya 5 (lima) hari kerja sebelum perubahan alamat berlaku
        efektif. Jika perubahan alamat tersebut tidak diberitahukan, maka
        surat-menyurat telah diberikan semestinya yang ditujukan ke alamat
        terakhir yang tercatat pada masing-masing Pihak.
      </Text>
      <Text style={styles.headingModal}>Pasal 13</Text>
      <Text style={styles.headingModal}>KETENTUAN LAIN </Text>
      <Text style={styles.textModaljus}>
        Hal-hal yang belum diatur atau belum cukup diatur atau perubahan atau
        tambahan atas setiap kesepakatan dalam perjanjian ini akan dirundingkan
        bersama dan akan diatur lebih lanjut dalam Perjanjian tambahan
        (addendum) yang merupakan satu kesatuan dan bagian yang tidak
        terpisahkan dari Perjanjian ini.
      </Text>
      <Text style={styles.textModaljus}>
        Jika terdapat pertentangan antara syarat dan ketentuan dengan perjanjian
        ini dengan aspek khusus dari layanan pinjam meminjam maka perjanjian ini
        yang berlaku
      </Text>
      <Text style={styles.headingModal}>Pasal 14</Text>
      <Text style={styles.headingModal}>PENUTUP</Text>
      <Text style={styles.textModaljus}>
        DEMIKIAN, para Pihak telah melaksanakan perjanjian ini dengan tanda
        tangan elektronik pada tanggal yang tertera di atas yang dituangkan
        dalam bentuk Dokumen Elektronik.
      </Text>
      <Text style={styles.textModaljus}>
        Perjanjian ini dapat dilaksanakan dengan salinan elektronik atau fisik
        yang ditandatangani terpisah dan telah mendapat persetujuan elektronik
        di antara para pihak yang mana masing-masing ketika dilaksanakan dan
        disampaikan akan dianggap asli, dan semua secara bersama merupakan satu
        instrumen yang sama. Perjanjian ini tidak akan terpisah dengan
        perjanjian di Aplikasi Doeku dan akan mengikat Para Pihak.
      </Text>
      <Text style={styles.textModalb}>
        Bahwa dengan ini Peminjam menyatakan seluruh data diri yang tercantum
        adalah benar dan dapat dipertanggungjawabkan secara hukum.
      </Text>
      <View style={styles.columnttds}>
        <View style={styles.columnttd}>
          <Text style={styles.textModaljus}>Menyetujui/Approve</Text>
          <View style={{ ...styles.columnttdDet, marginVertical: 30 }}>
            <Text>Belum disetuji oleh pemberi dana</Text>
          </View>
          <Text style={styles.textModalttd}>Pendana/The Company</Text>
          <Text style={styles.textModaljus}>
            Tanda Tangan Digital/ Digital Signature
          </Text>
        </View>
        <View style={styles.columnttd}>
          <Text style={styles.textModaljus}>Menyetujui/Approve</Text>
          <View style={styles.columnttdDet}>
            <Image
              source={{
                uri: `${process.env.EXPO_PUBLIC_SERVICE_J1}/sign/borrower/${sign}`,
              }}
              style={styles.ttdImage}
            />
            <View>
              <Text style={styles.textModaljus}>
                Di tanda tangani Elentronik:{" "}
              </Text>
              <Text style={styles.textModaljus}>{cd.name} </Text>
              <Text style={styles.textModaljus}>{compDate} WITA</Text>
            </View>
          </View>
          <Text style={styles.textModalttd}>Peminjam/The Company</Text>
          <Text style={styles.textModaljus}>
            Tanda Tangan Digital/ Digital Signature
          </Text>
        </View>
      </View>
      <Text style={styles.headingModal}>
        LAMPIRAN PERJANJIAN LAYANAN PINJAMAN UANG BERBASIS TEKNOLOGI INFORMASI
      </Text>
      <Text style={styles.headingModal}>Pasal 14 </Text>
      <Text style={styles.headingModal}>FASILITAS PINJAMAN </Text>
      <Text style={styles.textModalb}>Jumlah Pinjaman</Text>
      <Text style={styles.textModaljus}>
        Jumlah Pinjaman yang diberikan oleh Pendana dan Peminjam sebesar{" "}
        {toRupiah(amount, { floatingPoint: 0 })},- ({terbilang(amount)} rupiah)
      </Text>
      <Text style={styles.textModalb}> SUKU BUNGA PINJAMAN</Text>
      <Text style={styles.textModaljus}>
        Suku Bunga Pinjaman akan dikenakan kepada Peminjam sesuai dengan durasi
        jangka waktu yang telah disetujui oleh Peminjam, antara lain :
      </Text>
      <Text style={styles.textModaljus}>
        Jangka waktu {tenor} ({terbilang(tenor)}) hari dikenakan bunga sebesar{" "}
        {tenor === 61 ? "0.15%" : tenor === 75 ? "0.13%" : "0.1%"} ({" "}
        {tenor === 61
          ? "Nol koma Lima Belas Persen"
          : tenor === 75
            ? "Nol koma Tiga Belas Persen"
            : "Nol koma Satu Persen"}{" "}
        per hari:{" "}
      </Text>
      {tenor === 61 ? (
        <>
          <Text style={styles.textModalls}>
            • Angsuran I : ({tenor} hari x 0,15 %) = 9,15 % (bunga) dengan
            Rincian : (jumlah pinjaman x {tenor} hari x 0.15%)/2 + (jumlah
            pinjaman/2) = {toRupiah((amount * 0.0015 * tenor) / 2)} +{" "}
            {toRupiah(amount / 2)} ={toRupiah(angsuran1)}
          </Text>
          <Text style={styles.textModalls}>
            • Angsuran II : ({tenor} hari x 0,15 %) = 9,15 % (bunga) dengan
            Rincian : (jumlah pinjaman x {tenor} hari x 0.15%)/2 + (jumlah
            pinjaman/2) = {toRupiah((amount * 0.0015 * tenor) / 2)} +{" "}
            {toRupiah(amount / 2)} ={toRupiah(angsuran2)}
          </Text>
        </>
      ) : tenor === 75 ? (
        <>
          {" "}
          <Text style={styles.textModalls}>
            • Angsuran I : ({tenor} hari x 0,13 %) = 9,75 % (bunga) dengan
            Rincian : (jumlah pinjaman x {tenor} hari x 0.13%)/3 + (jumlah
            pinjaman/3) = {toRupiah((amount * 0.0013 * tenor) / 3)} +{" "}
            {toRupiah(amount / 3)} ={toRupiah(angsuran1)}
          </Text>
          <Text style={styles.textModalls}>
            • Angsuran II : ({tenor} hari x 0,13 %) 3 = 9,75 % (bunga) dengan
            Rincian : (jumlah pinjaman x {tenor} hari x 0.13%)/3 + (jumlah
            pinjaman/3) = {toRupiah((amount * 0.0013 * tenor) / 3)} +{" "}
            {toRupiah(amount / 3)} ={toRupiah(angsuran2)}
          </Text>
          <Text style={styles.textModalls}>
            • Angsuran III : ({tenor} hari x 0,13 %) 3 = 9,75 % (bunga) dengan
            Rincian : (jumlah pinjaman x {tenor} hari x 0.13%)/3 + (jumlah
            pinjaman/3) = {toRupiah((amount * 0.0013 * tenor) / 3)} +{" "}
            {toRupiah(amount / 3)} ={toRupiah(angsuran3)}
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.textModalls}>
            • Angsuran I : ({tenor} hari x 0,1 %) = 9 % (bunga) dengan Rincian :
            (jumlah pinjaman x {tenor} hari x 0.1%)/3 + (jumlah pinjaman/3) ={" "}
            {toRupiah((amount * 0.001 * tenor) / 3)} + {toRupiah(amount / 3)} =
            {toRupiah(angsuran1)}
          </Text>
          <Text style={styles.textModalls}>
            • Angsuran II : ({tenor} hari x 0,1 %) = 9 % (bunga) dengan Rincian
            : (jumlah pinjaman x {tenor} hari x 0.1%)/3 + (jumlah pinjaman/3) ={" "}
            {toRupiah((amount * 0.001 * tenor) / 3)} + {toRupiah(amount / 3)} =
            {toRupiah(angsuran2)}
          </Text>
          <Text style={styles.textModalls}>
            • Angsuran III : ({tenor} hari x 0,1 %) = 9 % (bunga) dengan Rincian
            : (jumlah pinjaman x {tenor} hari x 0.1%)/3 + (jumlah pinjaman/3) ={" "}
            {toRupiah((amount * 0.001 * tenor) / 3)} + {toRupiah(amount / 3)} =
            {toRupiah(angsuran2)}
          </Text>
        </>
      )}

      <Text style={styles.textModalb}>JANGKA WAKTU PINJAMAN</Text>
      <Text style={styles.textModaljus}>
        Jangka waktu pinjaman terhitung sejak Peminjam telah mendapatkan
        pinjaman dari Pendana sampai dengan jangka waktu yang di sepakati.
        Jangka waktu pinjaman selama Sembilan Puluh ({tenor}) hari terhitung
        sejak tanggal 00-00-0000 (kosong) dan berakhir pada tanggal 00-00-0000
        (kosong). Jangka waktu Pinjaman dilakukan secara mengangsur sedangkan
        jangka waktu Pembayaran Angsuran akan tertera pada Platform Aplikasi
        Doeku masing- masing Peminjam.
      </Text>
      <Text style={styles.textModalb}> Denda Keterlambatan</Text>
      <Text style={styles.textModaljus}>
        Denda keterlambatan pembayaran jumlah pinjaman akan dikenakan denda
        bunga sebesar 0.1 % (nol koma satu persen) per hari setelah lewatnya
        jangka waktu yang telah disepakati pada Pasal 4.1.2 di atas sampai
        dengan batas maksimal jangka waktu pembayaran {tenor} (
        {terbilang(tenor)}) hari. Apabila lewat dari jangka waktu {tenor} (
        {terbilang(tenor)}) hari Peminjam tidak melunasi Jumlah Pinjaman, Suku
        Bunga dan Denda Bunga, maka Peminjam di anggap Wansprestasi sesuai
        dengan Pasal 7 di atas, maka Pihak Pendana dan Penyelenggara DOEKU dapat
        mengajukan Blacklist dan atau BI Checking ke Lembaga Otoritas Jasa
        Keuangan (OJK).
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
