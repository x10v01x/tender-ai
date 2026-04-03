import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar, TopBar } from './components/Layout';
import { Workbench } from './components/Workbench';
import { TenderInfo } from './components/TenderInfo';
import { AIScreening } from './components/AIScreening';
import { TenderEditor } from './components/TenderEditor';
import { KnowledgeBase } from './components/KnowledgeBase';
import { ProjectKanban } from './components/ProjectKanban';
import { DocumentPreview } from './components/DocumentPreview';
import { RefinementModal, RewriteModal } from './components/Modals';

function AppContent() {
  const location = useLocation();
  const [isRefinementOpen, setIsRefinementOpen] = React.useState(false);
  const [isRewriteOpen, setIsRewriteOpen] = React.useState(false);

  // Determine page title based on route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/tenders': return '招标信息';
      case '/projects': return '投标项目';
      case '/editor': return '标书制作';
      case '/knowledge': return '知识库';
      case '/kanban': return '项目管理';
      case '/preview': return '文档预览';
      default: return undefined;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-[240px] pt-16 min-h-screen">
        <TopBar title={getPageTitle()} />
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Workbench />} />
            <Route path="/tenders" element={<TenderInfo />} />
            <Route path="/projects" element={<AIScreening />} />
            <Route path="/editor" element={<TenderEditor />} />
            <Route path="/knowledge" element={<KnowledgeBase />} />
            <Route path="/kanban" element={<ProjectKanban />} />
            <Route path="/preview" element={<DocumentPreview />} />
          </Routes>
        </div>
      </main>

      {/* Global Modals for Demo */}
      <RefinementModal isOpen={isRefinementOpen} onClose={() => setIsRefinementOpen(false)} />
      <RewriteModal isOpen={isRewriteOpen} onClose={() => setIsRewriteOpen(false)} />

      {/* Demo Trigger Buttons (Floating) */}
      <div className="fixed bottom-24 right-10 flex flex-col gap-2 z-[60]">
        <button 
          onClick={() => setIsRefinementOpen(true)}
          className="bg-white/80 backdrop-blur-md border border-slate-200 p-2 rounded-lg shadow-lg text-[10px] font-bold text-primary hover:bg-white transition-all"
        >
          DEMO: 修改弹窗
        </button>
        <button 
          onClick={() => setIsRewriteOpen(true)}
          className="bg-white/80 backdrop-blur-md border border-slate-200 p-2 rounded-lg shadow-lg text-[10px] font-bold text-primary hover:bg-white transition-all"
        >
          DEMO: 重写弹窗
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
