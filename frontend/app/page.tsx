import Header from "./components/Header/Header";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";

export default function Home() {
  return (
    <>
      <Header />
      <ServiceSection />
      <ReviewSection />
    </>
  );
}
