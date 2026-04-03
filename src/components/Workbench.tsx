import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  TrendingUp, 
  Clock, 
  Rocket, 
  CheckCircle2, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Plus,
  Sparkles,
  ArrowUpRight,
  Zap
} from 'lucide-react';
import { mockTenders } from '../types';
import { cn } from '../lib/utils';

export function Workbench() {
  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Banner - High-end Glassmorphism & Animation */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary-container p-10 text-white shadow-2xl shadow-primary/20"
      >
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest"
            >
              <Sparkles size={12} className="text-yellow-300" />
              AI 助手已就绪
            </motion.div>
            <h2 className="text-3xl font-black tracking-tight">早上好，张经理</h2>
            <p className="text-blue-100/80 flex items-center gap-2 text-sm">
              <Calendar size={16} />
              您今天有 <span className="text-white font-bold underline underline-offset-4 decoration-yellow-400">5 项待办任务</span> 需要处理，请及时查看。
            </p>
          </div>
          
          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-sm font-bold transition-all flex items-center gap-2"
            >
              查看日程 <ArrowUpRight size={16} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-2xl bg-white text-primary text-sm font-black shadow-xl transition-all flex items-center gap-2"
            >
              <Zap size={18} className="fill-primary" /> 开始标书制作
            </motion.button>
          </div>
        </div>

        {/* Decorative SVGs (svgl style) */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"
        ></motion.div>
      </motion.section>

      {/* Stats Grid - itshover style */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: TrendingUp, label: '今日新增招标', value: '42', trend: '+12%', color: 'blue', delay: 0.1 },
          { icon: Clock, label: '待审核标书', value: '12', trend: '待处理', color: 'amber', delay: 0.2 },
          { icon: Rocket, label: '进行中项目', value: '8', trend: '执行中', color: 'indigo', delay: 0.3 },
          { icon: CheckCircle2, label: '本月中标率', value: '75%', trend: '高效率', color: 'emerald', delay: 0.4 },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: stat.delay, duration: 0.5 }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
              borderColor: "rgba(var(--primary), 0.2)"
            }}
            className="group bg-surface-container-lowest p-7 rounded-3xl shadow-sm border border-slate-100/80 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-6">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                className={cn(
                  "p-3 rounded-2xl transition-colors duration-300",
                  stat.color === 'blue' ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white" :
                  stat.color === 'amber' ? "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white" :
                  stat.color === 'indigo' ? "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white" :
                  "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white"
                )}
              >
                <stat.icon size={24} className="transition-transform duration-500" />
              </motion.div>
              <span className={cn(
                "text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 tracking-tighter",
                stat.color === 'blue' ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-400'
              )}>
                {stat.trend}
              </span>
            </div>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">{stat.label}</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-4xl font-black text-on-surface tracking-tighter">{stat.value}</h3>
              <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Table Section - Premium Polish */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-surface-container-lowest rounded-3xl shadow-premium border border-slate-100/50 overflow-hidden"
      >
        <div className="px-8 py-7 flex items-center justify-between border-b border-slate-50">
          <div className="space-y-1">
            <h3 className="text-xl font-black text-on-surface flex items-center gap-3">
              最近招标信息
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </h3>
            <p className="text-xs text-slate-400 font-medium tracking-tight">基于您的业务偏好，AI 实时筛选出的高价值项目</p>
          </div>
          <button className="group flex items-center gap-2 text-sm font-bold text-primary hover:bg-primary/5 px-5 py-2.5 rounded-2xl transition-all">
            查看全部 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
              <tr>
                <th className="px-8 py-5">项目名称</th>
                <th className="px-8 py-5">招标单位</th>
                <th className="px-8 py-5">预算金额 (¥)</th>
                <th className="px-8 py-5">截止日期</th>
                <th className="px-8 py-5">AI 匹配度</th>
                <th className="px-8 py-5 text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockTenders.map((tender, i) => (
                <motion.tr 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (i * 0.05) }}
                  className="hover:bg-slate-50/80 transition-all group cursor-pointer"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-2.5 h-2.5 rounded-full ring-4 ring-opacity-20",
                        tender.status === 'recommended' ? 'bg-emerald-500 ring-emerald-500' : 
                        tender.status === 'pending' ? 'bg-amber-500 ring-amber-500' : 'bg-slate-300 ring-slate-300'
                      )}></div>
                      <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{tender.title}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-500 font-medium">{tender.agency}</td>
                  <td className="px-8 py-6 text-sm font-mono font-black text-slate-700">
                    {tender.budget.toLocaleString()}
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-400 font-medium">{tender.deadline}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${tender.matchScore}%` }}
                          transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                          className={cn(
                            "h-full rounded-full",
                            tender.matchScore > 90 ? "bg-primary" : "bg-blue-400"
                          )}
                        ></motion.div>
                      </div>
                      <span className="text-[11px] font-black text-primary w-8">{tender.matchScore}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <motion.button 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.1)" }}
                      className="p-2 text-slate-300 hover:text-primary rounded-xl transition-colors"
                    >
                      <MoreHorizontal size={22} />
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-slate-50/20 flex justify-center border-t border-slate-50">
          <div className="flex gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:bg-white hover:text-primary hover:border-primary/30 transition-all shadow-sm">
              <ChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-black text-sm shadow-lg shadow-primary/20">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-white hover:text-primary hover:border-primary/30 transition-all text-sm font-bold shadow-sm">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-white hover:text-primary hover:border-primary/30 transition-all text-sm font-bold shadow-sm">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:bg-white hover:text-primary hover:border-primary/30 transition-all shadow-sm">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Floating Action Button - High Interaction */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-12 right-12 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-white rounded-2xl shadow-2xl shadow-primary/40 flex items-center justify-center group z-50"
      >
        <Plus className="group-hover:rotate-90 transition-transform duration-500" size={32} />
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-400 rounded-full border-4 border-white animate-bounce"></div>
      </motion.button>
    </div>
  );
}
