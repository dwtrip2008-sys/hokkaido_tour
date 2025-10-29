'use client';

import { useState } from 'react';
import { meals } from '@/shared/constants/travel-data';
import { MealCard } from './meal-card';
import { DetailModal } from '@/features/detail-modal';

export function MealSection() {
  const [selectedMeal, setSelectedMeal] = useState<number | null>(null);

  const currentMeal = meals.find((m) => m.id === selectedMeal);

  // note가 있으면 description에 추가
  const fullDescription = currentMeal
    ? currentMeal.note
      ? `${currentMeal.description}\n\n📌 특별 안내\n${currentMeal.note}`
      : currentMeal.description
    : '';

  return (
    <section id="meal" className="bg-white py-16 px-5 lg:py-20 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-deep-navy text-center">
            식사 안내
          </h2>
          <p className="mt-4 text-base lg:text-lg text-gray-600 text-center">
            훗카이도의 신선한 식재료로 준비한 특별한 식사
          </p>
        </div>

        {/* Meal Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-4 lg:grid-cols-3 lg:gap-5">
          {meals.map((meal) => (
            <MealCard
              key={meal.id}
              {...meal}
              onClick={() => setSelectedMeal(meal.id)}
            />
          ))}
        </div>

        {/* 상세 모달 */}
        {currentMeal && (
          <DetailModal
            open={!!selectedMeal}
            onOpenChange={(open) => !open && setSelectedMeal(null)}
            title={currentMeal.name}
            image={currentMeal.image}
            description={fullDescription}
          />
        )}
      </div>
    </section>
  );
}
