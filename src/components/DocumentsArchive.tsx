import React, { useState } from 'react';
import {
  Download,
  ExternalLink,
  Eye,
  FileText,
  FolderOpen,
  Image as ImageIcon,
  Link2,
  Search,
} from 'lucide-react';
import {
  ASSET_DOCUMENTS,
  AssetCategory,
  OFFICIAL_SHORTLINKS,
} from '../data/assetsManifest';

interface DocumentsArchiveProps {
  onOpenAsset: (assetId: string) => void;
}

const CATEGORIES: ('Semua' | AssetCategory)[] = [
  'Semua',
  'Skenario',
  'Asinkronus',
  'Materi Utama',
  'Rencana Moderasi',
  'Lembar Kerja',
  'Templat & Prompt',
  'Referensi Folder',
];

export const DocumentsArchive: React.FC<DocumentsArchiveProps> = ({ onOpenAsset }) => {
  const [selectedCat, setSelectedCat] = useState<'Semua' | AssetCategory>('Semua');
  const [query, setQuery] = useState('');

  const filteredDocs = ASSET_DOCUMENTS.filter((doc) => {
    const matchCat = selectedCat === 'Semua' || doc.category === selectedCat;
    const matchQuery =
      doc.title.toLowerCase().includes(query.toLowerCase()) ||
      doc.description.toLowerCase().includes(query.toLowerCase()) ||
      doc.moduleRef.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header & Pencarian */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#C23B2B] dark:text-sky-400">
              Repositori Resmi APHTC SD 2026
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Pustaka 26 Dokumen Sumber & Direktori Tautan s.id
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Seluruh 24 berkas PDF (Skenario, Buku Saku, Salindia, Rencana Moderasi, LK, Prompt) serta 2 gambar referensi struktur folder asli siap dipratinjau atau diunduh luring.
            </p>
          </div>

          <div className="relative shrink-0">
            <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari judul materi, LK, atau modul..."
              className="w-full sm:w-72 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-10 pr-4 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2 border-t border-slate-200 dark:border-slate-800 pt-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                selectedCat === cat
                  ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Dokumen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 flex flex-col justify-between space-y-4 shadow-xs"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2 text-[11px] font-bold uppercase tracking-wider">
                <span className="text-sky-700 dark:text-sky-400">{doc.category}</span>
                <span className="font-mono text-slate-500 dark:text-slate-400">{doc.moduleRef}</span>
              </div>
              <div className="flex items-start gap-2.5">
                {doc.fileType === 'png' ? (
                  <ImageIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <FileText className="h-5 w-5 text-[#C23B2B] dark:text-rose-400 shrink-0 mt-0.5" />
                )}
                <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {doc.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {doc.description}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => onOpenAsset(doc.id)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400 px-3 py-2 text-xs font-semibold text-white dark:text-slate-950 transition-colors cursor-pointer"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Pratinjau</span>
              </button>
              <a
                href={doc.path}
                download={doc.originalName}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Unduh</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Peta Tangkapan Layar Struktur Folder Asli */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <FolderOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
            Referensi Visual Struktur Folder Asli (ASINKRONUS & SINKRONUS 01A–07)
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4 space-y-2.5">
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Folder 1: ASINKRONUS (3 Buku Saku)
            </div>
            <button
              type="button"
              onClick={() => onOpenAsset('ref-folder-asinkronus')}
              className="block w-full overflow-hidden rounded-lg border border-slate-300 dark:border-slate-700 cursor-pointer"
            >
              <img
                src="./assets/aistudio/image_507758df.png"
                alt="Struktur Folder ASINKRONUS"
                className="w-full h-auto object-cover"
              />
            </button>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4 space-y-2.5">
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Folder 2: SINKRONUS (01A hingga 07 RTL)
            </div>
            <button
              type="button"
              onClick={() => onOpenAsset('ref-folder-sinkronus')}
              className="block w-full overflow-hidden rounded-lg border border-slate-300 dark:border-slate-700 cursor-pointer"
            >
              <img
                src="./assets/aistudio/image_63e16ff3.png"
                alt="Struktur Folder SINKRONUS"
                className="w-full h-auto object-cover"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Direktori Tautan Resmi s.id */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Link2 className="h-5 w-5 text-sky-600 dark:text-sky-400" />
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
            Direktori Lengkap Tautan Resmi (s.id) APHTC 2026
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {OFFICIAL_SHORTLINKS.map((link) => (
            <a
              key={link.code}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-3.5 hover:border-sky-400 dark:hover:border-sky-600 transition-colors flex flex-col justify-between gap-2"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-sky-700 dark:text-sky-400">
                    {link.code}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                </div>
                <p className="mt-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {link.purpose}
                </p>
              </div>
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                {link.moduleRef}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
