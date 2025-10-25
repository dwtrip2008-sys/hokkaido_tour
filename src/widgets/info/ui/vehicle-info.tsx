import Image from 'next/image';
import { vehicleInfo } from '@/shared/constants/travel-data';

export function VehicleInfo() {
  return (
    <div className="mb-12 lg:mb-16">
      {/* 타이틀 */}
      <h3 className="text-2xl lg:text-3xl font-bold text-deep-navy mb-6">
        차량 안내
      </h3>

      {/* 좌우 분할 레이아웃 */}
      <div className="flex flex-col lg:flex-row lg:gap-12 gap-6">
        {/* 왼쪽: 차량 이미지 */}
        <div className="lg:w-1/2">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-sm">
            <Image
              src={vehicleInfo.image}
              alt="45인승 전용 차량"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* 오른쪽: 차량 정보 */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            {vehicleInfo.type}
          </h4>
          <p className="text-lg text-sky-blue font-semibold mb-4">
            {vehicleInfo.quantity}
          </p>

          {/* 상세 정보 리스트 */}
          <ul className="space-y-3">
            {vehicleInfo.details.map((detail, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 leading-relaxed"
              >
                <span className="text-sky-blue mt-1.5 flex-shrink-0">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}