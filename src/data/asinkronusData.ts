export interface AsinkronusStep {
  number: string;
  title: string;
  detail: string;
  linkLabel?: string;
  linkUrl?: string;
}

export interface MaintenanceSchedule {
  frequency: string;
  tasks: string[];
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'Teknis & Partisi' | 'Administrasi & BAST' | 'Pengiriman & Garansi';
}

export interface VendorContact {
  vendor: string;
  device: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  hours: string;
  note: string;
}

export interface StakeholderLayer {
  layer: string;
  actor: string;
  focus: string;
  ikk: string[];
}

export interface LearningStrategy {
  id: string;
  name: string;
  subjectExample: string;
  phase: string;
  flow: string[];
  resourceUrl?: string;
  resourceLabel?: string;
}

export const PENGELOLAAN_PRINCIPLES = [
  {
    title: 'Mendukung Pembelajaran',
    desc: 'Perangkat diprioritaskan untuk pembelajaran aktif di kelas sesuai kebutuhan kurikulum, bukan sekadar pajangan atau tugas administratif.',
  },
  {
    title: 'Efisien (Bergantian & Terjadwal)',
    desc: 'Dikelola melalui sistem penggunaan bersama lintas rombel secara adil dan terjadwal agar seluruh guru dan murid memperoleh manfaat.',
  },
  {
    title: 'Aman (Fisik & Data)',
    desc: 'Menjaga keamanan kelistrikan, penempatan fisik PID, kebersihan layar, hingga pemisahan partisi data pembelajaran dan sistem operasi.',
  },
  {
    title: 'Tanggung Jawab Bersama',
    desc: 'Melibatkan Kepala Sekolah, Tim Digitalisasi, Guru, Operator, hingga Komite dalam menjaga keberlanjutan aset sekolah.',
  },
];

export const PENGELOLAAN_SIX_STEPS: AsinkronusStep[] = [
  {
    number: '01',
    title: 'Tetapkan Koordinator & SK Tim Digitalisasi',
    detail:
      'Kepala sekolah menerbitkan SK Tim Digitalisasi Sekolah yang menetapkan penanggung jawab jadwal, pemeliharaan harian, serta penghubung teknis.',
  },
  {
    number: '02',
    title: 'Inventarisasi Nomor Seri & Kondisi Awal',
    detail:
      'Catat seluruh perangkat bantuan (PID, Laptop, HDD Eksternal, hingga Starlink/Panel Surya bila ada) lengkap dengan nomor seri berbeda tiap unit.',
    linkLabel: 's.id/Dok-Invetaris',
    linkUrl: 'https://s.id/Dok-Invetaris',
  },
  {
    number: '03',
    title: 'Susun SOP Penggunaan Fasilitas Bersama',
    detail:
      'Tetapkan aturan penyalaan, pematian (shutdown benar), koneksi kabel HDMI + USB-B Touch, serta tata tertib pemakaian oleh guru dan murid.',
    linkLabel: 's.id/SOP-Digi',
    linkUrl: 'https://s.id/SOP-Digi',
  },
  {
    number: '04',
    title: 'Terbitkan Jadwal Pemakaian Lintas Kelas',
    detail:
      'Susun jadwal rotasi ruang atau peminjaman bergantian antarguru/fase sehingga perangkat dipakai merata sepanjang pekan.',
    linkLabel: 's.id/Jadwal-Digi',
    linkUrl: 'https://s.id/Jadwal-Digi',
  },
  {
    number: '05',
    title: 'Catat di Buku Peminjaman & Kondisi Akhir',
    detail:
      'Setiap guru peminjam menandatangani log pemakaian, mencatat waktu penggunaan dan kelengkapan aksesori (stylus, remot, kabel).',
  },
  {
    number: '06',
    title: 'Kembalikan dalam Kondisi Siap Pakai',
    detail:
      'Matikan PID sesuai prosedur tombol power/standby, cabut flashdisk/HDD dengan aman (Eject), rapikan stylus pada dudukannya, dan laporkan kendala seketika.',
  },
];

export const PARTITION_STEPS: AsinkronusStep[] = [
  {
    number: '01',
    title: 'Buka Disk Management di Laptop Bantuan',
    detail:
      'Secara bawaan laptop bantuan hanya memiliki satu partisi Drive C:. Klik kanan ikon Start Windows lalu pilih "Disk Management".',
  },
  {
    number: '02',
    title: 'Lakukan Shrink Volume pada Drive C:',
    detail:
      'Klik kanan Drive C: > pilih "Shrink Volume...". Masukkan kapasitas ruang yang ingin dipisahkan dalam satuan MB (contoh: 100 GB = 102400 MB) lalu klik Shrink.',
  },
  {
    number: '03',
    title: 'Buat Partisi Baru (New Simple Volume)',
    detail:
      'Klik kanan area "Unallocated" baru > pilih "New Simple Volume" > Next > tentukan ukuran > tetapkan huruf drive D:.',
  },
  {
    number: '04',
    title: 'Format NTFS & Labeli Drive D:',
    detail:
      'Pilih sistem berkas NTFS, beri nama volume (misal "DATA PEMBELAJARAN"), centang "Perform a quick format", lalu klik Finish.',
  },
];

export const RUANG_MURID_OFFLINE_STEPS: AsinkronusStep[] = [
  {
    number: '01',
    title: 'Siapkan Ruang Penyimpanan Minimum 50 GB',
    detail:
      'Hubungkan HDD/SSD Eksternal 500 GB bantuan ke laptop melalui port USB 3.0. Pastikan partisi D: (atau tujuan salin) memiliki ruang kosong minimal 50 GB untuk folder berukuran 48,1 GB.',
  },
  {
    number: '02',
    title: 'Salin Folder "Ruang Murid" (48,1 GB)',
    detail:
      'Salin folder "Ruang Murid" beserta seluruh subfolder "materi" dari HDD Eksternal ke Drive D: laptop agar akses lebih cepat dan HDD tetap awet.',
  },
  {
    number: '03',
    title: 'Jalankan Aplikasi Ruang Murid Offline',
    detail:
      'Buka folder hasil salinan dan jalankan berkas "Ruang Murid - Rumah Pendidikan.exe" tanpa memerlukan koneksi internet aktif.',
  },
  {
    number: '04',
    title: 'Tautkan Direktori "materi"',
    detail:
      'Saat aplikasi meminta lokasi konten, arahkan pemilih folder ke direktori "materi" di dalam folder Ruang Murid. Ribuan video & bacaan siap digunakan di PID.',
  },
];

export const MAINTENANCE_SCHEDULES: MaintenanceSchedule[] = [
  {
    frequency: 'Harian',
    tasks: [
      'Bersihkan layar sentuh dengan kain microfiber kering/lembut setelah jam belajar.',
      'Matikan PID melalui menu shutdown sistem terlebih dahulu sebelum memutus MCB/stopkontak.',
      'Kembalikan stylus pen dan remot kontrol ke dudukan magnetik/kotak penyimpanan.',
    ],
  },
  {
    frequency: 'Mingguan',
    tasks: [
      'Periksa kekencangan braket dinding atau roda standing bracket PID.',
      'Rapikan manajemen kabel (HDMI, USB-B Touch, Power) agar tidak tertarik atau terinjak murid.',
      'Bersihkan debu ventilasi belakang perangkat dan periksa ruang penyimpanan kosong.',
    ],
  },
  {
    frequency: 'Bulanan',
    tasks: [
      'Audit kesesuaian buku peminjaman dengan kondisi fisik aksesori.',
      'Pencadangan berkala file RPP, MPI buatan guru, dan dokumentasi pembelajaran ke Drive D:/HDD.',
      'Tinjau ulang jadwal rotasi antarkelas bersama kepala sekolah.',
    ],
  },
  {
    frequency: 'Insidental & Larangan Keras',
    tasks: [
      'DILARANG menyentuh/menekan layar menggunakan benda tajam, bolpoin biasa, atau penggaris keras.',
      'DILARANG menyemprotkan cairan pembersih/alkohol langsung ke permukaan layar PID.',
      'DILARANG membongkar bodi perangkat sendiri; hindari ruangan lembap/terkena sinar matahari langsung.',
    ],
  },
];

export const FAQ_SSD_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: 'Pengiriman & Garansi',
    question: 'Apakah kardus pengiriman PID boleh langsung dibuka pihak sekolah saat paket tiba?',
    answer:
      'TIDAK BOLEH. Kardus perangkat PID hanya boleh dibuka bersama teknisi resmi saat proses instalasi/uji fungsi agar klaim kerusakan pengiriman tetap terlindungi.',
  },
  {
    id: 2,
    category: 'Pengiriman & Garansi',
    question: 'Berapa masa garansi perangkat PID dan berapa nilai aset per unitnya?',
    answer:
      'Garansi resmi PID berlaku selama 3 tahun on-site (teknisi datang ke lokasi). Nilai aset tercatat sebesar Rp26.640.000 per unit sesuai Perdirjen 4970/C/HK.03.01/2025.',
  },
  {
    id: 3,
    category: 'Administrasi & BAST',
    question: 'Apakah dokumen BAST dan BAPP harus diunggah kembali ke portal pusat?',
    answer:
      'Tidak perlu diunggah jika tidak diminta secara khusus; dokumen BAST dan BAPP asli wajib disimpan rapi sebagai arsip aset sekolah untuk audit BMD/BOS.',
  },
  {
    id: 4,
    category: 'Administrasi & BAST',
    question: 'Bagaimana jika sekolah merupakan SD pengganti dan menerima 2 unit perangkat?',
    answer:
      'Catat kedua unit tersebut secara terpisah dalam buku inventarisasi karena masing-masing memiliki nomor seri (Serial Number) berbeda untuk keperluan garansi.',
  },
  {
    id: 5,
    category: 'Pengiriman & Garansi',
    question: 'Bagaimana memantau status pengiriman dan apakah ada biaya untuk teknisi/ekspedisi?',
    answer:
      'Pantau pengiriman melalui tautan resmi s.id/IFPSD25-Pemantauan-Pengiriman. Sekolah DILARANG memberikan upah/uang tips apa pun kepada ekspedisi maupun teknisi resmi.',
  },
  {
    id: 6,
    category: 'Teknis & Partisi',
    question: 'Mengapa laptop hanya menampilkan Drive C: dan bagaimana agar Ruang Murid Offline lancar?',
    answer:
      'Secara bawaan partisi belum dipisah. Lakukan Shrink Volume di Disk Management (contoh 100 GB = 102400 MB) untuk membuat Drive D: NTFS, lalu salin folder Ruang Murid (48,1 GB) ke D: dan pilih folder "materi" saat menjalankan .exe.',
  },
  {
    id: 7,
    category: 'Teknis & Partisi',
    question: 'Mengapa saat Laptop disambungkan ke PID lewat HDMI layar muncul, tapi tidak bisa disentuh dari PID?',
    answer:
      'Kabel HDMI hanya membawa sinyal gambar dan suara. Anda WAJIB menyambungkan kabel kedua yaitu USB-B Touch (dari port Touch PID ke USB Laptop) agar fitur layar sentuh PID dapat mengontrol laptop secara penuh.',
  },
];

export const VENDOR_CONTACTS: VendorContact[] = [
  {
    vendor: 'Hisense Indonesia',
    device: 'Papan Interaktif Digital (PID 75")',
    phone: '0800 1000 898 (Bebas Pulsa)',
    whatsapp: '0813 8700 0898',
    email: 'serviceid.cs@hisense.com',
    hours: 'Sen–Jum 09:00–17:00 WIB | Sab–Min 09:00–14:00 WIB',
    note: 'Layanan garansi on-site 3 tahun. Sertakan foto SN & gejala kendala.',
  },
  {
    vendor: 'DAC (Digital Aid Center)',
    device: 'Laptop & Media Penyimpanan Eksternal',
    phone: '0811-111-225-49',
    hours: 'Jam Kerja Layanan Resmi',
    note: 'Untuk kendala perangkat keras laptop & HDD paket DAC.',
  },
  {
    vendor: 'Zyrex Service Center',
    device: 'Laptop & Media Penyimpanan Eksternal',
    phone: '0858-1077-4457',
    hours: 'Jam Kerja Layanan Resmi',
    note: 'Untuk kendala perangkat keras laptop & HDD paket Zyrex.',
  },
  {
    vendor: 'Layanan Internet Starlink Bantuan',
    device: 'Konektivitas Satelit (Kategori 2 & 3)',
    phone: '0811-1288-721',
    hours: 'Dukungan Teknis Terjadwal',
    note: 'Khusus satuan pendidikan penerima paket Kategori 2 & 3 (3T/blankspot).',
  },
];

export const POLICY_REGULATIONS = [
  'Inpres Nomor 7 Tahun 2025 — Percepatan Digitalisasi Pembelajaran Nasional',
  'UU Nomor 20 Tahun 2003 — Sistem Pendidikan Nasional',
  'Perpres Nomor 82 Tahun 2023 — Percepatan Transformasi Digital & Keterpaduan Layanan Digital',
  'Permendikdasmen Nomor 13 Tahun 2025 — Kurikulum & Implementasi Pembelajaran Mendalam',
  'Permendikdasmen Nomor 06 Tahun 2026 — Tata Kelola & Budaya Kerja Pendidikan Bermutu',
  'Perdirjen PAUD Dikdasmen Nomor 4970/C/HK.03.01/2025 — Pedoman Pengelolaan Perangkat Digital',
];

export const STAKEHOLDER_LAYERS: StakeholderLayer[] = [
  {
    layer: 'Lapisan 1',
    actor: 'BBPMP / BPMP (UPT Kemendikdasmen)',
    focus: 'Advokasi daerah, pendampingan teknis, serta pemantauan implementasi sekolah penerima.',
    ikk: ['≥ 80% sekolah penerima terverifikasi aktif menggunakan perangkat', 'Monev terpadu terlaksana minimal 2x per semester'],
  },
  {
    layer: 'Lapisan 2',
    actor: 'Pemerintah Daerah & Dinas Pendidikan',
    focus: 'Dukungan regulasi daerah, penyediaan jaringan internet sekolah, serta sinkronisasi RKPD/APBD.',
    ikk: ['≥ 75% sekolah memiliki akses internet layak pakai', 'Alokasi dukungan APBD/RKPD untuk pemeliharaan & internet'],
  },
  {
    layer: 'Lapisan 3',
    actor: 'Pengawas Sekolah & Penilik',
    focus: 'Supervisi akademik integrasi teknologi dan pendampingan budaya kerja digital.',
    ikk: ['Supervisi perangkat & pembelajaran terlaksana 1x setiap bulan', '100% sekolah binaan memiliki SK Tim & SOP pemakaian bersama'],
  },
  {
    layer: 'Lapisan 4',
    actor: 'Kepala Sekolah',
    focus: 'Perencanaan RKS/RKAS berkelanjutan, pengembangan SDM guru di Ruang GTK, dan tata kelola jadwal.',
    ikk: [
      '100% guru mengikuti pelatihan pemanfaatan di Ruang GTK',
      '≥ 90% tingkat ketersediaan alat siap pakai & ≥ 75% kepuasan guru',
    ],
  },
  {
    layer: 'Lapisan 5',
    actor: 'Guru Sekolah Dasar',
    focus: 'Merancang pembelajaran berbasis TPACK & Pembelajaran Mendalam dengan memanfaatkan PID & MPI.',
    ikk: [
      '≥ 80% RPP mengintegrasikan perangkat/sumber digital',
      '100% murid memiliki portofolio digital & asesmen digital ≥ 1x/bulan/mapel',
    ],
  },
  {
    layer: 'Lapisan 6',
    actor: 'Komite Sekolah & Orang Tua',
    focus: 'Penguatan literasi digital keluarga, aturan waktu layar (screen time) rumah, serta dukungan komunitas.',
    ikk: [
      '≥ 60% orang tua mengikuti forum literasi digital',
      '≥ 85% kesepakatan screen time rumah & laporan perkembangan 2x/tahun',
    ],
  },
];

export const SEVEN_ECOSYSTEM_PILLARS = [
  'Infrastruktur & Konektivitas',
  'Sumber Daya Manusia (SDM)',
  'Konten & Kurikulum Digital',
  'Desain Pedagogis Mendalam',
  'Tata Kelola & Regulasi',
  'Keamanan, Etika & Perlindungan Anak',
  'Kemitraan Multi-Pihak (MSG)',
];

export const DEEP_LEARNING_PRINCIPLES = [
  {
    name: 'Berkesadaran',
    summary:
      'Murid hadir secara utuh, fokus, dan sadar akan tujuan belajarnya serta mampu meregulasi diri selama berinteraksi dengan perangkat digital.',
  },
  {
    name: 'Bermakna',
    summary:
      'Pengetahuan baru terhubung dengan pengalaman nyata kehidupan sehari-hari murid sehingga memicu pemahaman mendalam, bukan sekadar menghafal.',
  },
  {
    name: 'Menggembirakan',
    summary:
      'Suasana belajar positif, interaktif, dan menantang melalui visualisasi PID, gamifikasi edukatif, serta kolaborasi kelompok yang aman.',
  },
];

export const LEARNING_STRATEGIES: LearningStrategy[] = [
  {
    id: 'station-rotation',
    name: 'Station Rotation (Rotasi Stasiun)',
    subjectExample: 'IPAS — Sistem Pencernaan Manusia',
    phase: 'Fase C (Kelas V SD)',
    flow: [
      'Stasiun 1 (15 mnt — PID Kelompok): Eksplorasi model interaktif organ pencernaan & Ruang Murid Offline pada layar sentuh PID.',
      'Stasiun 2 (15 mnt — Diskusi Terbimbing Guru): Tanya jawab fungsi enzim & jalur pencernaan dengan kartu konsep.',
      'Stasiun 3 (15 mnt — Praktik Mandiri/LK): Menyusun diagram urutan organ dan refleksi kebiasaan makan sehat.',
    ],
  },
  {
    id: 'lab-rotation',
    name: 'Lab Rotation (Rotasi Ruang / Pusat Digital)',
    subjectExample: 'Matematika — Sifat Bangun Datar',
    phase: 'Fase B/C SD',
    flow: [
      'Pembuka kelas: Guru memodelkan ciri simetri dan sudut bangun datar di ruang kelas.',
      'Sesi Pusat Digital / PID: Kelompok bergantian mengklasifikasikan bangun datar melalui aktivitas interaktif Wordwall.',
      'Penutup: Murid menyimpulkan perbedaan persegi, persegi panjang, dan belah ketupat.',
    ],
    resourceUrl: 'https://wordwall.net/resource/96337844',
    resourceLabel: 'Contoh Aktivitas Wordwall Bangun Datar',
  },
  {
    id: 'flipped-classroom',
    name: 'Flipped Classroom (Kelas Terbalik)',
    subjectExample: 'Pendidikan Pancasila — Hak dan Kewajiban',
    phase: 'Fase B/C SD',
    flow: [
      'Pra-Tatap Muka (Rumah/Asinkronus): Murid menyimak video pendek contoh hak dan kewajiban di lingkungan keluarga bersama orang tua.',
      'Tatap Muka di Kelas: Waktu kelas penuh digunakan untuk studi kasus peran, debat mini, dan kuis interaktif Wayground di PID.',
    ],
    resourceUrl: 'https://wayground.com/join/quiz/6a09187e2c33d99c1fe89081/start?studentShare=true',
    resourceLabel: 'Contoh Kuis Wayground Flipped Classroom',
  },
];

export const DIGITAL_ETHICS_RULES = {
  threeDeviceFreeZones: ['Kamar Tidur', 'Ruang Makan', 'Kamar Mandi'],
  caseStudySummary:
    'Studi Kasus 1 — Proyek Digital IPAS Kelas 5 (Perubahan Lingkungan): Murid memindai Video via kode QR sebagai pemantik -> observasi lingkungan sekolah memakai Kamera/Google Form/Voice Recorder -> menyusun laporan kolaboratif di Canva/Slides -> refleksi langsung menggunakan Mentimeter/Padlet pada layar PID.',
};

export const ASINKRONUS_CHECKLIST_ITEMS = [
  {
    id: 'read-buku-1',
    title: 'Mempelajari Buku Panduan Pengelolaan Perangkat Digital (Buku 1)',
    hint: 'Pahami 6 langkah penggunaan bersama, prosedur perawatan harian–bulanan, serta aturan larangan keras pada layar PID.',
  },
  {
    id: 'read-buku-2',
    title: 'Memahami Buku Saku Pemangku Kebijakan & IKK Guru (Buku 2)',
    hint: 'Cermati target IKK Guru (≥80% RPP integrasi digital, asesmen digital ≥1x/bulan/mapel) dalam kerangka MSG & TPACK.',
  },
  {
    id: 'read-buku-3',
    title: 'Mempelajari Panduan Pemanfaatan Perangkat Digital Jenjang SD (Buku 3)',
    hint: 'Kenali strategi Station Rotation, Lab Rotation, Flipped Classroom, serta 3 prinsip Pembelajaran Mendalam.',
  },
  {
    id: 'prep-partition',
    title: 'Memastikan Laptop Memiliki Partisi Data Drive D:',
    hint: 'Jika laptop baru hanya memiliki Drive C:, siapkan ruang kosong ≥100 GB melalui Disk Management untuk Drive D: NTFS.',
  },
  {
    id: 'prep-ruang-murid',
    title: 'Menyalin & Menguji Folder Ruang Murid Offline (48,1 GB)',
    hint: 'Salin dari HDD Eksternal ke Drive D:, jalankan Ruang Murid - Rumah Pendidikan.exe, dan arahkan ke folder "materi".',
  },
  {
    id: 'prep-ready-sync',
    title: 'Siap Mengikuti Pleno Sinkronus 20–21 November 2026',
    hint: 'Membawa catatan pertanyaan teknis atau ide topik mapel SD yang akan dikembangkan menjadi MPI dan RPP Digital saat Hari H.',
  },
];
