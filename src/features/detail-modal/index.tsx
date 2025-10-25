'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/shared/ui/sheet';

interface DetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  image: string;
  description: string;
}

export function DetailModal({
  open,
  onOpenChange,
  title,
  image,
  description,
}: DetailModalProps) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // 반응형 체크 (1024px 기준 - lg breakpoint)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    // throttle을 위한 타이머
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // SSR 시 또는 초기 렌더링 시 아무것도 렌더링하지 않음
  if (isMobile === undefined) {
    return null;
  }

  const content = (
    <>
      <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 768px"
        />
      </div>
      <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </>
  );

  // Mobile: Sheet (bottom)
  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="bottom"
          className="h-[80vh] overflow-y-auto p-6 bg-white [&>button]:text-gray-900 [&>button]:opacity-100"
        >
          <SheetHeader className="mb-6 p-0">
            <SheetTitle className="text-xl font-bold text-gray-900 text-left">
              {title}
            </SheetTitle>
          </SheetHeader>
          {content}
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop: Dialog
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-3xl max-h-[80vh] overflow-y-auto p-8 bg-white [&>button]:text-gray-900 [&>button]:opacity-100"
      >
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {title}
          </DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
}