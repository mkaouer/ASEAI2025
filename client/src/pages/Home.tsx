import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Topics from "@/components/sections/Topics";
import Speakers from "@/components/sections/Speakers";
import Program from "@/components/sections/Program";
import Organizers from "@/components/sections/Organizers";
import Sponsors from "@/components/sections/Sponsors";
import Registration from "@/components/sections/Registration";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <About />
        <Topics />
        <Speakers />
        <Program />
        <Organizers />
        <Sponsors />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}
