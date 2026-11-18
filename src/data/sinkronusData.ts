export interface ModerationStep {
  phase: string;
  duration: string;
  activity: string;
  facilitatorPrompt: string;
}

export interface CoreSlideBlock {
  heading: string;
  badge?: string;
  points: string[];
  highlight?: string;
}

export interface LkSpec {
  title: string;
  description: string;
  downloadShortlink?: string;
  uploadShortlink?: string;
  pdfAssetId?: string;
  items: string[];
}

export interface SinkronusModule {
  id: '01A' | '01B' | '02' | '03' | '04' | '05' | '06' | '07';
  code: string;
  title: string;
  shortTitle: string;
  dayInfo: string;
  durationLabel: string;
  pic: string;
  objectives: string[];
  facilitatorNotes: string[];
  coreSlides: CoreSlideBlock[];
  moderationPlan: ModerationStep[];
  lkSpec?: LkSpec;
  relatedAssetIds: string[];
  hasInteractiveTool: boolean;
  interactiveToolTitle?: string;
}

export const SINKRONUS_MODULES: SinkronusModule[] = [
  {
    id: '01A',
    code: 'Materi 01A',
    title: 'Kebijakan Umum Revitalisasi Satuan Pendidikan',
    shortTitle: 'Revitalisasi Sarpras SD',
    dayInfo: 'Hari 1 · 20 Nov 2026 (09:30–10:30)',
    durationLabel: '60 Menit',
    pic: 'PIC Revitalisasi BB/BPMP',
    objectives: [
      'Memahami target nasional revitalisasi satuan pendidikan 2025–2028 berdasarkan arahan Presiden.',
      'Mengetahui kondisi faktual kerusakan sarpras SD pada data Dapodik serta pentingnya konsistensi input data.',
      'Menguasai syarat pengusulan dan 5 tahapan pelaksanaan konstruksi swakelola oleh Tim P2SP di sekolah.',
    ],
    facilitatorNotes: [
      'Tekankan bahwa prasyarat utama usulan revitalisasi berada pada keaktifan dan validitas data Dapodik (hindari ketidakkonsistenan antarsemester).',
      'Ingatkan sekolah calon pengusul untuk menyiapkan foto ber-geotag dari tepat 6 sudut pandang bangunan.',
      'Kaitkan perbaikan sarpras fisik dengan kesiapan ruang belajar aman untuk penempatan Papan Interaktif Digital (PID).',
    ],
    coreSlides: [
      {
        heading: 'Target Nasional & Kondisi Dapodik Oktober 2025',
        badge: 'Skala Nasional',
        points: [
          'Arahan Presiden target penuntasan revitalisasi: 2025 (17 ribu), 2026 (70 ribu), 2027 (100 ribu), dan 2028 (100 ribu) — total ±288 ribu satuan pendidikan tuntas pada 2028.',
          'Data Dapodik Oktober 2025 menunjukkan 44,98% (±195 ribu) ruang belajar berada dalam kondisi rusak sedang hingga berat.',
          'Ditemukan ±24 ribu satuan pendidikan dengan data kondisi sarana prasarana yang tidak konsisten antarsemester sehingga menghambat verifikasi.',
        ],
        highlight: 'Portal resmi pengusulan: revit.kemendikdasmen.go.id menggunakan SSO Dapodik Kepala Sekolah.',
      },
      {
        heading: 'Syarat Kelayakan & Dokumentasi 6 Sudut',
        badge: 'Persyaratan Teknis',
        points: [
          'Memiliki NPSN aktif, status BOSP berjalan, lahan tidak dalam sengketa, dan tingkat kerusakan minimal kategori sedang/berat.',
          'Kelengkapan berkas: SK Tim P2SP (Panitia Pembangunan Satuan Pendidikan), SPTJM, RAB, DED, RPD, RKS, dan Kurva S.',
          'Wajib melampirkan foto geotag dari 6 sudut bangunan: Depan, Belakang, Dalam Ruangan, Sisi Kiri, Sisi Kanan, dan Bagian Atas/Atap.',
        ],
      },
      {
        heading: '5 Tahap Pelaksanaan Revitalisasi',
        badge: 'Alur Swakelola',
        points: [
          'Tahap 1 — Persiapan: Pemutakhiran Dapodik, verifikasi lapangan, dan unggah proposal di portal.',
          'Tahap 2 — Pra Konstruksi: Penyusunan kontrak swakelola, RAB/DED final, serta pembentukan pengawasan teknis.',
          'Tahap 3 — Penyaluran Dana: Pencairan bertahap ke rekening satuan pendidikan sesuai progres.',
          'Tahap 4 — Konstruksi: Pengerjaan fisik terkendali mengikuti Kurva S.',
          'Tahap 5 — Pelaporan: Pertanggungjawaban BAST, dokumentasi akhir 6 sudut, dan serah terima aset.',
        ],
      },
    ],
    moderationPlan: [
      {
        phase: 'Pembukaan & Konteks Kebijakan',
        duration: '15 Menit',
        activity: 'Paparan arah kebijakan nasional revitalisasi 2025–2028 dan data kerusakan Dapodik.',
        facilitatorPrompt: 'Tanyakan kepada peserta apakah data kondisi ruang kelas di Dapodik sekolah masing-masing sudah sinkron pada semester berjalan.',
      },
      {
        phase: 'Pendalaman Portal & Dokumen 6 Sudut',
        duration: '30 Menit',
        activity: 'Bedah alur aplikasi revit.kemendikdasmen.go.id, syarat SPTJM, serta standar foto geotag 6 sudut.',
        facilitatorPrompt: 'Pastikan peserta memahami perbedaan foto dokumentasi biasa dengan foto geotag 6 sudut lengkap.',
      },
      {
        phase: 'Tanya Jawab & Sinkronisasi P2SP',
        duration: '15 Menit',
        activity: 'Diskusi 5 tahap swakelola dan keterkaitannya dengan kesiapan ruang kelas aman bagi perangkat digital APHTC.',
        facilitatorPrompt: 'Ajak peserta mencatat poin perbaikan data sarpras yang perlu dikoordinasikan bersama operator sekolah sepulang pelatihan.',
      },
    ],
    relatedAssetIds: ['materi-01a'],
    hasInteractiveTool: false,
  },
  {
    id: '01B',
    code: 'Materi 01B',
    title: 'Kebijakan dan Arah Transformasi Digital Pembelajaran Jenjang SD Tahun 2026',
    shortTitle: 'Arah Transformasi Digital SD',
    dayInfo: 'Hari 1 · 20 Nov 2026 (10:30–12:00)',
    durationLabel: '90 Menit',
    pic: 'PIC Digitalisasi BB/BPMP',
    objectives: [
      'Memetakan posisi satuan pendidikan ke dalam 4 Level Transformasi Digital (Konvensional hingga Smart).',
      'Menginternalisasi pola pikir berbasis aset (7 jenis aset) dibanding pola pikir berbasis defisit.',
      'Menerapkan 3 Pilar Transformasi (Technology, Environment, Process) serta 4 Kerangka Literasi Digital.',
    ],
    facilitatorNotes: [
      'Bangun kesadaran bahwa teknologi hanyalah alat; kunci utama perubahan adalah proses pembelajaran dan budaya sekolah.',
      'Soroti fleksibilitas penerapan Low Tech, Mid Tech, hingga High Tech sesuai kondisi infrastruktur nyata masing-masing SD.',
      'Gunakan sesi ini sebagai jembatan menuju sesi praktik langsung Materi 02 di siang hari.',
    ],
    coreSlides: [
      {
        heading: '4 Level Transformasi Sekolah Digital',
        badge: 'Peta Jalan',
        points: [
          'Level 1 — Konvensional: Pembelajaran dominan tatap muka luring, pemanfaatan perangkat digital masih insidental/individu.',
          'Level 2 — Go Digital: Sekolah mulai memiliki perangkat bersama (PID/Laptop/Ruang Murid Offline) serta tata kelola jadwal dan SOP.',
          'Level 3 — Digital: Pemanfaatan ekosistem digital dan LMS terintegrasi mencapai 50%–100% proses belajar dan asesmen rutin.',
          'Level 4 — Smart School: Lingkungan Smart Classroom kolaboratif dengan dukungan analitik pembelajaran, AI pedagogis, dan ekosistem terhubung.',
        ],
      },
      {
        heading: '3 Pilar Transformasi & Pola Pikir Berbasis 7 Aset',
        badge: 'Kerangka Berpikir',
        points: [
          '3 Pilar Utama: (1) Technology — perangkat keras, lunak & konten; (2) Environment — ruang belajar aman & kebijakan sekolah; (3) Process — desain pedagogis & asesmen mendalam.',
          'Mengubah Pola Pikir Defisit ("Kami tidak punya sinyal/banyak kekurangan") menjadi Pola Pikir Aset ("Mengoptimalkan 7 modal yang sudah ada").',
          '7 Jenis Aset Sekolah: Manusia, Digital, Fisik, Institusional, Sosial, Ekonomi, serta Budaya.',
        ],
        highlight: 'Ketiadaan internet bukan hambatan mutlak — perangkat bantuan telah dilengkapi Ruang Murid Offline 48,1 GB.',
      },
      {
        heading: '4 Kerangka Literasi Digital & Spektrum Teknologi',
        badge: 'Literasi & Eksekusi',
        points: [
          'Digital Skills: Kecakapan mengoperasikan perangkat keras (PID/Laptop) dan platform edukasi.',
          'Digital Safety: Keamanan data murid, proteksi konten ramah anak, dan keamanan fisik alat.',
          'Digital Culture: Pembiasaan kolaborasi digital positif sesuai konteks budaya Indonesia.',
          'Digital Ethics: Pengaturan screen time, etika sitasi karya, dan penghargaan privasi.',
          'Spektrum Teknologi: Low Tech (konten offline/QR cetak), Mid Tech (PID + Laptop interaktif), High Tech (AI interaktif & kolaborasi daring).',
        ],
      },
    ],
    moderationPlan: [
      {
        phase: 'Refleksi Level Sekolah Saat Ini',
        duration: '20 Menit',
        activity: 'Peserta memetakan secara cepat sekolah masing-masing berada pada Level 1, 2, 3, atau 4.',
        facilitatorPrompt: 'Minta 2–3 guru berbagi contoh konkret mengapa sekolah mereka berada pada level tersebut.',
      },
      {
        phase: 'Eksplorasi 3 Pilar & Pemetaan 7 Aset',
        duration: '45 Menit',
        activity: 'Pemaparan pilar Technology-Environment-Process dan latihan singkat mengidentifikasi 7 aset sekolah SD.',
        facilitatorPrompt: 'Dorong peserta mengidentifikasi minimal satu aset non-fisik (misal komunitas KKG atau alumni) yang bisa membantu digitalisasi.',
      },
      {
        phase: 'Penguatan 4 Kerangka Literasi Digital',
        duration: '25 Menit',
        activity: 'Diskusi penerapan Low Tech / Mid Tech / High Tech pada berbagai kondisi jaringan sekolah SD.',
        facilitatorPrompt: 'Tegaskan bahwa guru di daerah 3T tetap dapat mencapai mutu tinggi dengan pendekatan Low–Mid Tech berbasis Ruang Murid Offline.',
      },
    ],
    relatedAssetIds: ['materi-01b'],
    hasInteractiveTool: false,
  },
  {
    id: '02',
    code: 'Materi 02',
    title: 'Eksplorasi Penggunaan PID, Laptop, dan Media Penyimpanan Eksternal dalam Pembelajaran',
    shortTitle: 'Eksplorasi PID & Perangkat',
    dayInfo: 'Hari 1 · 20 Nov 2026 (13:00–15:30)',
    durationLabel: '150 Menit',
    pic: 'Narasumber / Fasilitator',
    objectives: [
      'Mengenali spesifikasi teknis bantuan Kategori 1–3, panel port I/O PID, serta cara mengaktifkan fungsi sentuh dua arah PID–Laptop.',
      'Mempraktikkan partisi Drive C:/D:, pintasan 5 jari, bilah samping, serta 4 jenis interaksi langsung pada PID.',
      'Menyelesaikan Lembar Kerja 19 butir eksplorasi PID dalam kerangka SAMR pada topik pembelajaran SD.',
    ],
    facilitatorNotes: [
      'Sesi sore berdurasi penuh 150 menit! Pastikan kuis pemantik Wayground hanya 15 menit agar praktik kelompok mendapat jatah penuh 75 menit.',
      'Buktikan secara langsung di depan peserta perbedaan menghubungkan kabel HDMI saja vs HDMI + kabel USB-B Touch.',
      'Ingatkan peserta mengunduh LK di s.id/LK-EksplorasiPID-APHTC dan mengunggah hasil kerja ke s.id/Unggah-LK-APHTC.',
    ],
    coreSlides: [
      {
        heading: 'Spesifikasi Bantuan Kategori 1, 2 & 3',
        badge: 'Inventaris Teknis',
        points: [
          'PID 75 Inci: Layar sentuh multi-touch OS Android 13, RAM 16 GB, ROM 256 GB, garansi resmi on-site 3 tahun.',
          'Laptop Pembelajaran: Prosesor Core i5 / Ryzen 5, RAM 8 GB, SSD 256 GB, Windows 11 Education, garansi 1 tahun.',
          'Media Penyimpanan Eksternal: HDD/SSD 500 GB berisi paket konten Ruang Murid Offline 48,1 GB.',
          'Kategori 2 & 3: Dilengkapi layanan konektivitas Starlink serta perangkat Panel Surya untuk sekolah blankspot/non-listrik stabil.',
        ],
      },
      {
        heading: 'Koneksi Kritis Panel Depan–Belakang & Nirkabel',
        badge: 'Keterampilan Wajib',
        points: [
          'Panel Depan PID: 3× USB-A, HDMI-In, USB-C, dan tombol Standby/Power cepat.',
          'Panel Belakang PID: Audio Jack 3.5mm, HDMI-In, HDMI-Out, LAN RJ45, USB-B Touch, USB-A 3.0, RS232, Digital Audio Out, Line In.',
          'ATURAN EMAS: Kabel HDMI saja = PID hanya jadi layar kedua (sentuhan tidak mengontrol laptop). Wajib pasang HDMI + USB-B Touch agar sentuhan jari di layar PID mengontrol penuh kursor Laptop!',
          'Koneksi Nirkabel: Gunakan aplikasi Hisense Screen Share atau pintasan Windows (Win + K) pada jaringan Wi-Fi yang sama.',
        ],
        highlight: 'Gunakan Simulasi Inspektor Port PID & Ceklis SAMR 19 Butir pada tab "Simulasi & Praktik".',
      },
      {
        heading: '3 Pintasan Layar & 4 Mode Interaksi Kelas',
        badge: 'Pengoperasian Cepat',
        points: [
          '3 Pintasan Utama: (1) Pintasan 5 Jari (menekan layar dengan 5 jari untuk menu cepat/tidur), (2) Bilah Samping kiri/kanan (pena, tangkap layar, split screen), (3) Menu Navigasi mengambang.',
          '4 Interaksi Inti di Kelas: Seret & Lepas (Drag & Drop), Gambar & Tulis bebas di papan tulis, Anotasi Langsung di atas PDF/video, dan Manipulasi Langsung objek 3D/simulasi.',
        ],
      },
    ],
    moderationPlan: [
      {
        phase: '1. Pembukaan & Tujuan Sesi',
        duration: '5 Menit',
        activity: 'Menyampaikan target capaian penguasaan perangkat terintegrasi.',
        facilitatorPrompt: 'Pastikan setiap kelompok duduk mengelilingi stasiun perangkat yang aktif.',
      },
      {
        phase: '2. Ayo Bermain (Wayground Kuis Awal)',
        duration: '15 Menit',
        activity: 'Kuis interaktif diagnostik pengetahuan awal perangkat melalui tautan Wayground resmi.',
        facilitatorPrompt: 'Tampilkan leaderboard Wayground di layar utama PID untuk membangkitkan antusiasme pasca-makan siang.',
      },
      {
        phase: '3. Paparan Spesifikasi, Pintasan & Partisi',
        duration: '20 Menit',
        activity: 'Penjelasan paket Kategori 1–3 (10 mnt) + demo Disk Management C:/D: & pintasan 5 jari (10 mnt).',
        facilitatorPrompt: 'Beri penekanan perhitungan 100 GB = 102400 MB agar tidak salah input saat Shrink Volume.',
      },
      {
        phase: '4. Demo Integrasi Kabel & 4 Interaksi PID',
        duration: '25 Menit',
        activity: 'Simulasi HDMI vs HDMI+USB-B Touch & nirkabel (15 mnt) serta 4 teknik interaksi layar (10 mnt).',
        facilitatorPrompt: 'Undang 2 orang peserta maju menyentuh layar saat USB-B Touch dilepas lalu dipasang kembali.',
      },
      {
        phase: '5. Eksplorasi Kelompok Kerangka SAMR',
        duration: '75 Menit',
        activity: 'Kelompok mengeksplorasi Ruang Murid (topik Metamorfosis Kupu-Kupu & Katak) & melengkapi 19 butir LK SAMR lalu unggah.',
        facilitatorPrompt: 'Kelilingi kelompok; bantu mengklasifikasikan mana fitur tingkat Substitution, Augmentation, Modification, atau Redefinition.',
      },
      {
        phase: '6. Troubleshooting & Refleksi',
        duration: '10 Menit',
        activity: 'Ringkasan penanganan masalah umum, tautan s.id/PengelolaanPerangkatDigital (5 mnt), dan refleksi penutup (5 mnt).',
        facilitatorPrompt: 'Pastikan seluruh kelompok sudah mengunggah LK ke s.id/Unggah-LK-APHTC.',
      },
    ],
    lkSpec: {
      title: 'LK Eksplorasi PID Berbasis SAMR (19 Indikator)',
      description:
        'Terdiri atas 19 butir ceklis observasi fungsionalitas PID, laptop, serta integrasi materi Metamorfosis Kupu-kupu dan Katak pada taksonomi SAMR.',
      downloadShortlink: 'https://s.id/LK-EksplorasiPID-APHTC',
      uploadShortlink: 'https://s.id/Unggah-LK-APHTC',
      pdfAssetId: 'materi-02-lk',
      items: [
        'S (Substitution) — 5 Butir: Menampilkan gambar/teks statis, memutar video tanpa jeda, mengetik teks standar, membuka PDF/PPT, dan menunjuk materi memakai stylus sebagai pengganti spidol papan tulis.',
        'A (Augmentation) — 5 Butir: Melakukan zoom-in/out diagram organ/daur hidup, memberi anotasi berwarna langsung di atas video/gambar, merekam coretan layar menjadi gambar simpanan, membagi layar (split screen), dan pencarian cepat kosakata.',
        'M (Modification) — 5 Butir: Murid maju menyeret-melepas (drag & drop) tahapan metamorfosis secara kolaboratif, membandingkan daur kupu-kupu & katak bersebelahan, menjalankan simulasi interaktif, serta menyimpan hasil kolaborasi kelompok.',
        'R (Redefinition) — 4 Butir: Mengubah kelas menjadi studio eksplorasi multikanal, menghubungkan anotasi PID ke portofolio digital, merancang kuis interaktif langsung dari karya murid, dan mempublikasikan produk pembelajaran.',
      ],
    },
    relatedAssetIds: ['materi-02-slide', 'materi-02-moderasi', 'materi-02-lk'],
    hasInteractiveTool: true,
    interactiveToolTitle: 'Inspektor Port PID & Ceklis Eksplorasi SAMR (19 Butir)',
  },
  {
    id: '03',
    code: 'Materi 03',
    title: 'Pengembangan dan Pemanfaatan Media Pembelajaran Interaktif (MPI)',
    shortTitle: 'Pengembangan MPI',
    dayInfo: 'Hari 1 (16:00–17:15) & Hari 2 (07:45–09:00)',
    durationLabel: '150 Menit (2 Bagian)',
    pic: 'Narasumber / Fasilitator',
    objectives: [
      'Menyaring ketersediaan bahan ajar di Ruang Murid & 12 platform pembelajaran menggunakan matriks Analisis Kesenjangan.',
      'Memahami prinsip kerja sistem MPI (Input -> Proses -> Umpan Balik -> Coba Lagi -> Hasil Belajar) serta 12 bentuk interaksi.',
      'Merancang dan memproduksi minimal 1 prototipe MPI siap tayang pada PID memakai Master Prompt terstruktur.',
    ],
    facilitatorNotes: [
      'Materi 03 terbagi dua hari: Hari 1 fokus pada Relate & Explore (75 menit); Hari 2 pagi fokus pada Apply & Learn Again (75 menit).',
      'Gunakan tab "Simulasi & Praktik" untuk langsung mendemokan Generator Master Prompt MPI dan menyalin prompt lengkap secara instan di depan kelas.',
      'Tunjukkan contoh jadi di s.id/MPI-Metamorfosis sebagai patokan mutu antarmuka anak SD.',
    ],
    coreSlides: [
      {
        heading: 'Kurasi Bahan Ajar & Analisis Kesenjangan (Explore)',
        badge: 'Kurasi Cerdas',
        points: [
          'Ruang Murid (rumah.pendidikan.go.id / Offline): Menyediakan 6.400+ video pembelajaran & teks bacaan terkurasi Kemendikdasmen.',
          '12 Platform Ekosistem Pendukung (s.id/websitebahanajar): Canva, Wayground, Polypad, Wordwall, Qreatif Educative, PhET, Sketchfab, Google Earth, Coolmath4kids, ScratchJr, Education.com, Musicca.',
          'Matriks Analisis Kesenjangan Bahan Ajar: (1) Sudah Sesuai -> Langsung Gunakan; (2) Sebagian Sesuai -> Adaptasi/Modifikasi; (3) Belum Terfasilitasi -> Buat MPI Mandiri!',
        ],
      },
      {
        heading: 'Arsitektur Kerja & 12 Bentuk Interaksi MPI',
        badge: 'Desain Interaktif',
        points: [
          'Siklus Kerja MPI: Input Pengguna (Sentuhan/Ketikan di PID) -> Proses Sistem -> Umpan Balik Edukatif Instan -> Opsi "Coba Lagi" -> Rekaman Hasil Belajar.',
          '12 Bentuk Interaksi: Click Interaction, Drag & Drop, Matching, Multiple Choice, Fill in the Blank, Sorting, Sequence/Ordering, Hotspot, Simulation, Branching Scenario, Game Based Learning, dan Typing Response.',
        ],
        highlight: 'Rancangan MPI SD wajib memuat tombol ramah sentuh besar (untuk layar PID 75"), ikon visual jelas, serta skor percobaan pertama.',
      },
      {
        heading: 'Produksi Cepat dengan 4 Alat Bantu & Master Prompt',
        badge: 'Produksi Praktis',
        points: [
          '4 Alat Bantu Pembuatan Kode MPI Interaktif: ChatGPT, Gemini, Canva AI (Mode Kode </>), dan Claude.',
          'Gunakan templat resmi _UNDUH_SALIN__CONTOH_PROMPT_MPI (s.id/MasterPrompt-MPI) yang sudah mengatur 6 bagian isi media, mekanisme skor percobaan pertama, umpan balik "Kamu Hebat!", tombol "Coba Lagi", dan animasi visual.',
        ],
      },
    ],
    moderationPlan: [
      {
        phase: 'Relate — Mengapa Perlu MPI? (Hari 1)',
        duration: '15 Menit',
        activity: 'Refleksi kesenjangan media ajar di kelas SD (media statis vs kebutuhan sentuhan aktif murid pada PID).',
        facilitatorPrompt: 'Tanyakan topik pelajaran SD apa yang paling sulit dijelaskan hanya dengan gambar buku cetak.',
      },
      {
        phase: 'Explore — Ruang Murid, 12 Platform & 12 Interaksi (Hari 1)',
        duration: '55 Menit',
        activity: 'Penelusuran 6.400+ aset Ruang Murid, analisis kesenjangan, demo s.id/MPI-Metamorfosis, dan pembedahan 12 bentuk interaksi.',
        facilitatorPrompt: 'Pastikan setiap kelompok mengidentifikasi 1 Tujuan Pembelajaran (TP) yang masuk kategori "Belum Terfasilitasi".',
      },
      {
        phase: 'Apply — Merakit & Menguji MPI dengan Master Prompt (Hari 2)',
        duration: '65 Menit',
        activity: 'Mengisi kolom Generator Master Prompt, membangkitkan HTML interaktif, menguji sentuhan langsung di PID, dan mengisi LK MPI.',
        facilitatorPrompt: 'Pandu peserta mengecek apakah fitur "Coba Lagi" dan skor percobaan pertama sudah berjalan dengan benar.',
      },
      {
        phase: 'Learn Again — Unggah Produk & Umpan Balik (Hari 2)',
        duration: '15 Menit',
        activity: 'Pameran mini (showcase) 2 kelompok terpilih di layar utama dan unggah ke s.id/Unggah-MPI-APHTC.',
        facilitatorPrompt: 'Apresiasi kreativitas pemilihan warna dan kejelasan huruf agar terbaca dari bangku paling belakang.',
      },
    ],
    lkSpec: {
      title: 'LK Pembuatan Media Pembelajaran Interaktif (MPI)',
      description:
        'Lembar kerja pemetaan kesenjangan bahan ajar hingga rancangan interaksi MPI per kelompok.',
      downloadShortlink: 'https://s.id/LK-PembuatanMPI-APHTC',
      uploadShortlink: 'https://s.id/Unggah-MPI-APHTC',
      pdfAssetId: 'materi-03-lk',
      items: [
        'Identitas Fase/Kelas, Mata Pelajaran, dan Tujuan Pembelajaran (TP) spesifik.',
        'Hasil pemetaan Ruang Murid / Platform Eksternal (Sudah Sesuai / Sebagian Sesuai / Belum Terfasilitasi).',
        'Pemilihan minimal 2 dari 12 bentuk interaksi yang relevan bagi murid SD.',
        'Rancangan 6 bagian layar media + butir soal & umpan balik serta tautan unggahan berkas HTML/tautan MPI.',
      ],
    },
    relatedAssetIds: ['materi-03-slide', 'materi-03-moderasi', 'materi-03-lk', 'materi-03-prompt'],
    hasInteractiveTool: true,
    interactiveToolTitle: 'Generator Master Prompt MPI & Direktori 12 Platform / 12 Interaksi',
  },
  {
    id: '04',
    code: 'Materi 04',
    title: 'Inspirasi Asesmen Berbasis Digital',
    shortTitle: 'Asesmen Digital',
    dayInfo: 'Hari 2 · 21 Nov 2026 (09:00–10:30)',
    durationLabel: '90 Menit',
    pic: 'Narasumber / Fasilitator',
    objectives: [
      'Membedakan rancangan Forward Design dengan Backward Design (Understanding by Design / UbD).',
      'Menerapkan 3 fungsi asesmen (Assessment as, for, dan of Learning) beserta 3 prinsip Permendikbud No. 21/2022.',
      'Menentukan KKTP menggunakan pendekatan Interval Nilai serta menafsirkan skor digital untuk tindak lanjut pembelajaran.',
    ],
    facilitatorNotes: [
      'Gunakan Kuis "Benar atau Salah" pada tab Simulasi & Praktik secara interaktif untuk menguji miskonsepsi umum guru (terutama soal nomor 3 dan 4!).',
      'Tekankan bahwa remedial tidak boleh sekadar mengulang soal identik tanpa perubahan pendekatan/media.',
      'Jembatani asesmen ini langsung dengan penyusunan RPP Pembelajaran Mendalam pada Materi 05.',
    ],
    coreSlides: [
      {
        heading: 'Forward Design vs Backward Design (UbD)',
        badge: 'Paradigma Perencanaan',
        points: [
          'Forward Design: Menetapkan Tujuan -> Menyusun Kegiatan -> Baru membuat Asesmen di akhir (sering tidak selaras).',
          'Backward Design (UbD): (1) Menetapkan Tujuan & Enduring Understanding -> (2) Menentukan Bukti & Kriteria Asesmen lebih dulu -> (3) Merancang Aktivitas Belajar yang tepat sasaran.',
          'Permendikbud No. 21 Tahun 2022 menetapkan 3 Prinsip Asesmen: Berkeadilan, Objektif, dan Edukatif.',
        ],
      },
      {
        heading: '3 Fungsi, 9 Teknik & 4 Pendekatan KKTP',
        badge: 'Instrumen Evaluasi',
        points: [
          '3 Fungsi Asesmen: Assessment as Learning (refleksi diri/sejawat murid), Assessment for Learning (formatif perbaikan proses), Assessment of Learning (sumatif capaian akhir).',
          '9 Teknik Asesmen: Observasi, Kinerja/Unjuk Kerja, Projek, Tes Tertulis, Tes Lisan, Penugasan, Portofolio, Jurnal, serta Penilaian Diri/Antarteman.',
          '4 Pendekatan KKTP: Deskripsi Kriteria, Rubrik, Interval Nilai, dan Persentase Ketercapaian.',
          'Contoh Interval Nilai Panduan 2025: 0–20 (Belum mencapai, remedial seluruh bagian), 21–40 (Belum mencapai, remedial sebagian besar), 41–60 (Hampir mencapai), 61–80 (Sudah mencapai, lanjut TP baru), 81–100 (Sudah mencapai, pengayaan tantangan).',
        ],
      },
      {
        heading: '3 Praktik Baik Asesmen Digital SD',
        badge: 'Inspirasi Kelas',
        points: [
          '1. Kode Rahasia Bajak Laut (Matematika Kelas 4): Pos tantangan memakai QR Code & Google Form untuk melacak pemahaman bertahap (Assessment for Learning).',
          '2. Warung Seblak Digital (Matematika Kelas 5): Simulasi kasir jual beli interaktif di Canva/Web pada PID yang memadukan ketiga fungsi asesmen sekaligus.',
          '3. Gim Edukasi Sistem Pencernaan + Ruang Murid (IPAS Kelas 5): Skor gim tetap harus dianalisis guru berdasar indikator TP, bukan sekadar menang atau cepat.',
        ],
      },
    ],
    moderationPlan: [
      {
        phase: 'Relate — Mengingat Kembali Praktik Asesmen',
        duration: '15 Menit',
        activity: 'Pemantik pengalaman guru: mana yang lebih dulu dibuat saat menyusun modul ajar—soal atau aktivitas?',
        facilitatorPrompt: 'Gunakan pertanyaan ini untuk memperkenalkan keunggulan Backward Design (UbD).',
      },
      {
        phase: 'Explore — UbD, 3 Fungsi & 3 Praktik Baik SD',
        duration: '30 Menit',
        activity: 'Bedah Permendikbud 21/2022, perbedaan Formatif vs Sumatif, 3 praktik baik SD, serta kuis Benar/Salah 4 kasus.',
        facilitatorPrompt: 'Buka tab "Simulasi & Praktik" untuk mengajak seluruh ruangan menjawab 4 kasus Benar/Salah lalu membahas alasannya.',
      },
      {
        phase: 'Apply — Simulasi Penentuan KKTP Interval & Tindak Lanjut',
        duration: '35 Menit',
        activity: 'Kelompok berlatih memetakan skor murid ke dalam 5 rentang interval (0–20 hingga 81–100) beserta strategi diferensiasi remedial/pengayaan.',
        facilitatorPrompt: 'Pastikan peserta merancang strategi remedial berbeda bagi rentang 0–20 dan 21–40.',
      },
      {
        phase: 'Learn Again — Refleksi & Kaitan ke RPP Digital',
        duration: '10 Menit',
        activity: 'Menarik benang merah bahwa rancangan asesmen digital dari sesi ini langsung menjadi Langkah ke-4 penyusunan RPP pada Materi 05.',
        facilitatorPrompt: 'Ajak 2 guru merangkum satu prinsip baru asesmen yang akan langsung diterapkan minggu depan.',
      },
    ],
    relatedAssetIds: ['materi-04-slide', 'materi-04-moderasi'],
    hasInteractiveTool: true,
    interactiveToolTitle: 'Kuis Kasus "Benar atau Salah" & Simulator Interval KKTP 2025',
  },
  {
    id: '05',
    code: 'Materi 05',
    title: 'Perencanaan Pembelajaran Mendalam Berbasis Digital',
    shortTitle: 'Perencanaan Pembelajaran',
    dayInfo: 'Hari 2 · 21 Nov 2026 (10:30–14:00)',
    durationLabel: '150 Menit (2 Bagian)',
    pic: 'Narasumber / Fasilitator',
    objectives: [
      'Memahami 8 Dimensi Profil Lulusan, 3 Prinsip, serta urutan 3 Pengalaman Belajar (Memahami -> Mengaplikasi -> Merefleksi).',
      'Mengintegrasikan 4 Kerangka Pembelajaran dengan pendekatan TPACK dan matriks Enhancement/Transformation SAMR.',
      'Menyusun RPP Pembelajaran Mendalam Berbasis Digital serta melakukan telaah sejawat (Peer Assessment) 14 indikator.',
    ],
    facilitatorNotes: [
      'Bagian 1 (sebelum ISHOMA, 90 menit) digunakan untuk pemahaman konsep, Mini-Game "Mari Bermain" (7 skenario), dan mulai menyusun RPP.',
      'Bagian 2 (setelah ISHOMA, 60 menit) difokuskan untuk finalisasi RPP kelompok, saling menukar RPP antar kelompok, dan menghitung skor Peer Assessment (/56 * 100).',
      'Gunakan kalkulator Peer Assessment 14 indikator pada tab Simulasi & Praktik agar kelompok langsung melihat kategori kesesuaian RPP.',
    ],
    coreSlides: [
      {
        heading: '8 Dimensi Profil Lulusan & 3 Prinsip Pembelajaran Mendalam',
        badge: 'Fondasi Pedagogis',
        points: [
          '8 Dimensi Profil Lulusan: Keimanan & Ketakwaan, Kewargaan, Penalaran Kritis, Kreativitas, Kolaborasi, Kemandirian, Kesehatan, dan Komunikasi.',
          '3 Prinsip Pembelajaran Mendalam: Berkesadaran, Bermakna, dan Menggembirakan.',
          '3 Pengalaman Belajar Berurutan: (1) Memahami (konstruksi pengetahuan awal), (2) Mengaplikasi (menerapkan dalam konteks nyata), (3) Merefleksi (evaluasi makna & strategi diri).',
        ],
      },
      {
        heading: '4 Kerangka Pembelajaran, TPACK & SAMR',
        badge: 'Arsitektur Desain',
        points: [
          '4 Kerangka Pembelajaran: Praktik Pedagogis, Lingkungan Pembelajaran, Kemitraan Pembelajaran, serta Pemanfaatan Digital.',
          'TPACK memadukan irisan Technological, Pedagogical, dan Content Knowledge secara harmonis.',
          'Matriks SAMR: S (Substitution) & A (Augmentation) tergolong Enhancement; M (Modification) & R (Redefinition) tergolong Transformation.',
        ],
      },
      {
        heading: '4 Langkah Penyusunan RPP & Instrumen Peer Assessment',
        badge: 'Produk RPP',
        points: [
          'Langkah 1 — Identifikasi: Analisis kesiapan murid, dimensi profil lulusan, dan materi esensial.',
          'Langkah 2 — Desain Pembelajaran: Tujuan Pembelajaran, praktik pedagogis, lingkungan, kemitraan, dan Pemanfaatan Digital (WAJIB memanfaatkan perangkat/MPI).',
          'Langkah 3 — Pengalaman Belajar: Skenario terstruktur tahap Memahami, Mengaplikasi, dan Merefleksi.',
          'Langkah 4 — Asesmen: Instrumen awal, proses, dan akhir berbasis UbD.',
        ],
        highlight: 'Telaah sejawat (Peer Assessment) memakai 14 indikator skala 1–4: Skor maks = 56, Nilai = (Skor / 56) × 100.',
      },
    ],
    moderationPlan: [
      {
        phase: 'Relate — Mengaitkan Asesmen ke RPP (Bagian 1)',
        duration: '10 Menit',
        activity: 'Menanyakan tantangan terbesar guru saat menggabungkan tujuan belajar dan perangkat digital agar tidak terkesan dipaksakan.',
        facilitatorPrompt: 'Ingatkan peserta tentang pendekatan Backward Design dari sesi sebelumnya.',
      },
      {
        phase: 'Explore — 8 Dimensi & Mini-Game "Mari Bermain" (Bagian 1)',
        duration: '60 Menit',
        activity: 'Paparan 3 Prinsip, 3 Pengalaman Belajar, Mini-Game 7 skenario aktivitas kelas, serta 4 Kerangka + TPACK/SAMR.',
        facilitatorPrompt: 'Mainkan 7 skenario "Mari Bermain" secara aktif di layar PID — minta kelompok mengangkat tanda Memahami / Mengaplikasi / Merefleksi!',
      },
      {
        phase: 'Apply — Penyusunan RPP & Peer Assessment (Bagian 1 & 2)',
        duration: '70 Menit',
        activity: 'Setiap kelompok menyusun RPP 1 pertemuan siap praktik (menggunakan MPI/Ruang Murid/Asesmen Digital) lalu saling menilai memakai LK 14 Indikator.',
        facilitatorPrompt: 'Pastikan kelompok menukar RPP dengan kelompok di sebelahnya dan mencatat minimal 2 masukan konstruktif.',
      },
      {
        phase: 'Learn Again — Persiapan Mikro-Praktik Sesi 06 (Bagian 2)',
        duration: '10 Menit',
        activity: 'Unggah RPP + LK ke s.id/Unggah-LK-APHTC dan tunjuk 1 perwakilan guru model per kelompok besar untuk Materi 06.',
        facilitatorPrompt: 'Informasikan pembagian 2 kelompok besar untuk praktik langsung pada jam 14:00.',
      },
    ],
    lkSpec: {
      title: 'LK Telaah Sejawat RPP Pembelajaran Mendalam Digital (14 Indikator)',
      description:
        'Instrumen penilaian antarkelompok mencakup 4 komponen (A. Keselarasan, B. Kerangka, C. Pengalaman Belajar, D. Asesmen) dengan skala 1–4.',
      downloadShortlink: 'https://s.id/LK-RPPDigital-APHTC',
      uploadShortlink: 'https://s.id/Unggah-LK-APHTC',
      pdfAssetId: 'materi-05-lk',
      items: [
        'A. Keselarasan Komponen (Butir 1–2): Keselarasan CP/TP/Asesmen & ketepatan dimensi profil lulusan.',
        'B. Kerangka Pembelajaran (Butir 3–6): Praktik pedagogis, lingkungan fisik/digital, kemitraan, dan pemanfaatan perangkat digital/MPI.',
        'C. Pengalaman Belajar (Butir 7–12): Kejelasan prinsip Berkesadaran-Bermakna-Menggembirakan serta tahapan Memahami, Mengaplikasi, dan Merefleksi.',
        'D. Asesmen Pembelajaran (Butir 13–14): Ketersediaan asesmen formatif/proses digital dan kejelasan kriteria ketuntasan (KKTP).',
      ],
    },
    relatedAssetIds: ['materi-05-slide', 'materi-05-moderasi', 'materi-05-lk'],
    hasInteractiveTool: true,
    interactiveToolTitle: 'Mini-Game "Mari Bermain" (7 Skenario) & Kalkulator Peer Assessment RPP (14 Indikator)',
  },
  {
    id: '06',
    code: 'Materi 06',
    title: 'Praktik Pembelajaran Mendalam Berbasis Digital',
    shortTitle: 'Praktik Mengajar PID',
    dayInfo: 'Hari 2 · 21 Nov 2026 (14:00–15:30)',
    durationLabel: '90 Menit',
    pic: 'Narasumber / Fasilitator',
    objectives: [
      'Mempraktikkan implementasi RPP Pembelajaran Mendalam secara langsung menggunakan PID, Laptop, Ruang Murid, atau MPI buatan sendiri.',
      'Melaksanakan observasi sejawat berbasis bukti nyata memakai instrumen 16 indikator (Aspek A, B, dan C).',
      'Memberikan umpan balik apresiatif dan konstruktif untuk penyempurnaan implementasi di sekolah asal.',
    ],
    facilitatorNotes: [
      'Jaga ketepatan waktu ketat: 2 kelompok besar bergantian tampil (total 40 menit efektif) agar tersisa waktu bermakna untuk observasi dan umpan balik 10 menit.',
      'Pastikan kelompok pengamat mengisi langsung LK Observasi 16 indikator pada tab Simulasi & Praktik atau lembar cetak.',
      'Soroti aspek C (Keterlibatan Murid & Pemanfaatan PID) — pastikan "murid" diberi kesempatan menyentuh/berinteraksi di layar PID, bukan hanya guru yang berdiri memegang layar.',
    ],
    coreSlides: [
      {
        heading: 'Skenario Simulasi Mengajar (Peer Teaching) 2 Kelompok Besar',
        badge: 'Praktik Nyata',
        points: [
          'Setiap kelompok besar menunjuk 1 Guru Model, sementara anggota lain berperan aktif sebagai murid SD serta tim observer.',
          'Wajib menggunakan ekosistem perangkat secara nyata: menghubungkan Laptop ke PID (HDMI + USB-B Touch), menampilkan MPI/Ruang Murid, dan melibatkan interaksi sentuh layar.',
          'Alokasi waktu praktik per kelompok ±20 menit fokus pada adegan inti Memahami -> Mengaplikasi -> Merefleksi + Asesmen cepat.',
        ],
      },
      {
        heading: '3 Aspek Instrumen Observasi Praktik (16 Indikator)',
        badge: 'Standar Mutu',
        points: [
          'Aspek A — Proses Pembelajaran (6 Indikator): Pengkondisian, orientasi tujuan bermakna, alur Memahami-Mengaplikasi-Merefleksi, kesadaran suasana belajar, interaksi komunikatif, dan asesmen/refleksi.',
          'Aspek B — Integrasi Pemanfaatan Perangkat Digital (6 Indikator): Kesiapan kabel/koneksi, kelancaran pemakaian PID/Laptop, kesesuaian MPI/Ruang Murid dengan TP, variasi media, mitigasi teknis, dan etika penggunaan alat.',
          'Aspek C — Keterlibatan Murid & Pemanfaatan PID (4 Indikator): Akses langsung murid menyentuh PID, antusiasme kolaboratif, keamanan fisik murid di sekitar perangkat, serta dampak keterlibatan aktif.',
        ],
        highlight: 'Perhitungan Nilai Observasi: Skor Maksimal = 64 (16 butir × 4). Nilai = (Total Skor / 64) × 100.',
      },
    ],
    moderationPlan: [
      {
        phase: '1. Pembukaan & Pemantik Ekosistem Digital',
        duration: '7 Menit',
        activity: 'Penyampaian tujuan praktik (2 mnt) dan pemantik peran ekosistem perangkat PID-Laptop-Ruang Murid (5 mnt).',
        facilitatorPrompt: 'Ingatkan bahwa praktik ini aman untuk bereksperimen dan belajar bersama sebelum masuk kelas sesungguhnya.',
      },
      {
        phase: '2. Petunjuk Teknis & Pembagian Peran Observer',
        duration: '8 Menit',
        activity: 'Membagi peserta ke 2 kelompok besar, membagikan tautan s.id/LK-ObservasiPraktik-APHTC, dan memastikan koneksi PID siap.',
        facilitatorPrompt: 'Beri waktu 2 menit khusus untuk mengecek sinyal sentuh USB-B Touch sebelum timer dimulai.',
      },
      {
        phase: '3. Pelaksanaan Praktik Mengajar & Observasi',
        duration: '40 Menit',
        activity: 'Praktik mengajar 2 kelompok besar secara bergiliran/paralel sambil tim pengamat menilai 16 indikator.',
        facilitatorPrompt: 'Gunakan Timer Narasumber pada bilah atas (atur 20 menit per kelompok) dan beri aba-aba saat sisa 3 menit.',
      },
      {
        phase: '4. Umpan Balik Sejawat & Unggah LK',
        duration: '15 Menit',
        activity: 'Umpan balik positif & saran perbaikan (10 mnt) serta pengunggahan skor observasi ke s.id/Unggah-LK-APHTC (5 mnt).',
        facilitatorPrompt: 'Gunakan teknik umpan balik 2 Bintang (kelebihan) + 1 Harapan (saran peningkatan).',
      },
      {
        phase: '5. Refleksi & Tindak Lanjut',
        duration: '20 Menit',
        activity: 'Refleksi pengalaman guru model dan murid simulasi sebagai pengantar menuju penyusunan RTL pada Materi 07.',
        facilitatorPrompt: 'Tanyakan: "Apa satu momen paling berkesan saat murid menyentuh langsung layar PID?"',
      },
    ],
    lkSpec: {
      title: 'LK Observasi Praktik Pembelajaran Mendalam (16 Indikator)',
      description:
        'Lembar pengamatan sejawat praktik mengajar terdiri atas Aspek A (6 butir), Aspek B (6 butir), dan Aspek C (4 butir) dengan skala 1–4.',
      downloadShortlink: 'https://s.id/LK-ObservasiPraktik-APHTC',
      uploadShortlink: 'https://s.id/Unggah-LK-APHTC',
      pdfAssetId: 'materi-06-lk',
      items: [
        'Aspek A — Proses Pembelajaran (6 Indikator · Maks 24 poin)',
        'Aspek B — Integrasi Pemanfaatan Perangkat Digital (6 Indikator · Maks 24 poin)',
        'Aspek C — Keterlibatan Murid & Pemanfaatan PID (4 Indikator · Maks 16 poin)',
        'Rumus Akhir: Nilai = (Skor Total / 64) × 100 disertai catatan kualitatif keunggulan & saran.',
      ],
    },
    relatedAssetIds: ['materi-06-slide', 'materi-06-moderasi', 'materi-06-lk'],
    hasInteractiveTool: true,
    interactiveToolTitle: 'Kalkulator Observasi Praktik Mengajar 16 Indikator (Skor /64)',
  },
  {
    id: '07',
    code: 'Materi 07 / RTL',
    title: 'Rencana Tindak Lanjut (RTL) & Strategi Pengimbasan',
    shortTitle: 'Rencana Tindak Lanjut',
    dayInfo: 'Hari 2 · 21 Nov 2026 (16:00–17:00)',
    durationLabel: '60 Menit',
    pic: 'Narasumber / Fasilitator',
    objectives: [
      'Memetakan level transformasi digital sekolah menggunakan Kartu Hasil Asesmen (skor 34–136).',
      'Memahami 4 Output Wajib pasca-APHTC, standar teknis video praktik baik 9:16, serta batas waktu 3 bulan.',
      'Menyusun LK 10 Rencana Tindak Lanjut lengkap mencakup Tabel A (Implementasi), Tabel B (Pengimbasan Internal), dan Tabel C (Pengimbasan Eksternal).',
    ],
    facilitatorNotes: [
      'Tegaskan bahwa sertifikat pelatihan terkait erat dengan pemenuhan bukti implementasi dalam batas waktu maksimal 3 bulan pasca-APHTC.',
      'Gunakan Builder LK 10 & Kalkulator Kartu Asesmen pada tab Simulasi & Praktik agar peserta dapat mencetak/menyalin draf RTL secara rapi sebelum penutupan.',
      'Ingatkan 4 tagar wajib media sosial jangan sampai salah ketik!',
    ],
    coreSlides: [
      {
        heading: '4 Output Wajib & Ketentuan Video Praktik Baik',
        badge: 'Tagihan Pasca-Kegiatan',
        points: [
          '4 Output Wajib: (1) Perencanaan Pembelajaran Digital (RPP/MPI), (2) Video Implementasi Kelas, (3) Unggahan Media Sosial Sekolah/Guru, dan (4) Laporan Pengimbasan (Internal & Eksternal).',
          'Syarat Video Implementasi: Durasi 60–90 detik, rasio vertikal 9:16 resolusi tinggi (HD), rekaman autentik interaksi kelas memakai PID/Laptop (BUKAN sekadar kolase foto).',
          'Takarir Wajib Unggahan: Cantumkan Mata Pelajaran, Kelas/Fase, Tujuan Pembelajaran, Ringkasan Kegiatan, dan Hasil Dampak Murid.',
          '4 Tagar Resmi Wajib: #DigitalisasiPembelajaranSD2026 #TeknologiBersahabatAnakSDHebat #PendidikanBermutuUntukSemua #KemendikdasmenRAMAH',
        ],
        highlight: 'Batas akhir pengumpulan seluruh bukti implementasi & pengimbasan maksimal 3 BULAN setelah selesai APHTC (syarat penerbitan sertifikat).',
      },
      {
        heading: 'Pemetaan Kartu Hasil Asesmen Sekolah (Skor 34–136)',
        badge: 'Diagnostik Sekolah',
        points: [
          'Mengukur 3 Dimensi Utama: Proses, Teknologi, dan Lingkungan melalui s.id/KartuHasilAsesmenSD.',
          'Skor 34–59 -> Level 1 Konvensional (Fokus: tata kelola dasar, partisi C/D, jadwal pakai bersama).',
          'Skor 60–85 -> Level 2 Go Digital (Fokus: integrasi rutin Ruang Murid & asesmen digital bulanan).',
          'Skor 86–111 -> Level 3 Digital (Fokus: produksi MPI mandiri & perluasan komunitas pengimbasan KKG).',
          'Skor 112–136 -> Level 4 Smart (Fokus: sekolah rujukan/model inovasi & pendampingan sekolah sekitar).',
        ],
      },
      {
        heading: 'Struktur LK 10 Format RTL (Tabel A, B, dan C)',
        badge: 'Dokumen Komitmen',
        points: [
          'Tabel A — Rencana Implementasi di Kelas/Sekolah: Menguraikan penerapan RPP Digital, MPI, dan asesmen digital pada kelas masing-masing.',
          'Tabel B — Pengimbasan Internal Sekolah: Berbagi praktik baik kepada rekan guru lain dalam komunitas belajar (Kombel) sekolah.',
          'Tabel C — Pengimbasan Eksternal: Diseminasi kepada sekolah imbas, gugus, atau forum KKG kecamatan/kota.',
        ],
      },
    ],
    moderationPlan: [
      {
        phase: '1. Pembukaan, Output Wajib & Ketentuan Video',
        duration: '15 Menit',
        activity: 'Penjelasan 4 output wajib, kriteria video vertikal 9:16 (60–90 detik), 4 tagar wajib, dan aturan batas 3 bulan.',
        facilitatorPrompt: 'Minta peserta mencatat tautan unggahan serta 4 tagar resmi agar tidak keliru.',
      },
      {
        phase: '2. Refleksi Kartu Hasil Asesmen & Analisis Kebutuhan',
        duration: '15 Menit',
        activity: 'Peserta memetakan skor sekolah (34–136) serta memprioritaskan kebutuhan pada s.id/AnalisisKebutuhan-APHTC.',
        facilitatorPrompt: 'Gunakan kalkulator skor level pada tab Simulasi & Praktik untuk melihat rekomendasi langkah prioritas tiap level.',
      },
      {
        phase: '3. Penyusunan Praktis LK 10 (Tabel A, B, C)',
        duration: '20 Menit',
        activity: 'Peserta menyusun target waktu konkret implementasi kelas, kombel internal, serta jadwal pengimbasan KKG.',
        facilitatorPrompt: 'Dorong penulisan tanggal realistis dalam kurun 1–3 bulan pasca pelatihan.',
      },
      {
        phase: '4. Pengumpulan Bukti, Komitmen & Penutup Materi',
        duration: '10 Menit',
        activity: 'Pengecekan daftar tautan resmi (RTL, Format Laporan Pengimbasan, Unggah Bukti) sebelum masuk sesi Tes Akhir.',
        facilitatorPrompt: 'Ajak seluruh peserta menyatakan komitmen implementasi nyata di kelas masing-masing.',
      },
    ],
    lkSpec: {
      title: 'LK 10 — Format Rencana Tindak Lanjut (Tabel A, B, C)',
      description:
        'Dokumen rencana aksi pasca-pelatihan meliputi Tabel A (Implementasi), Tabel B (Pengimbasan Internal), dan Tabel C (Pengimbasan Eksternal).',
      downloadShortlink: 'https://s.id/RTL-APHTC',
      uploadShortlink: 'https://s.id/Unggah-RTL-APHTC',
      pdfAssetId: 'materi-07-lk10',
      items: [
        'Identitas Peserta, Sekolah, Kabupaten/Kota, dan Level Hasil Asesmen Digital.',
        'Tabel A — Rencana Implementasi Pembelajaran Digital di Kelas (RPP, MPI, Asesmen, Video 9:16).',
        'Tabel B — Rencana Pengimbasan Internal di Komunitas Belajar Sekolah.',
        'Tabel C — Rencana Pengimbasan Eksternal di KKG / Gugus Sekolah (Laporan via s.id/LaporanPengimbasanAPHTC).',
      ],
    },
    relatedAssetIds: ['materi-07-slide', 'materi-07-moderasi', 'materi-07-lk10'],
    hasInteractiveTool: true,
    interactiveToolTitle: 'Kalkulator Level Sekolah (34–136), Builder LK 10 RTL & Checklist Video 9:16',
  },
];
