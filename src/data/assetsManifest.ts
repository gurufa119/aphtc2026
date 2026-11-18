export type AssetCategory =
  | 'Skenario'
  | 'Asinkronus'
  | 'Materi Utama'
  | 'Rencana Moderasi'
  | 'Lembar Kerja'
  | 'Templat & Prompt'
  | 'Referensi Folder';

export interface AssetDocument {
  id: string;
  title: string;
  originalName: string;
  path: string;
  fileType: 'pdf' | 'png';
  category: AssetCategory;
  moduleRef: string;
  description: string;
}

export interface ShortlinkItem {
  code: string;
  url: string;
  moduleRef: string;
  purpose: string;
}

export const ASSET_DOCUMENTS: AssetDocument[] = [
  {
    id: 'skenario-aphtc-2026',
    title: '[APHTC] Skenario APHTC UPT 2026',
    originalName: '[APHTC] Skenario APHTC UPT 2026.pdf',
    path: './assets/aistudio/_APHTC__Skenario_APHTC_UPT_2026_16399885.pdf',
    fileType: 'pdf',
    category: 'Skenario',
    moduleRef: 'Jadwal & Skenario',
    description:
      'Dokumen induk skenario pelaksanaan APHTC Tahun 2026: Pra-Hari H Asinkronus, Pleno Hari Pertama (20 November 2026), dan Pleno Hari Kedua (21 November 2026).',
  },
  {
    id: 'buku-pengelolaan-perangkat',
    title: '[APHTC] Buku Panduan Pengelolaan Perangkat Digital Direktorat SD',
    originalName: '[APHTC] Buku Panduan Pengelolaan Perangkat Digital Direktorat SD.pdf',
    path: './assets/aistudio/_APHTC__Buku_Panduan_Pengelolaan_Perangkat_Digital_Direktorat_SD_86466a35.pdf',
    fileType: 'pdf',
    category: 'Asinkronus',
    moduleRef: 'Asinkronus — Buku 1',
    description:
      'Panduan lengkap tata kelola penggunaan bersama, partisi disk C/D laptop bantuan, instalasi Ruang Murid Offline 48,1 GB, pemeliharaan PID, FAQ/SSD, serta kontak vendor resmi.',
  },
  {
    id: 'buku-saku-kebijakan',
    title: '[APHTC] Buku Saku Panduan Pemangku Kebijakan',
    originalName: '[APHTC] Buku Saku Panduan Pemangku Kebijakan.pdf',
    path: './assets/aistudio/_APHTC__Buku_Saku_Panduan_Pemangku_Kebijakan_65963e45.pdf',
    fileType: 'pdf',
    category: 'Asinkronus',
    moduleRef: 'Asinkronus — Buku 2',
    description:
      'Kerangka Multi-Stakeholder Governance (MSG) dan TPACK pada 6 lapisan pemangku kebijakan beserta Indikator Kinerja Kunci (IKK) dan 7 pilar ekosistem digital.',
  },
  {
    id: 'buku-pemanfaatan-sd',
    title: '[APHTC] Panduan Pemanfaatan Perangkat Digital dalam Pembelajaran untuk Jenjang SD',
    originalName: '[APHTC] Panduan Pemanfaatan Perangkat Digital dalam Pembelajaran untuk Jenjang SD.pdf',
    path: './assets/aistudio/_APHTC__Panduan_Pemanfaatan_Perangkat_Digital_dalam_Pembelajaran_untuk_Jenjang_SD_5c560f90.pdf',
    fileType: 'pdf',
    category: 'Asinkronus',
    moduleRef: 'Asinkronus — Buku 3',
    description:
      'Strategi Station Rotation, Lab Rotation, Flipped Classroom, prinsip Pembelajaran Mendalam (Berkesadaran, Bermakna, Menggembirakan), etika ruang bebas gawai, dan studi kasus SD.',
  },
  {
    id: 'materi-01a',
    title: 'Materi 01A APHTC — Sosialisasi Program Revitalisasi Satuan Pendidikan',
    originalName: 'Materi 01A APHTC - Sosialisasi Program Revitalisasi Satuan Pendidikan.pdf',
    path: './assets/aistudio/Materi_01A_APHTC_-_Sosialisasi_Program_Revitalisasi_Satuan_Pendidikan_981f0aa1.pdf',
    fileType: 'pdf',
    category: 'Materi Utama',
    moduleRef: 'Materi 01A',
    description:
      'Arahan Presiden target revitalisasi 2025–2028, kondisi sarpras SD berbasis Dapodik, tata cara usulan di revit.kemendikdasmen.go.id, dokumentasi 6 sudut, serta 5 tahapan P2SP.',
  },
  {
    id: 'materi-01b',
    title: 'Materi 1B APHTC — Kebijakan dan Arah Transformasi Digital Pembelajaran SD 2026',
    originalName:
      'Materi 1B APHTC - Kebijakan dan Arah Transformasi Digital Pembelajaran Jenjang Sekolah Dasar Tahun 2026.pdf',
    path: './assets/aistudio/Materi_1B_APHTC_-_Kebijakan_dan_Arah_Transformasi_Digital_Pembelajaran_Jenjang_Sekolah_Dasar_Tahun_2026_036607df.pdf',
    fileType: 'pdf',
    category: 'Materi Utama',
    moduleRef: 'Materi 01B',
    description:
      '4 Level Transformasi Sekolah (Konvensional hingga Smart), 3 Pilar (Technology, Environment, Process), pola pikir berbasis 7 aset, dan 4 kerangka literasi digital.',
  },
  {
    id: 'materi-02-slide',
    title: 'Materi 02 APHTC — Eksplorasi Penggunaan PID, Laptop, dan Media Penyimpanan Eksternal',
    originalName:
      'Materi 02 APHTC - Eksplorasi Penggunaan Papan Interaktif Digital (PID), Laptop, dan Media Penyimpanan Eksternal dalam Pembelajar.pdf',
    path: './assets/aistudio/Materi_02_APHTC_-_Eksplorasi_Penggunaan_Papan_Interaktif_Digital__PID___Laptop__dan_Media_Penyimpanan_Eksternal_dalam_Pembelajar_0c2d5262.pdf',
    fileType: 'pdf',
    category: 'Materi Utama',
    moduleRef: 'Materi 02',
    description:
      'Spesifikasi paket bantuan Kategori 1–3, port panel depan & belakang PID, koneksi HDMI + USB-B Touch agar sentuhan PID mengontrol laptop, serta pintasan 5 jari & interaksi layar.',
  },
  {
    id: 'materi-02-moderasi',
    title: '[Materi 02 APHTC] Rencana Moderasi',
    originalName: '[Materi 02 APHTC] Rencana Moderasi.pdf',
    path: './assets/aistudio/_Materi_02_APHTC__Rencana_Moderasi_a1d99849.pdf',
    fileType: 'pdf',
    category: 'Rencana Moderasi',
    moduleRef: 'Materi 02',
    description:
      'Panduan fasilitator durasi 150 menit: kuis Wayground awal, demo partisi & integrasi PID-Laptop, eksplorasi SAMR kelompok (75 menit), troubleshooting, dan refleksi.',
  },
  {
    id: 'materi-02-lk',
    title: '[Materi 02 APHTC] Lembar Kerja Eksplorasi PID',
    originalName: '[Materi 02 APHTC] Lembar Kerja.pdf',
    path: './assets/aistudio/_Materi_02_APHTC__Lembar_Kerja_a58c0a16.pdf',
    fileType: 'pdf',
    category: 'Lembar Kerja',
    moduleRef: 'Materi 02',
    description:
      'Lembar Kerja 19 butir ceklis eksplorasi PID berbasis kerangka SAMR (Substitution, Augmentation, Modification, Redefinition) pada topik metamorfosis.',
  },
  {
    id: 'materi-03-slide',
    title: 'Materi 03 APHTC — Pengembangan dan Pemanfaatan Media Pembelajaran Interaktif (MPI)',
    originalName: 'Materi 03 APHTC - Pengembangan dan Pemanfaatan Media Pembelajaran Interaktif (MPI).pdf',
    path: './assets/aistudio/Materi_03_APHTC_-_Pengembangan_dan_Pemanfaatan_Media_Pembelajaran_Interaktif__MPI__a5a4b35e.pdf',
    fileType: 'pdf',
    category: 'Materi Utama',
    moduleRef: 'Materi 03',
    description:
      'Alur R-E-A-L, kurasi Ruang Murid (6.400+ materi), 12 platform pembelajaran, analisis kesenjangan bahan ajar, prinsip kerja MPI, 12 bentuk interaksi, dan praktik pembuatan MPI.',
  },
  {
    id: 'materi-03-moderasi',
    title: '[Materi 03 APHTC] Rencana Moderasi',
    originalName: '[Materi 03 APHTC] Rencana Moderasi.pdf',
    path: './assets/aistudio/_Materi_03_APHTC__Rencana_Moderasi_c9795a3a.pdf',
    fileType: 'pdf',
    category: 'Rencana Moderasi',
    moduleRef: 'Materi 03',
    description:
      'Rencana moderasi 150 menit (Hari 1 Bagian 1: 75 menit + Hari 2 Bagian 2: 75 menit) dengan fase Relate, Explore, Apply, dan Learn Again.',
  },
  {
    id: 'materi-03-lk',
    title: '[Materi 03 APHTC] Lembar Kerja Pembuatan MPI',
    originalName: '[Materi 03 APHTC] Lembar Kerja.pdf',
    path: './assets/aistudio/_Materi_03_APHTC__Lembar_Kerja_ecf04171.pdf',
    fileType: 'pdf',
    category: 'Lembar Kerja',
    moduleRef: 'Materi 03',
    description:
      'LK rancangan MPI kelompok: analisis CP/TP, pemetaan kesenjangan bahan ajar Ruang Murid, pemilihan 12 jenis interaksi, rancangan alur layar, dan tautan unggah produk.',
  },
  {
    id: 'materi-03-prompt',
    title: '[UNDUH_SALIN] CONTOH PROMPT MPI',
    originalName: '[UNDUH_SALIN] CONTOH PROMPT MPI.pdf',
    path: './assets/aistudio/_UNDUH_SALIN__CONTOH_PROMPT_MPI_65b92b5b.pdf',
    fileType: 'pdf',
    category: 'Templat & Prompt',
    moduleRef: 'Materi 03',
    description:
      'Templat Master Prompt terstruktur untuk menyusun Media Pembelajaran Interaktif HTML/React siap pakai pada perangkat bantu pemrograman web pembelajaran.',
  },
  {
    id: 'materi-04-slide',
    title: 'Materi 04 APHTC — Inspirasi Asesmen Berbasis Digital',
    originalName: 'Materi 04 APHTC - Inspirasi Asesmen Berbasis Digital.pdf',
    path: './assets/aistudio/Materi_04_APHTC_-_Inspirasi_Asesmen_Berbasis_Digital_6acdaee3.pdf',
    fileType: 'pdf',
    category: 'Materi Utama',
    moduleRef: 'Materi 04',
    description:
      'Forward vs Backward Design (UbD), Permendikbud 21/2022, 3 fungsi asesmen (AaL, AfL, AoL), 9 teknik, 4 KKTP & tabel interval nilai, 3 praktik baik SD, serta 4 kuis Benar/Salah.',
  },
  {
    id: 'materi-04-moderasi',
    title: '[Materi 04 APHTC] Rencana Moderasi',
    originalName: '[Materi 04 APHTC] Rencana Moderasi.pdf',
    path: './assets/aistudio/_Materi_04_APHTC__Rencana_Moderasi_8527d31d.pdf',
    fileType: 'pdf',
    category: 'Rencana Moderasi',
    moduleRef: 'Materi 04',
    description:
      'Panduan narasumber 90 menit (Relate 15m, Explore 30m, Apply 35m, Learn Again 10m) termasuk skenario refleksi praktik asesmen SD.',
  },
  {
    id: 'materi-05-slide',
    title: 'Materi 05 APHTC — Perencanaan Pembelajaran Mendalam Berbasis Digital',
    originalName: 'Materi 05 APHTC - Perencanaan Pembelajaran Mendalam Berbasis Digital.pdf',
    path: './assets/aistudio/Materi_05_APHTC_-_Perencanaan_Pembelajaran_Mendalam_Berbasis_Digital_48adfd0e.pdf',
    fileType: 'pdf',
    category: 'Materi Utama',
    moduleRef: 'Materi 05',
    description:
      '8 Dimensi Profil Lulusan, 3 Prinsip & 3 Pengalaman Belajar (Memahami-Mengaplikasi-Merefleksi), Mini-Game 7 skenario, 4 Kerangka Pembelajaran, integrasi TPACK & SAMR, dan 4 langkah RPP.',
  },
  {
    id: 'materi-05-moderasi',
    title: '[Materi 05 APHTC] Rencana Moderasi',
    originalName: '[Materi 05 APHTC] Rencana Moderasi.pdf',
    path: './assets/aistudio/_Materi_05_APHTC__Rencana_Moderasi_7639f5dc.pdf',
    fileType: 'pdf',
    category: 'Rencana Moderasi',
    moduleRef: 'Materi 05',
    description:
      'Rencana moderasi 150 menit (Hari 2 Bagian 1: 90m + Bagian 2: 60m) mencakup penyusunan RPP Digital kelompok dan Peer Assessment antar kelompok.',
  },
  {
    id: 'materi-05-lk',
    title: '[Materi 05 APHTC] Lembar Kerja RPP & Peer Assessment',
    originalName: '[Materi 05 APHTC] Lembar Kerja.pdf',
    path: './assets/aistudio/_Materi_05_APHTC__Lembar_Kerja_a5eaa84a.pdf',
    fileType: 'pdf',
    category: 'Lembar Kerja',
    moduleRef: 'Materi 05',
    description:
      'Instrumen telaah sejawat (Peer Assessment) RPP Digital berisi 14 indikator skala 1–4 dengan skor maksimal 56 dan konversi nilai 0–100.',
  },
  {
    id: 'materi-06-slide',
    title: 'Materi 06 APHTC — Praktik Pembelajaran Mendalam Berbasis Digital',
    originalName: 'Materi 06 APHTC - Praktik Pembelajaran Mendalam Berbasis Digital.pdf',
    path: './assets/aistudio/Materi_06_APHTC_-_Praktik_Pembelajaran_Mendalam_Berbasis_Digital_29a2a70f.pdf',
    fileType: 'pdf',
    category: 'Materi Utama',
    moduleRef: 'Materi 06',
    description:
      'Skenario praktik simulasi mengajar (microteaching/peer teaching) memanfaatkan PID, Laptop, Ruang Murid Offline, MPI, serta asesmen digital secara langsung di kelas.',
  },
  {
    id: 'materi-06-moderasi',
    title: '[Materi 06 APHTC] Rencana Moderasi',
    originalName: '[Materi 06 APHTC] Rencana Moderasi.pdf',
    path: './assets/aistudio/_Materi_06_APHTC__Rencana_Moderasi_9f6a2a20.pdf',
    fileType: 'pdf',
    category: 'Rencana Moderasi',
    moduleRef: 'Materi 06',
    description:
      'Panduan fasilitasi 90 menit: rotasi praktik mengajar 2 kelompok besar (40 menit), observasi sejawat, umpan balik konstruktif (10 menit), unggah LK, dan refleksi.',
  },
  {
    id: 'materi-06-lk',
    title: '[Materi 06 APHTC] Lembar Kerja Observasi Praktik Mengajar',
    originalName: '[Materi 06 APHTC] Lembar Kerja.pdf',
    path: './assets/aistudio/_Materi_06_APHTC__Lembar_Kerja_36c989a6.pdf',
    fileType: 'pdf',
    category: 'Lembar Kerja',
    moduleRef: 'Materi 06',
    description:
      'Lembar observasi praktik 16 indikator (Aspek A Proses 6 butir, B Integrasi Perangkat 6 butir, C Keterlibatan Murid & PID 4 butir), skor maksimal 64.',
  },
  {
    id: 'materi-07-slide',
    title: 'RTL APHTC — Rencana Tindak Lanjut & Pengimbasan',
    originalName: 'RTL APHTC - Rencana Tindak Lanjut.pdf',
    path: './assets/aistudio/RTL_APHTC_-_Rencana_Tindak_Lanjut_ed51de3f.pdf',
    fileType: 'pdf',
    category: 'Materi Utama',
    moduleRef: 'Materi 07 / RTL',
    description:
      '4 Output wajib pasca-APHTC, ketentuan video vertikal 9:16 (60–90 detik) + 4 tagar resmi, pemetaan skor level sekolah (34–136), dan batas pengumpulan bukti maksimal 3 bulan.',
  },
  {
    id: 'materi-07-moderasi',
    title: '[RTL APHTC] Rencana Moderasi',
    originalName: '[RTL APHTC] Rencana Moderasi.pdf',
    path: './assets/aistudio/_RTL_APHTC__Rencana_Moderasi_8f10dfdc.pdf',
    fileType: 'pdf',
    category: 'Rencana Moderasi',
    moduleRef: 'Materi 07 / RTL',
    description:
      'Panduan fasilitasi 60 menit: pemetaan Kartu Hasil Asesmen sekolah, analisis prioritas kebutuhan, penyusunan LK 10 RTL, dan komitmen pengimbasan.',
  },
  {
    id: 'materi-07-lk10',
    title: '[UNDUH_SALIN] LK 10 — Format Rencana Tindak Lanjut (RTL)',
    originalName: '[UNDUH_SALIN] LK 10 - Format RTL.pdf',
    path: './assets/aistudio/_UNDUH_SALIN__LK_10_-_Format_RTL_58f660bf.pdf',
    fileType: 'pdf',
    category: 'Lembar Kerja',
    moduleRef: 'Materi 07 / RTL',
    description:
      'Templat LK 10 memuat identitas sekolah serta Tabel A (Implementasi Kelas), Tabel B (Pengimbasan Internal Sekolah), dan Tabel C (Pengimbasan Eksternal/KKG).',
  },
  {
    id: 'ref-folder-asinkronus',
    title: 'Tangkapan Layar Struktur Folder ASINKRONUS',
    originalName: 'Struktur Folder ASINKRONUS.png',
    path: './assets/aistudio/image_507758df.png',
    fileType: 'png',
    category: 'Referensi Folder',
    moduleRef: 'Asinkronus',
    description:
      'Dokumentasi struktur folder asli ASINKRONUS (3 buku saku panduan pra-Hari H).',
  },
  {
    id: 'ref-folder-sinkronus',
    title: 'Tangkapan Layar Struktur Folder SINKRONUS (01A–07)',
    originalName: 'Struktur Folder SINKRONUS.png',
    path: './assets/aistudio/image_63e16ff3.png',
    fileType: 'png',
    category: 'Referensi Folder',
    moduleRef: 'Materi Sinkronus',
    description:
      'Dokumentasi struktur direktori asli SINKRONUS dari folder 01A hingga 07.',
  },
];

export const OFFICIAL_SHORTLINKS: ShortlinkItem[] = [
  {
    code: 's.id/Dok-Invetaris',
    url: 'https://s.id/Dok-Invetaris',
    moduleRef: 'Asinkronus — Buku 1',
    purpose: 'Templat dokumen inventarisasi perangkat digital sekolah',
  },
  {
    code: 's.id/SOP-Digi',
    url: 'https://s.id/SOP-Digi',
    moduleRef: 'Asinkronus — Buku 1',
    purpose: 'Contoh SOP pemakaian fasilitas perangkat digital bersama',
  },
  {
    code: 's.id/Jadwal-Digi',
    url: 'https://s.id/Jadwal-Digi',
    moduleRef: 'Asinkronus — Buku 1',
    purpose: 'Templat jadwal rotasi penggunaan PID & Laptop antarkelas',
  },
  {
    code: 's.id/IFPSD25-Pemantauan-Pengiriman',
    url: 'https://s.id/IFPSD25-Pemantauan-Pengiriman',
    moduleRef: 'Asinkronus — Buku 1',
    purpose: 'Dasbor pemantauan pengiriman perangkat bantuan IFP SD',
  },
  {
    code: 's.id/PengelolaanPerangkatDigital',
    url: 'https://s.id/PengelolaanPerangkatDigital',
    moduleRef: 'Materi 02',
    purpose: 'Akses ringkas buku saku pengelolaan perangkat & troubleshooting',
  },
  {
    code: 's.id/LK-EksplorasiPID-APHTC',
    url: 'https://s.id/LK-EksplorasiPID-APHTC',
    moduleRef: 'Materi 02',
    purpose: 'Unduh Lembar Kerja Eksplorasi PID berbasis SAMR',
  },
  {
    code: 's.id/Unggah-LK-APHTC',
    url: 'https://s.id/Unggah-LK-APHTC',
    moduleRef: 'Materi 02, 05, 06',
    purpose: 'Tautan unggah Lembar Kerja kelompok peserta APHTC',
  },
  {
    code: 's.id/websitebahanajar',
    url: 'https://s.id/websitebahanajar',
    moduleRef: 'Materi 03',
    purpose: 'Kumpulan tautan 12 platform penyedia bahan ajar & gim edukasi',
  },
  {
    code: 's.id/MasterPrompt-MPI',
    url: 'https://s.id/MasterPrompt-MPI',
    moduleRef: 'Materi 03',
    purpose: 'Salin Master Prompt pembuatan Media Pembelajaran Interaktif',
  },
  {
    code: 's.id/MPI-Metamorfosis',
    url: 'https://s.id/MPI-Metamorfosis',
    moduleRef: 'Materi 03',
    purpose: 'Contoh jadi Media Pembelajaran Interaktif (Metamorfosis)',
  },
  {
    code: 's.id/LK-PembuatanMPI-APHTC',
    url: 'https://s.id/LK-PembuatanMPI-APHTC',
    moduleRef: 'Materi 03',
    purpose: 'Lembar Kerja perancangan MPI kelompok',
  },
  {
    code: 's.id/Unggah-MPI-APHTC',
    url: 'https://s.id/Unggah-MPI-APHTC',
    moduleRef: 'Materi 03',
    purpose: 'Tautan unggah hasil MPI kelompok',
  },
  {
    code: 's.id/LK-RPPDigital-APHTC',
    url: 'https://s.id/LK-RPPDigital-APHTC',
    moduleRef: 'Materi 05',
    purpose: 'Lembar Kerja penyusunan RPP Pembelajaran Mendalam & Peer Assessment',
  },
  {
    code: 's.id/LK-ObservasiPraktik-APHTC',
    url: 'https://s.id/LK-ObservasiPraktik-APHTC',
    moduleRef: 'Materi 06',
    purpose: 'Lembar Kerja observasi praktik mengajar 16 indikator',
  },
  {
    code: 's.id/KartuHasilAsesmenSD',
    url: 'https://s.id/KartuHasilAsesmenSD',
    moduleRef: 'Materi 07 / RTL',
    purpose: 'Kartu hasil pemetaan level transformasi digital sekolah (34–136)',
  },
  {
    code: 's.id/AnalisisKebutuhan-APHTC',
    url: 'https://s.id/AnalisisKebutuhan-APHTC',
    moduleRef: 'Materi 07 / RTL',
    purpose: 'Instrumen analisis kebutuhan & prioritas tindak lanjut sekolah',
  },
  {
    code: 's.id/RTL-APHTC',
    url: 'https://s.id/RTL-APHTC',
    moduleRef: 'Materi 07 / RTL',
    purpose: 'Templat LK 10 Rencana Tindak Lanjut (Tabel A, B, C)',
  },
  {
    code: 's.id/Unggah-RTL-APHTC',
    url: 'https://s.id/Unggah-RTL-APHTC',
    moduleRef: 'Materi 07 / RTL',
    purpose: 'Tautan unggah dokumen RTL peserta APHTC',
  },
  {
    code: 's.id/FormatLaporanPengimbasanAPHTC',
    url: 'https://s.id/FormatLaporanPengimbasanAPHTC',
    moduleRef: 'Materi 07 / RTL',
    purpose: 'Format resmi laporan pengimbasan internal & eksternal',
  },
  {
    code: 's.id/LaporanPengimbasanAPHTC',
    url: 'https://s.id/LaporanPengimbasanAPHTC',
    moduleRef: 'Materi 07 / RTL',
    purpose: 'Tautan unggah bukti implementasi & laporan pengimbasan (maks. 3 bulan)',
  },
];
