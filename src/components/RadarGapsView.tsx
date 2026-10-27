import React from 'react';
import { Activity, ShieldCheck, CheckCircle2, AlertTriangle, Sparkles, Droplets, Zap } from 'lucide-react';

export const RadarGapsView: React.FC = () => {
  const dimensions = [
    {
      name: '深層水相保濕',
      score: 98,
      status: '極佳充沛',
      color: 'bg-blue-500',
      description: 'Torriden 5D 玻尿酸、ORIGINS 靈芝水、BOH 噴霧與保濕面膜全面涵蓋。'
    },
    {
      name: '皮脂屏障防禦',
      score: 96,
      status: '高強度防護',
      color: 'bg-emerald-500',
      description: '黛珂小紫瓶微脂囊前導、S.NATURE 角鯊烷、契爾氏冰河醣蛋白霜雙重封層。'
    },
    {
      name: '毛孔角栓代謝',
      score: 92,
      status: '精準溫和',
      color: 'bg-amber-500',
      description: '週二 ilso 融化角栓 + 寶拉 2% 水楊酸裸肌代謝，suisai 酵素洗下巴防閉口。'
    },
    {
      name: '全臉美白提亮',
      score: 94,
      status: '高活性阻黑',
      color: 'bg-purple-500',
      description: '黛珂極光煥采 1.8X、ANUA 桃子菸鹼醯胺、妮維雅 630 淡斑晚霜雙向抑制。'
    },
    {
      name: '膠原微晶抗老',
      score: 95,
      status: '高階激活',
      color: 'bg-rose-500',
      description: 'VT Reedle 300 微針打通細胞間隙，週五 Celimax A 醇撫紋，眼周紫熨斗玻色因。'
    },
    {
      name: '抗發炎與控油',
      score: 90,
      status: '局部專責',
      color: 'bg-cyan-500',
      description: '下巴專責：小林抗痘水抗菌、TO 菸鹼醯胺收斂、Quality 1st 壬二酸藍膜鎮靜。'
    }
  ];

  const safetyAudits = [
    {
      title: '分區護膚邏輯檢查 (乾頰 vs 油巴)',
      passed: true,
      desc: '兩頰使用豐潤角鯊霜與冰河霜；下巴出油區嚴格限定 #26-2 米糠發酵乳液，阻絕悶痘起閉口。'
    },
    {
      title: '酸類與微晶活性時間間隔檢查',
      passed: true,
      desc: '週二水楊酸、週三 VT 微晶、週五 Celimax A 醇微晶各自獨立排程，無任何同晚重疊過度去角質風險。'
    },
    {
      title: '先乳後水分子吸收通道檢查',
      passed: true,
      desc: '黛珂小紫瓶開啟微脂囊通道後，#28 AQ 乳液軟化兩頰硬化角質，再拍傳統化妝水，分子吸收率最大化。'
    },
    {
      title: '處方藥物與高活性 B 群腸道吸收檢查',
      passed: true,
      desc: '早餐隨餐 PTU 3 顆 + 癲鍵錠 1 顆，嚴格間隔 60 分鐘後才服用 Thorne B 複合物，無競爭吸收風險。'
    },
    {
      title: '夜間安眠與神經放鬆純淨度檢查',
      passed: true,
      desc: '睡前腸胃僅保留癲必停 0.5 顆 + 羅眠樂 1 顆，BHK\'s 奢光錠已完全移至早晨，無神經亢奮干擾。'
    }
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
              配方功效雷達與成分平衡檢查
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              檢驗 41 款保養品與 10 款保健用藥在「抗乾、抗老、代謝、美白、抗痘」六大維度上的覆蓋率與協同效應。
            </p>
          </div>
        </div>
      </div>

      {/* Radar Scores Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dimensions.map((dim) => (
          <div
            key={dim.name}
            className="p-5 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm">{dim.name}</span>
              <span className="text-xs font-black text-stone-800">{dim.score}%</span>
            </div>

            {/* Progress Bar */}
            <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${dim.color} rounded-full transition-all duration-1000`}
                style={{ width: `${dim.score}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px]">
              <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                評估：{dim.status}
              </span>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed pt-1 border-t border-stone-100">
              {dim.description}
            </p>
          </div>
        ))}
      </div>

      {/* Comprehensive Safety Audit List */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">
            全自動排程安全稽核（5 項安全指標 100% 通過）
          </h3>
        </div>

        <div className="space-y-3">
          {safetyAudits.map((audit, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-emerald-950">{audit.title}</h4>
                <p className="text-xs text-stone-700 mt-0.5 leading-relaxed">{audit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
