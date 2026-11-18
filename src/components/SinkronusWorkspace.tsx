import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileText,
  Layers,
  MessageSquareQuote,
  PlayCircle,
  UserCheck,
} from 'lucide-react';
import { ASSET_DOCUMENTS } from '../data/assetsManifest';
import { SINKRONUS_MODULES } from '../data/sinkronusData';
import { InteractiveTools } from './InteractiveTools';
import { UserRole } from './PresentationToolbar';

interface SinkronusWorkspaceProps {
  activeModuleId: string;
  onSelectModule: (id: string) => void;
  role: UserRole;
  onOpenAsset: (assetId: string) => void;
}

type ModuleSubTab = 'materi' | 'moderasi' | 'simulasi' | 'lk' | 'dokumen';

export const SinkronusWorkspace: React.FC<SinkronusWorkspaceProps> = ({
  activeModuleId,
  onSelectModule,
  role,
  onOpenAsset,
}) => {
  const currentModule =
    SINKRONUS_MODULES.find((m) => m.id === activeModuleId) || SINKRONUS_MODULES[0];

  const [subTab, setSubTab] = useState<ModuleSubTab>('materi');

  const handleModuleSwitch = (id: string) => {
    onSelectModule(id);
    // Reset to safe tab if module doesn't have simulation or LK
    const nextMod = SINKRONUS_MODULES.find((m) => m.id === id);
    if (subTab === 'simulasi' && !nextMod?.hasInteractiveTool) {
      setSubTab('materi');
    } else if (subTab === 'lk' && !nextMod?.lkSpec) {
      setSubTab('materi');
    }
  };

  const relatedDocs = ASSET_DOCUMENTS.filter((doc) =>
    currentModule.relatedAssetIds.includes(doc.id),
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
      {/* Pemilih Modul 01A – 07 */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Pilih Modul Sesi Pleno Sinkronus (20–21 November 2026)
          </div>
          <div className="text-xs font-semibold text-[#C23B2B] dark:text-sky-400">
            {role === 'narasumber'
              ? 'Mode Narasumber Aktif: Catatan Fasilitasi & Moderasi Ditampilkan'
              : 'Mode Peserta Guru SD: Fokus Materi, Simulasi & Lembar Kerja'}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {SINKRONUS_MODULES.map((mod) => {
            const active = mod.id === currentModule.id;
            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => handleModuleSwitch(mod.id)}
                className={`rounded-lg border px-3 py-2 text-left transition-colors cursor-pointer ${
                  active
                    ? 'border-[#C23B2B] bg-[#C23B2B] text-white dark:border-sky-500 dark:bg-sky-500 dark:text-slate-950 shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="font-mono text-xs font-extrabold">{mod.id}</div>
                <div className="text-[11px] font-medium truncate mt-0.5 opacity-95">
                  {mod.shortTitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Header Modul Aktif & Tab Internal */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-wider text-[#C23B2B] dark:text-sky-400">
              <span>{currentModule.code}</span>
              <span className="text-slate-400">·</span>
              <span className="tabular-nums">{currentModule.dayInfo}</span>
              <span className="text-slate-400">·</span>
              <span>Durasi {currentModule.durationLabel}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {currentModule.title}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
              Penanggung Jawab / Pengampu: {currentModule.pic}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenAsset(currentModule.relatedAssetIds[0])}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
          >
            <FileText className="h-4 w-4 text-[#C23B2B]" />
            <span>Buka Salindia PDF Asli</span>
          </button>
        </div>

        {/* Catatan Khusus Narasumber (Hanya muncul di Mode Narasumber) */}
        {role === 'narasumber' && (
          <div className="rounded-xl border border-amber-300 dark:border-amber-800/80 bg-amber-50/70 dark:bg-amber-950/25 p-4 sm:p-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2">
              <UserCheck className="h-4 w-4" />
              <span>Panduan Eksekusi Narasumber / Fasilitator</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-amber-950 dark:text-amber-100 leading-relaxed">
              {currentModule.facilitatorNotes.map((note) => (
                <li key={note} className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Sub-Tab Navigasi Konten Modul */}
        <div className="flex flex-wrap gap-2 border-t border-slate-200 dark:border-slate-800 pt-5">
          {[
            { id: 'materi' as const, label: 'Materi & Salindia Inti', icon: BookOpen, show: true },
            {
              id: 'moderasi' as const,
              label: `Rencana Moderasi (${currentModule.moderationPlan.length} Tahap)`,
              icon: MessageSquareQuote,
              show: true,
            },
            {
              id: 'simulasi' as const,
              label: 'Simulasi & Alat Praktik',
              icon: PlayCircle,
              show: currentModule.hasInteractiveTool,
            },
            {
              id: 'lk' as const,
              label: 'Lembar Kerja (LK)',
              icon: ClipboardList,
              show: Boolean(currentModule.lkSpec),
            },
            {
              id: 'dokumen' as const,
              label: `Berkas PDF (${relatedDocs.length})`,
              icon: Layers,
              show: true,
            },
          ]
            .filter((t) => t.show)
            .map((tab) => {
              const Icon = tab.icon;
              const active = subTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSubTab(tab.id)}
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

        {/* ISI TAB: MATERI INTI */}
        {subTab === 'materi' && (
          <div className="space-y-6 pt-2">
            {/* Tujuan Sesi */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-5">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                Tujuan Pembelajaran Sesi
              </h3>
              <ul className="space-y-2 text-sm text-slate-800 dark:text-slate-200">
                {currentModule.objectives.map((obj) => (
                  <li key={obj} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kartu Salindia Inti */}
            <div className="grid grid-cols-1 gap-5">
              {currentModule.coreSlides.map((slide, idx) => (
                <div
                  key={slide.heading}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 p-5 sm:p-6 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-xs font-mono font-bold text-[#C23B2B] dark:text-sky-400">
                      BAGIAN 0{idx + 1} {slide.badge ? `· ${slide.badge}` : ''}
                    </div>
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {slide.heading}
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {slide.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <span className="font-bold text-slate-400 mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  {slide.highlight && (
                    <div className="mt-2 rounded-lg border border-sky-200 dark:border-sky-800/70 bg-sky-50/80 dark:bg-sky-950/30 px-4 py-3 text-xs sm:text-sm font-semibold text-sky-900 dark:text-sky-200">
                      {slide.highlight}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ISI TAB: RENCANA MODERASI */}
        {subTab === 'moderasi' && (
          <div className="space-y-4 pt-2">
            {currentModule.moderationPlan.map((step) => (
              <div
                key={step.phase}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-5 flex flex-col md:flex-row md:items-start gap-4"
              >
                <div className="md:w-44 shrink-0">
                  <div className="font-mono text-xs font-bold text-[#C23B2B] dark:text-sky-400 tabular-nums">
                    {step.duration}
                  </div>
                  <div className="font-display text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {step.phase}
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {step.activity}
                  </p>
                  <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">Skrip / Tip Fasilitator:</strong>{' '}
                    {step.facilitatorPrompt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ISI TAB: SIMULASI & ALAT PRAKTIK */}
        {subTab === 'simulasi' && currentModule.hasInteractiveTool && (
          <div className="pt-2 space-y-4">
            {currentModule.interactiveToolTitle && (
              <div className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                {currentModule.interactiveToolTitle}
              </div>
            )}
            <InteractiveTools moduleId={currentModule.id} />
          </div>
        )}

        {/* ISI TAB: LEMBAR KERJA */}
        {subTab === 'lk' && currentModule.lkSpec && (
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-6 space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {currentModule.lkSpec.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  {currentModule.lkSpec.description}
                </p>
              </div>
              {currentModule.lkSpec.pdfAssetId && (
                <button
                  type="button"
                  onClick={() => onOpenAsset(currentModule.lkSpec!.pdfAssetId!)}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#C23B2B] hover:bg-[#A63022] px-4 py-2 text-xs font-semibold text-white shrink-0 cursor-pointer"
                >
                  <FileText className="h-4 w-4" />
                  <span>Lihat PDF Lembar Kerja</span>
                </button>
              )}
            </div>

            <ul className="space-y-2.5">
              {currentModule.lkSpec.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              {currentModule.lkSpec.downloadShortlink && (
                <a
                  href={currentModule.lkSpec.downloadShortlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2 text-xs font-semibold text-sky-700 dark:text-sky-400 hover:underline"
                >
                  <span>Unduh LK: {currentModule.lkSpec.downloadShortlink.replace('https://', '')}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {currentModule.lkSpec.uploadShortlink && (
                <a
                  href={currentModule.lkSpec.uploadShortlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 px-3.5 py-2 text-xs font-semibold text-white"
                >
                  <span>Unggah Hasil: {currentModule.lkSpec.uploadShortlink.replace('https://', '')}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* ISI TAB: DOKUMEN PDF MODUL INI */}
        {subTab === 'dokumen' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {relatedDocs.map((doc) => (
              <div
                key={doc.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                    {doc.category}
                  </div>
                  <h4 className="mt-1 font-display text-sm font-bold text-slate-900 dark:text-white">
                    {doc.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {doc.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenAsset(doc.id)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 dark:bg-sky-500 px-3 py-1.5 text-xs font-semibold text-white dark:text-slate-950 cursor-pointer"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>Buka Pratinjau</span>
                  </button>
                  <a
                    href={doc.path}
                    download={doc.originalName}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200"
                  >
                    <span>Unduh PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
