import React, { useState, useEffect } from 'react';
import {
  calculateAnalytics,
  exportDataAsJSON,
  exportDataAsCSV,
  importDataFromJSON,
  getAllSkinLogs,
  saveSkinLog,
  getTodayDateKey,
  SkinLog
} from '../utils/storage';
import {
  BarChart3,
  Download,
  Upload,
  Flame,
  CheckCircle2,
  Calendar,
  Sparkles,
  FileSpreadsheet,
  FileCode,
  Smile,
  AlertCircle,
  Clock,
  RotateCcw
} from 'lucide-react';

export const AnalyticsHistoryView: React.FC = () => {
  const [analytics, setAnalytics] = useState(calculateAnalytics());
  const [skinLogs, setSkinLogs] = useState<SkinLog[]>(getAllSkinLogs());
  const todayKey = getTodayDateKey();

  // Skin journal state for today
  const existingTodayLog = skinLogs.find(l => l.date === todayKey);
  const [todayCondition, setTodayCondition] = useState<SkinLog['condition']>(
    existingTodayLog?.condition || 'normal'
  );
  const [todayScore, setTodayScore] = useState<number>(existingTodayLog?.hydrationScore || 4);
  const [todayNotes, setTodayNotes] = useState<string>(existingTodayLog?.notes || '');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  useEffect(() => {
    setAnalytics(calculateAnalytics());
    setSkinLogs(getAllSkinLogs());
  }, []);

  const handleSaveSkinJournal = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = saveSkinLog({
      date: todayKey,
      condition: todayCondition,
      hydrationScore: todayScore,
      notes: todayNotes
    });
    setSkinLogs(updated);
    setSaveSuccessMsg(true);
    setTimeout(() => setSaveSuccessMsg(false), 3000);
  };

  const handleFileImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await importDataFromJSON(file);
      setAnalytics(calculateAnalytics());
      setSkinLogs(getAllSkinLogs());
      alert('數據匯入成功！已更新歷史記錄與個人化提醒。');
    } catch {
      alert('匯入失敗：請確認檔案是否為正確的 GlowSync JSON 備份檔。');
    }
  };

  const conditionLabels: Record<SkinLog['condition'], { label: string; icon: string; color: string }> = {
    perfect: { label: '極佳水光', icon: '✨', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    normal: { label: '穩定平衡', icon: '😊', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    dry: { label: '兩頰乾燥', icon: '🍂', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    acne: { label: '下巴長痘', icon: '🌋', color: 'bg-rose-50 text-rose-700 border-rose-200' },
    sensitive: { label: '泛紅微刺', icon: '⚠️', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    flaking: { label: '局部起屑', icon: '❄️', color: 'bg-stone-100 text-stone-700 border-stone-300' }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Header & Summary Stats */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                保養與保健歷史追蹤 ＆ 數據分析
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                追蹤每日打卡執行率、連續天數、膚況轉變歷程，並支援完整資料匯出。
              </p>
            </div>
          </div>

          {/* Export Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={exportDataAsCSV}
              className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              title="匯出為 Excel / CSV 試算表"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>匯出 CSV 報表</span>
            </button>
            <button
              onClick={exportDataAsJSON}
              className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              title="匯出完整 JSON 備份檔"
            >
              <FileCode className="w-4 h-4 text-amber-300" />
              <span>完整 JSON 備份</span>
            </button>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1">
            <div className="flex items-center justify-between text-amber-700 text-xs font-bold">
              <span>連續打卡</span>
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            </div>
            <div className="text-2xl font-black text-stone-900">{analytics.streak} 天</div>
            <p className="text-[11px] text-amber-800">維持紀律養成水光肌</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1">
            <div className="flex items-center justify-between text-emerald-700 text-xs font-bold">
              <span>滿分完成天數</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-black text-stone-900">{analytics.fullCompleteDays} 天</div>
            <p className="text-[11px] text-emerald-800">100% 達成所有步驟</p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
            <div className="flex items-center justify-between text-blue-700 text-xs font-bold">
              <span>平均完成率</span>
              <BarChart3 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-black text-stone-900">{analytics.avgCompletionRate}%</div>
            <p className="text-[11px] text-blue-800">歷史執行精確度</p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 space-y-1">
            <div className="flex items-center justify-between text-stone-600 text-xs font-bold">
              <span>累計記錄天數</span>
              <Calendar className="w-4 h-4 text-stone-500" />
            </div>
            <div className="text-2xl font-black text-stone-900">{analytics.totalDaysLogged} 天</div>
            <p className="text-[11px] text-stone-500">持續記錄健康數據</p>
          </div>
        </div>
      </div>

      {/* 2. Today Skin Condition Journal */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smile className="w-5 h-5 text-rose-500" />
            <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">
              今日膚況觀察與日記記錄（{todayKey}）
            </h3>
          </div>
          {saveSuccessMsg && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold animate-in fade-in">
              ✓ 膚況記錄已儲存！
            </span>
          )}
        </div>

        <form onSubmit={handleSaveSkinJournal} className="space-y-4 text-xs sm:text-sm">
          {/* Status selector */}
          <div className="space-y-1.5">
            <label className="font-bold text-stone-800">今日肌膚狀態：</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {(Object.keys(conditionLabels) as SkinLog['condition'][]).map((cond) => {
                const info = conditionLabels[cond];
                const isSelected = todayCondition === cond;
                return (
                  <button
                    type="button"
                    key={cond}
                    onClick={() => setTodayCondition(cond)}
                    className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                    }`}
                  >
                    <div className="text-base mb-1">{info.icon}</div>
                    <div className="text-xs font-bold">{info.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hydration Score */}
          <div className="space-y-1.5">
            <label className="font-bold text-stone-800">
              保濕滿意度評分（1~5 分，5 為最水潤）：
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((score) => (
                <button
                  type="button"
                  key={score}
                  onClick={() => setTodayScore(score)}
                  className={`w-9 h-9 rounded-xl font-black text-xs transition cursor-pointer ${
                    todayScore === score
                      ? 'bg-rose-500 text-white ring-2 ring-rose-200 shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {score}★
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="font-bold text-stone-800">膚況心得與特殊備註：</label>
            <textarea
              value={todayNotes}
              onChange={(e) => setTodayNotes(e.target.value)}
              placeholder="例：今天下巴擦完水楊酸粉刺有浮出，兩頰擦冰河霜很潤不乾癢；B群飯後60分鐘吃腸胃很順暢..."
              rows={3}
              className="w-full p-3.5 rounded-2xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 text-xs sm:text-sm"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition cursor-pointer"
            >
              儲存今日膚況日記
            </button>
          </div>
        </form>
      </div>

      {/* 3. History Timeline */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-4">
        <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">
          近期打卡歷程記錄
        </h3>

        {analytics.recentRecords.length === 0 ? (
          <div className="p-8 text-center text-stone-400 text-xs">
            尚無打卡記錄，請在「今日主頁」點擊打卡，系統將自動在此生成進度曲線。
          </div>
        ) : (
          <div className="space-y-3">
            {analytics.recentRecords.map((rec) => (
              <div
                key={rec.date}
                className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between flex-wrap gap-3 text-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center font-bold text-stone-800">
                    {rec.date.split('-')[2]}日
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 flex items-center gap-2">
                      <span>{rec.date}</span>
                      <span className="text-[10px] px-2 py-0.2 rounded-md bg-stone-200 text-stone-700">
                        {rec.mode === 'makeup' ? '全妝日' : '素顏日'}
                      </span>
                      <span className="text-[10px] px-2 py-0.2 rounded-md bg-stone-200 text-stone-700">
                        {rec.weekType === 'even' ? '偶數週' : '奇數週'}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      完成 {rec.completedStepIds.length} / {rec.totalSteps} 項步驟
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="font-black text-sm text-stone-900">{rec.percentage}%</span>
                  </div>
                  <div className="w-20 h-2 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        rec.percentage === 100
                          ? 'bg-emerald-500'
                          : rec.percentage > 50
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                      style={{ width: `${rec.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. Import / Restore section */}
      <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200 flex items-center justify-between flex-wrap gap-4 text-xs">
        <div>
          <span className="font-bold text-stone-900 block">備份與歷史資料匯入</span>
          <p className="text-stone-500">
            更換手機或瀏覽器時，可直接上傳先前匯出的 JSON 檔案無縫還原打卡進度。
          </p>
        </div>

        <label className="px-4 py-2.5 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 font-bold transition flex items-center gap-2 cursor-pointer shadow-2xs">
          <Upload className="w-4 h-4 text-stone-600" />
          <span>上傳 JSON 備份檔</span>
          <input
            type="file"
            accept=".json"
            onChange={handleFileImport}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};
