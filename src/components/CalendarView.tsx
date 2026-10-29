/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { FOUR_WEEK_CALENDAR, WEEKDAY_INFO } from '../data/amandaRoutineData';
import { getCanonicalNightSteps, getCanonicalMorningSteps, getNightStrategySummary } from '../data/canonicalRoutines';
import { DayOfWeek, WeekType, StepItem } from '../types';
import {
  Calendar,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  CheckCircle2,
  X,
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
  ShieldCheck,
  CalendarRange,
  Compass,
  RotateCcw,
  Layers
} from 'lucide-react';
import { getTodayCalendarDayNum, getTodayFormattedZh, getWeekNumber, getTaiwanDateInfo } from '../utils/storage';
import {
  CalendarDayInfo,
  getAllAvailableMonths,
  getMonthCalendarGrid,
  LONG_TERM_ROADMAP,
  generateDayInfo,
  DAY_OF_WEEK_NAMES,
  getNightTypeForDay
} from '../utils/longTermCalendar';

interface CalendarViewProps {
  currentDay: DayOfWeek;
  weekType?: WeekType;
  onSelectDayRoutine: (day: DayOfWeek, weekType: WeekType) => void;
  onOpenTimerForDuration?: (minutes: number, title?: string) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  currentDay,
  weekType,
  onSelectDayRoutine,
  onOpenTimerForDuration
}) => {
  const taiwanInfo = getTaiwanDateInfo();
  const todayFormatted = taiwanInfo.formattedZh;
  const todayDateKey = taiwanInfo.dateKey;
  const todayCalendarDay = getTodayCalendarDayNum(weekType);

  // Calendar View Mode: 'month' (2026/10 - 2027/12) vs 'cycle' (28-day 4-week cycle) vs 'roadmap' (5 Quarters)
  const [viewMode, setViewMode] = useState<'month' | 'cycle' | 'roadmap'>('month');

  // Selected Month: default to current month "2026-10"
  const availableMonths = useMemo(() => getAllAvailableMonths(), []);
  const defaultMonthKey = `${taiwanInfo.year}-${String(taiwanInfo.month).padStart(2, '0')}`;
  const [selectedMonthKey, setSelectedMonthKey] = useState<string>(defaultMonthKey);

  // Month Grid Data
  const currentMonthOption = availableMonths.find(m => m.key === selectedMonthKey) || availableMonths[0];
  const monthDays = useMemo(() => {
    return getMonthCalendarGrid(currentMonthOption.year, currentMonthOption.month);
  }, [currentMonthOption]);

  // Modal active day state: can be a dateKey (e.g. "2026-10-28") OR cycle day number (1..28)
  const [selectedDateKey, setSelectedDateKey] = useState<string | null>(null);
  const [activeCycleDayNum, setActiveCycleDayNum] = useState<number | null>(null);

  const [sopSubTab, setSopSubTab] = useState<'morning' | 'night' | 'rx'>('night');
  const [morningMode, setMorningMode] = useState<'bare' | 'makeup'>('bare');
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  // Resolve active day data for the modal
  const activeDayDetail: CalendarDayInfo | null = useMemo(() => {
    if (selectedDateKey) {
      const [y, m, d] = selectedDateKey.split('-').map(Number);
      return generateDayInfo(y, m, d, todayDateKey);
    }
    if (activeCycleDayNum) {
      const fallbackDay = FOUR_WEEK_CALENDAR[activeCycleDayNum - 1];
      if (fallbackDay) {
        const fallbackNight = getNightTypeForDay(fallbackDay.dayOfWeek, fallbackDay.isOddWeek);
        return {
          dateKey: `cycle-${fallbackDay.dayNum}`,
          year: taiwanInfo.year,
          month: taiwanInfo.month,
          day: fallbackDay.dayNum,
          dayOfWeek: fallbackDay.dayOfWeek,
          dayOfWeekZh: DAY_OF_WEEK_NAMES[fallbackDay.dayOfWeek].zh,
          weekdayShort: DAY_OF_WEEK_NAMES[fallbackDay.dayOfWeek].short,
          dateFormattedZh: `第 ${fallbackDay.weekNum} 週・DAY ${fallbackDay.dayNum}（${DAY_OF_WEEK_NAMES[fallbackDay.dayOfWeek].zh}）`,
          isoWeek: fallbackDay.weekNum,
          isOddWeek: fallbackDay.isOddWeek,
          cycleWeekNum: fallbackDay.weekNum,
          dayInCycle: fallbackDay.dayNum,
          themeType: fallbackNight.label,
          nightType: fallbackNight.label,
          nightCategory: fallbackNight.category,
          nightBadgeClass: fallbackNight.badgeClass,
          nightHexBg: fallbackNight.hexBg,
          nightHexText: fallbackNight.hexText,
          nightHexBorder: fallbackNight.hexBorder,
          title: fallbackDay.title,
          amSummary: fallbackDay.amSummary,
          pmSummary: fallbackDay.pmSummary,
          quarterLabel: '4週分子微循環',
          monthKey: 'cycle',
          monthLabel: `第 ${fallbackDay.weekNum} 週`,
          isToday: fallbackDay.dayNum === todayCalendarDay,
          isCurrentMonth: true
        };
      }
    }
    return null;
  }, [selectedDateKey, activeCycleDayNum, todayDateKey, todayCalendarDay, taiwanInfo]);

  // Next / Prev month navigation
  const currentMonthIndex = availableMonths.findIndex(m => m.key === selectedMonthKey);
  const handlePrevMonth = () => {
    if (currentMonthIndex > 0) {
      setSelectedMonthKey(availableMonths[currentMonthIndex - 1].key);
    }
  };
  const handleNextMonth = () => {
    if (currentMonthIndex < availableMonths.length - 1) {
      setSelectedMonthKey(availableMonths[currentMonthIndex + 1].key);
    }
  };

  // Prev / Next day inside Modal
  const handlePrevDayInModal = () => {
    if (selectedDateKey) {
      const [y, m, d] = selectedDateKey.split('-').map(Number);
      const prevDate = new Date(Date.UTC(y, m - 1, d - 1));
      if (prevDate >= new Date(Date.UTC(2026, 9, 1))) {
        const py = prevDate.getUTCFullYear();
        const pm = String(prevDate.getUTCMonth() + 1).padStart(2, '0');
        const pd = String(prevDate.getUTCDate()).padStart(2, '0');
        setSelectedDateKey(`${py}-${pm}-${pd}`);
        setExpandedCardIndex(null);
      }
    } else if (activeCycleDayNum && activeCycleDayNum > 1) {
      setActiveCycleDayNum(activeCycleDayNum - 1);
      setExpandedCardIndex(null);
    }
  };

  const handleNextDayInModal = () => {
    if (selectedDateKey) {
      const [y, m, d] = selectedDateKey.split('-').map(Number);
      const nextDate = new Date(Date.UTC(y, m - 1, d + 1));
      if (nextDate <= new Date(Date.UTC(2027, 11, 31))) {
        const ny = nextDate.getUTCFullYear();
        const nm = String(nextDate.getUTCMonth() + 1).padStart(2, '0');
        const nd = String(nextDate.getUTCDate()).padStart(2, '0');
        setSelectedDateKey(`${ny}-${nm}-${nd}`);
        setExpandedCardIndex(null);
      }
    } else if (activeCycleDayNum && activeCycleDayNum < 28) {
      setActiveCycleDayNum(activeCycleDayNum + 1);
      setExpandedCardIndex(null);
    }
  };

  const getThemeTagColor = (themeType: string) => {
    if (themeType.includes('水楊酸')) return 'bg-orange-100 text-orange-950 border-orange-300';
    if (themeType.includes('A醇')) return 'bg-amber-100 text-amber-950 border-amber-300';
    if (themeType.includes('Reedle') || themeType.includes('微晶')) return 'bg-sky-100 text-sky-950 border-sky-300';
    if (themeType.includes('中度')) return 'bg-purple-100 text-purple-950 border-purple-300';
    if (themeType.includes('修護')) return 'bg-emerald-100 text-emerald-900 border-emerald-300';
    if (themeType.includes('補水')) return 'bg-teal-100 text-teal-950 border-teal-300';
    if (themeType.includes('緩衝')) return 'bg-slate-100 text-slate-800 border-slate-300';
    return 'bg-stone-100 text-stone-800 border-stone-300';
  };

  const currentNightSteps: StepItem[] = activeDayDetail
    ? getCanonicalNightSteps(activeDayDetail.dayOfWeek, activeDayDetail.isOddWeek, activeDayDetail.cycleWeekNum)
    : [];

  const currentNightStrategyText: string = activeDayDetail
    ? getNightStrategySummary(activeDayDetail.dayOfWeek, activeDayDetail.isOddWeek, activeDayDetail.cycleWeekNum)
    : '';

  const currentMorningSteps: StepItem[] = activeDayDetail
    ? getCanonicalMorningSteps(morningMode === 'makeup', activeDayDetail.isOddWeek)
    : [];

  return (
    <div className="space-y-6 pb-16">
      {/* 1. Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-sm">
              <CalendarRange className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                  月曆排程總覽（2026/10 ～ 2027 年底）
                </h2>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  全 15 個月・457 天跨年排程
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                以 4 週科學分子微循環為骨架，無縫推進排程至 2027 年 12 月 31 日，每日精準分流抗閉口。
              </p>
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-stone-100 text-xs font-bold">
            <button
              onClick={() => setViewMode('month')}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'month'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-rose-500" />
              <span>月份月曆（2026-2027）</span>
            </button>
            <button
              onClick={() => setViewMode('cycle')}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'cycle'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-amber-500" />
              <span>4 週微循環架構</span>
            </button>
            <button
              onClick={() => setViewMode('roadmap')}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'roadmap'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-indigo-500" />
              <span>5 大季度里程碑</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Real-time Today Synchronized Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white rounded-3xl p-5 sm:p-6 shadow-md border border-stone-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black bg-[#ff1e56] text-white">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              即時自動校準中
            </span>
            <span className="text-sm font-bold text-amber-300">
              今日：{todayFormatted}
            </span>
            <span className="text-xs text-stone-400">
              | 第 {getWeekNumber()} 週・{weekType === 'even' ? '偶數週 (Even)' : '奇數週 (Odd)'}
            </span>
          </div>
          <p className="text-xs text-stone-300">
            精準對應循環：今日為 <strong className="text-white text-sm">DAY {todayCalendarDay}</strong>（{FOUR_WEEK_CALENDAR[todayCalendarDay - 1]?.title || '今日排程'}）。
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSelectedDateKey(todayDateKey);
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
      </div>

      {/* 3. Anti-Comedone & Eye Care Dermatological Rule Callout */}
      <div className="bg-amber-50/90 rounded-2xl p-4 sm:p-5 border border-amber-200/90 text-amber-950 space-y-2.5">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
          <span>皮膚科防閉鎖粉刺與單一眼霜原則（至 2027 年底長期堅持）</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-amber-900/90">
          <div className="bg-white/80 p-3 rounded-xl border border-amber-200/60 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <Eye className="w-3.5 h-3.5 text-rose-500" />
              <span>① 嚴格「單一眼霜原則」，絕對不疊加兩款</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              眼周皮膚薄僅 0.5mm，皮脂腺極少。<strong>早晚各僅擦一款眼霜（米粒大小即可）</strong>。同時疊擦兩款會導致油脂超載誘發眼下脂肪粒，且眼部油脂下移擴散會直接堵塞下巴毛孔引發閉鎖粉刺。
            </p>
          </div>
          <div className="bg-white/80 p-3 rounded-xl border border-amber-200/60 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>② 下巴閉鎖粉刺區「嚴格清爽減法，厚霜禁區」</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              兩頰乾肌可塗冰河霜/角鯊霜；<strong>下巴嚴禁厚面霜與高滋潤乳液</strong>！下巴只薄擦 1 滴 #26-2 MUJI 米糠發酵乳液，配合週二 2% 水楊酸徹底杜絕內包硬閉口。
            </p>
          </div>
        </div>
      </div>

      {/* VIEW 1: Monthly Calendar View (2026/10 ~ 2027/12) */}
      {viewMode === 'month' && (
        <div className="space-y-4">
          {/* Month Selector Bar */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevMonth}
                disabled={currentMonthIndex <= 0}
                className="p-2 rounded-xl border border-stone-200 hover:bg-stone-50 disabled:opacity-30 transition cursor-pointer"
                title="上一個月"
              >
                <ChevronLeft className="w-4 h-4 text-stone-700" />
              </button>

              {/* Month Dropdown */}
              <div className="flex items-center gap-2">
                <select
                  value={selectedMonthKey}
                  onChange={(e) => setSelectedMonthKey(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 font-bold text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-400 cursor-pointer"
                >
                  {availableMonths.map((m) => (
                    <option key={m.key} value={m.key}>
                      {m.label} ({m.quarter}) {m.key === defaultMonthKey ? '★ 當前月' : ''}
                    </option>
                  ))}
                </select>

                <span className="text-xs font-mono font-bold px-2 py-1 rounded-lg bg-stone-100 text-stone-700">
                  {currentMonthOption.quarter}
                </span>
              </div>

              <button
                onClick={handleNextMonth}
                disabled={currentMonthIndex >= availableMonths.length - 1}
                className="p-2 rounded-xl border border-stone-200 hover:bg-stone-50 disabled:opacity-30 transition cursor-pointer"
                title="下一個月"
              >
                <ChevronRight className="w-4 h-4 text-stone-700" />
              </button>
            </div>

            {/* Quick Snap Back to Current Month & Today */}
            <div className="flex items-center gap-2">
              {selectedMonthKey !== defaultMonthKey && (
                <button
                  onClick={() => setSelectedMonthKey(defaultMonthKey)}
                  className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>回到本月（2026/10）</span>
                </button>
              )}
              <span className="text-xs text-stone-400 hidden sm:inline">
                共 {currentMonthOption.daysCount} 天
              </span>
            </div>
          </div>

          {/* 7-Column Calendar Grid */}
          <div className="bg-white rounded-3xl border border-stone-200/80 shadow-xs overflow-hidden">
            {/* Weekday Table Header */}
            <div className="grid grid-cols-7 border-b border-stone-200 bg-stone-50/90 text-center py-2.5 text-xs font-bold text-stone-600">
              <span>週一 (Mon)</span>
              <span>週二 (Tue)</span>
              <span>週三 (Wed)</span>
              <span>週四 (Thu)</span>
              <span>週五 (Fri)</span>
              <span className="text-amber-700">週六 (Sat)</span>
              <span className="text-rose-700">週日 (Sun)</span>
            </div>

            {/* Day Cells Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-stone-200">
              {monthDays.map((day) => {
                const isSelected = selectedDateKey === day.dateKey;
                const isToday = day.isToday;

                return (
                  <div
                    key={day.dateKey}
                    onClick={() => {
                      setSelectedDateKey(day.dateKey);
                      setActiveCycleDayNum(null);
                      setSopSubTab('night');
                      setExpandedCardIndex(null);
                    }}
                    className={`min-h-[140px] p-2.5 sm:p-3 transition-all cursor-pointer flex flex-col justify-between ${
                      day.isCurrentMonth ? 'bg-white' : 'bg-stone-50/70 opacity-60'
                    } ${
                      isToday
                        ? 'bg-rose-50/80 ring-2 ring-rose-400/80 z-10'
                        : isSelected
                        ? 'bg-amber-50/60 ring-2 ring-amber-400 z-10'
                        : 'hover:bg-stone-50'
                    }`}
                  >
                    <div>
                      {/* Top Bar: Date number + Today Badge + Cycle Week */}
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-sm font-black ${isToday ? 'text-rose-600' : 'text-stone-900'}`}>
                            {day.day}
                          </span>
                          {isToday && (
                            <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-[#ff1e56] text-white animate-pulse">
                              今日
                            </span>
                          )}
                        </div>

                        <span className="text-[10px] font-bold text-stone-400">
                          第{day.cycleWeekNum}週・{day.isOddWeek ? '奇' : '偶'}
                        </span>
                      </div>

                      {/* Night Type Theme Badge */}
                      <div className="mb-1.5 flex items-center gap-1 flex-wrap">
                        <span
                          className={`inline-block text-[10.5px] font-black px-2 py-0.5 rounded-md border leading-tight shadow-2xs ${day.nightBadgeClass || getThemeTagColor(day.nightType || day.themeType)}`}
                          style={day.nightHexBg ? {
                            backgroundColor: day.nightHexBg,
                            color: day.nightHexText,
                            borderColor: day.nightHexBorder
                          } : undefined}
                        >
                          【{day.nightType || day.themeType}】
                        </span>
                        <span className="text-[9.5px] font-bold text-stone-500">
                          {day.nightCategory || '排程'}夜
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-[11px] font-extrabold text-stone-900 line-clamp-1 mb-1">
                        {day.title}
                      </h4>

                      {/* Micro PM Summary */}
                      <p className="text-[10px] text-stone-500 line-clamp-2 leading-tight">
                        {day.pmSummary}
                      </p>
                    </div>

                    {/* Bottom Day in Cycle indicator */}
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400">
                      <span>DAY {day.dayInCycle}</span>
                      <span className="text-rose-600 font-semibold hover:underline">
                        SOP ➔
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: 4-Week Molecular Cycle Architecture */}
      {viewMode === 'cycle' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-2">
              <span className="px-2.5 py-1 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
                第 1 週：基底穩固與淨膚啟動
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">
                早晨使用 BOH 噴霧；週三【VT Reedle 300 微晶夜】；週四【離子儀超導玻尿酸】；週五【Celimax A 醇】；週六【suisai 酵素洗顏】；週日【雙面膜 SPA】。
              </p>
            </div>
            <div className="p-4 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-2">
              <span className="px-2.5 py-1 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                第 2 週：水光激活與深層注水
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">
                早晨 Ongredients 噴霧；週三【VT 300 + 妮維雅 630 淡斑】；週四【離子儀超導 PDRN 安瓶】；週五【Celimax A 醇】；週日【AZ100 痘痘藍膜】。
              </p>
            </div>
            <div className="p-4 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-2">
              <span className="px-2.5 py-1 rounded-xl bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
                第 3 週：優化調度與高階撫紋
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">
                【v5 核心】：週三舒緩保濕；<strong>週五跳過 A 醇屏障修護</strong>；<strong>週六執行 VT Reedle 300</strong>，活性夜間隔 ≥3 天，防止屏障過載。
              </p>
            </div>
            <div className="p-4 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-2">
              <span className="px-2.5 py-1 rounded-xl bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
                第 4 週：全效抗老與極致屏障
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">
                結算整月保養成果，強化兩頰冰河霜與妮維雅 630 淡斑晚霜，下巴嚴格控油維持零閉口。
              </p>
            </div>
          </div>

          {/* 28 Days Iteration */}
          <div className="space-y-6">
            <h3 className="font-extrabold text-stone-900 text-base">經典 28 天循環排程每日卡片：</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {FOUR_WEEK_CALENDAR.map((day) => {
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

                      {(() => {
                        const nightMeta = getNightTypeForDay(day.dayOfWeek, day.isOddWeek);
                        return (
                          <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                            <span
                              className={`inline-block text-[11px] font-black px-2.5 py-0.5 rounded-md border shadow-2xs ${nightMeta.badgeClass}`}
                              style={{
                                backgroundColor: nightMeta.hexBg,
                                color: nightMeta.hexText,
                                borderColor: nightMeta.hexBorder
                              }}
                            >
                              【{nightMeta.label}】
                            </span>
                            <span className="text-[10px] font-bold text-stone-500">
                              {nightMeta.category}夜
                            </span>
                          </div>
                        );
                      })()}

                      <h4 className="text-xs font-bold text-stone-900 line-clamp-1 mb-2">
                        {day.title}
                      </h4>

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

                    <button
                      onClick={() => {
                        setActiveCycleDayNum(day.dayNum);
                        setSelectedDateKey(null);
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
        </div>
      )}

      {/* VIEW 3: 2026-2027 Long-term Roadmap (5 Quarters) */}
      {viewMode === 'roadmap' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white rounded-3xl p-6 shadow-md border border-stone-800 space-y-2">
            <h3 className="font-extrabold text-base sm:text-lg text-amber-300">
              跨年 15 個月長程護膚軌跡（2026/10 ～ 2027/12）
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              將 4 週循環無限銜接，隨四季氣候轉變靈活微調，確立零閉鎖粉刺、角質強韌、深層注水與高效抗老目標。
            </p>
          </div>

          <div className="space-y-4">
            {LONG_TERM_ROADMAP.map((road, idx) => (
              <div
                key={road.quarter}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/80 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-stone-900 text-white font-mono font-bold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-black text-stone-900 text-base">
                        {road.quarter}：{road.title}
                      </h4>
                      <span className="text-xs text-stone-500 font-mono">
                        {road.timeRange}
                      </span>
                    </div>
                  </div>

                  <span className={`text-xs font-bold px-3 py-1 rounded-xl border ${road.badgeColor}`}>
                    {road.focusTitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
                  {road.keyDirectives.map((dir, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{dir}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. High-Fidelity Day SOP Modal with Explicit Products and Hand Techniques */}
      {activeDayDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-stone-200">
            {/* 1. Modal Dark Top Bar */}
            <div className="bg-[#1c1917] text-white p-5 sm:p-6 flex items-start justify-between gap-3">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-[#ff1e56] text-white shadow-xs">
                    DAY {activeDayDetail.dayInCycle}
                  </span>
                  <span className="text-xs font-bold text-stone-300">
                    {activeDayDetail.dateFormattedZh}
                  </span>
                  <span
                    className="text-xs font-black px-2.5 py-0.5 rounded-md border shadow-xs"
                    style={{
                      backgroundColor: activeDayDetail.nightHexBg || '#ffedd5',
                      color: activeDayDetail.nightHexText || '#7c2d12',
                      borderColor: activeDayDetail.nightHexBorder || '#fdba74'
                    }}
                  >
                    【夜晚類型：{activeDayDetail.nightType}】
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white/10 text-stone-200 border border-white/20">
                    第 {activeDayDetail.cycleWeekNum} 週・{activeDayDetail.isOddWeek ? '奇數週' : '偶數週'}（{activeDayDetail.nightCategory}夜）
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {activeDayDetail.title}
                </h3>
              </div>

              {/* Prev / Next & Close */}
              <div className="flex items-center gap-1.5 text-stone-400">
                <button
                  onClick={handlePrevDayInModal}
                  className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition cursor-pointer"
                  title="上一天"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextDayInModal}
                  className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition cursor-pointer"
                  title="下一天"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setSelectedDateKey(null);
                    setActiveCycleDayNum(null);
                  }}
                  className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition cursor-pointer ml-1"
                  title="關閉"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 2. Three Sub-Tabs */}
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
              {/* TAB 1: Night SOP */}
              {sopSubTab === 'night' && (
                <div className="space-y-4">
                  {/* Strategy Box */}
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

                  {/* Product Cards */}
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
                          <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="px-2.5 py-1 rounded-lg bg-[#292524] text-white text-[11px] font-bold flex-shrink-0">
                                {item.categoryLabel || '保養'}
                              </span>

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

                            <div className="flex items-center gap-2 flex-shrink-0">
                              {item.timerDurationMinutes && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1">
                                  <Timer className="w-3 h-3" />
                                  <span>{item.timerDurationMinutes} 分鐘</span>
                                </span>
                              )}
                              <div className="text-stone-400">
                                {isExpanded ? <ChevronDown className="w-4 h-4 text-stone-800" /> : <ChevronRight className="w-4 h-4" />}
                              </div>
                            </div>
                          </div>

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

              {/* TAB 2: Morning SOP */}
              {sopSubTab === 'morning' && (
                <div className="space-y-4">
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

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                      <Sun className="w-4 h-4 text-amber-600" />
                      <span>
                        晨間保養與妝前打底核心策略（{activeDayDetail.isOddWeek ? '奇數週' : '偶數週'}・
                        {morningMode === 'bare' ? '素顏水光' : '精緻底妝'}）
                      </span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-medium">
                      {morningMode === 'bare'
                        ? `清水洗臉 ➔ #15小紫瓶 ➔ ${
                            activeDayDetail.isOddWeek ? '#18 BOH噴霧' : '#19 Ongredients噴霧'
                          } ➔ #27 ANUA桃子精華 ➔ #37 檸檬眼霜（單擦極簡） ➔ 兩頰(#27-2靈芝乳) ＋ 下巴(#26-2米糠乳) ➔ #39 d’Alba水潤防曬`
                        : '溫和洗臉 ➔ #15小紫瓶 ➔ #38 BOBBI BROWN眼霜(成膜1分) ➔ #34 BOBBI BROWN橘子霜(僅兩頰) ＋ #26-2米糠乳(下巴) ➔ #40 曼秀雷敦防曬(成膜3分) ➔ #41 植村秀妝前乳'}
                    </p>
                  </div>

                  <div className="font-bold text-stone-800 text-xs sm:text-sm flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>晨間精準保養與防曬打底清單（依序執行）：</span>
                    </div>
                    <span className="text-[11px] text-stone-400 font-normal">共 {currentMorningSteps.length} 步</span>
                  </div>

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
                                {isExpanded ? <ChevronDown className="w-4 h-4 text-stone-800" /> : <ChevronRight className="w-4 h-4" />}
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

              {/* TAB 3: Supplements & Rx */}
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
                      <p className="text-xs text-stone-700 leading-relaxed">
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
                      <span className="font-bold text-stone-900 block">🌙 睡前放鬆就寢時段：</span>
                      <p className="text-xs text-stone-700">
                        • 癲必停膜衣錠 500mg (0.5 顆) ＋ 易靜錠 2mg (羅眠樂 1 顆)。吞服後 15-30 分鐘內熄燈就寢。
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Actions */}
            <div className="p-4 sm:p-5 border-t border-stone-100 bg-stone-50/80 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setSelectedDateKey(null);
                  setActiveCycleDayNum(null);
                }}
                className="px-4 py-2.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-700 font-bold text-xs transition cursor-pointer"
              >
                關閉
              </button>

              <button
                onClick={() => {
                  onSelectDayRoutine(
                    activeDayDetail.dayOfWeek,
                    activeDayDetail.isOddWeek ? 'odd' : 'even'
                  );
                  setSelectedDateKey(null);
                  setActiveCycleDayNum(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff1e56] to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition cursor-pointer"
              >
                <span>前往今日打卡執行</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
