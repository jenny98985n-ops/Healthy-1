/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DayOfWeek, StepItem, WeekType } from '../types';

/**
 * Single Canonical Source of Truth for Daily Evening & Morning SOPs.
 * Ensures 100% absolute consistency between "今日主頁 (Today View)" and "4週月曆總覽 (Calendar View Modal)".
 */

export function getNightStrategySummary(dayOfWeek: DayOfWeek, isOddWeek: boolean): string {
  switch (dayOfWeek) {
    case 'mon':
      return isOddWeek
        ? '小林製藥擦痘痘 ➔ 小紫瓶 ➔ 兩頰 AQ 乳液 ➔ 靈芝水 ➔ 黛珂極光 + Torriden 玻尿酸 ➔ 兩頰角鯊霜 / 下巴米糠乳'
        : '小林製藥擦痘痘 ➔ 小紫瓶 ➔ 兩頰 AQ 乳液 ➔ MUJI 化妝水 ➔ 黛珂極光 + All-in-One ➔ 下巴局部 TO 菸鹼醯胺 ➔ 兩頰冰河霜 / 下巴米糠乳';
    case 'tue':
      return isOddWeek
        ? 'ilso 敷下巴10分 ➔ 卸妝洗臉擦乾 ➔ 裸肌水楊酸 (下巴鼻翼靜置3分) ➔ 小紫瓶 ➔ 兩頰 AQ 乳液 ➔ 靈芝水 ➔ 兩頰角鯊霜 / 下巴米糠乳'
        : 'ilso 敷下巴10分 ➔ 卸妝洗臉擦乾 ➔ 裸肌水楊酸 (下巴鼻翼靜置3分) ➔ 小紫瓶 ➔ 兩頰 AQ 乳液 ➔ MUJI 化妝水 ➔ 紫熨斗眼霜 ➔ 兩頰冰河霜 / 下巴米糠乳';
    case 'wed':
      return isOddWeek
        ? '洗臉徹底擦乾 ➔ 裸肌全臉垂直乾壓 VT Reedle 300 (當晚嚴禁擦小紫瓶與 AQ 乳！) ➔ PDRN 安瓶 ➔ 兩頰厚塗 Dr. Reju-All 修復霜 / 下巴薄擦米糠乳'
        : '洗臉徹底擦乾 ➔ 裸肌全臉垂直乾壓 VT Reedle 300 (當晚嚴禁擦小紫瓶與 AQ 乳！) ➔ PDRN 安瓶 ➔ 兩頰薄塗 630 淡斑晚霜 / 下巴薄擦米糠乳';
    case 'thu':
      return isOddWeek
        ? '離子儀 + 舒特膚潔膚水正離子導出3分 ➔ 潔面 ➔ 小紫瓶 ➔ 兩頰 AQ 乳 ➔ 靈芝水 ➔ 離子儀負離子超導 Torriden 玻尿酸5分 ➔ 兩頰角鯊霜 / 下巴米糠乳'
        : '離子儀 + 舒特膚潔膚水正離子導出3分 ➔ 潔面 ➔ 小紫瓶 ➔ 兩頰 AQ 乳 ➔ MUJI 化妝水 ➔ 離子儀負離子超導 PDRN 安瓶5分 ➔ 兩頰冰河霜 / 下巴米糠乳';
    case 'fri':
      return isOddWeek
        ? '溫和潔面 ➔ 小紫瓶 ➔ 靈芝水 (當晚停用 AQ 乳防阻礙) ➔ 眼霜優先隔離眼周 ➔ 全臉豌豆大 Celimax A 醇 ➔ 全臉溫和封層角鯊霜'
        : 'DUO 卸妝 + 潔面 ➔ 小紫瓶 ➔ MUJI 化妝水 (當晚停用 AQ 乳) ➔ 紫熨斗眼霜優先隔離 ➔ 全臉豌豆大 Celimax A 醇 ➔ 全臉冰河霜封層';
    case 'sat':
      return isOddWeek
        ? '卸妝 ➔ 綠番茄洗面乳局部洗下巴 ➔ PDRN 棉片濕敷兩頰8分 ➔ 小紫瓶 ➔ 兩頰 AQ 乳 ➔ 靈芝水 ➔ 黛珂極光 ➔ 兩頰黛珂紫霜 / 下巴米糠乳'
        : 'DUO 卸妝 + 綠茶潔面 ➔ 小紫瓶 ➔ 兩頰 AQ 乳 ➔ MUJI 化妝水 ➔ 黛珂極光精粹 ➔ 紫熨斗眼霜 ➔ 兩頰契爾氏冰河霜 / 下巴米糠乳';
    case 'sun':
      return isOddWeek
        ? '日常洗卸 ➔ 敷日常保濕面膜15分 ➔ 小紫瓶 ➔ 兩頰 AQ 乳 ➔ 綠橘子眼膜敷10分 ➔ 雅詩蘭黛眼霜 ➔ 兩頰角鯊霜 / 下巴米糠乳'
        : '卸妝 ➔ suisai 酵素粉局部洗下巴角栓 ➔ 綠茶潔面 ➔ 敷 AZ100 痘痘藍膜15分 ➔ 小紫瓶 ➔ 兩頰 AQ 乳 ➔ 紫熨斗眼霜 ➔ 兩頰冰河霜 / 下巴米糠乳';
  }
}

/**
 * Returns canonical night steps (Cleansing 1..N ➔ Skincare 1..N ➔ Body 1)
 */
export function getCanonicalNightSteps(dayOfWeek: DayOfWeek, isOddWeek: boolean): StepItem[] {
  const prefix = `${dayOfWeek}-${isOddWeek ? 'odd' : 'even'}`;

  switch (dayOfWeek) {
    case 'mon': {
      // Monday: 頂級修護夜
      const cleansingSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-clean-1`,
              title: '#05 Capsule Serum 維C去角質卸妝凝膠',
              categoryLabel: '洗卸',
              productCode: '#05',
              productName: 'Capsule Serum 維他命 C 去角質護理卸妝潔面凝膠',
              appliedRole: '素顏防曬日常溫和洗卸・適用部位：全臉',
              targetZoneText: '全臉適用',
              amount: '十元硬幣大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 1',
              instruction: '凝膠均勻塗抹全臉按摩，加少量溫水乳化後沖淨，溫和洗淨素顏防曬與油脂。',
              technique: '【凝膠溫和乳化手法】：取適量凝膠均勻塗於臉部，指腹由內向外螺旋畫圈按摩 40 秒，遇水後轉化為柔滑乳液質地，帶走日間油脂與抗氧化殘留物，以溫涼水潑洗沖淨。'
            },
            {
              id: `${prefix}-clean-2`,
              title: '#06 Relove Nrf2 胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#06',
              productName: 'Relove Nrf2 Ultimate Future 胺基酸潔面乳',
              appliedRole: '晚間溫和潔面主力・保留天然皮脂膜',
              targetZoneText: '全臉適用',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '搓出豐盈綿密泡沫洗臉，純棉柔巾輕壓吸乾水分。',
              technique: '【綿密泡泡潔面手法】：取黃豆大小潔面乳於掌心加水搓出細緻泡泡，以細密泡沫輕柔清潔全臉肌膚，下巴出油處輕輕打圈，隨後沖淨並用棉柔巾壓乾。'
            }
          ]
        : [
            {
              id: `${prefix}-clean-1`,
              title: '#03 DUO 麗優 溫和卸妝膏',
              categoryLabel: '洗卸',
              productCode: '#03',
              productName: 'DUO 麗優 溫和卸妝膏',
              appliedRole: '全妝日與功能夜主力卸妝・下巴粉刺按摩溶解',
              targetZoneText: '全臉適用',
              amount: '專用勺 1 勺',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 1',
              instruction: '乾手乾臉打圈按摩 1 分鐘，下巴粉刺加強打圈，充分乳化沖淨。',
              technique: '【乾手乾臉乳化手法】：取 1 勺膏體於掌心化開，塗抹全臉按摩溶出彩妝與硬化油脂，下巴粉刺區加強打圈 30 秒，沾少量溫水在臉上充分乳化至乳白色，再以大量溫水徹底沖淨。'
            },
            {
              id: `${prefix}-clean-2`,
              title: '#07 innisfree 綠茶保濕胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#07',
              productName: 'innisfree / 綠茶系列 綠茶保濕胺基酸潔面乳',
              appliedRole: '晚間泡沫洗顏・洗淨多餘皮脂與殘留乳化',
              targetZoneText: '全臉適用',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '溫水搓出細緻泡泡洗臉，純棉柔巾吸乾水分。',
              technique: '【起泡打圈潔面手法】：取黃豆大小加水搓揉出豐盈柔滑泡泡，以泡沫為介質輕撫全臉肌膚，下巴油脂處以指腹輕輕打圈清潔，洗淨彩妝與乳化殘留物，純棉柔巾輕柔按壓吸乾水分。'
            }
          ];

      const skincareSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-care-1`,
              title: '#10 小林製藥 EAUDE MUGE 抗痘化妝水',
              categoryLabel: '局部調理',
              productCode: '#10',
              productName: '小林製藥 EAUDE MUGE 藥用抗痘化妝水',
              appliedRole: '下巴痘痘粉刺抗菌調理',
              targetZoneText: '【僅下巴痘痘粉刺區】',
              amount: '沾濕半片化妝棉',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1',
              instruction: '倒取適量輕柔擦拭下巴痘痘粉刺區，抗炎調理角質。',
              technique: '【局部輕拭調理手法】：將抗痘化妝水倒於棉片，單向輕輕擦拭下巴出油旺盛與容易閉口處，溫和抑菌消炎。'
            },
            {
              id: `${prefix}-care-2`,
              title: '#15 黛珂 小紫瓶超微導精粹',
              categoryLabel: '前導通道',
              isHighlighted: true,
              productCode: '#15',
              productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
              appliedRole: '洗臉後第一道前導通道開啟・促進後續吸收',
              targetZoneText: '全臉手溫按壓',
              amount: '按壓 2-3 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '洗臉後全臉第一道前導，手溫覆蓋按壓 2-3 泵開啟肌底通道。',
              technique: '【掌心手溫覆蓋手法】：洗臉後立即以手心溫熱包覆全臉，微脂囊開啟角質細胞間隙通道，提升後續養分滲透率。'
            },
            {
              id: `${prefix}-care-3`,
              title: '#28 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              categoryLabel: '先乳後水',
              isHighlighted: true,
              productCode: '#28',
              productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              appliedRole: '【先乳後水關鍵樞紐】軟化硬化角質・適用部位：僅兩頰',
              targetZoneText: '【僅塗抹兩頰乾燥區，嚴禁下巴！】',
              amount: '按壓 1-2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '【先乳後水關鍵】僅按壓兩頰軟化硬化角質層，下巴嚴格避開！',
              technique: '【化妝棉擦拭或掌心軟化手法】：取 1-2 泵於手心搓熱，溫柔由內向外按壓塗抹於兩頰乾燥處軟化硬化角質層；下巴出油區請嚴格避開避免致痘！',
              caution: '⚠️ 鐵則：黛珂專利「先乳後水」僅塗兩頰，嚴禁塗抹下巴預防悶痘。'
            },
            {
              id: `${prefix}-care-4`,
              title: '#16 品木宣言 靈芝水',
              categoryLabel: '化妝水/噴霧',
              productCode: '#16',
              productName: 'ORIGINS 品木宣言 靈芝水 (菇菌舒緩化妝水)',
              appliedRole: '接續 AQ 乳液後的水相大補水・舒緩鎮靜全臉',
              targetZoneText: '全臉輕拍',
              amount: '十元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4',
              instruction: '全臉輕拍靈芝水補水，此時軟化後的兩頰吸收水分子能力倍增。',
              technique: '【雙掌輕拍吸收手法】：倒於掌心輕拍全臉，為兩頰注入水分子，並舒緩下巴與鼻翼。'
            },
            {
              id: `${prefix}-care-5`,
              title: '#20 黛珂 極光煥采精粹 1.8X',
              categoryLabel: '精華液',
              productCode: '#20',
              productName: 'COSME DECORTE 黛珂 極光煥采精粹 1.8X',
              appliedRole: '水性美白抗暗沉與均勻膚色精華',
              targetZoneText: '全臉均勻塗抹',
              amount: '按壓 1 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5',
              instruction: '均勻塗抹全臉提亮抗暗黃，加強嘴角暗沉處。',
              technique: '【指腹平滑延展手法】：由中央往外側輕輕塗勻全臉，撫平秋冬乾燥暗黃氣色。'
            },
            {
              id: `${prefix}-care-6`,
              title: '#21 Torriden 5D 玻尿酸精華',
              categoryLabel: '精華液',
              productCode: '#21',
              productName: 'Torriden 潛水艇 5D 微分子玻尿酸保濕精華',
              appliedRole: '5D 微分子透明質酸深層注水',
              targetZoneText: '全臉適用',
              amount: '半滴管',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6',
              instruction: '全臉推勻吸收，注入深層微分子玻尿酸水分。',
              technique: '【指腹滑推注水手法】：取半滴管順著肌膚紋理延展推勻，補足角質層深層儲水庫。'
            },
            {
              id: `${prefix}-care-7`,
              title: '#35 雅詩蘭黛 特潤全能亮眼霜',
              categoryLabel: '眼霜',
              productCode: '#35',
              productName: 'Estee Lauder 雅詩蘭黛 特潤全能修護亮眼霜（小棕眼霜）',
              appliedRole: '夜間深層撫平眼下細紋與抗藍光氧化',
              targetZoneText: '眼周專用',
              amount: '兩眼各取米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 7',
              instruction: '無名指輕點眼周眶骨，專利抗藍光撫平細紋。',
              technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨，避免大力拉扯眼皮。'
            },
            {
              id: `${prefix}-care-8`,
              title: '#29-2 S.NATURE 水庫角鯊烷保濕霜',
              categoryLabel: '乳液/面霜',
              productCode: '#29-2',
              productName: 'S.NATURE 綠豆角鯊烷水分營養面霜',
              appliedRole: '兩頰高保濕屏障修護面霜・深層鎖水',
              targetZoneText: '【僅塗抹兩頰乾燥區】',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 8A',
              instruction: '兩頰厚塗手溫按壓封層，修護皮脂膜抵抗乾冷。',
              technique: '【掌心溫熱厚敷封層手法】：取適量於指腹搓熱乳化，手掌貼合乾燥兩頰由內向外按壓厚抹，加強細胞間脂質修護。',
              caution: '嚴禁塗抹於下巴出油處，避免滋潤度過高生成閉口。'
            },
            {
              id: `${prefix}-care-9`,
              title: '#26-2 MUJI 米糠發酵乳液',
              categoryLabel: '乳液/面霜',
              productCode: '#26-2',
              productName: 'MUJI 無印良品 米糠發酵乳液',
              appliedRole: '下巴唯一指定清爽水感乳液・避開厚霜',
              targetZoneText: '【僅下巴粉刺區薄擦】',
              amount: '僅需 1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 8B',
              instruction: '下巴唯一指定乳液！僅薄擦 1 滴保持透氣防閉口。',
              technique: '【指腹單層薄擦手法】：下巴唯一指定乳液！取 1 滴於食指腹，在下巴薄薄抹勻一層即可，保持毛孔透氣。'
            },
            {
              id: `${prefix}-care-10`,
              title: '#25-2 Acclear Cream 局部痘痘藥',
              categoryLabel: '局部急救',
              productCode: '#25-2',
              productName: 'Acclear Cream 局部痘痘藥膏',
              appliedRole: '發炎紅腫大痘局部急救消腫',
              targetZoneText: '【下巴紅腫發炎痘痘】',
              amount: '米粒尖大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 9 (選用)',
              instruction: '若下巴有紅腫發炎大痘，於保養最後一步局部點塗厚敷。',
              technique: '【棉花棒定點厚敷手法】：用乾淨棉花棒沾取微量，精準點在紅腫痘痘頂端，切勿大面積抹開。'
            }
          ]
        : [
            {
              id: `${prefix}-care-1`,
              title: '#10 小林製藥 EAUDE MUGE 抗痘化妝水',
              categoryLabel: '局部調理',
              productCode: '#10',
              productName: '小林製藥 EAUDE MUGE 藥用抗痘化妝水',
              appliedRole: '下巴痘痘粉刺抗菌調理',
              targetZoneText: '【僅下巴痘痘粉刺區】',
              amount: '沾濕半片化妝棉',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1',
              instruction: '倒取適量輕柔擦拭下巴痘痘粉刺區，抗炎調理。',
              technique: '【局部輕拭調理手法】：單向輕輕擦拭下巴出油旺盛與容易閉口處，溫和抑菌消炎。'
            },
            {
              id: `${prefix}-care-2`,
              title: '#15 黛珂 小紫瓶超微導精粹',
              categoryLabel: '前導通道',
              isHighlighted: true,
              productCode: '#15',
              productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
              appliedRole: '洗臉後第一道前導通道開啟',
              targetZoneText: '全臉手溫按壓',
              amount: '按壓 2-3 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '全臉手溫按壓開啟微脂囊通道。',
              technique: '【掌心手溫覆蓋手法】：洗臉後立即以手心溫熱覆蓋全臉，微脂囊開啟角質細胞間隙通道。'
            },
            {
              id: `${prefix}-care-3`,
              title: '#28 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              categoryLabel: '先乳後水',
              isHighlighted: true,
              productCode: '#28',
              productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              appliedRole: '【先乳後水關鍵樞紐】軟化硬化角質・僅抹兩頰',
              targetZoneText: '【僅塗抹兩頰乾燥區，嚴禁下巴！】',
              amount: '按壓 1-2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '【先乳後水】僅按壓兩頰軟化硬化角質層，下巴嚴格避開！',
              technique: '【化妝棉擦拭或掌心軟化手法】：取 1-2 泵於手心搓熱，溫柔由內向外按壓塗抹於兩頰乾燥處軟化硬化角質層；下巴出油區請嚴格避開避免致痘！',
              caution: '⚠️ 鐵則：AQ 柔膚乳專利先乳後水僅塗兩頰，嚴禁塗抹下巴避免致痘。'
            },
            {
              id: `${prefix}-care-4`,
              title: '#17 MUJI 無印良品 化妝水 清爽型',
              categoryLabel: '化妝水/噴霧',
              productCode: '#17',
              productName: 'MUJI 無印良品 化妝水（清爽型 / Light）',
              appliedRole: '全臉清爽水相大補水',
              targetZoneText: '全臉拍水',
              amount: '十元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4',
              instruction: '全臉輕拍補水，軟化後的角質吸收水分子能力倍增。',
              technique: '【雙掌輕拍吸收手法】：倒於掌心，雙手輕拍全臉補足清爽純淨水分。'
            },
            {
              id: `${prefix}-care-5`,
              title: '#20 黛珂 極光煥采精粹 1.8X',
              categoryLabel: '精華液',
              productCode: '#20',
              productName: 'COSME DECORTE 黛珂 極光煥采精粹 1.8X',
              appliedRole: '水性傳明酸美白抗暗沉精華',
              targetZoneText: '全臉適用',
              amount: '按壓 1 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5',
              instruction: '均勻塗抹全臉提亮抗暗黃。',
              technique: '【指腹平滑延展手法】：由中央往外側輕輕塗勻全臉，提亮氣色。'
            },
            {
              id: `${prefix}-care-6`,
              title: '#26 All-in-One 全效水感精華液',
              categoryLabel: '精華液',
              productCode: '#26',
              productName: '高濃度 All-in-One 全效水感精華液',
              appliedRole: '複合胜肽與多重保濕滋養',
              targetZoneText: '全臉適用',
              amount: '按壓 1 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6',
              instruction: '均勻推勻吸收，提供複合胜肽抗老營養。',
              technique: '【平滑延展吸收手法】：指腹由中央往外均勻抹開全臉至吸收。'
            },
            {
              id: `${prefix}-care-7`,
              title: '#29 The Ordinary 菸鹼醯胺 10% + 鋅 1%',
              categoryLabel: '精華液',
              isKeyFocus: true,
              productCode: '#29',
              productName: 'The Ordinary 菸鹼醯胺 10% + 鋅 1%',
              appliedRole: '下巴高濃度 B3 控油收斂・抑制皮脂腺',
              targetZoneText: '【僅局部點塗下巴出油處，嚴禁擦兩頰！】',
              amount: '僅需 1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 7',
              instruction: '【偶數週一核心】取 1 滴僅局部點塗下巴出油處抑制皮脂，嚴禁塗兩頰！',
              technique: '【指腹定點點塗手法】：取 1 滴於指腹，精準點塗於下巴易出油毛孔與粉刺處輕拍至乾爽，收斂毛孔抑油。',
              caution: '⚠️ 鐵則：高濃度維他命 B3 與鋅鹽僅限下巴控油，嚴禁沾染乾燥兩頰！'
            },
            {
              id: `${prefix}-care-8`,
              title: '#36 巴黎萊雅 紫熨斗 MAX 眼霜',
              categoryLabel: '眼霜',
              productCode: '#36',
              productName: 'L’Oreal 巴黎萊雅 玻尿酸撫紋眼霜 MAX（紫熨斗）',
              appliedRole: '玻色因深層澎潤眼周與法令紋',
              targetZoneText: '眼周與法令紋',
              amount: '米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 8',
              instruction: '玻色因精華輕按眼周與法令紋。',
              technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨與法令紋，撫平細紋。'
            },
            {
              id: `${prefix}-care-9`,
              title: '#32 契爾氏 冰河醣蛋白保濕霜',
              categoryLabel: '乳液/面霜',
              productCode: '#32',
              productName: 'Kiehl’s 契爾氏 冰河醣蛋白保濕霜',
              appliedRole: '兩頰深層鎖水面霜・防冷氣拔乾',
              targetZoneText: '【僅塗抹兩頰乾燥區】',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 9A',
              instruction: '兩頰厚實按壓封層，抵禦秋冬冷氣。',
              technique: '【掌心溫熱按壓封層手法】：取面霜於指腹搓熱，手掌貼合乾燥兩頰由內向外按壓厚抹封層。',
              caution: '嚴禁塗抹於下巴出油處！'
            },
            {
              id: `${prefix}-care-10`,
              title: '#26-2 MUJI 米糠發酵乳液',
              categoryLabel: '乳液/面霜',
              productCode: '#26-2',
              productName: 'MUJI 無印良品 米糠發酵乳液',
              appliedRole: '下巴唯一指定清爽乳液',
              targetZoneText: '【僅下巴粉刺區薄擦】',
              amount: '僅需 1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 9B',
              instruction: '下巴只薄擦米糠乳液，清爽控油防閉口。',
              technique: '【指腹單層薄擦手法】：下巴薄擦 1 滴即可。'
            },
            {
              id: `${prefix}-care-11`,
              title: '#25-2 Acclear Cream 局部痘痘藥',
              categoryLabel: '局部急救',
              productCode: '#25-2',
              productName: 'Acclear Cream 局部痘痘藥膏',
              appliedRole: '發炎紅腫痘痘局部點敷',
              targetZoneText: '【下巴紅腫發炎痘痘】',
              amount: '微量點塗',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 10 (選用)',
              instruction: '若下巴有發炎紅腫痘，最後局部厚敷點塗一小點。',
              technique: '【棉花棒定點厚敷手法】：精準點在紅腫痘痘頂端。'
            }
          ];

      const bodyLotion: StepItem = isOddWeek
        ? {
            id: `${prefix}-body-1`,
            title: '#B-04 Aveeno 燕麥優格保濕身體乳',
            categoryLabel: '身體乳',
            productCode: '身-04',
            productName: 'Aveeno 艾惟諾 燕麥優格保濕身體乳',
            appliedRole: '奇數週全身洗澡後長效鎖水 48 小時',
            targetZoneText: '全身手腳四肢',
            amount: '適量',
            timingCategory: 'night_body',
            timingLabel: '晚間身體護理',
            instruction: '洗澡擦乾後立即全身塗抹，舒緩秋冬溫差乾癢。',
            technique: '【全身大面積塗抹手法】：趁沐浴後肌膚微潤時均勻塗抹四肢與軀幹，打圈按摩至完全吸收。'
          }
        : {
            id: `${prefix}-body-1`,
            title: '#B-05 一日茶道 蜜柑紅茶透亮美體乳',
            categoryLabel: '身體乳',
            productCode: '身-05',
            productName: '一日茶道 TEAORY 蜜柑紅茶透亮美體乳',
            appliedRole: '偶數週全身放鬆抗氧化・舒緩助眠',
            targetZoneText: '全身四肢',
            amount: '適量',
            timingCategory: 'night_body',
            timingLabel: '晚間身體護理',
            instruction: '洗澡後全身放鬆塗抹，蜜柑紅茶香氣舒緩助眠。',
            technique: '【全身大面積塗抹手法】：沐浴後全身均勻塗抹四肢與肩頸。'
          };

      return [...cleansingSteps, ...skincareSteps, bodyLotion];
    }

    case 'tue': {
      // Tuesday: 水楊酸夜 (粉刺大掃除)
      // Exactly matches Day 9 in user screenshots!
      const cleansingSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-clean-1`,
              title: '#01 ilso 溫和粉刺溶解露',
              categoryLabel: '洗卸',
              productCode: '#01',
              productName: 'ilso 溫和粉刺溶解露',
              appliedRole: '每週粉刺大掃除夜專用・下巴濕敷軟化硬化角栓',
              targetZoneText: '下巴與鼻翼專用',
              amount: '浸濕 1 片化妝棉',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 1',
              instruction: '下巴/鼻翼濕敷 10-15 分鐘，溫和軟化角栓，棉花棒輕推帶出浮出粉刺。',
              technique: '【濕敷軟化角栓手法】：將 ilso 溶解露倒滿薄款化妝棉，緊密服貼於下巴閉口粉刺與鼻翼處濕敷 10-15 分鐘，溫和軟化固化硬皮脂；取下後可用雙頭棉花棒由下往上輕推帶出浮出的頑固角栓，隨後以溫水洗淨。',
              timerDurationMinutes: 10,
              isKeyFocus: true
            },
            {
              id: `${prefix}-clean-2`,
              title: '#02 MUJI 無印良品 溫和卸妝油',
              categoryLabel: '洗卸',
              productCode: '#02',
              productName: 'MUJI 無印良品 溫和卸妝油',
              appliedRole: '功能夜主力卸妝・乾手按摩溶解全臉油脂與角栓',
              targetZoneText: '全臉適用',
              amount: '按壓 2-3 泵',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '乾手乾臉打圈按摩溶出彩妝與油脂，加少量溫水充分乳化沖淨。',
              technique: '【乾手乾臉乳化手法】：保持手部與臉部完全乾燥，取卸妝油均勻塗抹全臉，以指腹由內向外螺旋畫圈按摩 1 分鐘，下巴粉刺與鼻翼處加強打圈 30 秒溶出角栓；隨後沾少量溫水在臉上打圈「乳化至乳白色」，最後以大量流動溫水徹底沖淨。'
            },
            {
              id: `${prefix}-clean-3`,
              title: '#06 Relove Nrf2 胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#06',
              productName: 'Relove Nrf2 Ultimate Future 胺基酸潔面乳',
              appliedRole: '晚間溫和潔顏・洗淨多餘皮脂與殘留乳化',
              targetZoneText: '全臉適用',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 3',
              instruction: '溫水搓出細緻泡泡洗臉，純棉柔巾輕壓吸乾水分。',
              technique: '【起泡打圈潔面手法】：取黃豆大小加水搓揉出豐盈柔滑泡泡，以泡沫為介質輕撫全臉肌膚，洗淨彩妝與乳化殘留物，純棉柔巾輕柔按壓吸乾水分。'
            }
          ]
        : [
            {
              id: `${prefix}-clean-1`,
              title: '#01 ilso 溫和粉刺溶解露',
              categoryLabel: '洗卸',
              productCode: '#01',
              productName: 'ilso 溫和粉刺溶解露',
              appliedRole: '每週粉刺大掃除夜專用・下巴濕敷軟化硬化角栓',
              targetZoneText: '下巴與鼻翼專用',
              amount: '浸濕 1 片化妝棉',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 1',
              instruction: '下巴/鼻翼濕敷 10-15 分鐘，溫和軟化角栓，棉花棒輕推帶出浮出粉刺。',
              technique: '【濕敷軟化角栓手法】：將 ilso 溶解露倒滿薄款化妝棉，緊密服貼於下巴閉口粉刺與鼻翼處濕敷 10-15 分鐘，溫和軟化固化硬皮脂；取下後可用雙頭棉花棒由下往上輕推帶出浮出的頑固角栓，隨後以溫水洗淨。',
              timerDurationMinutes: 10,
              isKeyFocus: true
            },
            {
              id: `${prefix}-clean-2`,
              title: '#03 DUO 麗優 溫和卸妝膏',
              categoryLabel: '洗卸',
              productCode: '#03',
              productName: 'DUO 麗優 溫和卸妝膏',
              appliedRole: '全妝日與功能夜主力卸妝・下巴粉刺按摩溶解',
              targetZoneText: '全臉適用',
              amount: '專用勺 1 勺',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '乾手乾臉打圈按摩溶出彩妝與硬化油脂，下巴粉刺加強打圈，充分乳化沖淨。',
              technique: '【乾手乾臉乳化手法】：取 1 勺膏體於掌心化開，塗抹全臉按摩溶出彩妝與硬化油脂，下巴粉刺區加強打圈 30 秒，沾少量溫水在臉上充分乳化至乳白色，再以大量溫水徹底沖淨。'
            },
            {
              id: `${prefix}-clean-3`,
              title: '#07 innisfree 綠茶保濕胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#07',
              productName: 'innisfree / 綠茶系列 綠茶保濕胺基酸潔面乳',
              appliedRole: '晚間泡沫洗顏・洗淨多餘皮脂與殘留乳化',
              targetZoneText: '全臉適用',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 3',
              instruction: '溫水搓出細緻泡泡洗臉，純棉柔巾吸乾水分。',
              technique: '【起泡打圈潔面手法】：取黃豆大小加水搓揉出豐盈柔滑泡泡，以泡沫為介質輕撫全臉肌膚，下巴油脂處以指腹輕輕打圈清潔，洗淨彩妝與乳化殘留物，純棉柔巾輕柔按壓吸乾水分。'
            }
          ];

      const skincareSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-care-1`,
              title: '#22 寶拉珍選 2% 水楊酸精華液',
              categoryLabel: '裸肌活性',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '#22',
              productName: 'Paula’s Choice 寶拉珍選 寶拉 2% 水楊酸精華液',
              appliedRole: '每週二固定下巴鼻翼粉刺煥膚精華・適用部位：下巴',
              targetZoneText: '【僅下巴/鼻翼裸肌使用】',
              amount: '2-3 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1 (裸肌)',
              instruction: '洗臉後徹底擦乾，第一步取 2-3 滴擦拭下巴與鼻翼，倒數等待 3 分鐘！兩頰嚴禁碰酸！',
              technique: '【裸肌點塗靜置 3-5 分鐘手法】：臉部徹底擦乾後「裸肌第一步」使用！取 2-3 滴僅點塗於下巴與鼻翼毛孔，以指腹輕輕推勻吸收，【務必靜置倒數 3-5 分鐘】，讓脂溶性水楊酸充分穿透皮脂腺溶解毛孔角質。兩頰乾肌切勿沾染！',
              caution: '⚠️ 鐵則：兩頰乾荒敏感區嚴禁碰水楊酸！靜置滿 3 分鐘後才可接續保濕品。',
              timerDurationMinutes: 3
            },
            {
              id: `${prefix}-care-2`,
              title: '#15 黛珂 小紫瓶超微導精粹',
              categoryLabel: '前導通道',
              isHighlighted: true,
              productCode: '#15',
              productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
              appliedRole: '洗臉後第一道前導保濕主力・開啟吸收微脂囊通道',
              targetZoneText: '全臉手溫按壓',
              amount: '按壓 2-3 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '水楊酸靜置後，手溫搓熱全臉輕柔按壓開啟微脂囊通道。',
              technique: '【掌心手溫覆蓋按壓手法】：水楊酸靜置完成後，取 2-3 泵小紫瓶於手心，雙手合十搓熱，以整個手掌緊貼臉部輕柔按拍全臉，微脂囊體立即釋放水分開啟肌底吸收管道。'
            },
            {
              id: `${prefix}-care-3`,
              title: '#28 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              categoryLabel: '先乳後水',
              isHighlighted: true,
              productCode: '#28',
              productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              appliedRole: '【先乳後水關鍵樞紐】軟化硬化角質・適用部位：僅兩頰',
              targetZoneText: '【僅塗抹兩頰乾燥區，嚴禁下巴！】',
              amount: '按壓 1-2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '【先乳後水關鍵】僅按壓兩頰軟化硬化角質層，避開下巴！',
              technique: '【化妝棉擦拭或掌心軟化手法】：取 1-2 泵於手心搓熱，溫柔由內向外按壓塗抹於兩頰乾燥處軟化硬化角質層；下巴出油區請嚴格避開避免致痘！',
              caution: '⚠️ 鐵則：AQ 柔膚乳專利先乳後水僅塗兩頰，嚴禁塗抹下巴避免致痘。'
            },
            {
              id: `${prefix}-care-4`,
              title: '#16 品木宣言 靈芝水',
              categoryLabel: '化妝水/噴霧',
              productCode: '#16',
              productName: 'ORIGINS 品木宣言 靈芝水 (菇菌舒緩化妝水)',
              appliedRole: '接續 AQ 乳液後的水相大補水・舒緩酸類微乾燥',
              targetZoneText: '全臉拍水',
              amount: '十元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4',
              instruction: '全臉輕拍靈芝水補水，舒緩水楊酸後可能的微乾燥。',
              technique: '【雙掌輕拍吸收手法】：倒於掌心，雙手輕拍全臉，為剛經過酸類代謝的下巴與兩頰補充充沛水分子，舒緩可能出現的微繃感。'
            },
            {
              id: `${prefix}-care-5`,
              title: '#35 雅詩蘭黛 特潤全能亮眼霜',
              categoryLabel: '眼霜',
              productCode: '#35',
              productName: 'Estee Lauder 雅詩蘭黛 特潤全能修護亮眼霜（小棕眼霜）',
              appliedRole: '夜間深層撫平眼下細紋與抗藍光氧化',
              targetZoneText: '眼周專用',
              amount: '兩眼各取米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5',
              instruction: '無名指輕點眼周眶骨。',
              technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨，避免大力拉扯眼皮。'
            },
            {
              id: `${prefix}-care-6`,
              title: '#29-2 S.NATURE 水庫角鯊烷保濕霜',
              categoryLabel: '乳液/面霜',
              productCode: '#29-2',
              productName: 'S.NATURE 綠豆角鯊烷水分營養面霜',
              appliedRole: '兩頰高保濕屏障修護面霜・深層鎖水',
              targetZoneText: '【僅塗抹兩頰乾燥區】',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6A',
              instruction: '兩頰加強厚塗角鯊烷面霜鎖水，防止秋冬脫皮。',
              technique: '【掌心溫熱厚敷封層手法】：取適量於指腹搓熱乳化，手掌貼合乾燥兩頰由內向外按壓厚抹，加強細胞間脂質修護，徹夜鎖住水分抵抗乾冷。',
              caution: '嚴禁塗抹於下巴出油處，避免滋潤度過高生成閉口。'
            },
            {
              id: `${prefix}-care-7`,
              title: '#26-2 MUJI 米糠發酵乳液',
              categoryLabel: '乳液/面霜',
              productCode: '#26-2',
              productName: 'MUJI 無印良品 米糠發酵乳液',
              appliedRole: '下巴唯一指定清爽水感乳液・避開厚霜',
              targetZoneText: '【僅下巴粉刺區薄擦】',
              amount: '僅需 1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6B',
              instruction: '下巴酸類煥膚後，只薄擦一層清爽米糠乳液。',
              technique: '【指腹單層薄擦手法】：下巴唯一指定乳液！取 1 滴於食指腹，在水楊酸護理後的下巴薄薄抹勻一層即可，保持毛孔透氣與微生態平衡。'
            },
            {
              id: `${prefix}-care-8`,
              title: '#25-2 Acclear Cream 局部痘痘藥',
              categoryLabel: '局部急救',
              productCode: '#25-2',
              productName: 'Acclear Cream 局部痘痘藥膏',
              appliedRole: '若有發炎紅腫大痘局部點敷',
              targetZoneText: '【下巴紅腫發炎痘痘】',
              amount: '微量點塗',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 7 (選用)',
              instruction: '若下巴有發炎紅腫痘，最後局部厚敷點塗一小點。',
              technique: '【棉花棒定點厚敷手法】：精準點在紅腫痘痘頂端。'
            }
          ]
        : [
            {
              id: `${prefix}-care-1`,
              title: '#22 寶拉珍選 2% 水楊酸精華液',
              categoryLabel: '裸肌活性',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '#22',
              productName: 'Paula’s Choice 寶拉珍選 寶拉 2% 水楊酸精華液',
              appliedRole: '每週二固定下巴鼻翼粉刺煥膚精華・適用部位：下巴',
              targetZoneText: '【僅下巴/鼻翼裸肌使用】',
              amount: '2-3 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1 (裸肌)',
              instruction: '徹底擦乾後第一步使用，點塗下巴與鼻翼，倒數 3 分鐘！兩頰嚴禁碰酸！',
              technique: '【裸肌點塗靜置 3-5 分鐘手法】：臉部徹底擦乾後「裸肌第一步」使用！取 2-3 滴僅點塗於下巴與鼻翼毛孔，以指腹輕輕推勻吸收，【務必靜置倒數 3-5 分鐘】，讓脂溶性水楊酸充分穿透皮脂腺溶解毛孔角質。兩頰乾肌切勿沾染！',
              caution: '⚠️ 鐵則：兩頰乾荒敏感區嚴禁碰水楊酸！靜置滿 3 分鐘後才可接續保濕品。',
              timerDurationMinutes: 3
            },
            {
              id: `${prefix}-care-2`,
              title: '#15 黛珂 小紫瓶超微導精粹',
              categoryLabel: '前導通道',
              isHighlighted: true,
              productCode: '#15',
              productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
              appliedRole: '洗臉後第一道前導保濕主力・開啟吸收微脂囊通道',
              targetZoneText: '全臉手溫按壓',
              amount: '按壓 2-3 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '水楊酸靜置完成後，手溫包覆全臉按壓 2-3 泵開啟肌底微脂囊吸收通道。',
              technique: '【掌心手溫覆蓋按壓手法】：水楊酸靜置完成後，取 2-3 泵小紫瓶於手心，雙手合十搓熱，以整個手掌緊貼臉部輕柔按拍全臉，微脂囊體立即釋放水分開啟肌底吸收管道。'
            },
            {
              id: `${prefix}-care-3`,
              title: '#28 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              categoryLabel: '先乳後水',
              isHighlighted: true,
              productCode: '#28',
              productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              appliedRole: '【先乳後水關鍵樞紐】軟化硬化角質・適用部位：僅兩頰',
              targetZoneText: '【僅塗抹兩頰乾燥區，嚴禁下巴！】',
              amount: '按壓 1-2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '【先乳後水關鍵】兩頰按壓塗抹軟化硬化角質，避開下巴！',
              technique: '【化妝棉擦拭或掌心軟化手法】：取 1-2 泵於手心搓熱，溫柔由內向外按壓塗抹於兩頰乾燥處軟化硬化角質層；下巴出油區請嚴格避開避免致痘！',
              caution: '⚠️ 鐵則：AQ 柔膚乳專利先乳後水僅塗兩頰，嚴禁塗抹下巴避免致痘。'
            },
            {
              id: `${prefix}-care-4`,
              title: '#17 MUJI 無印良品 化妝水 清爽型',
              categoryLabel: '化妝水/噴霧',
              productCode: '#17',
              productName: 'MUJI 無印良品 化妝水（清爽型 / Light）',
              appliedRole: '接續 AQ 乳液後的水相大補水・舒緩酸類微乾燥',
              targetZoneText: '全臉拍水',
              amount: '十元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4',
              instruction: '全臉輕拍補水，軟化後的角質吸收水分子能力倍增。',
              technique: '【雙掌輕拍吸收手法】：倒於掌心，雙手輕拍全臉，為剛經過酸類代謝的下巴與兩頰補充充沛水分子，舒緩可能出現的微繃感。'
            },
            {
              id: `${prefix}-care-5`,
              title: '#36 巴黎萊雅 紫熨斗 MAX 眼霜',
              categoryLabel: '眼霜',
              productCode: '#36',
              productName: 'L’Oreal 巴黎萊雅 玻尿酸撫紋眼霜 MAX（紫熨斗）',
              appliedRole: '玻色因深層澎潤眼周與法令紋',
              targetZoneText: '眼周專用',
              amount: '米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5',
              instruction: '玻色因精華輕按眼周與法令紋。',
              technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨與法令紋，撫平細紋。'
            },
            {
              id: `${prefix}-care-6`,
              title: '#32 契爾氏 冰河醣蛋白保濕霜',
              categoryLabel: '乳液/面霜',
              productCode: '#32',
              productName: 'Kiehl’s 契爾氏 冰河醣蛋白保濕霜',
              appliedRole: '兩頰深層鎖水面霜・防冷氣拔乾',
              targetZoneText: '【僅塗抹兩頰乾燥區】',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6A',
              instruction: '兩頰厚實按壓封層，防止乾癢。',
              technique: '【掌心溫熱厚敷封層手法】：取適量於指腹搓熱乳化，手掌貼合乾燥兩頰由內向外按壓厚抹，加強細胞間脂質修護，徹夜鎖住水分抵抗乾冷。',
              caution: '嚴禁塗抹於下巴出油處，避免滋潤度過高生成閉口。'
            },
            {
              id: `${prefix}-care-7`,
              title: '#26-2 MUJI 米糠發酵乳液',
              categoryLabel: '乳液/面霜',
              productCode: '#26-2',
              productName: 'MUJI 無印良品 米糠發酵乳液',
              appliedRole: '下巴唯一指定清爽水感乳液・避開厚霜',
              targetZoneText: '【僅下巴粉刺區薄擦】',
              amount: '僅需 1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6B',
              instruction: '下巴只薄擦清爽米糠乳液。',
              technique: '【指腹單層薄擦手法】：下巴唯一指定乳液！取 1 滴於食指腹，在水楊酸護理後的下巴薄薄抹勻一層即可，保持毛孔透氣與微生態平衡。'
            },
            {
              id: `${prefix}-care-8`,
              title: '#25-2 Acclear Cream 局部痘痘藥',
              categoryLabel: '局部急救',
              productCode: '#25-2',
              productName: 'Acclear Cream 局部痘痘藥膏',
              appliedRole: '若有發炎紅腫大痘局部點敷',
              targetZoneText: '【下巴紅腫發炎痘痘】',
              amount: '微量點塗',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 7 (選用)',
              instruction: '若下巴有發炎紅腫痘，最後局部厚敷點塗一小點。',
              technique: '【棉花棒定點厚敷手法】：精準點在紅腫痘痘頂端。'
            }
          ];

      const bodyLotion: StepItem = {
        id: `${prefix}-body-1`,
        title: '#B-01 寶拉 10% AHA 果酸身體乳',
        categoryLabel: '身體乳',
        productCode: '身-01',
        productName: 'Paula’s Choice 寶拉珍選 10% AHA 果酸身體乳',
        appliedRole: '週二夜間專用・代謝手臂毛囊角化顆粒與背部痘疤',
        targetZoneText: '手臂雞皮/背部痘疤局部',
        amount: '適量',
        timingCategory: 'night_body',
        timingLabel: '晚間身體護理',
        instruction: '洗澡擦乾後，局部擦拭手臂毛孔角化、背部暗沉處。',
        technique: '【局部順向塗抹手法】：針對手臂外側毛囊角化顆粒與背部痘疤處，取適量均勻塗抹打圈至吸收。'
      };

      return [...cleansingSteps, ...skincareSteps, bodyLotion];
    }

    case 'wed': {
      // Wednesday: 微晶激活夜 (VT 300)
      const cleansingSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-clean-1`,
              title: '#02 MUJI 無印良品 溫和卸妝油',
              categoryLabel: '洗卸',
              productCode: '#02',
              productName: 'MUJI 無印良品 溫和卸妝油',
              appliedRole: '功能夜主力卸妝・適用部位：全臉',
              targetZoneText: '全臉適用',
              amount: '按壓 2-3 泵',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 1',
              instruction: '乾手乾臉打圈按摩溶出彩妝與油脂，加少量溫水充分乳化沖淨。',
              technique: '【乾手乾臉乳化手法】：保持手部與臉部完全乾燥，取卸妝油均勻塗抹全臉，按摩乳化後沖淨，徹底擦乾水分。'
            },
            {
              id: `${prefix}-clean-2`,
              title: '#06 Relove Nrf2 胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#06',
              productName: 'Relove Nrf2 Ultimate Future 胺基酸潔面乳',
              appliedRole: '溫和洗面乳・徹底洗淨油脂殘留',
              targetZoneText: '全臉適用',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '綿密泡泡洗淨，用乾淨純棉柔巾輕柔徹底按乾面部水分。',
              technique: '【綿密泡泡潔面手法】：溫水搓出細緻泡泡洗淨，用乾淨毛巾輕柔按乾水分，保持面部徹底乾爽。'
            }
          ]
        : [
            {
              id: `${prefix}-clean-1`,
              title: '#03 DUO 麗優 溫和卸妝膏',
              categoryLabel: '洗卸',
              productCode: '#03',
              productName: 'DUO 麗優 溫和卸妝膏',
              appliedRole: '功能夜主力深層洗卸・適用部位：全臉',
              targetZoneText: '全臉適用',
              amount: '專用勺 1 勺',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 1',
              instruction: '乾手乾臉按摩打圈充分乳化沖淨，徹底擦乾水分。',
              technique: '【乾手乾臉乳化手法】：取卸妝膏均勻塗抹全臉按摩，充分乳化沖淨，以毛巾輕壓擦乾臉部。'
            },
            {
              id: `${prefix}-clean-2`,
              title: '#07 innisfree 綠茶保濕胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#07',
              productName: 'innisfree / 綠茶系列 綠茶保濕胺基酸潔面乳',
              appliedRole: '溫和洗臉・適用部位：全臉',
              targetZoneText: '全臉適用',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '溫水搓出細緻泡泡洗淨，按乾水分，保持面部乾爽。',
              technique: '【起泡潔面手法】：溫水搓出細緻泡泡洗淨，用乾淨純棉巾輕柔按乾水分。'
            }
          ];

      const skincareSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-care-1`,
              title: '#23 VT Reedle Shot 300 微晶精華',
              categoryLabel: '裸肌活性',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '#23',
              productName: 'VT Reedle Shot 300 微晶微針精華',
              appliedRole: '物理微針開啟微通道・裸肌全臉垂直乾壓',
              targetZoneText: '【裸肌全臉按壓，避開眼唇與紅腫痘】',
              amount: '1-2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1 (裸肌)',
              instruction: '臉部完全擦乾後乾壓全臉，不可大力揉搓。微刺感為針狀微晶開啟吸收通道。',
              technique: '【垂直乾壓微針手法】：臉部擦乾後第一步使用！取 1-2 泵於手指，以「由內向外垂直按壓」全臉，微刺感屬微米晶針正常作用。切忌來回用力揉搓摩擦！嚴格避開眼周、嘴唇與下巴紅腫發炎痘痘。',
              caution: '⚠️ 鐵則：微晶夜當晚嚴禁擦小紫瓶與 AQ 柔膚乳，避免油脂阻滯微針物理通道！'
            },
            {
              id: `${prefix}-care-2`,
              title: '#25 Medicube PDRN 粉紅胜肽安瓶',
              categoryLabel: '精華液',
              productCode: '#25',
              productName: 'Medicube PDRN 粉紅胜肽修護安瓶',
              appliedRole: '微針微通道開啟後深層修護・全臉純補水',
              targetZoneText: '全臉均勻塗抹',
              amount: '一整滴管',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '微針通道開啟後立即注入 PDRN，激發深層修護再生。',
              technique: '【順向延展吸附手法】：趁微針微通道開啟黃金期，立即將 PDRN 安瓶推勻全臉，指腹輕拍促進三文魚胜肽直達角質基底層。'
            },
            {
              id: `${prefix}-care-3`,
              title: '#35 雅詩蘭黛 特潤全能亮眼霜',
              categoryLabel: '眼霜',
              productCode: '#35',
              productName: 'Estee Lauder 雅詩蘭黛 特潤全能修護亮眼霜（小棕眼霜）',
              appliedRole: '眼周防禦與抗氧化滋養',
              targetZoneText: '眼周專用',
              amount: '米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '眼周輕按，滋養眼周細緻肌膚。',
              technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨，避免大力拉扯眼皮。'
            },
            {
              id: `${prefix}-care-4`,
              title: '#30 Dr. Reju-All PDRN 高效修復霜',
              categoryLabel: '乳液/面霜',
              isHighlighted: true,
              productCode: '#30',
              productName: 'Dr. Reju-All PDRN 高效修復霜',
              appliedRole: '微針後兩頰急速退紅厚封層',
              targetZoneText: '【兩頰厚塗封層】',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4A',
              instruction: '微晶後兩頰需厚厚塗抹修復霜，迅速退紅鎮靜。',
              technique: '【厚敷鎮靜封層手法】：取修復霜厚厚塗抹於兩頰泛紅處退紅鎮靜，加強微針後屏障封層。'
            },
            {
              id: `${prefix}-care-5`,
              title: '#26-2 MUJI 米糠發酵乳液',
              categoryLabel: '乳液/面霜',
              productCode: '#26-2',
              productName: 'MUJI 無印良品 米糠發酵乳液',
              appliedRole: '下巴唯一清爽控油乳液',
              targetZoneText: '【下巴薄擦】',
              amount: '1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4B',
              instruction: '下巴薄薄塗抹米糠乳液即可。',
              technique: '【指腹單層薄擦手法】：下巴薄擦一層米糠乳液保濕。'
            }
          ]
        : [
            {
              id: `${prefix}-care-1`,
              title: '#23 VT Reedle Shot 300 微晶精華',
              categoryLabel: '裸肌活性',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '#23',
              productName: 'VT Reedle Shot 300 微晶微針精華',
              appliedRole: '物理微針開啟微通道・裸肌全臉垂直乾壓',
              targetZoneText: '【裸肌全臉按壓，避開眼唇與紅腫痘】',
              amount: '1-2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1 (裸肌)',
              instruction: '臉部完全擦乾後乾壓全臉，開啟物理吸收微孔。',
              technique: '【垂直乾壓微針手法】：臉部擦乾後第一步使用！取 1-2 泵於手指，以「由內向外垂直按壓」全臉，微刺感屬微米晶針正常作用。切忌來回用力揉搓摩擦！嚴格避開眼周、嘴唇與下巴紅腫發炎痘痘。',
              caution: '⚠️ 鐵則：微晶夜當晚嚴禁擦小紫瓶與 AQ 柔膚乳，避免油脂阻滯微針物理通道！'
            },
            {
              id: `${prefix}-care-2`,
              title: '#25 Medicube PDRN 粉紅胜肽安瓶',
              categoryLabel: '精華液',
              productCode: '#25',
              productName: 'Medicube PDRN 粉紅胜肽修護安瓶',
              appliedRole: '微針微通道開啟後深層修護・注入三文魚胜肽',
              targetZoneText: '全臉均勻塗抹',
              amount: '一整滴管',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '全臉均勻塗抹 PDRN 胜肽安瓶。',
              technique: '【順向延展吸附手法】：趁微針微通道開啟黃金期，立即將 PDRN 安瓶推勻全臉，指腹輕拍促進三文魚胜肽直達角質基底層。'
            },
            {
              id: `${prefix}-care-3`,
              title: '#36 巴黎萊雅 紫熨斗 MAX 眼霜',
              categoryLabel: '眼霜',
              productCode: '#36',
              productName: 'L’Oreal 巴黎萊雅 玻尿酸撫紋眼霜 MAX（紫熨斗）',
              appliedRole: '玻色因深層澎潤眼周與撫紋',
              targetZoneText: '眼周專用',
              amount: '米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '輕按眼周。',
              technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨與法令紋，撫平細紋。'
            },
            {
              id: `${prefix}-care-4`,
              title: '#33 妮維雅 630 雙效淡斑晚霜',
              categoryLabel: '乳液/面霜',
              isHighlighted: true,
              productCode: '#33',
              productName: 'NIVEA 妮維雅 630 雙效淡斑修護晚霜',
              appliedRole: '利用微針通道倍增兩頰淡斑效果',
              targetZoneText: '【僅塗兩頰，嚴禁下巴】',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4A',
              instruction: '利用微晶微通道，在兩頰薄塗 630 晚霜，淡斑提亮效果倍增！',
              technique: '【指腹平滑延展封層手法】：偶數週利用微針通道在兩頰均勻抹開 630 晚霜，美白淡斑效果倍增，下巴嚴格避開。'
            },
            {
              id: `${prefix}-care-5`,
              title: '#26-2 MUJI 米糠發酵乳液',
              categoryLabel: '乳液/面霜',
              productCode: '#26-2',
              productName: 'MUJI 無印良品 米糠發酵乳液',
              appliedRole: '下巴唯一指定清爽乳液',
              targetZoneText: '【下巴薄擦】',
              amount: '1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4B',
              instruction: '下巴薄擦米糠乳液，避免滋潤致痘。',
              technique: '【指腹單層薄擦手法】：下巴薄擦 1 滴即可。'
            }
          ];

      const bodyLotion: StepItem = isOddWeek
        ? {
            id: `${prefix}-body-1`,
            title: '#B-04 Aveeno 燕麥優格保濕身體乳',
            categoryLabel: '身體乳',
            productCode: '身-04',
            productName: 'Aveeno 艾惟諾 燕麥優格保濕身體乳',
            appliedRole: '全身滋潤長效保濕',
            targetZoneText: '全身四肢',
            amount: '適量',
            timingCategory: 'night_body',
            timingLabel: '晚間身體護理',
            instruction: '洗澡擦乾後立即全身塗抹，舒緩秋冬溫差乾癢。',
            technique: '【全身大面積塗抹手法】：沐浴後趁肌膚微潤時均勻抹開。'
          }
        : {
            id: `${prefix}-body-1`,
            title: '#B-05 一日茶道 蜜柑紅茶透亮美體乳',
            categoryLabel: '身體乳',
            productCode: '身-05',
            productName: '一日茶道 TEAORY 蜜柑紅茶透亮美體乳',
            appliedRole: '全身放鬆美體乳・舒緩助眠',
            targetZoneText: '全身四肢',
            amount: '適量',
            timingCategory: 'night_body',
            timingLabel: '晚間身體護理',
            instruction: '洗澡後全身放鬆塗抹，蜜柑紅茶香氣舒緩助眠。',
            technique: '【全身大面積塗抹手法】：沐浴後全身均勻塗抹四肢與肩頸。'
          };

      return [...cleansingSteps, ...skincareSteps, bodyLotion];
    }

    case 'thu': {
      // Thursday: 儀器深層導入夜
      const cleansingSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-clean-1`,
              title: 'CHECK2CHECK 離子儀 ＋ #04 舒特膚潔膚水',
              categoryLabel: '美容儀/洗卸',
              productCode: '儀器 + #04',
              productName: 'CHECK2CHECK 離子超導儀 ＋ Cetaphil 舒特膚 胜肽潔膚水',
              appliedRole: '正離子模式全臉滑動 3 分鐘深層導出殘妝與髒污',
              targetZoneText: '全臉與下巴導出',
              amount: '浸濕 1 片化妝棉',
              timingCategory: 'night_cleansing',
              timingLabel: '洗卸導出 Step 1',
              instruction: '化妝棉沾濕舒特膚潔膚水夾於儀器上，正離子模式全臉滑動 3 分鐘導出殘妝與髒污。',
              technique: '【正離子導出清潔手法】：將棉片固定於探頭上，倒滿舒特膚潔膚水，開啟正離子導出模式，由面部中央向外側、由下往上緩慢滑動，下巴粉刺區加強打圈 30 秒。',
              timerDurationMinutes: 3,
              isKeyFocus: true
            },
            {
              id: `${prefix}-clean-2`,
              title: '#06 Relove Nrf2 胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#06',
              productName: 'Relove Nrf2 Ultimate Future 胺基酸潔面乳',
              appliedRole: '導出後溫和洗淨面部',
              targetZoneText: '全臉適用',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '溫水搓出細緻泡泡洗臉，純棉柔巾輕壓吸乾水分。',
              technique: '【起泡打圈潔面手法】：取黃豆大小加水搓揉出豐盈柔滑泡泡洗淨面部吸乾。'
            }
          ]
        : [
            {
              id: `${prefix}-clean-1`,
              title: 'CHECK2CHECK 離子儀 ＋ #04 舒特膚潔膚水',
              categoryLabel: '美容儀/洗卸',
              productCode: '儀器 + #04',
              productName: 'CHECK2CHECK 離子超導儀 ＋ Cetaphil 舒特膚 胜肽潔膚水',
              appliedRole: '正離子模式全臉滑動 3 分鐘導出殘妝髒污',
              targetZoneText: '全臉導出清潔',
              amount: '浸濕 1 片化妝棉',
              timingCategory: 'night_cleansing',
              timingLabel: '洗卸導出 Step 1',
              instruction: '正離子導出殘妝髒污 3 分鐘。',
              technique: '【正離子導出清潔手法】：棉片固定於探頭倒滿潔膚水，由內向外滑動導出殘留油脂。',
              timerDurationMinutes: 3,
              isKeyFocus: true
            },
            {
              id: `${prefix}-clean-2`,
              title: '#07 innisfree 綠茶保濕胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#07',
              productName: 'innisfree / 綠茶系列 綠茶保濕胺基酸潔面乳',
              appliedRole: '溫和洗面乳洗淨殘留',
              targetZoneText: '全臉適用',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '溫水細密泡沫洗淨面部，按乾水分。',
              technique: '【起泡打圈潔面手法】：溫水搓出細泡洗臉按乾。'
            }
          ];

      const skincareSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-care-1`,
              title: '#15 黛珂 小紫瓶超微導精粹',
              categoryLabel: '前導通道',
              isHighlighted: true,
              productCode: '#15',
              productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
              appliedRole: '洗臉後全臉手溫按壓開啟微脂囊通道',
              targetZoneText: '全臉手溫按壓',
              amount: '按壓 2-3 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1',
              instruction: '洗臉後全臉手溫按壓小紫瓶。',
              technique: '【掌心手溫覆蓋手法】：洗臉後立即以手心溫熱覆蓋全臉，微脂囊開啟角質通道。'
            },
            {
              id: `${prefix}-care-2`,
              title: '#28 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              categoryLabel: '先乳後水',
              isHighlighted: true,
              productCode: '#28',
              productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              appliedRole: '【先乳後水】僅塗抹兩頰乾燥區軟化角質',
              targetZoneText: '【僅塗抹兩頰乾燥區】',
              amount: '按壓 1-2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '按壓兩頰軟化角質，避開下巴。',
              technique: '【掌心軟化手法】：按壓塗抹於兩頰乾燥處軟化硬化角質層，避開下巴。'
            },
            {
              id: `${prefix}-care-3`,
              title: '#16 品木宣言 靈芝水',
              categoryLabel: '化妝水/噴霧',
              productCode: '#16',
              productName: 'ORIGINS 品木宣言 靈芝水',
              appliedRole: '全臉拍水打底',
              targetZoneText: '全臉拍水',
              amount: '十元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '全臉均勻拍打靈芝水。',
              technique: '【雙掌輕拍吸收手法】：倒於掌心，雙手輕拍全臉補足水分。'
            },
            {
              id: `${prefix}-care-4`,
              title: 'CHECK2CHECK 離子儀 ＋ #21 Torriden 玻尿酸',
              categoryLabel: '美容儀/精華',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '儀器 + #21',
              productName: 'CHECK2CHECK 離子超導儀 ＋ Torriden 5D 玻尿酸精華',
              appliedRole: '負離子溫感導入模式全臉滑動 5 分鐘深層注水',
              targetZoneText: '全臉深層超導導入',
              amount: '精華 1 滿管',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4 (超導)',
              instruction: '精華液塗抹全臉，開啟負離子溫感導入模式，由下往上滑動 5 分鐘。',
              technique: '【負離子超導溫感手法】：精華均勻塗滿全臉，手握感應電極片，儀器探頭以打圈並向上提拉方式滑動 5 分鐘，深層注入玻尿酸。',
              timerDurationMinutes: 5
            },
            {
              id: `${prefix}-care-5`,
              title: '#35 雅詩蘭黛 特潤全能亮眼霜',
              categoryLabel: '眼霜',
              productCode: '#35',
              productName: 'Estee Lauder 雅詩蘭黛 特潤全能修護亮眼霜（小棕眼霜）',
              appliedRole: '眼周滋養修護',
              targetZoneText: '眼周專用',
              amount: '米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5',
              instruction: '輕抹眼周。',
              technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨。'
            },
            {
              id: `${prefix}-care-6`,
              title: '#29-2 S.NATURE 水庫角鯊烷保濕霜',
              categoryLabel: '乳液/面霜',
              productCode: '#29-2',
              productName: 'S.NATURE 綠豆角鯊烷水分營養面霜',
              appliedRole: '兩頰手溫按壓鎖水面霜',
              targetZoneText: '【兩頰專用】',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6A',
              instruction: '兩頰手溫按壓鎖水。',
              technique: '【手掌溫熱按壓封層手法】：厚塗於兩頰乾燥起屑處，牢牢鎖住水分。'
            },
            {
              id: `${prefix}-care-7`,
              title: '#26-2 MUJI 米糠發酵乳液',
              categoryLabel: '乳液/面霜',
              productCode: '#26-2',
              productName: 'MUJI 無印良品 米糠發酵乳液',
              appliedRole: '下巴唯一清爽乳液',
              targetZoneText: '【下巴薄擦】',
              amount: '1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6B',
              instruction: '下巴清爽薄擦。',
              technique: '【指腹單層薄擦手法】：下巴薄擦 1 滴即可。'
            }
          ]
        : [
            {
              id: `${prefix}-care-1`,
              title: '#15 黛珂 小紫瓶超微導精粹',
              categoryLabel: '前導通道',
              isHighlighted: true,
              productCode: '#15',
              productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
              appliedRole: '洗臉後手溫包覆全臉按壓',
              targetZoneText: '全臉手溫按壓',
              amount: '按壓 2-3 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1',
              instruction: '手溫包覆全臉按壓。',
              technique: '【掌心手溫覆蓋手法】：洗臉後立即以手心溫熱覆蓋全臉開啟吸收通道。'
            },
            {
              id: `${prefix}-care-2`,
              title: '#28 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              categoryLabel: '先乳後水',
              isHighlighted: true,
              productCode: '#28',
              productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              appliedRole: '【先乳後水】僅塗抹兩頰乾燥區軟化角質',
              targetZoneText: '【僅塗抹兩頰乾燥區】',
              amount: '按壓 1-2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '按壓兩頰軟化角質，避開下巴。',
              technique: '【掌心軟化手法】：按壓塗抹於兩頰乾燥處軟化硬化角質層，避開下巴。'
            },
            {
              id: `${prefix}-care-3`,
              title: '#17 MUJI 無印良品 化妝水 清爽型',
              categoryLabel: '化妝水/噴霧',
              productCode: '#17',
              productName: 'MUJI 無印良品 化妝水（清爽型 / Light）',
              appliedRole: '拍拭全臉補充水分',
              targetZoneText: '全臉拍水',
              amount: '十元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '拍拭全臉補充水分。',
              technique: '【雙掌輕拍吸收手法】：倒於掌心，雙手輕拍全臉補足水分。'
            },
            {
              id: `${prefix}-care-4`,
              title: 'CHECK2CHECK 離子儀 ＋ #25 PDRN 安瓶',
              categoryLabel: '美容儀/精華',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '儀器 + #25',
              productName: 'CHECK2CHECK 離子超導儀 ＋ Medicube PDRN 粉紅胜肽安瓶',
              appliedRole: '開啟負離子模式導入 PDRN 安瓶 5 分鐘深層胜肽修護',
              targetZoneText: '全臉超導導入',
              amount: '安瓶 1 滿管',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4 (超導)',
              instruction: '開啟負離子模式導入 PDRN 安瓶 5 分鐘。',
              technique: '【負離子超導胜肽手法】：安瓶均勻抹於全臉，以負離子溫熱探頭緩慢由下往上提拉滑動 5 分鐘，激發深層緊緻。',
              timerDurationMinutes: 5
            },
            {
              id: `${prefix}-care-5`,
              title: '#36 巴黎萊雅 紫熨斗 MAX 眼霜',
              categoryLabel: '眼霜',
              productCode: '#36',
              productName: 'L’Oreal 巴黎萊雅 玻尿酸撫紋眼霜 MAX（紫熨斗）',
              appliedRole: '輕按眼周撫紋',
              targetZoneText: '眼周專用',
              amount: '米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5',
              instruction: '輕按眼周。',
              technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨與法令紋。'
            },
            {
              id: `${prefix}-care-6`,
              title: '#32 契爾氏 冰河醣蛋白保濕霜',
              categoryLabel: '乳液/面霜',
              productCode: '#32',
              productName: 'Kiehl’s 契爾氏 冰河醣蛋白保濕霜',
              appliedRole: '兩頰按壓厚實封層',
              targetZoneText: '【兩頰專用】',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6A',
              instruction: '兩頰按壓封層。',
              technique: '【掌心溫熱厚敷封層手法】：取面霜於指腹搓熱，手掌貼合乾燥兩頰由內向外按壓厚抹封層。'
            },
            {
              id: `${prefix}-care-7`,
              title: '#26-2 MUJI 米糠發酵乳液',
              categoryLabel: '乳液/面霜',
              productCode: '#26-2',
              productName: 'MUJI 無印良品 米糠發酵乳液',
              appliedRole: '下巴薄擦清爽控油',
              targetZoneText: '【下巴薄擦】',
              amount: '1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6B',
              instruction: '下巴薄擦米糠乳。',
              technique: '【指腹單層薄擦手法】：下巴薄擦 1 滴即可。'
            }
          ];

      const bodyLotion: StepItem = {
        id: `${prefix}-body-1`,
        title: '#B-02 NIVEA 亮白極致嫩膚乳液',
        categoryLabel: '身體乳',
        productCode: '身-02',
        productName: 'NIVEA 妮維雅 亮白極致嫩膚乳液',
        appliedRole: '週四塗抹全身四肢・亮白身體肌膚',
        targetZoneText: '全身四肢',
        amount: '適量',
        timingCategory: 'night_body',
        timingLabel: '晚間身體護理',
        instruction: '四肢全身均勻塗抹，維他命 C 衍生物提亮身體膚色。',
        technique: '【全身大面積塗抹手法】：均勻塗抹四肢手腳與手肘關節暗沉處。'
      };

      return [...cleansingSteps, ...skincareSteps, bodyLotion];
    }

    case 'fri': {
      // Friday: A 醇微晶抗老夜
      const cleansingSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-clean-1`,
              title: '#05 Capsule Serum 維C去角質卸妝凝膠',
              categoryLabel: '洗卸',
              productCode: '#05',
              productName: 'Capsule Serum 維他命 C 去角質護理卸妝潔面凝膠',
              appliedRole: '素顏防曬溫和洗卸・適用部位：全臉',
              targetZoneText: '全臉',
              amount: '適量',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 1',
              instruction: '凝膠遇水乳化帶走日間防曬與氧化皮脂。',
              technique: '【輕揉溫水沖淨手法】：凝膠遇水乳化帶走日間防曬與氧化皮脂，維持肌膚角質屏障完整。'
            },
            {
              id: `${prefix}-clean-2`,
              title: '#06 Relove Nrf2 胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#06',
              productName: 'Relove Nrf2 Ultimate Future 胺基酸潔面乳',
              appliedRole: '溫和洗面乳潔顏',
              targetZoneText: '全臉',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '搓揉細緻泡沫洗淨，棉柔巾輕壓擦乾。',
              technique: '【起泡打圈潔面手法】：溫水搓出細緻泡泡洗淨，按乾水分。'
            }
          ]
        : [
            {
              id: `${prefix}-clean-1`,
              title: '#03 DUO 麗優 溫和卸妝膏',
              categoryLabel: '洗卸',
              productCode: '#03',
              productName: 'DUO 麗優 溫和卸妝膏',
              appliedRole: '功能夜主力洗卸',
              targetZoneText: '全臉',
              amount: '1 勺',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 1',
              instruction: '乾手乾臉打圈按摩充分乳化沖淨。',
              technique: '【乾手乾臉乳化手法】：取卸妝膏塗抹全臉按摩溶出彩妝與油脂，加溫水充分乳化沖淨。'
            },
            {
              id: `${prefix}-clean-2`,
              title: '#07 innisfree 綠茶保濕胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#07',
              productName: 'innisfree / 綠茶系列 綠茶保濕胺基酸潔面乳',
              appliedRole: '溫和洗臉・適用部位：全臉',
              targetZoneText: '全臉',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '溫水搓出細緻泡泡洗臉，純棉柔巾吸乾水分。',
              technique: '【起泡潔面手法】：泡沫洗淨全臉按乾。'
            }
          ];

      const skincareSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-care-1`,
              title: '#15 黛珂 小紫瓶超微導精粹',
              categoryLabel: '前導通道',
              isHighlighted: true,
              productCode: '#15',
              productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
              appliedRole: '微脂囊打底緩衝・適用部位：全臉',
              targetZoneText: '全臉按壓',
              amount: '按壓 2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1',
              instruction: '洗臉後按壓全臉，提供肌底水分緩衝。',
              technique: '【手溫輕按手法】：按壓 2 泵手溫包覆全臉，為後續高活性 A 醇建立溫和保濕緩衝層。'
            },
            {
              id: `${prefix}-care-2`,
              title: '#16 品木宣言 靈芝水',
              categoryLabel: '化妝水/噴霧',
              productCode: '#16',
              productName: 'ORIGINS 品木宣言 靈芝水',
              appliedRole: '水相打底保濕・【當晚停用 #28 AQ 乳液】',
              targetZoneText: '全臉輕拍',
              amount: '十元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '輕拍靈芝水補水。【注意：當晚停用 #28 AQ 乳液，避免過多親脂油脂干擾 A 醇吸收】。',
              technique: '【輕拍水相手法】：輕拍化妝水補足水分。【注意：當晚停用 #28 AQ 乳液，避免過多親脂油脂形成阻隔層干擾 A 醇吸收】。',
              caution: '⚠️ 鐵則：週五 A 醇微晶夜停用 #28 黛珂 AQ 柔膚乳，避免油脂阻滯 A 醇活性分子滲透！'
            },
            {
              id: `${prefix}-care-3`,
              title: '#35 雅詩蘭黛 特潤全能亮眼霜',
              categoryLabel: '眼霜',
              isKeyFocus: true,
              productCode: '#35',
              productName: 'Estee Lauder 雅詩蘭黛 特潤全能修護亮眼霜（小棕眼霜）',
              appliedRole: '【擦 A 醇前優先塗好眼周】安全隔離防護障壁',
              targetZoneText: '【眼周優先隔離塗抹】',
              amount: '各取米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '在擦 A 醇前，先將眼霜塗抹於眼周作為保護層，防止 A 醇擴散刺激脆弱眼皮。',
              technique: '【環形點壓隔離手法】：擦 A 醇前「務必先將眼霜塗好眼周」，建立滋潤安全屏障，防止 A 醇微晶擴散刺激眼皮。',
              caution: '⚠️ 鐵則：擦 A 醇前務必先塗好眼周隔離！'
            },
            {
              id: `${prefix}-care-4`,
              title: '#24 Celimax 唯美緻 A 醇微晶精華',
              categoryLabel: '精華液',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '#24',
              productName: 'Celimax 唯美緻 A 醇微晶精華',
              appliedRole: '真皮膠原刺激與撫紋抗老核心・全臉避開眼唇與痘痘',
              targetZoneText: '【全臉按壓，豌豆大小】',
              amount: '【僅取一顆豌豆大小】',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4 (核心)',
              instruction: '僅取豌豆大小按壓全臉，避開眼周、嘴角與下巴紅腫痘，抗老撫紋。',
              technique: '【指腹均勻按壓手法】：僅取豌豆大小點於額頭、兩頰與下巴無痘區，以指腹均勻輕柔按壓延展，切勿貪多！避開眼周與發炎紅腫痘痘。',
              caution: '⚠️ 鐵則：嚴格維持豌豆大小，建立肌膚耐受性，切勿同晚疊擦水楊酸或微針！'
            },
            {
              id: `${prefix}-care-5`,
              title: '#29-2 S.NATURE 水庫角鯊烷保濕霜',
              categoryLabel: '乳液/面霜',
              productCode: '#29-2',
              productName: 'S.NATURE 綠豆角鯊烷水分營養面霜',
              appliedRole: 'A 醇後溫和全面封層鎖水・舒緩防脫皮',
              targetZoneText: '全臉溫和包覆',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5',
              instruction: '手溫融化面霜，輕柔包覆全臉封層，舒緩 A 醇乾燥。',
              technique: '【掌心溫和包覆手法】：取面霜於掌心搓勻，手溫輕柔覆蓋全臉，修護表皮角質屏障，降低 A 醇可能的乾燥起屑。'
            }
          ]
        : [
            {
              id: `${prefix}-care-1`,
              title: '#15 黛珂 小紫瓶超微導精粹',
              categoryLabel: '前導通道',
              isHighlighted: true,
              productCode: '#15',
              productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
              appliedRole: '手溫包覆全臉按壓打底緩衝',
              targetZoneText: '全臉手溫按壓',
              amount: '按壓 2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1',
              instruction: '手溫覆蓋全臉按壓建立緩衝。',
              technique: '【手溫輕按手法】：按壓 2 泵手溫包覆全臉，為後續高活性 A 醇建立溫和保濕緩衝層。'
            },
            {
              id: `${prefix}-care-2`,
              title: '#17 MUJI 無印良品 化妝水 清爽型',
              categoryLabel: '化妝水/噴霧',
              productCode: '#17',
              productName: 'MUJI 無印良品 化妝水（清爽型 / Light）',
              appliedRole: '清爽水相補水打底・【當晚停用 #28 AQ 乳液】',
              targetZoneText: '全臉拍水',
              amount: '十元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '全臉輕拍水相補水；【鐵則：當晚停用 #28 AQ 乳液】。',
              technique: '【輕拍水相手法】：輕拍化妝水補足水分。【當晚停用 #28 AQ 乳液】。',
              caution: '⚠️ 鐵則：週五 A 醇微晶夜停用 #28 黛珂 AQ 柔膚乳！'
            },
            {
              id: `${prefix}-care-3`,
              title: '#36 巴黎萊雅 紫熨斗 MAX 眼霜',
              categoryLabel: '眼霜',
              isKeyFocus: true,
              productCode: '#36',
              productName: 'L’Oreal 巴黎萊雅 玻尿酸撫紋眼霜 MAX（紫熨斗）',
              appliedRole: '【擦 A 醇前優先塗好眼周隔離】',
              targetZoneText: '【眼周優先隔離塗抹】',
              amount: '米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '擦 A 醇前務必先將眼霜塗好眼周隔離。',
              technique: '【環形點壓隔離手法】：擦 A 醇前務必先塗好眼周建立隔離屏障。',
              caution: '⚠️ 鐵則：擦 A 醇前務必先塗好眼周隔離！'
            },
            {
              id: `${prefix}-care-4`,
              title: '#24 Celimax 唯美緻 A 醇微晶精華',
              categoryLabel: '精華液',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '#24',
              productName: 'Celimax 唯美緻 A 醇微晶精華',
              appliedRole: '核心抗老精華・全臉避開眼唇與痘痘',
              targetZoneText: '【全臉按壓，豌豆大小】',
              amount: '【僅取一顆豌豆大小】',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4 (核心)',
              instruction: '取豌豆大小按壓全臉，避開眼周與發炎紅腫痘。',
              technique: '【指腹均勻按壓手法】：僅取豌豆大小點於額頭、兩頰與下巴無痘區輕柔按壓延展，切勿貪多。',
              caution: '⚠️ 鐵則：嚴格維持豌豆大小，切勿同晚疊擦水楊酸或微針！'
            },
            {
              id: `${prefix}-care-5`,
              title: '#32 契爾氏 冰河醣蛋白保濕霜',
              categoryLabel: '乳液/面霜',
              productCode: '#32',
              productName: 'Kiehl’s 契爾氏 冰河醣蛋白保濕霜',
              appliedRole: 'A 醇後全面溫和封層面霜',
              targetZoneText: '全臉溫和包覆',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5',
              instruction: '全臉溫和包覆按壓封層。',
              technique: '【掌心溫和包覆手法】：取面霜於掌心搓勻，手溫輕柔覆蓋全臉，修護表皮角質屏障。'
            }
          ];

      const bodyLotion: StepItem = isOddWeek
        ? {
            id: `${prefix}-body-1`,
            title: '#B-04 Aveeno 燕麥優格保濕身體乳',
            categoryLabel: '身體乳',
            productCode: '身-04',
            productName: 'Aveeno 艾惟諾 燕麥優格保濕身體乳',
            appliedRole: '全身滋潤長效保濕',
            targetZoneText: '全身四肢',
            amount: '適量',
            timingCategory: 'night_body',
            timingLabel: '晚間身體護理',
            instruction: '洗澡擦乾後立即全身塗抹，舒緩秋冬溫差乾癢。',
            technique: '【全身大面積塗抹手法】：沐浴後趁肌膚微潤時均勻抹開。'
          }
        : {
            id: `${prefix}-body-1`,
            title: '#B-05 一日茶道 蜜柑紅茶透亮美體乳',
            categoryLabel: '身體乳',
            productCode: '身-05',
            productName: '一日茶道 TEAORY 蜜柑紅茶透亮美體乳',
            appliedRole: '全身放鬆美體乳・舒緩助眠',
            targetZoneText: '全身四肢',
            amount: '適量',
            timingCategory: 'night_body',
            timingLabel: '晚間身體護理',
            instruction: '洗澡後全身放鬆塗抹，蜜柑紅茶香氣舒緩助眠。',
            technique: '【全身大面積塗抹手法】：沐浴後全身均勻塗抹四肢與肩頸。'
          };

      return [...cleansingSteps, ...skincareSteps, bodyLotion];
    }

    case 'sat': {
      // Saturday: 週末去角質與淨膚夜 / 美白提亮
      const cleansingSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-clean-1`,
              title: '#02 MUJI 無印良品 溫和卸妝油',
              categoryLabel: '洗卸',
              productCode: '#02',
              productName: 'MUJI 無印良品 溫和卸妝油',
              appliedRole: '卸除彩妝，充分乳化沖淨',
              targetZoneText: '全臉適用',
              amount: '按壓 2-3 泵',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 1',
              instruction: '乾手乾臉打圈按摩溶出彩妝與油脂，加少量溫水充分乳化沖淨。',
              technique: '【乾手乾臉乳化手法】：取卸妝油塗抹全臉按摩，充分乳化沖淨。'
            },
            {
              id: `${prefix}-clean-2`,
              title: '#08 綠番茄毛孔緊緻洗面乳',
              categoryLabel: '洗卸',
              isKeyFocus: true,
              productCode: '#08',
              productName: 'SUNGBOON EDITOR 綠番茄毛孔緊緻深層潔面乳',
              appliedRole: '【局部洗下巴與鼻翼】深層淨化緊緻毛孔',
              targetZoneText: '【局部搓揉下巴與鼻翼毛孔】',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '取適量搓揉，局部加強下巴粉刺與鼻翼毛孔洗淨。',
              technique: '【局部毛孔深層洗顏手法】：加水搓出微泡，專注於下巴粉刺與鼻翼黑頭輕柔打圈 30 秒，洗出毛孔髒污沖淨。'
            }
          ]
        : [
            {
              id: `${prefix}-clean-1`,
              title: '#03 DUO 麗優 溫和卸妝膏',
              categoryLabel: '洗卸',
              productCode: '#03',
              productName: 'DUO 麗優 溫和卸妝膏',
              appliedRole: '功能夜主力洗卸',
              targetZoneText: '全臉適用',
              amount: '1 勺',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 1',
              instruction: '乾手乾臉打圈乳化沖淨。',
              technique: '【乾手乾臉乳化手法】：取 1 勺膏體塗抹全臉按摩溶出彩妝，乳化沖淨。'
            },
            {
              id: `${prefix}-clean-2`,
              title: '#07 innisfree 綠茶保濕胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#07',
              productName: 'innisfree / 綠茶系列 綠茶保濕胺基酸潔面乳',
              appliedRole: '日常溫和泡沫潔顏',
              targetZoneText: '全臉適用',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '溫水洗淨吸乾。',
              technique: '【起泡潔面手法】：溫水搓出細緻泡泡洗臉按乾。'
            }
          ];

      const skincareSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-care-1`,
              title: '#11 Medicube PDRN 緊緻保濕棉片',
              categoryLabel: '面膜/棉片',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '#11',
              productName: 'Medicube PDRN 粉紅胜肽緊緻保濕棉片',
              appliedRole: '【濕敷兩頰 8-10 分鐘】深層補水退紅舒緩',
              targetZoneText: '【濕敷兩頰 8-10 分鐘】',
              amount: '兩頰各敷 1 片',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1',
              instruction: '兩頰各敷 1 片 8-10 分鐘，迅速退紅補水。',
              technique: '【棉片局部濕敷手法】：取出兩片棉片緊密貼合於乾燥兩頰，靜置 8-10 分鐘取下，輕拍精華至吸收。',
              timerDurationMinutes: 8
            },
            {
              id: `${prefix}-care-2`,
              title: '#15 黛珂 小紫瓶超微導精粹',
              categoryLabel: '前導通道',
              isHighlighted: true,
              productCode: '#15',
              productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
              appliedRole: '全臉手溫按壓開啟微脂囊通道',
              targetZoneText: '全臉手溫按壓',
              amount: '按壓 2-3 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '全臉手溫按壓 2-3 泵開啟通道。',
              technique: '【掌心手溫覆蓋手法】：洗臉後立即以手心溫熱覆蓋全臉開啟吸收通道。'
            },
            {
              id: `${prefix}-care-3`,
              title: '#28 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              categoryLabel: '先乳後水',
              isHighlighted: true,
              productCode: '#28',
              productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              appliedRole: '【先乳後水】僅塗抹兩頰乾燥區軟化角質',
              targetZoneText: '【僅塗抹兩頰乾燥區】',
              amount: '按壓 1-2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '按壓兩頰軟化角質，避開下巴。',
              technique: '【掌心軟化手法】：按壓塗抹於兩頰乾燥處軟化硬化角質層，避開下巴。'
            },
            {
              id: `${prefix}-care-4`,
              title: '#16 品木宣言 靈芝水',
              categoryLabel: '化妝水/噴霧',
              productCode: '#16',
              productName: 'ORIGINS 品木宣言 靈芝水',
              appliedRole: '接續 AQ 乳後水相補水',
              targetZoneText: '全臉拍水',
              amount: '十元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4',
              instruction: '全臉輕拍補水。',
              technique: '【雙掌輕拍吸收手法】：雙手輕拍全臉補足水分子。'
            },
            {
              id: `${prefix}-care-5`,
              title: '#20 黛珂 極光煥采精粹 1.8X',
              categoryLabel: '精華液',
              productCode: '#20',
              productName: 'COSME DECORTE 黛珂 極光煥采精粹 1.8X',
              appliedRole: '全臉美白提亮',
              targetZoneText: '全臉適用',
              amount: '按壓 1 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5',
              instruction: '均勻塗抹全臉提亮抗暗黃。',
              technique: '【指腹平滑延展手法】：由中央往外側輕輕塗勻全臉。'
            },
            {
              id: `${prefix}-care-6`,
              title: '#35 雅詩蘭黛 特潤全能亮眼霜',
              categoryLabel: '眼霜',
              productCode: '#35',
              productName: 'Estee Lauder 雅詩蘭黛 特潤全能修護亮眼霜（小棕眼霜）',
              appliedRole: '眼周保養撫紋',
              targetZoneText: '眼周專用',
              amount: '米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6',
              instruction: '無名指輕點眼周。',
              technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨。'
            },
            {
              id: `${prefix}-care-7`,
              title: '#31 黛珂 超微導全能修護霜（紫霜）',
              categoryLabel: '乳液/面霜',
              isHighlighted: true,
              productCode: '#31',
              productName: 'COSME DECORTE 黛珂 超微導全能修護霜（紫霜）',
              appliedRole: '【兩頰專用】1 兆微脂囊徹夜密集修護',
              targetZoneText: '【兩頰厚塗封層】',
              amount: '珍珠大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 7A',
              instruction: '兩頰取紫霜厚塗按壓，1 兆微脂囊徹夜密集滋養。',
              technique: '【微脂囊封層手法】：取珍珠大小於指腹搓熱，手掌由內向外按壓包覆兩頰，修護屏障。'
            },
            {
              id: `${prefix}-care-8`,
              title: '#26-2 MUJI 米糠發酵乳液',
              categoryLabel: '乳液/面霜',
              productCode: '#26-2',
              productName: 'MUJI 無印良品 米糠發酵乳液',
              appliedRole: '下巴唯一清爽乳液',
              targetZoneText: '【下巴薄擦】',
              amount: '1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 7B',
              instruction: '下巴薄擦米糠乳。',
              technique: '【指腹單層薄擦手法】：下巴薄擦 1 滴即可。'
            }
          ]
        : [
            {
              id: `${prefix}-care-1`,
              title: '#15 黛珂 小紫瓶超微導精粹',
              categoryLabel: '前導通道',
              isHighlighted: true,
              productCode: '#15',
              productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
              appliedRole: '開啟微脂囊通道',
              targetZoneText: '全臉手溫按壓',
              amount: '按壓 2-3 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1',
              instruction: '全臉手溫按壓開啟微脂囊通道。',
              technique: '【掌心手溫覆蓋手法】：洗臉後立即以手心溫熱覆蓋全臉開啟吸收通道。'
            },
            {
              id: `${prefix}-care-2`,
              title: '#28 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              categoryLabel: '先乳後水',
              isHighlighted: true,
              productCode: '#28',
              productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              appliedRole: '【先乳後水】僅塗抹兩頰乾燥區軟化角質',
              targetZoneText: '【僅塗抹兩頰乾燥區】',
              amount: '按壓 1-2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '按壓兩頰軟化角質，避開下巴。',
              technique: '【掌心軟化手法】：按壓塗抹於兩頰乾燥處軟化硬化角質層，避開下巴。'
            },
            {
              id: `${prefix}-care-3`,
              title: '#17 MUJI 無印良品 化妝水 清爽型',
              categoryLabel: '化妝水/噴霧',
              productCode: '#17',
              productName: 'MUJI 無印良品 化妝水（清爽型 / Light）',
              appliedRole: '全臉拍水補水',
              targetZoneText: '全臉拍水',
              amount: '十元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '全臉拍水。',
              technique: '【雙掌輕拍吸收手法】：倒於掌心，雙手輕拍全臉補足水分。'
            },
            {
              id: `${prefix}-care-4`,
              title: '#20 黛珂 極光煥采精粹 1.8X',
              categoryLabel: '精華液',
              productCode: '#20',
              productName: 'COSME DECORTE 黛珂 極光煥采精粹 1.8X',
              appliedRole: '全臉均勻塗抹美白提亮',
              targetZoneText: '全臉適用',
              amount: '按壓 1 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4',
              instruction: '均勻塗抹全臉美白提亮。',
              technique: '【指腹平滑延展手法】：由中央往外側輕輕塗勻全臉。'
            },
            {
              id: `${prefix}-care-5`,
              title: '#36 巴黎萊雅 紫熨斗 MAX 眼霜',
              categoryLabel: '眼霜',
              productCode: '#36',
              productName: 'L’Oreal 巴黎萊雅 玻尿酸撫紋眼霜 MAX（紫熨斗）',
              appliedRole: '眼周撫紋輕按',
              targetZoneText: '眼周專用',
              amount: '米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5',
              instruction: '輕按眼周。',
              technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨與法令紋。'
            },
            {
              id: `${prefix}-care-6`,
              title: '#32 契爾氏 冰河醣蛋白保濕霜',
              categoryLabel: '乳液/面霜',
              productCode: '#32',
              productName: 'Kiehl’s 契爾氏 冰河醣蛋白保濕霜',
              appliedRole: '兩頰厚實按壓封層鎖水',
              targetZoneText: '【兩頰專用】',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6A',
              instruction: '兩頰按壓厚實封層鎖水。',
              technique: '【掌心溫熱厚敷封層手法】：取面霜於指腹搓熱，手掌貼合乾燥兩頰由內向外按壓厚抹封層。'
            },
            {
              id: `${prefix}-care-7`,
              title: '#26-2 MUJI 米糠發酵乳液',
              categoryLabel: '乳液/面霜',
              productCode: '#26-2',
              productName: 'MUJI 無印良品 米糠發酵乳液',
              appliedRole: '下巴薄擦清爽防閉口',
              targetZoneText: '【下巴薄擦】',
              amount: '1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6B',
              instruction: '下巴薄擦米糠乳。',
              technique: '【指腹單層薄擦手法】：下巴薄擦 1 滴即可。'
            }
          ];

      const bodyLotion: StepItem = {
        id: `${prefix}-body-1`,
        title: '#B-02 NIVEA 亮白極致嫩膚乳液',
        categoryLabel: '身體乳',
        productCode: '身-02',
        productName: 'NIVEA 妮維雅 亮白極致嫩膚乳液',
        appliedRole: '週六塗抹全身四肢・亮白身體肌膚',
        targetZoneText: '全身四肢',
        amount: '適量',
        timingCategory: 'night_body',
        timingLabel: '晚間身體護理',
        instruction: '四肢全身均勻塗抹，提亮身體膚色。',
        technique: '【全身大面積塗抹手法】：均勻塗抹四肢手腳與手肘關節暗沉處。'
      };

      return [...cleansingSteps, ...skincareSteps, bodyLotion];
    }

    case 'sun': {
      // Sunday: 深度面膜夜
      const cleansingSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-clean-1`,
              title: '#02 MUJI 溫和卸妝油 / 卸妝品',
              categoryLabel: '洗卸',
              productCode: '#02',
              productName: 'MUJI 無印良品 溫和卸妝油',
              appliedRole: '溫和卸除日常與戶外髒污',
              targetZoneText: '全臉',
              amount: '按壓 2 泵',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 1',
              instruction: '溫和卸妝乳化沖淨。',
              technique: '【乾手乾臉乳化手法】：取卸妝油按摩臉部乳化沖淨。'
            },
            {
              id: `${prefix}-clean-2`,
              title: '#06 Relove Nrf2 胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#06',
              productName: 'Relove Nrf2 Ultimate Future 胺基酸潔面乳',
              appliedRole: '綿密泡沫洗臉吸乾',
              targetZoneText: '全臉',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 2',
              instruction: '綿密泡沫洗臉吸乾。',
              technique: '【起泡潔面手法】：溫水搓出細緻泡泡洗臉按乾。'
            }
          ]
        : [
            {
              id: `${prefix}-clean-1`,
              title: '#03 DUO 麗優 溫和卸妝膏',
              categoryLabel: '洗卸',
              productCode: '#03',
              productName: 'DUO 麗優 溫和卸妝膏',
              appliedRole: '功能夜主力洗卸',
              targetZoneText: '全臉',
              amount: '1 勺',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 1',
              instruction: '乾手乾臉打圈乳化沖淨。',
              technique: '【乾手乾臉乳化手法】：取卸妝膏塗抹全臉按摩溶出彩妝，乳化沖淨。'
            },
            {
              id: `${prefix}-clean-2`,
              title: '#09 Kanebo suisai 酵素洗顏粉',
              categoryLabel: '洗卸',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '#09',
              productName: 'Kanebo 佳麗寶 suisai 淨透酵素洗顏粉',
              appliedRole: '【僅下巴/鼻翼局部洗淨】溶解黑頭角栓',
              targetZoneText: '【僅下巴/鼻翼局部洗淨】',
              amount: '半顆粉末',
              timingCategory: 'night_cleansing',
              timingLabel: '洗卸程序 Step 2',
              instruction: '取半顆粉末加水打泡，局部按摩下巴粉刺與鼻翼黑頭，沖洗乾淨。',
              technique: '【局部酵素打圈手法】：倒半顆粉末於掌心加溫水搓揉出細緻綿密泡沫，專注於下巴粉刺與鼻翼黑頭處畫圈揉搓 30 秒，蛋白分解酵素能深層溶解頑固角栓，以溫水沖淨。',
              caution: '⚠️ 鐵則：suisai 酵素洗顏粉僅限下巴與鼻翼局部洗滌，切勿洗兩頰乾燥處！'
            },
            {
              id: `${prefix}-clean-3`,
              title: '#07 innisfree 綠茶保濕胺基酸潔面乳',
              categoryLabel: '洗卸',
              productCode: '#07',
              productName: 'innisfree / 綠茶系列 綠茶保濕胺基酸潔面乳',
              appliedRole: '全臉泡沫溫和洗淨吸乾',
              targetZoneText: '全臉',
              amount: '黃豆大小',
              timingCategory: 'night_cleansing',
              timingLabel: '晚間洗卸 Step 3',
              instruction: '全臉泡沫溫和洗淨吸乾。',
              technique: '【起泡潔面手法】：溫水搓出細緻泡泡洗臉按乾。'
            }
          ];

      const skincareSteps: StepItem[] = isOddWeek
        ? [
            {
              id: `${prefix}-care-1`,
              title: '#14 一般日常保濕面膜',
              categoryLabel: '面膜/棉片',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '#14',
              productName: '一般日常舒緩保濕面膜',
              appliedRole: '【全臉敷 15 分鐘】深層注入保濕精華',
              targetZoneText: '【全臉敷 15 分鐘】',
              amount: '1 片',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1',
              instruction: '洗臉後全臉敷上面膜 15 分鐘，深層注入玻尿酸保濕精華。',
              technique: '【面膜服貼敷臉手法】：面膜由額頭向下平整貼合全臉，用指腹排除氣泡，靜置 15 分鐘後由下往上輕輕揭除，殘留精華手溫按壓至完全吸收。',
              timerDurationMinutes: 15
            },
            {
              id: `${prefix}-care-2`,
              title: '#15 黛珂 小紫瓶超微導精粹',
              categoryLabel: '前導通道',
              isHighlighted: true,
              productCode: '#15',
              productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
              appliedRole: '面膜取下後全臉手溫輕壓吸收',
              targetZoneText: '全臉手溫按壓',
              amount: '按壓 2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '面膜揭下後手溫按壓小紫瓶。',
              technique: '【掌心手溫覆蓋手法】：以手心溫熱覆蓋全臉，微脂囊開啟角質通道。'
            },
            {
              id: `${prefix}-care-3`,
              title: '#28 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              categoryLabel: '先乳後水',
              isHighlighted: true,
              productCode: '#28',
              productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              appliedRole: '【先乳後水】僅塗抹兩頰乾燥區',
              targetZoneText: '【僅塗抹兩頰乾燥區】',
              amount: '按壓 1-2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '按壓兩頰軟化角質，避開下巴。',
              technique: '【掌心軟化手法】：按壓塗抹於兩頰乾燥處軟化硬化角質層，避開下巴。'
            },
            {
              id: `${prefix}-care-4`,
              title: '#12 Goodal 綠橘子維他命 C 淡斑眼膜',
              categoryLabel: '眼霜/眼膜',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '#12',
              productName: 'Goodal 綠橘子維他命 C 淡斑眼膜',
              appliedRole: '【眼下敷 10 分鐘】密集淡斑淡化黑眼圈',
              targetZoneText: '【眼下敷 10 分鐘】',
              amount: '左右眼各 1 片',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4',
              instruction: '貼於眼下暗沉與細紋處 10 分鐘，淡化黑眼圈。',
              technique: '【眼膜貼合手法】：將眼膜平整敷在眼下乾紋與黑眼圈處，靜敷 10 分鐘取下。',
              timerDurationMinutes: 10
            },
            {
              id: `${prefix}-care-5`,
              title: '#35 雅詩蘭黛 特潤全能亮眼霜',
              categoryLabel: '眼霜',
              productCode: '#35',
              productName: 'Estee Lauder 雅詩蘭黛 特潤全能修護亮眼霜（小棕眼霜）',
              appliedRole: '眼膜取下後輕抹眼霜鎖水',
              targetZoneText: '眼周專用',
              amount: '米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5',
              instruction: '眼膜取下後輕抹眼霜鎖住水分。',
              technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨。'
            },
            {
              id: `${prefix}-care-6`,
              title: '#29-2 S.NATURE 水庫角鯊烷保濕霜',
              categoryLabel: '乳液/面霜',
              productCode: '#29-2',
              productName: 'S.NATURE 綠豆角鯊烷水分營養面霜',
              appliedRole: '兩頰角鯊霜按壓封層',
              targetZoneText: '【兩頰專用】',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6A',
              instruction: '兩頰手溫按壓角鯊霜。',
              technique: '【手掌溫熱按壓封層手法】：厚塗於兩頰乾燥起屑處，牢牢鎖住水分。'
            },
            {
              id: `${prefix}-care-7`,
              title: '#26-2 MUJI 米糠發酵乳液',
              categoryLabel: '乳液/面霜',
              productCode: '#26-2',
              productName: 'MUJI 無印良品 米糠發酵乳液',
              appliedRole: '下巴唯一清爽乳液',
              targetZoneText: '【下巴薄擦】',
              amount: '1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 6B',
              instruction: '下巴薄擦米糠乳。',
              technique: '【指腹單層薄擦手法】：下巴薄擦 1 滴即可。'
            }
          ]
        : [
            {
              id: `${prefix}-care-1`,
              title: '#13 Quality 1st AZ100 藍瓶痘痘面膜',
              categoryLabel: '面膜/棉片',
              isHighlighted: true,
              isKeyFocus: true,
              productCode: '#13',
              productName: 'Quality 1st 皇后的秘密 AZ100 壬二酸抗痘面膜 (藍瓶)',
              appliedRole: '【全臉敷 10-15 分鐘】高濃度壬二酸安撫痘痘閉口',
              targetZoneText: '【全臉敷 10-15 分鐘】',
              amount: '1 片',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 1',
              instruction: '高濃度壬二酸面膜敷全臉，全面安撫閉口與粉刺。',
              technique: '【面膜服貼敷臉手法】：面膜平整敷貼全臉，排除氣泡靜敷 10-15 分鐘取下，輕拍吸收。',
              timerDurationMinutes: 15
            },
            {
              id: `${prefix}-care-2`,
              title: '#15 黛珂 小紫瓶超微導精粹',
              categoryLabel: '前導通道',
              isHighlighted: true,
              productCode: '#15',
              productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
              appliedRole: '面膜揭下後手溫按壓吸收',
              targetZoneText: '全臉手溫按壓',
              amount: '按壓 2-3 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 2',
              instruction: '面膜揭下後手溫按壓小紫瓶。',
              technique: '【掌心手溫覆蓋手法】：洗臉後立即以手心溫熱覆蓋全臉開啟吸收通道。'
            },
            {
              id: `${prefix}-care-3`,
              title: '#28 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              categoryLabel: '先乳後水',
              isHighlighted: true,
              productCode: '#28',
              productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
              appliedRole: '【先乳後水】僅塗抹兩頰乾燥區軟化角質',
              targetZoneText: '【僅塗抹兩頰乾燥區】',
              amount: '按壓 1-2 泵',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 3',
              instruction: '按壓兩頰軟化角質，避開下巴。',
              technique: '【掌心軟化手法】：按壓塗抹於兩頰乾燥處軟化硬化角質層，避開下巴。'
            },
            {
              id: `${prefix}-care-4`,
              title: '#36 巴黎萊雅 紫熨斗 MAX 眼霜',
              categoryLabel: '眼霜',
              productCode: '#36',
              productName: 'L’Oreal 巴黎萊雅 玻尿酸撫紋眼霜 MAX（紫熨斗）',
              appliedRole: '眼周撫紋輕按',
              targetZoneText: '眼周專用',
              amount: '米粒大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 4',
              instruction: '輕按眼周。',
              technique: '【無名指腹輕彈點按手法】：輕柔點壓眼周眶骨與法令紋。'
            },
            {
              id: `${prefix}-care-5`,
              title: '#32 契爾氏 冰河醣蛋白保濕霜',
              categoryLabel: '乳液/面霜',
              productCode: '#32',
              productName: 'Kiehl’s 契爾氏 冰河醣蛋白保濕霜',
              appliedRole: '兩頰按壓厚實封層',
              targetZoneText: '【兩頰專用】',
              amount: '五元硬幣大小',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5A',
              instruction: '兩頰按壓封層。',
              technique: '【掌心溫熱厚敷封層手法】：取面霜於指腹搓熱，手掌貼合乾燥兩頰由內向外按壓厚抹封層。'
            },
            {
              id: `${prefix}-care-6`,
              title: '#26-2 MUJI 米糠發酵乳液',
              categoryLabel: '乳液/面霜',
              productCode: '#26-2',
              productName: 'MUJI 無印良品 米糠發酵乳液',
              appliedRole: '下巴薄擦清爽控油',
              targetZoneText: '【下巴薄擦】',
              amount: '1 滴',
              timingCategory: 'night_skincare',
              timingLabel: '晚間保養 Step 5B',
              instruction: '下巴薄擦米糠乳。',
              technique: '【指腹單層薄擦手法】：下巴薄擦 1 滴即可。'
            }
          ];

      const bodyLotion: StepItem = isOddWeek
        ? {
            id: `${prefix}-body-1`,
            title: '#B-04 Aveeno 燕麥優格保濕身體乳',
            categoryLabel: '身體乳',
            productCode: '身-04',
            productName: 'Aveeno 艾惟諾 燕麥優格保濕身體乳',
            appliedRole: '全身滋養長效保濕',
            targetZoneText: '全身四肢',
            amount: '適量',
            timingCategory: 'night_body',
            timingLabel: '晚間身體護理',
            instruction: '洗澡擦乾後立即全身塗抹，舒緩秋冬溫差乾癢。',
            technique: '【全身大面積塗抹手法】：沐浴後趁肌膚微潤時均勻抹開。'
          }
        : {
            id: `${prefix}-body-1`,
            title: '#B-06 innisfree #002 芳香滋潤身體乳',
            categoryLabel: '身體乳',
            productCode: '身-06',
            productName: 'innisfree #002 芳香滋潤身體乳',
            appliedRole: '偶數週日晚間全身滋養放鬆迎向下週',
            targetZoneText: '全身四肢',
            amount: '適量',
            timingCategory: 'night_body',
            timingLabel: '晚間身體護理',
            instruction: '偶數週日晚間洗澡後全身塗抹，深層滋潤迎向下週。',
            technique: '【全身大面積塗抹手法】：沐浴後全身均勻塗抹四肢與軀幹。'
          };

      return [...cleansingSteps, ...skincareSteps, bodyLotion];
    }
  }
}

/**
 * Returns canonical morning steps for Bare-skin mode (路線 A) or Makeup mode (路線 B)
 */
export function getCanonicalMorningSteps(isMakeup: boolean, isOddWeek: boolean): StepItem[] {
  if (!isMakeup) {
    // 路線 A・素顏日模式
    return [
      {
        id: `am-bare-1-${isOddWeek ? 'odd' : 'even'}`,
        title: '晨間溫和清潔',
        categoryLabel: '洗卸',
        productCode: isOddWeek ? '#06' : '#07',
        productName: isOddWeek ? '清水洗臉（T字微量 #06 Relove）' : '清水洗臉（T字微量 #07 綠茶潔面）',
        appliedRole: '溫和洗淨多餘皮脂・保留天然皮脂膜',
        targetZoneText: '全臉 / T字出油處',
        amount: '清水或黃豆大小潔面乳',
        timingCategory: 'morning_skincare',
        timingLabel: '晨間 Step 1',
        instruction: '清水洗臉即可；若夜間下巴或 T 字出油較多，可使用少量溫和潔面乳洗淨。',
        technique: '【洗卸手法】：雙手先加溫水於掌心搓出綿密泡沫，以指腹輕柔在 T 字與下巴畫圈 15 秒，兩頰輕輕帶過即可，隨後以溫涼水潑洗沖淨並以純棉柔巾輕壓吸乾。'
      },
      {
        id: `am-bare-2-${isOddWeek ? 'odd' : 'even'}`,
        title: '#15 黛珂 小紫瓶超微導精粹',
        categoryLabel: '前導通道',
        isHighlighted: true,
        productCode: '#15',
        productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
        appliedRole: '晨間開啟肌底通道・全天保濕續航',
        targetZoneText: '全臉手溫按壓',
        amount: '按壓 1-2 泵',
        timingCategory: 'morning_skincare',
        timingLabel: '晨間 Step 2',
        instruction: '按壓 1-2 泵手溫搓熱，由內向外按拍全臉，開啟吸收通道。',
        technique: '【手溫按拍手法】：按壓小紫瓶於掌心，雙手合十搓揉溫熱，由內向外以手掌按壓覆蓋全臉與眼下（嚴格用手溫按拍，切勿用棉片摩擦拉扯！）。'
      },
      {
        id: `am-bare-3-${isOddWeek ? 'odd' : 'even'}`,
        title: isOddWeek ? '#18 BOH 維他命B5積雪草噴霧' : '#19 Ongredients 屏障水光噴霧',
        categoryLabel: '化妝水/噴霧',
        productCode: isOddWeek ? '#18' : '#19',
        productName: isOddWeek ? 'BIOHEAL BOH 維他命 B5 積雪草保濕潤澤噴霧' : 'Ongredients 屏障鎮靜水光噴霧',
        appliedRole: '水相舒緩屏障補水・打造透亮光澤',
        targetZoneText: '全臉均勻噴灑',
        amount: '按壓 3-4 次',
        timingCategory: 'morning_skincare',
        timingLabel: '晨間 Step 3',
        instruction: isOddWeek ? '全臉均勻噴灑 BOH 噴霧補水。' : '全臉均勻噴灑 Ongredients 噴霧潤澤。',
        technique: '【噴霧輕彈手法】：瓶身距離臉部約 15-20 公分環繞噴灑 3-4 次，指腹由下往上輕彈拍打至吸收。'
      },
      {
        id: `am-bare-4-${isOddWeek ? 'odd' : 'even'}`,
        title: '#27 ANUA 桃子 70% 菸鹼醯胺美白精華',
        categoryLabel: '精華液',
        productCode: '#27',
        productName: 'ANUA 桃子 70% 菸鹼醯胺美白精華',
        appliedRole: '日間抗氧化提亮・改善熬夜暗黃氣色',
        targetZoneText: '全臉均勻',
        amount: '半滴管',
        timingCategory: 'morning_skincare',
        timingLabel: '晨間 Step 4',
        instruction: '取半滴管均勻抹於全臉，提亮整天好氣色。',
        technique: '【指腹滑推手法】：取半滴管均勻點塗於額頭、兩頰與下巴，指腹順著肌膚紋理由內向外延展推勻。'
      },
      {
        id: `am-bare-5-${isOddWeek ? 'odd' : 'even'}`,
        title: '#37 BRINGGREEN 維他命超級檸檬亮眼霜',
        categoryLabel: '眼霜（單擦極簡）',
        productCode: '#37',
        productName: 'BRINGGREEN 維他命超級檸檬亮眼霜（單擦極簡・嚴禁疊加第二款眼霜）',
        appliedRole: '【單一眼霜極簡】素顏提亮眼周暗沉・清透無負擔防脂肪粒與閉口',
        targetZoneText: '【眼周眶骨專用，嚴禁帶到下巴】',
        amount: '米粒大小（雙眼共用）',
        timingCategory: 'morning_skincare',
        timingLabel: '晨間 Step 5',
        instruction: '【單一眼霜原則】：僅取 1 粒米大小輕點眼周眶骨！絕對不可同時疊擦兩款眼霜，否則過多油脂堆疊極易引發眼周脂肪粒，且眼霜下移擴散會嚴重堵塞毛孔引發下巴閉鎖性粉刺！',
        technique: '【無名指輕點化開手法】：取一粒米大小於無名指腹，雙手無名指對搓微溫乳化，由內向外沿眼眶骨輕輕點壓至吸收即可，嚴禁用力拉扯眼皮，且切勿帶到臉頰與下巴。',
        caution: '⚠️ 閉口防護鐵則：眼霜一次僅擦一款！嚴禁疊加兩款眼霜，避免油脂下移誘發下巴閉鎖性粉刺與脂肪粒。'
      },
      {
        id: `am-bare-6-${isOddWeek ? 'odd' : 'even'}`,
        title: '#27-2 品木宣言 靈芝水凝乳液 2.0',
        categoryLabel: '乳液/面霜',
        productCode: '#27-2',
        productName: 'ORIGINS 品木宣言 靈芝水凝乳液 2.0',
        appliedRole: '兩頰清爽抗氧化水潤屏障',
        targetZoneText: '【僅塗抹兩頰乾燥區】',
        amount: '五元硬幣大小',
        timingCategory: 'morning_skincare',
        timingLabel: '晨間 Step 6A',
        instruction: '兩頰薄擦靈芝乳液，鎖水不黏膩。',
        technique: '【掌心按壓手法】：手心搓勻後按壓兩頰，鎖水抗氧化。'
      },
      {
        id: `am-bare-7-${isOddWeek ? 'odd' : 'even'}`,
        title: '#26-2 MUJI 米糠發酵乳液',
        categoryLabel: '乳液/面霜',
        productCode: '#26-2',
        productName: 'MUJI 無印良品 米糠發酵乳液',
        appliedRole: '下巴唯一指定清爽乳液',
        targetZoneText: '【僅薄擦下巴粉刺區】',
        amount: '僅需 1 滴',
        timingCategory: 'morning_skincare',
        timingLabel: '晨間 Step 6B',
        instruction: '下巴僅能薄擦米糠乳液，避免白天毛孔悶油致痘。',
        technique: '【指腹單層薄擦手法】：下巴薄擦 1 滴維持毛孔呼吸。'
      },
      {
        id: `am-bare-8-${isOddWeek ? 'odd' : 'even'}`,
        title: '#39 d’Alba 水潤粉光校色提亮防曬霜 SPF50+',
        categoryLabel: '防曬與妝前',
        isHighlighted: true,
        productCode: '#39',
        productName: 'd’Alba 水潤粉光校色提亮防曬霜 SPF50+',
        appliedRole: '素顏上班日兼具高防曬與偽素顏水光氣色',
        targetZoneText: '全臉與頸部',
        amount: '十元硬幣大小',
        timingCategory: 'morning_skincare',
        timingLabel: '晨間 Step 7',
        instruction: '素顏上班日全臉塗抹 d’Alba 粉光防曬，兼具高防曬與自然偽素顏水光氣色。',
        technique: '【順向推勻手法】：點塗於全臉，以掌心單向順推均勻塗抹，自然透出粉嫩光澤。'
      }
    ];
  } else {
    // 路線 B・精緻底妝日模式
    return [
      {
        id: `am-makeup-1-${isOddWeek ? 'odd' : 'even'}`,
        title: '溫和晨間清潔',
        categoryLabel: '洗卸',
        productCode: '清潔',
        productName: '溫和洗臉 / 清水洗臉',
        appliedRole: '溫和洗淨多餘皮脂・防起屑基礎',
        targetZoneText: '全臉',
        amount: '清水或溫和潔面乳',
        timingCategory: 'morning_skincare',
        timingLabel: '底妝前 Step 1',
        instruction: '溫和洗淨多餘皮脂，保持臉部水分。',
        technique: '【洗卸手法】：雙手加溫水搓揉出泡沫洗淨面部，按乾水分。'
      },
      {
        id: `am-makeup-2-${isOddWeek ? 'odd' : 'even'}`,
        title: '#15 黛珂 小紫瓶超微導精粹',
        categoryLabel: '前導通道',
        isHighlighted: true,
        productCode: '#15',
        productName: 'COSME DECORTE 黛珂 小紫瓶超微導全能修護精粹',
        appliedRole: '開啟吸收通道・防止後續底妝拔乾卡粉',
        targetZoneText: '全臉手溫按壓',
        amount: '按壓 2 泵',
        timingCategory: 'morning_skincare',
        timingLabel: '底妝前 Step 2',
        instruction: '按壓 2 泵手溫覆蓋全臉，防止後續底妝拔乾。',
        technique: '【掌心手溫覆蓋手法】：以雙手手溫覆蓋按壓全臉，微脂囊開啟角質通道。'
      },
      {
        id: `am-makeup-3-${isOddWeek ? 'odd' : 'even'}`,
        title: '#38 BOBBI BROWN 維他命完美眼霜',
        categoryLabel: '眼霜/妝前',
        isHighlighted: true,
        isKeyFocus: true,
        productCode: '#38',
        productName: 'BOBBI BROWN 維他命完美眼霜',
        appliedRole: '【妝前眼霜】撫平乾紋・阻絕後續遮瑕膏卡粉結塊',
        targetZoneText: '【眼周專用】',
        amount: '兩眼各取米粒大小',
        timingCategory: 'morning_skincare',
        timingLabel: '底妝前 Step 3',
        instruction: '取米粒大小於眼下輕按推勻，等待 1 分鐘完全貼合成膜，阻絕後續遮瑕膏卡紋結塊。',
        technique: '【無名指輕點點壓手法】：取米粒大小於無名指腹，雙手無名指對搓勻開，以點狀輕壓眼眶骨，擦完後【務必靜置 1 分鐘完全貼合成膜】，再上後續遮瑕。',
        caution: '⚠️ 鐵則：擦完需靜置 1 分鐘成膜再上遮瑕膏，防止搓泥卡粉。',
        timerDurationMinutes: 1
      },
      {
        id: `am-makeup-4-${isOddWeek ? 'odd' : 'even'}`,
        title: '#34 BOBBI BROWN 維他命面霜（橘子霜）',
        categoryLabel: '乳液/面霜',
        isHighlighted: true,
        isKeyFocus: true,
        productCode: '#34',
        productName: 'BOBBI BROWN 維他命完美面霜（橘子霜）',
        appliedRole: '【僅塗抹兩頰乾燥區！】撫平乾皮起屑・提升粉底服貼度',
        targetZoneText: '【僅塗抹兩頰乾燥區！】',
        amount: '五元硬幣大小',
        timingCategory: 'morning_skincare',
        timingLabel: '底妝前 Step 4A',
        instruction: '塗抹於乾燥兩頰，撫平乾皮起屑打造完美平滑貼妝感，大幅提升粉底服貼度。',
        technique: '【掌心順向撫平手法】：取適量橘子霜於掌心搓揉微溫，由內向外輕輕按壓於乾燥兩頰撫平角質脫屑，【嚴格避開下巴出油區】！',
        caution: '⚠️ 鐵則：下巴粉刺出油區嚴禁擦橘子霜！避免致痘。'
      },
      {
        id: `am-makeup-5-${isOddWeek ? 'odd' : 'even'}`,
        title: '#26-2 MUJI 米糠發酵乳液',
        categoryLabel: '乳液/面霜',
        productCode: '#26-2',
        productName: 'MUJI 無印良品 米糠發酵乳液',
        appliedRole: '【下巴唯一指定，嚴禁擦橘子霜】控油保濕防冒痘',
        targetZoneText: '【下巴唯一指定，嚴禁擦橘子霜】',
        amount: '僅需 1 滴',
        timingCategory: 'morning_skincare',
        timingLabel: '底妝前 Step 4B',
        instruction: '下巴粉刺區嚴格避開橘子霜！改擦清爽的 #26-2 米糠乳液預防午後悶痘。',
        technique: '【指腹單層薄擦手法】：下巴薄擦 1 滴米糠乳液即可，保持毛孔透氣清爽。'
      },
      {
        id: `am-makeup-6-${isOddWeek ? 'odd' : 'even'}`,
        title: '#40 曼秀雷敦 水潤肌高濃度玻尿酸防曬',
        categoryLabel: '防曬與妝前',
        isHighlighted: true,
        isKeyFocus: true,
        productCode: '#40',
        productName: '曼秀雷敦 水潤肌高濃度玻尿酸防曬精華',
        appliedRole: '水感透明抗 UV・為底妝打造透氣水潤保護膜',
        targetZoneText: '全臉均勻塗抹',
        amount: '十元硬幣大小',
        timingCategory: 'morning_skincare',
        timingLabel: '底妝前 Step 5',
        instruction: '水感透明無粉感，為全臉均勻補水抗 UV，靜置 3-5 分鐘成膜後與後續彩妝極佳融合。',
        technique: '【單向順推成膜等待手法】：將透明防曬分區點在全臉，以手掌單向順推均勻塗抹，【務必靜置 3-5 分鐘等待高分子膜完全乾燥成膜】，成膜前切勿上粉底！',
        caution: '⚠️ 鐵則：防曬未完全成膜前切勿上粉底，否則必生搓泥與起屑！',
        timerDurationMinutes: 3
      },
      {
        id: `am-makeup-7-${isOddWeek ? 'odd' : 'even'}`,
        title: '#41 植村秀 無極限保濕妝前乳（紫色／膚色）',
        categoryLabel: '防曬與妝前',
        productCode: '#41',
        productName: '植村秀 無極限保濕妝前乳（紫色／膚色）',
        appliedRole: '防曬成膜後局部點拍・修飾蠟黃暗沉',
        targetZoneText: '局部暗沉蠟黃處',
        amount: '紅豆大小',
        timingCategory: 'morning_skincare',
        timingLabel: '底妝前 Step 6',
        instruction: '局部點塗於嘴角蠟黃暗沉處、下巴或眼下微暗處，修飾膚色不均後再上粉底。',
        technique: '【指腹局部點拍手法】：防曬成膜後，取紅豆大小以指腹局部點拍於嘴角、額頭中央或眼下暗黃處，輕拍勻開校正膚色。'
      }
    ];
  }
}
