'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/shared/ui/card';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';

interface HotelCardProps {
  id: number;
  name: string;
  nights: string;
  image: string;
  description: string;
  onClick: () => void;
}

export function HotelCard({
  name,
  nights,
  image,
  description,
  onClick,
}: HotelCardProps) {
  return (
    <Card
      className="p-0 overflow-hidden cursor-pointer shadow-sm transition-all duration-300 lg:hover:scale-105 lg:hover:shadow-xl"
      onClick={onClick}
    >
      {/* 이미지 영역 (16:9 비율) */}
      <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 640px"
        />
      </div>

      {/* 카드 내용 */}
      <CardContent className="p-6">
        <h3 className="text-xl lg:text-2xl font-bold mb-2">{name}</h3>
        <Badge
          variant="outline"
          className="text-sm text-sky-blue border-sky-blue mb-3"
        >
          {nights}
        </Badge>
        <p className="text-gray-600 line-clamp-3 leading-relaxed">{description}</p>
      </CardContent>

      {/* 카드 푸터 */}
      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          variant="link"
          className="text-sky-blue p-0 h-auto font-semibold"
        >
          더 보기 →
        </Button>
      </CardFooter>
    </Card>
  );
}