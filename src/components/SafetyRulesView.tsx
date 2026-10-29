/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Droplets,
  Zap,
  Clock,
  Pill,
  Eye,
  Sparkles,
  FileText,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import { SAFETY_GOLDEN_RULES } from '../data/amandaRoutineData';
import { V5_OPTIMIZATION_TOPICS, ANTI_COMEDONE_EYE_RULES } from '../data/v5OptimizationData';

export const SafetyRulesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'v5' | 'rules' | 'anti_comedone'>('v5');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>('topic-6');

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                  醫學共識排程 v7 ＆ 安全交互禁忌
                </h2>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  skincare_plan_v7 臉部 48 項全部排入
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                依照 skincare_plan_v7 最新共識：第 1 週起無暫停，落實 4 大夜晚類型分流、3 大活性夜間隔調整與基準退回組應急機制。
              </p>
            </div>
          </div>

          {/* Quick Sub-navigation */}
          <div className="flex items-center gap-2 p-1 rounded-2xl bg-stone-100 text-xs font-bold">
            <button
              onClick={() => setActiveTab('v5')}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'v5'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-rose-500" />
              <span>v5 取捨對照表 (11項)</span>
            </button>
            <button
              onClick={() => setActiveTab('anti_comedone')}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'anti_comedone'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-amber-500" />
              <span>眼霜與防閉口專題</span>
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'rules'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-indigo-500" />
              <span>5 大鐵則 ＆ 紅線清單</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: V5 Comparison Table (11 Core Topics) */}
      {activeTab === 'v5' && (
        <div className="space-y-4">
          {/* v7 核心排程共識卡 */}
          <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white rounded-3xl p-6 shadow-md border border-stone-800 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff1e56] animate-pulse" />
                <h3 className="font-extrabold text-base sm:text-lg text-amber-300">
                  skincare_plan_v7 最新共識：臉部 48 項全部排入，第 1 週起無暫停
                </h3>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                48 編號全面上線
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-1">
                <span className="font-bold text-rose-400">⚡ 活性夜</span>
                <p className="text-stone-300 text-[11px]">水楊酸（週二）、A 醇（偶週五）、Reedle 300（奇週六）。各活性夜相隔 ≥ 3 天。</p>
              </div>
              <div className="p-3 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-1">
                <span className="font-bold text-emerald-400">🛡️ 緩衝夜</span>
                <p className="text-stone-300 text-[11px]">活性夜隔天（週三、奇週日、偶週六），只做單純修護保濕，不疊加高活性。</p>
              </div>
              <div className="p-3 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-1">
                <span className="font-bold text-cyan-400">🧪 中度夜</span>
                <p className="text-stone-300 text-[11px]">去角質洗卸、面膜、麴酸精華。排在非活性且非緩衝日（週一、偶週四、偶週日）。</p>
              </div>
              <div className="p-3 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-1">
                <span className="font-bold text-amber-400">💧 基準退回組</span>
                <p className="text-stone-300 text-[11px]">出現不適時退回：MUJI水 ＋ S.NATURE霜 ＋ 米糠乳，連續 3 天，暫停活性與中度夜。</p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed border-t border-stone-800 pt-3">
              【三大關鍵調整】：① 奇數週週六 Reedle 300（當週不排 A 醇）；偶數週週五 A 醇（當週不排 Reedle）。② 週二水楊酸夜不疊加 Muge 與 ilso；Muge 移至週一、週三擦下巴；ilso 移至偶數週週四。③ 分散高功能精華，每晚維持 1～2 個重點。
            </p>
          </div>

          <div className="space-y-3">
            {V5_OPTIMIZATION_TOPICS.map((item) => {
              const isExpanded = expandedTopicId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white border border-stone-200/90 shadow-2xs overflow-hidden transition-all"
                >
                  <div
                    onClick={() => setExpandedTopicId(isExpanded ? null : item.id)}
                    className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer hover:bg-stone-50/60 transition"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-xl border flex-shrink-0 ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                      <h4 className="font-extrabold text-stone-900 text-sm sm:text-base truncate">
                        {item.topic}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0 text-stone-400">
                      <span className="text-xs font-semibold text-rose-600 hidden md:inline">
                        本表採用 ➔
                      </span>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-stone-800" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Adopted Summary Card (Always Visible) */}
                  <div className="px-5 pb-4 pt-1 border-t border-stone-100 bg-stone-50/30">
                    <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-emerald-950 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-emerald-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>本表採用定案：</span>
                        <span className="font-black text-stone-900">{item.adoptedPlan}</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-emerald-800">
                        🛡️ 防閉口/耐受影響：{item.antiComedoneImpact}
                      </p>
                    </div>
                  </div>

                  {/* Expanded Comparative Details */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 bg-stone-50/80 border-t border-stone-100 space-y-3 text-xs animate-in fade-in duration-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                        <div className="p-3 rounded-2xl bg-white border border-stone-200 space-y-1">
                          <span className="font-bold text-stone-500 block">Gemini 版觀點：</span>
                          <p className="text-stone-700 leading-relaxed text-[11px] sm:text-xs">
                            {item.geminiVersion}
                          </p>
                        </div>

                        <div className="p-3 rounded-2xl bg-white border border-stone-200 space-y-1">
                          <span className="font-bold text-stone-500 block">GPT 版觀點：</span>
                          <p className="text-stone-700 leading-relaxed text-[11px] sm:text-xs">
                            {item.gptVersion}
                          </p>
                        </div>

                        <div className="p-3 rounded-2xl bg-amber-50/90 border border-amber-200 space-y-1">
                          <span className="font-bold text-amber-900 block">皮膚科專業判斷：</span>
                          <p className="text-stone-800 leading-relaxed text-[11px] sm:text-xs">
                            {item.clinicalJudgement}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 2: Dermatological Answer for Eye Cream Stacking & Anti-Comedone */}
      {activeTab === 'anti_comedone' && (
        <div className="space-y-6">
          {/* Big Q&A Callout */}
          <div className="bg-amber-50/90 rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm space-y-4 text-amber-950">
            <div className="flex items-center gap-2.5 text-rose-600 font-black text-base sm:text-lg">
              <Eye className="w-5 h-5" />
              <span>醫師審核解答：{ANTI_COMEDONE_EYE_RULES.eyeCreamQuestion}</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-amber-200 space-y-2">
              <p className="text-base sm:text-lg font-black text-rose-700">
                {ANTI_COMEDONE_EYE_RULES.eyeCreamAnswer}
              </p>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                眼霜絕對不可同時疊擦兩款！疊擦不會讓效果翻倍，反而會導致油脂超載造成白色粟粒腫（脂肪粒），且眼霜油脂下移會直接堵塞下巴毛孔引發嚴重的閉鎖性硬粉刺。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {ANTI_COMEDONE_EYE_RULES.eyeCreamDermatologyReasons.map((reason, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/90 border border-amber-200 space-y-1.5">
                  <span className="font-extrabold text-stone-900 text-xs sm:text-sm block">
                    {reason.title}
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {reason.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Actionable Anti-Comedone Rules */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2 font-extrabold text-stone-900 text-base sm:text-lg">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>抗閉鎖粉刺「極致減法四原則」</span>
            </div>

            <div className="space-y-3">
              {ANTI_COMEDONE_EYE_RULES.simplificationRules.map((rule, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 font-medium">
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: 5 Golden Rules & Red Flags */}
      {activeTab === 'rules' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SAFETY_GOLDEN_RULES.map((rule, idx) => (
              <div
                key={rule.id}
                className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-stone-900 text-white">
                      RULE 0{idx + 1}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      rule.severity === 'critical'
                        ? 'bg-rose-100 text-rose-800'
                        : rule.severity === 'high'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-stone-100 text-stone-700'
                    }`}>
                      {rule.severity === 'critical' ? '最高級核心' : rule.severity === 'high' ? '重要分流' : '安全預防'}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 pt-1">{rule.title}</h4>

                  <p className="text-xs text-rose-700 font-medium leading-relaxed bg-rose-50/60 p-2.5 rounded-xl border border-rose-100">
                    {rule.desc}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {rule.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Strict Prohibitions Table */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-600" />
              <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">
                絕對禁止行為清單（Red Flags）
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-1">
                <span className="font-bold text-rose-950">❌ 嚴禁同夜混疊酸類與微晶針</span>
                <p className="text-rose-800 text-xs">
                  週二水楊酸、週三 VT 微晶、週五 Celimax A 醇微晶各自獨立，切勿在同一晚疊擦兩種以上活性成分，否則將導致急性屏障受損、爆痘脫皮。
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                <span className="font-bold text-amber-950">❌ 嚴禁在下巴出油粉刺區塗抹厚重面霜與橘子霜</span>
                <p className="text-amber-800 text-xs">
                  下巴閉口是因皮脂腺過度活躍與外油內乾引發，僅可塗抹水相精華與 #26-2 MUJI 米糠乳液；任何厚重油脂（角鯊霜、冰河霜、橘子霜）接觸下巴極易引發痤瘡桿菌滋生。
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1">
                <span className="font-bold text-indigo-950">❌ 嚴禁在睡前服用高濃度維他命 B 群、C 或魚油</span>
                <p className="text-indigo-800 text-xs">
                  高活性 B 群與穀胱甘肽刺激人體中樞能量代謝，易導致心悸或夜間亢奮失眠，且會干擾抗痙攣藥物在消化道的吸收。睡前僅能吃癲必停與羅眠樂。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
