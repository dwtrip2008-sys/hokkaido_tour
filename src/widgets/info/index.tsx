import { VehicleInfo } from './ui/vehicle-info';
import { Checklist } from './ui/checklist';

export function InfoSection() {
  return (
    <section className="bg-white py-16 px-5 lg:py-20 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* 섹션 타이틀 */}
        <h2 className="text-3xl lg:text-4xl font-bold text-deep-navy mb-8 lg:mb-12 text-center">
          차량 및 준비물 안내
        </h2>

        {/* 차량 정보 */}
        <VehicleInfo />

        {/* 준비물 체크리스트 */}
        <Checklist />
      </div>
    </section>
  );
}
