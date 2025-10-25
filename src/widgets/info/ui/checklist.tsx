import {
  essentialItems,
  recommendedItems,
} from '@/shared/constants/travel-data';
import { Separator } from '@/shared/ui/separator';

export function Checklist() {
  return (
    <div>
      {/* 타이틀 */}
      <h3 className="text-2xl lg:text-3xl font-bold text-deep-navy mb-6">
        준비물 안내
      </h3>

      {/* 모바일: 세로 스택, 데스크톱: 2열 그리드 */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 gap-8">
        {/* 필수 준비물 */}
        <div className="bg-ice-blue rounded-lg p-6 lg:p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">📋</span>
            필수 준비물
          </h4>
          <ul className="space-y-3">
            {essentialItems.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 leading-relaxed"
              >
                <span className="text-sky-blue text-xl flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 권장 준비물 */}
        <div className="bg-gray-50 rounded-lg p-6 lg:p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            권장 준비물
          </h4>
          <ul className="space-y-3">
            {recommendedItems.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 leading-relaxed"
              >
                <span className="text-accent-orange text-xl flex-shrink-0">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
