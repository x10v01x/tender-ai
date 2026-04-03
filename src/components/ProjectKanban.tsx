import React from 'react';
import { motion } from 'motion/react';
import { 
  MoreVertical, 
  Calendar, 
  PlusCircle, 
  MoreHorizontal,
  CheckCircle2,
  AlertCircle,
  Bolt,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

const columns = [
  { id: 'todo', title: '待开始', color: '#8E8E93', count: 3 },
  { id: 'in-progress', title: '进行中', color: '#004e9f', count: 2 },
  { id: 'review', title: '待审核', color: '#FF9500', count: 1 },
  { id: 'done', title: '已完成', color: '#34C759', count: 4 },
];

const tasks = [
  { id: 1, column: 'todo', title: '2024智慧城市二期', desc: '负责前端界面设计与交互逻辑开发，需符合最新的设计规范。', date: '2024-12-05', user: 'https://picsum.photos/seed/u1/50/50' },
  { id: 2, column: 'todo', title: '能源监测系统投标', desc: '', date: '2024-12-10', user: 'https://picsum.photos/seed/u2/50/50' },
  { id: 3, column: 'in-progress', title: '2024政务云', desc: '目前正在进行核心架构的云端部署与调优测试。', progress: 65, date: '2024-11-20', users: ['https://picsum.photos/seed/u3/50/50', 'https://picsum.photos/seed/u4/50/50'] },
  { id: 4, column: 'in-progress', title: 'AI 智能评标引擎', desc: '', progress: 32, date: '2024-12-28', user: 'https://picsum.photos/seed/u5/50/50' },
  { id: 5, column: 'review', title: '教育数字化改造', desc: '一期验收文档已上传，等待技术总监复核评分结果。', urgent: true, date: '2024-11-15', user: 'https://picsum.photos/seed/u6/50/50' },
  { id: 6, column: 'done', title: '省公安厅采购项目', desc: '', date: '2024-11-01', user: 'https://picsum.photos/seed/u7/50/50', archived: true },
];

export function ProjectKanban() {
  const [taskList, setTaskList] = React.useState(tasks);

  const moveTask = (taskId: number, direction: 'left' | 'right') => {
    setTaskList(prev => prev.map(task => {
      if (task.id === taskId) {
        const currentIndex = columns.findIndex(c => c.id === task.column);
        const nextIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;
        if (nextIndex >= 0 && nextIndex < columns.length) {
          return { ...task, column: columns[nextIndex].id };
        }
      }
      return task;
    }));
  };

  return (
    <div className="p-10 flex-1 overflow-x-auto h-full">
      <div className="flex gap-8 h-full items-start min-w-max">
        {columns.map((col) => (
          <div key={col.id} className="w-[300px] flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: col.color }}></div>
                <h3 className="text-sm font-bold tracking-wide" style={{ color: col.color }}>{col.title}</h3>
                <span className="bg-surface-container px-2 py-0.5 rounded text-[10px] font-bold text-on-surface-variant">
                  {taskList.filter(t => t.column === col.id).length}
                </span>
              </div>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div className="space-y-4">
              {taskList.filter(t => t.column === col.id).map((task) => (
                <motion.div 
                  key={task.id}
                  layoutId={String(task.id)}
                  className={cn(
                    "bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-transparent hover:border-primary/10 hover:shadow-md transition-all group cursor-pointer relative overflow-hidden",
                    task.archived && "opacity-75 grayscale-[0.2]"
                  )}
                >
                  {col.id === 'in-progress' && <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>}
                  <div className="flex justify-between items-start mb-3">
                    <h4 className={cn(
                      "text-[15px] font-bold text-on-surface group-hover:text-primary transition-colors",
                      task.archived && "line-through decoration-on-surface-variant/30"
                    )}>{task.title}</h4>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); moveTask(task.id, 'left'); }}
                        className="p-1 hover:bg-slate-100 rounded text-slate-400"
                      >
                        <ChevronLeft size={14} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); moveTask(task.id, 'right'); }}
                        className="p-1 hover:bg-slate-100 rounded text-slate-400"
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                  {task.desc && <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">{task.desc}</p>}
                  
                  {task.progress !== undefined && (
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        <span>进度</span>
                        <span>{task.progress}%</span>
                      </div>
                      <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary-container h-full rounded-full"
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {task.urgent && (
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="text-warning" size={14} />
                      <span className="text-[11px] text-warning font-bold">急需审核</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                      {task.archived ? (
                        <CheckCircle2 className="text-success" size={14} />
                      ) : (
                        <Calendar size={14} />
                      )}
                      {task.archived ? `已归档 ${task.date}` : task.date}
                    </div>
                    <div className="flex -space-x-2">
                      {task.users ? task.users.map((u, i) => (
                        <img key={i} src={u} className="w-6 h-6 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                      )) : (
                        <img src={task.user} className="w-6 h-6 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <button className="w-[300px] flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl h-[200px] text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all group">
          <PlusCircle className="mb-2 group-active:scale-90 transition-transform" size={32} />
          <span className="text-xs font-bold uppercase tracking-widest">添加新阶段</span>
        </button>
      </div>

      <button className="fixed bottom-10 right-10 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl active:scale-90 transition-all z-50">
        <Bolt size={24} />
      </button>
    </div>
  );
}
