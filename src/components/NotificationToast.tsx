import React, { useEffect, useState } from 'react';
import { ReminderConfig } from '../types';
import { X, Bell, Sparkles, Pill, Sun, Moon, Droplets, CheckCircle2, Clock } from 'lucide-react';

export interface ActiveToastNotification {
  id: string;
  reminderId: string;
  time: string;
  friendlyTitle: string;
  friendlyMessage: string;
  category: ReminderConfig['category'];
  timestamp: number;
}

interface NotificationToastProps {
  notification: ActiveToastNotification | null;
  onDismiss: () => void;
  onGoToRoutine: () => void;
  onSnooze: (minutes: number) => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({
  notification,
  onDismiss,
  onGoToRoutine,
  onSnooze
}) => {
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!notification) {
      setProgress(100);
      return;
    }

    setProgress(100);
    const duration = 12000; // 12 seconds auto dismiss
    const intervalTime = 100;
    const decrement = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      if (!isPaused) {
        setProgress(prev => {
          if (prev <= decrement) {
            clearInterval(timer);
            onDismiss();
            return 0;
          }
          return prev - decrement;
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [notification, isPaused, onDismiss]);

  if (!notification) return null;

  const getCategoryTheme = () => {
    switch (notification.category) {
      case 'morning_rx':
        return {
          icon: Sun,
          badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
          accentColor: 'from-amber-500 to-orange-400',
          tag: '早晨處方與維他命'
        };
      case 'thorne_b':
        return {
          icon: Clock,
          badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-200',
          accentColor: 'from-yellow-500 to-amber-500',
          tag: '黃金間隔 60 分鐘'
        };
      case 'lunch_supplements':
        return {
          icon: Droplets,
          badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
          accentColor: 'from-blue-500 to-cyan-400',
          tag: '隨餐油脂助吸'
        };
      case 'night_skincare':
        return {
          icon: Sparkles,
          badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
          accentColor: 'from-purple-500 to-rose-400',
          tag: '晚間分子保養'
        };
      case 'bedtime_rx':
        return {
          icon: Moon,
          badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
          accentColor: 'from-indigo-600 to-violet-500',
          tag: '睡前安眠放鬆'
        };
      default:
        return {
          icon: Bell,
          badgeColor: 'bg-stone-100 text-stone-800 border-stone-200',
          accentColor: 'from-rose-500 to-orange-400',
          tag: '定時提醒'
        };
    }
  };

  const theme = getCategoryTheme();
  const IconComponent = theme.icon;

  return (
    <div
      className="fixed top-5 right-5 z-50 max-w-sm w-[92vw] sm:w-[380px] animate-in slide-in-from-top-4 fade-in duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 shadow-2xl border border-stone-200/90 ring-1 ring-black/5 overflow-hidden relative">
        {/* Top Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-stone-100">
          <div
            className={`h-full bg-gradient-to-r ${theme.accentColor} transition-all ease-linear`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Content */}
        <div className="space-y-3 pt-1">
          {/* Header Row */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${theme.accentColor} flex items-center justify-center text-white shadow-xs`}>
                <IconComponent className="w-4 h-4" />
              </div>
              <div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${theme.badgeColor}`}>
                  {theme.tag}・{notification.time}
                </span>
              </div>
            </div>

            <button
              onClick={onDismiss}
              className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition cursor-pointer"
              title="關閉通知"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Friendly Title & Message */}
          <div className="space-y-1">
            <h4 className="text-sm font-black text-stone-900 leading-snug">
              {notification.friendlyTitle}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {notification.friendlyMessage}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pt-1 border-t border-stone-100">
            <button
              onClick={() => {
                onGoToRoutine();
                onDismiss();
              }}
              className="flex-1 py-2 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-xs"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>立即去打卡</span>
            </button>

            <button
              onClick={() => onSnooze(5)}
              className="py-2 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs transition cursor-pointer"
              title="稍後 5 分鐘再提醒我"
            >
              5分後再提醒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
