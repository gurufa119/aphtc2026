import React from 'react';
import { BookOpenCheck, FolderArchive, FileText } from 'lucide-react';
import { NavTab } from './Header';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
  onOpenAsset: (assetId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAsset }) => {
  return (
    <footer className="no-print border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A] mt-12">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 font-display font-bold text-slate-900 dark:text-white">
            <BookOpenCheck className="h-5 w-5 text-[#C23B2B]" />
            <span>Portal Advokasi PHTC Jenjang Sekolah Dasar Tahun 2026</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Disusun berdasarkan berkas resmi Asinkronus & Sinkronus (01A–07) Direktorat Sekolah Dasar · Pleno 20–21 November 2026.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
          <button
            type="button"
            onClick={() => onOpenAsset('skenario-aphtc-2026')}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Skenario APHTC 2026</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('pustaka')}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <FolderArchive className="h-3.5 w-3.5" />
            <span>26 Berkas & Tautan Resmi</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
