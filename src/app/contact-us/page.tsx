import { FeaturedCourses } from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteScroll";
import { MeetOurInstructor } from "@/components/MeetOurInstructor";
import StickyScrollRevealDemo from "@/components/StickyScroll";
import { UpcommingWbinars } from "@/components/UpcommingWbinars";
export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] overflow-y-auto antialiased">
      <MeetOurInstructor />
    </div>
  );
}
