import { useState, useEffect, useCallback, useRef } from 'react';
import { ReminderConfig } from '../types';
import { getStoredReminders, getTodayDateKey } from '../utils/storage';
import { playCheckInSound } from '../utils/audio';
import { ActiveToastNotification } from '../components/NotificationToast';

export const useTimeBasedReminders = () => {
  const [activeToast, setActiveToast] = useState<ActiveToastNotification | null>(null);
  const firedKeysRef = useRef<Set<string>>(new Set());
  const remindersRef = useRef<ReminderConfig[]>(getStoredReminders());

  // Refresh reminders from storage
  const refreshReminders = useCallback(() => {
    remindersRef.current = getStoredReminders();
  }, []);

  const getFriendlyCopy = (reminder: ReminderConfig) => {
    switch (reminder.category) {
      case 'morning_rx':
        return {
          title: '☀️ 該吃早晨處方藥與維他命囉！',
          message: '早餐飯後立即吃 PTU 3顆 ＋ 癲鍵錠 1顆，隨餐搭配 8VC 維他命C粉 ＋ BHK\'s 奢光錠！'
        };
      case 'thorne_b':
        return {
          title: '☀️ 該吃 Thorne 活性 B 群囉！',
          message: '距早晨處方藥已滿 60 分鐘！請現在吞服 1 粒 Thorne 基本活性 B 複合物，避開消化道競爭吸收。'
        };
      case 'lunch_supplements':
        return {
          title: '🌤️ 該隨餐吃午/晚餐保健品囉！',
          message: 'Kirkland D3 (2錠) ＋ 魚油 (1粒) ＋ 蔓越莓 (1-2粒)，需食物油脂協助分子高效溶解吸收！'
        };
      case 'night_skincare':
        return {
          title: '🌙 該擦今日晚間保養品囉！',
          message: '洗臉後確認今日主題（水楊酸裸肌 / VT微針 / A醇微晶 / 先乳後水），落實兩頰滋潤封層與下巴防痘！'
        };
      case 'bedtime_rx':
        return {
          title: '🌙 該吃睡前安眠放鬆用藥囉！',
          message: '癲必停 0.5 顆 ＋ 易靜錠 (羅眠樂) 1 顆，吞服後請在 30 分鐘內放鬆入睡，夜間腸胃不吃任何保健品。'
        };
      default:
        return {
          title: `⏰ 該吃/擦「${reminder.title.replace(/^[^\w\u4e00-\u9fa5]*\s*/, '')}」囉！`,
          message: reminder.description
        };
    }
  };

  const dispatchNotification = useCallback((reminder: ReminderConfig) => {
    const copy = getFriendlyCopy(reminder);

    const toastData: ActiveToastNotification = {
      id: `toast-${Date.now()}`,
      reminderId: reminder.id,
      time: reminder.time,
      friendlyTitle: copy.title,
      friendlyMessage: copy.message,
      category: reminder.category,
      timestamp: Date.now()
    };

    setActiveToast(toastData);
    playCheckInSound();

    // Native browser push notification if permitted
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(copy.title, {
          body: copy.message,
          icon: '/favicon.ico',
          tag: reminder.id
        });
      } catch (e) {
        console.warn('Native notification failed', e);
      }
    }
  }, []);

  // Time check ticker
  useEffect(() => {
    refreshReminders();

    const checkTime = () => {
      const now = new Date();
      const currentHours = String(now.getHours()).padStart(2, '0');
      const currentMinutes = String(now.getMinutes()).padStart(2, '0');
      const currentTimeStr = `${currentHours}:${currentMinutes}`;
      const todayDate = getTodayDateKey();

      const list = remindersRef.current;
      for (const rem of list) {
        if (!rem.enabled) continue;

        if (rem.time === currentTimeStr) {
          const key = `${todayDate}_${rem.id}_${rem.time}`;
          if (!firedKeysRef.current.has(key)) {
            firedKeysRef.current.add(key);
            dispatchNotification(rem);
            break; // trigger one at a time
          }
        }
      }
    };

    // Initial check and ticker every 4 seconds
    checkTime();
    const interval = setInterval(checkTime, 4000);
    return () => clearInterval(interval);
  }, [dispatchNotification, refreshReminders]);

  // Test trigger method for immediate preview in UI
  const triggerTestNotification = useCallback((reminderId?: string) => {
    refreshReminders();
    const list = remindersRef.current;
    const target = reminderId ? list.find(r => r.id === reminderId) || list[0] : list[0];
    if (target) {
      dispatchNotification(target);
    }
  }, [dispatchNotification, refreshReminders]);

  // Snooze
  const snoozeNotification = useCallback((minutes: number = 5) => {
    if (!activeToast) return;
    const originalReminderId = activeToast.reminderId;
    setActiveToast(null);

    // Schedule delayed re-trigger
    setTimeout(() => {
      refreshReminders();
      const target = remindersRef.current.find(r => r.id === originalReminderId);
      if (target) {
        dispatchNotification(target);
      }
    }, minutes * 60 * 1000);
  }, [activeToast, dispatchNotification, refreshReminders]);

  const dismissToast = useCallback(() => {
    setActiveToast(null);
  }, []);

  return {
    activeToast,
    dismissToast,
    triggerTestNotification,
    snoozeNotification,
    refreshReminders
  };
};
