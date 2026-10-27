import React, { useState } from 'react';
import { FOUR_WEEK_CALENDAR, DAY_ROUTINES, WEEKDAY_INFO } from '../data/amandaRoutineData';
import { DayOfWeek, WeekType } from '../types';
import { Calendar, ChevronRight, Sparkles, CheckCircle2, X, Clock, Droplets, ArrowRight } from 'lucide-react';

interface CalendarViewProps {
  currentDay: DayOfWeek;
  onSelectDayRoutine: (day: DayOfWeek, weekType: WeekType) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ currentDay, onSelectDayRoutine }) => {
  const [activeModalDay, setActiveModalDay] = useState<{
    dayNum: number;
    weekNum: number;
    isOddWeek: boolean;
    dayOfWeek: DayOfWeek;
    title: string;
    themeType: string;
    amSummary: string;
    pmSummary: string;
  } | null>(null);

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

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-rose-500" />
            <h2 className="text-xl font-extrabold text-stone-900">4 週月曆全景排程總覽</h2>
          </div>
          <p className="text-xs text-stone-500 mt-1">
            28 天科學分子微循環：奇數週著重「角質代謝與微晶激活」，偶數週聚焦「深層注水與淡斑修護」。
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-xs flex-wrap">
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            💧 類型 A・溫和修護
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
            🧪 類型 B・水楊酸
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
            🌙 類型 C・A醇微晶
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
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
                // Determine if this day card matches today (October 27 is Day 9, Tue, Even week)
                const isTodayCard = day.dayNum === 9;
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
                            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-rose-500 text-white animate-pulse">
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
                      onClick={() => setActiveModalDay(day)}
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

      {/* Modal for Full Day SOP */}
      {activeModalDay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl border border-stone-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black px-2 py-0.5 rounded-md bg-stone-900 text-white">
                    DAY {activeModalDay.dayNum}
                  </span>
                  <span className="text-sm font-bold text-stone-800">
                    {WEEKDAY_INFO[activeModalDay.dayOfWeek].name}（{activeModalDay.isOddWeek ? '奇數週' : '偶數週'}）
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-stone-900 mt-1">{activeModalDay.title}</h3>
              </div>
              <button
                onClick={() => setActiveModalDay(null)}
                className="p-1.5 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                <span className="font-bold text-amber-900 flex items-center gap-1">
                  <span>☀️ 晨間保養與處方藥：</span>
                </span>
                <p className="text-stone-700 leading-relaxed">{activeModalDay.amSummary}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-1">
                <span className="font-bold text-purple-900 flex items-center gap-1">
                  <span>🌙 晚間精準分子排程：</span>
                </span>
                <p className="text-stone-700 leading-relaxed">{activeModalDay.pmSummary}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-600 text-xs space-y-1">
                <p className="font-bold text-stone-800">📌 分區提醒：</p>
                <p>• 兩頰乾肌：塗抹乳液與滋潤霜鎖水，防秋冬乾燥泛紅</p>
                <p>• 下巴粉刺：僅薄擦 #26-2 米糠乳液，嚴禁厚敷油霜避免閉口</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => {
                  onSelectDayRoutine(activeModalDay.dayOfWeek, activeModalDay.isOddWeek ? 'odd' : 'even');
                  setActiveModalDay(null);
                }}
                className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <span>前往今日主頁執行打卡</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
