import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToRegistration = () => {
    const element = document.getElementById("registration");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/event/sousse-1-960x640.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            1st African Winter School on<br />
            Software Engineering & AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-semibold">ASEAI 2025</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>24-26 November 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Novation City, Sousse, Tunisia</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8"
              onClick={scrollToRegistration}
            >
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8"
              onClick={() => window.open("https://africaseai.github.io/ASEAI2025", "_blank")}
            >
              Learn More
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/90">
            Hybrid event for non-residents in Tunisia
          </p>
        </div>
      </div>
    </section>
  );
}
