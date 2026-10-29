/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface V5ComparisonTopic {
  id: string;
  topic: string;
  geminiVersion: string;
  gptVersion: string;
  clinicalJudgement: string;
  adoptedPlan: string;
  antiComedoneImpact: string;
  badge: string;
  badgeColor: string;
}

/**
 * 完整同步用戶上傳之 skincare_plan_v5 文件中的 11 項核心議題取捨與結論
 */
export const V5_OPTIMIZATION_TOPICS: V5ComparisonTopic[] = [
  {
    id: 'topic-1',
    topic: '1. 可執行性',
    geminiVersion: '有完整 4 週週曆、逐晚步驟、28 天打卡表，可直接照做。',
    gptVersion: '原則與注意事項寫得完整，但只有「4 日保守循環」，第 4 晚是「膚況評估」，沒有具體週曆。',
    clinicalJudgement: '實際執行需要具體排程，否則每晚都要重新決定。',
    adoptedPlan: 'Gemini 的週曆骨架 ＋ GPT 的「耐受度比排程更重要」原則。',
    antiComedoneImpact: '確立每日明確 SOP，避免使用者隨機疊加產品導致油脂過載。',
    badge: '骨架與原則',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200'
  },
  {
    id: 'topic-2',
    topic: '2. 第 3 週 Reedle 的位置',
    geminiVersion: '週一 Reedle，前一週五剛用 A 醇，中間只隔 3 天。這與它自己寫的「兩款微晶需拉開 4～5 天以上」互相矛盾。',
    gptVersion: '不排進固定週期，等基礎穩定再說。',
    clinicalJudgement: 'Gemini「第 3 週跳過 A 醇」的方向正確（原版本該週有 3 個活性夜，確實偏重），但日期要挪。',
    adoptedPlan: '第 3 週：週二水楊酸、週六 Reedle、跳過 A 醇。A 醇↔Reedle 相隔 8 天與 6 天，所有活性夜至少相隔 ≥3 天。',
    antiComedoneImpact: '徹底拉開活性成分間隔，防止屏障微損傷引發發炎性爆痘。',
    badge: '時程調度',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200'
  },
  {
    id: 'topic-3',
    topic: '3. 「兩款微晶都含微針結構」機制澄清',
    geminiVersion: '斷言 Celimax 與 VT 都含物理性微針結構。',
    gptVersion: '只說「微晶型功能精華」，不推測細節。',
    clinicalJudgement: 'VT Reedle 是二氧化矽微晶；Celimax 查到的是 A-Shot 微粒，用來幫助吸收，描述不同。兩者都有刺激性，但不宜說成同一種機制。',
    adoptedPlan: '保留間隔規則（因為兩者都刺激），但不再說「兩款都是微針」。',
    antiComedoneImpact: '科學正確認知促滲透機制，避免因誤判微針物理特性而盲目堆疊。',
    badge: '科學機制',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200'
  },
  {
    id: 'topic-4',
    topic: '4. 洗卸產品的「去角質力」',
    geminiVersion: '斷言綠番茄洗面乳「清潔力強」；維 C 凝膠含去角質。',
    gptVersion: '兩者都要先確認成分，不憑宣傳字眼判斷。',
    clinicalJudgement: '維 C 凝膠的品名本身就標示「去角質護理」，可以保守視為有去角質；綠番茄的「清潔力強」則沒有證據。',
    adoptedPlan: '前 4 週兩款都暫停，洗卸固定「卸妝油 ➔ 綠茶潔面」，減少變因；第 5 週後再評估。',
    antiComedoneImpact: '固定溫和卸妝油 + 綠茶胺基酸潔面，不傷皮脂膜，防屏障代償性出油致痘。',
    badge: '洗卸減法',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
  },
  {
    id: 'topic-5',
    topic: '5. PDRN／積雪草能否抵銷刺激',
    geminiVersion: 'Reedle 夜後用 Medicube 安瓶「加速修護」。',
    gptVersion: '明確指出不能保證抵銷刺激，也不能只憑名稱推定修護效果。',
    clinicalJudgement: 'GPT 說得對。這些是保濕修護選項，不是解藥。',
    adoptedPlan: 'Reedle 夜後只做簡單保濕；安瓶可選用，不寫成修護保證。',
    antiComedoneImpact: '微晶夜後極簡化，不塗抹高黏稠複雜精華，毛孔無負擔。',
    badge: '成分定位',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
  },
  {
    id: 'topic-6',
    topic: '6. 下巴要不要避開厚重乳霜（防閉鎖粉刺關鍵）',
    geminiVersion: '下巴一律只擦米糠乳或靈芝乳。',
    gptVersion: '不預設某款一定致痘，看實際反應。',
    clinicalJudgement: '兩者折衷：沒有證據證明哪款致痘，但前 4 週變因要少。',
    adoptedPlan: '前 4 週下巴預設用清爽乳液（#26-2 米糠乳）；用「下巴狀況」欄記錄，第 5 週依紀錄放寬或維持。',
    antiComedoneImpact: '下巴嚴禁厚面霜（冰河霜、橘子霜、角鯊霜），1 滴米糠乳即可，杜絕閉鎖性硬角栓。',
    badge: '分區控油',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200'
  },
  {
    id: 'topic-7',
    topic: '7. 菸鹼醯胺（Niacinamide）導入時程',
    geminiVersion: '前 4 週暫停，第 5 週起早上 ANUA 或晚上局部 The Ordinary。',
    gptVersion: '只說擇一，沒有時程。',
    clinicalJudgement: '同意 Gemini：一次只加一個新變因。',
    adoptedPlan: '前 4 週暫停；第 5 週起一次只加一款。',
    antiComedoneImpact: '前 4 週避免 10% 高濃度 B3 與水楊酸疊加引發下巴刺激潮紅與粉刺發作。',
    badge: '單一變因',
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300'
  },
  {
    id: 'topic-8',
    topic: '8. 產品資訊的確定性',
    geminiVersion: '較多斷言式說法（如 Celimax 的微針結構、綠番茄清潔力）。',
    gptVersion: '有「後續仍需確認」清單，並標示未確認項目。',
    clinicalJudgement: 'GPT 的態度更可靠，但清單沒進入流程。',
    adoptedPlan: '「產品清單」新增「待確認事項」欄，有待查項目就標出來。',
    antiComedoneImpact: '未確認致粉刺性之成分標註追蹤，科學審視不盲信。',
    badge: '透明標註',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200'
  },
  {
    id: 'topic-9',
    topic: '9. 懷孕／備孕安全',
    geminiVersion: '未提。',
    gptVersion: '有提醒 A 醇需避開。',
    clinicalJudgement: '必要的安全提醒。',
    adoptedPlan: '已加入規則並標在 A 醇夜（🤰 懷孕及備孕期間嚴格禁止使用 A 醇）。',
    antiComedoneImpact: '最高級生殖醫學安全警示，全面防止維生素 A 衍生物風險。',
    badge: '生殖安全',
    badgeColor: 'bg-red-100 text-red-800 border-red-200'
  },
  {
    id: 'topic-10',
    topic: '10. 小遺漏：首次使用前局部測試',
    geminiVersion: '沒有為新品做小範圍測試的提醒。',
    gptVersion: '同樣沒有。',
    clinicalJudgement: '商家說明建議先在手臂內側或頸後測試；Celimax 與 Reedle 都值得做。',
    adoptedPlan: '加入「首次使用前先局部測試（Patch Test 24 小時）」。',
    antiComedoneImpact: '預先排查接觸性皮膚炎與爆痘發炎風險。',
    badge: '耐受防線',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200'
  },
  {
    id: 'topic-11',
    topic: '11. 水楊酸頻率',
    geminiVersion: '每週 1 次。',
    gptVersion: '先每週 1 次。',
    clinicalJudgement: '合理起點。若 4 週後下巴粉刺仍多、無乾刺，可評估增到每週 2 次（只點下巴），並維持活性夜相隔 ≥3 天。',
    adoptedPlan: '前 4 週每週 1 次（週二）；第 5 週起依紀錄評估。',
    antiComedoneImpact: '穩定溶出毛孔深層皮脂，不過度剝脫角質，避免反覆長內包硬痘。',
    badge: '酸類頻率',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
  }
];

/**
 * 皮膚科防閉鎖粉刺與眼霜減法核心原則
 */
export const ANTI_COMEDONE_EYE_RULES = {
  eyeCreamQuestion: '眼霜一次用兩個會不會太多？',
  eyeCreamAnswer: '【絕對過多！】早晚各僅能使用 1 款眼霜（米粒大小雙眼共用），絕對嚴禁疊擦兩款眼霜！',
  eyeCreamDermatologyReasons: [
    {
      title: '① 眼皮厚度僅約 0.5mm，缺乏皮脂腺',
      detail: '眼周角質極薄且缺乏毛囊與皮脂腺排油能力。疊加兩種高濃度潤澤眼霜，油脂會直接滯留表層形成無處代謝的硬顆粒，誘發白色脂肪粒（粟粒腫）。'
    },
    {
      title: '② 眨眼微運動 ＋ 油脂重力下移效應（致下巴閉鎖粉刺）',
      detail: '人每天眨眼超過 15,000 次，疊擦的多餘眼霜油脂會順著肌膚張力下移擴散到臉頰與下巴。高親脂性眼霜一旦接觸下巴出油毛孔，便會形成黏稠角栓，造成發炎硬閉口與內包粉刺！'
    },
    {
      title: '③ 步驟繁複過載導致「外油內乾型閉鎖粉刺」',
      detail: '若每層精華、乳霜、眼霜都上，肌膚表面過載厚重油膜，角質正常剝落代謝受阻，死皮與皮脂在毛孔口硬化封閉，即形成閉鎖性白頭粉刺。'
    }
  ],
  simplificationRules: [
    '【單一眼霜原則】：早晨素顏日只擦 #37 檸檬眼霜（#37-2 Neogene 為分日輪替，嚴禁同擦）；全妝日只擦 #38 BOBBI BROWN 妝前眼霜；夜間奇數週只擦 #35 雅詩蘭黛，偶數週只擦 #36 紫熨斗。',
    '【下巴分區絕對減法】：下巴嚴禁塗抹 #28 黛珂 AQ 乳液、#32 冰河霜、#34 橘子霜、#29-2 角鯊霜！洗臉後全臉按壓小紫瓶與化妝水後，下巴僅薄擦 1 滴 #26-2 米糠乳液。',
    '【洗卸變因歸零】：前 4 週暫停綠番茄洗面乳與維 C 凝膠，每晚固定溫和卸妝油 + 綠茶胺基酸潔面乳，維持皮脂膜健康。',
    '【活性成分相隔 ≥3 天】：週二水楊酸、週三微晶、週五 A 醇各自獨立，不疊擦，給毛孔與角質充足喘息修護期。'
  ]
};
