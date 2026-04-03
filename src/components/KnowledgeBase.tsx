import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  CloudUpload, 
  Plus, 
  FileText, 
  Edit3, 
  Eye, 
  BarChart,
  DraftingCompass,
  ShieldCheck,
  Stethoscope,
  School
} from 'lucide-react';
import { cn } from '../lib/utils';

const templates = [
  { id: 1, title: '通用技术标模版 v2.0', tags: ['科技/IT', '基础设施'], icon: FileText, color: 'blue', usage: '1,204', time: '2天前' },
  { id: 2, title: '建筑工程施组模版', tags: ['建筑业', '标准工程'], icon: DraftingCompass, color: 'indigo', usage: '856', time: '1周前' },
  { id: 3, title: '政务安防项目模版', tags: ['政务', '安防系统'], icon: ShieldCheck, color: 'teal', usage: '2,431', time: '3小时前' },
  { id: 4, title: '医疗设备采购模版', tags: ['医疗', '供应链'], icon: Stethoscope, color: 'orange', usage: '540', time: '昨天' },
  { id: 5, title: '教育信息化集成方案', tags: ['教育', '系统集成'], icon: School, color: 'rose', usage: '182', time: '1个月前' },
];

export function KnowledgeBase() {
  const [activeTab, setActiveTab] = React.useState('标书模板');

  const tabs = ['标书模板', '企业资质', '历史案例', '素材库'];

  const filteredTemplates = templates.filter(t => {
    if (activeTab === '标书模板') return true;
    if (activeTab === '企业资质') return t.tags.includes('政务') || t.tags.includes('医疗');
    return true;
  });

  return (
    <div className="max-w-[1400px] mx-auto p-12">
      {/* Tabs Section */}
      <div className="flex items-center gap-8 mb-10 border-b border-slate-200">
        {tabs.map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "pb-4 text-[15px] transition-all relative",
              activeTab === tab 
                ? "font-semibold text-primary border-b-2 border-primary" 
                : "font-medium text-slate-500 hover:text-slate-900"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex gap-8">
        {/* Grid Area */}
        <div className="flex-1">
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6">
            {filteredTemplates.map((template, i) => (
              <motion.div 
                key={template.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-surface-container-lowest rounded-xl p-6 shadow-premium border border-transparent hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "h-12 w-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                    `bg-${template.color}-50 text-${template.color}-600`
                  )}>
                    <template.icon size={28} />
                  </div>
                  <div className="flex gap-1">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors"><Edit3 size={18} /></button>
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors"><Eye size={18} /></button>
                  </div>
                </div>
                <h3 className="text-on-surface font-bold text-lg mb-2">{template.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-surface-container text-on-surface-variant text-[11px] font-semibold rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <BarChart className="text-slate-400" size={16} />
                    <span className="text-sm font-medium text-slate-500">{template.usage}次使用</span>
                  </div>
                  <span className="text-[11px] text-slate-400">更新于 {template.time}</span>
                </div>
              </motion.div>
            ))}
            
            <button className="flex flex-col items-center justify-center gap-4 bg-transparent border-2 border-dashed border-slate-200 rounded-xl hover:border-primary hover:bg-white transition-all duration-300 min-h-[220px]">
              <div className="h-12 w-12 rounded-full bg-surface-container flex items-center justify-center text-slate-500">
                <Plus size={32} />
              </div>
              <span className="text-sm font-bold text-slate-500">添加{activeTab}</span>
            </button>
          </div>
        </div>

        {/* Sidebar Preview */}
        <aside className="w-[340px] sticky top-28 h-fit hidden 2xl:block">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-premium border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold">模板详情预览</h2>
              <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded uppercase">Active</span>
            </div>
            <div className="aspect-[3/4] w-full bg-slate-100 rounded-lg mb-6 overflow-hidden border border-slate-200 relative">
              <img 
                src="https://picsum.photos/seed/doc/400/600" 
                alt="Document Preview" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">模版名称</label>
                <p className="text-[15px] font-bold text-on-surface">通用技术标模版 v2.0</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">文件格式</label>
                  <div className="flex items-center gap-2">
                    <FileText className="text-blue-500" size={16} />
                    <span className="text-sm font-semibold">.DOCX</span>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">文件大小</label>
                  <span className="text-sm font-semibold">4.2 MB</span>
                </div>
              </div>
              <button className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm shadow-sm hover:brightness-105 active:scale-[0.98] transition-all">
                立即使用此模板
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Stats Bar */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { label: '累计模板调用', value: '3,842', color: 'primary' },
          { label: '企业私有资质', value: '124', color: 'slate-900' },
          { label: '历史成功案例', value: '1.2k', color: 'slate-900' },
          { label: 'AI 生成准确率', value: '98.2%', color: 'slate-900' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className={cn("text-[44px] font-black leading-none tracking-tighter", `text-${stat.color}`)}>{stat.value}</span>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
