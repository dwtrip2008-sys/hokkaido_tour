import Image from 'next/image';
import { Card, CardContent } from '@/shared/ui/card';

interface MealCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  note?: string;
  onClick: () => void;
}

export function MealCard({ name, image, note, onClick }: MealCardProps) {
  return (
    <Card
      className="p-0 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg active:scale-95 group"
      onClick={onClick}
    >
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
          loading="lazy"
        />
      </div>
      <CardContent className="p-4">
        <h4 className="text-lg font-bold text-center text-gray-900">
          {name}
        </h4>
        {note && (
          <p className="text-sm text-gray-600 text-center mt-1">
            특별 프로그램
          </p>
        )}
      </CardContent>
    </Card>
  );
}
