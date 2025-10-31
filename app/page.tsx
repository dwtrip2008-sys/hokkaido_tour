import { Hero } from "@/widgets/hero";
import { VideoSection } from "@/widgets/video";
import { HotelWidget } from "@/widgets/hotel";
import { MealSection } from "@/widgets/meal";
import { ScheduleSection } from "@/widgets/schedule";
import { AttractionWidget } from "@/widgets/attraction";
import { InfoSection } from "@/widgets/info";
import { Footer } from "@/widgets/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <VideoSection />
      <ScheduleSection />
      <HotelWidget />
      <MealSection />
      <AttractionWidget />
      <InfoSection />
      <Footer />
    </div>
  );
}
