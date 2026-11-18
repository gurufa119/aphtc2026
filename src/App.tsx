import React, { useCallback, useEffect, useState } from 'react';
import { AsinkronusSection } from './components/AsinkronusSection';
import { DocumentsArchive } from './components/DocumentsArchive';
import { Footer } from './components/Footer';
import { Header, NavTab } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PdfModalViewer } from './components/PdfModalViewer';
import { PresentationToolbar, UserRole } from './components/PresentationToolbar';
import { ScheduleSection } from './components/ScheduleSection';
import { SinkronusWorkspace } from './components/SinkronusWorkspace';
import { ASSET_DOCUMENTS, AssetDocument } from './data/assetsManifest';

function parseHash(): { tab: NavTab; moduleId: string } {
  try {
    const raw = window.location.hash.replace(/^#\/?/, '').trim();
    if (!raw) return { tab: 'beranda', moduleId: '02' };
    const [section, sub] = raw.split('/');
    if (section === 'asinkronus') return { tab: 'asinkronus', moduleId: '02' };
    if (section === 'jadwal') return { tab: 'jadwal', moduleId: '02' };
    if (section === 'pustaka') return { tab: 'pustaka', moduleId: '02' };
    if (section === 'sinkronus') {
      const validIds = ['01A', '01B', '02', '03', '04', '05', '06', '07'];
      const mod = sub && validIds.includes(sub.toUpperCase()) ? sub.toUpperCase() : '02';
      return { tab: 'sinkronus', moduleId: mod };
    }
  } catch {
    // Abaikan jika hash tidak valid
  }
  return { tab: 'beranda', moduleId: '02' };
}

export default function App() {
  const initialRoute = parseHash();
  const [activeTab, setActiveTab] = useState<NavTab>(initialRoute.tab);
  const [activeModuleId, setActiveModuleId] = useState<string>(initialRoute.moduleId);
  const [role, setRole] = useState<UserRole>('narasumber');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [activeAsset, setActiveAsset] = useState<AssetDocument | null>(null);

  // Sinkronisasi perubahan hash browser
  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseHash();
      setActiveTab(parsed.tab);
      setActiveModuleId(parsed.moduleId);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Sinkronisasi status native fullscreen browser & tombol Escape
  useEffect(() => {
    const handleFsChange = () => {
      if (!document.fullscreenElement) {
        // Jika pengguna keluar dari fullscreen browser lewat ESC
        setIsFullscreen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen && !document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isFullscreen]);

  const handleNavigate = useCallback((tab: NavTab, moduleId?: string) => {
    setActiveTab(tab);
    if (moduleId) {
      setActiveModuleId(moduleId);
    }
    try {
      const targetHash =
        tab === 'sinkronus' ? `#sinkronus/${moduleId || activeModuleId}` : `#${tab}`;
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      }
    } catch {
      // Abaikan
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeModuleId]);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        if (next === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('aphtc2026-theme', next);
      } catch {
        // Abaikan jika penyimpanan lokal tidak tersedia
      }
      return next;
    });
  }, []);

  const handleToggleFullscreen = useCallback(async () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
      try {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        }
      } catch {
        // Fallback otomatis memakai CSS full-viewport theater apabila iframe membatasi Fullscreen API
      }
    } else {
      setIsFullscreen(false);
      try {
        if (document.fullscreenElement && document.exitFullscreen) {
          await document.exitFullscreen();
        }
      } catch {
        // Abaikan
      }
    }
  }, [isFullscreen]);

  const handleStartPresentation = useCallback(() => {
    setRole('narasumber');
    if (activeTab !== 'sinkronus') {
      handleNavigate('sinkronus', activeModuleId);
    }
    if (!isFullscreen) {
      handleToggleFullscreen();
    }
  }, [activeTab, activeModuleId, handleNavigate, isFullscreen, handleToggleFullscreen]);

  const handleOpenAsset = useCallback((assetId: string) => {
    const found = ASSET_DOCUMENTS.find((d) => d.id === assetId);
    if (found) {
      setActiveAsset(found);
    }
  }, []);

  return (
    <div
      className={
        isFullscreen
          ? 'fixed inset-0 z-50 overflow-y-auto bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 flex flex-col'
          : 'min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 flex flex-col'
      }
    >
      {!isFullscreen && (
        <Header
          activeTab={activeTab}
          onNavigate={handleNavigate}
          onStartPresentation={handleStartPresentation}
        />
      )}

      <PresentationToolbar
        role={role}
        onRoleChange={setRole}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      <main className="flex-1">
        {activeTab === 'beranda' && (
          <>
            <HeroSection
              role={role}
              onNavigate={handleNavigate}
              onOpenAsset={handleOpenAsset}
            />
            <ScheduleSection
              onOpenModule={(modId) => handleNavigate('sinkronus', modId)}
              onOpenAsset={handleOpenAsset}
            />
          </>
        )}

        {activeTab === 'asinkronus' && (
          <AsinkronusSection onOpenAsset={handleOpenAsset} />
        )}

        {activeTab === 'jadwal' && (
          <ScheduleSection
            onOpenModule={(modId) => handleNavigate('sinkronus', modId)}
            onOpenAsset={handleOpenAsset}
          />
        )}

        {activeTab === 'sinkronus' && (
          <SinkronusWorkspace
            activeModuleId={activeModuleId}
            onSelectModule={(modId) => handleNavigate('sinkronus', modId)}
            role={role}
            onOpenAsset={handleOpenAsset}
          />
        )}

        {activeTab === 'pustaka' && (
          <DocumentsArchive onOpenAsset={handleOpenAsset} />
        )}
      </main>

      {!isFullscreen && (
        <Footer onNavigate={handleNavigate} onOpenAsset={handleOpenAsset} />
      )}

      <PdfModalViewer asset={activeAsset} onClose={() => setActiveAsset(null)} />
    </div>
  );
}
