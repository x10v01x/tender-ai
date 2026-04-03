import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ListTodo, 
  Briefcase, 
  FileEdit, 
  BookOpen, 
  Trello, 
  Settings, 
  UserCircle,
  Search,
  Bell,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: '工作台', path: '/' },
  { icon: ListTodo, label: '招标信息', path: '/tenders' },
  { icon: Briefcase, label: '投标项目', path: '/projects' },
  { icon: FileEdit, label: '标书制作', path: '/editor' },
  { icon: BookOpen, label: '知识库', path: '/knowledge' },
  { icon: Trello, label: '项目管理', path: '/kanban' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[240px] z-40 bg-slate-50/50 backdrop-blur-lg border-r border-slate-200/50 flex flex-col py-6 gap-y-1">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white">
          <Trello size={20} />
        </div>
        <div>
          <h1 className="text-lg font-black text-slate-900 tracking-tight">智标AI</h1>
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Intelligent Workspace</p>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "relative flex items-center px-6 py-2.5 mx-2 rounded-lg font-medium text-[13px] transition-all group",
              isActive 
                ? "bg-blue-50 text-primary" 
                : "text-slate-500 hover:bg-slate-200/30"
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("mr-3", isActive ? "text-primary" : "text-slate-400")} size={20} />
                <span>{item.label}</span>
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-primary rounded-r-full" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-200/30 mx-4 space-y-1">
        <button className="w-full flex items-center px-4 py-2 text-slate-500 hover:bg-slate-200/30 rounded-lg font-medium text-[13px] transition-all">
          <Settings className="mr-3 text-slate-400" size={20} />
          <span>设置</span>
        </button>
        <button className="w-full flex items-center px-4 py-2 text-slate-500 hover:bg-slate-200/30 rounded-lg font-medium text-[13px] transition-all">
          <UserCircle className="mr-3 text-slate-400" size={20} />
          <span>个人中心</span>
        </button>
      </div>
    </aside>
  );
}

export function TopBar({ title }: { title?: string }) {
  return (
    <header className="fixed top-0 right-0 left-[240px] z-50 h-16 bg-white/70 backdrop-blur-xl border-b border-white/10 shadow-sm flex justify-between items-center px-8">
      <div className="flex items-center gap-6 w-1/2">
        {title ? (
          <h2 className="text-lg font-bold tracking-tight text-on-surface">{title}</h2>
        ) : (
          <div className="relative w-full max-w-md group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
            <input 
              className="w-full bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-1.5 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              placeholder="搜索项目、标书或知识库..."
              type="text"
            />
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100/50 transition-colors relative">
          <Bell className="text-slate-600" size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
        </button>
        <div className="h-8 w-[1px] bg-slate-200"></div>
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-semibold text-on-surface">张经理</p>
            <p className="text-[10px] text-slate-500">招标采购部</p>
          </div>
          <img 
            src="https://picsum.photos/seed/manager/100/100" 
            alt="User Profile" 
            className="w-9 h-9 rounded-full bg-slate-200 border border-slate-200 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
