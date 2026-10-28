export type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export type WeekType = 'odd' | 'even';

export type RoutineMode = 'bare' | 'makeup'; // 素顏日 vs 全妝日

export type ProductCategory = 
  | 'cleansing'      // 卸妝與清潔
  | 'toner_mist'     // 化妝水/噴霧/棉片
  | 'serum_active'   // 精華與功能型 (酸類/A醇/微晶/美白)
  | 'cream_lotion'   // 乳液與面霜
  | 'spot_acne'      // 局部痘痘藥
  | 'eye_care'       // 眼周護理/眼膜
  | 'sunscreen_prep' // 防曬與妝前
  | 'mask'           // 面膜
  | 'body_lotion'    // 身體乳
  | 'device'         // 美容儀器
  | 'supplement'     // 內服保健品
  | 'medicine';      // 常規處方用藥

export type TargetZone = 'all' | 'cheeks' | 'chin' | 'eyes' | 'body';

export interface ProductItem {
  id: string; // e.g. "01", "15", "26-2", "B-01", "S-01", "M-01"
  code: string; // "#01", "#15", "#26-2", etc.
  name: string;
  brand: string;
  category: ProductCategory;
  categoryLabel: string;
  targetZone: TargetZone;
  zoneLabel: string;
  weekType: 'odd' | 'even' | 'both';
  usageRule: string; // e.g. "洗臉後擦拭下巴", "小紫瓶後僅塗兩頰"
  molecularTip?: string;
  notes?: string;
  cautions?: string;
}

export interface StepItem {
  id: string;
  title: string;
  categoryLabel?: string; // '洗卸' | '裸肌活性' | '前導通道' | '先乳後水' | '化妝水/噴霧' | '精華液' | '眼霜' | '乳液/面霜' | '局部急救' | '面膜/棉片' | '美容儀' | '身體乳' | '處方藥' | '保健品';
  productCode?: string;
  productName: string;
  targetZoneText?: string;
  timingCategory: 'morning_rx' | 'morning_skincare' | 'noon_rx' | 'night_cleansing' | 'night_skincare' | 'night_body' | 'bedtime_rx';
  timingLabel: string;
  instruction: string;
  technique?: string; // 手法與手勢
  amount?: string; // 建議用量
  appliedRole?: string; // 作用或角色說明
  caution?: string; // 鐵則 / 注意事項
  timerDurationMinutes?: number; // e.g. 1m, 3m, 5m, 10m, 15m
  isKeyFocus?: boolean;
  isHighlighted?: boolean;
}

export interface DayRoutine {
  day: DayOfWeek;
  dayName: string;
  themeTitle: string;
  themeBadge: string;
  themeDescription: string;
  cheeksCare: string;
  chinCare: string;
  oddWeek: {
    cleansingDesc: string;
    skincareSteps: StepItem[];
    bodyLotionDesc: string;
    specialProcedure?: {
      title: string;
      desc: string;
      tag: string;
    };
  };
  evenWeek: {
    cleansingDesc: string;
    skincareSteps: StepItem[];
    bodyLotionDesc: string;
    specialProcedure?: {
      title: string;
      desc: string;
      tag: string;
    };
  };
}

export interface CheckInRecord {
  date: string; // YYYY-MM-DD
  dayOfWeek: DayOfWeek;
  weekType: WeekType;
  mode: RoutineMode;
  completedStepIds: string[];
  totalSteps: number;
  percentage: number;
  skinCondition?: {
    status: 'good' | 'dry' | 'breakout' | 'sensitive' | 'flaking';
    notes: string;
  };
  timestamp: number;
}

export interface ReminderConfig {
  id: string;
  title: string;
  time: string; // "08:00"
  description: string;
  enabled: boolean;
  category: 'morning_rx' | 'thorne_b' | 'lunch_supplements' | 'night_skincare' | 'bedtime_rx';
}
