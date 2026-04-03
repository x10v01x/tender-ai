import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  XCircle,
  Share2,
  Printer,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Check
} from 'lucide-react';
import { cn } from '../lib/utils';

export function AIScreening() {
  const [activeId, setActiveId] = React.useState('01');

  const projects = [
    { 
      id: '01', 
      title: '2024年数字化转型咨询服务采购项目', 
      score: 92, 
      tags: ['高契合度', '核心优势突出'], 
      location: '上海市', 
      budget: '500万+', 
      time: '2h前',
      projectId: '2024-DX-089',
      deadline: '2024-05-15',
      agency: '上海市信息技术发展中心',
      type: '咨询服务类',
      industry: 'IT/数字化',
      analysis: [
        { label: '具备“数字化转型咨询”甲级资质要求', status: '完全符合', ok: true },
        { label: '近三年相关政务咨询业绩 > 3项', status: '符合 (现有5项)', ok: true },
        { label: '驻场团队专家人数要求 > 10人', status: '不符合 (缺2人)', ok: false },
      ],
      risk: '发现已有 3 家历史供应商参与关注该项目，其中 XX 咨询有较强的本地服务优势。',
      advice: '本项目与公司年度战略“政府数字化”高度契合。虽然驻场人数略显不足，但可通过外部专家引入解决。整体利润空间预估在 25% 以上，极力推荐参与。'
    },
    { 
      id: '02', 
      title: '智慧政务一体化平台二期建设项目', 
      score: 68, 
      tags: ['资质一般'], 
      location: '南京市', 
      budget: '1200万', 
      time: '5h前',
      projectId: '2024-ZW-012',
      deadline: '2024-06-20',
      agency: '南京市政务服务中心',
      type: '系统集成类',
      industry: '政务信息化',
      analysis: [
        { label: '具备“电子与智能化工程”一级资质', status: '不符合 (我司为二级)', ok: false },
        { label: '同类项目业绩 > 5000万', status: '符合 (现有8000万)', ok: true },
        { label: '本地化服务能力要求', status: '不符合 (需在南京设点)', ok: false },
      ],
      risk: '资质门槛较高，且明确要求本地化服务，我司目前在南京无常驻团队。',
      advice: '虽然项目金额巨大，但资质和本地化服务是硬伤。建议作为联合体成员参与，或放弃此次投标。'
    },
    { 
      id: '03', 
      title: '某部委云数据中心硬件扩容招标', 
      score: 85, 
      tags: ['技术契合'], 
      location: '北京市', 
      budget: '800万', 
      time: '1天前',
      projectId: '2024-HW-045',
      deadline: '2024-05-30',
      agency: '国家某部委信息中心',
      type: '硬件采购类',
      industry: '基础设施',
      analysis: [
        { label: '国产化服务器适配能力', status: '完全符合', ok: true },
        { label: '信创名录内产品要求', status: '符合 (全线入围)', ok: true },
        { label: '快速交付能力 (15天内)', status: '符合 (备货充足)', ok: true },
      ],
      risk: '部委项目审核极其严苛，对交付时间要求极高，任何延期都可能导致列入黑名单。',
      advice: '我司产品在信创名录内有极高知名度，技术参数完全覆盖。建议重点关注交付流程，确保万无一失。'
    },
  ];

  const activeProject = projects.find(p => p.id === activeId) || projects[0];

  return (
    <div className="flex h-[calc(100vh-64px)] -m-8 overflow-hidden bg-surface">
      {/* Left Sidebar: Project List */}
      <section className="w-[380px] bg-surface-container-low flex flex-col border-r border-slate-200/50 shadow-inner">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-black text-on-surface flex items-center gap-2 uppercase tracking-widest">
              <Filter className="text-primary" size={16} />
              待审核项目 ({projects.length})
            </h3>
            <span className="flex items-center gap-1.5 text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full font-black">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              LIVE
            </span>
          </div>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={16} />
            <input 
              className="w-full pl-11 pr-4 py-3 bg-surface-container-highest border-2 border-transparent rounded-2xl text-sm focus:border-primary/20 focus:bg-white transition-all shadow-sm"
              placeholder="搜索项目名称..."
              type="text"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4 custom-scrollbar">
          {projects.map((p, idx) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setActiveId(p.id)}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "p-5 rounded-2xl transition-all cursor-pointer relative group border-2",
                activeId === p.id 
                  ? "bg-white border-primary/20 shadow-xl shadow-primary/5" 
                  : "bg-surface-container-lowest border-transparent hover:border-slate-200 hover:shadow-lg"
              )}
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className={cn(
                  "text-[14px] font-bold line-clamp-2 leading-snug pr-10 transition-colors",
                  activeId === p.id ? "text-primary" : "text-on-surface"
                )}>{p.title}</h4>
                <div className="absolute right-5 top-5 w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-100" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
                    <motion.circle 
                      initial={{ strokeDashoffset: 126 }}
                      animate={{ strokeDashoffset: 126 - (126 * p.score) / 100 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={cn(p.score > 80 ? "text-green-500" : "text-orange-400")}
                      cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" 
                      strokeDasharray="126" 
                      strokeWidth="4"
                      strokeLinecap="round"
                    ></motion.circle>
                  </svg>
                  <span className="absolute text-[11px] font-black">{p.score}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(tag => (
                  <span key={tag} className={cn(
                    "text-[10px] px-2.5 py-1 rounded-lg font-bold tracking-tight",
                    tag === '高契合度' ? "bg-green-50 text-green-700" : 
                    tag === '核心优势突出' ? "bg-blue-50 text-blue-700" : "bg-orange-50 text-orange-700"
                  )}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold">
                <span className="flex items-center gap-1"><TrendingUp size={12} /> {p.budget}</span>
                <span>{p.time}更新</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-6 bg-white/50 border-t border-slate-100 grid grid-cols-3 gap-3">
          <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center py-3 bg-blue-50 text-blue-700 rounded-xl font-black transition-all">
            <CheckCircle2 size={20} />
            <span className="text-[10px] mt-1 uppercase tracking-widest">通过</span>
          </motion.button>
          <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center py-3 text-slate-400 hover:bg-slate-100 rounded-xl font-black transition-all">
            <Clock size={20} />
            <span className="text-[10px] mt-1 uppercase tracking-widest">待定</span>
          </motion.button>
          <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center py-3 text-slate-400 hover:bg-slate-100 rounded-xl font-black transition-all">
            <XCircle size={20} />
            <span className="text-[10px] mt-1 uppercase tracking-widest">拒绝</span>
          </motion.button>
        </div>
      </section>

      {/* Right Panel: Details */}
      <section className="flex-1 bg-surface flex flex-col overflow-y-auto custom-scrollbar relative">
        <div className="px-10 pt-10 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-400">
            <span className="hover:text-primary cursor-pointer transition-colors">智能筛选</span>
            <ChevronRight size={14} />
            <span className="text-slate-900">项目详情分析</span>
          </div>
          <div className="flex gap-3">
            <motion.button whileHover={{ scale: 1.1 }} className="p-3 text-slate-400 hover:text-primary bg-white rounded-2xl shadow-sm border border-slate-100 transition-all"><Share2 size={20} /></motion.button>
            <motion.button whileHover={{ scale: 1.1 }} className="p-3 text-slate-400 hover:text-primary bg-white rounded-2xl shadow-sm border border-slate-100 transition-all"><Printer size={20} /></motion.button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="px-10 py-8 space-y-8"
          >
            {/* Basic Info Card */}
            <div className="bg-white p-8 rounded-3xl shadow-premium border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-lg tracking-widest shadow-lg shadow-primary/20">PROJECT ID: {activeProject.projectId}</span>
                    <span className="flex items-center gap-2 text-[11px] text-slate-400 font-bold">
                      <Clock size={14} className="text-primary" /> 截标时间: {activeProject.deadline}
                    </span>
                  </div>
                  <h2 className="text-3xl font-black text-on-surface tracking-tight leading-tight max-w-2xl">{activeProject.title}</h2>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-2">估算金额</p>
                  <p className="text-3xl font-black text-primary tracking-tighter">¥ {activeProject.budget}</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8 relative z-10">
                {[
                  { label: '招标单位', value: activeProject.agency },
                  { label: '项目地区', value: activeProject.location },
                  { label: '项目类型', value: activeProject.type },
                  { label: '所属行业', value: activeProject.industry },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{item.label}</p>
                    <p className="text-[14px] font-bold text-on-surface">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Analysis Section */}
            <div className="grid grid-cols-12 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="col-span-4 bg-white p-8 rounded-3xl shadow-premium border border-slate-100 flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">AI 综合匹配度</h3>
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-50" cx="96" cy="96" fill="transparent" r="84" stroke="currentColor" strokeWidth="14"></circle>
                    <motion.circle 
                      initial={{ strokeDashoffset: 528 }}
                      animate={{ strokeDashoffset: 528 - (528 * activeProject.score) / 100 }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className={cn(activeProject.score > 80 ? "text-primary" : "text-orange-400")}
                      cx="96" cy="96" fill="transparent" r="84" stroke="currentColor" 
                      strokeDasharray="528" 
                      strokeLinecap="round"
                      strokeWidth="14"
                    ></motion.circle>
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-5xl font-black text-on-surface tracking-tighter">{activeProject.score}</span>
                    <span className="text-[11px] text-slate-400 font-black tracking-widest">MATCH SCORE</span>
                  </div>
                </div>
                <p className="mt-8 text-[13px] text-green-600 font-black flex items-center gap-2">
                  <TrendingUp size={18} /> 高于同类项目 15%
                </p>
              </motion.div>

              <div className="col-span-8 bg-white p-8 rounded-3xl shadow-premium border border-slate-100">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">资质匹配分析</h3>
                <div className="space-y-4">
                  {activeProject.analysis.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-2xl border-2 transition-all",
                        item.ok ? "bg-green-50/30 border-green-100/50" : "bg-red-50/30 border-red-100/50"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-8 h-8 rounded-xl text-white flex items-center justify-center shadow-lg",
                          item.ok ? "bg-green-500 shadow-green-500/20" : "bg-error shadow-error/20"
                        )}>
                          {item.ok ? <Check size={18} /> : <XCircle size={18} />}
                        </div>
                        <span className="text-[14px] font-bold text-slate-700">{item.label}</span>
                      </div>
                      <span className={cn("text-[11px] font-black uppercase tracking-widest", item.ok ? "text-green-600" : "text-error")}>
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Risk & Advice */}
            <div className="bg-white p-8 rounded-3xl shadow-premium border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-xl"><AlertTriangle size={20} /></div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">风险提示与建议</h3>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div className="p-6 bg-orange-50/50 rounded-2xl border-l-4 border-orange-400 space-y-2">
                  <p className="text-[14px] font-black text-orange-900 uppercase tracking-widest">竞争风险</p>
                  <p className="text-sm text-orange-700 leading-relaxed font-medium">{activeProject.risk}</p>
                </div>
                <div className="p-6 bg-blue-50/50 rounded-2xl border-l-4 border-blue-400 space-y-2">
                  <p className="text-[14px] font-black text-blue-900 uppercase tracking-widest">建议理由</p>
                  <p className="text-sm text-blue-700 leading-relaxed font-medium">{activeProject.advice}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Sticky Bottom Action Bar */}
        <div className="mt-auto sticky bottom-0 p-8 bg-white/80 backdrop-blur-xl border-t border-slate-100 flex items-center justify-between z-20">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">AI 状态</span>
              <span className="text-xs font-bold text-slate-900">全维度解析已完成</span>
            </div>
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <motion.img 
                  key={i}
                  whileHover={{ y: -5, zIndex: 10 }}
                  src={`https://picsum.photos/seed/ai${i}/100/100`} 
                  className="w-10 h-10 rounded-2xl border-4 border-white shadow-lg cursor-pointer" 
                  referrerPolicy="no-referrer" 
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3.5 rounded-2xl border-2 border-error text-error text-sm font-black hover:bg-red-50 transition-all uppercase tracking-widest">拒绝此项</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3.5 rounded-2xl bg-surface-container-high text-on-surface text-sm font-black hover:bg-surface-container-highest transition-all uppercase tracking-widest">标记待定</motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(var(--primary), 0.4)" }} 
              whileTap={{ scale: 0.95 }} 
              className="px-10 py-3.5 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white text-sm font-black shadow-2xl shadow-primary/20 hover:brightness-110 transition-all flex items-center gap-3 uppercase tracking-widest"
            >
              <CheckCircle2 size={20} /> 确认通过
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
