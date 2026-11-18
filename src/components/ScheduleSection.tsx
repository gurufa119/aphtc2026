import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Clock,
  Coffee,
  FileText,
  Laptop,
  Presentation,
  User,
} from 'lucide-react';
import { SCHEDULE_DAYS, SCHEDULE_SLOTS } from '../data/scheduleData';

interface ScheduleSectionProps {
  onOpenModule: (moduleId: string) => void;
  onOpenAsset: (assetId: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  onOpenModule,
  onOpenAsset,
}) => {
  const [selectedDay, setSelectedDay] = useState<'all' | 'pra' | 'hari-1' | 'hari-2'>('all');

  const daysToRender =
    selectedDay === 'all'
      ? SCHEDULE_DAYS
      : SCHEDULE_DAYS.filter((d) => d.id === selectedDay);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C23B2B] dark:text-sky-400">
              Skenario Resmi APHTC UPT 2026
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Jadwal Asinkronus & Pleno Sinkronus (20–21 November 2026)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Klik tombol buka modul pada setiap baris sesi materi untuk langsung masuk ke salindia inti, Rencana Moderasi Narasumber, dan Lembar Kerja.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenAsset('skenario-aphtc-2026')}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
          >
            <FileText className="h-4 w-4 text-[#C23B2B]" />
            <span>Buka PDF Skenario APHTC 2026</span>
          </button>
        </div>

        {/* Filter Hari */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 dark:border-slate-800 pt-5">
          {[
            { id: 'all' as const, label: 'Semua Rangkaian' },
            { id: 'pra' as const, label: 'Pra-Hari H (Asinkronus)' },
            { id: 'hari-1' as const, label: 'Hari 1 · 20 Nov 2026' },
            { id: 'hari-2' as const, label: 'Hari 2 · 21 Nov 2026' },
          ].map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => setSelectedDay(btn.id)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                selectedDay === btn.id
                  ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Daftar Sesi per Hari */}
      <div className="space-y-8">
        {daysToRender.map((dayInfo) => {
          const slots = SCHEDULE_SLOTS.filter((s) => s.day === dayInfo.id);
          return (
            <div
              key={dayInfo.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs"
            >
              <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{dayInfo.label}</span>
                    <span>·</span>
                    <span>{dayInfo.modeLabel}</span>
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold text-slate-900 dark:text-white">
                    {dayInfo.dateLabel}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {dayInfo.description}
                  </p>
                </div>
              </div>

              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {slots.map((slot) => {
                  const isIshoma = slot.type === 'ishoma';
                  const isMateri = slot.type === 'materi-narasumber';
                  const isAsinkron = slot.type === 'asinkronus';

                  return (
                    <div
                      key={slot.id}
                      className={`px-6 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 transition-colors ${
                        isIshoma
                          ? 'bg-slate-50/70 dark:bg-slate-950/30 text-slate-500 dark:text-slate-400'
                          : 'hover:bg-slate-50/80 dark:hover:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
                        {/* Kolom Waktu & Durasi */}
                        <div className="sm:w-40 shrink-0">
                          <div className="font-mono text-sm font-bold text-slate-900 dark:text-white tabular-nums">
                            {slot.time}
                          </div>
                          <div className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                            <Clock className="h-3 w-3" />
                            <span>{slot.durationMinutes} menit</span>
                          </div>
                        </div>

                        {/* Kolom Detail Sesi */}
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            {isIshoma && <Coffee className="h-4 w-4 text-amber-600 shrink-0" />}
                            {isMateri && (
                              <Presentation className="h-4 w-4 text-[#C23B2B] dark:text-sky-400 shrink-0" />
                            )}
                            {isAsinkron && (
                              <Laptop className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            )}
                            <h4 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                              {slot.sessionTitle}
                            </h4>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {slot.summary}
                          </p>
                          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 pt-0.5">
                            <User className="h-3.5 w-3.5" />
                            <span>PIC: {slot.pic}</span>
                          </div>
                        </div>
                      </div>

                      {/* Aksi Langsung ke Modul */}
                      {slot.moduleId && (
                        <button
                          type="button"
                          onClick={() => onOpenModule(slot.moduleId!)}
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#C23B2B] hover:bg-[#A63022] px-3.5 py-2 text-xs font-semibold text-white transition-colors shrink-0 cursor-pointer"
                        >
                          <span>Buka Modul {slot.moduleId}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
