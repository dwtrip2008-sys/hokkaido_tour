"use client";

import { useState } from "react";
import { hotels } from "@/shared/constants/travel-data";
import { HotelCard } from "./ui/hotel-card";
import { DetailModal } from "@/features/detail-modal";

export function HotelWidget() {
  const [selectedHotel, setSelectedHotel] = useState<number | null>(null);

  const currentHotel = hotels.find((h) => h.id === selectedHotel);

  return (
    <section className="bg-gray-50 py-16 px-5 lg:py-20 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* 섹션 타이틀 */}
        <h2 className="text-3xl lg:text-4xl font-bold text-deep-navy mb-8 lg:mb-12 text-center">
          호텔 안내
        </h2>

        {/* 호텔 카드 그리드 */}
        <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              {...hotel}
              onClick={() => setSelectedHotel(hotel.id)}
            />
          ))}
        </div>

        {/* 상세 모달 */}
        {currentHotel && (
          <DetailModal
            open={!!selectedHotel}
            onOpenChange={(open) => !open && setSelectedHotel(null)}
            title={currentHotel.name}
            image={currentHotel.image}
            description={currentHotel.fullDescription}
          />
        )}
      </div>
    </section>
  );
}
