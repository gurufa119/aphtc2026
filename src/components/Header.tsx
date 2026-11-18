import React from 'react';
import { BookOpenCheck, Presentation } from 'lucide-react';

export type NavTab = 'beranda' | 'asinkronus' | 'jadwal' | 'sinkronus' | 'pustaka';

interface HeaderProps {
  activeTab: NavTab;
  onNavigate: (tab: NavTab, moduleId?: string) => void;
  onStartPresentation: () => void;
}

const NAV_ITEMS: { id: NavTab; label: string }[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'asinkronus', label: 'Pra-Hari H Asinkronus' },
  { id: 'jadwal', label: 'Jadwal 20–21 Nov' },
  { id: 'sinkronus', label: 'Materi Sinkronus' },
  { id: 'pustaka', label: 'Pustaka Dokumen' },
];

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigate,
  onStartPresentation,
}) => {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Zona 1: Brand Title 1 baris */}
        <button
          type="button"
          onClick={() => onNavigate('beranda')}
          className="flex items-center gap-2.5 text-left shrink-0 cursor-pointer group"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C23B2B] text-white shadow-sm group-hover:bg-[#A63022] transition-colors">
            <BookOpenCheck className="h-5 w-5" />
          </span>
          <span className="font-display text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
            APHTC SD 2026
          </span>
        </button>

        {/* Zona 2: Navigasi Horizontal 5 Tautan */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center gap-1 lg:gap-2 overflow-x-auto"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zona 3: 1 Tombol Aksi Utama */}
        <button
          type="button"
          onClick={onStartPresentation}
          className="inline-flex items-center gap-2 rounded-lg bg-[#C23B2B] hover:bg-[#A63022] px-3.5 sm:px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <Presentation className="h-4 w-4" />
          <span>Mulai Presentasi</span>
        </button>
      </div>

      {/* Navigasi Mobile Ringkas */}
      <div className="flex md:hidden border-t border-slate-200 dark:border-slate-800 overflow-x-auto px-3 py-1.5 gap-1.5 bg-slate-50/90 dark:bg-slate-900/90">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`px-2.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
