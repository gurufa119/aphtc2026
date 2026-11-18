import React, { useEffect, useState } from 'react';
import {
  Maximize2,
  Minimize2,
  Moon,
  Pause,
  Play,
  RotateCcw,
  Sun,
  Timer,
  UserCheck,
  Users,
} from 'lucide-react';

export type UserRole = 'narasumber' | 'peserta';

interface PresentationToolbarProps {
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

const TIMER_PRESETS = [15, 30, 45, 60, 75, 90];

export const PresentationToolbar: React.FC<PresentationToolbarProps> = ({
  role,
  onRoleChange,
  theme,
  onToggleTheme,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const [selectedMinutes, setSelectedMinutes] = useState<number>(30);
  const [secondsLeft, setSecondsLeft] = useState<number>(30 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) return;
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isRunning]);

  const handlePreset = (mins: number) => {
    setIsRunning(false);
    setSelectedMinutes(mins);
    setSecondsLeft(mins * 60);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(selectedMinutes * 60);
  };

  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div
      className={`no-print border-b border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/95 backdrop-blur-sm transition-colors ${
        isFullscreen ? 'sticky top-0 z-50 px-4 sm:px-6' : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        {/* Peran Pengguna: Narasumber vs Peserta Guru SD */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hidden sm:inline">
            Mode Tampilan:
          </span>
          <div className="inline-flex rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-0.5">
            <button
              type="button"
              onClick={() => onRoleChange('narasumber')}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                role === 'narasumber'
                  ? 'bg-[#C23B2B] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <UserCheck className="h-3.5 w-3.5" />
              <span>Narasumber</span>
            </button>
            <button
              type="button"
              onClick={() => onRoleChange('peserta')}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                role === 'peserta'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Users className="h-3.5 w-3.5" />
              <span>Peserta Guru SD</span>
            </button>
          </div>
        </div>

        {/* Pengatur Waktu Sesi (khusus Narasumber atau selalu tersedia saat presentasi) */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1">
            <Timer className="h-3.5 w-3.5 text-[#C23B2B] dark:text-sky-400" />
            <span
              className={`font-mono text-xs font-bold tabular-nums ${
                secondsLeft === 0
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-slate-900 dark:text-slate-100'
              }`}
            >
              {formatTime(secondsLeft)}
            </span>

            <select
              aria-label="Durasi timer sesi"
              value={selectedMinutes}
              onChange={(e) => handlePreset(Number(e.target.value))}
              className="bg-transparent text-xs font-medium text-slate-600 dark:text-slate-300 focus:outline-none cursor-pointer"
            >
              {TIMER_PRESETS.map((m) => (
                <option key={m} value={m} className="bg-white dark:bg-slate-800">
                  {m} mnt
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setIsRunning((r) => !r)}
              title={isRunning ? 'Jeda Timer' : 'Mulai Timer'}
              className="rounded p-1 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              {isRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            </button>
            <button
              type="button"
              onClick={handleReset}
              title="Setel Ulang Timer"
              className="rounded p-1 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Kontrol Tema Gelap / Terang */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Aktifkan Mode Terang' : 'Aktifkan Mode Gelap'}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-3.5 w-3.5 text-amber-400" />
                <span>Terang</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5 text-slate-700" />
                <span>Gelap</span>
              </>
            )}
          </button>

          {/* Kontrol Layar Penuh (Fullscreen) */}
          <button
            type="button"
            onClick={onToggleFullscreen}
            aria-label={isFullscreen ? 'Keluar Mode Layar Penuh' : 'Aktifkan Mode Layar Penuh'}
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
              isFullscreen
                ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                : 'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="h-3.5 w-3.5" />
                <span>Keluar Layar Penuh</span>
              </>
            ) : (
              <>
                <Maximize2 className="h-3.5 w-3.5" />
                <span>Layar Penuh</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
