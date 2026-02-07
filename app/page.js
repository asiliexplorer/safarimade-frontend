 
 
 
import TailorMadeTrip from "./_components/home/TailorMadeTripEnhanced";
import TanzaniaWonders from "./_components/home/TanzaniaWonders";
import TestimonialSection from "./_components/home/TestimonialSection";
import WhyChooseUs from "./_components/home/WhyChooseUs";

import FAQSection from "./_components/home/FAQSection";
import TanzaniaParks from "./_components/home/TanzaniaParks";
import TanzaniaToursSlider from "./_components/home/TanzaniaToursSlider";
import TanzaniaVacation from "./_components/home/DreamVacationSection";
import GetInspiredSection from "./_components/home/GetInspiredSection";
import HeroSection from "./_components/home/Hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TanzaniaParks />
      <TanzaniaWonders />
      <TanzaniaVacation />
      <TestimonialSection />
      <WhyChooseUs />
      <TanzaniaToursSlider />
      <GetInspiredSection />
      <FAQSection />
      <TailorMadeTrip />
    </>
  );
}
