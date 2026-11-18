import React, { useEffect, useState } from 'react';
import {
  Cable,
  Check,
  CheckCircle2,
  CheckSquare,
  Copy,
  HelpCircle,
  Printer,
  RefreshCw,
  Square,
  Touchpad,
  Video,
  XCircle,
} from 'lucide-react';

interface InteractiveToolProps {
  moduleId: string;
}

/* ============================================================
   MODUL 02: INSPEKTOR PORT PID & CEKLIS SAMR 19 BUTIR
   ============================================================ */
const SAMR_ITEMS = [
  // Substitution (5)
  { id: 's1', level: 'S — Substitution', text: 'Menampilkan gambar/teks statis materi metamorfosis pada layar PID.' },
  { id: 's2', level: 'S — Substitution', text: 'Memutar video pembelajaran Ruang Murid Offline tanpa jeda interaktif.' },
  { id: 's3', level: 'S — Substitution', text: 'Mengetik rangkuman materi menggunakan papan ketik virtual PID/Laptop.' },
  { id: 's4', level: 'S — Substitution', text: 'Membuka berkas PDF atau salindia presentasi sebagai pengganti buku cetak.' },
  { id: 's5', level: 'S — Substitution', text: 'Menggunakan stylus pen di papan tulis PID sebagai pengganti spidol.' },
  // Augmentation (5)
  { id: 'a1', level: 'A — Augmentation', text: 'Melakukan perbesaran (zoom in/out) gambar detail siklus kupu-kupu & katak.' },
  { id: 'a2', level: 'A — Augmentation', text: 'Memberi anotasi warna berbeda langsung di atas video/gambar saat dijeda.' },
  { id: 'a3', level: 'A — Augmentation', text: 'Menangkap layar (screenshot) hasil coretan anotasi menjadi gambar arsip.' },
  { id: 'a4', level: 'A — Augmentation', text: 'Menggunakan fitur layar terbelah (split screen) untuk dua jendela materi.' },
  { id: 'a5', level: 'A — Augmentation', text: 'Mengakses pintasan 5 jari & bilah samping untuk berpindah alat ajar cepat.' },
  // Modification (5)
  { id: 'm1', level: 'M — Modification', text: 'Murid menyentuh langsung layar PID untuk menggeser (drag & drop) fase metamorfosis.' },
  { id: 'm2', level: 'M — Modification', text: 'Kelompok membandingkan metamorfosis sempurna vs tidak sempurna berdampingan.' },
  { id: 'm3', level: 'M — Modification', text: 'Menguji koneksi kabel HDMI + USB-B Touch agar PID mengontrol penuh Laptop.' },
  { id: 'm4', level: 'M — Modification', text: 'Menyunting hasil karya diskusi kelompok langsung pada kanvas interaktif.' },
  { id: 'm5', level: 'M — Modification', text: 'Menyimpan rekaman proses kolaborasi kelas ke folder Drive D: terstruktur.' },
  // Redefinition (4)
  { id: 'r1', level: 'R — Redefinition', text: 'Mengubah kelas menjadi studio eksplorasi multikanal berbasis sentuhan kolaboratif.' },
  { id: 'r2', level: 'R — Redefinition', text: 'Menghubungkan hasil anotasi PID ke portofolio atau kuis interaktif murid.' },
  { id: 'r3', level: 'R — Redefinition', text: 'Murid mempresentasikan temuan eksperimen memakai simulasi interaktif di PID.' },
  { id: 'r4', level: 'R — Redefinition', text: 'Memproduksi produk pembelajaran digital baru yang sebelumnya mustahil di papan kapur.' },
];

const Module02Tool: React.FC = () => {
  const [hdmiConnected, setHdmiConnected] = useState(true);
  const [usbTouchConnected, setUsbTouchConnected] = useState(true);
  const [panelView, setPanelView] = useState<'depan' | 'belakang'>('belakang');
  const [checked, setChecked] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aphtc2026-samr19');
      return saved ? (JSON.parse(saved) as string[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('aphtc2026-samr19', JSON.stringify(checked));
    } catch {
      // Abaikan
    }
  }, [checked]);

  const toggleItem = (id: string) =>
    setChecked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <div className="space-y-6">
      {/* Simulator Koneksi PID-Laptop */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h4 className="font-display text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cable className="h-4 w-4 text-[#C23B2B] dark:text-sky-400" />
              <span>Simulator Koneksi Kabel PID ↔ Laptop & Panel I/O</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Aktifkan atau lepas kabel di bawah untuk melihat perbedaan perilaku sentuhan pada layar PID 75&quot;.
            </p>
          </div>
          <div className="inline-flex rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-0.5">
            <button
              type="button"
              onClick={() => setPanelView('depan')}
              className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer ${
                panelView === 'depan'
                  ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Panel Depan
            </button>
            <button
              type="button"
              onClick={() => setPanelView('belakang')}
              className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer ${
                panelView === 'belakang'
                  ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Panel Belakang
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          <div className="md:col-span-5 space-y-3">
            <button
              type="button"
              onClick={() => setHdmiConnected((v) => !v)}
              className={`w-full flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors cursor-pointer ${
                hdmiConnected
                  ? 'border-sky-400 bg-sky-50 dark:border-sky-700 dark:bg-sky-950/40'
                  : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
              }`}
            >
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  1. Kabel HDMI-In (Gambar & Audio)
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Menyalurkan tampilan Laptop ke layar PID
                </div>
              </div>
              <span
                className={`text-xs font-mono font-bold ${
                  hdmiConnected ? 'text-sky-700 dark:text-sky-300' : 'text-slate-400'
                }`}
              >
                {hdmiConnected ? 'TERPASANG' : 'LEPAS'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setUsbTouchConnected((v) => !v)}
              className={`w-full flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors cursor-pointer ${
                usbTouchConnected
                  ? 'border-emerald-400 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/40'
                  : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
              }`}
            >
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  2. Kabel USB-B Touch (Kontrol Sentuh)
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Port Touch PID ↔ Port USB Laptop
                </div>
              </div>
              <span
                className={`text-xs font-mono font-bold ${
                  usbTouchConnected ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-400'
                }`}
              >
                {usbTouchConnected ? 'TERPASANG' : 'LEPAS'}
              </span>
            </button>
          </div>

          <div className="md:col-span-7 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Status Simulasi Interaksi Layar PID
              </div>
              <div className="mt-2 flex items-start gap-2.5">
                <Touchpad
                  className={`h-5 w-5 shrink-0 mt-0.5 ${
                    hdmiConnected && usbTouchConnected
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : hdmiConnected
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-red-600 dark:text-red-400'
                  }`}
                />
                <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  {hdmiConnected && usbTouchConnected ? (
                    <span>
                      <strong>Mode Interaktif Penuh Aktif:</strong> Layar Laptop tampil di PID sekaligus sentuhan jari/stylus di layar PID langsung mengontrol kursor Laptop dua arah.
                    </span>
                  ) : hdmiConnected && !usbTouchConnected ? (
                    <span>
                      <strong>Hanya Mode Proyektor (Layar Kedua):</strong> Gambar Laptop tampil di PID, tetapi layar PID <strong>tidak dapat disentuh</strong> untuk mengendalikan Laptop sebelum kabel USB-B Touch dipasang.
                    </span>
                  ) : (
                    <span>
                      <strong>Belum Ada Sinyal Video:</strong> Pasang kabel HDMI-In dari Laptop ke PID (atau gunakan nirkabel Hisense Screen Share / Win + K).
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-1.5">
                Daftar Port {panelView === 'depan' ? 'Panel Depan PID' : 'Panel Belakang PID'}:
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {(panelView === 'depan'
                  ? ['3× USB-A', 'HDMI-In', 'USB-C', 'Tombol Standby']
                  : [
                      'Audio Jack 3.5mm',
                      'HDMI-In',
                      'HDMI-Out',
                      'LAN RJ45',
                      'USB-B Touch',
                      'USB-A 3.0',
                      'RS232',
                      'Digital Audio Out',
                      'Line In',
                    ]
                ).map((port) => (
                  <span
                    key={port}
                    className={`rounded border px-2 py-0.5 ${
                      port.includes('USB-B Touch') || port.includes('HDMI-In')
                        ? 'border-sky-300 dark:border-sky-700 bg-sky-50 dark:bg-sky-950/50 text-sky-800 dark:text-sky-300 font-bold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {port}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ceklis 19 Butir SAMR */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Ceklis Digital LK Eksplorasi PID — 19 Butir SAMR
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Praktik kelompok eksplorasi Ruang Murid topik Metamorfosis Kupu-kupu & Katak.
            </p>
          </div>
          <div className="font-mono text-sm font-bold text-emerald-700 dark:text-emerald-400 tabular-nums">
            {checked.length} / {SAMR_ITEMS.length} Terpenuhi
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {SAMR_ITEMS.map((item) => {
            const isChecked = checked.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleItem(item.id)}
                className={`flex items-start gap-2.5 rounded-lg border p-3 text-left transition-colors cursor-pointer ${
                  isChecked
                    ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/30'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {isChecked ? (
                  <CheckSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <Square className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="text-[11px] font-bold text-sky-700 dark:text-sky-400">
                    {item.level}
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                    {item.text}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   MODUL 03: GENERATOR MASTER PROMPT MPI & 12 PLATFORM/INTERAKSI
   ============================================================ */
const PLATFORMS_12 = [
  'Canva',
  'Wayground',
  'Polypad',
  'Wordwall',
  'Qreatif Educative',
  'PhET Interactive',
  'Sketchfab 3D',
  'Google Earth',
  'Coolmath4kids',
  'ScratchJr',
  'Education.com',
  'Musicca',
];

const INTERACTIONS_12 = [
  'Click Interaction',
  'Drag & Drop',
  'Matching (Menjodohkan)',
  'Multiple Choice',
  'Fill in the Blank',
  'Sorting (Klasifikasi)',
  'Sequence / Ordering',
  'Hotspot Eksplorasi',
  'Simulation (Simulasi)',
  'Branching Scenario',
  'Game Based Learning',
  'Typing Response',
];

const Module03Tool: React.FC = () => {
  const [jenisMedia, setJenisMedia] = useState('Web Media Pembelajaran Interaktif (HTML Tunggal)');
  const [topik, setTopik] = useState('Siklus Metamorfosis Kupu-Kupu dan Katak');
  const [kelas, setKelas] = useState('Kelas IV SD (Fase B)');
  const [mapel, setMapel] = useState('IPAS');
  const [tujuan, setTujuan] = useState(
    'Murid mampu membedakan metamorfosis sempurna dan tidak sempurna melalui eksplorasi drag-and-drop urutan fase.',
  );
  const [jumlahSoal, setJumlahSoal] = useState('5');
  const [jenisSoal, setJenisSoal] = useState('Pilihan Ganda & Drag-and-Drop Urutan');
  const [temaVisual, setTemaVisual] = useState('Alam Cerah ramah anak SD, tombol sentuh besar untuk PID 75 inci');
  const [copied, setCopied] = useState(false);

  const generatedPrompt = `Buatlah sebuah ${jenisMedia} yang responsif, ramah layar sentuh Papan Interaktif Digital (PID 75 inci), dan dapat dijalankan secara offline dalam satu file HTML utuh.

DETAIL PEMBELAJARAN:
- Mata Pelajaran: ${mapel}
- Kelas / Fase: ${kelas}
- Materi / Topik: ${topik}
- Tujuan Pembelajaran: ${tujuan}
- Tema Visual & Bahasa: ${temaVisual}, Bahasa Indonesia baku namun komunikatif untuk murid SD, lengkapi dengan ikon visual jelas dan kontras tinggi.

STRUKTUR 6 BAGIAN ISI MEDIA:
1. Halaman Sampul / Judul Interaktif dengan tombol "Mulai Belajar".
2. Peta Tujuan Pembelajaran sederhana yang mudah dipahami anak SD.
3. Materi Eksplorasi Interaktif (gunakan interaksi klik/hotspot/tahapan visual bertahap).
4. Aktivitas Simulasi / Permainan Edukatif (Drag & Drop atau Matching interaktif langsung di layar).
5. Evaluasi / Kuis Formatif terdiri dari ${jumlahSoal} soal bertipe ${jenisSoal}.
6. Halaman Rangkuman Skor & Refleksi Singkat.

ATURAN LOGIKA & UMPAN BALIK WAJIB:
- Berikan umpan balik seketika pada setiap jawaban: jika benar tampilkan animasi positif bertuliskan "Kamu Hebat!" beserta penjelasan singkat; jika salah beri petunjuk pembimbing.
- Wajib ada tombol "Coba Lagi" apabila murid ingin mengulang aktivitas.
- Hitung skor akhir HANYA berdasarkan jawaban pada percobaan pertama (first attempt score) agar objektif sebagai asesmen formatif, lalu tampilkan rincian kunci pembahasan di akhir.`;

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Abaikan jika clipboard dibatasi
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Generator Master Prompt MPI (Sesuai Templat Resmi APHTC)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Isi identitas topik pelajaran Anda, lalu salin prompt utuh untuk digunakan pada ChatGPT, Gemini, Canva AI (Mode Kode &lt;/&gt;), atau Claude.
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#C23B2B] hover:bg-[#A63022] px-4 py-2 text-xs font-semibold text-white transition-colors shrink-0 cursor-pointer"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? 'Prompt Tersalin!' : 'Salin Master Prompt'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
              Mata Pelajaran
            </label>
            <input
              type="text"
              value={mapel}
              onChange={(e) => setMapel(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
              Kelas / Fase SD
            </label>
            <input
              type="text"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
              Jenis Media Pembelajaran
            </label>
            <input
              type="text"
              value={jenisMedia}
              onChange={(e) => setJenisMedia(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs text-slate-900 dark:text-white"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
              Materi / Topik
            </label>
            <input
              type="text"
              value={topik}
              onChange={(e) => setTopik(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
              Jumlah & Jenis Soal
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={jumlahSoal}
                onChange={(e) => setJumlahSoal(e.target.value)}
                className="w-16 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 py-1.5 text-xs text-slate-900 dark:text-white font-mono"
              />
              <input
                type="text"
                value={jenisSoal}
                onChange={(e) => setJenisSoal(e.target.value)}
                className="flex-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 py-1.5 text-xs text-slate-900 dark:text-white"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
              Tujuan Pembelajaran
            </label>
            <input
              type="text"
              value={tujuan}
              onChange={(e) => setTujuan(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
              Tema Warna / Visual
            </label>
            <input
              type="text"
              value={temaVisual}
              onChange={(e) => setTemaVisual(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs text-slate-900 dark:text-white"
            />
          </div>
        </div>

        <pre className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 text-xs font-mono text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
          {generatedPrompt}
        </pre>
      </div>

      {/* Referensi Cepat 12 Platform & 12 Interaksi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white mb-3">
            12 Platform Ekosistem Bahan Ajar (s.id/websitebahanajar)
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {PLATFORMS_12.map((p, idx) => (
              <div
                key={p}
                className="rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 px-2.5 py-1.5 font-medium text-slate-700 dark:text-slate-300"
              >
                <span className="font-mono text-sky-600 dark:text-sky-400 mr-1.5">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                {p}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white mb-3">
            12 Bentuk Interaksi Media Pembelajaran Interaktif
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {INTERACTIONS_12.map((iName, idx) => (
              <div
                key={iName}
                className="rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 px-2.5 py-1.5 font-medium text-slate-700 dark:text-slate-300"
              >
                <span className="font-mono text-[#C23B2B] dark:text-rose-400 mr-1.5">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                {iName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   MODUL 04: KUIS BENAR ATAU SALAH & SIMULATOR KKTP INTERVAL
   ============================================================ */
const ASESMEN_CASES = [
  {
    id: 1,
    caseTitle: 'Kasus 1 — Kode Rahasia Bajak Laut (Matematika Kls 4)',
    statement:
      'Guru menggunakan QR Code & Google Form tiap pos untuk melacak pemahaman murid bertahap sambil memperbaiki proses belajar di tengah pertemuan. Ini mencerminkan fungsi Assessment for Learning (AfL).',
    correct: true,
    explanation:
      'BENAR. Assessment for Learning berfungsi sebagai asesmen formatif selama proses berlangsung untuk memberi umpan balik cepat agar guru dan murid dapat langsung memperbaiki strategi belajar.',
  },
  {
    id: 2,
    caseTitle: 'Kasus 2 — Warung Seblak Digital (Matematika Kls 5)',
    statement:
      'Dalam simulasi kasir digital PID pada proyek jual beli, guru dapat sekaligus memadukan refleksi diri murid (AaL), pantauan proses (AfL), serta bukti ketercapaian tujuan belajar (AoL).',
    correct: true,
    explanation:
      'BENAR. Aktivitas proyek autentik berbasis simulasi digital memungkinkan integrasi Assessment as Learning (refleksi mandiri/kelompok), for Learning (umpan balik langsung), dan of Learning (produk/unjuk kerja).',
  },
  {
    id: 3,
    caseTitle: 'Kasus 3 — Gim Edukasi Sistem Pencernaan + Ruang Murid (IPAS Kls 5)',
    statement:
      'Skor tertinggi, kecepatan waktu tercepat, dan level akhir pada gim edukasi digital sudah cukup dijadikan keputusan mutlak ketuntasan TP tanpa perlu ditafsirkan lagi oleh guru.',
    correct: false,
    explanation:
      'SALAH. Skor, waktu, maupun level gim tetap merupakan data kuantitatif mentah yang WAJIB ditafsirkan guru berdasarkan indikator Tujuan Pembelajaran—misalnya apakah murid sekadar menebak cepat atau benar-benar memahami konsep.',
  },
  {
    id: 4,
    caseTitle: 'Kasus 4 — Penanganan 6 Murid Belum Tuntas',
    statement:
      'Enam murid yang belum mencapai kriteria ketuntasan langsung diberikan soal tertulis yang persis sama secara berulang tanpa perubahan metode maupun media belajar.',
    correct: false,
    explanation:
      'SALAH. Remedial harus menggunakan cara, strategi pendampingan, atau media belajar yang berbeda (misal visualisasi langsung di PID atau bimbingan kelompok kecil) sesuai kebutuhan murid yang kesulitan.',
  },
];

const Module04Tool: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [simScore, setSimScore] = useState<number>(72);

  const getIntervalDetail = (score: number) => {
    if (score <= 20)
      return {
        band: '0 – 20%',
        status: 'Belum Mencapai Ketuntasan (Seluruh Kriteria)',
        action: 'Wajib remedial komprehensif di seluruh bagian dengan pendampingan intensif serta media konkret/visual Ruang Murid.',
        tone: 'text-red-700 dark:text-red-400 border-red-300 dark:border-red-800 bg-red-50/70 dark:bg-red-950/30',
      };
    if (score <= 40)
      return {
        band: '21 – 40%',
        status: 'Belum Mencapai Ketuntasan (Sebagian Besar Kriteria)',
        action: 'Remedial pada sebagian besar indikator menggunakan variasi aktivitas interaktif di PID/kelompok kecil.',
        tone: 'text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-800 bg-orange-50/70 dark:bg-orange-950/30',
      };
    if (score <= 60)
      return {
        band: '41 – 60%',
        status: 'Hampir Mencapai Ketuntasan',
        action: 'Remedial terfokus hanya pada bagian indikator spesifik yang belum dikuasai (tanpa mengulang bagian yang sudah tuntas).',
        tone: 'text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-950/30',
      };
    if (score <= 80)
      return {
        band: '61 – 80%',
        status: 'Sudah Mencapai Ketuntasan',
        action: 'Lulus kriteria TP — siap melanjutkan ke Tujuan Pembelajaran berikutnya tanpa perlu remedial.',
        tone: 'text-sky-700 dark:text-sky-400 border-sky-300 dark:border-sky-800 bg-sky-50/70 dark:bg-sky-950/30',
      };
    return {
      band: '81 – 100%',
      status: 'Sudah Mencapai Ketuntasan (Sangat Baik)',
      action: 'Lulus melampaui ekspektasi — berikan pengayaan tantangan HOTS atau menjadi tutor sebaya di kelas.',
      tone: 'text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/30',
    };
  };

  const intervalResult = getIntervalDetail(simScore);

  return (
    <div className="space-y-6">
      {/* Kuis 4 Kasus Benar atau Salah */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h4 className="font-display text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-[#C23B2B] dark:text-sky-400" />
              <span>Kuis Pleno: Benar atau Salah Asesmen Digital (4 Kasus Materi 04)</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Pilih BENAR atau SALAH untuk menampilkan pembahasan resmi di layar presentasi.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setAnswers({})}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Reset Kuis</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ASESMEN_CASES.map((c) => {
            const chosen = answers[c.id];
            const isAnswered = chosen !== undefined;
            const isRight = chosen === c.correct;
            return (
              <div
                key={c.id}
                className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="text-xs font-bold text-[#C23B2B] dark:text-sky-400">
                    {c.caseTitle}
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {c.statement}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, [c.id]: true }))}
                      className={`flex-1 rounded-lg border py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                        chosen === true
                          ? 'bg-slate-900 text-white border-slate-900 dark:bg-sky-500 dark:text-slate-950'
                          : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      BENAR
                    </button>
                    <button
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, [c.id]: false }))}
                      className={`flex-1 rounded-lg border py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                        chosen === false
                          ? 'bg-slate-900 text-white border-slate-900 dark:bg-sky-500 dark:text-slate-950'
                          : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      SALAH
                    </button>
                  </div>

                  {isAnswered && (
                    <div
                      className={`rounded-lg border p-3 text-xs leading-relaxed flex items-start gap-2 ${
                        isRight
                          ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                          : 'border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200'
                      }`}
                    >
                      {isRight ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      )}
                      <span>{c.explanation}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Simulator Interval KKTP Panduan 2025 */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Simulator Interval Nilai KKTP (Panduan Asesmen 2025)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Geser skor capaian murid (0–100) untuk melihat penafsiran status ketuntasan & tindak lanjut pedagogis.
            </p>
          </div>
          <div className="font-mono text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            {simScore} / 100
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={simScore}
          onChange={(e) => setSimScore(Number(e.target.value))}
          aria-label="Simulasi Skor Murid"
          className="w-full accent-[#C23B2B] cursor-pointer"
        />

        <div className={`rounded-lg border p-4 ${intervalResult.tone}`}>
          <div className="text-xs font-mono font-bold uppercase">
            Rentang Interval: {intervalResult.band}
          </div>
          <div className="mt-1 font-display text-base font-bold">{intervalResult.status}</div>
          <p className="mt-1 text-xs leading-relaxed">{intervalResult.action}</p>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   MODUL 05: MINI-GAME 7 SKENARIO & KALKULATOR PEER ASSESSMENT RPP (14)
   ============================================================ */
type LearningExp = 'Memahami' | 'Mengaplikasi' | 'Merefleksi';

const MARI_BERMAIN_SCENARIOS: { id: number; text: string; answer: LearningExp }[] = [
  {
    id: 1,
    text: 'Murid mengukur panjang dan lebar taman sekolah di halaman nyata untuk menghitung luas bidang persegi panjang.',
    answer: 'Mengaplikasi',
  },
  {
    id: 2,
    text: 'Murid menyimak video animasi daur hidup kupu-kupu di Ruang Murid untuk mengenal urutan 4 fasenya.',
    answer: 'Memahami',
  },
  {
    id: 3,
    text: 'Murid menuliskan jurnal belajar singkat tentang kesulitan yang dihadapi dan cara mereka mengatasinya hari ini.',
    answer: 'Merefleksi',
  },
  {
    id: 4,
    text: 'Murid menyimak penjelasan guru tentang ciri-ciri bangun datar sisi lurus pada layar PID.',
    answer: 'Memahami',
  },
  {
    id: 5,
    text: 'Murid membaca teks cerita rakyat Malin Kundang lalu menjawab pertanyaan unsur intrinsik dasar.',
    answer: 'Memahami',
  },
  {
    id: 6,
    text: 'Murid bertukar cerita berpasangan mengevaluasi strategi belajar mana yang paling membantu mereka paham.',
    answer: 'Merefleksi',
  },
  {
    id: 7,
    text: 'Murid merancang poster kampanye hemat air berbasis data sekolah menggunakan Canva untuk dipasang di kelas.',
    answer: 'Mengaplikasi',
  },
];

const RPP_INDICATORS = [
  { group: 'A. Keselarasan Komponen', label: '01. Keselarasan CP, Tujuan Pembelajaran, dan Asesmen' },
  { group: 'A. Keselarasan Komponen', label: '02. Ketepatan pemilihan Dimensi Profil Lulusan (8 dimensi)' },
  { group: 'B. Kerangka Pembelajaran', label: '03. Kejelasan Praktik Pedagogis (model/strategi kontekstual)' },
  { group: 'B. Kerangka Pembelajaran', label: '04. Lingkungan Pembelajaran aman, inklusif & mendukung PID' },
  { group: 'B. Kerangka Pembelajaran', label: '05. Kemitraan Pembelajaran (kolaborasi murid/orang tua/komunitas)' },
  { group: 'B. Kerangka Pembelajaran', label: '06. Pemanfaatan Digital relevan (Ruang Murid/MPI/Asesmen Digital)' },
  { group: 'C. Pengalaman Belajar', label: '07. Mengintegrasikan prinsip Berkesadaran' },
  { group: 'C. Pengalaman Belajar', label: '08. Mengintegrasikan prinsip Bermakna' },
  { group: 'C. Pengalaman Belajar', label: '09. Mengintegrasikan prinsip Menggembirakan' },
  { group: 'C. Pengalaman Belajar', label: '10. Rangkaian langkah tahap Memahami terstruktur jelas' },
  { group: 'C. Pengalaman Belajar', label: '11. Rangkaian langkah tahap Mengaplikasi melibatkan praktik nyata' },
  { group: 'C. Pengalaman Belajar', label: '12. Rangkaian langkah tahap Merefleksi terfasilitasi bermakna' },
  { group: 'D. Asesmen Pembelajaran', label: '13. Tersedia asesmen awal/proses formatif berbasis digital/interaktif' },
  { group: 'D. Asesmen Pembelajaran', label: '14. Kejelasan kriteria ketuntasan (KKTP) dan tindak lanjut' },
];

const Module05Tool: React.FC = () => {
  const [gameAns, setGameAns] = useState<Record<number, LearningExp>>({});
  const [scores, setScores] = useState<number[]>(Array(14).fill(3));

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const finalGrade = Math.round((totalScore / 56) * 100);

  const getCategory = (nilai: number) => {
    if (nilai >= 86) return { label: 'Sangat Sesuai', cls: 'text-emerald-700 dark:text-emerald-400' };
    if (nilai >= 76) return { label: 'Sesuai', cls: 'text-sky-700 dark:text-sky-400' };
    if (nilai >= 60) return { label: 'Cukup Sesuai', cls: 'text-amber-700 dark:text-amber-400' };
    return { label: 'Belum Sesuai', cls: 'text-red-700 dark:text-red-400' };
  };

  const cat = getCategory(finalGrade);

  return (
    <div className="space-y-6">
      {/* Mini-Game Mari Bermain */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Mini-Game &ldquo;Mari Bermain&rdquo;: Klasifikasi 7 Skenario Pengalaman Belajar
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Kelompokkan setiap aktivitas murid ke dalam tahap Memahami, Mengaplikasi, atau Merefleksi.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setGameAns({})}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-semibold cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Ulangi</span>
          </button>
        </div>

        <div className="space-y-2.5">
          {MARI_BERMAIN_SCENARIOS.map((sc) => {
            const chosen = gameAns[sc.id];
            const isCorrect = chosen === sc.answer;
            return (
              <div
                key={sc.id}
                className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 flex flex-col lg:flex-row lg:items-center justify-between gap-3"
              >
                <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <span className="font-mono font-bold text-slate-400 mr-2">0{sc.id}.</span>
                  {sc.text}
                </div>
                <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                  {(['Memahami', 'Mengaplikasi', 'Merefleksi'] as LearningExp[]).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setGameAns((prev) => ({ ...prev, [sc.id]: opt }))}
                      className={`rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                        chosen === opt
                          ? opt === sc.answer
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'bg-red-600 text-white border-red-600'
                          : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                  {chosen && (
                    <span className="text-xs font-bold ml-1">
                      {isCorrect ? (
                        <span className="text-emerald-600 dark:text-emerald-400">✓ Benar</span>
                      ) : (
                        <span className="text-red-600 dark:text-red-400">✗ {sc.answer}</span>
                      )}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Kalkulator Peer Assessment 14 Indikator */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Kalkulator Peer Assessment RPP Digital (14 Indikator · Skala 1–4)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Rumus Resmi: Nilai = (Total Skor / 56) × 100 · Kategori: 0–59 Belum Sesuai · 60–75 Cukup · 76–85 Sesuai · 86–100 Sangat Sesuai.
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-mono text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              {finalGrade} <span className="text-sm font-normal text-slate-500">({totalScore}/56)</span>
            </div>
            <div className={`text-xs font-bold uppercase ${cat.cls}`}>{cat.label}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {RPP_INDICATORS.map((ind, idx) => (
            <div
              key={ind.label}
              className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 p-3"
            >
              <div>
                <div className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                  {ind.group}
                </div>
                <div className="text-xs font-medium text-slate-800 dark:text-slate-200">
                  {ind.label}
                </div>
              </div>
              <div className="flex gap-1 shrink-0">
                {[1, 2, 3, 4].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() =>
                      setScores((prev) => prev.map((s, i) => (i === idx ? val : s)))
                    }
                    className={`h-7 w-7 rounded font-mono text-xs font-bold transition-colors cursor-pointer ${
                      scores[idx] === val
                        ? 'bg-[#C23B2B] text-white'
                        : 'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   MODUL 06: KALKULATOR OBSERVASI PRAKTIK MENGAJAR 16 INDIKATOR (/64)
   ============================================================ */
const PRAKTIK_INDICATORS = [
  // A. Proses Pembelajaran (6)
  'A1. Pengkondisian kelas & penyampaian tujuan belajar bermakna',
  'A2. Menjalankan tahap Memahami secara interaktif & dialogis',
  'A3. Memfasilitasi tahap Mengaplikasi dengan masalah/konteks nyata SD',
  'A4. Memandu tahap Merefleksi di akhir sesi mengajar',
  'A5. Menghadirkan suasana Berkesadaran, Bermakna, & Menggembirakan',
  'A6. Pelaksanaan asesmen formatif cepat di sela/akhir praktik',
  // B. Integrasi Perangkat Digital (6)
  'B1. Kesiapan teknis koneksi Laptop ↔ PID (HDMI + USB-B Touch)',
  'B2. Pemanfaatan fitur PID (anotasi, split screen, pintasan 5 jari)',
  'B3. Keselarasan konten Ruang Murid / MPI buatan dengan Tujuan Pembelajaran',
  'B4. Keterbacaan font, warna kontras, & tata letak layar dari belakang kelas',
  'B5. Kelancaran transisi antarmedia tanpa menyita waktu instruksional',
  'B6. Kepatuhan prosedur keselamatan & pemakaian wajar perangkat',
  // C. Keterlibatan Murid & Pemanfaatan PID (4)
  'C1. Murid diberi kesempatan langsung menyentuh & mengoperasikan layar PID',
  'C2. Kolaborasi aktif antarmurid saat menyelesaikan tantangan di PID',
  'C3. Keamanan & ketertiban murid saat maju berkelompok di depan perangkat',
  'C4. Dampak keterlibatan digital terhadap pemahaman konsep peserta didik',
];

const Module06Tool: React.FC = () => {
  const [scores, setScores] = useState<number[]>(Array(16).fill(3));
  const [groupName, setGroupName] = useState('Kelompok 1 — Guru Model SD');

  const total = scores.reduce((a, b) => a + b, 0);
  const nilai = Math.round((total / 64) * 100);

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="space-y-1">
          <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
            Kalkulator Observasi Praktik Mengajar (16 Indikator · Skor Maks 64)
          </h4>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            aria-label="Nama Kelompok / Guru Model"
            className="rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-900 dark:text-white"
          />
        </div>
        <div className="text-right">
          <div className="font-mono text-2xl font-extrabold text-sky-700 dark:text-sky-400 tabular-nums">
            {nilai} <span className="text-sm font-normal text-slate-500">({total}/64)</span>
          </div>
          <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
            Nilai = (Skor Total / 64) × 100
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {PRAKTIK_INDICATORS.map((label, idx) => (
          <div
            key={label}
            className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 p-3"
          >
            <div className="text-xs font-medium text-slate-800 dark:text-slate-200">{label}</div>
            <div className="flex gap-1 shrink-0">
              {[1, 2, 3, 4].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() =>
                    setScores((prev) => prev.map((s, i) => (i === idx ? val : s)))
                  }
                  className={`h-7 w-7 rounded font-mono text-xs font-bold transition-colors cursor-pointer ${
                    scores[idx] === val
                      ? 'bg-sky-600 text-white'
                      : 'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   MODUL 07 / RTL: KALKULATOR LEVEL (34–136), BUILDER LK 10 & VIDEO 9:16
   ============================================================ */
const VIDEO_CHECKLIST = [
  'Durasi video tepat antara 60 hingga 90 detik',
  'Rasio vertikal 9:16 resolusi tinggi (HD, pencahayaan & audio jelas)',
  'Rekaman autentik aktivitas kelas memakai PID/Laptop (bukan kolase foto)',
  'Takarir (caption) memuat Mapel, Kelas, Tujuan, Kegiatan, dan Hasil',
];

const OFFICIAL_HASHTAGS =
  '#DigitalisasiPembelajaranSD2026 #TeknologiBersahabatAnakSDHebat #PendidikanBermutuUntukSemua #KemendikdasmenRAMAH';

const Module07Tool: React.FC = () => {
  const [schoolScore, setSchoolScore] = useState<number>(78);
  const [namaSekolah, setNamaSekolah] = useState('SD Negeri Nusantara 01');
  const [tabelA, setTabelA] = useState(
    'Mengimplementasikan RPP Pembelajaran Mendalam & MPI pada Kelas V (Minggu ke-2 pasca-APHTC) serta merekam video praktik baik 9:16.',
  );
  const [tabelB, setTabelB] = useState(
    'Mengadakan sesi berbagi di Komunitas Belajar (Kombel) sekolah tentang koneksi HDMI+USB-B Touch & Ruang Murid Offline.',
  );
  const [tabelC, setTabelC] = useState(
    'Melakukan pengimbasan praktik baik pembuatan MPI pada forum KKG Gugus Kecamatan dalam kurun bulan ke-2.',
  );
  const [videoChecks, setVideoChecks] = useState<string[]>([]);
  const [copiedTag, setCopiedTag] = useState(false);

  const getLevelInfo = (s: number) => {
    if (s <= 59)
      return {
        level: 'Level 1 — Konvensional (34–59)',
        focus: 'Prioritas: Bentuk SK Tim & SOP pakai bersama, partisi Drive D:, instalasi Ruang Murid Offline, serta jadwal rotasi mingguan.',
        tone: 'border-red-300 dark:border-red-800 bg-red-50/70 dark:bg-red-950/30 text-red-900 dark:text-red-200',
      };
    if (s <= 85)
      return {
        level: 'Level 2 — Go Digital (60–85)',
        focus: 'Prioritas: Rutinkan pemakaian PID dalam pembelajaran mingguan, buat min. 1 MPI per tema sulit, dan laksanakan asesmen digital bulanan.',
        tone: 'border-amber-300 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200',
      };
    if (s <= 111)
      return {
        level: 'Level 3 — Digital (86–111)',
        focus: 'Prioritas: Bangun repositori MPI karya guru lintas kelas dan perkuat pengimbasan aktif di KKG/gugus sekolah.',
        tone: 'border-sky-300 dark:border-sky-800 bg-sky-50/70 dark:bg-sky-950/30 text-sky-900 dark:text-sky-200',
      };
    return {
      level: 'Level 4 — Smart School (112–136)',
      focus: 'Prioritas: Menjadi sekolah rujukan praktik pembelajaran mendalam berbasis digital dan mendampingi sekolah imbas sekitar.',
      tone: 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200',
    };
  };

  const levelInfo = getLevelInfo(schoolScore);

  const copyHashtags = () => {
    try {
      navigator.clipboard.writeText(OFFICIAL_HASHTAGS);
      setCopiedTag(true);
      window.setTimeout(() => setCopiedTag(false), 2000);
    } catch {
      // Abaikan
    }
  };

  return (
    <div className="space-y-6">
      {/* Kalkulator Level Sekolah */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Pemetaan Skor Kartu Hasil Asesmen Sekolah (34–136)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sesuaikan total skor 3 dimensi (Proses, Teknologi, Lingkungan) untuk melihat level sekolah Anda.
            </p>
          </div>
          <div className="font-mono text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            {schoolScore} <span className="text-xs font-normal text-slate-500">/ 136</span>
          </div>
        </div>
        <input
          type="range"
          min={34}
          max={136}
          value={schoolScore}
          onChange={(e) => setSchoolScore(Number(e.target.value))}
          className="w-full accent-[#C23B2B] cursor-pointer"
        />
        <div className={`rounded-lg border p-4 ${levelInfo.tone}`}>
          <div className="font-display text-sm font-bold">{levelInfo.level}</div>
          <p className="mt-1 text-xs leading-relaxed">{levelInfo.focus}</p>
        </div>
      </div>

      {/* Builder LK 10 Format RTL */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Penyusun Draf LK 10 — Format Rencana Tindak Lanjut (Tabel A, B, C)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Batas akhir unggah bukti implementasi & pengimbasan maksimal 3 bulan setelah pelatihan.
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="no-print inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-100 cursor-pointer"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Cetak / Simpan PDF</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
              Identitas Satuan Pendidikan
            </label>
            <input
              type="text"
              value={namaSekolah}
              onChange={(e) => setNamaSekolah(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
              Tabel A — Rencana Implementasi Pembelajaran Digital di Kelas
            </label>
            <textarea
              rows={2}
              value={tabelA}
              onChange={(e) => setTabelA(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
              Tabel B — Rencana Pengimbasan Internal Sekolah (Kombel)
            </label>
            <textarea
              rows={2}
              value={tabelB}
              onChange={(e) => setTabelB(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
              Tabel C — Rencana Pengimbasan Eksternal (Gugus / KKG)
            </label>
            <textarea
              rows={2}
              value={tabelC}
              onChange={(e) => setTabelC(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Checklist Video 9:16 & Salin Tagar Resmi */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Video className="h-4 w-4 text-[#C23B2B] dark:text-sky-400" />
            <span>Standar Video Praktik Baik 9:16 & 4 Tagar Resmi</span>
          </h4>
          <button
            type="button"
            onClick={copyHashtags}
            className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 px-3 py-1.5 text-xs font-semibold text-white cursor-pointer"
          >
            {copiedTag ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copiedTag ? '4 Tagar Disalin!' : 'Salin 4 Tagar Wajib'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {VIDEO_CHECKLIST.map((item) => {
            const ok = videoChecks.includes(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setVideoChecks((prev) =>
                    prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item],
                  )
                }
                className="flex items-start gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 text-left text-xs cursor-pointer"
              >
                {ok ? (
                  <CheckSquare className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </button>
            );
          })}
        </div>

        <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2.5 font-mono text-xs text-sky-700 dark:text-sky-400 break-words">
          {OFFICIAL_HASHTAGS}
        </div>
      </div>
    </div>
  );
};

export const InteractiveTools: React.FC<InteractiveToolProps> = ({ moduleId }) => {
  switch (moduleId) {
    case '02':
      return <Module02Tool />;
    case '03':
      return <Module03Tool />;
    case '04':
      return <Module04Tool />;
    case '05':
      return <Module05Tool />;
    case '06':
      return <Module06Tool />;
    case '07':
      return <Module07Tool />;
    default:
      return null;
  }
};
