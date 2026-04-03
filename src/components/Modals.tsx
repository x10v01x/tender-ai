import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  X, 
  Lightbulb, 
  Bolt,
  Mic,
  ChevronDown
} from 'lucide-react';
import { cn } from '../lib/utils';

export function RefinementModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/10 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-[500px] bg-surface-container-lowest rounded-2xl shadow-premium overflow-hidden flex flex-col relative border border-white/40"
          >
            <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Sparkles className="text-primary" size={20} />
                <h2 className="text-sm font-semibold tracking-tight text-on-surface">AI 智能修改内容</h2>
              </div>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors group">
                <X className="text-slate-400 group-hover:text-on-surface" size={18} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">选中原文</span>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-[13px] leading-[1.6] text-slate-800 font-medium">
                    本公司在过往三年内成功完成了超过50个大型基建项目的招投标工作，具备极高的行业专业度。我们致力于提供高质量的工程服务，确保项目按时按质交付。
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">修改意见</label>
                  <span className="text-[10px] text-slate-300">AI 将根据您的指示重新润色</span>
                </div>
                <div className="relative group">
                  <textarea 
                    className="w-full bg-slate-50 border-0 rounded-xl p-4 text-[13px] placeholder:text-slate-300 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="例如：使语言更专业 / 缩短这段内容 / 增加业绩描述..."
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {['更专业', '更精简', '扩写内容'].map(tag => (
                  <button key={tag} className="px-3 py-1.5 rounded-full bg-slate-100 text-[12px] font-medium text-slate-600 hover:bg-primary-container hover:text-white transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-6 py-5 bg-slate-50/50 flex items-center justify-end gap-3 border-t border-slate-100">
              <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-100 transition-colors">取消</button>
              <button className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-br from-primary to-primary-container shadow-md shadow-primary/20 hover:brightness-105 transition-all flex items-center gap-2">
                确认修改 <Bolt size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function RewriteModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/10 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-[600px] bg-surface-container-lowest rounded-xl shadow-premium overflow-hidden border border-slate-100"
          >
            <div className="px-8 py-6 flex justify-between items-center border-b border-slate-100">
              <div className="flex flex-col gap-0.5">
                <h2 className="text-lg font-bold text-on-surface tracking-tight">企业核心优势说明</h2>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Chapter Intelligence</span>
                </div>
              </div>
              <div className="bg-slate-100 px-3 py-1 rounded-full flex items-center gap-2">
                <span className="text-[11px] font-bold text-slate-600">850 字</span>
              </div>
            </div>

            <div className="px-8 py-8 space-y-8">
              <div className="space-y-4">
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">重写范围与逻辑</p>
                <div className="grid grid-cols-1 gap-3">
                  <label className="group relative flex items-center p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer">
                    <input type="radio" name="rewrite_type" defaultChecked className="w-4 h-4 text-primary" />
                    <div className="ml-4">
                      <span className="block text-sm font-semibold text-on-surface">重新生成全部内容</span>
                      <span className="block text-xs text-slate-500">基于标书背景与核心要求进行全篇重塑</span>
                    </div>
                  </label>
                  <label className="group relative flex flex-col p-4 rounded-xl border border-primary/20 bg-primary/5 transition-all cursor-pointer">
                    <div className="flex items-center mb-3">
                      <input type="radio" name="rewrite_type" className="w-4 h-4 text-primary" />
                      <span className="ml-4 text-sm font-semibold text-on-surface">基于指令优化重写</span>
                    </div>
                    <div className="relative">
                      <textarea 
                        className="w-full bg-white/50 border-0 rounded-lg text-sm placeholder:text-slate-300 p-3 focus:ring-2 focus:ring-primary/20 resize-none"
                        placeholder="输入具体的修改意见，例如：'强调我司在大数据领域的甲级资质...'"
                        rows={3}
                      />
                      <div className="absolute bottom-2 right-2 opacity-50">
                        <Mic size={18} />
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">语气风格偏好</p>
                <div className="flex gap-2">
                  {['专业', '简洁', '详细'].map((tone, i) => (
                    <button key={tone} className={cn(
                      "flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all",
                      i === 0 ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    )}>
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">模板参考 (可选)</p>
                <div className="relative">
                  <select className="w-full h-12 pl-4 pr-10 bg-slate-50 border-0 rounded-xl text-sm appearance-none focus:ring-2 focus:ring-primary/20">
                    <option>标准商务标书模版 v2.0</option>
                    <option>政企采购类专用模版</option>
                    <option>技术服务类框架协议</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>
            </div>

            <div className="px-8 py-6 bg-slate-50 flex justify-end items-center gap-4">
              <button onClick={onClose} className="px-6 py-2.5 rounded-lg text-slate-500 font-semibold text-sm hover:bg-slate-200 transition-all">取消</button>
              <button className="px-8 py-2.5 rounded-lg bg-gradient-to-br from-primary to-primary-container text-white font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-105 transition-all flex items-center gap-2">
                <Sparkles size={18} /> 开始生成
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
