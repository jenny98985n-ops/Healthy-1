import React from 'react';
import { Pill, Clock, AlertTriangle, ShieldCheck, Timer, Droplets, Sun, Moon, Info } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/amandaRoutineData';

interface SupplementsRxViewProps {
  onOpenTimerForDuration: (mins: number, title: string) => void;
}

export const SupplementsRxView: React.FC<SupplementsRxViewProps> = ({ onOpenTimerForDuration }) => {
  const rxProducts = ALL_PRODUCTS.filter(p => p.category === 'medicine');
  const supplementProducts = ALL_PRODUCTS.filter(p => p.category === 'supplement');

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
            <Pill className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
              常規處方用藥與 6 款內服保健品（嚴格安全時間表）
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              精準醫學分子分流：徹底避免保健品與精神科 / 抗痙攣 / 抗甲狀腺處方藥在胃腸道產生競爭吸收。
            </p>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">重要臨床分流禁忌守則：</p>
            <p className="text-amber-800">
              1. <strong>BHK's 奢光錠</strong>已徹底移至早晨，杜絕夜間干擾安眠與藥效。<br />
              2. <strong>Thorne 活性 B 複合物</strong>必須在早餐處方藥服下後，<strong>嚴格間隔 60 分鐘</strong>再吃！<br />
              3. <strong>夜間睡前腸胃</strong>僅保留給癲必停與羅眠樂，嚴禁在睡前服用任何保健品！
            </p>
          </div>
        </div>
      </div>

      {/* 3 Main Timeframes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Morning */}
        <div className="bg-white rounded-3xl p-6 border border-amber-200 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-amber-100">
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-stone-900 text-lg">☀️ 早晨（早餐時段）</h3>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
                嚴格分流
              </span>
            </div>

            {/* Sub-step 1 */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-900">1. 餐後立即吃（處方藥）</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-stone-200 text-stone-700 font-mono">
                  藥-01 + 藥-02
                </span>
              </div>
              <ul className="text-xs text-stone-700 space-y-1">
                <li>• <strong>"汎生" 普樂彼錠 50mg (PTU)</strong>：<span className="text-rose-600 font-bold">3 顆</span>（抗甲狀腺）</li>
                <li>• <strong>"信東" 癲鍵錠 50mg (Topiramate)</strong>：<span className="text-rose-600 font-bold">1 顆</span>（神經穩定）</li>
              </ul>
            </div>

            {/* Sub-step 2 */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-900">2. 隨餐搭配（美白抗氧化）</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-stone-200 text-stone-700 font-mono">
                  健-01 + 健-02
                </span>
              </div>
              <ul className="text-xs text-stone-700 space-y-1">
                <li>• <strong>8VC 2200mg 維生素 C 粉</strong>：<span className="text-emerald-700 font-bold">1 包</span></li>
                <li>• <strong>BHK's 奢光錠 (穀胱甘肽)</strong>：<span className="text-emerald-700 font-bold">1 錠</span></li>
              </ul>
              <p className="text-[11px] text-stone-500">
                奢光錠已完全移至白天，利用日間防禦紫外線，避免夜間干擾睡眠。
              </p>
            </div>

            {/* Sub-step 3 */}
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-950">3. 【間隔 60 分鐘後】活性 B 群</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-200 text-amber-900 font-mono font-bold">
                  健-04
                </span>
              </div>
              <p className="text-xs text-stone-700">
                • <strong>Thorne 基本維生素 B 複合物</strong>：<span className="text-amber-800 font-bold">1 粒</span>
              </p>
              <p className="text-[11px] text-amber-800">
                活性輔酶型態 B 群易與抗痙攣/抗甲狀腺藥產生載體吸收競爭，務必設鬧鐘間隔 1 小時！
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenTimerForDuration(60, '早晨處方藥後 60 分鐘 Thorne B群間隔計時')}
            className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
          >
            <Timer className="w-3.5 h-3.5" />
            <span>啟動 60 分鐘間隔倒數計時器</span>
          </button>
        </div>

        {/* Noon / Dinner */}
        <div className="bg-white rounded-3xl p-6 border border-blue-200 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-blue-100">
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-blue-500" />
                <h3 className="font-bold text-stone-900 text-lg">🌤️ 午餐或晚餐（擇一隨餐）</h3>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                油脂輔助
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
              <span className="text-xs font-bold text-blue-950 flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-blue-600" />
                <span>餐後立即吃（需食物中油脂輔助溶解吸收）</span>
              </span>
              <ul className="text-xs text-stone-700 space-y-2">
                <li className="p-2 rounded-xl bg-white border border-blue-100">
                  <div className="font-bold text-stone-900">03. Kirkland 科克蘭 維生素 D3</div>
                  <div className="text-blue-700 font-medium">劑量：2 錠</div>
                  <div className="text-[11px] text-stone-500">脂溶性維生素，補充秋冬日照不足，調節神經免疫。</div>
                </li>
                <li className="p-2 rounded-xl bg-white border border-blue-100">
                  <div className="font-bold text-stone-900">05. Sports Research Omega-3 深海魚油</div>
                  <div className="text-blue-700 font-medium">劑量：1 粒</div>
                  <div className="text-[11px] text-stone-500">高純度 rTG EPA/DHA，抗炎降血脂。</div>
                </li>
                <li className="p-2 rounded-xl bg-white border border-blue-100">
                  <div className="font-bold text-stone-900">06. Webber Naturals 蔓越莓濃縮膠囊</div>
                  <div className="text-blue-700 font-medium">劑量：1-2 粒</div>
                  <div className="text-[11px] text-stone-500">A型原花青素，守護女性私密尿道屏障健康。</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center text-xs text-stone-500">
            隨午餐或晚餐皆可，固定一餐服用即可，切勿空腹吃！
          </div>
        </div>

        {/* Bedtime */}
        <div className="bg-white rounded-3xl p-6 border border-indigo-200 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-indigo-100">
              <div className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-indigo-500" />
                <h3 className="font-bold text-stone-900 text-lg">🌙 睡前（夜間安眠與神經）</h3>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-bold">
                純淨腸胃
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-3">
              <span className="text-xs font-bold text-indigo-950 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                <span>睡前 15-30 分鐘開水吞服</span>
              </span>
              <ul className="text-xs text-stone-700 space-y-2">
                <li className="p-2.5 rounded-xl bg-white border border-indigo-100">
                  <div className="font-bold text-stone-900">"瑞安" 癲必停持續性藥效膜衣錠 500mg</div>
                  <div className="text-indigo-700 font-bold">劑量：0.5 顆 (Depakote ER)</div>
                  <div className="text-[11px] text-stone-500">夜間穩定神經元，請勿磨碎以保持持續緩釋。</div>
                </li>
                <li className="p-2.5 rounded-xl bg-white border border-indigo-100">
                  <div className="font-bold text-stone-900">易靜錠 2 毫克 (羅眠樂 Loramet)</div>
                  <div className="text-indigo-700 font-bold">劑量：1 顆</div>
                  <div className="text-[11px] text-stone-500">助眠放鬆中樞神經，服藥後立即就寢。</div>
                </li>
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-800 space-y-1">
              <p className="font-bold">⚠️ 睡前嚴格禁忌：</p>
              <p>• 嚴禁在睡前吃維他命 B群、C粉或魚油！避免腸胃負擔與夜間神經亢奮。</p>
              <p>• 服藥後勿再操作儀器或開車，請熄燈平躺休息。</p>
            </div>
          </div>

          <div className="text-center text-xs text-stone-400 py-1">
            安心好眠，讓肌膚在黃金睡眠期自我修護 💤
          </div>
        </div>
      </div>

      {/* Complete Product Details Grid */}
      <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
        <h3 className="font-bold text-stone-900 text-base">
          4 款處方藥 ＋ 6 款內服保健品 藥理與吸收機制明細
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[...rxProducts, ...supplementProducts].map(item => (
            <div key={item.id} className="p-3.5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-900 text-sm">{item.name}</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-stone-200 text-stone-700">
                  {item.code}
                </span>
              </div>
              <p className="text-stone-600">
                <span className="font-semibold text-stone-700">攝取時段與用量：</span>
                {item.usageRule}
              </p>
              {item.molecularTip && (
                <p className="text-amber-800">
                  <span className="font-semibold">吸收機制：</span>
                  {item.molecularTip}
                </p>
              )}
              {item.cautions && (
                <p className="text-rose-700">
                  <span className="font-semibold">注意事項：</span>
                  {item.cautions}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
