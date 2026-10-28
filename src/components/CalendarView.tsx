import React, { useState } from 'react';
import { FOUR_WEEK_CALENDAR, DAY_ROUTINES, WEEKDAY_INFO, ALL_PRODUCTS } from '../data/amandaRoutineData';
import { getCanonicalNightSteps, getCanonicalMorningSteps, getNightStrategySummary } from '../data/canonicalRoutines';
import { DayOfWeek, WeekType, ProductItem, StepItem } from '../types';
import {
  Calendar,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  X,
  Clock,
  Droplets,
  ArrowRight,
  Sun,
  Moon,
  Pill,
  ArrowLeft,
  ChevronDown,
  Info,
  Timer,
  AlertTriangle,
  Eye,
  ShieldCheck
} from 'lucide-react';
import { getTodayCalendarDayNum, getTodayFormattedZh, getWeekNumber } from '../utils/storage';

interface CalendarViewProps {
  currentDay: DayOfWeek;
  weekType?: WeekType;
  onSelectDayRoutine: (day: DayOfWeek, weekType: WeekType) => void;
  onOpenTimerForDuration?: (minutes: number, title?: string) => void;
}

interface StepDetailWithTechnique {
  categoryLabel: string;
  categoryPillColor?: string;
  isHighlighted?: boolean;
  productCode: string;
  productName: string;
  appliedRole: string;
  targetZone: string;
  amount: string;
  technique: string;
  caution?: string;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ currentDay, weekType, onSelectDayRoutine, onOpenTimerForDuration }) => {
  const todayFormatted = getTodayFormattedZh();
  const todayCalendarDay = getTodayCalendarDayNum(weekType);
  const [activeModalDayNum, setActiveModalDayNum] = useState<number | null>(null);
  const [sopSubTab, setSopSubTab] = useState<'morning' | 'night' | 'rx'>('night');
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  const activeDayData = activeModalDayNum ? FOUR_WEEK_CALENDAR[activeModalDayNum - 1] : null;

  // Split into 4 weeks
  const week1 = FOUR_WEEK_CALENDAR.slice(0, 7);
  const week2 = FOUR_WEEK_CALENDAR.slice(7, 14);
  const week3 = FOUR_WEEK_CALENDAR.slice(14, 21);
  const week4 = FOUR_WEEK_CALENDAR.slice(21, 28);

  const weeks = [
    {
      num: 1,
      cycleTitle: '第 1 週：基底穩固與淨膚啟動 (奇數週・週末 suisai 酵素代謝 & AZ100 痘痘藍膜)',
      description: '早晨使用 BOH 噴霧 + ANUA 桃子精華；週三【⚡ 離子儀(導出) + ANUA提亮】；週四【A醇微晶】；週六【suisai 酵素洗顏粉】；週日【AZ100 藍膜 + Dr. Reju-All 修復霜】。',
      isOdd: true,
      days: week1
    },
    {
      num: 2,
      cycleTitle: '第 2 週：水光激活與深層注水 (偶數週・週六離子儀導入 & 週日 保濕面膜)',
      description: '早晨使用 Ongredients 噴霧 + Medicube 安瓶 + 黛珂 AQ 乳；週三【⚡ 離子儀(導出) + 保濕面膜深層注水】；週四【A醇微晶】；週五【菸鹼醯胺下巴控油】；週六【⚡ 離子儀(導入) + Medicube安瓶】；週日【一般日常保濕面膜日】。',
      isOdd: false,
      days: week2
    },
    {
      num: 3,
      cycleTitle: '第 3 週：高階煥膚與膠原新生 (奇數週・加強微晶針與PDRN修護)',
      description: '延續奇數週節奏，深化下巴水楊酸去角質與 VT Reedle 300 微晶針激活，眼周搭配綠橘子維他命C淡斑眼膜。',
      isOdd: true,
      days: week3
    },
    {
      num: 4,
      cycleTitle: '第 4 週：全效抗老與極致屏障 (偶數週・雙重淡斑與鎖水封層)',
      description: '結算整月保養成果，強化兩頰冰河霜與妮維雅 630 淡斑晚霜，下巴嚴格控油維持零閉口。',
      isOdd: false,
      days: week4
    }
  ];

  const getThemeTagColor = (themeType: string) => {
    if (themeType.includes('水楊酸')) return 'bg-amber-100 text-amber-800 border-amber-200';
    if (themeType.includes('微晶') || themeType.includes('A醇')) return 'bg-purple-100 text-purple-800 border-purple-200';
    if (themeType.includes('面膜') || themeType.includes('藍膜')) return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    if (themeType.includes('導出') || themeType.includes('導入')) return 'bg-cyan-100 text-cyan-800 border-cyan-200';
    return 'bg-emerald-100 text-emerald-800 border-emerald-200';
  };

  const handlePrevDay = () => {
    if (activeModalDayNum && activeModalDayNum > 1) {
      setActiveModalDayNum(activeModalDayNum - 1);
      setExpandedCardIndex(null);
    }
  };

  const handleNextDay = () => {
    if (activeModalDayNum && activeModalDayNum < 28) {
      setActiveModalDayNum(activeModalDayNum + 1);
      setExpandedCardIndex(null);
    }
  };

  const [morningMode, setMorningMode] = useState<'bare' | 'makeup'>('bare');

  const currentNightSteps: StepItem[] = activeDayData
    ? getCanonicalNightSteps(activeDayData.dayOfWeek, activeDayData.isOddWeek)
    : [];

  const currentNightStrategyText: string = activeDayData
    ? getNightStrategySummary(activeDayData.dayOfWeek, activeDayData.isOddWeek)
    : '';

  const currentMorningSteps: StepItem[] = activeDayData
    ? getCanonicalMorningSteps(morningMode === 'makeup', activeDayData.isOddWeek)
    : [];

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#ff1e56]" />
            <h2 className="text-xl font-extrabold text-stone-900">4 週月曆全景排程總覽</h2>
          </div>
          <p className="text-xs text-stone-500 mt-1">
            28 天科學分子微循環：奇數週著重「角質代謝與微晶激活」，偶數週聚焦「深層注水與淡斑修護」。
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-xs flex-wrap">
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
            💧 類型 A・溫和修護
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-medium">
            🧪 類型 B・水楊酸
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-medium">
            🌙 類型 C・A醇微晶
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
            🌿 類型 D・深度面膜
          </span>
        </div>
      </div>

      {/* Auto Date Detection & Today Synchronized Card */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white rounded-3xl p-5 sm:p-6 shadow-md border border-stone-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black bg-[#ff1e56] text-white">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              即時自動抓取中
            </span>
            <span className="text-sm font-bold text-amber-300">
              今日：{todayFormatted}
            </span>
            <span className="text-xs text-stone-400">
              | 第 {getWeekNumber()} 週・{weekType === 'even' ? '偶數週 (Even)' : '奇數週 (Odd)'}
            </span>
          </div>
          <p className="text-xs text-stone-300">
            自動校準 28 天循環：今日對應為 <strong className="text-white text-sm">DAY {todayCalendarDay}</strong>（{FOUR_WEEK_CALENDAR[todayCalendarDay - 1]?.title || '今日排程'}）。
          </p>
        </div>

        <button
          onClick={() => {
            setActiveModalDayNum(todayCalendarDay);
            setSopSubTab('night');
            setExpandedCardIndex(null);
          }}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff1e56] to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white text-xs sm:text-sm font-bold shadow-md transition cursor-pointer shrink-0"
        >
          <Sparkles className="w-4 h-4" />
          <span>查看今日 (DAY {todayCalendarDay}) 完整 SOP</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Anti-Comedone & Eye Care Dermatological Rule Callout */}
      <div className="bg-amber-50/90 rounded-2xl p-4 sm:p-5 border border-amber-200/90 text-amber-950 space-y-2.5">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
          <span>皮膚科醫師級・防閉鎖粉刺與眼周減法護理守則（防長閉口與脂肪粒）</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-amber-900/90">
          <div className="bg-white/80 p-3 rounded-xl border border-amber-200/60 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <Eye className="w-3.5 h-3.5 text-rose-500" />
              <span>① 嚴格「單一眼霜原則」，絕對不疊加兩款</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              眼周皮膚僅 0.5mm，皮脂腺極少。<strong>早晚各僅擦一款眼霜（米粒大小即可）</strong>。同時疊擦兩款會導致油脂超載，誘發眼下脂肪粒，且眨眼出油會使油脂下移，直接堵塞下巴毛孔引發閉鎖粉刺。
            </p>
          </div>
          <div className="bg-white/80 p-3 rounded-xl border border-amber-200/60 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>② 下巴閉鎖粉刺區「嚴格清爽減法，厚霜禁區」</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              兩頰乾肌可塗冰河霜/角鯊霜/橘子霜；<strong>下巴嚴禁厚面霜與高滋潤乳液</strong>！下巴只薄擦 1 滴 #26-2 MUJI 米糠發酵乳液，維持毛孔呼吸，配合週二 2% 水楊酸與小林痘痘水徹底杜絕內包硬痘。
            </p>
          </div>
        </div>
      </div>

      {/* 4 Weeks Iteration */}
      <div className="space-y-8">
        {weeks.map((week) => (
          <div key={week.num} className="space-y-3">
            {/* Week Header */}
            <div className="bg-stone-50/80 rounded-2xl p-4 border border-stone-200/80 space-y-1">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${week.isOdd ? 'bg-indigo-500' : 'bg-emerald-500'}`} />
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">{week.cycleTitle}</h3>
              </div>
              <p className="text-xs text-stone-600 pl-4">{week.description}</p>
            </div>

            {/* 7 Days Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {week.days.map((day) => {
                const isTodayCard = day.dayNum === todayCalendarDay;
                return (
                  <div
                    key={day.dayNum}
                    className={`rounded-2xl p-3.5 border transition-all flex flex-col justify-between ${
                      isTodayCard
                        ? 'bg-rose-50/60 border-rose-300 ring-2 ring-rose-400/40 shadow-md'
                        : 'bg-white border-stone-200 hover:border-stone-300 shadow-2xs'
                    }`}
                  >
                    <div>
                      {/* Top Bar: DAY # + Today Tag */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-black text-stone-800">DAY {day.dayNum}</span>
                          {isTodayCard && (
                            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-[#ff1e56] text-white animate-pulse">
                              今日
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-medium text-stone-400">
                          {WEEKDAY_INFO[day.dayOfWeek].short}
                        </span>
                      </div>

                      {/* Theme Tag */}
                      <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-md border mb-2 ${getThemeTagColor(day.themeType)}`}>
                        {day.themeType}
                      </span>

                      {/* Title */}
                      <h4 className="text-xs font-bold text-stone-900 line-clamp-1 mb-2">
                        {day.title}
                      </h4>

                      {/* Brief Steps */}
                      <div className="space-y-1.5 text-[11px] text-stone-600 border-t border-stone-100 pt-2 mb-3">
                        <p className="line-clamp-2">
                          <span className="text-amber-600 font-medium">☀️ 早：</span>
                          {day.amSummary}
                        </p>
                        <p className="line-clamp-2">
                          <span className="text-indigo-600 font-medium">🌙 晚：</span>
                          {day.pmSummary}
                        </p>
                      </div>
                    </div>

                    {/* View SOP Button */}
                    <button
                      onClick={() => {
                        setActiveModalDayNum(day.dayNum);
                        setSopSubTab('night');
                        setExpandedCardIndex(null);
                      }}
                      className="w-full text-center text-xs font-medium text-stone-600 hover:text-stone-950 hover:bg-stone-50 py-1.5 rounded-lg border border-stone-200/80 transition flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>查看完整 SOP</span>
                      <ChevronRight className="w-3 h-3 text-stone-400" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* High-Fidelity Day SOP Modal with Explicit Products and Hand Techniques (Matching image_05097494.png) */}
      {activeDayData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-stone-200">
            {/* 1. Modal Dark Top Bar (Matching image_05097494.png) */}
            <div className="bg-[#1c1917] text-white p-5 sm:p-6 flex items-start justify-between gap-3">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-[#ff1e56] text-white shadow-xs">
                    DAY {activeDayData.dayNum}
                  </span>
                  <span className="text-xs font-bold text-stone-300">
                    第 {activeDayData.weekNum} 週・{activeDayData.isOddWeek ? '奇數週' : '偶數週'}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {activeDayData.themeType}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {activeDayData.title}
                </h3>
              </div>

              {/* Prev / Next & Close */}
              <div className="flex items-center gap-1.5 text-stone-400">
                <button
                  onClick={handlePrevDay}
                  disabled={activeDayData.dayNum <= 1}
                  className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition disabled:opacity-30 cursor-pointer"
                  title="上一天"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextDay}
                  disabled={activeDayData.dayNum >= 28}
                  className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition disabled:opacity-30 cursor-pointer"
                  title="下一天"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveModalDayNum(null)}
                  className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition cursor-pointer ml-1"
                  title="關閉"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 2. Three Sub-Tabs under the dark top bar */}
            <div className="px-5 sm:px-6 pt-4 pb-2 border-b border-stone-100 flex items-center gap-2 overflow-x-auto text-xs sm:text-sm font-bold no-scrollbar">
              <button
                onClick={() => {
                  setSopSubTab('morning');
                  setExpandedCardIndex(null);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition cursor-pointer ${
                  sopSubTab === 'morning'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span>晨間保養與妝前</span>
              </button>
              <button
                onClick={() => {
                  setSopSubTab('night');
                  setExpandedCardIndex(null);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition cursor-pointer ${
                  sopSubTab === 'night'
                    ? 'bg-[#1c1917] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span>夜間深度修護</span>
              </button>
              <button
                onClick={() => {
                  setSopSubTab('rx');
                  setExpandedCardIndex(null);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition cursor-pointer ${
                  sopSubTab === 'rx'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <Pill className="w-4 h-4" />
                <span>處方藥/保健品</span>
              </button>
            </div>

            {/* 3. Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1 text-xs sm:text-sm">
              {/* TAB 1: Night SOP (100% Matching image_05097494.png) */}
              {sopSubTab === 'night' && (
                <div className="space-y-4">
                  {/* Gray/White SOP Strategy Box */}
                  <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
                    <span className="text-xs font-semibold text-stone-400 block">
                      今日夜間完整保養 SOP 策略
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-stone-900 leading-relaxed">
                      {currentNightStrategyText}
                    </p>
                  </div>

                  {/* Section Title */}
                  <div className="font-bold text-stone-800 text-xs sm:text-sm flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#ff1e56]" />
                      <span>今日指定夜間保養品與美容儀清單（依序使用，點擊展開完整手法）：</span>
                    </div>
                    <span className="text-[11px] text-stone-400 font-normal">共 {currentNightSteps.length} 步</span>
                  </div>

                  {/* List of Canonical Product Items (100% Matching TodayView sequence) */}
                  <div className="space-y-2.5">
                    {currentNightSteps.map((item, idx) => {
                      const isExpanded = expandedCardIndex === idx;

                      return (
                        <div
                          key={item.id || idx}
                          onClick={() => setExpandedCardIndex(isExpanded ? null : idx)}
                          className={`rounded-2xl border transition-all cursor-pointer overflow-hidden ${
                            item.isHighlighted
                              ? 'border-rose-300 ring-2 ring-rose-200/50 bg-white shadow-xs'
                              : isExpanded
                              ? 'border-stone-400 bg-white shadow-xs'
                              : 'border-stone-200 bg-white hover:border-stone-300 shadow-2xs'
                          }`}
                        >
                          {/* Main Row */}
                          <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                              {/* Left Category Pill (洗卸 / 裸肌活性 / 前導通道 / 先乳後水 / 化妝水/噴霧 / 乳液/面霜 / 身體乳) */}
                              <span className="px-2.5 py-1 rounded-lg bg-[#292524] text-white text-[11px] font-bold flex-shrink-0">
                                {item.categoryLabel || '保養'}
                              </span>

                              {/* Product Info */}
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  {item.productCode && (
                                    <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-700">
                                      {item.productCode}
                                    </span>
                                  )}
                                  <h4 className="text-xs sm:text-sm font-extrabold text-stone-900 truncate">
                                    {item.productName}
                                  </h4>
                                </div>
                                <p className="text-[11px] text-stone-500 mt-0.5 truncate">
                                  {item.appliedRole || item.instruction}
                                </p>
                              </div>
                            </div>

                            {/* Right Timer or Indicator */}
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {item.timerDurationMinutes && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1">
                                  <Timer className="w-3 h-3" />
                                  <span>{item.timerDurationMinutes} 分鐘</span>
                                </span>
                              )}
                              <div className="text-stone-400">
                                {isExpanded ? (
                                  <ChevronDown className="w-4 h-4 text-stone-800" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Expanded Hand Techniques & Dosage (產品/手法) */}
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-1 bg-stone-50/70 border-t border-stone-100 space-y-2.5 text-xs animate-in fade-in duration-200">
                              <div className="grid grid-cols-2 gap-2 text-[11px]">
                                <div className="p-2 rounded-xl bg-white border border-stone-200">
                                  <span className="text-stone-400 block font-medium">適用部位：</span>
                                  <span className="font-bold text-stone-800">{item.targetZoneText || '全臉適用'}</span>
                                </div>
                                <div className="p-2 rounded-xl bg-white border border-stone-200">
                                  <span className="text-stone-400 block font-medium">建議用量：</span>
                                  <span className="font-bold text-stone-800">{item.amount || '適量'}</span>
                                </div>
                              </div>

                              {/* Exact Hand Technique */}
                              <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-stone-800 space-y-1">
                                <span className="font-black text-amber-950 flex items-center gap-1">
                                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                                  <span>操作手法與手勢：</span>
                                </span>
                                <p className="leading-relaxed text-[11px] sm:text-xs">
                                  {item.technique || item.instruction}
                                </p>
                              </div>

                              {item.caution && (
                                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-[11px] font-medium">
                                  {item.caution}
                                </div>
                              )}

                              {item.timerDurationMinutes && onOpenTimerForDuration && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenTimerForDuration(
                                      item.timerDurationMinutes!,
                                      `${item.productName}（${item.timerDurationMinutes}分鐘倒數）`
                                    );
                                  }}
                                  className="w-full py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-xs"
                                >
                                  <Timer className="w-3.5 h-3.5" />
                                  <span>開啟 {item.timerDurationMinutes} 分鐘倒數計時器</span>
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: Morning SOP with Explicit Techniques and Mode Switcher */}
              {sopSubTab === 'morning' && (
                <div className="space-y-4">
                  {/* Mode Switcher inside Modal */}
                  <div className="flex items-center justify-between p-2 rounded-2xl bg-stone-100">
                    <button
                      onClick={() => setMorningMode('bare')}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                        morningMode === 'bare'
                          ? 'bg-emerald-500 text-white shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      <Sun className="w-3.5 h-3.5" />
                      <span>路線 A・素顏日模式 (自然水光)</span>
                    </button>
                    <button
                      onClick={() => setMorningMode('makeup')}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                        morningMode === 'makeup'
                          ? 'bg-rose-500 text-white shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      <span>💄 路線 B・精緻底妝日模式 (防起屑)</span>
                    </button>
                  </div>

                  {/* Yellow Core Strategy Summary Box */}
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                      <Sun className="w-4 h-4 text-amber-600" />
                      <span>
                        晨間保養與妝前打底核心策略（{activeDayData.isOddWeek ? '奇數週' : '偶數週'}・
                        {morningMode === 'bare' ? '素顏水光' : '精緻底妝'}）
                      </span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-medium">
                      {morningMode === 'bare'
                        ? `清水洗臉 ➔ #15小紫瓶 ➔ ${
                            activeDayData.isOddWeek ? '#18 BOH噴霧' : '#19 Ongredients噴霧'
                          } ➔ #27 ANUA桃子精華 ➔ #37 檸檬眼霜 ➔ 兩頰(#27-2靈芝乳) ＋ 下巴(#26-2米糠乳) ➔ #39 d’Alba水潤防曬`
                        : '溫和洗臉 ➔ #15小紫瓶 ➔ #38 BOBBI BROWN眼霜(成膜1分) ➔ #34 BOBBI BROWN橘子霜(僅兩頰) ＋ #26-2米糠乳(下巴) ➔ #40 曼秀雷敦防曬(成膜3分) ➔ #41 植村秀妝前乳'}
                    </p>
                  </div>

                  {/* Section Title */}
                  <div className="font-bold text-stone-800 text-xs sm:text-sm flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>晨間精準保養與防曬打底清單（依序執行）：</span>
                    </div>
                    <span className="text-[11px] text-stone-400 font-normal">共 {currentMorningSteps.length} 步</span>
                  </div>

                  {/* Canonical Morning Step Cards with Products & Hand Techniques */}
                  <div className="space-y-2.5">
                    {currentMorningSteps.map((item, idx) => {
                      const isExpanded = expandedCardIndex === idx + 100;

                      return (
                        <div
                          key={item.id || idx}
                          onClick={() => setExpandedCardIndex(isExpanded ? null : idx + 100)}
                          className={`rounded-2xl border transition-all cursor-pointer overflow-hidden ${
                            item.isHighlighted
                              ? 'border-amber-300 ring-2 ring-amber-200/50 bg-white shadow-xs'
                              : isExpanded
                              ? 'border-stone-400 bg-white shadow-xs'
                              : 'border-stone-200 bg-white hover:border-stone-300 shadow-2xs'
                          }`}
                        >
                          <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                                {idx + 1}
                              </span>

                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  {item.productCode && (
                                    <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                                      {item.productCode}
                                    </span>
                                  )}
                                  <h4 className="text-xs sm:text-sm font-extrabold text-stone-900 truncate">
                                    {item.productName}
                                  </h4>
                                </div>
                                <p className="text-[11px] text-stone-500 mt-0.5 truncate">
                                  {item.appliedRole || item.instruction}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0">
                              {item.timerDurationMinutes && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                                  <Timer className="w-3 h-3" />
                                  <span>{item.timerDurationMinutes} 分鐘</span>
                                </span>
                              )}
                              <div className="text-stone-400">
                                {isExpanded ? (
                                  <ChevronDown className="w-4 h-4 text-stone-800" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                              </div>
                            </div>
                          </div>

                          {isExpanded && (
                            <div className="px-4 pb-4 pt-1 bg-amber-50/40 border-t border-amber-100 space-y-2.5 text-xs animate-in fade-in duration-200">
                              <div className="grid grid-cols-2 gap-2 text-[11px]">
                                <div className="p-2 rounded-xl bg-white border border-stone-200">
                                  <span className="text-stone-400 block font-medium">適用部位：</span>
                                  <span className="font-bold text-stone-800">{item.targetZoneText || '全臉適用'}</span>
                                </div>
                                <div className="p-2 rounded-xl bg-white border border-stone-200">
                                  <span className="text-stone-400 block font-medium">建議用量：</span>
                                  <span className="font-bold text-stone-800">{item.amount || '適量'}</span>
                                </div>
                              </div>

                              <div className="p-3 rounded-xl bg-white border border-amber-200 text-stone-800 space-y-1">
                                <span className="font-black text-amber-950 flex items-center gap-1">
                                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                                  <span>操作手法與手勢：</span>
                                </span>
                                <p className="leading-relaxed text-[11px] sm:text-xs">
                                  {item.technique || item.instruction}
                                </p>
                              </div>

                              {item.caution && (
                                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-[11px] font-medium">
                                  {item.caution}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: Supplements & Rx Schedule */}
              {sopSubTab === 'rx' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/90 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                      <Pill className="w-4 h-4 text-emerald-600" />
                      <span>全日處方用藥與保健品嚴格安全排程</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-medium">
                      早餐後立即服處方藥 ➔ 隨餐維他命C+奢光錠 ➔ 嚴格間隔60分鐘吃Thorne B群 ➔ 午/晚餐隨餐D3+魚油+蔓越莓 ➔ 睡前吞服癲必停+羅眠樂
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="font-bold text-stone-900 block">☀️ 早晨早餐時段：</span>
                      <p className="text-xs text-stone-700">
                        • <strong>餐後立即吃</strong>：普樂彼錠 50mg (PTU) 3 顆 ＋ 癲鍵錠 50mg 1 顆。<br />
                        • <strong>隨餐搭配</strong>：8VC 2200mg 維生素 C 粉 1 包 ＋ BHK's 奢光錠 1 錠。<br />
                        • <strong>【間隔 1 小時後】</strong>：Thorne 基本維生素 B 複合物 1 粒。
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="font-bold text-stone-900 block">🌤️ 午餐或晚餐隨餐（需油脂）：</span>
                      <p className="text-xs text-stone-700">
                        • Kirkland 維生素 D3 (2 錠) ＋ Sports Research 魚油 (1 粒) ＋ Webber Naturals 蔓越莓 (1-2 粒)。
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="font-bold text-stone-900 block">🌙 睡前放鬆就寢時：</span>
                      <p className="text-xs text-stone-700">
                        • 癲必停持續性藥效膜衣錠 500mg (0.5 顆) ＋ 易靜錠 2mg (羅眠樂 1 顆)。
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Modal Bottom Action Bar (Matching image_05097494.png) */}
            <div className="p-4 sm:p-5 border-t border-stone-100 bg-stone-50/60 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevDay}
                  disabled={activeDayData.dayNum <= 1}
                  className="px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-stone-700 text-xs font-bold flex items-center gap-1 transition disabled:opacity-30 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>上一天</span>
                </button>
                <button
                  onClick={handleNextDay}
                  disabled={activeDayData.dayNum >= 28}
                  className="px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-stone-700 text-xs font-bold flex items-center gap-1 transition disabled:opacity-30 cursor-pointer"
                >
                  <span>下一天</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onSelectDayRoutine(activeDayData.dayOfWeek, activeDayData.isOddWeek ? 'odd' : 'even');
                    setActiveModalDayNum(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#ff1e56] hover:bg-[#e01548] text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                >
                  <span>前往今日打卡執行</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveModalDayNum(null)}
                  className="px-4 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold text-xs transition cursor-pointer"
                >
                  關閉
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
