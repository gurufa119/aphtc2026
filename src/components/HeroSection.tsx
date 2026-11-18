import React from 'react';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Compass,
  FolderArchive,
  Laptop,
  Presentation,
  Sparkles,
} from 'lucide-react';
import { NavTab } from './Header';
import { UserRole } from './PresentationToolbar';

interface HeroSectionProps {
  role: UserRole;
  onNavigate: (tab: NavTab, moduleId?: string) => void;
  onOpenAsset: (assetId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  role,
  onNavigate,
  onOpenAsset,
}) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12 space-y-10">
      {/* Executive Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-wider text-[#C23B2B] dark:text-sky-400">
              <span>Direktorat Sekolah Dasar · Kemendikdasmen</span>
              <span className="text-slate-400">·</span>
              <span>Tahun Anggaran 2026</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Advokasi Program Hasil Terbaik Cepat (APHTC) Jenjang Sekolah Dasar
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {role === 'narasumber'
                ? 'Ruang kendali Narasumber & Fasilitator untuk memandu alur belajar mandiri Pra-Hari H hingga sesi pleno Sinkronus 20–21 November 2026 lengkap dengan Rencana Moderasi, Timer, Simulasi Praktik, dan 26 berkas resmi.'
                : 'Panduan lengkap Guru SD peserta APHTC 2026: mulai belajar mandiri Asinkronus (3 Buku Saku & instalasi Ruang Murid Offline) sebelum Hari H hingga praktik pembuatan MPI, RPP Digital, dan Rencana Tindak Lanjut.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {role === 'narasumber' ? (
                <>
                  <button
                    type="button"
                    onClick={() => onNavigate('sinkronus', '02')}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#C23B2B] hover:bg-[#A63022] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors cursor-pointer"
                  >
                    <Presentation className="h-4 w-4" />
                    <span>Buka Ruang Fasilitasi Sinkronus</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenAsset('skenario-aphtc-2026')}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <CalendarDays className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                    <span>Lihat PDF Skenario 2026</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => onNavigate('asinkronus')}
                    className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors cursor-pointer"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Mulai Belajar Mandiri Asinkronus</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('jadwal')}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <CalendarDays className="h-4 w-4 text-[#C23B2B] dark:text-sky-400" />
                    <span>Jadwal Pleno 20–21 Nov</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Ringkasan Eksekutif & Statistik Terukur */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pra-Hari H
              </div>
              <div className="mt-1 font-display text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                3 Buku Saku
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Pengelolaan, Kebijakan MSG, & Strategi Pemanfaatan SD.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pleno Sinkronus
              </div>
              <div className="mt-1 font-display text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                20–21 Nov
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                8 modul inti (01A–07) + Tes Awal & Tes Akhir 2026.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Konten Offline
              </div>
              <div className="mt-1 font-display text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                48,1 GB
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Ruang Murid HDD 500 GB dengan 6.400+ materi ajar SD.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pustaka Berkas
              </div>
              <div className="mt-1 font-display text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                26 Dokumen
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Slide, Rencana Moderasi, Lembar Kerja, Prompt & RTL.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Alur Kerja 3 Tahap Kegiatan */}
      <div>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Alur Rangkaian Kegiatan APHTC 2026
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Peserta Guru SD wajib menuntaskan tahap Asinkronus sebelum mengikuti pembahasan Sinkronus pada Hari ke-1 dan Hari ke-2.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('pustaka')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 dark:text-sky-400 hover:underline cursor-pointer"
          >
            <FolderArchive className="h-4 w-4" />
            <span>Lihat Seluruh 26 Berkas Sumber</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Tahap 1: Asinkronus */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  <Laptop className="h-4 w-4" />
                  <span>Tahap 1 · Pra-Hari H</span>
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Belajar Mandiri
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Asinkronus Peserta Guru SD
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Membaca 3 Buku Saku panduan, menyusun partisi Drive D: (NTFS), memasang Ruang Murid Offline 48,1 GB, serta mengecek garansi & kontak resmi vendor.
              </p>
              <ul className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>6 Langkah Pengelolaan Perangkat Bersama</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>IKK Pemangku Kebijakan (MSG & TPACK)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Station/Lab Rotation & Flipped Classroom</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('asinkronus')}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <span>Buka Modul Asinkronus</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Tahap 2: Hari 1 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C23B2B] dark:text-rose-400">
                  <Compass className="h-4 w-4" />
                  <span>Tahap 2 · Hari ke-1</span>
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                  20 Nov 2026
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Sinkronus: Kebijakan, PID & MPI (Bag. 1)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Registrasi, Tes Awal, Pembukaan, Kebijakan Revitalisasi (01A) & Transformasi Digital (01B), Eksplorasi PID–Laptop–HDD (02), serta awal pengembangan MPI (03).
              </p>
              <ul className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#C23B2B] dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>09:30–12:00 · Materi 01A & 01B (PIC BB/BPMP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#C23B2B] dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>13:00–15:30 · Materi 02 Eksplorasi PID & SAMR</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#C23B2B] dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>16:00–17:15 · Materi 03 MPI Bagian 1 (Relate–Explore)</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('sinkronus', '02')}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C23B2B] hover:bg-[#A63022] px-4 py-2.5 text-sm font-semibold text-white transition-colors cursor-pointer"
            >
              <span>Akses Materi Hari Pertama</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Tahap 3: Hari 2 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                  <Sparkles className="h-4 w-4" />
                  <span>Tahap 3 · Hari ke-2</span>
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                  21 Nov 2026
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Sinkronus: Asesmen, RPP, Praktik & RTL
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Lanjutan praktik MPI (03), Asesmen Digital UbD (04), Perencanaan & Peer Assessment RPP (05), Praktik Mengajar PID (06), RTL LK 10 (07), serta Tes Akhir.
              </p>
              <ul className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>07:45–12:00 · Lanjutan MPI, Materi 04 & RPP 05 (Bag. 1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>13:00–15:30 · Peer Assessment & Praktik Mengajar (06)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>16:00–18:00 · RTL (07), Tes Akhir & Penutupan</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('sinkronus', '05')}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors cursor-pointer"
            >
              <span>Akses Materi Hari Kedua</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
