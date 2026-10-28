import React, { useState } from 'react';
import { DayOfWeek, WeekType, RoutineMode, ProductItem, StepItem } from '../types';
import {
  DAY_ROUTINES,
  MORNING_PRESCRIPTION_STEPS,
  NOON_SUPPLEMENT_STEPS,
  BEDTIME_PRESCRIPTION_STEPS,
  ALL_PRODUCTS
} from '../data/amandaRoutineData';
import { getCanonicalNightSteps, getCanonicalMorningSteps } from '../data/canonicalRoutines';
import { getDayOfWeekFromDate, getTodayCalendarDayNum, getTodayFormattedZh } from '../utils/storage';
import {
  Sparkles,
  CheckCircle2,
  Circle,
  Timer,
  Clock,
  Pill,
  Sun,
  Moon,
  Info,
  Droplets,
  Layers,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  Eye,
  AlertTriangle
} from 'lucide-react';

interface TodayViewProps {
  selectedDay: DayOfWeek;
  setSelectedDay: (d: DayOfWeek) => void;
  weekType: WeekType;
  setWeekType: (w: WeekType) => void;
  routineMode: RoutineMode;
  setRoutineMode: (m: RoutineMode) => void;
  completedStepIds: string[];
  onToggleStep: (stepId: string, totalSteps: number) => void;
  onOpenTimerForDuration: (mins: number, title: string) => void;
  onSelectProduct: (p: ProductItem) => void;
}

export const TodayView: React.FC<TodayViewProps> = ({
  selectedDay,
  setSelectedDay,
  weekType,
  setWeekType,
  routineMode,
  setRoutineMode,
  completedStepIds,
  onToggleStep,
  onOpenTimerForDuration,
  onSelectProduct
}) => {
  const [filterSection, setFilterSection] = useState<'all' | 'skincare' | 'supplements'>('all');
  const [expandedStepId, setExpandedStepId] = useState<string | null>(null);

  const currentRoutine = DAY_ROUTINES.find(r => r.day === selectedDay) || DAY_ROUTINES[1];
  const activeWeekData = weekType === 'even' ? currentRoutine.evenWeek : currentRoutine.oddWeek;

  // Single Canonical Source of Truth for Daily Steps
  const isOdd = weekType === 'odd';
  const morningSkincareSteps = getCanonicalMorningSteps(routineMode === 'makeup', isOdd);

  const nightAllSteps = getCanonicalNightSteps(selectedDay, isOdd);
  const nightCleansingSteps = nightAllSteps.filter(s => s.timingCategory === 'night_cleansing');
  const nightSkincareSteps = nightAllSteps.filter(s => s.timingCategory === 'night_skincare');
  const nightBodySteps = nightAllSteps.filter(s => s.timingCategory === 'night_body');

  // All combined steps in chronological order (100% synchronized with Calendar SOP modal)
  const allTodaySteps: StepItem[] = [
    // 1. Morning Prescription & Supplements
    ...MORNING_PRESCRIPTION_STEPS,
    // 2. Morning Skincare
    ...morningSkincareSteps,
    // 3. Noon Supplements
    ...NOON_SUPPLEMENT_STEPS,
    // 4. Night Cleansing (Itemized by product)
    ...nightCleansingSteps,
    // 5. Night Skincare Routine
    ...nightSkincareSteps,
    // 6. Night Body Lotion
    ...nightBodySteps,
    // 7. Bedtime Prescription
    ...BEDTIME_PRESCRIPTION_STEPS
  ];

  const totalSteps = allTodaySteps.length;
  const completedCount = allTodaySteps.filter(s => completedStepIds.includes(s.id)).length;
  const completionPercentage = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

  // Group steps for clean presentation matching the SOP modal sequence
  const sections = [
    {
      id: 'morning_rx',
      title: '☀️ 早晨：常規處方藥與保健品',
      subtitle: '早餐後立即吃處方藥，維他命C隨餐，【間隔 60 分鐘後】吃活性 B 群',
      badge: '嚴格時間分流',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      categoryType: 'supplements',
      steps: MORNING_PRESCRIPTION_STEPS
    },
    {
      id: 'morning_care',
      title: routineMode === 'makeup' ? '💄 晨間：精緻底妝前保濕打底' : '☀️ 晨間：素顏水光保養與防曬',
      subtitle: routineMode === 'makeup'
        ? '防起屑減法版：眼下Bobbi Brown眼霜、兩頰橘子霜、下巴米糠乳、曼秀雷敦防曬'
        : '自然水光出門：小紫瓶 ➔ 噴霧 ➔ 兩頰靈芝乳 / 下巴米糠乳 ➔ d’Alba 潤色防曬',
      badge: routineMode === 'makeup' ? '全妝日路線' : '素顏日路線',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      categoryType: 'skincare',
      steps: morningSkincareSteps
    },
    {
      id: 'noon_rx',
      title: '🌤️ 午/晚餐：隨餐脂溶性保健品',
      subtitle: '需食物油脂輔助吸收：Kirkland D3 (2錠) ＋ 魚油 (1粒) ＋ 蔓越莓 (1-2粒)',
      badge: '油脂輔助吸收',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      categoryType: 'supplements',
      steps: NOON_SUPPLEMENT_STEPS
    },
    {
      id: 'night_wash',
      title: '🌙 晚間：主題洗卸與毛孔淨化',
      subtitle: `今日洗卸對策：${activeWeekData.cleansingDesc}`,
      badge: '角質屏障防護',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      categoryType: 'skincare',
      steps: nightCleansingSteps
    },
    {
      id: 'night_care',
      title: `🌙 晚間：精準分子保養排程（${currentRoutine.dayName}・${weekType === 'even' ? '偶數週' : '奇數週'}）`,
      subtitle: activeWeekData.specialProcedure?.desc || currentRoutine.themeDescription,
      badge: currentRoutine.themeBadge,
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      categoryType: 'skincare',
      steps: nightSkincareSteps
    },
    {
      id: 'night_body',
      title: '🛁 晚間：秋冬身體修護乳',
      subtitle: activeWeekData.bodyLotionDesc,
      badge: '四肢屏障鎖水',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      categoryType: 'skincare',
      steps: nightBodySteps
    },
    {
      id: 'bedtime_rx',
      title: '🌙 睡前：放鬆與神經穩定處方藥',
      subtitle: '夜間腸胃僅保留給安眠與抗痙攣藥物：癲必停 0.5 顆 ＋ 易靜錠 (羅眠樂) 1 顆',
      badge: '睡前安眠',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      categoryType: 'supplements',
      steps: BEDTIME_PRESCRIPTION_STEPS
    }
  ];

  const daysList: { id: DayOfWeek; label: string; theme: string; tag: string }[] = [
    { id: 'mon', label: '週一', theme: '💧 頂級修護夜', tag: '修護' },
    { id: 'tue', label: '週二', theme: '🧪 水楊酸夜 (粉刺大掃除)', tag: '水楊酸' },
    { id: 'wed', label: '週三', theme: '⚡ 微晶激活夜 (VT 300)', tag: '微晶' },
    { id: 'thu', label: '週四', theme: '🛡️ 儀器深層導入夜', tag: '離子儀' },
    { id: 'fri', label: '週五', theme: '🌙 A 醇微晶抗老夜', tag: 'A醇' },
    { id: 'sat', label: '週六', theme: '✨ 週末去角質與淨膚夜', tag: '淨膚' },
    { id: 'sun', label: '週日', theme: '🌿 深度保養與面膜夜', tag: '雙面膜' }
  ];

  // Helper to find matching product for detail popup
  const handleProductLookup = (codeOrName: string) => {
    const cleaned = codeOrName.replace('#', '').trim();
    const found = ALL_PRODUCTS.find(p => p.id === cleaned || p.code === codeOrName || codeOrName.includes(p.name));
    if (found) {
      onSelectProduct(found);
    }
  };

  const actualTodayDay = getDayOfWeekFromDate();
  const todayCalendarDay = getTodayCalendarDayNum(weekType);
  const todayDateStr = getTodayFormattedZh();

  return (
    <div className="space-y-6 pb-16">
      {/* 1. Weekday Selector Carousel / Bar */}
      <div className="bg-white rounded-2xl p-3 border border-stone-200/80 shadow-xs">
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-stone-800">每週主題排程速覽 ＆ 星期切換</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              weekType === 'even' ? 'bg-emerald-50 text-emerald-700' : 'bg-indigo-50 text-indigo-700'
            }`}>
              {weekType === 'even' ? '偶數週 (Even)' : '奇數週 (Odd)'}
            </span>
            <span className="text-xs text-stone-500 hidden sm:inline">
              | 即時日期：{todayDateStr}（DAY {todayCalendarDay}）
            </span>
          </div>
          <button
            onClick={() => setWeekType(weekType === 'even' ? 'odd' : 'even')}
            className="text-xs text-stone-500 hover:text-stone-800 underline transition cursor-pointer"
          >
            切換為{weekType === 'even' ? '奇數週' : '偶數週'} ➔
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {daysList.map((d) => {
            const isSelected = selectedDay === d.id;
            const isActualToday = d.id === actualTodayDay;
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDay(d.id)}
                className={`p-2.5 rounded-xl text-left transition-all border cursor-pointer relative ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm ring-2 ring-stone-900/10'
                    : isActualToday
                      ? 'bg-rose-50/70 hover:bg-rose-100/80 text-stone-800 border-rose-300 ring-1 ring-rose-300'
                      : 'bg-stone-50/70 hover:bg-stone-100 text-stone-700 border-stone-200/70'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className={`text-sm font-bold ${isSelected ? 'text-amber-300' : 'text-stone-800'}`}>
                      {d.label}
                    </span>
                    {isActualToday && (
                      <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-[#ff1e56] text-white animate-pulse">
                        今日
                      </span>
                    )}
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-medium ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-stone-200/80 text-stone-600'
                  }`}>
                    {d.tag}
                  </span>
                </div>
                <p className={`text-xs mt-1 truncate ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  {d.theme.replace(/^[^\w\s]*\s*/, '')}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Hero Card (Matching the Reference Screenshot) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white p-6 sm:p-8 shadow-xl border border-stone-800">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
                <span>{currentRoutine.themeTitle}</span>
              </h2>
              <span className={`text-xs px-2.5 py-1 rounded-full font-bold shadow-xs ${
                weekType === 'even' ? 'bg-emerald-500/90 text-white' : 'bg-indigo-500/90 text-white'
              }`}>
                {weekType === 'even' ? '偶數週排程' : '奇數週排程'}
              </span>
              {selectedDay === actualTodayDay && (
                <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-[#ff1e56] text-white shadow-xs animate-pulse">
                  🌟 今日即時排程 (DAY {todayCalendarDay})
                </span>
              )}
            </div>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {currentRoutine.themeDescription}
            </p>

            {/* Targeted Zones Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-200">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>{currentRoutine.cheeksCare}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-200">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>{currentRoutine.chinCare}</span>
              </div>
            </div>

            {/* Routine Mode Switcher Pill */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="text-xs text-stone-400">今日晨間路線：</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setRoutineMode('bare')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                    routineMode === 'bare'
                      ? 'bg-emerald-500 text-white shadow-sm ring-1 ring-emerald-300'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>路線 A・素顏日模式 (自然水光・快速出門)</span>
                </button>
                <button
                  onClick={() => setRoutineMode('makeup')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                    routineMode === 'makeup'
                      ? 'bg-rose-500 text-white shadow-sm ring-1 ring-rose-300'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  <span>💄 全妝打底模式</span>
                </button>
              </div>
            </div>
          </div>

          {/* Completion Progress Gauge (Matching Screenshot Right Side) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="bg-stone-800/80 backdrop-blur-md rounded-2xl p-5 border border-stone-700/60 text-center w-full max-w-[220px] shadow-lg">
              <div className="text-xs font-semibold text-stone-400 mb-2">今日完成度</div>

              {/* Circular Gauge */}
              <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="46"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-stone-700/60"
                    fill="transparent"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="46"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={289}
                    strokeDashoffset={289 - (289 * completionPercentage) / 100}
                    strokeLinecap="round"
                    className={`transition-all duration-700 ease-out ${
                      completionPercentage === 100
                        ? 'text-emerald-400'
                        : completionPercentage > 50
                        ? 'text-amber-400'
                        : 'text-rose-400'
                    }`}
                    fill="transparent"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white">{completionPercentage}%</span>
                  <span className="text-[10px] text-stone-400 font-medium">
                    {completedCount} / {totalSteps} 項
                  </span>
                </div>
              </div>

              {completionPercentage === 100 ? (
                <div className="mt-3 text-xs font-bold text-emerald-400 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>今日目標全部達成！</span>
                </div>
              ) : (
                <div className="mt-3 text-[11px] text-stone-400">
                  尚餘 {totalSteps - completedCount} 項未完成
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Anti-Comedone & Eye Care Discipline Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 rounded-2xl p-4 sm:p-5 border border-amber-200/80 text-amber-950 space-y-2.5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span>皮膚科醫師級・防閉鎖粉刺＆眼周減法防護守則（杜絕悶痘、長粉刺與脂肪粒）</span>
          </div>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300/60">
            減法護理・避免步驟繁複堆疊
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-amber-900/90">
          <div className="bg-white/85 p-3 rounded-xl border border-amber-200/60 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <Eye className="w-3.5 h-3.5 text-rose-500" />
              <span>① 嚴格「單一眼霜原則」，絕對不疊加兩款</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              眼周肌膚薄且無皮脂腺。<strong>早晚各僅擦一款眼霜（米粒大小即可）</strong>。同時疊擦兩款會導致油脂過載長眼下脂肪粒，且眼霜下移擴散會直接堵塞下巴毛孔引發閉鎖粉刺。
            </p>
          </div>
          <div className="bg-white/85 p-3 rounded-xl border border-amber-200/60 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>② 下巴閉鎖粉刺區「厚霜禁區，極簡呼吸」</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              兩頰乾肌擦冰河霜/角鯊霜；<strong>下巴嚴禁厚面霜與高滋潤乳液</strong>！下巴只薄擦 1 滴 #26-2 MUJI 米糠發酵乳液，維持毛孔清爽透氣，徹底根絕內包閉口硬塊。
            </p>
          </div>
        </div>
      </div>

      {/* 3. "今日重點摘要 & 特殊程序" Highlight Cards (Matching Reference Screenshot) */}
      <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base">
                今日重點摘要 ＆ 特殊程序
              </h3>
              <p className="text-xs text-stone-500">
                系統已自動抓取當日必須執行的特殊程序（儀器操作、酸類/A醇、面膜或關鍵服藥間隔）
              </p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
            ● 自動偵測排程
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Core Active Procedure */}
          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-purple-700">
              <span className="flex items-center gap-1">
                <span>⚡</span>
                <span>{activeWeekData.specialProcedure?.tag || '核心程序'}</span>
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md">
                晚間主題
              </span>
            </div>
            <h4 className="font-bold text-stone-900 text-sm">
              {activeWeekData.specialProcedure?.title || currentRoutine.themeTitle}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {activeWeekData.specialProcedure?.desc || currentRoutine.themeDescription}
            </p>
          </div>

          {/* Card 2: Rx & Thorne B Interval */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-amber-700">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>每日早晨處方藥</span>
              </span>
              <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md font-bold">
                間隔 60 分鐘
              </span>
            </div>
            <h4 className="font-bold text-stone-900 text-sm">
              Thorne 基本活性 B 群黃金服用間隔
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              早餐飯後已隨餐吃 PTU 3顆 ＋ 癲鍵錠 1顆，必須**間隔 60分鐘**再吃 Thorne B 群，避免高活性 B 群與早晨處方藥在腸道產生吸收競爭。
            </p>
            <button
              onClick={() => onOpenTimerForDuration(60, 'Thorne 活性 B 群 60 分鐘間隔倒數')}
              className="mt-1 text-xs text-amber-800 font-semibold underline flex items-center gap-1 hover:text-amber-950 cursor-pointer"
            >
              <Timer className="w-3 h-3" />
              <span>設定 60 分鐘倒數計時 ➔</span>
            </button>
          </div>

          {/* Card 3: Dry cheeks vs Chin acne */}
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-rose-700">
              <span className="flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5" />
                <span>乾肌 vs 粉刺分流</span>
              </span>
              <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded-md">
                分區鐵則
              </span>
            </div>
            <h4 className="font-bold text-stone-900 text-sm">
              兩頰滋潤封層 ＆ 下巴清爽防痘
            </h4>
            <ul className="text-xs text-stone-600 space-y-1">
              <li className="flex items-start gap-1">
                <span className="text-rose-500 font-bold">•</span>
                <span>
                  <strong>兩頰乾肌</strong>：擦 {weekType === 'even' ? '#32 契爾氏冰河霜' : '#29-2 S.NATURE 角鯊霜'} 深層封層
                </span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-amber-500 font-bold">•</span>
                <span>
                  <strong>下巴粉刺</strong>：擦 #26-2 MUJI 米糠乳液與 #10 小林抗痘水，<strong>嚴禁塗厚霜與橘子霜！</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Filter section pills */}
      <div className="flex items-center justify-between flex-wrap gap-2 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-500 font-medium">篩選項目：</span>
          <div className="inline-flex rounded-xl bg-stone-100 p-1 text-xs font-medium">
            <button
              onClick={() => setFilterSection('all')}
              className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                filterSection === 'all' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              全部排程 ({totalSteps})
            </button>
            <button
              onClick={() => setFilterSection('skincare')}
              className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                filterSection === 'skincare' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              外用保養與洗卸
            </button>
            <button
              onClick={() => setFilterSection('supplements')}
              className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                filterSection === 'supplements' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              處方藥與保健品
            </button>
          </div>
        </div>

        <div className="text-xs text-stone-500">
          點擊任一步驟即可完成打卡，系統將同步記錄至歷史分析
        </div>
      </div>

      {/* 5. Detailed Steps Checklist by Section */}
      <div className="space-y-6">
        {sections.map((sec) => {
          if (filterSection === 'skincare' && sec.categoryType !== 'skincare') return null;
          if (filterSection === 'supplements' && sec.categoryType !== 'supplements') return null;

          const sectionCompletedCount = sec.steps.filter(s => completedStepIds.includes(s.id)).length;
          const isSectionAllDone = sectionCompletedCount === sec.steps.length;

          return (
            <div
              key={sec.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/80 shadow-xs space-y-4"
            >
              {/* Section Header */}
              <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-stone-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-stone-900 text-base">{sec.title}</h3>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-semibold border ${sec.badgeColor}`}>
                      {sec.badge}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">{sec.subtitle}</p>
                </div>
                <div className="text-xs font-medium text-stone-400">
                  進度：<span className="text-stone-800 font-bold">{sectionCompletedCount}</span> / {sec.steps.length}
                </div>
              </div>

              {/* Steps List */}
              <div className="space-y-2.5">
                {sec.steps.map((step) => {
                  const isDone = completedStepIds.includes(step.id);
                  return (
                    <div
                      key={step.id}
                      className={`group p-3.5 sm:p-4 rounded-2xl border transition-all ${
                        isDone
                          ? 'bg-stone-50/80 border-stone-200/60 opacity-80'
                          : step.isKeyFocus
                          ? 'bg-amber-50/40 border-amber-200/90 hover:border-amber-300 shadow-xs'
                          : 'bg-white border-stone-200 hover:border-stone-300 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {/* Checkbox */}
                        <button
                          onClick={() => onToggleStep(step.id, totalSteps)}
                          className={`mt-0.5 flex-shrink-0 cursor-pointer transition ${
                            isDone ? 'text-emerald-600' : 'text-stone-300 hover:text-stone-500'
                          }`}
                          title={isDone ? '取消打卡' : '點擊完成打卡'}
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 fill-emerald-100" />
                          ) : (
                            <Circle className="w-5 h-5" />
                          )}
                        </button>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between flex-wrap gap-1.5">
                            <div className="flex items-center gap-2 flex-wrap">
                              {step.categoryLabel && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#292524] text-white">
                                  {step.categoryLabel}
                                </span>
                              )}
                              {step.productCode && (
                                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                                  {step.productCode}
                                </span>
                              )}
                              <span
                                className={`text-sm font-bold ${
                                  isDone ? 'line-through text-stone-500' : 'text-stone-900'
                                }`}
                              >
                                {step.productName}
                              </span>
                              {step.targetZoneText && (
                                <span className="text-[11px] px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 font-medium">
                                  {step.targetZoneText}
                                </span>
                              )}
                            </div>

                            {/* Actions: Timer or Info */}
                            <div className="flex items-center gap-2">
                              {step.timerDurationMinutes && (
                                <button
                                  onClick={() =>
                                    onOpenTimerForDuration(
                                      step.timerDurationMinutes!,
                                      `${step.productName}（${step.timerDurationMinutes}分鐘倒數）`
                                    )
                                  }
                                  className="text-[11px] px-2 py-0.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 font-medium flex items-center gap-1 cursor-pointer transition"
                                >
                                  <Timer className="w-3 h-3" />
                                  <span>倒數 {step.timerDurationMinutes} 分鐘</span>
                                </button>
                              )}
                              {step.technique && (
                                <button
                                  onClick={() =>
                                    setExpandedStepId(expandedStepId === step.id ? null : step.id)
                                  }
                                  className="text-[11px] px-2 py-0.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 transition flex items-center gap-0.5 cursor-pointer font-medium"
                                  title="展開/收起手法"
                                >
                                  <Sparkles className="w-3 h-3 text-amber-600" />
                                  <span>手法</span>
                                  {expandedStepId === step.id ? (
                                    <ChevronDown className="w-3 h-3" />
                                  ) : (
                                    <ChevronRight className="w-3 h-3" />
                                  )}
                                </button>
                              )}
                              {step.productCode && (
                                <button
                                  onClick={() => handleProductLookup(step.productCode!)}
                                  className="text-[11px] text-stone-400 hover:text-stone-800 transition flex items-center gap-0.5 cursor-pointer"
                                  title="查看產品分子細節"
                                >
                                  <span>細節</span>
                                  <ChevronRight className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          </div>

                          <p
                            className={`text-xs mt-1.5 leading-relaxed ${
                              isDone ? 'text-stone-400' : 'text-stone-600'
                            }`}
                          >
                            {step.instruction}
                          </p>

                          {/* Expanded Hand Technique and Amount */}
                          {expandedStepId === step.id && step.technique && (
                            <div className="mt-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-stone-800 space-y-1.5 text-xs animate-in fade-in duration-150">
                              <div className="flex items-center justify-between text-[11px] font-medium text-stone-500">
                                <span>建議用量：<strong className="text-stone-800">{step.amount || '適量'}</strong></span>
                                <span>適用部位：<strong className="text-stone-800">{step.targetZoneText || '全臉'}</strong></span>
                              </div>
                              <div className="text-[11px] text-stone-700 leading-relaxed">
                                {step.technique}
                              </div>
                              {step.caution && (
                                <div className="text-[10px] text-rose-800 bg-rose-50 p-1.5 rounded-lg border border-rose-200 font-medium">
                                  {step.caution}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
