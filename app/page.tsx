import { Hero } from "@/widgets/hero";
import { HotelWidget } from "@/widgets/hotel";
import { MealSection } from "@/widgets/meal";
import { ScheduleSection } from "@/widgets/schedule";
import { AttractionWidget } from "@/widgets/attraction";
import { InfoSection } from "@/widgets/info";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ScheduleSection />
      <HotelWidget />
      <MealSection />
      <AttractionWidget />
      <InfoSection />
    </div>
  );
}
