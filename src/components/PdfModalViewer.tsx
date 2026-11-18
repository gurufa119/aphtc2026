import React, { useEffect } from 'react';
import { Download, ExternalLink, FileText, Image as ImageIcon, X } from 'lucide-react';
import { AssetDocument } from '../data/assetsManifest';

interface PdfModalViewerProps {
  asset: AssetDocument | null;
  onClose: () => void;
}

export const PdfModalViewer: React.FC<PdfModalViewerProps> = ({ asset, onClose }) => {
  useEffect(() => {
    if (!asset) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [asset, onClose]);

  if (!asset) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={asset.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-2 sm:p-6"
    >
      <div className="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl">
        {/* Bilah Atas Modal */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 px-4 py-3 sm:px-6 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300">
              {asset.fileType === 'png' ? (
                <ImageIcon className="h-5 w-5" />
              ) : (
                <FileText className="h-5 w-5" />
              )}
            </span>
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {asset.category} · {asset.moduleRef}
              </div>
              <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                {asset.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={asset.path}
              download={asset.originalName}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#C23B2B] hover:bg-[#A63022] px-3 py-1.5 text-xs font-semibold text-white transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Unduh</span>
            </a>
            <a
              href={asset.path}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Tab Baru</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup Pratinjau Dokumen"
              className="rounded-lg border border-slate-300 dark:border-slate-700 p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Area Konten Pratinjau */}
        <div className="relative flex-1 bg-slate-200/70 dark:bg-slate-950 overflow-auto flex items-center justify-center">
          {asset.fileType === 'png' ? (
            <div className="p-6 max-w-4xl w-full flex flex-col items-center">
              <img
                src={asset.path}
                alt={asset.title}
                className="max-h-[75vh] w-auto rounded-lg border border-slate-300 dark:border-slate-700 shadow-lg"
              />
              <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 text-center">
                {asset.description}
              </p>
            </div>
          ) : (
            <iframe
              src={asset.path}
              title={asset.title}
              className="h-full w-full border-0 bg-white"
            />
          )}
        </div>
      </div>
    </div>
  );
};
