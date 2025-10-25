'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/shared/ui/card';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';

interface AttractionCardProps {
  id: number;
  name: string;
  type: 'attraction' | 'golf';
  image: string;
  description: string;
  onClick: () => void;
}

export function AttractionCard({
  name,
  type,
  image,
  description,
  onClick,
}: AttractionCardProps) {
  return (
    <Card
      className="p-0 overflow-hidden cursor-pointer shadow-sm transition-all duration-300 lg:hover:scale-105 lg:hover:shadow-xl relative"
      onClick={onClick}
    >
      {/* 골프 배지 (조건부 렌더링) */}
      {type === 'golf' && (
        <Badge className="absolute top-3 left-3 z-10 bg-accent-orange text-white px-3 py-1 text-xs font-semibold">
          골프
        </Badge>
      )}

      {/* 이미지 영역 (16:9 비율) */}
      <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
        />
      </div>

      {/* 카드 내용 */}
      <CardContent className="p-5">
        <h3 className="text-xl lg:text-2xl font-bold mb-3">{name}</h3>
        <p className="text-gray-600 line-clamp-3 leading-relaxed text-sm lg:text-base">
          {description}
        </p>
      </CardContent>

      {/* 카드 푸터 */}
      <CardFooter className="px-5 pb-5 pt-0">
        <Button
          variant="link"
          className="text-sky-blue p-0 h-auto font-semibold"
        >
          자세히 보기 →
        </Button>
      </CardFooter>
    </Card>
  );
}