'use client';

import { useState } from 'react';
import { attractions } from '@/shared/constants/travel-data';
import { AttractionCard } from './ui/attraction-card';
import { DetailModal } from '@/features/detail-modal';

export function AttractionWidget() {
  const [selectedAttraction, setSelectedAttraction] = useState<number | null>(
    null
  );

  const currentAttraction = attractions.find((a) => a.id === selectedAttraction);

  return (
    <section className="bg-gray-50 py-16 px-5 lg:py-20 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* 섹션 타이틀 */}
        <h2 className="text-3xl lg:text-4xl font-bold text-deep-navy mb-8 lg:mb-12 text-center">
          관광지 안내
        </h2>

        {/* 관광지 카드 그리드 */}
        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {attractions.map((attraction) => (
            <AttractionCard
              key={attraction.id}
              {...attraction}
              onClick={() => setSelectedAttraction(attraction.id)}
            />
          ))}
        </div>

        {/* 상세 모달 */}
        {currentAttraction && (
          <DetailModal
            open={!!selectedAttraction}
            onOpenChange={(open) => !open && setSelectedAttraction(null)}
            title={currentAttraction.name}
            image={currentAttraction.image}
            description={currentAttraction.fullDescription}
          />
        )}
      </div>
    </section>
  );
}
