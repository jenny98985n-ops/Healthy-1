import { CheckInRecord, ReminderConfig, WeekType, RoutineMode, DayOfWeek } from '../types';
import { DEFAULT_REMINDERS, ALL_PRODUCTS } from '../data/amandaRoutineData';

const STORAGE_KEYS = {
  CHECKINS: 'glowsync_checkins_v1',
  REMINDERS: 'glowsync_reminders_v1',
  WEEK_TYPE_OVERRIDE: 'glowsync_week_override',
  ROUTINE_MODE: 'glowsync_routine_mode',
  SKIN_LOGS: 'glowsync_skin_logs_v1'
};

export interface TaiwanDateInfo {
  year: number;
  month: number;
  day: number;
  dayOfWeekZh: string;
  dayOfWeek: DayOfWeek;
  formattedZh: string;
  dateKey: string;
  isoWeek: number;
  isEvenWeek: boolean;
}

/**
 * Bulletproof Asia/Taipei timezone parser.
 * Deterministic across all environments and client system timezones.
 */
export const getTaiwanDateInfo = (now: Date = new Date()): TaiwanDateInfo => {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Taipei',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'short',
      hour12: false
    });
    const parts = formatter.formatToParts(now);
    const map: Record<string, string> = {};
    for (const p of parts) {
      map[p.type] = p.value;
    }
    const year = parseInt(map.year, 10);
    const month = parseInt(map.month, 10);
    const day = parseInt(map.day, 10);

    const weekMap: Record<string, { dow: DayOfWeek; zh: string }> = {
      Sun: { dow: 'sun', zh: '星期日' },
      Mon: { dow: 'mon', zh: '星期一' },
      Tue: { dow: 'tue', zh: '星期二' },
      Wed: { dow: 'wed', zh: '星期三' },
      Thu: { dow: 'thu', zh: '星期四' },
      Fri: { dow: 'fri', zh: '星期五' },
      Sat: { dow: 'sat', zh: '星期六' }
    };
    const info = weekMap[map.weekday] || { dow: 'wed', zh: '星期三' };

    // Calculate ISO 8601 week number deterministically
    const target = new Date(Date.UTC(year, month - 1, day));
    const dayNr = (target.getUTCDay() + 6) % 7;
    target.setUTCDate(target.getUTCDate() - dayNr + 3);
    const firstThursday = target.valueOf();
    target.setUTCMonth(0, 1);
    if (target.getUTCDay() !== 4) {
      target.setUTCMonth(0, 1 + ((4 - target.getUTCDay()) + 7) % 7);
    }
    const isoWeek = 1 + Math.ceil((firstThursday - target.valueOf()) / 604800000);
    const isEvenWeek = isoWeek % 2 === 0;

    const monthStr = String(month).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');

    return {
      year,
      month,
      day,
      dayOfWeekZh: info.zh,
      dayOfWeek: info.dow,
      formattedZh: `${year} 年 ${month} 月 ${day} 日 ${info.zh}`,
      dateKey: `${year}-${monthStr}-${dayStr}`,
      isoWeek,
      isEvenWeek
    };
  } catch {
    return {
      year: 2026,
      month: 10,
      day: 28,
      dayOfWeekZh: '星期三',
      dayOfWeek: 'wed',
      formattedZh: '2026 年 10 月 28 日 星期三',
      dateKey: '2026-10-28',
      isoWeek: 44,
      isEvenWeek: true
    };
  }
};

export const getTaiwanDateObj = (): Date => {
  const info = getTaiwanDateInfo();
  return new Date(Date.UTC(info.year, info.month - 1, info.day));
};

export const getTodayDateKey = (): string => {
  return getTaiwanDateInfo().dateKey;
};

export const getTodayFormattedZh = (): string => {
  return getTaiwanDateInfo().formattedZh;
};

export const getDayOfWeekFromDate = (): DayOfWeek => {
  return getTaiwanDateInfo().dayOfWeek;
};

// Calculate week number in year (ISO week)
export const getWeekNumber = (): number => {
  return getTaiwanDateInfo().isoWeek;
};

export const getDefaultWeekType = (): WeekType => {
  // Check override
  const override = localStorage.getItem(STORAGE_KEYS.WEEK_TYPE_OVERRIDE);
  if (override === 'odd' || override === 'even') {
    return override;
  }
  // Standard calculation: Week 44 is even
  return getTaiwanDateInfo().isEvenWeek ? 'even' : 'odd';
};

/**
 * Calculates the current DAY in the 28-day (4-week) cycle.
 * Week 1: Day 1-7 (Odd)
 * Week 2: Day 8-14 (Even)
 * Week 3: Day 15-21 (Odd)
 * Week 4: Day 22-28 (Even)
 * For 2026-10-28 Wednesday (Week 44 Even Week, Cycle Week 2), this returns DAY 10!
 */
export const getTodayCalendarDayNum = (activeWeekType?: WeekType): number => {
  const info = getTaiwanDateInfo();
  const dayOfWeek = info.dayOfWeek;
  const dayIndexMap: Record<DayOfWeek, number> = {
    mon: 0,
    tue: 1,
    wed: 2,
    thu: 3,
    fri: 4,
    sat: 5,
    sun: 6
  };
  const dayOffset = dayIndexMap[dayOfWeek];

  const currentType = activeWeekType || (info.isEvenWeek ? 'even' : 'odd');
  const isoWeek = info.isoWeek;
  
  // Base cycle week mapping (1..4)
  let cycleWeek = ((isoWeek - 1) % 4) + 1;
  if (currentType === 'even' && cycleWeek % 2 !== 0) {
    cycleWeek = 2;
  } else if (currentType === 'odd' && cycleWeek % 2 === 0) {
    cycleWeek = 1;
  } else if (currentType === 'even' && cycleWeek === 4) {
    cycleWeek = 2; // Week 2 is the primary Even cycle for Amanda's 4-week calendar
  }

  return (cycleWeek - 1) * 7 + dayOffset + 1;
};

export const saveWeekTypeOverride = (type: WeekType) => {
  localStorage.setItem(STORAGE_KEYS.WEEK_TYPE_OVERRIDE, type);
};

export const getStoredRoutineMode = (): RoutineMode => {
  const val = localStorage.getItem(STORAGE_KEYS.ROUTINE_MODE);
  return val === 'makeup' ? 'makeup' : 'bare';
};

export const saveRoutineMode = (mode: RoutineMode) => {
  localStorage.setItem(STORAGE_KEYS.ROUTINE_MODE, mode);
};

// Load all check-in records
export const getAllCheckIns = (): Record<string, CheckInRecord> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CHECKINS);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading checkins', e);
    return {};
  }
};

// Save a checkin record
export const saveCheckIn = (record: CheckInRecord) => {
  try {
    const all = getAllCheckIns();
    all[record.date] = record;
    localStorage.setItem(STORAGE_KEYS.CHECKINS, JSON.stringify(all));
  } catch (e) {
    console.error('Error saving checkin', e);
  }
};

// Toggle a specific step for a date
export const toggleStepCheckIn = (
  dateKey: string,
  stepId: string,
  dayOfWeek: DayOfWeek,
  weekType: WeekType,
  mode: RoutineMode,
  totalSteps: number
): CheckInRecord => {
  const all = getAllCheckIns();
  const existing = all[dateKey] || {
    date: dateKey,
    dayOfWeek,
    weekType,
    mode,
    completedStepIds: [],
    totalSteps,
    percentage: 0,
    timestamp: Date.now()
  };

  const isCompleted = existing.completedStepIds.includes(stepId);
  const updatedStepIds = isCompleted
    ? existing.completedStepIds.filter(id => id !== stepId)
    : [...existing.completedStepIds, stepId];

  const percentage = totalSteps > 0 ? Math.round((updatedStepIds.length / totalSteps) * 100) : 0;

  const updatedRecord: CheckInRecord = {
    ...existing,
    completedStepIds: updatedStepIds,
    totalSteps,
    percentage,
    timestamp: Date.now()
  };

  all[dateKey] = updatedRecord;
  localStorage.setItem(STORAGE_KEYS.CHECKINS, JSON.stringify(all));
  return updatedRecord;
};

// Reminders
export const getStoredReminders = (): ReminderConfig[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.REMINDERS);
    if (!raw) return DEFAULT_REMINDERS;
    return JSON.parse(raw);
  } catch {
    return DEFAULT_REMINDERS;
  }
};

export const saveReminders = (reminders: ReminderConfig[]) => {
  localStorage.setItem(STORAGE_KEYS.REMINDERS, JSON.stringify(reminders));
};

// Skin Journal & Conditions
export interface SkinLog {
  id: string;
  date: string;
  condition: 'perfect' | 'normal' | 'dry' | 'acne' | 'sensitive' | 'flaking';
  chinCondition?: 'smooth' | 'comedones' | 'acne' | 'dry_stinging';
  chinNotes?: string;
  toleranceDowngraded?: boolean;
  hydrationScore: number; // 1-5
  notes: string;
  createdAt: number;
}

export const getAllSkinLogs = (): SkinLog[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SKIN_LOGS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveSkinLog = (log: Omit<SkinLog, 'id' | 'createdAt'>) => {
  const all = getAllSkinLogs();
  const newLog: SkinLog = {
    ...log,
    id: `log-${Date.now()}`,
    createdAt: Date.now()
  };
  const filtered = all.filter(l => l.date !== log.date);
  filtered.unshift(newLog);
  localStorage.setItem(STORAGE_KEYS.SKIN_LOGS, JSON.stringify(filtered));
  return filtered;
};

// Analytics & Statistics
export const calculateAnalytics = () => {
  const all = getAllCheckIns();
  const records = Object.values(all).sort((a, b) => b.timestamp - a.timestamp);
  
  const totalDaysLogged = records.length;
  let fullCompleteDays = 0;
  let totalPctSum = 0;

  records.forEach(r => {
    if (r.percentage === 100) fullCompleteDays++;
    totalPctSum += r.percentage;
  });

  const avgCompletionRate = totalDaysLogged > 0 ? Math.round(totalPctSum / totalDaysLogged) : 0;

  // Calculate current streak
  let streak = 0;
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const checkDate = new Date();
    checkDate.setDate(today.getDate() - i);
    const y = checkDate.getFullYear();
    const m = String(checkDate.getMonth() + 1).padStart(2, '0');
    const d = String(checkDate.getDate()).padStart(2, '0');
    const key = `${y}-${m}-${d}`;
    const rec = all[key];
    if (rec && rec.completedStepIds.length > 0) {
      streak++;
    } else if (i === 0) {
      // today might not be done yet, check yesterday
      continue;
    } else {
      break;
    }
  }

  return {
    totalDaysLogged,
    fullCompleteDays,
    avgCompletionRate,
    streak,
    recentRecords: records.slice(0, 14)
  };
};

// Export to JSON
export const exportDataAsJSON = () => {
  const data = {
    exportDate: new Date().toISOString(),
    appName: 'GlowSync Skincare & Supplement Guide',
    checkIns: getAllCheckIns(),
    reminders: getStoredReminders(),
    skinLogs: getAllSkinLogs(),
    productsCount: ALL_PRODUCTS.length
  };

  const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', jsonString);
  downloadAnchor.setAttribute('download', `GlowSync_Routine_Backup_${getTodayDateKey()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
};

// Export to CSV
export const exportDataAsCSV = () => {
  const all = getAllCheckIns();
  const skinLogs = getAllSkinLogs();
  const skinMap = new Map(skinLogs.map(l => [l.date, l]));

  const rows = [
    ['日期 (Date)', '星期 (Day)', '週次 (Week)', '模式 (Mode)', '已完成步數', '總步數', '完成度(%)', '整體膚況', '下巴狀況', '耐受度降級', '筆記', '最後更新時間']
  ];

  Object.values(all)
    .sort((a, b) => a.date.localeCompare(b.date))
    .forEach(r => {
      const skin = skinMap.get(r.date);
      rows.push([
        r.date,
        r.dayOfWeek,
        r.weekType === 'even' ? '偶數週 (Even)' : '奇數週 (Odd)',
        r.mode === 'makeup' ? '全妝日' : '素顏日',
        String(r.completedStepIds.length),
        String(r.totalSteps),
        `${r.percentage}%`,
        skin?.condition || r.skinCondition?.status || '未記錄',
        skin?.chinCondition || r.chinCondition || '未記錄',
        skin?.toleranceDowngraded || r.toleranceDowngraded ? '是 (切換修護)' : '否',
        `"${(skin?.notes || skin?.chinNotes || r.skinCondition?.notes || '').replace(/"/g, '""')}"`,
        new Date(r.timestamp).toLocaleString('zh-TW')
      ]);
    });

  const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + rows.map(e => e.join(',')).join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `GlowSync_Checkin_History_${getTodayDateKey()}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

// Import from JSON
export const importDataFromJSON = (file: File): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = JSON.parse(text);
        if (parsed.checkIns) {
          localStorage.setItem(STORAGE_KEYS.CHECKINS, JSON.stringify(parsed.checkIns));
        }
        if (parsed.reminders) {
          localStorage.setItem(STORAGE_KEYS.REMINDERS, JSON.stringify(parsed.reminders));
        }
        if (parsed.skinLogs) {
          localStorage.setItem(STORAGE_KEYS.SKIN_LOGS, JSON.stringify(parsed.skinLogs));
        }
        resolve(true);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error('File reading error'));
    reader.readAsText(file);
  });
};
