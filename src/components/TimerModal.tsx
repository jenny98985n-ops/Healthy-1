import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Timer, Sparkles, Bell } from 'lucide-react';
import { playTimerFinishChime } from '../utils/audio';

interface TimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMinutes?: number;
  initialTitle?: string;
}

export const TimerModal: React.FC<TimerModalProps> = ({
  isOpen,
  onClose,
  initialMinutes = 3,
  initialTitle = '保養倒數計時器'
}) => {
  const [totalSeconds, setTotalSeconds] = useState(initialMinutes * 60);
  const [remainingSeconds, setRemainingSeconds] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [timerTitle, setTimerTitle] = useState(initialTitle);
  const [customMins, setCustomMins] = useState(initialMinutes);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (initialMinutes) {
      setTotalSeconds(initialMinutes * 60);
      setRemainingSeconds(initialMinutes * 60);
      setCustomMins(initialMinutes);
      setTimerTitle(initialTitle);
      setIsRunning(true);
      setIsFinished(false);
    }
  }, [initialMinutes, initialTitle, isOpen]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsFinished(true);
            playTimerFinishChime();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, remainingSeconds]);

  if (!isOpen) return null;

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const progressPct = totalSeconds > 0 ? Math.round(((totalSeconds - remainingSeconds) / totalSeconds) * 100) : 0;

  const setPreset = (mins: number, title: string) => {
    setTotalSeconds(mins * 60);
    setRemainingSeconds(mins * 60);
    setCustomMins(mins);
    setTimerTitle(title);
    setIsRunning(true);
    setIsFinished(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingSeconds(totalSeconds);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-stone-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-rose-500" />
            <h3 className="font-extrabold text-stone-900 text-base">{timerTitle}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Timer Display */}
        <div className="text-center py-4 space-y-3">
          <div className="text-6xl font-black font-mono tracking-tight text-stone-900">
            {formattedTime}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                isFinished ? 'bg-emerald-500' : 'bg-rose-500'
              }`}
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {isFinished && (
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 animate-bounce">
              🔔 時間到！請進入下一個保養或服藥步驟。
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-6 py-3 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-sm transition cursor-pointer ${
              isRunning
                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                : 'bg-stone-900 hover:bg-stone-800 text-white'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4" />
                <span>暫停</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>開始計時</span>
              </>
            )}
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
            title="重新計時"
          >
            <RotateCcw className="w-4 h-4" />
            <span>重置</span>
          </button>
        </div>

        {/* Quick Presets */}
        <div className="space-y-2 pt-2 border-t border-stone-100">
          <span className="text-xs font-bold text-stone-700 block">常用科學保養時間：</span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => setPreset(3, '水楊酸/防曬成膜 3 分鐘')}
              className="p-2.5 rounded-xl border border-stone-200 hover:border-stone-400 bg-stone-50/70 text-left cursor-pointer transition"
            >
              <div className="font-bold text-stone-900">3 分鐘</div>
              <div className="text-[11px] text-stone-500">水楊酸裸肌 / 防曬成膜</div>
            </button>
            <button
              onClick={() => setPreset(5, '離子儀導入 5 分鐘')}
              className="p-2.5 rounded-xl border border-stone-200 hover:border-stone-400 bg-stone-50/70 text-left cursor-pointer transition"
            >
              <div className="font-bold text-stone-900">5 分鐘</div>
              <div className="text-[11px] text-stone-500">CHECK2CHECK 導入/導出</div>
            </button>
            <button
              onClick={() => setPreset(10, '綠橘子眼膜 10 分鐘')}
              className="p-2.5 rounded-xl border border-stone-200 hover:border-stone-400 bg-stone-50/70 text-left cursor-pointer transition"
            >
              <div className="font-bold text-stone-900">10 分鐘</div>
              <div className="text-[11px] text-stone-500">Goodal 眼膜 / ilso 導出</div>
            </button>
            <button
              onClick={() => setPreset(15, '面膜 SPA 15 分鐘')}
              className="p-2.5 rounded-xl border border-stone-200 hover:border-stone-400 bg-stone-50/70 text-left cursor-pointer transition"
            >
              <div className="font-bold text-stone-900">15 分鐘</div>
              <div className="text-[11px] text-stone-500">AZ100藍膜 / 保濕面膜</div>
            </button>
          </div>

          <button
            onClick={() => setPreset(60, '處方藥後 60 分鐘 Thorne B 群間隔')}
            className="w-full mt-2 p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 font-bold text-xs flex items-center justify-between cursor-pointer transition"
          >
            <span>⏰ 60 分鐘：早晨處方藥 ➔ Thorne 活性 B 群間隔</span>
            <span>點擊設定</span>
          </button>
        </div>
      </div>
    </div>
  );
};
