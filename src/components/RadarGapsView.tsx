import React, { useState } from 'react';
import { Activity, ShieldCheck, CheckCircle2, AlertTriangle, Sparkles, Droplets, Zap, Info } from 'lucide-react';

interface DimensionDetail {
  id: string;
  name: string;
  score: number;
  products: string[];
  points: string[];
  gapAnalysis: string;
  coords: { x: number; y: number }; // normalized for SVG radar (center 150, 150, radius 100)
}

export const RadarGapsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'external' | 'internal'>('external');
  const [selectedDimensionId, setSelectedDimensionId] = useState<string | null>(null);

  // 6 External Skincare Dimensions (Matching image_4874a21d.png)
  const externalDimensions: DimensionDetail[] = [
    {
      id: 'cheeks',
      name: '兩頰屏障修護與鎖水',
      score: 96,
      products: ['#14', '#30', '#28', '#31', '#29'],
      points: [
        '黛珂超微導全能修護霜 (#30) 1 兆夜間微脂囊徹夜深層修護',
        'S.NATURE 水庫角鯊烷面霜 (#28) 深層補脂修護'
      ],
      gapAnalysis: '秋冬季或吹冷氣時，若兩頰有緊繃感，可隨時以 #12 BOH 或 #13 Ongredients 噴霧輔助補水。',
      coords: { x: 150, y: 54 } // Top
    },
    {
      id: 'pores',
      name: '毛孔淨化與角質代謝',
      score: 92,
      products: ['#21', '#01', '#03', '#08', '#07'],
      points: [
        '寶拉 2% 水楊酸 (#21) 每週二專門溶解下巴與鼻翼油脂角栓',
        'CHECK2CHECK 離子淨膚儀 (美容儀) 每週三搭配舒特膚潔膚水 (#03) 導出殘妝皮脂'
      ],
      gapAnalysis: '嚴格遵守寶拉水楊酸只塗下巴鼻翼、靜置 3-5 分鐘的鐵則，兩頰乾肌切勿沾染。',
      coords: { x: 236, y: 104 } // Top Right
    },
    {
      id: 'antiaging',
      name: '抗老撫紋與細胞激活',
      score: 88,
      products: ['#23', '#34', '#35', '#17'],
      points: [
        'Celimax A 醇微晶精華 (#23) 每週四固定刺激膠原新生與組織角質',
        '雅詩蘭黛特潤眼霜 (#34) 建立眼周安全隔離障壁，預防乾紋'
      ],
      gapAnalysis: 'A 醇使用量維持豌豆大小即可，切勿因急於求成增加頻率，維持每週四單次微晶抗老最安全。',
      coords: { x: 236, y: 196 } // Bottom Right
    },
    {
      id: 'chin',
      name: '下巴控油與抗炎舒緩',
      score: 94,
      products: ['#25', '#10', '#09', '#26', '#13'],
      points: [
        '小林製藥 EAUDE MUGE 抗痘水洗臉後第一道局部擦拭抗菌',
        '下巴粉刺區唯一指定薄擦 #25 MUJI 米糠乳液，嚴格避開厚重面霜'
      ],
      gapAnalysis: '若下巴冒出紅腫痘，保養最後一步以 Acclear 藥膏局部厚敷點塗，切勿用手擠壓。',
      coords: { x: 150, y: 244 } // Bottom
    },
    {
      id: 'sunscreen',
      name: '日間防曬與抗氧化提亮',
      score: 86,
      products: ['#38', '#39', '#15', '#27'],
      points: [
        'd’Alba 水潤粉光防曬霜打造偽素顏抗 UV 屏障',
        '曼秀雷敦玻尿酸防曬水感成膜，與底妝完全不搓泥互斥'
      ],
      gapAnalysis: '素顏日使用潤色防曬，底妝日務必等曼秀雷敦成膜 3 分鐘後再上植村秀妝前乳。',
      coords: { x: 64, y: 196 } // Bottom Left
    },
    {
      id: 'penetration',
      name: '儀器深層促滲與導出',
      score: 90,
      products: ['儀器', '#04', '#20', '#24'],
      points: [
        'CHECK2CHECK 離子超導儀正負離子雙向對衝突破角質阻抗',
        '週四深層導入低分子玻尿酸與 PDRN 胜肽安瓶'
      ],
      gapAnalysis: '導出時化妝棉需充分浸潤潔膚水，以防肌膚摩擦；微晶夜當晚不可使用離子儀。',
      coords: { x: 64, y: 104 } // Top Left
    }
  ];

  // 5 Internal Supplement Dimensions
  const internalDimensions: DimensionDetail[] = [
    {
      id: 'metabolism',
      name: '神經傳導與能量代謝',
      score: 95,
      products: ['健-04', '藥-02'],
      points: [
        'Thorne 基本活性 B 複合物提供高吸收率輔酶型態維生素',
        '信東癲鍵錠早晨早餐後定時維持神經傳導平穩'
      ],
      gapAnalysis: '處方藥吃完後務必嚴格設定鬧鐘間隔 60 分鐘再吃 Thorne B 群，杜絕腸道吸收競爭。',
      coords: { x: 150, y: 55 }
    },
    {
      id: 'brightening',
      name: '內源抗氧化與美白阻黑',
      score: 96,
      products: ['健-01', '健-02'],
      points: [
        '8VC 2200mg 維生素 C 粉高劑量抗壞血酸促進膠原合成',
        'BHK\'s 奢光錠圓酵母穀胱甘肽協同維生素 C 形成抗氧化循環'
      ],
      gapAnalysis: '奢光錠已徹底移至早晨隨餐服用，白天抗紫外線內源防禦，夜間零失眠風險。',
      coords: { x: 240, y: 120 }
    },
    {
      id: 'cellular',
      name: '心血管與脂溶性骨骼屏障',
      score: 92,
      products: ['健-03', '健-05'],
      points: [
        'Sports Research Omega-3 高純度深海魚油調節血脂與抗炎',
        'Kirkland 維生素 D3 彌補秋冬日照不足，調節神經免疫'
      ],
      gapAnalysis: '午餐或晚餐隨餐服用，食物中的天然油脂能大幅提高脂溶性 D3 與魚油吸收率 300%。',
      coords: { x: 205, y: 235 }
    },
    {
      id: 'intimate',
      name: '私密泌尿防禦修護',
      score: 90,
      products: ['健-06'],
      points: [
        'Webber Naturals 蔓越莓膠囊濃縮 A 型前花青素',
        '抑制外來致病菌附著於尿道黏膜上皮，強化女性私密保護'
      ],
      gapAnalysis: '隨午餐或晚餐搭配足量溫開水吞服，每日建議維持 1-2 粒。',
      coords: { x: 95, y: 235 }
    },
    {
      id: 'sleep',
      name: '夜間安眠與神經放鬆純淨度',
      score: 98,
      products: ['藥-03', '藥-04'],
      points: [
        '瑞安癲必停膜衣錠維持 GABA 濃度穩定',
        '易靜錠 (羅眠樂) 助眠平靜中樞神經，睡前 15-30 分鐘服下'
      ],
      gapAnalysis: '睡前腸胃嚴格禁止服用任何保健品（無B群、無C粉、無魚油），保持胃腸純淨無干擾。',
      coords: { x: 60, y: 120 }
    }
  ];

  const currentDimensions = activeTab === 'external' ? externalDimensions : internalDimensions;
  const overallMaturity = activeTab === 'external' ? 91 : 94;

  // Generate SVG polygon points
  const center = 150;
  const radarPoints = currentDimensions.map(d => `${d.coords.x},${d.coords.y}`).join(' ');

  return (
    <div className="space-y-6 pb-16">
      {/* 1. Header Banner (Matching image_4874a21d.png) */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Activity className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-extrabold text-stone-900 tracking-tight">
              全配方雷達圖分析 ＆ 潛在缺口洞察
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-3xl">
            透過多維度數值化模型，深度評估您的臉部 48 項編號產品 ＋ 6 款身體乳 ＋ 美容儀 ＋ 6 款保健品的覆蓋飽和度、屏障優勢與補強焦點。
          </p>
        </div>

        {/* Toggle Pills: 外用保養 vs 內服營養 */}
        <div className="inline-flex rounded-full bg-stone-100 p-1 border border-stone-200/60 self-start md:self-auto text-xs font-bold">
          <button
            onClick={() => {
              setActiveTab('external');
              setSelectedDimensionId(null);
            }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition cursor-pointer ${
              activeTab === 'external'
                ? 'bg-[#ff1e56] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <span>🧴 外用保養 (6大維度)</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('internal');
              setSelectedDimensionId(null);
            }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition cursor-pointer ${
              activeTab === 'internal'
                ? 'bg-[#ff1e56] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <span>💊 內服營養 (5大維度)</span>
          </button>
        </div>
      </div>

      {/* 2. Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Radar Chart Box */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-stone-400 block">
                {activeTab === 'external' ? '外用護膚屏障平衡' : '內服機能平衡指標'}
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-sm font-bold text-stone-800">整體覆蓋成熟度：</span>
                <span className="text-lg font-black text-[#ff1e56]">{overallMaturity}%</span>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              黃金防禦級
            </span>
          </div>

          {/* SVG Radar Chart (Accurate Hexagon matching image_4874a21d.png) */}
          <div className="relative w-full aspect-square max-w-[340px] mx-auto flex items-center justify-center py-2">
            <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
              {/* Background concentric reference webs (20%, 40%, 60%, 80%, 100%) */}
              {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, i) => {
                const r = 95 * scale;
                const points = currentDimensions.map((_, idx) => {
                  const angle = (Math.PI * 2 / currentDimensions.length) * idx - Math.PI / 2;
                  const px = center + r * Math.cos(angle);
                  const py = center + r * Math.sin(angle);
                  return `${px},${py}`;
                }).join(' ');

                return (
                  <polygon
                    key={i}
                    points={points}
                    fill="none"
                    stroke="#e7e5e4"
                    strokeWidth="1"
                    strokeDasharray={scale === 1.0 ? 'none' : '2 2'}
                  />
                );
              })}

              {/* Axis lines from center to outer points */}
              {currentDimensions.map((_, idx) => {
                const angle = (Math.PI * 2 / currentDimensions.length) * idx - Math.PI / 2;
                const px = center + 95 * Math.cos(angle);
                const py = center + 95 * Math.sin(angle);
                return (
                  <line
                    key={idx}
                    x1={center}
                    y1={center}
                    x2={px}
                    y2={py}
                    stroke="#e7e5e4"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Active Radar Value Polygon with soft coral glow */}
              <polygon
                points={radarPoints}
                fill="rgba(255, 30, 86, 0.12)"
                stroke="#ff1e56"
                strokeWidth="2.5"
                className="transition-all duration-700"
              />

              {/* Data points */}
              {currentDimensions.map((d) => {
                const isSelected = selectedDimensionId === d.id;
                return (
                  <g
                    key={d.id}
                    onClick={() => setSelectedDimensionId(isSelected ? null : d.id)}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={d.coords.x}
                      cy={d.coords.y}
                      r={isSelected ? 6 : 4}
                      fill="#ff1e56"
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="transition-all hover:scale-125"
                    />
                  </g>
                );
              })}

              {/* Labels around the perimeter */}
              {activeTab === 'external' ? (
                <>
                  <text x="150" y="22" textAnchor="middle" className="text-[10px] font-bold fill-stone-700">兩頰屏障修護與鎖水 (96%)</text>
                  <text x="250" y="98" textAnchor="start" className="text-[10px] font-bold fill-stone-700">毛孔淨化與角質代謝 (92%)</text>
                  <text x="250" y="210" textAnchor="start" className="text-[10px] font-bold fill-stone-700">抗老撫紋與細胞激活 (88%)</text>
                  <text x="150" y="278" textAnchor="middle" className="text-[10px] font-bold fill-stone-700">下巴控油與抗炎舒緩 (94%)</text>
                  <text x="50" y="210" textAnchor="end" className="text-[10px] font-bold fill-stone-700">日間防曬與抗氧化提亮 (86%)</text>
                  <text x="50" y="98" textAnchor="end" className="text-[10px] font-bold fill-stone-700">儀器深層促滲與導出 (90%)</text>
                </>
              ) : (
                <>
                  <text x="150" y="25" textAnchor="middle" className="text-[10px] font-bold fill-stone-700">神經傳導與能量代謝 (95%)</text>
                  <text x="250" y="118" textAnchor="start" className="text-[10px] font-bold fill-stone-700">內源抗氧阻黑 (96%)</text>
                  <text x="215" y="260" textAnchor="start" className="text-[10px] font-bold fill-stone-700">心血管與脂溶性吸收 (92%)</text>
                  <text x="85" y="260" textAnchor="end" className="text-[10px] font-bold fill-stone-700">私密泌尿防禦 (90%)</text>
                  <text x="50" y="118" textAnchor="end" className="text-[10px] font-bold fill-stone-700">夜間安眠純淨度 (98%)</text>
                </>
              )}
            </svg>
          </div>

          <div className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1">
            <Info className="w-3.5 h-3.5 text-stone-400" />
            <span>提示：點擊右側卡片或雷達圖節點，可即時聚焦該面向詳細分析。</span>
          </div>
        </div>

        {/* Right Column: Dimension Breakdown Cards List */}
        <div className="lg:col-span-7 space-y-3">
          {/* Top Info Bar */}
          <div className="flex items-center justify-between px-1 text-xs text-stone-500">
            <span className="flex items-center gap-1 font-medium">
              <span>💡 提示：點擊或滑鼠懸停左側雷達圖的任一軸線節點，可即時聚焦該面向。</span>
            </span>
            <span className="font-bold text-stone-700">共 {currentDimensions.length} 大維度</span>
          </div>

          {/* Cards List */}
          <div className="space-y-3">
            {currentDimensions.map((dim) => {
              const isSelected = selectedDimensionId === dim.id;

              return (
                <div
                  key={dim.id}
                  onClick={() => setSelectedDimensionId(isSelected ? null : dim.id)}
                  className={`bg-white rounded-2xl p-5 border transition-all cursor-pointer space-y-3 ${
                    isSelected
                      ? 'border-[#ff1e56] ring-2 ring-rose-100 shadow-md'
                      : 'border-stone-200/80 hover:border-stone-300 shadow-2xs'
                  }`}
                >
                  {/* Card Header: Title + Score Badge + Product Tag Pills */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-stone-900 text-sm">{dim.name}</h3>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                        成熟度 {dim.score}%
                      </span>
                    </div>

                    {/* Product Pills (#14, #30, #28...) */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {dim.products.map((p, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 hover:bg-stone-200 transition"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bullet points with Green Checkmarks */}
                  <div className="space-y-1.5 text-xs text-stone-700">
                    {dim.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sub-box: 缺口解析 */}
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/70 text-[11px] text-stone-600 leading-relaxed">
                    <span className="font-bold text-stone-800">缺口解析：</span>
                    {dim.gapAnalysis}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
