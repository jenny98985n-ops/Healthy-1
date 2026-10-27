import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, Droplets, Zap, Clock, Pill } from 'lucide-react';
import { SAFETY_GOLDEN_RULES } from '../data/amandaRoutineData';

export const SafetyRulesView: React.FC = () => {
  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
              安全交互禁忌與 5 大黃金分子保養法則
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              嚴格杜絕成分打架、過度去角質、皮脂屏障受損，以及內服藥品吸收衝突。
            </p>
          </div>
        </div>
      </div>

      {/* 5 Golden Rules */}
      <div className="space-y-4">
        <h3 className="font-extrabold text-stone-900 text-lg px-1 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-500" />
          <span>分子吸收學 5 大黃金鐵則</span>
        </h3>

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
              週二水楊酸、週三 VT 微晶、週五 Celimax A 醇微晶各自獨立，切勿因想要快速去角質而在同一晚疊擦兩種以上活性成分，否則將導致急性屏障受損、爆痘脫皮。
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
  );
};
