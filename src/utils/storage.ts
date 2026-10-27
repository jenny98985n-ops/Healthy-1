import { CheckInRecord, ReminderConfig, WeekType, RoutineMode, DayOfWeek } from '../types';
import { DEFAULT_REMINDERS, ALL_PRODUCTS } from '../data/amandaRoutineData';

const STORAGE_KEYS = {
  CHECKINS: 'glowsync_checkins_v1',
  REMINDERS: 'glowsync_reminders_v1',
  WEEK_TYPE_OVERRIDE: 'glowsync_week_override',
  ROUTINE_MODE: 'glowsync_routine_mode',
  SKIN_LOGS: 'glowsync_skin_logs_v1'
};

export const getTodayDateKey = (): string => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getDayOfWeekFromDate = (date: Date = new Date()): DayOfWeek => {
  const dayIndex = date.getDay(); // 0 is Sunday, 1 is Monday ...
  const mapping: DayOfWeek[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  return mapping[dayIndex];
};

// Calculate week number in year (ISO week or approximate)
export const getWeekNumber = (d: Date = new Date()): number => {
  const target = new Date(d.valueOf());
  const dayNr = (d.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  const firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }
  return 1 + Math.ceil((firstThursday - target.valueOf()) / 604800000);
};

export const getDefaultWeekType = (): WeekType => {
  // Check override
  const override = localStorage.getItem(STORAGE_KEYS.WEEK_TYPE_OVERRIDE);
  if (override === 'odd' || override === 'even') {
    return override;
  }
  // Standard calculation: October 2026 is week 44 (even)
  const weekNum = getWeekNumber();
  return weekNum % 2 === 0 ? 'even' : 'odd';
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
  const rows = [
    ['日期 (Date)', '星期 (Day)', '週次 (Week)', '模式 (Mode)', '已完成步數', '總步數', '完成度百分比(%)', '最後更新時間']
  ];

  Object.values(all)
    .sort((a, b) => a.date.localeCompare(b.date))
    .forEach(r => {
      rows.push([
        r.date,
        r.dayOfWeek,
        r.weekType === 'even' ? '偶數週 (Even)' : '奇數週 (Odd)',
        r.mode === 'makeup' ? '全妝日' : '素顏日',
        String(r.completedStepIds.length),
        String(r.totalSteps),
        `${r.percentage}%`,
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
