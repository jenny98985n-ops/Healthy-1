import React from 'react';
import { WeekType } from '../types';
import { Volume2, VolumeX, Timer, Bell, Download, Sparkles, Calendar, Layers, ShieldCheck, Pill, Palette, Activity } from 'lucide-react';
import { getTodayFormattedZh, getWeekNumber, getTaiwanDateObj } from '../utils/storage';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  weekType: WeekType;
  setWeekType: (w: WeekType) => void;
  isSoundMuted: boolean;
  toggleSound: () => void;
  onOpenTimer: () => void;
  onOpenReminders: () => void;
  onOpenExport: () => void;
  todayCompletionRate: number;
  onResetToToday?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  weekType,
  setWeekType,
  isSoundMuted,
  toggleSound,
  onOpenTimer,
  onOpenReminders,
  onOpenExport,
  todayCompletionRate,
  onResetToToday
}) => {
  const dateFormatted = getTodayFormattedZh();
  const weekNum = getWeekNumber();

  const navItems = [
    { id: 'today', label: '今日主頁', icon: Sparkles },
    { id: 'calendar', label: '月曆與2027長程排程', icon: Calendar },
    { id: 'supplements', label: '處方藥與保健品', icon: Pill },
    { id: 'makeup_cleansing', label: '週末上妝與洗卸', icon: Palette },
    { id: 'radar', label: '配方雷達與缺口', icon: Activity },
    { id: 'inventory', label: '全庫存', icon: Layers },
    { id: 'safety', label: '安全交互禁忌', icon: ShieldCheck },
    { id: 'analytics', label: '歷史記錄與匯出', icon: Download }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar */}
        <div className="py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-stone-100">
          {/* Logo & Profile */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 to-rose-400 flex items-center justify-center text-white shadow-sm ring-2 ring-orange-100">
              <Sparkles className="w-5 h-5 fill-white/30" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-stone-900 font-sans">
                  GlowSync
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200/80">
                  Amanda 專屬完整攻略版
                </span>
              </div>
              <p className="text-xs text-stone-500 hidden sm:block">
                臉部 48 項編號全部排入（第 1 週起無暫停）＋ 6 款身體乳 ＋ 6 款保健品 ＋ 4 項處方用藥
              </p>
            </div>
          </div>

          {/* Date, Week badge, Audio & Actions */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
            {/* Clickable Date Display syncing to today */}
            <button
              onClick={onResetToToday}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200/80 text-stone-700 font-medium transition cursor-pointer"
              title="點擊校準並回到今日（2026年10月28日 星期三）"
            >
              <Calendar className="w-3.5 h-3.5 text-rose-500" />
              <span className="font-bold text-stone-800">{dateFormatted}</span>
              <span className="text-stone-300">|</span>
              <span className="text-stone-500 font-mono">第 {weekNum} 週</span>
            </button>

            {/* Week Switcher Badge */}
            <button
              onClick={() => setWeekType(weekType === 'even' ? 'odd' : 'even')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-xs transition-all cursor-pointer ${
                weekType === 'even'
                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-200 hover:bg-emerald-700'
                  : 'bg-indigo-600 text-white ring-2 ring-indigo-200 hover:bg-indigo-700'
              }`}
              title="點擊切換奇數週 / 偶數週排程"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>{weekType === 'even' ? '偶數週 (Even)' : '奇數週 (Odd)'}</span>
            </button>

            {/* Quick Timer Button */}
            <button
              onClick={onOpenTimer}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 font-medium transition cursor-pointer"
              title="保養倒數計時器（面膜/水楊酸/妝前成膜/B群間隔）"
            >
              <Timer className="w-4 h-4 text-rose-500" />
              <span className="hidden sm:inline">計時器</span>
            </button>

            {/* Personalized Reminder Button */}
            <button
              onClick={onOpenReminders}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 font-medium transition cursor-pointer flex items-center gap-1.5"
              title="個人化攝取提醒設定"
            >
              <Bell className="w-4 h-4 text-amber-500" />
              <span className="hidden sm:inline">提醒</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-xl border transition cursor-pointer ${
                isSoundMuted
                  ? 'bg-stone-50 border-stone-200 text-stone-400 hover:text-stone-600'
                  : 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'
              }`}
              title={isSoundMuted ? '提示音已靜音 (點擊開啟)' : '提示音已開啟 (點擊靜音)'}
            >
              {isSoundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Data Export Button */}
            <button
              onClick={onOpenExport}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium transition cursor-pointer flex items-center gap-1.5"
              title="數據匯出 (JSON / CSV) & 備份"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">匯出分析</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto py-2.5 no-scrollbar text-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-medium whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-stone-400'}`} />
                <span>{item.label}</span>
                {item.id === 'today' && todayCompletionRate > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    todayCompletionRate === 100 ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                  }`}>
                    {todayCompletionRate}%
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
