'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import { Separator } from '@/shared/ui/separator';
import { schedules, flights } from '@/shared/constants/travel-data';
import { Plane } from 'lucide-react';

export function ScheduleSection() {
  return (
    <section id="schedule" className="bg-white py-16 px-5 lg:py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Title */}
        <h2 className="mb-10 text-center text-3xl font-bold text-deep-navy lg:mb-14 lg:text-4xl">
          일정표
        </h2>

        {/* Flight Information */}
        <div className="mb-10 lg:mb-14">
          <div className="mb-5 flex items-center gap-2 lg:mb-6">
            <Plane className="h-5 w-5 text-sky-blue lg:h-6 lg:w-6" />
            <h3 className="text-xl font-bold text-deep-navy lg:text-2xl">항공편 안내</h3>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {flights.map((flight) => (
              <div
                key={flight.origin}
                className="rounded-lg border border-gray-300 bg-white p-5 shadow-sm lg:p-6"
              >
                {/* Header */}
                <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-3">
                  <h4 className="text-lg font-bold text-deep-navy lg:text-xl">
                    {flight.origin} 출발
                  </h4>
                  <span className="rounded-full bg-sky-blue/10 px-3 py-1 text-sm font-semibold text-sky-blue lg:px-4 lg:text-base">
                    {flight.airline}
                  </span>
                </div>

                {/* Outbound Flight */}
                <div className="mb-4 rounded-md bg-ice-blue/30 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-600 lg:text-base">출발</span>
                    <span className="text-sm text-gray-600 lg:text-base">{flight.outbound.date}</span>
                  </div>
                  <div className="mb-1 text-base font-bold text-deep-navy lg:text-lg">
                    {flight.outbound.departure} → {flight.outbound.arrival}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700 lg:text-base">
                    <span>{flight.outbound.time}</span>
                    <span className="text-sky-blue font-semibold">{flight.outbound.flightNumber}</span>
                  </div>
                </div>

                {/* Inbound Flight */}
                <div className="rounded-md bg-gray-50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-600 lg:text-base">도착</span>
                    <span className="text-sm text-gray-600 lg:text-base">{flight.inbound.date}</span>
                  </div>
                  <div className="mb-1 text-base font-bold text-deep-navy lg:text-lg">
                    {flight.inbound.departure} → {flight.inbound.arrival}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700 lg:text-base">
                    <span>{flight.inbound.time}</span>
                    <span className="text-sky-blue font-semibold">{flight.inbound.flightNumber}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Accordion */}
        <div className="lg:hidden">
          <Accordion type="single" collapsible>
            <div className="border border-gray-300 overflow-hidden shadow-sm">
              {schedules.map((schedule, index) => (
                <AccordionItem
                  key={schedule.day}
                  value={`day-${schedule.day}`}
                  className={index !== schedules.length - 1 ? 'border-b border-gray-300' : ''}
                >
                  <AccordionTrigger className="px-5 py-5 hover:bg-ice-blue data-[state=open]:bg-ice-blue transition-all duration-200">
                    <div className="text-left w-full">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-accent-orange/10 text-accent-orange font-bold text-sm shrink-0">
                          {schedule.day}
                        </span>
                        <span className="font-bold text-xl text-deep-navy">
                          Day {schedule.day}
                        </span>
                      </div>
                      <div className="text-base text-gray-700 font-medium">
                        {schedule.date}
                      </div>
                      <div className="text-sm text-gray-600 mt-1.5">
                        {schedule.route}
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-5 py-6 bg-gray-50 border-t border-gray-200">
                    {/* Timeline */}
                    <div className="space-y-4 mb-6">
                      {schedule.timeline.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="min-w-[65px] text-sky-blue font-bold text-base bg-sky-blue/5 rounded px-2 py-1 text-center shrink-0">
                            {item.time}
                          </div>
                          <div className="text-gray-900 text-base leading-relaxed whitespace-pre-line">
                            {item.activity}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-6 bg-gray-300" />

                    {/* Accommodation */}
                    <div className="mb-6 bg-white rounded-md p-4 border border-gray-200">
                      <div className="font-bold text-base text-deep-navy mb-2">
                        숙박
                      </div>
                      <div className="text-gray-700 text-base leading-relaxed">
                        {schedule.accommodation}
                      </div>
                    </div>

                    {/* Meals */}
                    <div className="bg-white rounded-md p-4 border border-gray-200">
                      <div className="font-bold text-base text-deep-navy mb-3">
                        식사
                      </div>
                      <div className="space-y-2 text-base text-gray-700">
                        <div className="flex">
                          <span className="font-semibold min-w-[50px]">조식</span>
                          <span>{schedule.meals.breakfast}</span>
                        </div>
                        <div className="flex">
                          <span className="font-semibold min-w-[50px]">중식</span>
                          <span>{schedule.meals.lunch}</span>
                        </div>
                        <div className="flex">
                          <span className="font-semibold min-w-[50px]">석식</span>
                          <span>{schedule.meals.dinner}</span>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </Accordion>
        </div>

        {/* Desktop: Accordion */}
        <div className="hidden lg:block">
          <Accordion type="single" collapsible>
            <div className="border border-gray-300 overflow-hidden shadow-sm">
              {schedules.map((schedule, index) => (
                <AccordionItem
                  key={schedule.day}
                  value={`day-${schedule.day}`}
                  className={index !== schedules.length - 1 ? 'border-b border-gray-300' : ''}
                >
                  <AccordionTrigger className="px-8 py-6 hover:bg-ice-blue data-[state=open]:bg-ice-blue transition-all duration-200">
                    <div className="text-left w-full flex items-center justify-between pr-8">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-orange/10 text-accent-orange font-bold text-xl shrink-0">
                          {schedule.day}
                        </span>
                        <div>
                          <div className="font-bold text-2xl text-deep-navy mb-1">
                            Day {schedule.day}
                          </div>
                          <div className="text-lg text-gray-700 font-medium">
                            {schedule.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-lg text-gray-600">
                        {schedule.route}
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-8 py-8 bg-gray-50 border-t border-gray-200">
                    <div className="max-w-5xl">
                      {/* Timeline */}
                      <div className="space-y-4 mb-8">
                        {schedule.timeline.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-6">
                            <div className="min-w-[80px] text-sky-blue font-bold text-lg bg-sky-blue/5 rounded-md px-3 py-1.5 text-center shrink-0">
                              {item.time}
                            </div>
                            <div className="text-gray-900 text-lg leading-relaxed whitespace-pre-line">
                              {item.activity}
                            </div>
                          </div>
                        ))}
                      </div>

                      <Separator className="my-8 bg-gray-300" />

                      <div className="grid grid-cols-2 gap-12">
                        {/* Accommodation */}
                        <div className="bg-white rounded-lg p-5 border border-gray-200">
                          <div className="font-bold text-lg text-deep-navy mb-3">
                            숙박
                          </div>
                          <div className="text-gray-700 text-base leading-relaxed">
                            {schedule.accommodation}
                          </div>
                        </div>

                        {/* Meals */}
                        <div className="bg-white rounded-lg p-5 border border-gray-200">
                          <div className="font-bold text-lg text-deep-navy mb-3">
                            식사
                          </div>
                          <div className="space-y-2.5 text-base text-gray-700">
                            <div className="flex">
                              <span className="font-semibold min-w-[60px]">조식</span>
                              <span>{schedule.meals.breakfast}</span>
                            </div>
                            <div className="flex">
                              <span className="font-semibold min-w-[60px]">중식</span>
                              <span>{schedule.meals.lunch}</span>
                            </div>
                            <div className="flex">
                              <span className="font-semibold min-w-[60px]">석식</span>
                              <span>{schedule.meals.dinner}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
