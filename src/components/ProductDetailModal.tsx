import React from 'react';
import { ProductItem } from '../types';
import { X, Sparkles, AlertTriangle, ShieldCheck, Layers, Droplets, Clock, Tag } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onStartTimer?: (mins: number, title: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onStartTimer
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl border border-stone-200">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-stone-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded-md bg-stone-900 text-white">
                {product.code}
              </span>
              <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full">
                {product.brand}
              </span>
              <span className="text-xs text-stone-500">
                {product.categoryLabel}
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-stone-900 pt-1">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Badges Bar */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 font-medium flex items-center gap-1">
            <Tag className="w-3.5 h-3.5 text-stone-400" />
            <span>定位分區：{product.zoneLabel}</span>
          </span>
          <span className={`px-3 py-1 rounded-full font-medium ${
            product.weekType === 'odd'
              ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
              : product.weekType === 'even'
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-stone-100 text-stone-700'
          }`}>
            {product.weekType === 'odd' ? '奇數週專屬' : product.weekType === 'even' ? '偶數週專屬' : '雙週通用'}
          </span>
        </div>

        {/* Content sections */}
        <div className="space-y-4 text-xs sm:text-sm">
          {/* Usage Rule */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
            <h4 className="font-bold text-stone-900 flex items-center gap-1.5 text-xs text-rose-700">
              <Sparkles className="w-4 h-4" />
              <span>使用排程與精準步驟</span>
            </h4>
            <p className="text-stone-700 leading-relaxed pt-1">{product.usageRule}</p>
          </div>

          {/* Molecular mechanism tip */}
          {product.molecularTip && (
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1">
              <h4 className="font-bold text-amber-950 flex items-center gap-1.5 text-xs">
                <Droplets className="w-4 h-4 text-amber-600" />
                <span>分子吸收學與保養順序原理</span>
              </h4>
              <p className="text-stone-800 leading-relaxed pt-1">{product.molecularTip}</p>
            </div>
          )}

          {/* Cautions */}
          {product.cautions && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
              <h4 className="font-bold text-rose-950 flex items-center gap-1.5 text-xs">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>安全交互禁忌與注意事項</span>
              </h4>
              <p className="text-rose-900 leading-relaxed pt-1">{product.cautions}</p>
            </div>
          )}

          {/* General Notes */}
          {product.notes && (
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-stone-600 text-xs">
              <span className="font-bold text-stone-800">特別備註：</span>
              <span>{product.notes}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-100">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition cursor-pointer"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
};
