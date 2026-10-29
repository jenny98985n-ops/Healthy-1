import React, { useState, useEffect } from 'react';
import { DayOfWeek, WeekType, RoutineMode, ProductItem, CheckInRecord } from './types';
import { Header } from './components/Header';
import { TodayView } from './components/TodayView';
import { CalendarView } from './components/CalendarView';
import { SupplementsRxView } from './components/SupplementsRxView';
import { MakeupCleansingView } from './components/MakeupCleansingView';
import { RadarGapsView } from './components/RadarGapsView';
import { InventoryView } from './components/InventoryView';
import { SafetyRulesView } from './components/SafetyRulesView';
import { AnalyticsHistoryView } from './components/AnalyticsHistoryView';
import { TimerModal } from './components/TimerModal';
import { RemindersModal } from './components/RemindersModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { NotificationToast } from './components/NotificationToast';
import { useTimeBasedReminders } from './hooks/useTimeBasedReminders';
import {
  getTodayDateKey,
  getDayOfWeekFromDate,
  getDefaultWeekType,
  saveWeekTypeOverride,
  getStoredRoutineMode,
  saveRoutineMode,
  getAllCheckIns,
  toggleStepCheckIn
} from './utils/storage';
import { playCheckInSound, playAllCompleteChime, getSoundMuted, setSoundMuted } from './utils/audio';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('today');
  // Dynamically initialize to today's real day of week (e.g. Wednesday 'wed')
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>(() => getDayOfWeekFromDate());
  // Dynamically calculate current week number in year (e.g. Week 44 = Even)
  const [weekType, setWeekTypeState] = useState<WeekType>(() => getDefaultWeekType());
  const [routineMode, setRoutineModeState] = useState<RoutineMode>(getStoredRoutineMode());
  const [isSoundMuted, setIsSoundMutedState] = useState<boolean>(getSoundMuted());

  // Checkins state
  const todayKey = getTodayDateKey();
  const [checkIns, setCheckIns] = useState<Record<string, CheckInRecord>>(getAllCheckIns());

  // Modals state
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [timerDuration, setTimerDuration] = useState(3);
  const [timerTitle, setTimerTitle] = useState('保養倒數計時器');

  const [isRemindersOpen, setIsRemindersOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Time-based background reminder ticker
  const {
    activeToast,
    dismissToast,
    triggerTestNotification,
    snoozeNotification,
    refreshReminders
  } = useTimeBasedReminders();

  // Sync weekType override
  const handleSetWeekType = (newWeek: WeekType) => {
    setWeekTypeState(newWeek);
    saveWeekTypeOverride(newWeek);
  };

  const handleSetRoutineMode = (newMode: RoutineMode) => {
    setRoutineModeState(newMode);
    saveRoutineMode(newMode);
  };

  const handleToggleSound = () => {
    const nextVal = !isSoundMuted;
    setIsSoundMutedState(nextVal);
    setSoundMuted(nextVal);
  };

  const handleOpenTimerForDuration = (mins: number, title?: string) => {
    setTimerDuration(mins);
    setTimerTitle(title || '保養倒數計時器');
    setIsTimerOpen(true);
  };

  // Step toggle handler
  const handleToggleStep = (stepId: string, totalSteps: number) => {
    const updated = toggleStepCheckIn(
      todayKey,
      stepId,
      selectedDay,
      weekType,
      routineMode,
      totalSteps
    );
    setCheckIns(prev => ({
      ...prev,
      [todayKey]: updated
    }));

    // Audio cue
    if (updated.percentage === 100) {
      playAllCompleteChime();
    } else {
      playCheckInSound();
    }
  };

  const currentTodayRecord = checkIns[todayKey];
  const todayCompletedStepIds = currentTodayRecord?.completedStepIds || [];
  const todayCompletionRate = currentTodayRecord?.percentage || 0;

  const handleResetToToday = () => {
    setSelectedDay(getDayOfWeekFromDate());
    const defaultWeek = getDefaultWeekType();
    setWeekTypeState(defaultWeek);
    saveWeekTypeOverride(defaultWeek);
    setCurrentTab('today');
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-stone-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      {/* Persistent Global Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        weekType={weekType}
        setWeekType={handleSetWeekType}
        isSoundMuted={isSoundMuted}
        toggleSound={handleToggleSound}
        onOpenTimer={() => handleOpenTimerForDuration(3, '保養倒數計時器')}
        onOpenReminders={() => setIsRemindersOpen(true)}
        onOpenExport={() => setCurrentTab('analytics')}
        todayCompletionRate={todayCompletionRate}
        onResetToToday={handleResetToToday}
      />

      {/* Main View Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {currentTab === 'today' && (
          <TodayView
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            weekType={weekType}
            setWeekType={handleSetWeekType}
            routineMode={routineMode}
            setRoutineMode={handleSetRoutineMode}
            completedStepIds={todayCompletedStepIds}
            onToggleStep={handleToggleStep}
            onOpenTimerForDuration={handleOpenTimerForDuration}
            onSelectProduct={setSelectedProduct}
          />
        )}

        {currentTab === 'calendar' && (
          <CalendarView
            currentDay={selectedDay}
            weekType={weekType}
            onSelectDayRoutine={(day, wType) => {
              setSelectedDay(day);
              handleSetWeekType(wType);
              setCurrentTab('today');
            }}
            onOpenTimerForDuration={handleOpenTimerForDuration}
          />
        )}

        {currentTab === 'supplements' && (
          <SupplementsRxView
            onOpenTimerForDuration={handleOpenTimerForDuration}
          />
        )}

        {currentTab === 'makeup_cleansing' && (
          <MakeupCleansingView
            onSelectProduct={setSelectedProduct}
          />
        )}

        {currentTab === 'radar' && (
          <RadarGapsView />
        )}

        {currentTab === 'inventory' && (
          <InventoryView
            onSelectProduct={setSelectedProduct}
          />
        )}

        {currentTab === 'safety' && (
          <SafetyRulesView />
        )}

        {currentTab === 'analytics' && (
          <AnalyticsHistoryView />
        )}
      </main>

      {/* Top-Right Friendly Push Notification Toast */}
      <NotificationToast
        notification={activeToast}
        onDismiss={dismissToast}
        onGoToRoutine={() => setCurrentTab('today')}
        onSnooze={snoozeNotification}
      />

      {/* Modals */}
      <TimerModal
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
        initialMinutes={timerDuration}
        initialTitle={timerTitle}
      />

      <RemindersModal
        isOpen={isRemindersOpen}
        onClose={() => setIsRemindersOpen(false)}
        onTriggerTestNotification={triggerTestNotification}
        onRemindersUpdated={refreshReminders}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onStartTimer={handleOpenTimerForDuration}
      />
    </div>
  );
}
