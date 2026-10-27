import { ProductItem, DayRoutine, ReminderConfig, DayOfWeek, StepItem } from '../types';

export const ALL_PRODUCTS: ProductItem[] = [
  // A. 卸妝與清潔
  {
    id: '01',
    code: '#01',
    name: 'ilso 溫和粉刺溶解露',
    brand: 'ilso',
    category: 'cleansing',
    categoryLabel: '卸妝與清潔',
    targetZone: 'chin',
    zoneLabel: '下巴粉刺區專用',
    weekType: 'both',
    usageRule: '週二水楊酸夜前濕敷下巴與鼻翼 10-15 分鐘軟化粉刺與頑固角栓。',
    molecularTip: '溫和融化固態硬化皮脂，協同水楊酸打造無痛清粉刺黃金組合。',
    notes: '敷完可用棉花棒輕輕帶走浮出油脂，再進行後續洗卸。'
  },
  {
    id: '02',
    code: '#02',
    name: 'MUJI 無印良品 溫和卸妝油',
    brand: 'MUJI 無印良品',
    category: 'cleansing',
    categoryLabel: '卸妝與清潔',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'odd',
    usageRule: '奇數週全妝與功能夜（酸類、微晶針）主力卸妝。',
    molecularTip: '乾手乾臉按摩，下巴粉刺加強打圈，充分乳化後溫水沖淨，不留殘留物。'
  },
  {
    id: '03',
    code: '#03',
    name: 'DUO 麗優 卸妝膏',
    brand: 'DUO',
    category: 'cleansing',
    categoryLabel: '卸妝與清潔',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'even',
    usageRule: '偶數週全妝與功能夜主力卸妝，加強下巴粉刺打圈按摩。',
    molecularTip: '膏體化油質地能溫和溶出毛孔角栓，同時保留乾肌皮脂膜保護屏障。'
  },
  {
    id: '04',
    code: '#04',
    name: 'Cetaphil 舒特膚 胜肽緊緻賦活潔膚水',
    brand: 'Cetaphil 舒特膚',
    category: 'cleansing',
    categoryLabel: '卸妝與清潔',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'both',
    usageRule: '週四深層清潔夜，搭配 CHECK2CHECK 離子美容儀「正離子導出模式」使用。',
    molecularTip: '透過離子電荷吸附深層彩妝殘留與角質髒污，溫和無刺激不拉扯皮膚。'
  },
  {
    id: '05',
    code: '#05',
    name: 'Capsule Serum 維C去角質護理卸妝潔面凝膠',
    brand: 'Capsule Serum',
    category: 'cleansing',
    categoryLabel: '卸妝與清潔',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'both',
    usageRule: '僅限週一與週五「只擦防曬的素顏上班日」使用。',
    molecularTip: '洗卸二合一，微囊維生素C洗淨防曬的同時溫和代謝老廢角質，避免過度清潔。'
  },
  {
    id: '06',
    code: '#06',
    name: 'Relove Nrf2 Ultimate Future 胺基酸潔面乳',
    brand: 'Relove',
    category: 'cleansing',
    categoryLabel: '卸妝與清潔',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'odd',
    usageRule: '奇數週早晚洗面主力潔顏。',
    molecularTip: '弱酸性高純度胺基酸界面活性劑，深層潔淨且完全不緊繃，維持屏障天然皮脂膜。'
  },
  {
    id: '07',
    code: '#07',
    name: 'innisfree 綠茶保濕胺基酸潔面乳',
    brand: 'innisfree',
    category: 'cleansing',
    categoryLabel: '卸妝與清潔',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'even',
    usageRule: '偶數週早晚洗面主力潔顏。',
    molecularTip: '綠茶精萃抗氧化舒緩，泡沫細緻溫和，秋冬乾燥晨間洗顏極佳選擇。'
  },
  {
    id: '08',
    code: '#08',
    name: 'SEXYLOOK 綠番茄奶油洗面乳',
    brand: 'SEXYLOOK',
    category: 'cleansing',
    categoryLabel: '卸妝與清潔',
    targetZone: 'chin',
    zoneLabel: '下巴與T字專用',
    weekType: 'odd',
    usageRule: '奇數週日晚間，局部清洗下巴與T字毛孔粗大出油處，控油收斂。',
    molecularTip: '富含綠番茄專利成分，針對下巴粉刺與擴張毛孔進行緊緻，兩頰乾肌請避開。'
  },
  {
    id: '09',
    code: '#09',
    name: 'Kanebo suisai 淨透酵素洗顏粉（藍色經典款）',
    brand: 'Kanebo suisai',
    category: 'cleansing',
    categoryLabel: '卸妝與清潔',
    targetZone: 'chin',
    zoneLabel: '下巴與T字專用',
    weekType: 'even',
    usageRule: '偶數週日晚間，取半顆局部清潔下巴與鼻翼角栓，嚴禁全臉摩擦。',
    molecularTip: '蛋白分解酵素與皮脂分解酵素雙重瓦解陳年角栓，洗後下巴平整光滑。'
  },

  // B. 特殊護理與前導
  {
    id: '10',
    code: '#10',
    name: '小林製藥 EAUDE MUGE 藥用抗痘化妝水',
    brand: '小林製藥',
    category: 'toner_mist',
    categoryLabel: '特殊護理與抗菌',
    targetZone: 'chin',
    zoneLabel: '下巴痘痘粉刺區',
    weekType: 'both',
    usageRule: '洗臉後第一步，倒於化妝棉上「輕柔擦拭下巴痘痘粉刺區」，抗菌消炎。',
    molecularTip: '抗敏抗菌成分先行抑制痤瘡桿菌，為後續保養阻隔細菌擴散。'
  },
  {
    id: '11',
    code: '#11',
    name: 'Medicube PDRN 粉紅胜肽膠原化妝水棉片',
    brand: 'Medicube',
    category: 'toner_mist',
    categoryLabel: '棉片/濕敷前導',
    targetZone: 'cheeks',
    zoneLabel: '兩頰乾荒專用',
    weekType: 'odd',
    usageRule: '奇數週六晚間洗臉後，取兩片濕敷兩頰乾燥區域 5-8 分鐘。',
    molecularTip: '三文魚 PDRN 搭配多重膠原胜肽，快速密集修護秋冬兩頰屏障受損。'
  },
  {
    id: '12',
    code: '#12',
    name: 'Goodal 綠橘子維他命 C 淡斑眼膜',
    brand: 'Goodal',
    category: 'eye_care',
    categoryLabel: '眼周護理/眼膜',
    targetZone: 'eyes',
    zoneLabel: '眼周專用',
    weekType: 'odd',
    usageRule: '奇數週日深度面膜夜，敷眼下暗沉細紋處 10 分鐘後取下。',
    molecularTip: '濟州島青橘萃取結合維他命 C 衍生物，深層擊退黑眼圈與眼下色素沉積。'
  },
  {
    id: '13',
    code: '#13',
    name: 'Quality 1st AZ100 藍瓶修護痘痘面膜',
    brand: 'Quality 1st',
    category: 'mask',
    categoryLabel: '面膜',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'even',
    usageRule: '偶數週日深層修護敷全臉 10-15 分鐘。',
    molecularTip: '高濃度壬二酸 (Azelaic Acid) 與積雪草成分，全面安撫閉口粉刺與肌底發炎。'
  },
  {
    id: '14',
    code: '#14',
    name: '一般日常深層保濕面膜',
    brand: '日常嚴選',
    category: 'mask',
    categoryLabel: '面膜',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'odd',
    usageRule: '奇數週日深層補水敷全臉 15 分鐘。',
    molecularTip: '秋冬乾冷環境下為兩頰注入澎湃角質水分，緩解脫皮緊繃。'
  },
  {
    id: '15',
    code: '#15',
    name: 'COSME DECORTE 黛珂 超微導全能修護精粹（小紫瓶）',
    brand: 'COSME DECORTE 黛珂',
    category: 'serum_active',
    categoryLabel: '微脂囊前導通道',
    targetZone: 'all',
    zoneLabel: '全臉適用（避開微晶夜）',
    weekType: 'both',
    usageRule: '【關鍵核心】洗臉擦乾或局部擦拭下巴後，第一道前導精華，按壓2-3泵手溫覆蓋全臉。',
    molecularTip: '0.1 微米多重層微脂囊體包覆活性成分，如膠囊般長效緩釋，開啟肌膚吸收通道，讓後續柔膚乳與化妝水吸收力提升 300%。',
    notes: '注意：週三 VT Reedle 300 微晶夜與週五 A 醇微晶夜前請停用，確保微晶針直達角質裸肌。'
  },

  // C. 軟化角質與水相保濕
  {
    id: '28',
    code: '#28',
    name: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III（極潤型）',
    brand: 'COSME DECORTE 黛珂',
    category: 'cream_lotion',
    categoryLabel: '角質軟化柔膚乳',
    targetZone: 'cheeks',
    zoneLabel: '僅兩頰乾燥區（嚴禁下巴！）',
    weekType: 'both',
    usageRule: '【先乳後水關鍵樞紐】小紫瓶後、化妝水前使用！取 1-2 泵於化妝棉或手心，僅塗抹按壓兩頰乾燥區。',
    molecularTip: '以卵磷脂和親膚性磷脂質軟化秋冬變硬的角質層，使後續水性化妝水與精華滲透通道大開。下巴出油粉刺區請嚴格避開。',
    cautions: '週五 A 醇夜暫停使用，避免油脂阻礙 A 醇轉化吸收。'
  },
  {
    id: '16',
    code: '#16',
    name: 'ORIGINS 品木宣言 靈芝水（微分子賦活精華水）',
    brand: 'ORIGINS 品木宣言',
    category: 'toner_mist',
    categoryLabel: '化妝水/噴霧',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'odd',
    usageRule: '奇數週接續在 #28 AQ 乳液之後的全臉拍水吸收。',
    molecularTip: '白樺茸與靈芝發酵精華，快速鎮靜秋冬乾燥微泛紅，提供充沛水相養分。'
  },
  {
    id: '17',
    code: '#17',
    name: 'MUJI 無印良品 敏感肌化妝水（清爽型）',
    brand: 'MUJI 無印良品',
    category: 'toner_mist',
    categoryLabel: '化妝水/噴霧',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'even',
    usageRule: '偶數週接續在 #28 AQ 乳液之後的全臉拍水補水。',
    molecularTip: '日本岩手縣天然水為基底，成分極簡純淨零負擔，平衡肌膚酸鹼值。'
  },
  {
    id: '18',
    code: '#18',
    name: 'BIO HEAL BOH 維他命 B5 積雪草鎮靜保濕噴霧',
    brand: 'BIO HEAL BOH',
    category: 'toner_mist',
    categoryLabel: '日間與晨間噴霧',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'odd',
    usageRule: '奇數週早晨潔顏後或辦公室乾燥時隨時全臉噴灑。',
    molecularTip: '維他命 B5 (泛醇) 深入肌底修補屏障孔隙，積雪草瞬間舒緩溫差刺激。'
  },
  {
    id: '19',
    code: '#19',
    name: 'Ongredients 屏障鎮靜水光噴霧',
    brand: 'Ongredients',
    category: 'toner_mist',
    categoryLabel: '日間與晨間噴霧',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'even',
    usageRule: '偶數週早晨潔顏後全臉噴霧打底。',
    molecularTip: '高保濕微細水分子霧化噴頭，打造透明水光肌，不暈妝不黏膩。'
  },

  // D. 高效活性與水性精華
  {
    id: '20',
    code: '#20',
    name: 'COSME DECORTE 黛珂 超微導極光煥采精粹 1.8X',
    brand: 'COSME DECORTE 黛珂',
    category: 'serum_active',
    categoryLabel: '高效美白精華',
    targetZone: 'all',
    zoneLabel: '全臉美白提亮',
    weekType: 'both',
    usageRule: '化妝水後的第一道功效精華，均勻塗抹全臉。',
    molecularTip: '高濃度傳明酸與麴酸誘導體，切斷黑色素傳導鏈，改善秋冬膚色暗沉偏黃。'
  },
  {
    id: '21',
    code: '#21',
    name: 'Torriden DIVE-IN 微分子低分子玻尿酸保濕精華',
    brand: 'Torriden',
    category: 'serum_active',
    categoryLabel: '深層水相精華',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'odd',
    usageRule: '接續黛珂美白後的深層注水；週四可搭配離子導入儀負離子模式導入。',
    molecularTip: '5D 複合微分子透明質酸，由淺入深層層浸潤真皮層與表皮角質。'
  },
  {
    id: '22',
    code: '#22',
    name: 'Paula’s Choice 寶拉珍選 2% 水楊酸精華液',
    brand: 'Paula’s Choice',
    category: 'serum_active',
    categoryLabel: '脂溶性酸類煥膚',
    targetZone: 'chin',
    zoneLabel: '下巴與鼻翼粉刺專用',
    weekType: 'both',
    usageRule: '【週二專屬・裸肌第一步】洗臉並擦乾後第一步使用！僅點塗下巴與鼻翼，靜置 3 分鐘待脂溶性酸深層滲透後，再擦小紫瓶。',
    molecularTip: 'pH 3.2-3.8 黃金酸鹼值，脂溶性水楊酸直接穿透毛孔油脂壁，分解角化死皮與閉口。',
    cautions: '兩頰乾荒敏感區嚴格避開！當晚不可與 A 醇或微晶針併用。'
  },
  {
    id: '23',
    code: '#23',
    name: 'VT Reedle Shot 300 微晶微針精華',
    brand: 'VT Cosmetics',
    category: 'serum_active',
    categoryLabel: '物理微針前導通道',
    targetZone: 'all',
    zoneLabel: '全臉（避開眼周與紅腫痘）',
    weekType: 'both',
    usageRule: '【週三專屬・裸肌第一步】洗臉擦乾後第一步乾壓全臉！有微刺感屬正常，嚴禁當晚擦小紫瓶與 AQ 乳，直接進入修護安瓶。',
    molecularTip: '微米級二氧化矽針狀微晶打開角質細胞間隙物理微通道，使後續 PDRN 胜肽吸收率暴增數倍。',
    cautions: '避開眼周、嘴唇及下巴紅腫發炎痘痘，以按壓代替來回用力摩擦。'
  },
  {
    id: '24',
    code: '#24',
    name: 'Celimax 唯美緻 A 醇微晶抗老撫紋精華',
    brand: 'Celimax',
    category: 'serum_active',
    categoryLabel: 'A 醇維生素 A 衍生物',
    targetZone: 'all',
    zoneLabel: '全臉避開眼唇與下巴痘',
    weekType: 'both',
    usageRule: '【週五專屬・微量建立耐受】化妝水打底後，取豌豆大小按壓全臉，眼周需先塗好眼霜保護。',
    molecularTip: '微晶包覆純 A 醇促進真皮膠原蛋白合成與角質細胞正常更替，緊緻毛孔淡化細紋。',
    cautions: '當晚停用 #28 AQ 乳液，避免過多親脂油脂形成阻隔層影響 A 醇轉化。'
  },
  {
    id: '25',
    code: '#25',
    name: 'Medicube PDRN 粉紅胜肽修護安瓶',
    brand: 'Medicube',
    category: 'serum_active',
    categoryLabel: '高活性胜肽安瓶',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'both',
    usageRule: '週三微晶夜與週四導入夜的核心修護安瓶，全臉均勻塗抹。',
    molecularTip: '微晶打通通道後立即注入三文魚 PDRN，啟動細胞層級自我修復與膠原增生。'
  },
  {
    id: '26',
    code: '#26',
    name: '高濃度 All-in-One 全效水感精華液',
    brand: '日系美肌嚴選',
    category: 'serum_active',
    categoryLabel: '全效修護精華',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'odd',
    usageRule: '奇數週一頂級修護夜，提供綜合抗老、保濕與維他命能量。',
    molecularTip: '多元複方小分子快速浸潤，簡化步驟同時維持高效肌底滋養。'
  },
  {
    id: '27',
    code: '#27',
    name: 'ANUA 桃子 70% 菸鹼醯胺水光精華',
    brand: 'ANUA',
    category: 'serum_active',
    categoryLabel: '晨間提亮精華',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'even',
    usageRule: '偶數週早晨潔顏與噴霧後擦拭，提亮氣色打造晶透水光肌底。',
    molecularTip: '5% 菸鹼醯胺搭配桃子發酵產物，抑制黑色素轉移同時調控白天皮脂分泌。'
  },
  {
    id: '29',
    code: '#29',
    name: 'The Ordinary 菸鹼醯胺 10% + 鋅 1%',
    brand: 'The Ordinary',
    category: 'serum_active',
    categoryLabel: '控油收斂精華',
    targetZone: 'chin',
    zoneLabel: '下巴出油粉刺區專用',
    weekType: 'even',
    usageRule: '偶數週一晚間，僅局部點塗下巴粉刺出油旺盛處，嚴禁擦兩頰。',
    molecularTip: '高濃度維他命 B3 與有機鋅鹽協同，抑制下巴皮脂腺過度分泌，收斂毛孔。'
  },

  // E. 眼周防護與撫紋
  {
    id: '35',
    code: '#35',
    name: 'Estee Lauder 雅詩蘭黛 特潤全能修護亮眼霜（小棕眼霜）',
    brand: 'Estee Lauder 雅詩蘭黛',
    category: 'eye_care',
    categoryLabel: '眼霜/眼周護理',
    targetZone: 'eyes',
    zoneLabel: '眼周專用',
    weekType: 'odd',
    usageRule: '奇數週夜間眼霜；週五 A 醇微晶夜前務必先以小棕眼霜做眼周隔離保護！',
    molecularTip: '專利夜間修護科技對抗藍光與秋冬眼下乾紋，形成眼部抗氧化防護網。'
  },
  {
    id: '36',
    code: '#36',
    name: 'L\'Oreal 巴黎萊雅 玻尿酸撫紋眼霜 MAX（紫熨斗）',
    brand: 'L\'Oreal Paris',
    category: 'eye_care',
    categoryLabel: '眼霜/眼周護理',
    targetZone: 'eyes',
    zoneLabel: '眼周專用',
    weekType: 'even',
    usageRule: '偶數週夜間眼霜，撫平眼周細紋與法令紋預防。',
    molecularTip: '高濃度玻色因 (Pro-Xylane) 促進黏多醣合成，澎潤眼周肌膚支撐力。'
  },
  {
    id: '37',
    code: '#37',
    name: 'BRINGGREEN 超級檸檬亮眼霜 ＋ Neogene 胜肽亮眼霜',
    brand: 'BRINGGREEN / Neogene',
    category: 'eye_care',
    categoryLabel: '晨間眼部亮眸',
    targetZone: 'eyes',
    zoneLabel: '眼周專用',
    weekType: 'both',
    usageRule: '早晨素顏上班日薄擦眼下，提亮熬夜暗沉與浮腫。',
    molecularTip: '維他命原 C 與多胜肽複合物，改善微循環，質地清透不長脂肪粒。'
  },
  {
    id: '38',
    code: '#38',
    name: 'BOBBI BROWN 維他命完美眼霜（妝前專用）',
    brand: 'BOBBI BROWN',
    category: 'eye_care',
    categoryLabel: '妝前眼霜',
    targetZone: 'eyes',
    zoneLabel: '眼周專用',
    weekType: 'both',
    usageRule: '【精緻底妝日專用】取米粒大小於眼下輕按推勻，靜置 1 分鐘完全貼合成膜，阻絕後續遮瑕膏卡紋結塊。',
    molecularTip: '乳木果油與維生素複合物形成柔焦平滑薄膜，是乾眼皮秋冬持妝聖品。'
  },

  // F. 分區鎖水與面霜
  {
    id: '26-2',
    code: '#26-2',
    name: 'MUJI 無印良品 米糠發酵乳液',
    brand: 'MUJI 無印良品',
    category: 'cream_lotion',
    categoryLabel: '清爽無油感乳液',
    targetZone: 'chin',
    zoneLabel: '下巴粉刺區【唯一指定】',
    weekType: 'both',
    usageRule: '【分區關鍵】每日早晚下巴唯一指定乳液！薄擦一層即可，嚴禁在下巴塗抹厚重面霜。',
    molecularTip: '米糠發酵濾液提供溫和水性脂質，修護皮脂膜的同時不阻塞毛孔油脂通道。'
  },
  {
    id: '27-2',
    code: '#27-2',
    name: 'ORIGINS 品木宣言 靈芝水凝乳液 2.0',
    brand: 'ORIGINS 品木宣言',
    category: 'cream_lotion',
    categoryLabel: '晨間輕質乳液',
    targetZone: 'cheeks',
    zoneLabel: '兩頰專用',
    weekType: 'both',
    usageRule: '早晨素顏日兩頰不極端乾燥時的輕盈保濕選擇。',
    molecularTip: '積雪草與靈芝發酵抗氧化屏障，維持白天肌膚油水平衡抗氧化。'
  },
  {
    id: '29-2',
    code: '#29-2',
    name: 'S.NATURE 綠豆角鯊烷水分營養面霜',
    brand: 'S.NATURE',
    category: 'cream_lotion',
    categoryLabel: '深層封層鎖水霜',
    targetZone: 'cheeks',
    zoneLabel: '兩頰乾燥區專用',
    weekType: 'odd',
    usageRule: '奇數週兩頰夜間鎖水主力面霜，手溫按壓兩頰。',
    molecularTip: '植萃角鯊烷結構與人體皮脂高度相似，快速滲透重建秋冬脆弱屏障，徹夜鎖水。'
  },
  {
    id: '30',
    code: '#30',
    name: 'Dr. Reju-All PDRN 高效屏障修復霜',
    brand: 'Dr. Reju-All',
    category: 'cream_lotion',
    categoryLabel: '急救微晶封層霜',
    targetZone: 'cheeks',
    zoneLabel: '兩頰專用（微晶夜後厚敷）',
    weekType: 'both',
    usageRule: '週三微晶針夜兩頰厚塗封層；或兩頰受溫差刺激泛紅脫皮時急救厚敷。',
    molecularTip: 'PDRN 生物微分子配合神經醯胺，加速表皮修護並形成透氣鎖水保護罩。'
  },
  {
    id: '31',
    code: '#31',
    name: 'COSME DECORTE 黛珂 超微導全能修護霜（紫霜）',
    brand: 'COSME DECORTE 黛珂',
    category: 'cream_lotion',
    categoryLabel: '頂級奢華修護霜',
    targetZone: 'cheeks',
    zoneLabel: '兩頰乾燥區專用',
    weekType: 'odd',
    usageRule: '奇數週一頂級修護夜、週六提亮夜兩頰頂級封層。',
    molecularTip: '夜間專用微脂囊囊體徹夜釋放修護養分，翌日晨間兩頰緊緻飽滿充滿水光。'
  },
  {
    id: '32',
    code: '#32',
    name: 'Kiehl\'s 契爾氏 冰河醣蛋白保濕霜',
    brand: 'Kiehl\'s 契爾氏',
    category: 'cream_lotion',
    categoryLabel: '抗低溫鎖水面霜',
    targetZone: 'cheeks',
    zoneLabel: '兩頰乾燥區專用',
    weekType: 'even',
    usageRule: '偶數週兩頰夜間鎖水主力，對抗秋冬乾冷空氣。',
    molecularTip: '南極冰河醣蛋白能抵禦極端低溫乾燥，神經醯胺補充兩頰細胞間脂質。'
  },
  {
    id: '33',
    code: '#33',
    name: 'NIVEA 妮維雅 630 雙效淡斑極致修護晚霜',
    brand: 'NIVEA 妮維雅',
    category: 'cream_lotion',
    categoryLabel: '淡斑美白晚霜',
    targetZone: 'cheeks',
    zoneLabel: '僅塗兩頰斑點暗沉處',
    weekType: 'even',
    usageRule: '偶數週三晚間，取代保濕霜薄擦兩頰淡化秋冬色素沉積。',
    molecularTip: '專利 Luminous630 酪胺酸酶抑制分子，夜間黃金睡眠期高效均勻膚色。',
    cautions: '避開下巴出油處，避免滋潤度過高致痘。'
  },
  {
    id: '34',
    code: '#34',
    name: 'BOBBI BROWN 維他命完美面霜（橘子霜）',
    brand: 'BOBBI BROWN',
    category: 'cream_lotion',
    categoryLabel: '妝前柔焦面霜',
    targetZone: 'cheeks',
    zoneLabel: '兩頰乾燥區專用（嚴禁擦下巴！）',
    weekType: 'both',
    usageRule: '【精緻底妝日專用】塗抹於兩頰乾燥區，撫平乾皮起屑打造完美平滑貼妝感，提升粉底服貼度。',
    molecularTip: '富含維生素 B、C、E 及玻尿酸，牢牢抓住粉底分子避免起屑脫妝。',
    cautions: '下巴粉刺區嚴格避開橘子霜！改擦清爽的 #26-2 米糠乳液預防悶痘。'
  },

  // G. 局部急救與防曬底妝
  {
    id: '25-2',
    code: '#25-2',
    name: 'Lion 獅王 / Acclear Cream 局部抗痘消炎藥膏',
    brand: 'Acclear / Lion',
    category: 'spot_acne',
    categoryLabel: '局部痘痘藥',
    targetZone: 'chin',
    zoneLabel: '局部紅腫發炎痘痘',
    weekType: 'both',
    usageRule: '夜間全部保養步驟完成後，最後一步局部厚點在紅腫大痘上。',
    molecularTip: '布芬淨 (Ibuprofen piconol) 抗發炎 + 異丙基甲基苯酚抗菌，迅速平復發炎囊腫。'
  },
  {
    id: '39',
    code: '#39',
    name: 'd’Alba 黛爾珀 水潤粉光校色提亮防曬霜 SPF50+ PA++++',
    brand: 'd’Alba 黛爾珀',
    category: 'sunscreen_prep',
    categoryLabel: '素顏潤色防曬',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'both',
    usageRule: '素顏上班日全臉塗抹，兼具高防曬係數與自然水光好氣色提亮。',
    molecularTip: '義大利白松露萃取搭配桃粉微光粒子，抗氧化提亮，偽素顏透亮不泛油光。'
  },
  {
    id: '40',
    code: '#40',
    name: '曼秀雷敦 水潤肌高濃度玻尿酸透明防曬精華 SPF50+ PA++++',
    brand: '曼秀雷敦',
    category: 'sunscreen_prep',
    categoryLabel: '底妝日透明防曬',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'both',
    usageRule: '【精緻底妝日專用】水感透明無粉感，全臉均勻補水抗 UV，靜置 3-5 分鐘成膜後再進行後續彩妝。',
    molecularTip: '微分子水相防曬膜，與後續粉底不起屑互不排斥，持水力長達 8 小時。'
  },
  {
    id: '41',
    code: '#41',
    name: '植村秀 無極限保濕妝前乳（紫色／膚色）',
    brand: 'shu uemura 植村秀',
    category: 'sunscreen_prep',
    categoryLabel: '局部校色妝前',
    targetZone: 'all',
    zoneLabel: '局部暗沉校色',
    weekType: 'both',
    usageRule: '【精緻底妝日專用】曼秀雷敦防曬成膜後，局部點塗於嘴角蠟黃暗沉處、下巴或眼下微暗處，修飾膚色不均後再上粉底。',
    molecularTip: '日本植物精萃與控色微粒，修正秋冬疲態暗黃，打造透明白皙底妝基底。'
  },
  {
    id: '42',
    code: '儀器',
    name: 'CHECK2CHECK 離子溫感超導淨膚儀',
    brand: 'CHECK2CHECK',
    category: 'device',
    categoryLabel: '美容儀器',
    targetZone: 'all',
    zoneLabel: '全臉適用',
    weekType: 'both',
    usageRule: '週四夜間專用：先搭配 #04 舒特膚潔膚水正離子導出 3 分鐘，後續搭配玻尿酸/胜肽安瓶負離子深層導入 5 分鐘。',
    molecularTip: '微電流正負離子對衝原理，突破角質電阻屏障，將大分子胜肽玻尿酸深推入基底。'
  },

  // 身體乳 6 款
  {
    id: 'B-01',
    code: '身-01',
    name: 'Paula’s Choice 寶拉珍選 10% AHA 果酸身體乳',
    brand: 'Paula’s Choice',
    category: 'body_lotion',
    categoryLabel: '身體保養',
    targetZone: 'body',
    zoneLabel: '手臂與背部毛孔角化處',
    weekType: 'both',
    usageRule: '週二夜間洗澡擦乾後，局部擦拭手臂雞皮膚毛孔角化與背部暗沉痘疤。',
    molecularTip: '高濃度甘醇酸代謝粗糙老舊角質，平滑顆粒感。',
    cautions: '翌日日間若穿短袖暴露於日光下務必做好防曬。'
  },
  {
    id: 'B-02',
    code: '身-02',
    name: 'NIVEA 妮維雅 亮白極致嫩膚乳液',
    brand: 'NIVEA 妮維雅',
    category: 'body_lotion',
    categoryLabel: '身體保養',
    targetZone: 'body',
    zoneLabel: '全身四肢',
    weekType: 'both',
    usageRule: '週四與週六洗澡後，均勻塗抹全身四肢肌膚。',
    molecularTip: '高純度維他命 C 衍生物抑制黑色素沈積，提亮四肢膚色。'
  },
  {
    id: 'B-03',
    code: '身-03',
    name: 'Vaseline 凡士林 無香專業深層修護潤膚露',
    brand: 'Vaseline 凡士林',
    category: 'body_lotion',
    categoryLabel: '身體保養',
    targetZone: 'body',
    zoneLabel: '乾燥關節與小腿乾裂處',
    weekType: 'both',
    usageRule: '秋冬乾癢最強急救救星，隨時厚塗手肘、膝蓋與小腿乾癢處。',
    molecularTip: '微凝晶凍鎖水網牢牢鎖住水分，完全無香精低敏配方。'
  },
  {
    id: 'B-04',
    code: '身-04',
    name: 'Aveeno 艾惟諾 燕麥優格保濕身體乳',
    brand: 'Aveeno 艾惟諾',
    category: 'body_lotion',
    categoryLabel: '身體保養',
    targetZone: 'body',
    zoneLabel: '全身適用',
    weekType: 'odd',
    usageRule: '奇數週日常洗澡後全身塗抹，舒緩秋冬溫差乾癢。',
    molecularTip: '益生元燕麥萃取強化全身肌膚防禦微生態，長效鎖水 48 小時。'
  },
  {
    id: 'B-05',
    code: '身-05',
    name: '一日茶道 蜜柑紅茶透亮美體乳',
    brand: '一日茶道 TEAORY',
    category: 'body_lotion',
    categoryLabel: '身體保養',
    targetZone: 'body',
    zoneLabel: '全身適用',
    weekType: 'even',
    usageRule: '偶數週一、三、五洗澡後全身塗抹，療癒身心放鬆緊繃神經。',
    molecularTip: '紅茶多酚萃取抗氧化抗老，蜜柑清香舒緩助眠。'
  },
  {
    id: 'B-06',
    code: '身-06',
    name: 'innisfree #002 芳香滋潤身體乳',
    brand: 'innisfree',
    category: 'body_lotion',
    categoryLabel: '身體保養',
    targetZone: 'body',
    zoneLabel: '全身適用',
    weekType: 'even',
    usageRule: '偶數週日晚間洗澡後全身塗抹，深層滋潤迎向下週。',
    molecularTip: '濟州植物保濕配方，質地絲滑好吸收不黏被褥。'
  },

  // 6 款內服保健品
  {
    id: 'S-01',
    code: '健-01',
    name: '8VC 2200mg 維生素 C 粉（1 包）',
    brand: '8VC',
    category: 'supplement',
    categoryLabel: '內服保健品',
    targetZone: 'all',
    zoneLabel: '早晨早餐隨餐',
    weekType: 'both',
    usageRule: '☀️ 早晨早餐隨餐搭配溫開水吞服 1 包。',
    molecularTip: '高濃度微囊抗壞血酸，協同穀胱甘肽還原抗氧化循環，促進膠原蛋白合成。'
  },
  {
    id: 'S-02',
    code: '健-02',
    name: 'BHK\'s 奢光錠（穀胱甘肽 + 維生素C）',
    brand: 'BHK\'s',
    category: 'supplement',
    categoryLabel: '內服保健品',
    targetZone: 'all',
    zoneLabel: '早晨早餐隨餐（1 錠）',
    weekType: 'both',
    usageRule: '☀️ 早晨隨早餐吞服 1 錠。【已徹底移至白天，避免干擾夜間睡眠與處方藥吸收】。',
    molecularTip: '日本專利圓酵母穀胱甘肽，白天提供全方位紫外線內源防護，抑制酪胺酸酶。'
  },
  {
    id: 'S-03',
    code: '健-03',
    name: 'Kirkland 科克蘭 維生素 D3（2 錠）',
    brand: 'Kirkland 科克蘭',
    category: 'supplement',
    categoryLabel: '內服保健品',
    targetZone: 'all',
    zoneLabel: '午餐或晚餐隨餐（需油脂輔助）',
    weekType: 'both',
    usageRule: '🌤️ 午餐或晚餐擇一隨餐或餐後立即吃 2 錠（脂溶性，食物油脂能大幅提升吸收率）。',
    molecularTip: '維持血鈣平衡、調節免疫機能與神經傳導，秋冬日照不足必備。'
  },
  {
    id: 'S-04',
    code: '健-04',
    name: 'Thorne 基本維生素 B 複合物（1 粒）',
    brand: 'Thorne Research',
    category: 'supplement',
    categoryLabel: '內服保健品',
    targetZone: 'all',
    zoneLabel: '早晨處方藥後【間隔 1 小時】',
    weekType: 'both',
    usageRule: '☀️ 早晨早餐後吃完處方藥，【務必嚴格間隔 1 小時後】再吞服 1 粒！',
    molecularTip: '活性輔酶型態 B 族維生素（甲鈷胺、5-MTHF），避免與抗癲癇抗甲狀腺藥物在腸道產生吸收競爭。'
  },
  {
    id: 'S-05',
    code: '健-05',
    name: 'Sports Research Omega-3 頂級深海魚油（1 粒）',
    brand: 'Sports Research',
    category: 'supplement',
    categoryLabel: '內服保健品',
    targetZone: 'all',
    zoneLabel: '午餐或晚餐隨餐（1 粒）',
    weekType: 'both',
    usageRule: '🌤️ 午餐或晚餐擇一隨餐吞服 1 粒。',
    molecularTip: 'rTG 型態高純度 EPA/DHA，抗炎降血脂，協同 D3 與蔓越莓抗氧化。'
  },
  {
    id: 'S-06',
    code: '健-06',
    name: 'Webber Naturals 蔓越莓濃縮膠囊（1-2 粒）',
    brand: 'Webber Naturals',
    category: 'supplement',
    categoryLabel: '內服保健品',
    targetZone: 'all',
    zoneLabel: '午餐或晚餐隨餐（1-2 粒）',
    weekType: 'both',
    usageRule: '🌤️ 午餐或晚餐擇一隨餐吞服 1-2 粒。',
    molecularTip: 'A 型前花青素 (PACs) 抑制致病菌吸附尿道上皮細胞，守護女性私密防禦。'
  },

  // 4 款常規處方用藥
  {
    id: 'M-01',
    code: '藥-01',
    name: '"汎生" 普樂彼錠 50 毫克 (PTU)',
    brand: '汎生製藥',
    category: 'medicine',
    categoryLabel: '常規處方藥',
    targetZone: 'all',
    zoneLabel: '早晨早餐後立即吃（3 顆）',
    weekType: 'both',
    usageRule: '☀️ 早餐後立即吃 3 顆。',
    molecularTip: '抗甲狀腺藥物（抑制甲狀腺素合成），請每日固定時間按時服用不可中斷。',
    cautions: '避免空腹服用刺激胃部；請與 Thorne B 群間隔 60 分鐘。'
  },
  {
    id: 'M-02',
    code: '藥-02',
    name: '"信東" 癲鍵錠 50 毫克 (Topiramate)',
    brand: '信東生技',
    category: 'medicine',
    categoryLabel: '常規處方藥',
    targetZone: 'all',
    zoneLabel: '早晨早餐後立即吃（1 顆）',
    weekType: 'both',
    usageRule: '☀️ 早餐後立即吃 1 顆。',
    molecularTip: '神經傳導穩定與抗痙攣，請配合足量水分飲用。',
    cautions: '請與高活性維生素 B 群間隔 1 小時服用。'
  },
  {
    id: 'M-03',
    code: '藥-03',
    name: '"瑞安" 癲必停持續性藥效膜衣錠 500 毫克 (Depakote ER)',
    brand: '瑞安大藥廠',
    category: 'medicine',
    categoryLabel: '常規處方藥',
    targetZone: 'all',
    zoneLabel: '🌙 睡前吞服（0.5 顆）',
    weekType: 'both',
    usageRule: '🌙 睡前吞服 0.5 顆。',
    molecularTip: '緩釋膜衣錠，夜晚穩定神經元 GABA 濃度，夜間腸胃僅保留給安眠與神經藥物。',
    cautions: '請整顆以開水吞服，勿咀嚼磨碎以保持續緩釋藥效。'
  },
  {
    id: 'M-04',
    code: '藥-04',
    name: '易靜錠 2 毫克 (羅眠樂 Loramet)',
    brand: '生達化學',
    category: 'medicine',
    categoryLabel: '常規處方藥',
    targetZone: 'all',
    zoneLabel: '🌙 睡前吞服（1 顆）',
    weekType: 'both',
    usageRule: '🌙 睡前吞服 1 顆。',
    molecularTip: '助眠放鬆中樞神經，睡前 15-30 分鐘服下後請立即就寢。',
    cautions: '服藥後嚴禁操作危險儀器，請避免搭配酒精飲品。'
  }
];

// Helper to get product by id
export const getProductById = (id: string): ProductItem | undefined => {
  return ALL_PRODUCTS.find(p => p.id === id);
};

export const WEEKDAY_INFO: Record<DayOfWeek, { name: string; short: string; themeOdd: string; themeEven: string }> = {
  mon: { name: '星期一', short: '週一', themeOdd: '💧 頂級修護夜', themeEven: '💧 頂級修護夜' },
  tue: { name: '星期二', short: '週二', themeOdd: '🧪 水楊酸煥膚夜 (粉刺大掃除)', themeEven: '🧪 水楊酸夜 (粉刺大掃除)' },
  wed: { name: '星期三', short: '週三', themeOdd: '⚡ 微晶激活夜 (VT 300)', themeEven: '⚡ 微晶激活夜 (VT 300)' },
  thu: { name: '星期四', short: '週四', themeOdd: '🛡️ 儀器深層導入夜', themeEven: '🛡️ 儀器深層導入夜' },
  fri: { name: '星期五', short: '週五', themeOdd: '🌙 A 醇微晶抗老夜', themeEven: '🌙 A 醇微晶抗老夜' },
  sat: { name: '星期六', short: '週六', themeOdd: '✨ 美白與提亮夜', themeEven: '✨ 美白與提亮夜' },
  sun: { name: '星期日', short: '週日', themeOdd: '🌿 深度保濕面膜夜', themeEven: '🌿 痘痘藍膜修護夜' }
};

export const DAY_ROUTINES: DayRoutine[] = [
  {
    day: 'mon',
    dayName: '週一',
    themeTitle: '💧 週一：頂級修護夜',
    themeBadge: '日常溫和修護',
    themeDescription: '週一開啟新的一週，以高階溫和滋養為主，打好皮脂膜保護屏障。',
    cheeksCare: '兩頰乾肌：加強角鯊烷或冰河霜深層鎖水',
    chinCare: '下巴粉刺：僅薄擦 #26-2 米糠乳液，局部點塗抗痘消炎',
    oddWeek: {
      cleansingDesc: '#05 Capsule Serum 維C潔面卸妝凝膠 ➔ #06 Relove 胺基酸潔面乳',
      bodyLotionDesc: '#B-04 Aveeno 燕麥優格保濕身體乳 全身塗抹舒緩',
      specialProcedure: {
        title: '全臉微脂囊前導通道 + 先乳後水',
        desc: '洗臉後先擦 #10 痘痘水，按壓 #15 小紫瓶開啟通道，接著僅在兩頰塗抹 #28 AQ 煥妍柔膚乳 III 軟化角質，再拍上 #16 靈芝水。',
        tag: '分子吸收通道'
      },
      skincareSteps: [
        {
          id: 'mon-odd-1',
          title: '下巴局部抗菌調理',
          productCode: '#10',
          productName: '小林製藥 EAUDE MUGE 抗痘化妝水',
          targetZoneText: '下巴痘痘粉刺區',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1',
          instruction: '化妝棉倒取適量，輕柔擦拭下巴痘痘粉刺區，抗菌預防發炎。'
        },
        {
          id: 'mon-odd-2',
          title: '微脂囊前導通道開啟',
          productCode: '#15',
          productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
          targetZoneText: '全臉適用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '按壓 2-3 泵，手溫按壓包覆全臉，微脂囊開啟肌膚吸收管道。'
        },
        {
          id: 'mon-odd-3',
          title: '先乳後水關鍵：角質軟化',
          productCode: '#28',
          productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III',
          targetZoneText: '【僅塗抹兩頰乾燥區】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '取 1-2 泵，手溫按壓兩頰乾燥區軟化角質，下巴粉刺區嚴格避開！'
        },
        {
          id: 'mon-odd-4',
          title: '水相舒緩補水',
          productCode: '#16',
          productName: 'ORIGINS 品木宣言 靈芝水',
          targetZoneText: '全臉拍拭',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4',
          instruction: '倒於掌心輕拍全臉，接續 AQ 乳液後深層補水，鎮靜微泛紅。'
        },
        {
          id: 'mon-odd-5',
          title: '美白抗暗沉精粹',
          productCode: '#20',
          productName: 'DECORTE 黛珂 極光煥采精粹 1.8X',
          targetZoneText: '全臉均勻塗抹',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5',
          instruction: '取滴管適量塗抹全臉，高濃度傳明酸提亮暗沉膚色。'
        },
        {
          id: 'mon-odd-6',
          title: '深層注水保濕精華',
          productCode: '#21',
          productName: 'Torriden 低分子玻尿酸保濕精華',
          targetZoneText: '全臉深層注水',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6',
          instruction: '全臉均勻推開，微分子玻尿酸由內而外填滿肌底水分。'
        },
        {
          id: 'mon-odd-7',
          title: '眼周防禦與撫紋',
          productCode: '#35',
          productName: '雅詩蘭黛 特潤全能修護亮眼霜',
          targetZoneText: '眼周輕按',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 7',
          instruction: '取米粒大小輕點眼周，指腹由內向外輕輕按壓至吸收。'
        },
        {
          id: 'mon-odd-8',
          title: '分區鎖水：兩頰封層',
          productCode: '#29-2',
          productName: 'S.NATURE 水庫角鯊烷保濕霜',
          targetZoneText: '僅擦兩頰乾燥區',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 8A',
          instruction: '取五元硬幣大小按壓兩頰，植萃角鯊烷重建脂質防護罩。'
        },
        {
          id: 'mon-odd-9',
          title: '分區鎖水：下巴清爽',
          productCode: '#26-2',
          productName: 'MUJI 無印良品 米糠發酵乳液',
          targetZoneText: '僅薄擦下巴粉刺區',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 8B',
          instruction: '下巴僅能薄擦米糠乳液，嚴禁塗抹厚重角鯊霜！'
        },
        {
          id: 'mon-odd-10',
          title: '局部紅腫急救',
          productCode: '#25-2',
          productName: 'Acclear Cream 局部痘痘藥',
          targetZoneText: '下巴紅腫發炎痘痘',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 9 (選用)',
          instruction: '若下巴有發炎紅腫痘，最後局部厚敷點塗一小點。'
        }
      ]
    },
    evenWeek: {
      cleansingDesc: '#03 DUO 麗優卸妝膏 (加強下巴按摩) ➔ #07 綠茶胺基酸潔面乳',
      bodyLotionDesc: '#B-05 一日茶道 蜜柑紅茶透亮美體乳 全身放鬆塗抹',
      specialProcedure: {
        title: '偶數週修護 + 下巴高濃度菸鹼醯胺控油',
        desc: '全臉先乳後水保養後，下巴局部精準點塗 #29 The Ordinary 菸鹼醯胺+鋅，兩頰以 #32 契爾氏冰河霜厚實封層。',
        tag: '精準控油分流'
      },
      skincareSteps: [
        {
          id: 'mon-even-1',
          title: '下巴局部抗菌調理',
          productCode: '#10',
          productName: '小林製藥 EAUDE MUGE 抗痘化妝水',
          targetZoneText: '下巴痘痘粉刺區',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1',
          instruction: '化妝棉倒取適量，擦拭下巴痘痘粉刺區。'
        },
        {
          id: 'mon-even-2',
          title: '微脂囊前導通道開啟',
          productCode: '#15',
          productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
          targetZoneText: '全臉按壓',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '手溫包覆全臉按壓 2-3 泵。'
        },
        {
          id: 'mon-even-3',
          title: '先乳後水關鍵：角質軟化',
          productCode: '#28',
          productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III',
          targetZoneText: '【僅塗抹兩頰乾燥區】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '兩頰按壓塗抹，軟化變硬乾燥角質，避開下巴。'
        },
        {
          id: 'mon-even-4',
          title: '清爽保濕化妝水',
          productCode: '#17',
          productName: 'MUJI 無印良品 化妝水 清爽型',
          targetZoneText: '全臉拍水',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4',
          instruction: '全臉拍拭，無添加純淨水分補充。'
        },
        {
          id: 'mon-even-5',
          title: '極光煥采美白精粹',
          productCode: '#20',
          productName: 'DECORTE 黛珂 極光煥采精粹 1.8X',
          targetZoneText: '全臉均勻',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5',
          instruction: '均勻塗抹全臉提亮抗暗黃。'
        },
        {
          id: 'mon-even-6',
          title: '全效全方位精華液',
          productCode: '#26',
          productName: '高濃度 All-in-One 全效水感精華液',
          targetZoneText: '全臉適用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6',
          instruction: '均勻推勻吸收，提供複合胜肽抗老營養。'
        },
        {
          id: 'mon-even-7',
          title: '下巴局部控油收斂',
          productCode: '#29',
          productName: 'The Ordinary 菸鹼醯胺 10% + 鋅 1%',
          targetZoneText: '【僅局部點塗下巴】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 7',
          instruction: '取 1 滴僅局部點塗下巴出油處，抑制皮脂，嚴禁塗兩頰。'
        },
        {
          id: 'mon-even-8',
          title: '眼霜撫紋修護',
          productCode: '#36',
          productName: '巴黎萊雅 紫熨斗 MAX 眼霜',
          targetZoneText: '眼周專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 8',
          instruction: '玻色因精華輕按眼周與法令紋。'
        },
        {
          id: 'mon-even-9',
          title: '分區鎖水：兩頰冰河霜',
          productCode: '#32',
          productName: '契爾氏 冰河醣蛋白保濕霜',
          targetZoneText: '僅兩頰乾燥區',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 9A',
          instruction: '兩頰厚實按壓封層，抵禦乾燥冷氣。'
        },
        {
          id: 'mon-even-10',
          title: '分區鎖水：下巴米糠乳',
          productCode: '#26-2',
          productName: 'MUJI 無印良品 米糠發酵乳液',
          targetZoneText: '下巴薄擦',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 9B',
          instruction: '下巴只薄擦米糠乳液，清爽控油。'
        }
      ]
    }
  },
  {
    day: 'tue',
    dayName: '週二',
    themeTitle: '🧪 週二：水楊酸夜 (粉刺大掃除)',
    themeBadge: '水楊酸煥膚 (粉刺大掃除)',
    themeDescription: '水楊酸只點下巴與鼻翼，兩頰靠角鯊烷/冰河霜加強滋潤鎖水，落實極致分區保養。',
    cheeksCare: '兩頰乾肌：加強角鯊烷/冰河霜保濕封層',
    chinCare: '下巴粉刺：僅薄擦 #26-2 米糠乳液，嚴禁厚霜',
    oddWeek: {
      cleansingDesc: '#01 ilso 粉刺導出 (敷下巴10分) ➔ #02 MUJI 卸妝油 ➔ #06 Relove 潔面乳',
      bodyLotionDesc: '#B-01 Paula’s Choice 10% AHA 果酸身體乳（手臂雞皮/背部痘疤局部）',
      specialProcedure: {
        title: '首步活性原則：裸肌水楊酸 3 分鐘',
        desc: '臉部洗淨後徹底擦乾，先在下巴與鼻翼點塗 #22 寶拉 2% 水楊酸，靜置 3 分鐘等待脂溶性酸深層滲透毛孔後，再進行小紫瓶與兩頰 AQ 乳液！',
        tag: '首步活性原則'
      },
      skincareSteps: [
        {
          id: 'tue-odd-1',
          title: '裸肌首步：水楊酸深層清粉刺',
          productCode: '#22',
          productName: '寶拉珍選 2% 水楊酸精華液',
          targetZoneText: '【僅下巴/鼻翼裸肌使用】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1 (裸肌)',
          instruction: '洗臉後徹底擦乾，第一步取 2-3 滴擦拭下巴與鼻翼，靜置 3 分鐘！',
          timerDurationMinutes: 3,
          isKeyFocus: true
        },
        {
          id: 'tue-odd-2',
          title: '全臉前導微脂囊開啟通道',
          productCode: '#15',
          productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
          targetZoneText: '全臉手溫按壓',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '靜置 3 分鐘後，手溫按壓全臉，補足肌底水分。'
        },
        {
          id: 'tue-odd-3',
          title: '先乳後水：兩頰角質軟化',
          productCode: '#28',
          productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III',
          targetZoneText: '【僅塗兩頰，嚴禁下巴】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '僅按壓兩頰，軟化角質，避開剛剛擦過酸類的下巴。'
        },
        {
          id: 'tue-odd-4',
          title: '舒緩抗敏補水',
          productCode: '#16',
          productName: 'ORIGINS 品木宣言 靈芝水',
          targetZoneText: '全臉拍水',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4',
          instruction: '全臉輕拍靈芝水，舒緩水楊酸後可能的微乾燥。'
        },
        {
          id: 'tue-odd-5',
          title: '眼霜滋養',
          productCode: '#35',
          productName: '雅詩蘭黛 特潤全能修護亮眼霜',
          targetZoneText: '眼周專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5',
          instruction: '輕抹眼周，防護脆弱眼部肌膚。'
        },
        {
          id: 'tue-odd-6',
          title: '分區鎖水：兩頰滋潤角鯊霜',
          productCode: '#29-2',
          productName: 'S.NATURE 水庫角鯊烷保濕霜',
          targetZoneText: '兩頰專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6A',
          instruction: '兩頰加強厚塗角鯊烷面霜，防止秋冬脫皮。'
        },
        {
          id: 'tue-odd-7',
          title: '分區鎖水：下巴清爽米糠乳',
          productCode: '#26-2',
          productName: 'MUJI 無印良品 米糠發酵乳液',
          targetZoneText: '下巴薄擦',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6B',
          instruction: '下巴酸類煥膚後，只薄擦一層清爽米糠乳液。'
        }
      ]
    },
    evenWeek: {
      cleansingDesc: '#01 ilso 粉刺導出 (敷下巴10分) ➔ #03 DUO 卸妝膏 ➔ #07 綠茶潔面乳',
      bodyLotionDesc: '#B-01 Paula’s Choice 10% AHA 果酸身體乳（手臂雞皮/背部痘疤局部）',
      specialProcedure: {
        title: '偶數週水楊酸裸肌淨化 + 冰河霜鎖水',
        desc: '洗臉徹底擦乾後，先在下巴鼻翼擦 #22 寶拉水楊酸等 3 分鐘，再以小紫瓶 + 兩頰 AQ 乳 + MUJI 化妝水舒緩，最後兩頰擦契爾氏冰河霜。',
        tag: '首步活性原則'
      },
      skincareSteps: [
        {
          id: 'tue-even-1',
          title: '裸肌首步：水楊酸深層清粉刺',
          productCode: '#22',
          productName: '寶拉珍選 2% 水楊酸精華液',
          targetZoneText: '【僅下巴/鼻翼裸肌使用】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1 (裸肌)',
          instruction: '徹底擦乾後第一步使用，點塗下巴與鼻翼，倒數 3 分鐘！',
          timerDurationMinutes: 3,
          isKeyFocus: true
        },
        {
          id: 'tue-even-2',
          title: '微脂囊前導通道開啟',
          productCode: '#15',
          productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
          targetZoneText: '全臉手溫按壓',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '手溫包覆全臉按壓 2-3 泵。'
        },
        {
          id: 'tue-even-3',
          title: '先乳後水：兩頰角質軟化',
          productCode: '#28',
          productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III',
          targetZoneText: '【僅塗兩頰，嚴禁下巴】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '兩頰按壓塗抹，軟化變硬乾燥角質，避開下巴。'
        },
        {
          id: 'tue-even-4',
          title: '清爽保濕化妝水',
          productCode: '#17',
          productName: 'MUJI 無印良品 化妝水 清爽型',
          targetZoneText: '全臉拍水',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4',
          instruction: '全臉輕拍補水。'
        },
        {
          id: 'tue-even-5',
          title: '眼霜撫紋修護',
          productCode: '#36',
          productName: '巴黎萊雅 紫熨斗 MAX 眼霜',
          targetZoneText: '眼周專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5',
          instruction: '玻色因精華輕按眼周。'
        },
        {
          id: 'tue-even-6',
          title: '分區鎖水：兩頰冰河霜',
          productCode: '#32',
          productName: '契爾氏 冰河醣蛋白保濕霜',
          targetZoneText: '僅兩頰乾燥區',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6A',
          instruction: '兩頰厚實按壓封層，防止乾癢。'
        },
        {
          id: 'tue-even-7',
          title: '分區鎖水：下巴米糠乳',
          productCode: '#26-2',
          productName: 'MUJI 無印良品 米糠發酵乳液',
          targetZoneText: '下巴薄擦',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6B',
          instruction: '下巴只薄擦清爽米糠乳液。'
        }
      ]
    }
  },
  {
    day: 'wed',
    dayName: '週三',
    themeTitle: '⚡ 週三：微晶激活夜 (VT Reedle 300)',
    themeBadge: '微晶物理通道激活',
    themeDescription: 'VT Reedle 300 微針精華直通角質層，打通微通道，當晚嚴禁使用小紫瓶與 AQ 乳！',
    cheeksCare: '兩頰乾肌：微晶後厚塗 #30 Dr. Reju-All 修復霜或淡斑晚霜',
    chinCare: '下巴粉刺：避開紅腫發炎痘痘，薄擦米糠乳',
    oddWeek: {
      cleansingDesc: '#02 MUJI 卸妝油 ➔ #06 Relove 潔面乳',
      bodyLotionDesc: '#B-04 Aveeno 燕麥優格身體乳 全身滋養',
      specialProcedure: {
        title: '首步活性原則：裸肌乾壓 VT 微針 300',
        desc: '臉部擦乾後第一步全臉乾壓 #23 VT 300（微刺感正常，避開眼周與下巴發炎痘），當晚嚴禁擦小紫瓶與 AQ 乳，直接接續 #25 PDRN 修護安瓶！',
        tag: '禁小紫瓶與AQ乳'
      },
      skincareSteps: [
        {
          id: 'wed-odd-1',
          title: '裸肌首步：VT 微針 300 激活通道',
          productCode: '#23',
          productName: 'VT Reedle Shot 300 微晶精華',
          targetZoneText: '【裸肌全臉按壓，避開眼周與紅腫痘】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1 (裸肌)',
          instruction: '臉部完全擦乾後乾壓全臉，不可大力揉搓。微刺感為針狀微晶開啟吸收通道。',
          isKeyFocus: true
        },
        {
          id: 'wed-odd-2',
          title: '微晶後純補水修護安瓶',
          productCode: '#25',
          productName: 'Medicube PDRN 粉紅胜肽安瓶',
          targetZoneText: '全臉吸收',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '微針通道開啟後立即注入 PDRN，激發深層修護再生。'
        },
        {
          id: 'wed-odd-3',
          title: '眼周防禦',
          productCode: '#35',
          productName: '雅詩蘭黛 特潤全能修護亮眼霜',
          targetZoneText: '眼周專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '眼周輕按，滋養眼周細緻肌膚。'
        },
        {
          id: 'wed-odd-4',
          title: '兩頰強力封層：Dr. Reju-All 修復霜',
          productCode: '#30',
          productName: 'Dr. Reju-All PDRN 高效修復霜',
          targetZoneText: '【兩頰厚塗封層】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4A',
          instruction: '微晶後兩頰需厚厚塗抹修復霜，迅速退紅鎮靜。'
        },
        {
          id: 'wed-odd-5',
          title: '下巴清爽乳液',
          productCode: '#26-2',
          productName: 'MUJI 無印良品 米糠發酵乳液',
          targetZoneText: '下巴薄擦',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4B',
          instruction: '下巴薄薄塗抹米糠乳液即可。'
        }
      ]
    },
    evenWeek: {
      cleansingDesc: '#03 DUO 卸妝膏 ➔ #07 綠茶胺基酸潔面乳',
      bodyLotionDesc: '#B-05 一日茶道 蜜柑紅茶透亮美體乳 全身放鬆塗抹',
      specialProcedure: {
        title: '偶數週微晶針 + 兩頰妮維雅 630 淡斑晚霜',
        desc: '全臉乾壓 VT 300 ➔ #25 PDRN 安瓶 ➔ 兩頰換上 #33 妮維雅 630 淡斑晚霜，利用微晶通道大幅增幅美白淡斑活性！',
        tag: '微晶淡斑加成'
      },
      skincareSteps: [
        {
          id: 'wed-even-1',
          title: '裸肌首步：VT 微針 300 激活通道',
          productCode: '#23',
          productName: 'VT Reedle Shot 300 微晶精華',
          targetZoneText: '【裸肌全臉按壓，避開眼周與紅腫痘】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1 (裸肌)',
          instruction: '臉部完全擦乾後乾壓全臉，開啟物理吸收微孔。',
          isKeyFocus: true
        },
        {
          id: 'wed-even-2',
          title: '微晶後純補水修護安瓶',
          productCode: '#25',
          productName: 'Medicube PDRN 粉紅胜肽安瓶',
          targetZoneText: '全臉吸收',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '全臉均勻塗抹 PDRN 胜肽安瓶。'
        },
        {
          id: 'wed-even-3',
          title: '眼霜撫紋修護',
          productCode: '#36',
          productName: '巴黎萊雅 紫熨斗 MAX 眼霜',
          targetZoneText: '眼周專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '輕按眼周。'
        },
        {
          id: 'wed-even-4',
          title: '兩頰高階淡斑：妮維雅 630 晚霜',
          productCode: '#33',
          productName: 'NIVEA 妮維雅 630 雙效淡斑晚霜',
          targetZoneText: '【僅塗兩頰，嚴禁下巴】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4A',
          instruction: '利用微晶微通道，在兩頰薄塗 630 晚霜，淡斑提亮效果倍增！'
        },
        {
          id: 'wed-even-5',
          title: '下巴清爽乳液',
          productCode: '#26-2',
          productName: 'MUJI 無印良品 米糠發酵乳液',
          targetZoneText: '下巴薄擦',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4B',
          instruction: '下巴薄擦米糠乳液，避免滋潤致痘。'
        }
      ]
    }
  },
  {
    day: 'thu',
    dayName: '週四',
    themeTitle: '🛡️ 週四：儀器深層導入夜',
    themeBadge: '離子導出導入護理',
    themeDescription: '週四搭配 CHECK2CHECK 離子超導儀，正離子深層導出潔面，負離子深層導入精華。',
    cheeksCare: '兩頰乾肌：儀器導入補水，加強面霜鎖水',
    chinCare: '下巴粉刺：儀器導出加強下巴，保濕薄擦米糠乳',
    oddWeek: {
      cleansingDesc: '#04 舒特膚潔膚水 (儀器正離子導出 3 分鐘) ➔ #06 Relove 潔面乳',
      bodyLotionDesc: '#B-02 NIVEA 亮白極致嫩膚乳液（四肢全身塗抹）',
      specialProcedure: {
        title: '先乳後水 + 離子超導玻尿酸精華',
        desc: '小紫瓶 ➔ 兩頰 AQ 乳液 ➔ 靈芝水後，搭配美容儀「負離子導入模式」導入 #21 Torriden 玻尿酸精華 5 分鐘！',
        tag: '儀器深層導入'
      },
      skincareSteps: [
        {
          id: 'thu-odd-1',
          title: '美容儀正離子深層導出',
          productCode: '儀器 + #04',
          productName: 'CHECK2CHECK 離子儀 + 舒特膚潔膚水',
          targetZoneText: '全臉與下巴導出',
          timingCategory: 'night_cleansing',
          timingLabel: '洗卸程序',
          instruction: '化妝棉沾濕舒特膚潔膚水夾於儀器上，正離子模式全臉滑動 3 分鐘導出殘妝與髒污。',
          timerDurationMinutes: 3
        },
        {
          id: 'thu-odd-2',
          title: '微脂囊前導通道開啟',
          productCode: '#15',
          productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
          targetZoneText: '全臉手溫按壓',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1',
          instruction: '洗臉後全臉手溫按壓小紫瓶。'
        },
        {
          id: 'thu-odd-3',
          title: '先乳後水：兩頰角質軟化',
          productCode: '#28',
          productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III',
          targetZoneText: '【僅塗抹兩頰乾燥區】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '按壓兩頰軟化角質，避開下巴。'
        },
        {
          id: 'thu-odd-4',
          title: '化妝水水相打底',
          productCode: '#16',
          productName: 'ORIGINS 品木宣言 靈芝水',
          targetZoneText: '全臉拍水',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '全臉均勻拍打靈芝水。'
        },
        {
          id: 'thu-odd-5',
          title: '美容儀負離子超導導入',
          productCode: '儀器 + #21',
          productName: 'CHECK2CHECK 離子儀 + Torriden 玻尿酸',
          targetZoneText: '全臉深層超導導入',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4 (超導)',
          instruction: '精華液塗抹全臉，開啟負離子溫感導入模式，由下往上滑動 5 分鐘。',
          timerDurationMinutes: 5,
          isKeyFocus: true
        },
        {
          id: 'thu-odd-6',
          title: '眼霜滋養',
          productCode: '#35',
          productName: '雅詩蘭黛 特潤全能修護亮眼霜',
          targetZoneText: '眼周專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5',
          instruction: '輕抹眼周。'
        },
        {
          id: 'thu-odd-7',
          title: '分區鎖水：兩頰角鯊霜',
          productCode: '#29-2',
          productName: 'S.NATURE 水庫角鯊烷保濕霜',
          targetZoneText: '兩頰專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6A',
          instruction: '兩頰手溫按壓鎖水。'
        },
        {
          id: 'thu-odd-8',
          title: '分區鎖水：下巴米糠乳',
          productCode: '#26-2',
          productName: 'MUJI 無印良品 米糠發酵乳液',
          targetZoneText: '下巴薄擦',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6B',
          instruction: '下巴清爽薄擦。'
        }
      ]
    },
    evenWeek: {
      cleansingDesc: '#04 舒特膚潔膚水 (儀器導出) ➔ #07 綠茶潔面乳',
      bodyLotionDesc: '#B-02 NIVEA 亮白極致嫩膚乳液（四肢全身塗抹）',
      specialProcedure: {
        title: '偶數週離子儀超導 PDRN 安瓶',
        desc: '小紫瓶 ➔ 兩頰 AQ 乳 ➔ MUJI 化妝水後，搭配美容儀導入 #25 Medicube PDRN 粉紅胜肽安瓶 5 分鐘，兩頰契爾氏冰河霜鎖水！',
        tag: '儀器胜肽導入'
      },
      skincareSteps: [
        {
          id: 'thu-even-1',
          title: '美容儀正離子深層導出',
          productCode: '儀器 + #04',
          productName: 'CHECK2CHECK 離子儀 + 舒特膚潔膚水',
          targetZoneText: '全臉導出清潔',
          timingCategory: 'night_cleansing',
          timingLabel: '洗卸程序',
          instruction: '正離子導出殘妝髒污 3 分鐘。',
          timerDurationMinutes: 3
        },
        {
          id: 'thu-even-2',
          title: '微脂囊前導通道開啟',
          productCode: '#15',
          productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
          targetZoneText: '全臉手溫按壓',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1',
          instruction: '手溫包覆全臉按壓。'
        },
        {
          id: 'thu-even-3',
          title: '先乳後水：兩頰角質軟化',
          productCode: '#28',
          productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III',
          targetZoneText: '【僅塗抹兩頰乾燥區】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '按壓兩頰軟化角質，避開下巴。'
        },
        {
          id: 'thu-even-4',
          title: '化妝水補水',
          productCode: '#17',
          productName: 'MUJI 無印良品 化妝水 清爽型',
          targetZoneText: '全臉拍水',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '拍拭全臉補充水分。'
        },
        {
          id: 'thu-even-5',
          title: '美容儀負離子超導 PDRN 安瓶',
          productCode: '儀器 + #25',
          productName: 'CHECK2CHECK 離子儀 + PDRN 胜肽安瓶',
          targetZoneText: '全臉超導導入',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4 (超導)',
          instruction: '開啟負離子模式導入 PDRN 安瓶 5 分鐘。',
          timerDurationMinutes: 5,
          isKeyFocus: true
        },
        {
          id: 'thu-even-6',
          title: '眼霜撫紋修護',
          productCode: '#36',
          productName: '巴黎萊雅 紫熨斗 MAX 眼霜',
          targetZoneText: '眼周專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5',
          instruction: '輕按眼周。'
        },
        {
          id: 'thu-even-7',
          title: '分區鎖水：兩頰冰河霜',
          productCode: '#32',
          productName: '契爾氏 冰河醣蛋白保濕霜',
          targetZoneText: '兩頰專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6A',
          instruction: '兩頰按壓封層。'
        },
        {
          id: 'thu-even-8',
          title: '分區鎖水：下巴米糠乳',
          productCode: '#26-2',
          productName: 'MUJI 無印良品 米糠發酵乳液',
          targetZoneText: '下巴薄擦',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6B',
          instruction: '下巴薄擦米糠乳。'
        }
      ]
    }
  },
  {
    day: 'fri',
    dayName: '週五',
    themeTitle: '🌙 週五：A 醇微晶抗老夜',
    themeBadge: 'A 醇微晶抗老夜',
    themeDescription: '週五迎接週末，進行高效抗老撫紋。當晚停用 #28 AQ 乳液避免阻礙 A 醇吸收，眼周先擦眼霜隔離！',
    cheeksCare: '兩頰乾肌：A 醇後以溫和角鯊霜或冰河霜全面封層',
    chinCare: '下巴粉刺：A 醇避開紅腫發炎痘痘，薄擦米糠乳',
    oddWeek: {
      cleansingDesc: '#05 維C潔面卸妝凝膠 (若素顏防曬) ➔ #06 Relove 潔面乳',
      bodyLotionDesc: '#B-04 Aveeno 燕麥優格身體乳 全身滋潤',
      specialProcedure: {
        title: '當晚停用 #28 AQ 乳液 + 眼霜隔離先行',
        desc: '小紫瓶 ➔ 靈芝水（當晚停用 AQ 乳防阻礙）➔ 先擦 #35 雅詩蘭黛眼霜隔離保護眼周 ➔ 核心：全臉按壓豌豆大小 #24 Celimax A 醇 ➔ #29-2 角鯊霜溫和封層！',
        tag: 'A醇精準耐受'
      },
      skincareSteps: [
        {
          id: 'fri-odd-1',
          title: '微脂囊前導打底',
          productCode: '#15',
          productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
          targetZoneText: '全臉手溫按壓',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1',
          instruction: '洗臉後按壓全臉，提供肌底水分緩衝。'
        },
        {
          id: 'fri-odd-2',
          title: '水相舒緩打底 (停用 AQ 乳)',
          productCode: '#16',
          productName: 'ORIGINS 品木宣言 靈芝水',
          targetZoneText: '全臉輕拍',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '輕拍靈芝水補水。【注意：當晚停用 #28 AQ 乳液，避免過多親脂油脂干擾 A 醇吸收】。'
        },
        {
          id: 'fri-odd-3',
          title: '眼周安全隔離先行',
          productCode: '#35',
          productName: '雅詩蘭黛 特潤全能修護亮眼霜',
          targetZoneText: '【眼周優先隔離塗抹】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '在擦 A 醇前，先將眼霜塗抹於眼周作為保護層，防止 A 醇擴散刺激脆弱眼皮。'
        },
        {
          id: 'fri-odd-4',
          title: '核心活性：Celimax A 醇微晶精華',
          productCode: '#24',
          productName: 'Celimax 唯美緻 A 醇微晶精華',
          targetZoneText: '【全臉按壓，豌豆大小】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4 (核心)',
          instruction: '取豌豆大小按壓全臉，避開眼周、嘴角與下巴紅腫痘，微晶包覆純 A 醇促進膠原再生。',
          isKeyFocus: true
        },
        {
          id: 'fri-odd-5',
          title: '溫和屏障封層：角鯊烷霜',
          productCode: '#29-2',
          productName: 'S.NATURE 水庫角鯊烷保濕霜',
          targetZoneText: '全臉溫和封層',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5',
          instruction: '取適量溫和包覆全臉，修護皮脂膜，鎖住 A 醇活性。'
        }
      ]
    },
    evenWeek: {
      cleansingDesc: '#03 DUO 麗優卸妝膏 ➔ #07 綠茶胺基酸潔面乳',
      bodyLotionDesc: '#B-05 一日茶道 蜜柑紅茶美體乳 全身放鬆塗抹',
      specialProcedure: {
        title: '偶數週 A 醇微晶抗老 + 冰河霜溫和封層',
        desc: '小紫瓶 ➔ MUJI 化妝水打底（停用 AQ 乳）➔ 先擦 #36 紫熨斗眼霜隔離 ➔ 豌豆大小 #24 Celimax A 醇 ➔ #32 契爾氏冰河霜全面封層。',
        tag: 'A醇精準耐受'
      },
      skincareSteps: [
        {
          id: 'fri-even-1',
          title: '微脂囊前導打底',
          productCode: '#15',
          productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
          targetZoneText: '全臉手溫按壓',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1',
          instruction: '全臉按壓小紫瓶。'
        },
        {
          id: 'fri-even-2',
          title: '水相保濕化妝水 (停用 AQ 乳)',
          productCode: '#17',
          productName: 'MUJI 無印良品 化妝水 清爽型',
          targetZoneText: '全臉輕拍',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '拍水打底。【注意：當晚停用 #28 AQ 乳液】。'
        },
        {
          id: 'fri-even-3',
          title: '眼周安全隔離先行',
          productCode: '#36',
          productName: '巴黎萊雅 紫熨斗 MAX 眼霜',
          targetZoneText: '【眼周優先隔離塗抹】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '眼周先擦好紫熨斗眼霜隔離。'
        },
        {
          id: 'fri-even-4',
          title: '核心活性：Celimax A 醇微晶精華',
          productCode: '#24',
          productName: 'Celimax 唯美緻 A 醇微晶精華',
          targetZoneText: '【全臉按壓，豌豆大小】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4 (核心)',
          instruction: '豌豆大小按壓全臉，避開眼周與發炎痘。',
          isKeyFocus: true
        },
        {
          id: 'fri-even-5',
          title: '溫和屏障封層：冰河霜',
          productCode: '#32',
          productName: '契爾氏 冰河醣蛋白保濕霜',
          targetZoneText: '全臉溫和封層',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5',
          instruction: '全臉輕柔按壓冰河霜鎖水抗乾。'
        }
      ]
    }
  },
  {
    day: 'sat',
    dayName: '週六',
    themeTitle: '✨ 週六：週末去角質與淨膚夜',
    themeBadge: '週末淨膚提亮夜',
    themeDescription: '週末去角質與深度修護，奇數週以 PDRN 棉片濕敷兩頰 + 黛珂紫霜頂級封層；偶數週溫和潔面提亮。',
    cheeksCare: '兩頰乾肌：PDRN 棉片濕敷 5 分鐘，黛珂紫霜頂級封層',
    chinCare: '下巴粉刺：奇數週用綠番茄洗面乳局部洗淨，薄擦米糠乳',
    oddWeek: {
      cleansingDesc: '#02 MUJI 卸妝油 ➔ #08 綠番茄洗面乳 (局部洗下巴控油)',
      bodyLotionDesc: '#B-02 NIVEA 亮白極致嫩膚乳液（全身塗抹嫩膚）',
      specialProcedure: {
        title: 'PDRN 棉片兩頰濕敷 + 黛珂超微導紫霜奢華封層',
        desc: '洗臉後先以 #11 PDRN 棉片濕敷兩頰 5-8 分鐘 ➔ 小紫瓶 ➔ 兩頰 AQ 乳液 ➔ 靈芝水 ➔ 極光煥采精粹 ➔ 兩頰厚塗 #31 黛珂超微導修護霜！',
        tag: '頂級奢華修護'
      },
      skincareSteps: [
        {
          id: 'sat-odd-1',
          title: '兩頰高濃度 PDRN 胜肽濕敷',
          productCode: '#11',
          productName: 'Medicube PDRN 胜肽膠原棉片',
          targetZoneText: '【濕敷兩頰乾荒區 5-8 分鐘】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1',
          instruction: '取兩片棉片緊密貼合兩頰乾燥處，密集注入胜肽膠原。',
          timerDurationMinutes: 8,
          isKeyFocus: true
        },
        {
          id: 'sat-odd-2',
          title: '微脂囊前導通道開啟',
          productCode: '#15',
          productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
          targetZoneText: '全臉手溫按壓',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '棉片取下後手溫按壓小紫瓶。'
        },
        {
          id: 'sat-odd-3',
          title: '先乳後水：兩頰角質軟化',
          productCode: '#28',
          productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III',
          targetZoneText: '【僅塗抹兩頰乾燥區】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '按壓兩頰軟化角質，避開下巴。'
        },
        {
          id: 'sat-odd-4',
          title: '化妝水水相打底',
          productCode: '#16',
          productName: 'ORIGINS 品木宣言 靈芝水',
          targetZoneText: '全臉拍水',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4',
          instruction: '全臉輕拍靈芝水。'
        },
        {
          id: 'sat-odd-5',
          title: '全臉美白提亮精粹',
          productCode: '#20',
          productName: 'DECORTE 黛珂 極光煥采精粹 1.8X',
          targetZoneText: '全臉均勻塗抹',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5',
          instruction: '全臉均勻推勻，擊退週末暗沉。'
        },
        {
          id: 'sat-odd-6',
          title: '眼霜滋養',
          productCode: '#35',
          productName: '雅詩蘭黛 特潤全能修護亮眼霜',
          targetZoneText: '眼周專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6',
          instruction: '輕抹眼周。'
        },
        {
          id: 'sat-odd-7',
          title: '頂級奢華封層：黛珂紫霜',
          productCode: '#31',
          productName: 'COSME DECORTE 黛珂 超微導全能修護霜',
          targetZoneText: '【兩頰頂級封層】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 7A',
          instruction: '取珍珠大小在兩頰溫柔延展封層，徹夜修護。'
        },
        {
          id: 'sat-odd-8',
          title: '下巴米糠乳液',
          productCode: '#26-2',
          productName: 'MUJI 無印良品 米糠發酵乳液',
          targetZoneText: '下巴薄擦',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 7B',
          instruction: '下巴薄擦米糠乳。'
        }
      ]
    },
    evenWeek: {
      cleansingDesc: '#03 DUO 卸妝膏 ➔ #07 綠茶胺基酸潔面乳',
      bodyLotionDesc: '#B-02 NIVEA 亮白極致嫩膚乳液（全身塗抹嫩膚）',
      specialProcedure: {
        title: '偶數週美白提亮夜',
        desc: '小紫瓶 ➔ 兩頰 AQ 乳 ➔ MUJI 化妝水 ➔ 黛珂極光精粹 ➔ 紫熨斗眼霜 ➔ 兩頰契爾氏冰河霜 / 下巴米糠乳。',
        tag: '美白注水修護'
      },
      skincareSteps: [
        {
          id: 'sat-even-1',
          title: '微脂囊前導通道開啟',
          productCode: '#15',
          productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
          targetZoneText: '全臉手溫按壓',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1',
          instruction: '手溫包覆全臉按壓。'
        },
        {
          id: 'sat-even-2',
          title: '先乳後水：兩頰角質軟化',
          productCode: '#28',
          productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III',
          targetZoneText: '【僅塗抹兩頰乾燥區】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '按壓兩頰軟化角質，避開下巴。'
        },
        {
          id: 'sat-even-3',
          title: '化妝水補水',
          productCode: '#17',
          productName: 'MUJI 無印良品 化妝水 清爽型',
          targetZoneText: '全臉拍水',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '拍水補水。'
        },
        {
          id: 'sat-even-4',
          title: '極光煥采美白精粹',
          productCode: '#20',
          productName: 'DECORTE 黛珂 極光煥采精粹 1.8X',
          targetZoneText: '全臉均勻塗抹',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4',
          instruction: '均勻塗抹全臉提亮抗暗黃。'
        },
        {
          id: 'sat-even-5',
          title: '眼霜撫紋修護',
          productCode: '#36',
          productName: '巴黎萊雅 紫熨斗 MAX 眼霜',
          targetZoneText: '眼周專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5',
          instruction: '輕按眼周。'
        },
        {
          id: 'sat-even-6',
          title: '分區鎖水：兩頰冰河霜',
          productCode: '#32',
          productName: '契爾氏 冰河醣蛋白保濕霜',
          targetZoneText: '兩頰專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6A',
          instruction: '兩頰按壓封層。'
        },
        {
          id: 'sat-even-7',
          title: '分區鎖水：下巴米糠乳',
          productCode: '#26-2',
          productName: 'MUJI 無印良品 米糠發酵乳液',
          targetZoneText: '下巴薄擦',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6B',
          instruction: '下巴薄擦米糠乳。'
        }
      ]
    }
  },
  {
    day: 'sun',
    dayName: '週日',
    themeTitle: '🌿 週日：深度保養與面膜夜',
    themeBadge: '深度面膜與眼膜SPA',
    themeDescription: '週日全方位寵膚，奇數週全臉保濕面膜 + 綠橘子眼膜；偶數週 suisai 酵素洗下巴 + AZ100 痘痘藍瓶面膜。',
    cheeksCare: '兩頰乾肌：深度面膜敷 15 分鐘，加強潤澤封層',
    chinCare: '下巴粉刺：偶數週 suisai 酵素粉洗淨角栓，AZ100 藍膜抗痘',
    oddWeek: {
      cleansingDesc: '依當日彩妝卸妝 ➔ #06 Relove 胺基酸潔面乳',
      bodyLotionDesc: '#B-04 Aveeno 燕麥優格身體乳 全身滋養',
      specialProcedure: {
        title: '全臉保濕面膜 + 綠橘子淡斑眼膜雙重 SPA',
        desc: '洗臉後敷上 #14 一般日常保濕面膜 15 分鐘 ➔ 取下後按壓小紫瓶 ➔ 兩頰 AQ 乳液 ➔ 敷上 #12 綠橘子淡斑眼膜 10 分鐘 ➔ 眼霜與面霜封層！',
        tag: '雙重面膜 SPA'
      },
      skincareSteps: [
        {
          id: 'sun-odd-1',
          title: '全臉深層水相面膜 SPA',
          productCode: '#14',
          productName: '一般日常深層保濕面膜',
          targetZoneText: '全臉敷 15 分鐘',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1',
          instruction: '全臉服貼敷 15 分鐘，揭下面膜後以指腹輕拍殘餘精華至吸收。',
          timerDurationMinutes: 15,
          isKeyFocus: true
        },
        {
          id: 'sun-odd-2',
          title: '微脂囊前導通道開啟',
          productCode: '#15',
          productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
          targetZoneText: '全臉手溫按壓',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '面膜後按壓小紫瓶加乘鎖水通道。'
        },
        {
          id: 'sun-odd-3',
          title: '先乳後水：兩頰角質軟化',
          productCode: '#28',
          productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III',
          targetZoneText: '【僅塗抹兩頰乾燥區】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '按壓兩頰軟化角質，避開下巴。'
        },
        {
          id: 'sun-odd-4',
          title: '綠橘子淡斑眼膜局部密集修護',
          productCode: '#12',
          productName: 'Goodal 綠橘子維他命 C 淡斑眼膜',
          targetZoneText: '【眼下敷 10 分鐘】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4',
          instruction: '貼於眼下暗沉與細紋處 10 分鐘，淡化黑眼圈。',
          timerDurationMinutes: 10,
          isKeyFocus: true
        },
        {
          id: 'sun-odd-5',
          title: '眼霜深層滋養',
          productCode: '#35',
          productName: '雅詩蘭黛 特潤全能修護亮眼霜',
          targetZoneText: '眼周專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5',
          instruction: '眼膜取下後輕抹眼霜鎖住水分。'
        },
        {
          id: 'sun-odd-6',
          title: '分區鎖水：兩頰角鯊霜',
          productCode: '#29-2',
          productName: 'S.NATURE 水庫角鯊烷保濕霜',
          targetZoneText: '兩頰專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6A',
          instruction: '兩頰手溫按壓角鯊霜。'
        },
        {
          id: 'sun-odd-7',
          title: '分區鎖水：下巴米糠乳',
          productCode: '#26-2',
          productName: 'MUJI 無印良品 米糠發酵乳液',
          targetZoneText: '下巴薄擦',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 6B',
          instruction: '下巴薄擦米糠乳。'
        }
      ]
    },
    evenWeek: {
      cleansingDesc: '卸妝 ➔ #09 suisai 酵素粉 (局部洗下巴去角栓) ➔ #07 綠茶潔面乳',
      bodyLotionDesc: '#B-06 innisfree #002 芳香滋潤身體乳 全身滋養',
      specialProcedure: {
        title: 'suisai 酵素洗下巴 + AZ100 藍瓶痘痘面膜',
        desc: '偶數週日下巴局部用 suisai 酵素粉去黑頭角栓 ➔ 全臉敷上 #13 Quality 1st AZ100 壬二酸抗痘面膜 15 分鐘 ➔ 小紫瓶 ➔ 兩頰 AQ 乳 ➔ 契爾氏冰河霜！',
        tag: '深層抗痘淨膚'
      },
      skincareSteps: [
        {
          id: 'sun-even-1',
          title: '下巴局部酵素淨化角栓',
          productCode: '#09',
          productName: 'Kanebo suisai 酵素洗顏粉',
          targetZoneText: '【僅下巴/鼻翼局部洗淨】',
          timingCategory: 'night_cleansing',
          timingLabel: '洗卸程序',
          instruction: '取半顆粉末加水打泡，局部按摩下巴粉刺與鼻翼黑頭，沖洗乾淨。',
          isKeyFocus: true
        },
        {
          id: 'sun-even-2',
          title: '全臉抗痘修護：AZ100 藍瓶面膜',
          productCode: '#13',
          productName: 'Quality 1st AZ100 藍瓶痘痘面膜',
          targetZoneText: '全臉敷 10-15 分鐘',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 1',
          instruction: '高濃度壬二酸面膜敷全臉，全面安撫閉口與粉刺。',
          timerDurationMinutes: 15,
          isKeyFocus: true
        },
        {
          id: 'sun-even-3',
          title: '微脂囊前導通道開啟',
          productCode: '#15',
          productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
          targetZoneText: '全臉手溫按壓',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 2',
          instruction: '面膜揭下後手溫按壓小紫瓶。'
        },
        {
          id: 'sun-even-4',
          title: '先乳後水：兩頰角質軟化',
          productCode: '#28',
          productName: 'COSME DECORTE 黛珂 AQ 煥妍柔膚乳 III',
          targetZoneText: '【僅塗抹兩頰乾燥區】',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 3',
          instruction: '按壓兩頰軟化角質，避開下巴。'
        },
        {
          id: 'sun-even-5',
          title: '眼霜撫紋修護',
          productCode: '#36',
          productName: '巴黎萊雅 紫熨斗 MAX 眼霜',
          targetZoneText: '眼周專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 4',
          instruction: '輕按眼周。'
        },
        {
          id: 'sun-even-6',
          title: '分區鎖水：兩頰冰河霜',
          productCode: '#32',
          productName: '契爾氏 冰河醣蛋白保濕霜',
          targetZoneText: '兩頰專用',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5A',
          instruction: '兩頰按壓封層。'
        },
        {
          id: 'sun-even-7',
          title: '分區鎖水：下巴米糠乳',
          productCode: '#26-2',
          productName: 'MUJI 無印良品 米糠發酵乳液',
          targetZoneText: '下巴薄擦',
          timingCategory: 'night_skincare',
          timingLabel: '晚間保養 Step 5B',
          instruction: '下巴薄擦米糠乳。'
        }
      ]
    }
  }
];

export const MORNING_PRESCRIPTION_STEPS: StepItem[] = [
  {
    id: 'rx-morning-1',
    title: '早晨早餐後立即吃處方用藥',
    productCode: '藥-01 + 藥-02',
    productName: '普樂彼錠 50mg (PTU) 3顆 ＋ 癲鍵錠 50mg 1顆',
    targetZoneText: '早餐後立即吞服',
    timingCategory: 'morning_rx',
    timingLabel: '☀️ 早餐後立即吃',
    instruction: '"汎生" 普樂彼錠 3 顆 ＋ "信東" 癲鍵錠 1 顆，溫水吞服。'
  },
  {
    id: 'rx-morning-2',
    title: '隨早餐搭配美白抗氧化保健品',
    productCode: '健-01 + 健-02',
    productName: '8VC 2200mg 維生素 C 粉 1包 ＋ BHK\'s 奢光錠 1錠',
    targetZoneText: '早晨隨餐搭配',
    timingCategory: 'morning_rx',
    timingLabel: '☀️ 隨餐搭配',
    instruction: '8VC 維生素 C 沖水或直接倒入口中，搭配 BHK\'s 奢光錠 1 錠（已移至白天，避開夜間安眠藥物干擾）。'
  },
  {
    id: 'rx-morning-3',
    title: '【關鍵間隔 1 小時後】服用活性維生素 B 群',
    productCode: '健-04',
    productName: 'Thorne 基本維生素 B 複合物 1粒',
    targetZoneText: '【處方藥吃完後間隔 60 分鐘】',
    timingCategory: 'morning_rx',
    timingLabel: '☀️ 間隔 60 分鐘後',
    instruction: '早餐後服完處方藥，務必間隔滿 60 分鐘再吃 Thorne 基本 B 群，避免高活性 B 群與抗癲癇/抗甲狀腺藥物在腸道產生競爭吸收！',
    timerDurationMinutes: 60,
    isKeyFocus: true
  }
];

export const NOON_SUPPLEMENT_STEPS: StepItem[] = [
  {
    id: 'rx-noon-1',
    title: '午餐或晚餐擇一隨餐（需食物油脂輔助吸收）',
    productCode: '健-03 + 健-05 + 健-06',
    productName: 'Kirkland 維生素 D3 (2錠) ＋ Sports Research 魚油 (1粒) ＋ Webber Naturals 蔓越莓 (1-2粒)',
    targetZoneText: '午餐或晚餐隨餐吞服',
    timingCategory: 'noon_rx',
    timingLabel: '🌤️ 午餐或晚餐隨餐',
    instruction: '餐後立即吞服，食物中天然油脂能最大化脂溶性 D3 與深海魚油吸收率，協同蔓越莓守護泌尿私密健康。'
  }
];

export const BEDTIME_PRESCRIPTION_STEPS: StepItem[] = [
  {
    id: 'rx-bed-1',
    title: '睡前放鬆與神經穩定處方用藥',
    productCode: '藥-03 + 藥-04',
    productName: '癲必停膜衣錠 500mg (0.5顆) ＋ 易靜錠 2mg (羅眠樂 1顆)',
    targetZoneText: '🌙 睡前吞服',
    timingCategory: 'bedtime_rx',
    timingLabel: '🌙 睡前就寢時',
    instruction: '夜間腸胃僅保留給安眠與抗痙攣藥物！吞服後請在 15-30 分鐘內熄燈就寢。'
  }
];

export const MORNING_SKINCARE_STEPS_BARE = (weekType: 'odd' | 'even'): StepItem[] => [
  {
    id: 'am-bare-1',
    title: '溫和晨間清潔',
    productCode: weekType === 'odd' ? '#06' : '#07',
    productName: weekType === 'odd' ? 'Relove 胺基酸潔面乳 / 清水' : '綠茶保濕潔面乳 / 清水',
    targetZoneText: '全臉 / T字出油處',
    timingCategory: 'morning_skincare',
    timingLabel: '晨間 Step 1',
    instruction: '清水洗臉即可；若 T 字或下巴偏油，可取少量胺基酸潔面乳局部洗 T 字。'
  },
  {
    id: 'am-bare-2',
    title: '開啟吸收通道',
    productCode: '#15',
    productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
    targetZoneText: '全臉手溫按壓',
    timingCategory: 'morning_skincare',
    timingLabel: '晨間 Step 2',
    instruction: '按壓 2 泵，手溫包覆全臉輕按。'
  },
  {
    id: 'am-bare-3',
    title: '晨間補水與提亮',
    productCode: weekType === 'odd' ? '#18' : '#19 ＋ #27',
    productName: weekType === 'odd' ? 'BOH 維他命 B5 積雪草噴霧' : 'Ongredients 水光噴霧 ＋ ANUA 桃子精華',
    targetZoneText: '全臉噴霧與精華',
    timingCategory: 'morning_skincare',
    timingLabel: '晨間 Step 3',
    instruction: '噴霧全臉保濕，偶數週可加擦 ANUA 桃子菸鹼醯胺精華提亮膚色。'
  },
  {
    id: 'am-bare-4',
    title: '素顏晨間眼霜',
    productCode: '#37',
    productName: 'BRINGGREEN 超級檸檬眼霜 / Neogene 亮眼霜',
    targetZoneText: '眼下專用',
    timingCategory: 'morning_skincare',
    timingLabel: '晨間 Step 4',
    instruction: '取米粒大小輕輕點按眼周，改善眼周暗沉與浮腫。'
  },
  {
    id: 'am-bare-5',
    title: '分區晨間乳液：兩頰滋潤',
    productCode: '#27-2',
    productName: 'ORIGINS 品木宣言 靈芝水凝乳液 2.0',
    targetZoneText: '【僅塗兩頰】',
    timingCategory: 'morning_skincare',
    timingLabel: '晨間 Step 5A',
    instruction: '兩頰薄擦靈芝乳液，鎖水不黏膩。'
  },
  {
    id: 'am-bare-6',
    title: '分區晨間乳液：下巴清爽',
    productCode: '#26-2',
    productName: 'MUJI 無印良品 米糠發酵乳液',
    targetZoneText: '【僅薄擦下巴粉刺區】',
    timingCategory: 'morning_skincare',
    timingLabel: '晨間 Step 5B',
    instruction: '下巴僅能薄擦米糠乳液，避免白天毛孔悶油致痘。'
  },
  {
    id: 'am-bare-7',
    title: '全天防護與水光提亮',
    productCode: '#39',
    productName: 'd’Alba 水潤粉光校色提亮防曬霜 SPF50+',
    targetZoneText: '全臉均勻塗抹',
    timingCategory: 'morning_skincare',
    timingLabel: '晨間 Step 6',
    instruction: '素顏上班日全臉塗抹 d’Alba 粉光防曬，兼具高防曬與自然偽素顏水光氣色。'
  }
];

export const MORNING_SKINCARE_STEPS_MAKEUP: StepItem[] = [
  {
    id: 'am-makeup-1',
    title: '溫和晨間清潔',
    productCode: '清潔',
    productName: '溫和洗臉 / 清水洗臉',
    targetZoneText: '全臉',
    timingCategory: 'morning_skincare',
    timingLabel: '底妝前 Step 1',
    instruction: '溫和洗淨多餘皮脂，保持臉部水分。'
  },
  {
    id: 'am-makeup-2',
    title: '開啟吸收通道',
    productCode: '#15',
    productName: 'COSME DECORTE 黛珂 小紫瓶精粹',
    targetZoneText: '全臉手溫按壓',
    timingCategory: 'morning_skincare',
    timingLabel: '底妝前 Step 2',
    instruction: '按壓 2 泵手溫覆蓋全臉，防止後續底妝拔乾。'
  },
  {
    id: 'am-makeup-3',
    title: '眼下防卡粉打底',
    productCode: '#38',
    productName: 'BOBBI BROWN 維他命完美眼霜',
    targetZoneText: '【眼周專用】',
    timingCategory: 'morning_skincare',
    timingLabel: '底妝前 Step 3',
    instruction: '取米粒大小於眼下輕按推勻，等待 1 分鐘完全貼合成膜，阻絕後續遮瑕膏卡紋結塊。',
    timerDurationMinutes: 1,
    isKeyFocus: true
  },
  {
    id: 'am-makeup-4',
    title: '兩頰潤澤打底面霜（橘子霜）',
    productCode: '#34',
    productName: 'BOBBI BROWN 維他命完美面霜（橘子霜）',
    targetZoneText: '【僅塗抹兩頰乾燥區！】',
    timingCategory: 'morning_skincare',
    timingLabel: '底妝前 Step 4A',
    instruction: '塗抹於乾燥兩頰，撫平乾皮起屑打造完美平滑貼妝感，大幅提升粉底服貼度。',
    isKeyFocus: true
  },
  {
    id: 'am-makeup-5',
    title: '下巴清爽控油乳液（避開橘子霜）',
    productCode: '#26-2',
    productName: 'MUJI 無印良品 米糠發酵乳液',
    targetZoneText: '【下巴唯一指定，嚴禁擦橘子霜】',
    timingCategory: 'morning_skincare',
    timingLabel: '底妝前 Step 4B',
    instruction: '下巴粉刺區嚴格避開橘子霜！改擦清爽的 #26-2 米糠乳液預防午後悶痘。'
  },
  {
    id: 'am-makeup-6',
    title: '透明水感高保濕防曬',
    productCode: '#40',
    productName: '曼秀雷敦 水潤肌高濃度玻尿酸防曬精華',
    targetZoneText: '全臉均勻塗抹',
    timingCategory: 'morning_skincare',
    timingLabel: '底妝前 Step 5',
    instruction: '水感透明無粉感，為全臉均勻補水抗 UV，靜置 3-5 分鐘成膜後與後續彩妝極佳融合。',
    timerDurationMinutes: 3,
    isKeyFocus: true
  },
  {
    id: 'am-makeup-7',
    title: '局部提亮校色妝前乳',
    productCode: '#41',
    productName: '植村秀 無極限保濕妝前乳（紫色／膚色）',
    targetZoneText: '局部暗沉蠟黃處',
    timingCategory: 'morning_skincare',
    timingLabel: '底妝前 Step 6',
    instruction: '局部點塗於嘴角蠟黃暗沉處、下巴或眼下微暗處，修飾膚色不均後再上粉底。'
  }
];

export const FOUR_WEEK_CALENDAR = Array.from({ length: 28 }, (_, i) => {
  const dayNum = i + 1;
  const weekNum = Math.floor(i / 7) + 1;
  const isOddWeek = weekNum % 2 !== 0;
  const dayIndex = i % 7;
  const daysMap: DayOfWeek[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const dayOfWeek = daysMap[dayIndex];

  let themeType = '類型 A・溫和修護';
  let title = '日常溫和修護';
  let amSummary = '清水洗臉 ➔ 小紫瓶 ➔ 噴霧 ➔ 靈芝乳 ➔ d’Alba防曬';
  let pmSummary = '小紫瓶 ➔ AQ乳(兩頰) ➔ 靈芝水 ➔ 角鯊霜(兩頰)/米糠乳(下巴)';

  if (dayOfWeek === 'tue') {
    themeType = '類型 B・水楊酸煥膚';
    title = '寶拉水楊酸煥膚夜';
    pmSummary = '裸肌水楊酸(3分) ➔ 小紫瓶 ➔ AQ乳(兩頰) ➔ 角鯊霜/冰河霜';
  } else if (dayOfWeek === 'wed') {
    themeType = isOddWeek ? '類型 D・微晶激活(VT300)' : '類型 D・微晶激活+淡斑';
    title = isOddWeek ? 'VT Reedle 300 微晶夜' : 'VT 300 + 妮維雅630淡斑';
    pmSummary = '裸肌乾壓 VT 300 ➔ PDRN安瓶 ➔ Dr.Reju-All修復霜 / 630晚霜';
  } else if (dayOfWeek === 'thu') {
    themeType = '類型 A・離子儀導出導入';
    title = isOddWeek ? '離子儀導出 + 玻尿酸導入' : '離子儀導出 + PDRN導入';
    pmSummary = '舒特膚導出 ➔ 小紫瓶 ➔ AQ乳 ➔ 離子超導精華 ➔ 鎖水霜';
  } else if (dayOfWeek === 'fri') {
    themeType = '類型 C・A醇微晶抗老';
    title = 'Celimax A醇微晶夜';
    pmSummary = '小紫瓶 ➔ 化妝水(停AQ乳) ➔ 眼霜隔離 ➔ A醇豌豆大 ➔ 溫和封層';
  } else if (dayOfWeek === 'sat') {
    themeType = isOddWeek ? '類型 A・PDRN棉片+黛珂紫霜' : '類型 A・美白注水提亮';
    title = isOddWeek ? 'PDRN濕敷 + 黛珂紫霜' : '週末溫和美白提亮';
    pmSummary = isOddWeek ? 'PDRN棉片(8分) ➔ 小紫瓶 ➔ AQ乳 ➔ 黛珂超微導紫霜' : '小紫瓶 ➔ AQ乳 ➔ 黛珂極光精粹 ➔ 契爾氏冰河霜';
  } else if (dayOfWeek === 'sun') {
    themeType = isOddWeek ? '類型 D・保濕雙面膜SPA' : '類型 D・suisai+AZ100痘痘藍膜';
    title = isOddWeek ? '深層保濕面膜 + 綠橘子眼膜' : 'suisai酵素洗 + AZ100藍膜';
    pmSummary = isOddWeek ? '敷保濕面膜(15分) ➔ 小紫瓶 ➔ 綠橘子眼膜(10分) ➔ 封層' : 'suisai局部洗下巴 ➔ AZ100藍膜(15分) ➔ 先乳後水封層';
  }

  return {
    dayNum,
    weekNum,
    isOddWeek,
    dayOfWeek,
    themeType,
    title,
    amSummary,
    pmSummary
  };
});

export const DEFAULT_REMINDERS: ReminderConfig[] = [
  {
    id: 'rem-1',
    title: '☀️ 早晨早餐後處方藥 ＋ 維他命 C & 奢光錠',
    time: '08:00',
    description: '吃完早餐後立即吃：PTU 3顆 ＋ 癲鍵錠 1顆 ＋ 8VC 維他命C粉 ＋ BHK\'s 奢光錠',
    enabled: true,
    category: 'morning_rx'
  },
  {
    id: 'rem-2',
    title: '☀️ Thorne 活性維他命 B 群（黃金間隔 60 分鐘）',
    time: '09:00',
    description: '距早晨處方藥已過 1 小時！避開競爭吸收，請現在吞服 1 粒 Thorne 基本 B 群。',
    enabled: true,
    category: 'thorne_b'
  },
  {
    id: 'rem-3',
    title: '🌤️ 午/晚餐隨餐脂溶性保健品（D3 + 魚油 + 蔓越莓）',
    time: '12:30',
    description: '利用食物天然油脂助攻吸收：D3 2錠 ＋ Sports Research 魚油 1粒 ＋ 蔓越莓膠囊 1-2粒。',
    enabled: true,
    category: 'lunch_supplements'
  },
  {
    id: 'rem-4',
    title: '🌙 晚間精準分子保養排程',
    time: '21:30',
    description: '今日主題保養時間到！依週次與星期確認是否執行酸類/微晶/先乳後水分區鎖水。',
    enabled: true,
    category: 'night_skincare'
  },
  {
    id: 'rem-5',
    title: '🌙 睡前安眠與神經放鬆處方用藥',
    time: '23:30',
    description: '準備就寢：癲必停 0.5 顆 ＋ 易靜錠 (羅眠樂) 1 顆，服藥後請於 30 分鐘內放鬆入睡。',
    enabled: true,
    category: 'bedtime_rx'
  }
];

export const SAFETY_GOLDEN_RULES = [
  {
    id: 'rule-1',
    title: '首步活性原則（酸類與微晶針在裸肌第一步）',
    severity: 'critical',
    desc: '#22 寶拉 2% 水楊酸（週二）與 #23 VT Reedle 300 微針精華（週三）必須在「洗臉後徹底擦乾」的裸肌狀態下使用！',
    detail: '水楊酸需要酸性環境溶解角栓皮脂；VT 微晶需要乾臉乾壓開啟物理微通道。若先抹其他高分子保濕品，會形成屏障大幅削弱滲透。'
  },
  {
    id: 'rule-2',
    title: '黛珂「先乳後水」專利通道順序',
    severity: 'critical',
    desc: '#15 黛珂小紫瓶（微脂囊開啟細胞通道） ➔ #28 黛珂 AQ 煥妍柔膚乳 III（僅抹兩頰軟化角質） ➔ 拍傳統化妝水 ➔ 水性精華。',
    detail: '磷脂質乳液能軟化秋冬變硬的兩頰角質層，使化妝水水分深層吸附。嚴格遵守此順序，確保高價頂級保養品發揮極致功效！'
  },
  {
    id: 'rule-3',
    title: '分區護膚：乾頰豐潤滋養 vs. 下巴極度清爽防痘',
    severity: 'high',
    desc: '兩頰乾荒需厚塗角鯊霜 / 冰河霜 / 黛珂紫霜；下巴粉刺出油區【唯一指定 #26-2 MUJI 米糠乳液】，嚴格避開厚重霜類與橘子霜！',
    detail: '避免外油內乾引發閉口粉刺爆發。遇紅腫大痘時，於保養最後一步以 Acclear 藥膏局部厚點。'
  },
  {
    id: 'rule-4',
    title: '處方藥物與高活性 B 群嚴格間隔 60 分鐘',
    severity: 'high',
    desc: '早晨處方藥（PTU 抗甲狀腺 3 顆 + Topiramate 癲鍵錠 1 顆）與 Thorne 活性 B 群必須間隔 1 小時！',
    detail: '活性輔酶 B 群容易與抗癲癇及抗甲狀腺藥物在腸道載體產生競爭吸收，間隔 60 分鐘確保藥效濃度維持穩定。'
  },
  {
    id: 'rule-5',
    title: '嚴禁強效活性成分同晚疊加疊擦',
    severity: 'warning',
    desc: '週二水楊酸、週三 VT 微晶、週五 Celimax A 醇微晶各自獨立成專屬夜晚，不可在同一晚混合疊擦！',
    detail: '週三微晶夜與週五 A 醇夜均停用 #28 AQ 乳液；週五擦 A 醇前務必先以眼霜隔離眼周，防止角質層過度剝落與泛紅敏感。'
  }
];
