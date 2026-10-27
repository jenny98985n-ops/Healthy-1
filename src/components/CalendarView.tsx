import React, { useState } from 'react';
import { FOUR_WEEK_CALENDAR, DAY_ROUTINES, WEEKDAY_INFO, ALL_PRODUCTS } from '../data/amandaRoutineData';
import { DayOfWeek, WeekType, ProductItem } from '../types';
import {
  Calendar,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  X,
  Clock,
  Droplets,
  ArrowRight,
  Sun,
  Moon,
  Pill,
  ArrowLeft,
  ChevronDown,
  Info
} from 'lucide-react';

interface CalendarViewProps {
  currentDay: DayOfWeek;
  onSelectDayRoutine: (day: DayOfWeek, weekType: WeekType) => void;
}

interface StepDetailWithTechnique {
  categoryLabel: string;
  categoryPillColor?: string;
  isHighlighted?: boolean;
  productCode: string;
  productName: string;
  appliedRole: string;
  targetZone: string;
  amount: string;
  technique: string;
  caution?: string;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ currentDay, onSelectDayRoutine }) => {
  const [activeModalDayNum, setActiveModalDayNum] = useState<number | null>(null);
  const [sopSubTab, setSopSubTab] = useState<'morning' | 'night' | 'rx'>('night');
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  const activeDayData = activeModalDayNum ? FOUR_WEEK_CALENDAR[activeModalDayNum - 1] : null;

  // Split into 4 weeks
  const week1 = FOUR_WEEK_CALENDAR.slice(0, 7);
  const week2 = FOUR_WEEK_CALENDAR.slice(7, 14);
  const week3 = FOUR_WEEK_CALENDAR.slice(14, 21);
  const week4 = FOUR_WEEK_CALENDAR.slice(21, 28);

  const weeks = [
    {
      num: 1,
      cycleTitle: '第 1 週：基底穩固與淨膚啟動 (奇數週・週末 suisai 酵素代謝 & AZ100 痘痘藍膜)',
      description: '早晨使用 BOH 噴霧 + ANUA 桃子精華；週三【⚡ 離子儀(導出) + ANUA提亮】；週四【A醇微晶】；週六【suisai 酵素洗顏粉】；週日【AZ100 藍膜 + Dr. Reju-All 修復霜】。',
      isOdd: true,
      days: week1
    },
    {
      num: 2,
      cycleTitle: '第 2 週：水光激活與深層注水 (偶數週・週六離子儀導入 & 週日 保濕面膜)',
      description: '早晨使用 Ongredients 噴霧 + Medicube 安瓶 + 黛珂 AQ 乳；週三【⚡ 離子儀(導出) + 保濕面膜深層注水】；週四【A醇微晶】；週五【菸鹼醯胺下巴控油】；週六【⚡ 離子儀(導入) + Medicube安瓶】；週日【一般日常保濕面膜日】。',
      isOdd: false,
      days: week2
    },
    {
      num: 3,
      cycleTitle: '第 3 週：高階煥膚與膠原新生 (奇數週・加強微晶針與PDRN修護)',
      description: '延續奇數週節奏，深化下巴水楊酸去角質與 VT Reedle 300 微晶針激活，眼周搭配綠橘子維他命C淡斑眼膜。',
      isOdd: true,
      days: week3
    },
    {
      num: 4,
      cycleTitle: '第 4 週：全效抗老與極致屏障 (偶數週・雙重淡斑與鎖水封層)',
      description: '結算整月保養成果，強化兩頰冰河霜與妮維雅 630 淡斑晚霜，下巴嚴格控油維持零閉口。',
      isOdd: false,
      days: week4
    }
  ];

  const getThemeTagColor = (themeType: string) => {
    if (themeType.includes('水楊酸')) return 'bg-amber-100 text-amber-800 border-amber-200';
    if (themeType.includes('微晶') || themeType.includes('A醇')) return 'bg-purple-100 text-purple-800 border-purple-200';
    if (themeType.includes('面膜') || themeType.includes('藍膜')) return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    if (themeType.includes('導出') || themeType.includes('導入')) return 'bg-cyan-100 text-cyan-800 border-cyan-200';
    return 'bg-emerald-100 text-emerald-800 border-emerald-200';
  };

  const handlePrevDay = () => {
    if (activeModalDayNum && activeModalDayNum > 1) {
      setActiveModalDayNum(activeModalDayNum - 1);
      setExpandedCardIndex(null);
    }
  };

  const handleNextDay = () => {
    if (activeModalDayNum && activeModalDayNum < 28) {
      setActiveModalDayNum(activeModalDayNum + 1);
      setExpandedCardIndex(null);
    }
  };

  // Morning detailed steps with products & techniques
  const getMorningStepsWithTechnique = (isOdd: boolean) => [
    {
      step: 1,
      title: '晨間清潔',
      products: isOdd ? ['#06 Relove 潔面乳'] : ['#07 綠茶潔面乳'],
      appliedRole: '溫和洗淨多餘皮脂・保留天然皮脂膜',
      targetZone: '全臉 / T字出油處',
      amount: '黃豆大小或清水',
      technique: '【洗卸手法】：雙手先加溫水於掌心搓出豐富綿密泡沫，以指腹輕柔在 T 字與下巴畫圈 15-20 秒，兩頰輕輕帶過即可，勿用力搓揉，隨後以溫涼水潑洗沖淨並以純棉巾輕壓吸乾。',
      caution: '兩頰乾燥時晨間僅需清水洗臉，避免過度清潔帶走天然屏障脂質。'
    },
    {
      step: 2,
      title: '前導保濕與美白提亮',
      products: ['#15 黛珂小紫瓶', '#20 黛珂極光精粹 1.8X'],
      appliedRole: '微脂囊開啟通道 ＋ 傳明酸提亮抗暗沉',
      targetZone: '全臉適用',
      amount: '小紫瓶 1~2 泵 ＋ 極光精粹 1 泵',
      technique: '【手溫按拍手法】：按壓小紫瓶於掌心，雙手合十搓揉溫熱，由內向外以「手掌按壓覆蓋全臉與眼下」（嚴格用掌心手溫按拍，絕對不可用化妝棉摩擦擦拭！）；隨後取極光精粹同樣以手溫輕輕按壓全臉，加強嘴角與眼周暗沉處。',
      caution: '手溫能活化微脂囊囊體，提升吸收滲透率 300%。'
    },
    {
      step: 3,
      title: '晨間噴霧交錯水相補水',
      products: [isOdd ? '#18 BOH 維他命B5積雪草噴霧' : '#19 Ongredients 屏障水光噴霧'],
      appliedRole: '水相舒緩屏障補水・打造透亮光澤',
      targetZone: '全臉均勻噴灑',
      amount: '全臉均勻按壓 3-4 次',
      technique: '【噴霧與輕拍手法】：瓶身保持距離臉部約 15-20 公分，閉上雙眼仰頭環繞噴灑 3-4 次，讓微細水霧均勻降落於全臉，隨後以乾淨雙手指腹由下往上輕彈拍打至水分完全被角質吸收。'
    },
    {
      step: 4,
      title: '晨間精華分流（素顏日 vs 底妝日）',
      products: ['#21 Torriden 玻尿酸', '#27 ANUA 桃子精華'],
      appliedRole: '5D 微分子透明質酸注水 ＋ 菸鹼醯胺調控皮脂',
      targetZone: '全臉適用',
      amount: '半滴管',
      technique: '【指腹滑推手法】：素顏日取半滴管均勻點塗於額頭、兩頰與下巴，以無名指與中指指腹順著肌膚紋理由內向外延展推勻；若為精緻底妝日，為防搓泥起屑可省略此步或僅薄塗 1 滴。'
    },
    {
      step: 5,
      title: '眼周防護與晨間眼霜',
      products: ['#37 BRINGGREEN 檸檬眼霜', '#38 BOBBI BROWN 維他命眼霜'],
      appliedRole: '素顏提亮眼周暗沉 vs 妝前眼下撫紋防卡粉',
      targetZone: '眼下至眼尾骨處',
      amount: '兩眼各取米粒大小',
      technique: '【無名指輕點點壓手法】：取米粒大小於無名指腹，雙手無名指對搓勻開，以「點狀輕壓」由眼頭順著眼眶骨按至眼尾，絕不可來回大力拉扯眼皮；底妝日擦完 BOBBI BROWN 眼霜後需「靜置 1 分鐘完全貼合成膜」，再上遮瑕膏。',
      caution: '不可用力拉扯眼皮，避免生成暫時性假性乾紋。'
    },
    {
      step: 6,
      title: '分區晨間乳液與面霜（兩頰潤澤 vs 下巴清爽）',
      products: ['#27-2 靈芝水凝乳', '#26-2 MUJI 米糠乳', '#34 BOBBI BROWN 橘子霜'],
      appliedRole: '兩頰水潤抗起屑 ＋ 下巴清爽控油防痘',
      targetZone: '分區精準塗抹',
      amount: '兩頰五元硬幣大 / 下巴僅 1 滴',
      technique: '【分區極致分流手法】：素顏日兩頰擦靈芝乳液，底妝日兩頰取 BOBBI BROWN 橘子霜以掌心由內向外按壓撫平角質起屑；下巴出油區【唯一指定擦 #26-2 MUJI 米糠乳液】，嚴格避開橘子霜與厚重面霜，避免毛孔悶熱冒痘！',
      caution: '⚠️ 鐵則：下巴出油粉刺區嚴禁塗抹 BOBBI BROWN 橘子霜！'
    },
    {
      step: 7,
      title: '日間高規防曬與妝前校色',
      products: ['#39 d’Alba 水潤粉光防曬', '#40 曼秀雷敦玻尿酸防曬', '#41 植村秀妝前乳'],
      appliedRole: '素顏自然提亮 vs 底妝日透明抗 UV 成膜',
      targetZone: '全臉與頸部',
      amount: '十元硬幣大小（約 2 顆黃豆大）',
      technique: '【順向推勻與成膜等待手法】：素顏日均勻推開 d’Alba 粉光防曬提亮氣色；全妝日將曼秀雷敦透明防曬分區點在全臉，以手掌單向順推均勻塗抹，【務必靜置 3-5 分鐘等待高分子膜完全乾燥成膜】，成膜後再以指腹局部點拍植村秀紫色/膚色妝前乳去黃校色。',
      caution: '防曬未完全成膜前切勿立即上粉底，否則必生起屑與結塊！'
    }
  ];

  // Night Detailed Products and Hand Techniques (Matching image_05097494.png)
  const getNightStepDetails = (day: DayOfWeek, isOdd: boolean): {
    strategyText: string;
    items: StepDetailWithTechnique[];
  } => {
    if (day === 'tue') {
      // Tuesday: Paula's Choice BHA Night (Exact match to Day 9 in image_05097494.png)
      return {
        strategyText: '下巴與鼻翼點塗寶拉水楊酸（#22，靜置3-5分鐘），可搭 ilso 溶解露粉刺大掃除，兩頰嚴禁碰酸！',
        items: [
          {
            categoryLabel: '洗卸',
            productCode: isOdd ? '#02' : '#03',
            productName: isOdd ? 'MUJI 無印良品 溫和卸妝油' : 'DUO 麗優 溫和卸妝膏',
            appliedRole: '全妝日與功能夜主力卸妝・適用部位：全臉',
            targetZone: '全臉適用',
            amount: '按壓 2-3 泵 / 1 勺膏體',
            technique: '【乾手乾臉乳化手法】：保持手部與臉部完全乾燥，取卸妝油/膏均勻塗抹全臉，以指腹由內向外螺旋畫圈按摩 1 分鐘，下巴粉刺與鼻翼處加強打圈 30 秒溶出角栓；隨後沾少量溫水在臉上打圈「乳化至乳白色」，最後以大量流動溫水徹底沖淨。'
          },
          {
            categoryLabel: '洗卸',
            productCode: isOdd ? '#06' : '#07',
            productName: isOdd ? 'Relove Nrf2 胺基酸潔面乳' : 'innisfree / 綠茶系列 綠茶保濕胺基酸潔面乳',
            appliedRole: '早晚日常主力潔面乳・適用部位：全臉',
            targetZone: '全臉適用',
            amount: '黃豆大小',
            technique: '【起泡打圈潔面手法】：取黃豆大小加水搓揉出豐盈柔滑泡泡，以泡沫為介質輕撫全臉肌膚，下巴油脂處以指腹輕輕打圈清潔，洗淨彩妝與乳化殘留物，純棉柔巾輕柔按壓吸乾水分。'
          },
          {
            categoryLabel: '洗卸',
            productCode: '#01',
            productName: 'ilso 溫和粉刺溶解露',
            appliedRole: '每週粉刺大掃除夜專用・適用部位：下巴',
            targetZone: '下巴與鼻翼專用',
            amount: '浸濕 1 片化妝棉',
            technique: '【濕敷軟化角栓手法】：將 ilso 溶解露倒滿薄款化妝棉，緊密服貼於下巴閉口粉刺與鼻翼處濕敷 10-15 分鐘，溫和軟化固化硬皮脂；取下後可用雙頭棉花棒由下往上輕推帶出浮出的頑固角栓，隨後以溫水洗淨。'
          },
          {
            categoryLabel: '精華液',
            productCode: '#22',
            productName: 'Paula’s Choice 寶拉珍選 寶拉 2% 水楊酸精華液',
            appliedRole: '每週二固定下巴鼻翼粉刺煥膚精華・適用部位：下巴',
            targetZone: '【僅下巴/鼻翼裸肌使用】',
            amount: '2-3 滴',
            technique: '【裸肌點塗靜置 3-5 分鐘手法】：臉部徹底擦乾後「裸肌第一步」使用！取 2-3 滴僅點塗於下巴與鼻翼毛孔，以指腹輕輕推勻吸收，【務必靜置倒數 3-5 分鐘】，讓脂溶性水楊酸充分穿透皮脂腺溶解毛孔角質。兩頰乾肌切勿沾染！',
            caution: '⚠️ 鐵則：兩頰乾荒敏感區嚴禁碰水楊酸！靜置滿 3 分鐘後才可接續保濕品。'
          },
          {
            categoryLabel: '精華液',
            isHighlighted: true,
            productCode: '#15',
            productName: 'COSME DECORTE 黛珂 小紫瓶超微導精粹',
            appliedRole: '洗臉後第一步前導保濕主力・適用部位：全臉',
            targetZone: '全臉手溫按壓',
            amount: '按壓 2-3 下',
            technique: '【掌心手溫覆蓋按壓手法】：水楊酸靜置完成後，取 2-3 泵小紫瓶於手心，雙手合十搓熱，以整個手掌緊貼臉部輕柔按拍全臉，微脂囊體立即釋放水分開啟肌底吸收管道。'
          },
          {
            categoryLabel: '化妝水/噴霧',
            productCode: isOdd ? '#16' : '#17',
            productName: isOdd ? 'ORIGINS 品木宣言 靈芝水' : 'MUJI 無印良品 化妝水（清爽型 / Light）',
            appliedRole: isOdd ? '奇數週全臉舒緩補水・適用部位：全臉' : '偶數週全臉補水主力・適用部位：全臉',
            targetZone: '全臉拍水',
            amount: '十元硬幣大小',
            technique: '【雙掌輕拍吸收手法】：倒於掌心，雙手輕拍全臉，為剛經過酸類代謝的下巴與兩頰補充充沛水分子，舒緩可能出現的微繃感。'
          },
          {
            categoryLabel: '乳液/面霜',
            productCode: isOdd ? '#29-2' : '#32',
            productName: isOdd ? 'S.NATURE 水庫角鯊烷保濕霜' : 'Kiehl’s 契爾氏 冰河醣蛋白保濕霜',
            appliedRole: '兩頰夜間深層鎖水面霜・適用部位：兩頰',
            targetZone: '【僅塗抹兩頰乾燥區】',
            amount: '五元硬幣大小',
            technique: '【掌心溫熱厚敷封層手法】：取適量於指腹搓熱乳化，手掌貼合乾燥兩頰由內向外按壓厚抹，加強細胞間脂質修護，徹夜鎖住水分抵抗乾冷。',
            caution: '嚴禁塗抹於下巴出油處，避免滋潤度過高生成閉口。'
          },
          {
            categoryLabel: '乳液/面霜',
            productCode: '#26-2',
            productName: 'MUJI 無印良品 米糠發酵乳液',
            appliedRole: '下巴粉刺區唯一指定清爽乳液・適用部位：下巴',
            targetZone: '【僅下巴粉刺區薄擦】',
            amount: '僅需 1 滴',
            technique: '【指腹單層薄擦手法】：下巴唯一指定乳液！取 1 滴於食指腹，在水楊酸護理後的下巴薄薄抹勻一層即可，保持毛孔透氣與微生態平衡。'
          }
        ]
      };
    } else if (day === 'wed') {
      // Wednesday: VT Reedle Shot 300 Night
      return {
        strategyText: '洗臉徹底擦乾後乾壓 VT Reedle 300 微針精華，當晚嚴禁使用小紫瓶與 AQ 乳，接續 PDRN 安瓶與修復霜！',
        items: [
          {
            categoryLabel: '洗卸',
            productCode: isOdd ? '#02' : '#03',
            productName: isOdd ? 'MUJI 溫和卸妝油' : 'DUO 麗優 卸妝膏',
            appliedRole: '功能夜主力深層洗卸・適用部位：全臉',
            targetZone: '全臉',
            amount: '2 泵 / 1 勺',
            technique: '【乾手乾臉乳化手法】：溫和卸除全天彩妝與多餘皮脂，加水充分乳化後沖淨，徹底擦乾水分。'
          },
          {
            categoryLabel: '洗卸',
            productCode: isOdd ? '#06' : '#07',
            productName: isOdd ? 'Relove 胺基酸潔面乳' : '綠茶胺基酸潔面乳',
            appliedRole: '溫和洗臉・適用部位：全臉',
            targetZone: '全臉',
            amount: '黃豆大小',
            technique: '【綿密泡泡潔面手法】：溫水搓出細緻泡泡洗淨，用乾淨毛巾輕柔按乾水分，保持面部徹底乾爽。'
          },
          {
            categoryLabel: '精華液',
            isHighlighted: true,
            productCode: '#23',
            productName: 'VT Reedle Shot 300 微晶微針精華',
            appliedRole: '物理微針開啟吸收通道・適用部位：全臉',
            targetZone: '【裸肌全臉垂直按壓】',
            amount: '1-2 泵',
            technique: '【垂直乾壓微針手法】：臉部擦乾後第一步使用！取 1-2 泵於手指，以「由內向外垂直按壓」全臉，微刺感屬微米晶針正常作用。切忌來回用力揉搓摩擦！嚴格避開眼周、嘴唇與下巴紅腫發炎痘痘。',
            caution: '⚠️ 鐵則：微晶夜當晚嚴禁擦小紫瓶與 AQ 柔膚乳，避免油脂阻滯微針物理通道！'
          },
          {
            categoryLabel: '精華液',
            productCode: '#25',
            productName: 'Medicube PDRN 粉紅胜肽修護安瓶',
            appliedRole: '微針微通道開啟後深層修護・適用部位：全臉',
            targetZone: '全臉均勻塗抹',
            amount: '一整滴管',
            technique: '【順向延展吸附手法】：趁微針微通道開啟黃金期，立即將 PDRN 安瓶推勻全臉，指腹輕拍促進三文魚胜肽直達角質基底層。'
          },
          {
            categoryLabel: '乳液/面霜',
            productCode: isOdd ? '#30' : '#33',
            productName: isOdd ? 'Dr. Reju-All PDRN 高效修復霜' : 'NIVEA 妮維雅 630 雙效淡斑修護晚霜',
            appliedRole: isOdd ? '微針後兩頰急速退紅厚封層' : '利用微針通道加乘兩頰淡斑',
            targetZone: '兩頰專用',
            amount: '五元硬幣大小',
            technique: '【厚敷鎮靜封層手法】：奇數週取修復霜厚厚塗抹於兩頰泛紅處退紅；偶數週薄擦妮維雅 630 於兩頰斑點處均勻膚色，下巴避開。'
          },
          {
            categoryLabel: '乳液/面霜',
            productCode: '#26-2',
            productName: 'MUJI 無印良品 米糠發酵乳液',
            appliedRole: '下巴唯一清爽控油乳液・適用部位：下巴',
            targetZone: '下巴薄擦',
            amount: '1 滴',
            technique: '【指腹輕滑手法】：下巴薄擦一層米糠乳液保濕。'
          }
        ]
      };
    } else if (day === 'fri') {
      // Friday: Celimax Retinol Night
      return {
        strategyText: '小紫瓶 ➔ 化妝水打底（當晚停用 #28 AQ乳防阻礙）➔ 先擦眼霜隔離眼周 ➔ 全臉豌豆大 A 醇 ➔ 面霜溫和封層！',
        items: [
          {
            categoryLabel: '洗卸',
            productCode: '#05',
            productName: 'Capsule Serum 維C去角質卸妝凝膠 ➔ 潔面乳',
            appliedRole: '素顏防曬溫和洗卸・適用部位：全臉',
            targetZone: '全臉',
            amount: '適量',
            technique: '【輕揉溫水沖淨手法】：凝膠遇水乳化帶走日間防曬與氧化皮脂，維持肌膚角質屏障完整。'
          },
          {
            categoryLabel: '精華液',
            productCode: '#15',
            productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
            appliedRole: '微脂囊打底緩衝・適用部位：全臉',
            targetZone: '全臉按壓',
            amount: '2 泵',
            technique: '【手溫輕按手法】：按壓 2 泵手溫包覆全臉，為後續高活性 A 醇建立溫和保濕緩衝層。'
          },
          {
            categoryLabel: '化妝水/噴霧',
            productCode: isOdd ? '#16' : '#17',
            productName: isOdd ? 'ORIGINS 靈芝水' : 'MUJI 化妝水 清爽型',
            appliedRole: '水相打底保濕・當晚停用 AQ 乳液',
            targetZone: '全臉輕拍',
            amount: '適量',
            technique: '【輕拍水相手法】：輕拍化妝水補足水分。【注意：當晚停用 #28 AQ 乳液，避免過多親脂油脂形成阻隔層干擾 A 醇吸收】。'
          },
          {
            categoryLabel: '眼霜',
            productCode: isOdd ? '#35' : '#36',
            productName: isOdd ? '雅詩蘭黛 特潤修護亮眼霜' : '巴黎萊雅 紫熨斗 MAX 眼霜',
            appliedRole: '眼周安全隔離防護障壁・預防 A 醇擴散',
            targetZone: '【擦 A 醇前優先塗好眼周】',
            amount: '各取米粒大小',
            technique: '【環形點壓隔離手法】：擦 A 醇前「務必先將眼霜塗好眼周」，建立滋潤安全屏障，防止 A 醇微晶擴散刺激眼皮。'
          },
          {
            categoryLabel: '精華液',
            isHighlighted: true,
            productCode: '#24',
            productName: 'Celimax 唯美緻 A 醇微晶精華',
            appliedRole: '真皮膠原刺激與撫紋抗老核心・全臉避開眼唇',
            targetZone: '全臉（避開眼周與發炎痘）',
            amount: '【僅取一顆豌豆大小】',
            technique: '【指腹均勻按壓手法】：僅取豌豆大小點於額頭、兩頰與下巴無痘區，以指腹均勻輕柔按壓延展，切勿貪多！避開眼周與發炎紅腫痘痘。',
            caution: '⚠️ 鐵則：嚴格維持豌豆大小，建立肌膚耐受性，切勿同晚疊擦水楊酸或微針！'
          },
          {
            categoryLabel: '乳液/面霜',
            productCode: isOdd ? '#29-2' : '#32',
            productName: isOdd ? 'S.NATURE 水庫角鯊烷保濕霜' : 'Kiehl’s 冰河醣蛋白保濕霜',
            appliedRole: 'A 醇後溫和全面封層鎖水・舒緩防脫皮',
            targetZone: '全臉溫和包覆',
            amount: '五元硬幣大小',
            technique: '【掌心溫和包覆手法】：取面霜於掌心搓勻，手溫輕柔覆蓋全臉，修護表皮角質屏障，降低 A 醇可能的乾燥起屑。'
          }
        ]
      };
    } else {
      // General Routine / Thursday / Weekend (Monday, Thursday, Saturday, Sunday)
      return {
        strategyText: '落實黛珂「先乳後水」專利通道：小紫瓶 ➔ AQ煥妍柔膚乳 (僅抹兩頰軟化角質) ➔ 拍水補水 ➔ 分區鎖水封層！',
        items: [
          {
            categoryLabel: '洗卸',
            productCode: isOdd ? '#02' : '#03',
            productName: isOdd ? 'MUJI 溫和卸妝油 ➔ Relove 潔面乳' : 'DUO 卸妝膏 ➔ 綠茶潔面乳',
            appliedRole: '晚間清潔潔顏淨透毛孔・適用部位：全臉',
            targetZone: '全臉',
            amount: '適量',
            technique: '【乾手按摩溫水沖淨手法】：卸除全日殘妝與戶外髒污，以胺基酸洗面乳洗淨，純棉巾吸乾水分。'
          },
          {
            categoryLabel: '精華液',
            isHighlighted: true,
            productCode: '#15',
            productName: 'COSME DECORTE 黛珂 小紫瓶超微導精粹',
            appliedRole: '洗臉後第一道前導通道開啟・適用部位：全臉',
            targetZone: '全臉手溫按壓',
            amount: '按壓 2-3 泵',
            technique: '【掌心手溫覆蓋手法】：洗臉後立即以手心溫熱覆蓋全臉，微脂囊開啟角質細胞間隙通道。'
          },
          {
            categoryLabel: '乳液/面霜',
            isHighlighted: true,
            productCode: '#28',
            productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
            appliedRole: '【先乳後水關鍵樞紐】軟化硬化角質・適用部位：僅兩頰',
            targetZone: '【僅塗抹兩頰乾燥區，嚴禁下巴！】',
            amount: '按壓 1-2 泵',
            technique: '【化妝棉擦拭或掌心軟化手法】：取 1-2 泵於化妝棉或手心，溫柔由內向外按壓塗抹於兩頰乾燥處軟化硬化角質層；下巴出油區請嚴格避開！',
            caution: '⚠️ 鐵則：AQ 柔膚乳專利先乳後水僅塗兩頰，嚴禁塗抹下巴避免致痘。'
          },
          {
            categoryLabel: '化妝水/噴霧',
            productCode: isOdd ? '#16' : '#17',
            productName: isOdd ? 'ORIGINS 品木宣言 靈芝水' : 'MUJI 化妝水 清爽型',
            appliedRole: '接續 AQ 乳液後的水相大補水・適用部位：全臉',
            targetZone: '全臉輕拍',
            amount: '十元硬幣大小',
            technique: '【掌心拍拭按壓手法】：接續在 AQ 乳液之後全臉輕拍，此時軟化後的角質吸收水分子能力提升 3 倍。'
          },
          {
            categoryLabel: '精華液',
            productCode: isOdd ? '#20 ＋ #21' : '#20 ＋ #26',
            productName: isOdd ? '黛珂極光精粹 ＋ Torriden 玻尿酸' : '黛珂極光精粹 ＋ All-in-One 全效精華',
            appliedRole: '水性美白抗暗沉與深層補水精華・全臉吸收',
            targetZone: '全臉適用',
            amount: '各按壓 1 泵',
            technique: '【指腹平滑延展手法】：由中央往外側輕輕塗勻全臉，撫平秋冬乾燥暗黃氣色。'
          },
          {
            categoryLabel: '眼霜',
            productCode: isOdd ? '#35' : '#36',
            productName: isOdd ? '雅詩蘭黛 特潤全能亮眼霜' : '巴黎萊雅 紫熨斗 MAX 眼霜',
            appliedRole: '夜間深層撫平眼下細紋與緊緻眼袋',
            targetZone: '眼周專用',
            amount: '米粒大小',
            technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨，避免大力拉扯眼皮。'
          },
          {
            categoryLabel: '乳液/面霜',
            productCode: isOdd ? '#29-2' : '#32',
            productName: isOdd ? 'S.NATURE 水庫角鯊烷保濕霜' : 'Kiehl’s 冰河醣蛋白保濕霜',
            appliedRole: '兩頰高保濕屏障修護夜霜・深層鎖水',
            targetZone: '兩頰專用',
            amount: '五元硬幣大小',
            technique: '【手掌溫熱按壓封層手法】：厚塗於兩頰乾燥起屑處，牢牢鎖住水分。'
          },
          {
            categoryLabel: '乳液/面霜',
            productCode: '#26-2',
            productName: 'MUJI 無印良品 米糠發酵乳液',
            appliedRole: '下巴唯一指定清爽水感乳液・避開厚霜',
            targetZone: '下巴薄擦',
            amount: '1 滴',
            technique: '【單層薄擦手法】：下巴僅薄擦 1 滴米糠乳液，清爽預防粉刺閉口。'
          }
        ]
      };
    }
  };

  const currentNightDetails = activeDayData
    ? getNightStepDetails(activeDayData.dayOfWeek, activeDayData.isOddWeek)
    : null;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#ff1e56]" />
            <h2 className="text-xl font-extrabold text-stone-900">4 週月曆全景排程總覽</h2>
          </div>
          <p className="text-xs text-stone-500 mt-1">
            28 天科學分子微循環：奇數週著重「角質代謝與微晶激活」，偶數週聚焦「深層注水與淡斑修護」。
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-xs flex-wrap">
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
            💧 類型 A・溫和修護
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-medium">
            🧪 類型 B・水楊酸
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-medium">
            🌙 類型 C・A醇微晶
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
            🌿 類型 D・深度面膜
          </span>
        </div>
      </div>

      {/* 4 Weeks Iteration */}
      <div className="space-y-8">
        {weeks.map((week) => (
          <div key={week.num} className="space-y-3">
            {/* Week Header */}
            <div className="bg-stone-50/80 rounded-2xl p-4 border border-stone-200/80 space-y-1">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${week.isOdd ? 'bg-indigo-500' : 'bg-emerald-500'}`} />
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">{week.cycleTitle}</h3>
              </div>
              <p className="text-xs text-stone-600 pl-4">{week.description}</p>
            </div>

            {/* 7 Days Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {week.days.map((day) => {
                const isTodayCard = day.dayNum === 9; // October 27 is Day 9 in calendar
                return (
                  <div
                    key={day.dayNum}
                    className={`rounded-2xl p-3.5 border transition-all flex flex-col justify-between ${
                      isTodayCard
                        ? 'bg-rose-50/40 border-rose-300 ring-2 ring-rose-400/30 shadow-md'
                        : 'bg-white border-stone-200 hover:border-stone-300 shadow-2xs'
                    }`}
                  >
                    <div>
                      {/* Top Bar: DAY # + Today Tag */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-black text-stone-800">DAY {day.dayNum}</span>
                          {isTodayCard && (
                            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-[#ff1e56] text-white animate-pulse">
                              今日
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-medium text-stone-400">
                          {WEEKDAY_INFO[day.dayOfWeek].short}
                        </span>
                      </div>

                      {/* Theme Tag */}
                      <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-md border mb-2 ${getThemeTagColor(day.themeType)}`}>
                        {day.themeType}
                      </span>

                      {/* Title */}
                      <h4 className="text-xs font-bold text-stone-900 line-clamp-1 mb-2">
                        {day.title}
                      </h4>

                      {/* Brief Steps */}
                      <div className="space-y-1.5 text-[11px] text-stone-600 border-t border-stone-100 pt-2 mb-3">
                        <p className="line-clamp-2">
                          <span className="text-amber-600 font-medium">☀️ 早：</span>
                          {day.amSummary}
                        </p>
                        <p className="line-clamp-2">
                          <span className="text-indigo-600 font-medium">🌙 晚：</span>
                          {day.pmSummary}
                        </p>
                      </div>
                    </div>

                    {/* View SOP Button */}
                    <button
                      onClick={() => {
                        setActiveModalDayNum(day.dayNum);
                        setSopSubTab('night');
                        setExpandedCardIndex(null);
                      }}
                      className="w-full text-center text-xs font-medium text-stone-600 hover:text-stone-950 hover:bg-stone-50 py-1.5 rounded-lg border border-stone-200/80 transition flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>查看完整 SOP</span>
                      <ChevronRight className="w-3 h-3 text-stone-400" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* High-Fidelity Day SOP Modal with Explicit Products and Hand Techniques (Matching image_05097494.png) */}
      {activeDayData && currentNightDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-stone-200">
            {/* 1. Modal Dark Top Bar (Matching image_05097494.png) */}
            <div className="bg-[#1c1917] text-white p-5 sm:p-6 flex items-start justify-between gap-3">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-[#ff1e56] text-white shadow-xs">
                    DAY {activeDayData.dayNum}
                  </span>
                  <span className="text-xs font-bold text-stone-300">
                    第 {activeDayData.weekNum} 週・{activeDayData.isOddWeek ? '奇數週' : '偶數週'}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {activeDayData.themeType}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {activeDayData.title}
                </h3>
              </div>

              {/* Prev / Next & Close */}
              <div className="flex items-center gap-1.5 text-stone-400">
                <button
                  onClick={handlePrevDay}
                  disabled={activeDayData.dayNum <= 1}
                  className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition disabled:opacity-30 cursor-pointer"
                  title="上一天"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextDay}
                  disabled={activeDayData.dayNum >= 28}
                  className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition disabled:opacity-30 cursor-pointer"
                  title="下一天"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveModalDayNum(null)}
                  className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition cursor-pointer ml-1"
                  title="關閉"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 2. Three Sub-Tabs under the dark top bar */}
            <div className="px-5 sm:px-6 pt-4 pb-2 border-b border-stone-100 flex items-center gap-2 overflow-x-auto text-xs sm:text-sm font-bold no-scrollbar">
              <button
                onClick={() => {
                  setSopSubTab('morning');
                  setExpandedCardIndex(null);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition cursor-pointer ${
                  sopSubTab === 'morning'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span>晨間保養與妝前</span>
              </button>

              <button
                onClick={() => {
                  setSopSubTab('night');
                  setExpandedCardIndex(null);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition cursor-pointer ${
                  sopSubTab === 'night'
                    ? 'bg-[#1c1917] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span>夜間深度修護</span>
              </button>

              <button
                onClick={() => {
                  setSopSubTab('rx');
                  setExpandedCardIndex(null);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition cursor-pointer ${
                  sopSubTab === 'rx'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <Pill className="w-4 h-4" />
                <span>處方藥/保健品</span>
              </button>
            </div>

            {/* 3. Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1 text-xs sm:text-sm">
              {/* TAB 1: Night SOP (100% Matching image_05097494.png) */}
              {sopSubTab === 'night' && (
                <div className="space-y-4">
                  {/* Gray/White SOP Strategy Box */}
                  <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
                    <span className="text-xs font-semibold text-stone-400 block">
                      今日夜間完整保養 SOP 策略
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-stone-900 leading-relaxed">
                      {currentNightDetails.strategyText}
                    </p>
                  </div>

                  {/* Section Title */}
                  <div className="font-bold text-stone-800 text-xs sm:text-sm flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#ff1e56]" />
                      <span>今日指定夜間保養品與美容儀清單（依序使用，點擊展開完整手法）：</span>
                    </div>
                    <span className="text-[11px] text-stone-400 font-normal">共 {currentNightDetails.items.length} 步</span>
                  </div>

                  {/* List of Product Items Matching image_05097494.png */}
                  <div className="space-y-2.5">
                    {currentNightDetails.items.map((item, idx) => {
                      const isExpanded = expandedCardIndex === idx;

                      return (
                        <div
                          key={idx}
                          onClick={() => setExpandedCardIndex(isExpanded ? null : idx)}
                          className={`rounded-2xl border transition-all cursor-pointer overflow-hidden ${
                            item.isHighlighted
                              ? 'border-rose-300 ring-2 ring-rose-200/50 bg-white shadow-xs'
                              : isExpanded
                              ? 'border-stone-400 bg-white shadow-xs'
                              : 'border-stone-200 bg-white hover:border-stone-300 shadow-2xs'
                          }`}
                        >
                          {/* Main Row */}
                          <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                              {/* Left Category Pill (洗卸 / 精華液 / 化妝水/噴霧 / 乳液/面霜) */}
                              <span className="px-2.5 py-1 rounded-lg bg-[#292524] text-white text-[11px] font-bold flex-shrink-0">
                                {item.categoryLabel}
                              </span>

                              {/* Product Info */}
                              <div className="min-w-0">
                                <h4 className="text-xs sm:text-sm font-extrabold text-stone-900 truncate">
                                  {item.productName}
                                </h4>
                                <p className="text-[11px] text-stone-500 mt-0.5 truncate">
                                  {item.appliedRole}
                                </p>
                              </div>
                            </div>

                            {/* Arrow Indicator */}
                            <div className="flex-shrink-0 text-stone-400">
                              {isExpanded ? (
                                <ChevronDown className="w-4 h-4 text-stone-800" />
                              ) : (
                                <ChevronRight className="w-4 h-4" />
                              )}
                            </div>
                          </div>

                          {/* Expanded Hand Techniques & Dosage (產品/手法) */}
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-1 bg-stone-50/70 border-t border-stone-100 space-y-2.5 text-xs animate-in fade-in duration-200">
                              <div className="grid grid-cols-2 gap-2 text-[11px]">
                                <div className="p-2 rounded-xl bg-white border border-stone-200">
                                  <span className="text-stone-400 block font-medium">適用部位：</span>
                                  <span className="font-bold text-stone-800">{item.targetZone}</span>
                                </div>
                                <div className="p-2 rounded-xl bg-white border border-stone-200">
                                  <span className="text-stone-400 block font-medium">建議用量：</span>
                                  <span className="font-bold text-stone-800">{item.amount}</span>
                                </div>
                              </div>

                              {/* Exact Hand Technique */}
                              <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-stone-800 space-y-1">
                                <span className="font-black text-amber-950 flex items-center gap-1">
                                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                                  <span>操作手法與手勢：</span>
                                </span>
                                <p className="leading-relaxed text-[11px] sm:text-xs">
                                  {item.technique}
                                </p>
                              </div>

                              {item.caution && (
                                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-[11px] font-medium">
                                  {item.caution}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: Morning SOP with Explicit Techniques */}
              {sopSubTab === 'morning' && (
                <div className="space-y-4">
                  {/* Yellow Core Strategy Summary Box */}
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                      <Sun className="w-4 h-4 text-amber-600" />
                      <span>晨間保養與妝前打底核心策略（{activeDayData.isOddWeek ? '奇數週' : '偶數週'}）</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-medium">
                      清水洗臉 ➔ #15小紫瓶 ➔ #20極光精粹 ➔ {activeDayData.isOddWeek ? '#18 BOH噴霧' : '#19 Ongredients噴霧'} ➔ #21 Torriden玻尿酸 ➔ 眼霜 ➔ 兩頰(#27-2靈芝乳/#34橘子霜) ＋ 下巴(#26-2米糠乳) ➔ 防曬(#39/#40)
                    </p>
                  </div>

                  {/* Section Title */}
                  <div className="font-bold text-stone-800 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>晨間 7 步保養與妝前手法 SOP（素顏日 vs 完整底妝減法步驟）：</span>
                  </div>

                  {/* 7 Numbered Step Cards with Products & Hand Techniques */}
                  <div className="space-y-2.5">
                    {getMorningStepsWithTechnique(activeDayData.isOddWeek).map(st => (
                      <div
                        key={st.step}
                        className="p-3.5 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all space-y-2 shadow-2xs"
                      >
                        <div className="flex items-center justify-between flex-wrap gap-1.5">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                              {st.step}
                            </span>
                            <span className="font-bold text-stone-900 text-xs sm:text-sm">
                              {st.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 flex-wrap">
                            {st.products.map((p, idx) => (
                              <span
                                key={idx}
                                className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Hand Technique details */}
                        <p className="text-xs text-stone-700 pl-7 leading-relaxed">
                          {st.technique}
                        </p>

                        {st.caution && (
                          <div className="ml-7 p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-medium">
                            {st.caution}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: Supplements & Rx Schedule */}
              {sopSubTab === 'rx' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/90 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                      <Pill className="w-4 h-4 text-emerald-600" />
                      <span>全日處方用藥與保健品嚴格安全排程</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-medium">
                      早餐後立即服處方藥 ➔ 隨餐維他命C+奢光錠 ➔ 嚴格間隔60分鐘吃Thorne B群 ➔ 午/晚餐隨餐D3+魚油+蔓越莓 ➔ 睡前吞服癲必停+羅眠樂
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="font-bold text-stone-900 block">☀️ 早晨早餐時段：</span>
                      <p className="text-xs text-stone-700">
                        • <strong>餐後立即吃</strong>：普樂彼錠 50mg (PTU) 3 顆 ＋ 癲鍵錠 50mg 1 顆。<br />
                        • <strong>隨餐搭配</strong>：8VC 2200mg 維生素 C 粉 1 包 ＋ BHK's 奢光錠 1 錠。<br />
                        • <strong>【間隔 1 小時後】</strong>：Thorne 基本維生素 B 複合物 1 粒。
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="font-bold text-stone-900 block">🌤️ 午餐或晚餐隨餐（需油脂）：</span>
                      <p className="text-xs text-stone-700">
                        • Kirkland 維生素 D3 (2 錠) ＋ Sports Research 魚油 (1 粒) ＋ Webber Naturals 蔓越莓 (1-2 粒)。
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="font-bold text-stone-900 block">🌙 睡前放鬆就寢時：</span>
                      <p className="text-xs text-stone-700">
                        • 癲必停持續性藥效膜衣錠 500mg (0.5 顆) ＋ 易靜錠 2mg (羅眠樂 1 顆)。
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Modal Bottom Action Bar (Matching image_05097494.png) */}
            <div className="p-4 sm:p-5 border-t border-stone-100 bg-stone-50/60 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevDay}
                  disabled={activeDayData.dayNum <= 1}
                  className="px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-stone-700 text-xs font-bold flex items-center gap-1 transition disabled:opacity-30 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>上一天</span>
                </button>
                <button
                  onClick={handleNextDay}
                  disabled={activeDayData.dayNum >= 28}
                  className="px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-stone-700 text-xs font-bold flex items-center gap-1 transition disabled:opacity-30 cursor-pointer"
                >
                  <span>下一天</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onSelectDayRoutine(activeDayData.dayOfWeek, activeDayData.isOddWeek ? 'odd' : 'even');
                    setActiveModalDayNum(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#ff1e56] hover:bg-[#e01548] text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                >
                  <span>前往今日打卡執行</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveModalDayNum(null)}
                  className="px-4 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold text-xs transition cursor-pointer"
                >
                  關閉
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
