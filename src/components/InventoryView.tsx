import React, { useState, useMemo } from 'react';
import { ALL_PRODUCTS } from '../data/amandaRoutineData';
import { ProductItem, ProductCategory, TargetZone } from '../types';
import { Search, Filter, Layers, ChevronRight, X, ExternalLink, ShieldAlert, Sparkles, Check } from 'lucide-react';

interface InventoryViewProps {
  onSelectProduct: (p: ProductItem) => void;
}

export const InventoryView: React.FC<InventoryViewProps> = ({ onSelectProduct }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedWeek, setSelectedWeek] = useState<'all' | 'odd' | 'even' | 'both'>('all');
  const [selectedZone, setSelectedZone] = useState<string>('all');

  const categories = [
    { id: 'all', label: '全部' },
    { id: 'cleansing', label: '卸妝與清潔' },
    { id: 'toner_mist', label: '化妝水/噴霧/棉片' },
    { id: 'serum_active', label: '精華與功能型' },
    { id: 'cream_lotion', label: '乳液與面霜' },
    { id: 'spot_acne', label: '局部痘痘藥' },
    { id: 'eye_care', label: '眼周護理/眼膜' },
    { id: 'sunscreen_prep', label: '防曬與妝前' },
    { id: 'mask', label: '面膜' },
    { id: 'body_lotion', label: '身體乳' },
    { id: 'device', label: '美容儀器' },
    { id: 'supplement', label: '內服保健品' },
    { id: 'medicine', label: '常規處方藥' }
  ];

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        const matchesCode = p.code.toLowerCase().includes(q);
        const matchesRule = p.usageRule.toLowerCase().includes(q);
        const matchesTip = p.molecularTip ? p.molecularTip.toLowerCase().includes(q) : false;
        if (!matchesName && !matchesBrand && !matchesCode && !matchesRule && !matchesTip) {
          return false;
        }
      }

      // Category
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Week
      if (selectedWeek !== 'all') {
        if (selectedWeek === 'both' && p.weekType !== 'both') return false;
        if (selectedWeek === 'odd' && p.weekType === 'even') return false;
        if (selectedWeek === 'even' && p.weekType === 'odd') return false;
      }

      // Zone
      if (selectedZone !== 'all') {
        if (selectedZone === 'cheeks' && p.targetZone !== 'cheeks') return false;
        if (selectedZone === 'chin' && p.targetZone !== 'chin') return false;
        if (selectedZone === 'eyes' && p.targetZone !== 'eyes') return false;
        if (selectedZone === 'all' && p.targetZone !== 'all') return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedWeek, selectedZone]);

  const getWeekBadge = (weekType: string) => {
    switch (weekType) {
      case 'odd':
        return <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-medium">奇數週專屬</span>;
      case 'even':
        return <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-medium">偶數週專屬</span>;
      default:
        return <span className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 font-medium">雙週皆用</span>;
    }
  };

  const getZoneBadge = (zone: string, label: string) => {
    if (zone === 'chin') {
      return <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-medium">📍 {label}</span>;
    }
    if (zone === 'cheeks') {
      return <span className="text-[10px] px-2 py-0.5 rounded-md bg-rose-50 text-rose-800 border border-rose-200 font-medium">🌸 {label}</span>;
    }
    if (zone === 'eyes') {
      return <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200 font-medium">👁️ {label}</span>;
    }
    return <span className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-medium">✨ {label}</span>;
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header Card (Matching Screenshot) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                全庫存產品清單 (臉部 48 項編號全部排入・第 1 週起無暫停 ＋ 6 款身體乳 ＋ 保健品與處方藥)
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                依照 skincare_plan_v7 最新排程，全數 48 項臉部保養品全部排入排程中，第 1 週起無暫停項目，點擊任一品項即可查看詳細專屬定位與手法。
              </p>
            </div>
          </div>
          <div className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-700 font-medium">
            共篩選出 <span className="font-bold text-stone-900">{filteredProducts.length}</span> 項品項
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜尋品牌、品名、功效或成分（如：寶拉、小紫瓶、Torriden、A醇、契爾氏、果酸身體乳...）"
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-sm transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills (Matching Screenshot) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200/80 text-stone-700'
              }`}
            >
              {cat.label}
              {cat.id === 'all' && ` (${ALL_PRODUCTS.length})`}
            </button>
          ))}
        </div>

        {/* Secondary Filters: Week Type & Target Zone */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-stone-100 text-xs">
          {/* Week Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-stone-500 font-medium">週次分流：</span>
            <div className="inline-flex rounded-xl bg-stone-100 p-1">
              {[
                { id: 'all', label: '全部週' },
                { id: 'odd', label: '奇數週專屬' },
                { id: 'even', label: '偶數週專屬' },
                { id: 'both', label: '雙週通用' }
              ].map(w => (
                <button
                  key={w.id}
                  onClick={() => setSelectedWeek(w.id as any)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    selectedWeek === w.id ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>

          {/* Zone Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-stone-500 font-medium">部位篩選：</span>
            <div className="inline-flex rounded-xl bg-stone-100 p-1">
              {[
                { id: 'all', label: '全部部位' },
                { id: 'cheeks', label: '兩頰專用' },
                { id: 'chin', label: '下巴專用' },
                { id: 'eyes', label: '眼周專用' }
              ].map(z => (
                <button
                  key={z.id}
                  onClick={() => setSelectedZone(z.id)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    selectedZone === z.id ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {z.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Product Cards (Matching Screenshot) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product)}
            className="group bg-white rounded-3xl p-5 border border-stone-200/90 hover:border-stone-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              {/* Header: Code + Category & Week Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-xs font-black px-2 py-0.5 rounded-md bg-stone-900 text-white">
                    {product.code}
                  </span>
                  <span className="text-xs font-medium text-stone-500">{product.categoryLabel}</span>
                </div>
                {getWeekBadge(product.weekType)}
              </div>

              {/* Brand & Name */}
              <div>
                <p className="text-xs font-semibold text-rose-600 tracking-wide">{product.brand}</p>
                <h3 className="text-base font-bold text-stone-900 group-hover:text-rose-600 transition-colors line-clamp-1">
                  {product.name}
                </h3>
              </div>

              {/* Target Zone Tag */}
              <div>{getZoneBadge(product.targetZone, product.zoneLabel)}</div>

              {/* Usage rule preview */}
              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                {product.usageRule}
              </p>
            </div>

            {/* Bottom link */}
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-rose-600 group-hover:text-rose-700">
              <span>查看詳細指南</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 text-stone-500 space-y-2">
          <p className="text-base font-bold text-stone-800">查無符合條件的保養品或保健品</p>
          <p className="text-xs">請嘗試更換搜尋關鍵字或重設篩選器。</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedWeek('all');
              setSelectedZone('all');
            }}
            className="mt-3 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold cursor-pointer"
          >
            清除所有篩選條件
          </button>
        </div>
      )}
    </div>
  );
};
