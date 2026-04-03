import React from 'react';
import { motion } from 'motion/react';
import { 
  Download, 
  FileText, 
  History, 
  Printer, 
  ZoomIn, 
  Search,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';

export function DocumentPreview() {
  return (
    <div className="bg-[#F5F5F7] min-h-screen">
      {/* Preview Area Header */}
      <div className="max-w-[1200px] mx-auto px-16 pt-8 flex justify-between items-end">
        <div>
          <h2 className="text-sm font-semibold text-slate-400 tracking-wider">PREVIEW MODE</h2>
          <h1 className="text-2xl font-bold text-on-surface">文档预览</h1>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-200/50 rounded-full">
            <FileText size={14} />
            <span>240 页</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-200/50 rounded-full">
            <Search size={14} />
            <span>1.2 MB</span>
          </div>
        </div>
      </div>

      {/* A4 Preview Container */}
      <div className="max-w-[1200px] mx-auto px-16 py-10 flex gap-12 items-start justify-center overflow-x-auto custom-scrollbar">
        {/* Page 1: Cover */}
        <div className="flex-none flex flex-col gap-4 items-center">
          <div className="a4-page relative overflow-hidden flex flex-col items-center p-[40mm]">
            <div className="w-24 h-24 mb-16 grayscale opacity-50">
              <img src="https://picsum.photos/seed/logo/200/200" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full h-[1px] bg-slate-100 mb-12"></div>
            <div className="text-center">
              <h1 className="text-[32px] font-bold text-on-surface leading-tight mb-4">2024年政务云采购项目</h1>
              <h2 className="text-[24px] font-medium text-slate-400 tracking-[4px]">技术标书</h2>
            </div>
            <div className="mt-auto w-full space-y-4 text-sm text-slate-500">
              {[
                { label: '投标人', value: '智标人工智能科技有限公司' },
                { label: '招标编号', value: 'GZ-2024-ZHIBIAO-001' },
                { label: '提交日期', value: '2024年11月24日' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between border-b border-slate-50 pb-2">
                  <span>{item.label}</span>
                  <span className="font-semibold text-on-surface">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] rotate-[-30deg]">
              <span className="text-[80px] font-black whitespace-nowrap">智标AI PREVIEW</span>
            </div>
          </div>
          <div className="text-xs font-semibold text-slate-400 opacity-60">第 1 页 / 总 240 页</div>
        </div>

        {/* Page 2: TOC Preview */}
        <div className="flex-none flex flex-col gap-4 items-center opacity-40 hover:opacity-100 transition-opacity">
          <div className="a4-page relative overflow-hidden flex flex-col p-[25mm]">
            <h3 className="text-[20px] font-bold text-center mb-12">目 录</h3>
            <div className="space-y-6">
              {[
                { ch: '第一章', title: '项目背景与需求分析', page: '01' },
                { ch: '第二章', title: '整体技术架构设计', page: '15' },
                { ch: '第三章', title: '安全保障体系', page: '42' },
                { ch: '第四章', title: '项目进度与管理计划', page: '88' },
              ].map((item, i) => (
                <div key={i} className="flex items-end gap-2 group cursor-pointer">
                  <span className="font-bold text-sm">{item.ch}</span>
                  <span className="text-sm">{item.title}</span>
                  <div className="flex-grow border-b border-dotted border-slate-200 mb-1"></div>
                  <span className="text-sm">{item.page}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 space-y-4">
              <div className="h-4 w-full bg-slate-50 rounded"></div>
              <div className="h-4 w-5/6 bg-slate-50 rounded"></div>
              <div className="h-4 w-4/6 bg-slate-50 rounded"></div>
            </div>
          </div>
          <div className="text-xs font-semibold text-slate-400 opacity-60">第 2 页</div>
        </div>
      </div>

      {/* Bottom History List */}
      <section className="max-w-[1200px] mx-auto px-16 pb-20 mt-12">
        <div className="flex items-center gap-3 mb-6">
          <History className="text-primary" size={20} />
          <h3 className="text-lg font-bold text-on-surface">导出历史记录</h3>
        </div>
        <div className="bg-surface-container-lowest rounded-xl shadow-premium border border-slate-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">导出时间</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">导出人</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">文件大小</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { time: '2024-11-24 14:32', version: 'V2.1 最终确认版', user: '张皓 (项目经理)', initial: 'ZH', size: '1.25 MB' },
                { time: '2024-11-23 10:15', version: 'V1.5 内部初稿', user: '李悦 (技术支持)', initial: 'LY', size: '842 KB' },
              ].map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-on-surface">{item.time}</span>
                      <span className="text-[11px] text-slate-400">{item.version}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px] font-bold text-primary">{item.initial}</div>
                      <span className="text-sm font-medium text-on-surface">{item.user}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-500">{item.size}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-primary text-xs font-bold hover:bg-primary/5 rounded-lg transition-all">
                      <Download size={14} /> 下载
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Floating Actions */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3">
        <button className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-slate-500 hover:text-primary transition-all">
          <ZoomIn size={20} />
        </button>
        <button className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-slate-500 hover:text-primary transition-all">
          <Printer size={20} />
        </button>
      </div>
    </div>
  );
}
