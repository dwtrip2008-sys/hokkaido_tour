"use client";

import Image from "next/image";
import { tripInfo } from "@/shared/constants/travel-data";
import { ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image32.jpeg", // 시코츠 호수
  "/images/image45.jpeg", // 삿포로 시계대
  "/images/image42.jpeg", // 오오도리 공원
  "/images/image38.jpeg", // 오타루 운하
];

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
          className="h-full w-full"
        >
          <CarouselContent className="h-screen">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="relative h-screen pl-0">
                <Image
                  src={image}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  alt="훗카이도 풍경"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Gradient Overlay - 상단에서 하단으로 자연스러운 그라데이션 */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-start px-5 pt-8 text-center lg:pt-0">
        {/* 로고 */}
        <div className="mb-3 overflow-hidden">
          <Image
            src="/images/logo.png"
            width={240}
            height={240}
            alt="IFC Logo"
            className="h-36 w-45 object-cover object-center lg:h-44 lg:w-55"
            priority
          />
        </div>

        {/* 상단 라벨 */}
        <div className="mb-5 inline-block rounded-full border border-white/30 bg-white/10 px-6 py-2 backdrop-blur-sm lg:mb-6">
          <p className="text-sm font-medium tracking-wider text-white/90 lg:text-base">
            HOKKAIDO TOUR 2025
          </p>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="mb-3 text-5xl font-semibold tracking-wide text-white lg:mb-4 lg:text-7xl lg:tracking-wider">
          HOKKAIDO
        </h1>
        <h2 className="mb-5 text-2xl font-light tracking-widest text-white/90 lg:mb-6 lg:text-3xl">
          PREMIUM TOUR
        </h2>

        {/* 구분선 */}
        <div className="mb-4 h-px w-20 bg-white/40 lg:mb-5 lg:w-24" />

        {/* 여행 기간 */}
        <p className="mb-1 text-sm font-light tracking-wide text-white/70 lg:text-base">
          ㈜ IFC 2025
        </p>
        <p className="mb-2 text-lg font-medium text-white lg:text-xl">
          {tripInfo.period.split("(")[0].trim()}
        </p>
        <p className="text-base text-white/80 lg:text-lg">3박 4일</p>

        {/* 참가 인원 정보 */}
        {/* <div className="mt-8 flex gap-8 lg:mt-12">
          <div className="text-center">
            <p className="text-2xl font-bold text-white lg:text-3xl">
              {tripInfo.participants.tour}명
            </p>
            <p className="mt-1 text-sm text-white/70 lg:text-base">관광</p>
          </div>
          <div className="h-12 w-px bg-white/30" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white lg:text-3xl">
              {tripInfo.participants.golf}명
            </p>
            <p className="mt-1 text-sm text-white/70 lg:text-base">골프</p>
          </div>
        </div> */}

        {/* Scroll Indicator */}
        <a
          href="#schedule"
          className="absolute bottom-8 flex flex-col items-center gap-2 transition-opacity hover:opacity-100 lg:bottom-4"
          aria-label="일정표로 이동"
        >
          <p className="text-xs tracking-widest text-white/60 lg:text-sm">
            SCROLL DOWN
          </p>
          <ChevronDown
            className="h-6 w-6 animate-bounce text-white/70 lg:h-8 lg:w-8"
            strokeWidth={1.5}
          />
        </a>
      </div>
    </section>
  );
}
