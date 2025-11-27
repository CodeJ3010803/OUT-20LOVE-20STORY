import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowWeStarted from "@/components/HowWeStarted";
import Memories from "@/components/Memories";
import Albums from "@/components/Albums";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <HowWeStarted />
      <Memories />
      <Albums />
      <Footer />
    </div>
  );
}
