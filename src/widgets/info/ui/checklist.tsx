import {
  checklistItems,
  additionalNotice,
} from '@/shared/constants/travel-data';
import Image from 'next/image';

export function Checklist() {
  return (
    <div>
      {/* 타이틀 */}
      <h3 className="text-2xl lg:text-3xl font-bold text-deep-navy mb-6 lg:mb-8">
        준비물 안내
      </h3>

      {/* 준비물 그리드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 mb-8 lg:mb-12">
        {checklistItems.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-5 transition-all duration-200 hover:shadow-md"
          >
            <h4 className="mb-3 text-lg font-bold text-deep-navy">
              {item.title}
            </h4>
            <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700 lg:text-base">
              {item.description}
            </p>
            {item.image && (
              <div className="mt-3">
                <Image
                  src={item.image}
                  alt={`${item.title} 관련 이미지`}
                  width={593}
                  height={194}
                  className="w-full h-auto rounded-md"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 기타 안내사항 */}
      <div className="rounded-lg border-2 border-sky-blue bg-ice-blue/30 p-6 lg:p-8">
        <h4 className="mb-4 text-xl font-bold text-deep-navy lg:text-2xl">
          {additionalNotice.title}
        </h4>
        {additionalNotice.sections.map((section, index) => (
          <div key={index}>
            <h5 className="mb-3 text-lg font-semibold text-gray-900">
              {section.title}
            </h5>
            <div className="space-y-2 text-gray-700">
              {section.content.map((line, lineIndex) => (
                <p key={lineIndex} className="text-sm leading-relaxed lg:text-base">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
