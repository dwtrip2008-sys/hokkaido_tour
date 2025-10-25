'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/shared/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/shared/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/shared/ui/sheet';

interface MealCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  note?: string;
}

export function MealCard({ name, image, description, note }: MealCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const CardContent_Detail = (
    <div className="space-y-6">
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl lg:text-3xl font-bold text-deep-navy">
          {name}
        </h3>

        <p className="text-base lg:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {description}
        </p>

        {note && (
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {note}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop: Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild className="hidden lg:block">
          <Card className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg group">
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
        </DialogTrigger>

        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {CardContent_Detail}
        </DialogContent>
      </Dialog>

      {/* Mobile: Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Card className="overflow-hidden cursor-pointer transition-all duration-300 active:scale-95">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="50vw"
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
        </SheetTrigger>

        <SheetContent side="bottom" className="h-[80vh] overflow-y-auto">
          {CardContent_Detail}
        </SheetContent>
      </Sheet>
    </>
  );
}
