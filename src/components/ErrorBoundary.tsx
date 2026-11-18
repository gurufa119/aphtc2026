import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error?.message || 'Terjadi kendala tampilan pada aplikasi.',
    };
  }

  handleReset = () => {
    try {
      window.location.hash = '#beranda';
    } catch {
      // Abaikan jika hash tidak dapat diubah
    }
    this.setState({ hasError: false, errorMessage: '' });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0B1120] p-6 text-slate-900 dark:text-slate-100">
          <div className="max-w-lg w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <div className="flex items-center gap-3 text-red-600 dark:text-red-400 mb-4">
              <AlertTriangle className="w-7 h-7 shrink-0" />
              <h1 className="font-display text-xl font-bold">
                Pemulihan Halaman Portal APHTC 2026
              </h1>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Tampilan mengalami gangguan sementara. Data materi dan dokumen PDF tetap aman dan
              dapat dimuat ulang tanpa menghapus progres lokal Anda.
            </p>
            <div className="rounded-lg bg-slate-100 dark:bg-slate-800/80 px-4 py-3 text-xs font-mono text-slate-700 dark:text-slate-300 mb-6 break-words">
              {this.state.errorMessage}
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={this.handleReset}
                className="inline-flex items-center gap-2 rounded-lg bg-[#C23B2B] hover:bg-[#A63022] px-4 py-2.5 text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Kembali ke Beranda
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Muat Ulang Halaman
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
