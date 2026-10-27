import React, { useState } from 'react';
import { ReminderConfig } from '../types';
import { X, Bell, Clock, Check, AlertCircle, Sparkles } from 'lucide-react';
import { getStoredReminders, saveReminders } from '../utils/storage';

interface RemindersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RemindersModal: React.FC<RemindersModalProps> = ({ isOpen, onClose }) => {
  const [reminders, setReminders] = useState<ReminderConfig[]>(getStoredReminders());
  const [notificationStatus, setNotificationStatus] = useState<string>(
    typeof window !== 'undefined' && 'Notification' in window ? Notification.permission : 'unsupported'
  );
  const [saveToast, setSaveToast] = useState(false);

  if (!isOpen) return null;

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const perm = await Notification.requestPermission();
      setNotificationStatus(perm);
      if (perm === 'granted') {
        new Notification('GlowSync 提醒已開啟', {
          body: '您將在每日指定時間收到保養品與處方藥的黃金時段提醒！',
          icon: '/favicon.ico'
        });
      }
    }
  };

  const handleToggle = (id: string) => {
    const updated = reminders.map(r => r.id === id ? { ...r, enabled: !r.enabled } : r);
    setReminders(updated);
    saveReminders(updated);
  };

  const handleTimeChange = (id: string, newTime: string) => {
    const updated = reminders.map(r => r.id === id ? { ...r, time: newTime } : r);
    setReminders(updated);
  };

  const handleSaveAll = () => {
    saveReminders(reminders);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-stone-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-amber-500" />
            <h3 className="font-extrabold text-stone-900 text-base">個人化保養與服藥提醒</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notification Permission Banner */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div>
            <span className="font-bold text-amber-950 block">瀏覽器原生推播提醒</span>
            <p className="text-amber-800 text-[11px]">
              狀態：
              <span className="font-bold">
                {notificationStatus === 'granted'
                  ? '已允許通知'
                  : notificationStatus === 'denied'
                  ? '已被封鎖'
                  : '未啟用'}
              </span>
            </p>
          </div>
          {notificationStatus !== 'granted' && (
            <button
              onClick={requestNotificationPermission}
              className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold cursor-pointer transition"
            >
              開啟推播許可
            </button>
          )}
        </div>

        {/* Reminders List */}
        <div className="space-y-3">
          {reminders.map(rem => (
            <div
              key={rem.id}
              className={`p-4 rounded-2xl border transition-all ${
                rem.enabled
                  ? 'bg-white border-stone-200 shadow-2xs'
                  : 'bg-stone-50/70 border-stone-200/60 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-900">{rem.title}</span>
                  </div>
                  <p className="text-[11px] text-stone-500 leading-relaxed">{rem.description}</p>
                </div>

                {/* Time picker & Toggle */}
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    value={rem.time}
                    onChange={(e) => handleTimeChange(rem.id, e.target.value)}
                    className="p-1.5 rounded-lg border border-stone-200 text-xs font-mono font-bold text-stone-800 bg-stone-50"
                  />
                  <button
                    onClick={() => handleToggle(rem.id)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition cursor-pointer ${
                      rem.enabled ? 'bg-emerald-500 justify-end' : 'bg-stone-300 justify-start'
                    }`}
                  >
                    <span className="bg-white w-4 h-4 rounded-full shadow-md" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-stone-100">
          <span className="text-xs text-stone-400">提醒時間將自動儲存於本機</span>
          <button
            onClick={handleSaveAll}
            className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition cursor-pointer flex items-center gap-1.5"
          >
            {saveToast ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>已儲存！</span>
              </>
            ) : (
              <span>儲存提醒設定</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
