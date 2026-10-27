import React, { useState } from 'react';
import { FOUR_WEEK_CALENDAR, DAY_ROUTINES, WEEKDAY_INFO } from '../data/amandaRoutineData';
import { DayOfWeek, WeekType } from '../types';
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
  ArrowLeft
} from 'lucide-react';

interface CalendarViewProps {
  currentDay: DayOfWeek;
  onSelectDayRoutine: (day: DayOfWeek, weekType: WeekType) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ currentDay, onSelectDayRoutine }) => {
  const [activeModalDayNum, setActiveModalDayNum] = useState<number | null>(null);
  const [sopSubTab, setSopSubTab] = useState<'morning' | 'night' | 'rx'>('morning');

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
    }
  };

  const handleNextDay = () => {
    if (activeModalDayNum && activeModalDayNum < 28) {
      setActiveModalDayNum(activeModalDayNum + 1);
    }
  };

  // Detailed morning 7-step SOP matching image_eb60dd89.png
  const getMorningSteps = (isOdd: boolean) => [
    {
      step: 1,
      title: '晨間清潔',
      products: ['#06 綠茶保濕胺基酸潔面乳', '#05 Relove'],
      instruction: '清水洗臉即可；若夜間下巴或 T 字出油較多，可使用少量 #06 綠茶保濕胺基酸潔面乳 或 #05 Relove 胺基酸潔面乳溫和清潔。'
    },
    {
      step: 2,
      title: '前導保濕與美白提亮',
      products: ['#14 COSME', '#15 DECORTE'],
      instruction: '按壓 #14 黛珂小紫瓶 1~2 下於掌心，雙手溫熱後「由內向外輕輕按拍全臉與眼下」（嚴格用手溫按拍，絕對不用化妝棉擦拭！）；隨後搭配 #15 黛珂瑩潤粹白極光煥采精粹 (1.8X) 按壓 1 下，均勻輕拍於全臉或暗沉處加強透亮。'
    },
    {
      step: 3,
      title: '晨間噴霧交錯',
      products: [isOdd ? '#12 BOH' : '#13 Ongredients'],
      instruction: isOdd
        ? '【奇數週】噴上 #12 BOH 維他命 B5 積雪草保濕潤澤噴霧，全面安撫肌底乾燥。'
        : '【偶數週】噴上 #13 Ongredients 屏障鎮靜水光噴霧，全臉輕潤補水打造透亮水光感。'
    },
    {
      step: 4,
      title: '晨間精華分流（素顏日 vs 底妝日）',
      products: ['#16 Torriden', '#27 ANUA'],
      instruction: '【素顏日】全臉均勻塗抹 #16 Torriden 低分子玻尿酸保濕精華，偶數週可加擦 #27 ANUA 桃子菸鹼醯胺精華提亮；【底妝日】若擔心起屑可簡化精華，以維持輕薄清透為原則。'
    },
    {
      step: 5,
      title: '眼周防護與晨間眼霜',
      products: ['#37 BRINGGREEN', '#38 BOBBI BROWN'],
      instruction: '【素顏日】薄擦 #37 BRINGGREEN 超級檸檬眼霜或 Neogene 亮眼霜改善暗沉；【底妝日】取米粒大小擦 #38 BOBBI BROWN 維他命完美眼霜，靜置 1 分鐘完全成膜，杜絕遮瑕膏卡粉。'
    },
    {
      step: 6,
      title: '分區晨間乳液與面霜（兩頰潤澤 vs 下巴清爽）',
      products: ['#28 靈芝乳', '#26-2 米糠乳', '#34 橘子霜'],
      instruction: '【兩頰】素顏日擦 #28 靈芝水凝乳液，底妝日按壓 #34 BOBBI BROWN 橘子霜打造服貼基底；【下巴出油區】唯一指定薄擦 #26-2 MUJI 米糠乳液，嚴禁塗抹橘子霜避免午後悶痘！'
    },
    {
      step: 7,
      title: '日間防曬與妝前校色',
      products: ['#39 d’Alba', '#40 曼秀雷敦', '#41 植村秀'],
      instruction: '【素顏日】塗抹 #39 d’Alba 水潤粉光校色防曬霜出門；【底妝日】擦 #40 曼秀雷敦透明玻尿酸防曬，靜置 3-5 分鐘成膜後，局部點塗 #41 植村秀紫色/膚色妝前乳去黃提亮。'
    }
  ];

  // Detailed night steps according to day
  const getNightStepsForDay = (day: DayOfWeek, isOdd: boolean) => {
    const routine = DAY_ROUTINES.find(r => r.day === day) || DAY_ROUTINES[1];
    const data = isOdd ? routine.oddWeek : routine.evenWeek;

    return {
      strategySequence: day === 'tue'
        ? '洗臉擦乾 ➔ 裸肌水楊酸 (下巴3分) ➔ #14小紫瓶 ➔ #28 黛珂AQ乳 (僅兩頰) ➔ 化妝水 ➔ 兩頰(角鯊霜/冰河霜) ＋ 下巴(#25米糠乳)'
        : day === 'wed'
        ? '洗臉擦乾 ➔ 裸肌乾壓 VT Reedle 300 ➔ #25 PDRN安瓶 ➔ 眼霜 ➔ 兩頰(Dr.Reju-All修復霜/630晚霜) ＋ 下巴(米糠乳)'
        : day === 'fri'
        ? '洗臉擦乾 ➔ #14小紫瓶 ➔ 化妝水(停AQ乳) ➔ 眼霜隔離眼周 ➔ #24 Celimax A醇 (豌豆大) ➔ 溫和封層霜'
        : '洗卸淨化 ➔ #14小紫瓶 ➔ #28 AQ乳 (僅兩頰) ➔ 補水化妝水 ➔ 功能精華 ➔ 眼霜 ➔ 分區鎖水(兩頰封層/下巴米糠乳)',
      steps: data.skincareSteps
    };
  };

  return (
    <div className="space-y-8 pb-16">
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
                const isTodayCard = day.dayNum === 9; // October 27 is Day 9 in calendar
                return (
                  <div
                    key={day.dayNum}
                    className={`rounded-2xl p-3.5 border transition-all flex flex-col justify-between ${
                      isTodayCard
                        ? 'bg-rose-50/40 border-rose-300 ring-2 ring-rose-400/30 shadow-md'
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

                    {/* View SOP Button (Opens modal matching image_eb60dd89.png) */}
                    <button
                      onClick={() => {
                        setActiveModalDayNum(day.dayNum);
                        setSopSubTab('morning');
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

      {/* High-Fidelity Day SOP Modal (100% Matching image_eb60dd89.png) */}
      {activeDayData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-stone-200">
            {/* 1. Modal Dark Top Bar (Matching image_eb60dd89.png) */}
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
                onClick={() => setSopSubTab('morning')}
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
                onClick={() => setSopSubTab('night')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition cursor-pointer ${
                  sopSubTab === 'night'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span>夜間深度修護</span>
              </button>

              <button
                onClick={() => setSopSubTab('rx')}
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
              {/* TAB 1: Morning SOP (Matching image_eb60dd89.png) */}
              {sopSubTab === 'morning' && (
                <div className="space-y-4">
                  {/* Yellow Core Strategy Summary Box */}
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                      <Sun className="w-4 h-4 text-amber-600" />
                      <span>晨間保養與妝前打底核心策略（{activeDayData.isOddWeek ? '奇數週' : '偶數週'}）</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-medium">
                      清水洗臉 ➔ #14小紫瓶 ➔ #15極光精粹 ➔ {activeDayData.isOddWeek ? '#12 BOH噴霧' : '#13 Ongredients噴霧'} ➔ #16 Torriden玻尿酸 ➔ 眼霜 ➔ 兩頰(#30黛珂小紫霜/#33橘子霜) ＋ 下巴(#25米糠乳) ➔ 防曬(#38/#39)
                    </p>
                  </div>

                  {/* Section Title */}
                  <div className="font-bold text-stone-800 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>晨間 7 步保養 SOP（素顏日 vs 完整底妝保濕減法步驟）：</span>
                  </div>

                  {/* 7 Numbered Step Cards */}
                  <div className="space-y-2.5">
                    {getMorningSteps(activeDayData.isOddWeek).map(st => (
                      <div
                        key={st.step}
                        className="p-3.5 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all space-y-1.5 shadow-2xs"
                      >
                        <div className="flex items-center justify-between flex-wrap gap-1.5">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                              {st.step}
                            </span>
                            <span className="font-bold text-stone-900 text-xs sm:text-sm">
                              {st.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 flex-wrap">
                            {st.products.map((p, idx) => (
                              <span
                                key={idx}
                                className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="text-xs text-stone-600 pl-7 leading-relaxed">
                          {st.instruction}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: Night SOP */}
              {sopSubTab === 'night' && (
                <div className="space-y-4">
                  {/* Purple Core Strategy Summary Box */}
                  <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/90 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900">
                      <Moon className="w-4 h-4 text-purple-600" />
                      <span>晚間精準分子保養核心策略（{activeDayData.title}）</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-medium">
                      {getNightStepsForDay(activeDayData.dayOfWeek, activeDayData.isOddWeek).strategySequence}
                    </p>
                  </div>

                  {/* Section Title */}
                  <div className="font-bold text-stone-800 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    <span>晚間分步執行 SOP 與分子順序：</span>
                  </div>

                  {/* Night Step Cards */}
                  <div className="space-y-2.5">
                    {getNightStepsForDay(activeDayData.dayOfWeek, activeDayData.isOddWeek).steps.map((st, idx) => (
                      <div
                        key={st.id}
                        className="p-3.5 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all space-y-1.5 shadow-2xs"
                      >
                        <div className="flex items-center justify-between flex-wrap gap-1.5">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="font-bold text-stone-900 text-xs sm:text-sm">
                              {st.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-1">
                            {st.productCode && (
                              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                                {st.productCode}
                              </span>
                            )}
                            {st.targetZoneText && (
                              <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-rose-50 text-rose-700">
                                {st.targetZoneText}
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-xs text-stone-600 pl-7 leading-relaxed">
                          {st.instruction}
                        </p>
                      </div>
                    ))}
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

            {/* 4. Modal Bottom Action Bar (Matching image_eb60dd89.png) */}
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
