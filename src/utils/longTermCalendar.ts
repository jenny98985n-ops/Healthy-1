/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DayOfWeek, WeekType, StepItem } from '../types';
import { getTaiwanDateInfo } from './storage';
import { getCanonicalNightSteps, getCanonicalMorningSteps, getNightStrategySummary } from '../data/canonicalRoutines';

export interface NightTypeMeta {
  key: 'salicylic' | 'retinol' | 'reedle' | 'moderate' | 'repair' | 'hydration' | 'buffer';
  label: string; // "水楊酸", "A醇", "Reedle", "中度", "修護", "補水", "緩衝"
  category: '活性' | '緩衝' | '中度' | '補水' | '修護';
  badgeClass: string;
  hexBg: string;
  hexText: string;
  hexBorder: string;
}

export function getNightTypeForDay(dayOfWeek: DayOfWeek, isOddWeek: boolean): NightTypeMeta {
  if (isOddWeek) {
    switch (dayOfWeek) {
      case 'mon':
        return {
          key: 'repair',
          label: '修護',
          category: '修護',
          badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          hexBg: '#dcfce7',
          hexText: '#14532d',
          hexBorder: '#86efac'
        };
      case 'tue':
        return {
          key: 'salicylic',
          label: '水楊酸',
          category: '活性',
          badgeClass: 'bg-orange-100 text-orange-950 border-orange-300',
          hexBg: '#ffedd5',
          hexText: '#7c2d12',
          hexBorder: '#fdba74'
        };
      case 'wed':
        return {
          key: 'hydration',
          label: '補水',
          category: '補水',
          badgeClass: 'bg-teal-100 text-teal-950 border-teal-300',
          hexBg: '#ccfbf1',
          hexText: '#134e4a',
          hexBorder: '#5eead4'
        };
      case 'thu':
        return {
          key: 'moderate',
          label: '中度',
          category: '中度',
          badgeClass: 'bg-purple-100 text-purple-950 border-purple-300',
          hexBg: '#f3e8ff',
          hexText: '#581c87',
          hexBorder: '#d8b4fe'
        };
      case 'fri':
        return {
          key: 'hydration',
          label: '補水',
          category: '補水',
          badgeClass: 'bg-teal-100 text-teal-950 border-teal-300',
          hexBg: '#ccfbf1',
          hexText: '#134e4a',
          hexBorder: '#5eead4'
        };
      case 'sat':
        return {
          key: 'reedle',
          label: 'Reedle',
          category: '活性',
          badgeClass: 'bg-sky-100 text-sky-950 border-sky-300',
          hexBg: '#e0f2fe',
          hexText: '#0c4a6e',
          hexBorder: '#7dd3fc'
        };
      case 'sun':
        return {
          key: 'buffer',
          label: '緩衝',
          category: '緩衝',
          badgeClass: 'bg-slate-100 text-slate-800 border-slate-300',
          hexBg: '#f1f5f9',
          hexText: '#334155',
          hexBorder: '#cbd5e1'
        };
    }
  }

  // 偶數週 (Even)
  switch (dayOfWeek) {
    case 'mon':
      return {
        key: 'repair',
        label: '修護',
        category: '修護',
        badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
        hexBg: '#dcfce7',
        hexText: '#14532d',
        hexBorder: '#86efac'
      };
    case 'tue':
      return {
        key: 'salicylic',
        label: '水楊酸',
        category: '活性',
        badgeClass: 'bg-orange-100 text-orange-950 border-orange-300',
        hexBg: '#ffedd5',
        hexText: '#7c2d12',
        hexBorder: '#fdba74'
      };
    case 'wed':
      return {
        key: 'hydration',
        label: '補水',
        category: '補水',
        badgeClass: 'bg-teal-100 text-teal-950 border-teal-300',
        hexBg: '#ccfbf1',
        hexText: '#134e4a',
        hexBorder: '#5eead4'
      };
    case 'thu':
      return {
        key: 'moderate',
        label: '中度',
        category: '中度',
        badgeClass: 'bg-purple-100 text-purple-950 border-purple-300',
        hexBg: '#f3e8ff',
        hexText: '#581c87',
        hexBorder: '#d8b4fe'
      };
    case 'fri':
      return {
        key: 'retinol',
        label: 'A醇',
        category: '活性',
        badgeClass: 'bg-amber-100 text-amber-950 border-amber-300',
        hexBg: '#fef3c7',
        hexText: '#78350f',
        hexBorder: '#fde047'
      };
    case 'sat':
      return {
        key: 'buffer',
        label: '緩衝',
        category: '緩衝',
        badgeClass: 'bg-slate-100 text-slate-800 border-slate-300',
        hexBg: '#f1f5f9',
        hexText: '#334155',
        hexBorder: '#cbd5e1'
      };
    case 'sun':
      return {
        key: 'moderate',
        label: '中度',
        category: '中度',
        badgeClass: 'bg-purple-100 text-purple-950 border-purple-300',
        hexBg: '#f3e8ff',
        hexText: '#581c87',
        hexBorder: '#d8b4fe'
      };
  }
}

export interface CalendarDayInfo {
  dateKey: string; // "YYYY-MM-DD"
  year: number;
  month: number;
  day: number;
  dayOfWeek: DayOfWeek;
  dayOfWeekZh: string;
  weekdayShort: string;
  dateFormattedZh: string;
  isoWeek: number;
  isOddWeek: boolean;
  cycleWeekNum: number; // 1, 2, 3, or 4
  dayInCycle: number; // 1..28
  themeType: string;
  nightType: string; // "水楊酸" | "A醇" | "Reedle" | "中度" | "修護" | "補水" | "緩衝"
  nightCategory: '活性' | '緩衝' | '中度' | '補水' | '修護';
  nightBadgeClass: string;
  nightHexBg: string;
  nightHexText: string;
  nightHexBorder: string;
  title: string;
  amSummary: string;
  pmSummary: string;
  quarterLabel: string;
  monthKey: string; // "2026-10"
  monthLabel: string; // "2026 年 10 月"
  isToday: boolean;
  isCurrentMonth: boolean;
}

export interface MonthOption {
  key: string; // "2026-10"
  year: number;
  month: number;
  label: string; // "2026 年 10 月"
  quarter: string; // "2026 Q4"
  daysCount: number;
  isCurrent: boolean;
}

export interface QuarterRoadmap {
  quarter: string; // "2026 Q4"
  title: string;
  timeRange: string;
  focusTitle: string;
  keyDirectives: string[];
  themeColor: string;
  badgeColor: string;
}

// Fixed anchor Monday: 2026-10-26 (Week 44, Cycle Week 2 Even)
const ANCHOR_MONDAY_UTC = Date.UTC(2026, 9, 26);
const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

export const DAY_OF_WEEK_NAMES: Record<DayOfWeek, { zh: string; short: string }> = {
  mon: { zh: '星期一', short: '週一' },
  tue: { zh: '星期二', short: '週二' },
  wed: { zh: '星期三', short: '週三' },
  thu: { zh: '星期四', short: '週四' },
  fri: { zh: '星期五', short: '週五' },
  sat: { zh: '星期六', short: '週六' },
  sun: { zh: '星期日', short: '週日' }
};

/**
 * Calculates continuous cycle week (1..4) and cycle day (1..28) for any Gregorian date
 */
export function getCycleInfoForDate(year: number, month: number, day: number) {
  const d = new Date(Date.UTC(year, month - 1, day));
  const dowIndex = (d.getUTCDay() + 6) % 7; // 0 for Mon, 6 for Sun
  const monday = new Date(d.getTime() - dowIndex * 24 * 60 * 60 * 1000);

  const diffWeeks = Math.round((monday.getTime() - ANCHOR_MONDAY_UTC) / MS_PER_WEEK);
  // Anchor diffWeeks = 0 maps to Cycle Week 2
  const cycleWeek = (((diffWeeks + 1) % 4) + 4) % 4 + 1; // 1, 2, 3, or 4
  const isOdd = cycleWeek % 2 !== 0;

  const daysMap: DayOfWeek[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const dayOfWeek = daysMap[dowIndex];
  const dayInCycle = (cycleWeek - 1) * 7 + dowIndex + 1;

  // Calculate ISO week
  const target = new Date(Date.UTC(year, month - 1, day));
  const dayNr = (target.getUTCDay() + 6) % 7;
  target.setUTCDate(target.getUTCDate() - dayNr + 3);
  const firstThursday = target.valueOf();
  target.setUTCMonth(0, 1);
  if (target.getUTCDay() !== 4) {
    target.setUTCMonth(0, 1 + ((4 - target.getUTCDay()) + 7) % 7);
  }
  const isoWeek = 1 + Math.ceil((firstThursday - target.valueOf()) / 604800000);

  return { cycleWeek, isOdd, dayOfWeek, dayInCycle, isoWeek };
}

/**
 * Generates single day info with canonical theme titles and summaries
 */
export function generateDayInfo(year: number, month: number, day: number, todayKey: string): CalendarDayInfo {
  const monthStr = String(month).padStart(2, '0');
  const dayStr = String(day).padStart(2, '0');
  const dateKey = `${year}-${monthStr}-${dayStr}`;

  const { cycleWeek, isOdd, dayOfWeek, dayInCycle, isoWeek } = getCycleInfoForDate(year, month, day);

  let themeType = '緩衝夜';
  let title = '日常溫和修護';
  let amSummary = isOdd
    ? '清水洗臉 ➔ 小紫瓶 ➔ BOH噴霧 ➔ 靈芝乳 ➔ d’Alba防曬'
    : '清水洗臉 ➔ 小紫瓶 ➔ Ongredients噴霧 ➔ ANUA桃子精華 ➔ 靈芝乳 ➔ d’Alba防曬';
  let pmSummary = '小紫瓶 ➔ AQ乳(兩頰) ➔ 化妝水 ➔ 鎖水霜(兩頰)/米糠乳(下巴)';

  if (isOdd) {
    // 奇數週（第 1、3 週）
    if (dayOfWeek === 'mon') {
      themeType = '中度夜';
      title = '小林消炎 + All-in-One 全效修護';
      pmSummary = '小林擦下巴 ➔ 小紫瓶 ➔ AQ乳 ➔ 靈芝水 ➔ All-in-One精華 ➔ 黛珂紫霜 / 米糠乳';
    } else if (dayOfWeek === 'tue') {
      themeType = '活性夜';
      title = '寶拉 2% 水楊酸煥膚夜';
      pmSummary = '裸肌水楊酸(3-5分，僅下巴鼻翼，不疊Muge/ilso) ➔ 小紫瓶 ➔ AQ乳 ➔ 靈芝水 ➔ 角鯊霜 / 米糠乳';
    } else if (dayOfWeek === 'wed') {
      themeType = '緩衝夜';
      title = '水楊酸次日緩衝修護夜';
      pmSummary = '小林擦下巴 ➔ 小紫瓶 ➔ AQ乳 ➔ 靈芝水 ➔ 黛珂極光美白(單一重點) ➔ 玻尿酸 ➔ 角鯊霜 / 米糠乳';
    } else if (dayOfWeek === 'thu') {
      themeType = '中度夜';
      title = '離子儀正離子導出 + PDRN 胜肽導入';
      pmSummary = '舒特膚+離子導出3分 ➔ 小紫瓶 ➔ AQ乳 ➔ 靈芝水 ➔ PDRN安瓶+負離子導入5分 ➔ 角鯊霜 / 米糠乳';
    } else if (dayOfWeek === 'fri') {
      themeType = '緩衝修護夜';
      title = '奇數週溫和屏障修護夜（不排 A 醇）';
      pmSummary = '【奇數週不排A醇】：小紫瓶 ➔ AQ乳 ➔ 靈芝水 ➔ 玻尿酸注水 ➔ 小棕眼霜 ➔ 角鯊霜 / 米糠乳 (蓄力迎接週六Reedle)';
    } else if (dayOfWeek === 'sat') {
      themeType = '活性夜';
      title = 'VT Reedle Shot 300 微晶激活夜';
      pmSummary = '洗臉徹底擦乾 ➔ 裸肌乾壓 VT 300 (當晚嚴禁小紫瓶與AQ乳！) ➔ PDRN棉片敷兩頰8分 ➔ PDRN安瓶 ➔ Dr.Reju-All修復霜厚敷';
    } else if (dayOfWeek === 'sun') {
      themeType = '緩衝補水夜';
      title = 'Reedle 次日修護・雙面膜深層 SPA';
      pmSummary = '綠番茄洗下巴 ➔ 敷日常保濕面膜15分+綠橘子眼膜10分 ➔ 先乳後水 ➔ 黛珂紫霜頂級兩頰封層 / 米糠乳';
    }
  } else {
    // 偶數週（第 2、4 週）
    if (dayOfWeek === 'mon') {
      themeType = '中度夜';
      title = '下巴 TO 菸鹼醯胺控油 + 冰河霜鎖水';
      pmSummary = '小林擦下巴 ➔ 小紫瓶 ➔ AQ乳 ➔ MUJI水 ➔ TO菸鹼醯胺(僅點下巴) ➔ 黛珂極光 ➔ 冰河霜 / 米糠乳';
    } else if (dayOfWeek === 'tue') {
      themeType = '活性夜';
      title = '寶拉 2% 水楊酸煥膚夜';
      pmSummary = '裸肌水楊酸(3-5分，僅下巴鼻翼，不疊Muge/ilso) ➔ 小紫瓶 ➔ AQ乳 ➔ MUJI水 ➔ 冰河霜 / 米糠乳';
    } else if (dayOfWeek === 'wed') {
      themeType = '緩衝夜';
      title = '水楊酸次日提亮・妮維雅 630 淡斑夜';
      pmSummary = '小林擦下巴 ➔ 小紫瓶 ➔ AQ乳 ➔ MUJI水 ➔ 妮維雅630晚霜(單一重點淡斑) ➔ 紫熨斗眼霜 ➔ 冰河霜 / 米糠乳';
    } else if (dayOfWeek === 'thu') {
      themeType = '中度夜';
      title = 'ilso 粉刺大掃除 + 離子儀超導夜';
      pmSummary = 'ilso敷下巴10-15分推角栓 ➔ 潔膚水+離子導出3分 ➔ 先乳後水 ➔ 玻尿酸+負離子導入5分 ➔ 冰河霜 / 米糠乳';
    } else if (dayOfWeek === 'fri') {
      themeType = '活性夜';
      title = 'Celimax A 醇微晶抗老撫紋夜';
      pmSummary = 'MUJI水打底 ➔ 紫熨斗眼霜隔離眼周 ➔ 豌豆大A醇按壓全臉(停小紫瓶/AQ乳，孕婦禁用) ➔ Dr.Reju-All霜或冰河霜封層';
    } else if (dayOfWeek === 'sat') {
      themeType = '緩衝修護夜';
      title = 'A 醇次日深層修護夜（不排 Reedle）';
      pmSummary = '【A醇次日修護・不排Reedle】：小紫瓶 ➔ AQ乳 ➔ MUJI水 ➔ 玻尿酸注水 ➔ 紫熨斗眼霜 ➔ 契爾氏冰河霜 / 米糠乳';
    } else if (dayOfWeek === 'sun') {
      themeType = '中度修護夜';
      title = 'suisai 酵素去角栓 + AZ100 痘痘藍膜';
      pmSummary = 'suisai酵素洗下巴鼻翼角栓 ➔ 全臉敷AZ100藍膜15分 ➔ 小紫瓶 ➔ AQ乳 ➔ MUJI水 ➔ 契爾氏冰河霜 / 米糠乳';
    }
  }

  // Determine Quarter
  let quarter = `${year} Q4`;
  if (month >= 1 && month <= 3) quarter = `${year} Q1`;
  else if (month >= 4 && month <= 6) quarter = `${year} Q2`;
  else if (month >= 7 && month <= 9) quarter = `${year} Q3`;
  else quarter = `${year} Q4`;

  const nightMeta = getNightTypeForDay(dayOfWeek, isOdd);

  return {
    dateKey,
    year,
    month,
    day,
    dayOfWeek,
    dayOfWeekZh: DAY_OF_WEEK_NAMES[dayOfWeek].zh,
    weekdayShort: DAY_OF_WEEK_NAMES[dayOfWeek].short,
    dateFormattedZh: `${year} 年 ${month} 月 ${day} 日 ${DAY_OF_WEEK_NAMES[dayOfWeek].zh}`,
    isoWeek,
    isOddWeek: isOdd,
    cycleWeekNum: cycleWeek,
    dayInCycle,
    themeType: nightMeta.label,
    nightType: nightMeta.label,
    nightCategory: nightMeta.category,
    nightBadgeClass: nightMeta.badgeClass,
    nightHexBg: nightMeta.hexBg,
    nightHexText: nightMeta.hexText,
    nightHexBorder: nightMeta.hexBorder,
    title,
    amSummary,
    pmSummary,
    quarterLabel: quarter,
    monthKey: `${year}-${monthStr}`,
    monthLabel: `${year} 年 ${month} 月`,
    isToday: dateKey === todayKey,
    isCurrentMonth: true
  };
}

/**
 * Generates all months from 2026/10 through 2027/12 (15 months total)
 */
export function getAllAvailableMonths(): MonthOption[] {
  const months: MonthOption[] = [];
  const currentInfo = getTaiwanDateInfo();
  const currentMonthKey = `${currentInfo.year}-${String(currentInfo.month).padStart(2, '0')}`;

  // 2026: 10, 11, 12
  for (let m = 10; m <= 12; m++) {
    const key = `2026-${String(m).padStart(2, '0')}`;
    const daysInMonth = new Date(2026, m, 0).getDate();
    months.push({
      key,
      year: 2026,
      month: m,
      label: `2026 年 ${m} 月`,
      quarter: '2026 Q4',
      daysCount: daysInMonth,
      isCurrent: key === currentMonthKey
    });
  }

  // 2027: 1 to 12
  for (let m = 1; m <= 12; m++) {
    const key = `2027-${String(m).padStart(2, '0')}`;
    const daysInMonth = new Date(2027, m, 0).getDate();
    let q = '2027 Q4';
    if (m <= 3) q = '2027 Q1';
    else if (m <= 6) q = '2027 Q2';
    else if (m <= 9) q = '2027 Q3';

    months.push({
      key,
      year: 2027,
      month: m,
      label: `2027 年 ${m} 月`,
      quarter: q,
      daysCount: daysInMonth,
      isCurrent: key === currentMonthKey
    });
  }

  return months;
}

/**
 * Returns full 7-column calendar matrix for any given month, padded with preceding & trailing days
 */
export function getMonthCalendarGrid(year: number, month: number): CalendarDayInfo[] {
  const todayKey = getTaiwanDateInfo().dateKey;
  const daysInMonth = new Date(year, month, 0).getDate();

  // First day of this month
  const firstDayObj = new Date(Date.UTC(year, month - 1, 1));
  const firstDayDowIndex = (firstDayObj.getUTCDay() + 6) % 7; // 0 for Mon, 6 for Sun

  const result: CalendarDayInfo[] = [];

  // Preceding pad days (from prev month)
  if (firstDayDowIndex > 0) {
    const prevMonthDays = new Date(year, month - 1, 0).getDate();
    const prevYear = month === 1 ? year - 1 : year;
    const prevMonth = month === 1 ? 12 : month - 1;

    for (let i = firstDayDowIndex - 1; i >= 0; i--) {
      const d = prevMonthDays - i;
      const dayInfo = generateDayInfo(prevYear, prevMonth, d, todayKey);
      dayInfo.isCurrentMonth = false;
      result.push(dayInfo);
    }
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const dayInfo = generateDayInfo(year, month, d, todayKey);
    dayInfo.isCurrentMonth = true;
    result.push(dayInfo);
  }

  // Trailing pad days (to complete 7-col row)
  const remainingInRow = (7 - (result.length % 7)) % 7;
  if (remainingInRow > 0) {
    const nextYear = month === 12 ? year + 1 : year;
    const nextMonth = month === 12 ? 1 : month + 1;

    for (let d = 1; d <= remainingInRow; d++) {
      const dayInfo = generateDayInfo(nextYear, nextMonth, d, todayKey);
      dayInfo.isCurrentMonth = false;
      result.push(dayInfo);
    }
  }

  return result;
}

/**
 * 2026-2027 Long-term Roadmap & Milestones
 */
export const LONG_TERM_ROADMAP: QuarterRoadmap[] = [
  {
    quarter: '2026 Q4',
    title: '秋冬屏障穩固 ＆ 建立分子耐受期',
    timeRange: '2026/10/01 ～ 2026/12/31',
    focusTitle: '防閉口減法 ＋ 嚴格分流測試',
    keyDirectives: [
      '洗卸減法：前 4 週暫停綠番茄洗面乳與維 C 去角質凝膠，維持卸妝油 ➔ 綠茶潔面。',
      '下巴防閉口：嚴格禁止 AQ 柔膚乳與厚面霜塗抹下巴，每日薄擦 1 滴米糠乳液。',
      '第 3 週核心調度：週二水楊酸、週六 Reedle、跳過 A 醇，活性成分相隔 ≥3 天。',
      '第 5 週初評：評估下巴角栓代謝狀況，評估是否單一加入 ANUA 桃子菸鹼醯胺精華。'
    ],
    themeColor: 'from-rose-500 to-amber-500',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200'
  },
  {
    quarter: '2027 Q1',
    title: '春節煥膚微調 ＆ 膠原修護深水期',
    timeRange: '2027/01/01 ～ 2027/03/31',
    focusTitle: '抗冷熱溫差泛紅 ＋ 穩定深層導入',
    keyDirectives: [
      '換季屏障：離子儀負離子超導 PDRN 安瓶與玻尿酸每週四定期滋養，預防春季乾癢。',
      '水楊酸評估：若下巴粉刺顯著減少且無脫皮刺痛，可維持每週 1 次定點維護。',
      '單一眼霜紀律：持續執行早晚僅擦一款眼霜（米粒大小），杜絕眼下白頭脂肪粒。',
      '微晶間隔鐵則：VT 300 與 Celimax A 醇微晶保持每週錯開，嚴禁同夜混疊。'
    ],
    themeColor: 'from-amber-500 to-emerald-500',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
  },
  {
    quarter: '2027 Q2',
    title: '春夏水感提亮 ＆ 控油防曬攻防戰',
    timeRange: '2027/04/01 ～ 2027/06/30',
    focusTitle: '高溫皮脂調控 ＋ 輕透保濕成膜',
    keyDirectives: [
      '防曬升級：素顏日維持 d’Alba 粉光防曬；底妝日曼秀雷敦玻尿酸防曬嚴格等待 3 分鐘成膜。',
      '兩頰輕透轉型：氣溫升高時兩頰面霜可由冰河霜/角鯊霜改薄擦靈芝乳液 2.0。',
      '下巴清爽控油：保持下巴零厚霜，配合週日 suisai 酵素粉深層淨化角栓。',
      '眼部維他命 C：使用 #37 BRINGGREEN 檸檬眼霜抵抗日曬暗沉，改善黑眼圈。'
    ],
    themeColor: 'from-emerald-500 to-teal-500',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
  },
  {
    quarter: '2027 Q3',
    title: '盛夏光老化防護 ＆ 敏弱肌安定期',
    timeRange: '2027/07/01 ～ 2027/09/30',
    focusTitle: '冷氣房鎖水 ＋ 曬後鎮靜修護',
    keyDirectives: [
      '隨身噴霧補水：辦公室空調房隨時以 BOH 積雪草或 Ongredients 噴霧舒緩微繃。',
      'A 醇防曬紀律：週五 A 醇微晶夜隔日晨間出門務必足量塗抹 SPF50+ 防曬。',
      '偶數週雙效淡斑：妮維雅 630 淡斑晚霜擊退夏日紫外線誘發之兩頰色斑。',
      '處方藥定時：PTU 與癲鍵錠維持早餐後吞服，持續間隔 60 分鐘吃 Thorne B 群。'
    ],
    themeColor: 'from-teal-500 to-cyan-500',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200'
  },
  {
    quarter: '2027 Q4',
    title: '年終成果驗收 ＆ 極致抗老封層',
    timeRange: '2027/10/01 ～ 2027/12/31',
    focusTitle: '一年完整打卡總結 ＆ 零閉口光澤肌',
    keyDirectives: [
      '微晶與胜肽加乘：結算整年度微晶刺激與屏障修護成效，達到下巴平滑無瑕。',
      '頂級封層享受：秋冬回歸黛珂超微導紫霜與契爾氏冰河霜，鎖水抗寒風。',
      '處方與保健品：維持早晚時間分流，隨餐補充 D3、深海魚油與蔓越莓。',
      '完成至 2027-12-31 全年度 457 天排程，奠定終身科學護膚習慣。'
    ],
    themeColor: 'from-indigo-500 to-purple-500',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200'
  }
];
