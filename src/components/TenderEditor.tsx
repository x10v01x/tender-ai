import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  History, 
  Eye, 
  Save, 
  FileDown, 
  PlusCircle, 
  FolderOpen, 
  CheckCircle2, 
  Circle,
  Sparkles,
  RefreshCw,
  ZoomIn,
  ZoomOut,
  MessageSquareOff,
  Loader2
} from 'lucide-react';
import { cn } from '../lib/utils';
import { GoogleGenAI } from "@google/genai";

export function TenderEditor() {
  const [activeSection, setActiveSection] = React.useState('1.1');
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [content, setContent] = React.useState({
    '1.1': {
      title: '企业资质证明',
      text: '作为国内领先的云计算服务提供商，本公司致力于为政务客户提供安全、可靠、高效的数字化基础设施。我们拥有齐备的行业准入资质，包括但不限于信息安全等级保护三级认证、ISO/IEC 27001 信息安全管理体系认证等。\n\n在过去的十年中，智标AI 团队深度参与了国家级政务云标准制定，并在全国范围内成功部署了超过 50 个地市级以上的政务云项目。我们的核心竞争力在于对国产化适配的深度理解以及全栈自研的虚拟化技术。',
      highlight: '我们将严格遵守招标文件中的所有技术规范要求，确保在交付周期内高质量完成云平台的平滑迁移与上线运行，为政府部门数字化转型保驾护航。',
      footer: '此外，本公司在售后服务体系建设方面投入巨大，在北京、上海、深圳设有三个全国性技术支持中心，提供 7×24 小时实时响应服务，确保任何系统波动都能在 15 分钟内得到初步响应和专家介入。'
    }
  });

  const sections = [
    { id: '1.1', title: '企业资质证明', count: '1.2k', ok: true, group: '商务标 (Commercial)' },
    { id: '1.2', title: '财务状况表', count: '0', ok: false, group: '商务标 (Commercial)' },
    { id: '2.1', title: '技术方案综述', count: '4.5k', ok: true, group: '技术标 (Technical)' },
    { id: '2.2', title: '云原生架构设计', count: '2.1k', ok: false, group: '技术标 (Technical)' },
    { id: '2.3', title: '安全防护体系', count: '840', ok: false, group: '技术标 (Technical)' },
    { id: '2.4', title: '售后服务承诺', count: '0', ok: false, group: '技术标 (Technical)' },
  ];

  const handleAIPolish = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp",
        contents: `请对以下标书内容进行专业润色，使其更具说服力和专业性，保持原意但提升文采：\n\n${content['1.1'].highlight}`,
        config: {
          systemInstruction: "你是一个专业的招投标专家，擅长撰写高质量的商务和技术标书。你的语言风格应当专业、严谨、具有说服力。",
        }
      });
      
      if (response.text) {
        setContent(prev => ({
          ...prev,
          '1.1': {
            ...prev['1.1'],
            highlight: response.text.trim()
          }
        }));
      }
    } catch (error) {
      console.error("AI Polish failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAIRewrite = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp",
        contents: `请重新撰写以下关于“企业资质证明”的段落，强调我司在政务云领域的领先地位和技术优势：\n\n${content['1.1'].text}`,
      });
      
      if (response.text) {
        setContent(prev => ({
          ...prev,
          '1.1': {
            ...prev['1.1'],
            text: response.text.trim()
          }
        }));
      }
    } catch (error) {
      console.error("AI Rewrite failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const currentData = content[activeSection as keyof typeof content] || {
    title: sections.find(s => s.id === activeSection)?.title || '',
    text: '暂无内容，请点击“AI生成”开始撰写。',
    highlight: '',
    footer: ''
  };

  return (
    <div className="flex h-[calc(100vh-64px)] -m-8 overflow-hidden">
      {/* SideNavBar (Left) - Bid Structure */}
      <aside className="w-[280px] bg-surface-container-low backdrop-blur-xl border-r border-slate-200/50 flex flex-col py-8 shadow-inner">
        <div className="px-8 mb-8 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Bid Structure</span>
            <h3 className="text-sm font-black text-on-surface uppercase tracking-tight">标书章节目录</h3>
          </div>
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100 text-primary transition-all"
          >
            <PlusCircle size={18} />
          </motion.button>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar px-4 space-y-8">
          {['商务标 (Commercial)', '技术标 (Technical)'].map((group, gIdx) => (
            <motion.section 
              key={group}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: gIdx * 0.1 }}
            >
              <div className="px-4 py-2 flex items-center gap-3 text-slate-400 mb-2">
                <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center">
                  <FolderOpen size={12} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest">{group}</span>
              </div>
              <div className="space-y-1">
                {sections.filter(s => s.group === group).map((s, sIdx) => (
                  <motion.div 
                    key={s.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (gIdx * 0.2) + (sIdx * 0.05) }}
                    onClick={() => setActiveSection(s.id)}
                    whileHover={{ x: 4, backgroundColor: "rgba(var(--primary), 0.03)" }}
                    className={cn(
                      "group flex items-center justify-between p-3 px-4 rounded-2xl cursor-pointer transition-all border-2",
                      activeSection === s.id 
                        ? "bg-white text-primary border-primary/20 shadow-lg shadow-primary/5" 
                        : "text-slate-500 border-transparent hover:border-slate-100"
                    )}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      {s.ok ? (
                        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                          <CheckCircle2 className="text-emerald-500" size={16} />
                        </motion.div>
                      ) : (
                        <Circle className="text-slate-200" size={16} />
                      )}
                      <span className="text-[13px] truncate font-bold tracking-tight">{s.id} {s.title}</span>
                    </div>
                    <span className="text-[9px] font-black opacity-40 group-hover:opacity-100 transition-opacity">{s.count}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
        <div className="px-6 mt-auto pt-6 border-t border-slate-100">
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 flex items-center justify-center gap-3 bg-gradient-to-br from-primary to-primary-container text-white rounded-2xl text-[13px] font-black shadow-xl shadow-primary/20 transition-all"
          >
            <PlusCircle size={20} /> 添加新章节
          </motion.button>
        </div>
      </aside>

      {/* Main Content - Editor Canvas */}
      <main className="flex-1 bg-surface-container-low overflow-y-auto custom-scrollbar flex justify-center py-16 px-12 relative">
        {/* svgl style background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="editor-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#editor-grid)" />
          </svg>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[900px] bg-white min-h-[1200px] p-[100px] shadow-2xl shadow-slate-200/80 rounded-sm relative mb-32 border border-slate-100"
        >
          <motion.h1 
            layoutId="section-title"
            className="text-[32px] font-black text-on-surface mb-12 tracking-tighter leading-tight"
          >
            {activeSection} {currentData.title}
          </motion.h1>
          
          <div className="space-y-8 text-on-surface leading-[2] text-[16px] font-normal relative">
            <AnimatePresence mode="wait">
              {isGenerating && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/80 backdrop-blur-md z-20 flex flex-col items-center justify-center gap-6 rounded-2xl"
                >
                  <div className="relative">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 border-4 border-primary/10 border-t-primary rounded-full shadow-2xl shadow-primary/20"
                    ></motion.div>
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 flex items-center justify-center text-primary"
                    >
                      <Sparkles size={28} />
                    </motion.div>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-sm font-black text-primary uppercase tracking-[0.3em] animate-pulse">AI 深度优化中</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">正在基于行业标准重构专业表述...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="whitespace-pre-wrap font-serif text-slate-700">{currentData.text}</div>
            
            {currentData.highlight && (
              <div className="relative group/highlight">
                <motion.span 
                  initial={{ backgroundColor: "rgba(59, 130, 246, 0)" }}
                  animate={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  className="border-b-2 border-blue-400/50 transition-all duration-500 py-1"
                >
                  {currentData.highlight}
                </motion.span>
                {/* AI Floating Toolbar - itshover style */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileHover={{ y: -5, scale: 1 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute -top-20 left-1/2 -translate-x-1/2 flex items-center p-1.5 bg-white/90 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-2xl gap-1 whitespace-nowrap z-50 ring-1 ring-black/5"
                >
                  <motion.button 
                    onClick={handleAIPolish}
                    disabled={isGenerating}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-black shadow-lg shadow-primary/20 disabled:opacity-50 transition-all"
                  >
                    <Sparkles size={16} className="animate-pulse" /> AI 润色
                  </motion.button>
                  <motion.button 
                    onClick={handleAIRewrite}
                    disabled={isGenerating}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-slate-700 disabled:opacity-50 transition-all"
                  >
                    <RefreshCw size={16} className={isGenerating ? "animate-spin" : ""} /> AI 重写
                  </motion.button>
                  <div className="w-px h-6 bg-slate-200 mx-2"></div>
                  <button className="flex items-center gap-2 px-5 py-2.5 hover:bg-black/5 rounded-xl text-xs font-black text-slate-500 transition-all">
                    局部修改
                  </button>
                </motion.div>
              </div>
            )}

            <div className="whitespace-pre-wrap font-serif text-slate-700">{currentData.footer}</div>
          </div>

          {/* AI Suggestion Panel (Floating Right) - itshover style */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -right-[320px] top-[240px] w-72 space-y-6"
          >
            <motion.div 
              whileHover={{ x: -10, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-white/40 shadow-2xl shadow-slate-200/50 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="p-2 bg-primary/10 text-primary rounded-xl">
                  <Sparkles size={18} className="animate-pulse" />
                </div>
                <span className="text-[11px] font-black text-on-surface uppercase tracking-widest">AI 优化建议</span>
              </div>
              <p className="text-[13px] text-slate-600 mb-6 leading-relaxed font-medium relative z-10">检测到描述较为常规。建议补充“政务云容灾备份”的具体案例数据以增强专业可信度。</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-blue-50 text-blue-700 text-[11px] font-black rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm relative z-10"
              >
                采用建议并生成
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Editor Overlay Interaction Layer */}
        <div className="fixed top-24 right-8 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/50 transition-all">
            <ZoomIn size={20} />
          </button>
          <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/50 transition-all">
            <ZoomOut size={20} />
          </button>
          <div className="h-px w-6 bg-slate-200 mx-auto my-1"></div>
          <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/50 transition-all">
            <MessageSquareOff size={20} />
          </button>
        </div>
      </main>

      {/* Bottom Status Bar */}
      <footer className="fixed bottom-0 w-full h-10 bg-white border-t border-slate-200 z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-slate-500">当前章节字数:</span>
            <span className="text-[11px] font-bold text-on-surface">1,245 字</span>
          </div>
          <div className="w-px h-3 bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-slate-500">总字数:</span>
            <span className="text-[11px] font-bold text-on-surface">14,890 字</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-medium text-slate-500">AI 生成占比</span>
            <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="w-[35%] h-full bg-primary rounded-full"></div>
            </div>
            <span className="text-[11px] font-bold text-primary">35%</span>
          </div>
          <div className="w-px h-3 bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
            <span className="text-[11px] font-medium text-slate-500">已于 14:32 自动保存</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
