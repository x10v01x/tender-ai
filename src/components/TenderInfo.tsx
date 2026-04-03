import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  SlidersHorizontal, 
  RefreshCw, 
  Download, 
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
  X,
  ShieldCheck,
  BrainCircuit,
  BarChart3,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { mockTenders } from '../types';
import { cn } from '../lib/utils';

export function TenderInfo() {
  const [selectedId, setSelectedId] = React.useState('01');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterType, setFilterType] = React.useState('全行业');

  const filteredTenders = mockTenders.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         t.agency.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t.id.includes(searchQuery);
    const matchesType = filterType === '全行业' || t.title.includes(filterType.replace('科技信息', '云').replace('工程建设', '建设'));
    // Simple matching for demo: if filter is '科技信息', look for '云' in title.
    return matchesSearch && matchesType;
  });

  const selectedTender = mockTenders.find(t => t.id === selectedId) || filteredTenders[0] || mockTenders[0];

  return (
    <div className="flex h-[calc(100vh-64px)] -m-8">
      {/* Main List Area */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">招标信息列表</h1>
            <p className="text-on-surface-variant/60 text-sm mt-1">发现并跟踪最适合您的项目机会</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-surface-container-high px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:brightness-95 transition-all">
              <ClipboardCheck size={16} /> 批量操作
            </button>
            <button className="bg-gradient-to-br from-primary to-primary-container text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:brightness-105 transition-all shadow-lg shadow-primary/20">
              <Download size={16} /> 导出数据
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <section className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-slate-100 space-y-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                className="w-full bg-surface-container-high border-none rounded-lg pl-10 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="搜索项目名称、招标单位或关键词..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-high rounded-lg text-sm font-medium hover:bg-surface-container-highest transition-colors">
              <SlidersHorizontal size={16} /> 高级筛选
            </button>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-slate-400 mr-2 uppercase tracking-widest">筛选条件</span>
            <button 
              onClick={() => setFilterType('全行业')}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-semibold transition-all",
                filterType === '全行业' ? "bg-primary-container text-white" : "bg-surface-container-high text-on-surface-variant"
              )}
            >
              全行业
            </button>
            {['科技信息', '工程建设', '地区：全国', '金额：100万+'].map(tag => (
              <button 
                key={tag} 
                onClick={() => !tag.includes('：') && setFilterType(tag)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium hover:bg-surface-container-highest transition-all",
                  filterType === tag ? "bg-primary-container text-white" : "bg-surface-container-high text-on-surface-variant"
                )}
              >
                {tag}
              </button>
            ))}
            <div 
              onClick={() => {setSearchQuery(''); setFilterType('全行业');}}
              className="ml-auto flex items-center gap-1 text-primary cursor-pointer hover:underline text-xs font-medium"
            >
              <RefreshCw size={14} /> 重置
            </div>
          </div>
        </section>

        {/* Tender Table */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-600">
              <tr>
                <th className="py-4 px-4 text-left w-10"><input type="checkbox" className="rounded border-slate-300" /></th>
                <th className="py-4 px-2 text-left font-semibold">序号</th>
                <th className="py-4 px-4 text-left font-semibold">项目名称</th>
                <th className="py-4 px-4 text-left font-semibold">招标单位</th>
                <th className="py-4 px-4 text-right font-semibold">预计金额</th>
                <th className="py-4 px-4 text-left font-semibold">地区</th>
                <th className="py-4 px-4 text-left font-semibold">AI匹配</th>
                <th className="py-4 px-4 text-left font-semibold">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredTenders.map((tender) => (
                <tr 
                  key={tender.id}
                  onClick={() => setSelectedId(tender.id)}
                  className={cn(
                    "hover:bg-blue-50/50 transition-colors cursor-pointer group",
                    selectedId === tender.id && "bg-blue-50/80"
                  )}
                >
                  <td className="py-4 px-4"><input type="checkbox" className="rounded border-slate-300" /></td>
                  <td className="py-4 px-2 text-slate-400">{tender.id}</td>
                  <td className={cn(
                    "py-4 px-4 font-bold",
                    tender.status === 'recommended' ? "text-primary" : "text-on-surface"
                  )}>{tender.title}</td>
                  <td className="py-4 px-4 text-slate-600">{tender.agency}</td>
                  <td className="py-4 px-4 text-right font-medium">¥{tender.budget.toLocaleString()}</td>
                  <td className="py-4 px-4">{tender.location}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={cn("h-full rounded-full", tender.matchScore > 80 ? "bg-success" : "bg-primary")}
                          style={{ width: `${tender.matchScore}%` }}
                        ></div>
                      </div>
                      <span className={cn("text-xs font-bold", tender.matchScore > 80 ? "text-success" : "text-primary")}>
                        {tender.matchScore}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={cn(
                      "flex items-center gap-1.5 text-xs font-semibold",
                      tender.status === 'recommended' ? "text-success" : 
                      tender.status === 'pending' ? "text-warning" : "text-slate-400"
                    )}>
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        tender.status === 'recommended' ? "bg-success" : 
                        tender.status === 'pending' ? "bg-warning" : "bg-slate-400"
                      )}></div>
                      {tender.status === 'recommended' ? '推荐' : tender.status === 'pending' ? '待审核' : '已拒绝'}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredTenders.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-20 text-center">
                    <div className="flex flex-col items-center gap-2 text-slate-400">
                      <Search size={48} className="opacity-20 mb-2" />
                      <p className="font-medium">未找到符合条件的项目</p>
                      <button onClick={() => {setSearchQuery(''); setFilterType('全行业');}} className="text-primary text-xs font-bold hover:underline">重置所有筛选</button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          
          <div className="py-6 flex justify-center items-center gap-1 border-t border-slate-50">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-all text-slate-400">
              <ChevronLeft size={18} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">1</button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-all text-sm font-medium">2</button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-all text-sm font-medium">3</button>
            <span className="px-2 text-slate-400">...</span>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-all text-sm font-medium">12</button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-all text-slate-400">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Panel */}
      <div className="w-[380px] bg-white border-l border-slate-100 p-6 overflow-y-auto space-y-6 custom-scrollbar">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">AI 智能匹配分析</h3>
          <X className="text-slate-400 cursor-pointer hover:text-on-surface transition-colors" size={20} />
        </div>

        {/* Match Score Hero */}
        <div className="bg-gradient-to-br from-primary-container to-primary p-6 rounded-2xl text-white shadow-xl shadow-primary/20 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-4xl font-black mb-1">{selectedTender.matchScore}%</div>
            <div className="text-xs font-medium text-blue-100 uppercase tracking-widest">极高匹配度</div>
            <p className="mt-4 text-xs leading-relaxed text-blue-50 opacity-90">
              该项目与您过往3次成功的{selectedTender.title.includes('云') ? '政务云' : '数字化'}建设项目高度吻合，资质要求完全匹配。
            </p>
          </div>
          <BrainCircuit className="absolute -right-4 -bottom-4 text-white/10" size={120} />
        </div>

        {/* Match Breakdown */}
        <div className="space-y-4">
          <div className="bg-surface-container-low p-4 rounded-xl border border-slate-100">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold flex items-center gap-2">
                <ShieldCheck className="text-primary" size={16} /> 资质匹配
              </span>
              <span className="text-xs font-bold text-success">符合 (10/10)</span>
            </div>
            <div className="space-y-2">
              {[
                { label: '系统集成一级资质', ok: true },
                { label: 'CMMI5 认证证书', ok: true }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs text-slate-600">
                  <span>{item.label}</span>
                  <CheckCircle2 className="text-success" size={14} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-low p-4 rounded-xl border border-slate-100">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold flex items-center gap-2">
                <BrainCircuit className="text-primary" size={16} /> 能力画像
              </span>
              <span className="text-xs font-bold text-success">契合</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {['高可用架构', 'PB级数据处理', '云安全防护', '政务云经验'].map(tag => (
                <span key={tag} className="bg-white px-2 py-1.5 rounded-lg text-[10px] text-center border border-slate-100 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-low p-4 rounded-xl border border-slate-100">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold flex items-center gap-2">
                <BarChart3 className="text-primary" size={16} /> 竞对分析
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              预计将有5-8家竞争对手参与。根据以往经验，您的技术标优势明显，建议在商务报价上采取稳健策略。
            </p>
            <div className="flex items-center gap-2 text-primary font-bold text-xs cursor-pointer hover:underline">
              查看完整竞争对手报告 <ArrowRight size={14} />
            </div>
          </div>
        </div>

        <button className="w-full bg-surface-container-high py-3 rounded-xl font-bold text-sm hover:bg-surface-container-highest transition-all">
          生成预投标文件
        </button>
      </div>
    </div>
  );
}
