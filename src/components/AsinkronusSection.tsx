import React, { useEffect, useState } from 'react';
import {
  AlertOctagon,
  BookMarked,
  CheckSquare,
  ExternalLink,
  FileText,
  HardDrive,
  HelpCircle,
  PhoneCall,
  Search,
  ShieldCheck,
  Square,
  Users,
  Wrench,
} from 'lucide-react';
import {
  ASINKRONUS_CHECKLIST_ITEMS,
  DIGITAL_ETHICS_RULES,
  DEEP_LEARNING_PRINCIPLES,
  FAQ_SSD_ITEMS,
  LEARNING_STRATEGIES,
  MAINTENANCE_SCHEDULES,
  PENGELOLAAN_PRINCIPLES,
  PENGELOLAAN_SIX_STEPS,
  PARTITION_STEPS,
  POLICY_REGULATIONS,
  RUANG_MURID_OFFLINE_STEPS,
  SEVEN_ECOSYSTEM_PILLARS,
  STAKEHOLDER_LAYERS,
  VENDOR_CONTACTS,
} from '../data/asinkronusData';

interface AsinkronusSectionProps {
  onOpenAsset: (assetId: string) => void;
}

type BookTab = 'buku1' | 'buku2' | 'buku3' | 'checklist';

const STORAGE_KEY = 'aphtc2026-asinkronus-checklist';

export const AsinkronusSection: React.FC<AsinkronusSectionProps> = ({ onOpenAsset }) => {
  const [activeTab, setActiveTab] = useState<BookTab>('buku1');
  const [faqQuery, setFaqQuery] = useState<string>('');
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
    } catch {
      // Abaikan jika penyimpanan lokal dibatasi browser
    }
  }, [checkedIds]);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const filteredFaq = FAQ_SSD_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(faqQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(faqQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(faqQuery.toLowerCase()),
  );

  const progressPercent = Math.round(
    (checkedIds.length / ASINKRONUS_CHECKLIST_ITEMS.length) * 100,
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header Bagian Asinkronus */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Tahap 1 · Pra-Hari H (Belajar Mandiri Guru SD)
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Modul Asinkronus & Kesiapan Perangkat Sekolah
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Sebelum pleno Sinkronus tanggal 20–21 November 2026 dimulai, seluruh peserta Guru SD mempelajari 3 Buku Saku resmi serta memastikan partisi Drive D: dan Ruang Murid Offline 48,1 GB siap dijalankan.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => onOpenAsset('buku-pengelolaan-perangkat')}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <FileText className="h-4 w-4 text-[#C23B2B]" />
              <span>PDF Buku 1</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenAsset('buku-saku-kebijakan')}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <FileText className="h-4 w-4 text-sky-600" />
              <span>PDF Buku 2</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenAsset('buku-pemanfaatan-sd')}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <FileText className="h-4 w-4 text-emerald-600" />
              <span>PDF Buku 3</span>
            </button>
          </div>
        </div>

        {/* Sub-Tab Selector */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 dark:border-slate-800 pt-5">
          {[
            { id: 'buku1' as const, label: 'Buku 1: Pengelolaan & Ruang Murid Offline', icon: HardDrive },
            { id: 'buku2' as const, label: 'Buku 2: Pemangku Kebijakan (MSG & IKK)', icon: Users },
            { id: 'buku3' as const, label: 'Buku 3: Pemanfaatan Pembelajaran SD', icon: BookMarked },
            {
              id: 'checklist' as const,
              label: `Ceklis Kesiapan Pra-Hari H (${checkedIds.length}/${ASINKRONUS_CHECKLIST_ITEMS.length})`,
              icon: CheckSquare,
            },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                  active
                    ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Konten Tab BUKU 1 */}
      {activeTab === 'buku1' && (
        <div className="space-y-8">
          {/* 4 Prinsip + 6 Langkah */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <span>4 Prinsip Pengelolaan Perangkat Digital</span>
                </h3>
                <div className="space-y-3">
                  {PENGELOLAAN_PRINCIPLES.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-3.5"
                    >
                      <div className="font-semibold text-sm text-slate-900 dark:text-white">
                        {item.title}
                      </div>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 h-full">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4">
                  6 Langkah Sistem Penggunaan Bersama di Sekolah
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {PENGELOLAAN_SIX_STEPS.map((step) => (
                    <div
                      key={step.number}
                      className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4 flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-mono text-xs font-bold text-[#C23B2B] dark:text-sky-400">
                          LANGKAH {step.number}
                        </span>
                        <h4 className="mt-1 font-semibold text-sm text-slate-900 dark:text-white">
                          {step.title}
                        </h4>
                        <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                      {step.linkUrl && (
                        <a
                          href={step.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sky-700 dark:text-sky-400 hover:underline"
                        >
                          <span>{step.linkLabel}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Panduan Teknis Partisi & Instalasi Ruang Murid Offline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                <span>Panduan Partisi Laptop Bantuan (Drive C: → D:)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Wajib dilakukan agar folder pembelajaran & Ruang Murid Offline tersimpan terpisah dari sistem Windows.
              </p>
              <div className="space-y-3">
                {PARTITION_STEPS.map((st) => (
                  <div
                    key={st.number}
                    className="flex gap-3 rounded-lg border border-slate-200 dark:border-slate-800 p-3.5"
                  >
                    <span className="font-mono text-xs font-bold text-sky-700 dark:text-sky-400 shrink-0 pt-0.5">
                      {st.number}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {st.title}
                      </div>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {st.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <HardDrive className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span>Instalasi Ruang Murid Offline (48,1 GB)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Disalin dari HDD Eksternal 500 GB bantuan menuju Drive D: agar bisa diakses tanpa internet.
              </p>
              <div className="space-y-3">
                {RUANG_MURID_OFFLINE_STEPS.map((st) => (
                  <div
                    key={st.number}
                    className="flex gap-3 rounded-lg border border-slate-200 dark:border-slate-800 p-3.5"
                  >
                    <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 shrink-0 pt-0.5">
                      {st.number}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {st.title}
                      </div>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {st.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Jadwal Pemeliharaan & Larangan Keras */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <AlertOctagon className="h-5 w-5 text-[#C23B2B] dark:text-rose-400" />
              <span>Matriks Pemeliharaan PID & Larangan Teknis</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {MAINTENANCE_SCHEDULES.map((block) => (
                <div
                  key={block.frequency}
                  className={`rounded-lg border p-4 ${
                    block.frequency.includes('Larangan')
                      ? 'border-red-300 dark:border-red-900/70 bg-red-50/70 dark:bg-red-950/25'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40'
                  }`}
                >
                  <div className="font-display text-sm font-bold text-slate-900 dark:text-white mb-2.5">
                    {block.frequency}
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {block.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2">
                        <span className="font-bold text-slate-400">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ / SSD & Direktori Kontak Vendor */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                  <span>Soal Sering Ditanya (SSD / FAQ) Bantuan</span>
                </h3>
                <div className="relative">
                  <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={faqQuery}
                    onChange={(e) => setFaqQuery(e.target.value)}
                    placeholder="Cari BAST, garansi, partisi..."
                    className="w-full sm:w-56 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-9 pr-3 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="space-y-3">
                {filteredFaq.map((faq) => (
                  <div
                    key={faq.id}
                    className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                      {faq.category}
                    </div>
                    <h4 className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                      {faq.question}
                    </h4>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
                {filteredFaq.length === 0 && (
                  <p className="text-sm text-slate-500 py-4 text-center">
                    Tidak ada butir FAQ yang cocok dengan kata kunci pencarian.
                  </p>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span>Layanan Garansi & Kontak Resmi Vendor</span>
              </h3>
              <div className="space-y-3.5">
                {VENDOR_CONTACTS.map((vc) => (
                  <div
                    key={vc.vendor}
                    className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4"
                  >
                    <div className="font-display text-sm font-bold text-slate-900 dark:text-white">
                      {vc.vendor}
                    </div>
                    <div className="text-xs font-medium text-sky-700 dark:text-sky-400">
                      {vc.device}
                    </div>
                    <div className="mt-2 space-y-1 text-xs font-mono text-slate-700 dark:text-slate-300">
                      <div>Telp/Pusat: {vc.phone}</div>
                      {vc.whatsapp && <div>WhatsApp: {vc.whatsapp}</div>}
                      {vc.email && <div>Email: {vc.email}</div>}
                    </div>
                    <div className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
                      Jam Layanan: {vc.hours}
                    </div>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{vc.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Konten Tab BUKU 2 */}
      {activeTab === 'buku2' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Landasan Regulasi & Kerangka MSG–TPACK
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                {POLICY_REGULATIONS.map((reg) => (
                  <li
                    key={reg}
                    className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-3 font-medium"
                  >
                    {reg}
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white mb-2.5">
                  7 Pilar Ekosistem Digital Pendidikan SD
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SEVEN_ECOSYSTEM_PILLARS.map((pilar, idx) => (
                    <div
                      key={pilar}
                      className="rounded-md border border-slate-200 dark:border-slate-800 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      <span className="font-mono font-bold text-sky-600 dark:text-sky-400 mr-1.5">
                        0{idx + 1}.
                      </span>
                      {pilar}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4">
                6 Lapisan Pemangku Kebijakan & Indikator Kinerja Kunci (IKK)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {STAKEHOLDER_LAYERS.map((item) => (
                  <div
                    key={item.layer}
                    className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4 space-y-2"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#C23B2B] dark:text-sky-400">
                      {item.layer}
                    </div>
                    <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                      {item.actor}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.focus}
                    </p>
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
                      {item.ikk.map((k) => (
                        <div
                          key={k}
                          className="text-xs font-medium text-emerald-700 dark:text-emerald-400 flex items-start gap-1.5"
                        >
                          <span>✓</span>
                          <span>{k}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Konten Tab BUKU 3 */}
      {activeTab === 'buku3' && (
        <div className="space-y-6">
          {/* 3 Prinsip Pembelajaran Mendalam */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DEEP_LEARNING_PRINCIPLES.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                  Prinsip Pembelajaran Mendalam
                </div>
                <h3 className="mt-1 font-display text-lg font-bold text-slate-900 dark:text-white">
                  {p.name}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {p.summary}
                </p>
              </div>
            ))}
          </div>

          {/* 3 Strategi Rotasi & Flipped Classroom */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4">
              3 Strategi Model Pembelajaran Berbasis Perangkat Digital di SD
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {LEARNING_STRATEGIES.map((st) => (
                <div
                  key={st.id}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#C23B2B] dark:text-sky-400">
                      {st.phase} · {st.subjectExample}
                    </div>
                    <h4 className="mt-1 font-display text-base font-bold text-slate-900 dark:text-white">
                      {st.name}
                    </h4>
                    <ol className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {st.flow.map((step, i) => (
                        <li key={step} className="flex gap-2">
                          <span className="font-mono font-bold text-slate-400">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  {st.resourceUrl && (
                    <a
                      href={st.resourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 dark:text-sky-400 hover:underline"
                    >
                      <span>{st.resourceLabel}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Etika Digital & Studi Kasus */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Etika Digital & Keseimbangan Layar
              </div>
              <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                3 Zona Bebas Gawai di Lingkungan Keluarga
              </h4>
              <div className="flex flex-wrap gap-2 pt-2">
                {DIGITAL_ETHICS_RULES.threeDeviceFreeZones.map((zone) => (
                  <span
                    key={zone}
                    className="rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >
                    {zone}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-7 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                Inspirasi Praktik Nyata
              </div>
              <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Alur Proyek Digital IPAS Kelas 5
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {DIGITAL_ETHICS_RULES.caseStudySummary}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Konten Tab CEKLIS KESIAPAN */}
      {activeTab === 'checklist' && (
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Daftar Periksa Belajar Mandiri Peserta (Pra-Hari H)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Tersimpan otomatis di peramban Anda. Pastikan seluruh butir tuntas sebelum menghadiri pleno tanggal 20 November 2026.
              </p>
            </div>
            <div className="text-right">
              <div className="font-mono text-2xl font-extrabold text-emerald-700 dark:text-emerald-400 tabular-nums">
                {progressPercent}%
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {checkedIds.length} dari {ASINKRONUS_CHECKLIST_ITEMS.length} selesai
              </div>
            </div>
          </div>

          <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div
              className="h-full bg-emerald-600 dark:bg-emerald-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="space-y-3">
            {ASINKRONUS_CHECKLIST_ITEMS.map((item) => {
              const checked = checkedIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleCheck(item.id)}
                  className={`w-full text-left flex items-start gap-3.5 rounded-xl border p-4 transition-colors cursor-pointer ${
                    checked
                      ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/25'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                  }`}
                >
                  {checked ? (
                    <CheckSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <Square className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div
                      className={`text-sm font-bold ${
                        checked
                          ? 'text-emerald-900 dark:text-emerald-200 line-through'
                          : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {item.title}
                    </div>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.hint}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
