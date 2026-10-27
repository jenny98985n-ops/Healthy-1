import React, { useState } from 'react';
import { ReminderConfig } from '../types';
import { X, Bell, Clock, Check, AlertCircle, Sparkles, Play, Plus, Trash2 } from 'lucide-react';
import { getStoredReminders, saveReminders } from '../utils/storage';

interface RemindersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerTestNotification?: (reminderId?: string) => void;
  onRemindersUpdated?: () => void;
}

export const RemindersModal: React.FC<RemindersModalProps> = ({
  isOpen,
  onClose,
  onTriggerTestNotification,
  onRemindersUpdated
}) => {
  const [reminders, setReminders] = useState<ReminderConfig[]>(getStoredReminders());
  const [notificationStatus, setNotificationStatus] = useState<string>(
    typeof window !== 'undefined' && 'Notification' in window ? Notification.permission : 'unsupported'
  );
  const [saveToast, setSaveToast] = useState(false);
  const [isAddingCustom, setIsAddingCustom] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customTime, setCustomTime] = useState('20:00');
  const [customDesc, setCustomDesc] = useState('');

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
    if (onRemindersUpdated) onRemindersUpdated();
  };

  const handleTimeChange = (id: string, newTime: string) => {
    const updated = reminders.map(r => r.id === id ? { ...r, time: newTime } : r);
    setReminders(updated);
  };

  const handleSaveAll = () => {
    saveReminders(reminders);
    if (onRemindersUpdated) onRemindersUpdated();
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 1000);
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim()) return;

    const newReminder: ReminderConfig = {
      id: `rem-custom-${Date.now()}`,
      title: customTitle.trim(),
      time: customTime,
      description: customDesc.trim() || '日常專屬保養/用藥提醒',
      enabled: true,
      category: 'night_skincare'
    };

    const updated = [...reminders, newReminder];
    setReminders(updated);
    saveReminders(updated);
    if (onRemindersUpdated) onRemindersUpdated();
    setIsAddingCustom(false);
    setCustomTitle('');
    setCustomDesc('');
  };

  const handleDeleteReminder = (id: string) => {
    const updated = reminders.filter(r => r.id !== id);
    setReminders(updated);
    saveReminders(updated);
    if (onRemindersUpdated) onRemindersUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl border border-stone-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-amber-500" />
            <div>
              <h3 className="font-extrabold text-stone-900 text-base">個人化保養與服藥提醒設定</h3>
              <p className="text-[11px] text-stone-500">
                到時將在右上角自動彈出「該吃/擦某某產品囉」友善推播通知
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Browser Push Permission & Quick Test */}
        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
            <div>
              <span className="font-bold text-amber-950 block">定時推播邏輯已啟動 ⚡</span>
              <p className="text-amber-800 text-[11px]">
                系統背景每秒精準比對時鐘，抵達指定分鐘即自動觸發右上角浮動卡片與提示音。
              </p>
            </div>
            {notificationStatus !== 'granted' && (
              <button
                onClick={requestNotificationPermission}
                className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold cursor-pointer transition text-xs"
              >
                開啟推播許可
              </button>
            )}
          </div>

          {/* Instant Test Button */}
          <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between">
            <span className="text-[11px] text-amber-900 font-medium">想看通知彈窗效果？</span>
            <button
              onClick={() => onTriggerTestNotification && onTriggerTestNotification()}
              className="px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>立即測試彈窗推播</span>
            </button>
          </div>
        </div>

        {/* Reminders List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-800">每日排程提醒項目：</span>
            <button
              onClick={() => setIsAddingCustom(!isAddingCustom)}
              className="text-xs text-rose-600 hover:text-rose-800 font-medium flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>新增自訂提醒</span>
            </button>
          </div>

          {/* Form to add custom reminder */}
          {isAddingCustom && (
            <form onSubmit={handleAddCustom} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 text-xs">
              <span className="font-bold text-stone-900 block">新增個人化時段提醒</span>
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <input
                    type="text"
                    required
                    placeholder="提醒名稱（如：晚上敷眼膜）"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    className="w-full p-2 rounded-xl bg-white border border-stone-200 text-xs"
                  />
                </div>
                <div>
                  <input
                    type="time"
                    required
                    value={customTime}
                    onChange={(e) => setCustomTime(e.target.value)}
                    className="w-full p-2 rounded-xl bg-white border border-stone-200 text-xs font-mono font-bold"
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="使用說明或備註（選填）"
                value={customDesc}
                onChange={(e) => setCustomDesc(e.target.value)}
                className="w-full p-2 rounded-xl bg-white border border-stone-200 text-xs"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingCustom(false)}
                  className="px-3 py-1.5 rounded-xl text-stone-500 hover:bg-stone-200 text-xs cursor-pointer"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-stone-900 text-white font-bold text-xs cursor-pointer"
                >
                  加入提醒
                </button>
              </div>
            </form>
          )}

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

                {/* Time picker, Test & Toggle */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <input
                    type="time"
                    value={rem.time}
                    onChange={(e) => handleTimeChange(rem.id, e.target.value)}
                    className="p-1.5 rounded-lg border border-stone-200 text-xs font-mono font-bold text-stone-800 bg-stone-50 cursor-pointer"
                  />

                  {/* Test button for this specific item */}
                  <button
                    type="button"
                    onClick={() => onTriggerTestNotification && onTriggerTestNotification(rem.id)}
                    className="p-1.5 rounded-lg text-stone-400 hover:text-amber-600 hover:bg-amber-50 transition cursor-pointer"
                    title="單獨測試此提醒彈窗"
                  >
                    <Play className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleToggle(rem.id)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition cursor-pointer ${
                      rem.enabled ? 'bg-emerald-500 justify-end' : 'bg-stone-300 justify-start'
                    }`}
                  >
                    <span className="bg-white w-4 h-4 rounded-full shadow-md" />
                  </button>

                  {rem.id.startsWith('rem-custom-') && (
                    <button
                      onClick={() => handleDeleteReminder(rem.id)}
                      className="p-1 text-stone-400 hover:text-rose-600 cursor-pointer"
                      title="刪除自訂提醒"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
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
                <span>已儲存設定！</span>
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
