import React from 'react';
import { Palette, Droplets, Sparkles, AlertTriangle, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ProductItem } from '../types';
import { ALL_PRODUCTS } from '../data/amandaRoutineData';

interface MakeupCleansingViewProps {
  onSelectProduct: (p: ProductItem) => void;
}

export const MakeupCleansingView: React.FC<MakeupCleansingViewProps> = ({ onSelectProduct }) => {
  const makeupSteps = [
    {
      stepNum: 1,
      title: '眼下妝前打底',
      code: '#38',
      name: 'BOBBI BROWN 維他命完美眼霜',
      desc: '取米粒大小於眼下輕按推勻，等待 1 分鐘完全貼合成膜，阻絕後續遮瑕膏卡紋與結塊。',
      tip: '富含乳木果油與維他命複合物，是秋冬乾眼皮防卡粉關鍵神器。',
      productId: '38'
    },
    {
      stepNum: 2,
      title: '兩頰潤澤打底',
      code: '#34',
      name: 'BOBBI BROWN 維他命完美面霜（橘子霜）',
      desc: '塗抹於乾燥兩頰，撫平乾皮起屑打造完美平滑貼妝感，提升粉底服貼度。',
      alert: '⚠️ 分區提醒：下巴粉刺區嚴格避開橘子霜！改擦清爽的 #26-2 MUJI 米糠乳液預防悶痘',
      productId: '34'
    },
    {
      stepNum: 3,
      title: '透明高保濕防曬',
      code: '#40',
      name: '曼秀雷敦 水潤肌高濃度玻尿酸防曬精華',
      desc: '水感透明無粉感，為全臉均勻補水抗 UV，靜置 3~5 分鐘成膜後與後續彩妝極佳融合。',
      tip: '超微米水感防曬膜，與粉底液完全不搓泥互不打架。',
      productId: '40'
    },
    {
      stepNum: 4,
      title: '局部提亮校色',
      code: '妝前乳',
      name: '植村秀 無極限保濕妝前乳（紫色／膚色）',
      desc: '局部點塗於嘴角蠟黃暗沉處、下巴或眼下微暗處，修飾膚色不均後再上粉底。',
      tip: '紫色去黃提亮，膚色自然均勻，薄薄一層即可。',
      productId: '41'
    }
  ];

  const cleansingProducts = [
    {
      code: '#01',
      name: 'ilso 溫和粉刺溶解露',
      applied: '每週粉刺大掃除夜專用',
      desc: '濕敷/局部按摩下巴與鼻翼 10-15 分鐘，溫和融化固態硬化角栓，協同水楊酸打造無痛清粉刺組合。',
      id: '01'
    },
    {
      code: '#02',
      name: 'MUJI 無印良品 溫和卸妝油',
      applied: '奇數週全妝與功能夜主力',
      desc: '全妝日或功能夜（水楊酸、A醇、微針）的主力卸妝，乾手乾臉按摩，下巴加強打圈，充分乳化沖淨。',
      id: '02'
    },
    {
      code: '#03',
      name: 'DUO 麗優 卸妝膏',
      applied: '偶數週全妝與功能夜主力',
      desc: '固態膏體觸膚即融，能溫和溶出毛孔角栓，同時在洗卸過程中保留兩頰乾肌皮脂膜。',
      id: '03'
    },
    {
      code: '#04',
      name: 'Cetaphil 舒特膚 胜肽緊緻賦活潔膚水',
      applied: '週四搭配離子儀深層導出專用',
      desc: '每週四搭配 CHECK2CHECK 離子淨膚儀正離子模式導出殘妝髒污，溫和不刺激角質。',
      id: '04'
    },
    {
      code: '#05',
      name: 'Capsule Serum 維他命 C 去角質護理卸妝潔面凝膠',
      applied: '上班日極簡防曬素顏專用',
      desc: '週一與週五若只擦防曬素顏上班，以此洗卸合一凝膠溫和洗淨防曬，避免過度清潔洗傷屏障。',
      id: '05'
    },
    {
      code: '#06',
      name: 'Relove Nrf2 胺基酸潔面乳',
      applied: '奇數週早晚洗面主力潔顏',
      desc: '高純度胺基酸界面活性劑，深層潔淨且完全不緊繃，維持屏障天然皮脂膜保護屏障。',
      id: '06'
    },
    {
      code: '#07',
      name: 'innisfree 綠茶保濕胺基酸潔面乳',
      applied: '偶數週早晚洗面主力潔顏',
      desc: '綠茶抗氧化萃取結合溫和胺基酸泡泡，洗後保濕清爽不緊繃。',
      id: '07'
    },
    {
      code: '#08',
      name: 'SEXYLOOK 綠番茄奶油洗面乳',
      applied: '奇數週日局部洗下巴控油專用',
      desc: '專利綠番茄萃取，針對下巴毛孔出油粗大處局部清潔收斂，兩頰乾肌請避開。',
      id: '08'
    },
    {
      code: '#09',
      name: 'Kanebo suisai 淨透酵素洗顏粉（藍色）',
      applied: '偶數週日局部洗下巴去角栓',
      desc: '取半顆粉末局部按摩下巴與鼻翼，蛋白酶溫和瓦解陳年角栓，嚴禁全臉粗魯打圈。',
      id: '09'
    }
  ];

  const handleProductDetail = (id: string) => {
    const found = ALL_PRODUCTS.find(p => p.id === id);
    if (found) {
      onSelectProduct(found);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Makeup Prep Section (Matching Screenshot) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
              完整全妝保濕與妝前打底步驟（防起屑減法版）
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              前導減法避免搓泥起屑，兩頰加強貼妝打底、眼下防卡紋、下巴清爽控油
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {makeupSteps.map(step => (
            <div
              key={step.stepNum}
              className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200 hover:border-stone-300 transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-stone-200 text-stone-800">
                    步驟 {step.stepNum}：{step.title}
                  </span>
                  <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                    {step.code}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-stone-900">{step.name}</h3>

                <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>

                {step.alert && (
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium">
                    {step.alert}
                  </div>
                )}

                {step.tip && (
                  <p className="text-[11px] text-stone-500 italic">💡 {step.tip}</p>
                )}
              </div>

              <button
                onClick={() => handleProductDetail(step.productId)}
                className="text-xs text-rose-600 hover:text-rose-800 font-medium flex items-center gap-1 pt-2 transition cursor-pointer self-start"
              >
                <span>查看產品細節</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 2. 8 Cleansers Pairing Guide (Matching Screenshot) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center">
            <Droplets className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
              8 款卸洗與毛孔清潔品項情境配對指南
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              依當日妝容厚度與夜間功能主題（酸類/A醇/微針）精準選用，預防過度清潔或殘留
            </p>
          </div>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cleansingProducts.map(item => (
            <div
              key={item.code}
              className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 transition-all space-y-3 flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-stone-900 text-white">
                      {item.code}
                    </span>
                    <h3 className="text-sm font-bold text-stone-900">{item.name}</h3>
                  </div>
                  <button
                    onClick={() => handleProductDetail(item.id)}
                    className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-0.5 cursor-pointer"
                  >
                    <span>品項詳情</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-lg inline-block">
                  適用：【{item.applied}】
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
