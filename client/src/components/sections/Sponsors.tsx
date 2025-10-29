import { Card, CardContent } from "@/components/ui/card";
import { sponsors } from "@/data/sponsors";

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Our Sponsors
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          We thank our sponsors for their generous support
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <div className="w-full h-24 flex items-center justify-center mb-4">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <h3 className="font-semibold text-center text-sm mb-2">{sponsor.name}</h3>
                {sponsor.contribution && (
                  <p className="text-xs text-muted-foreground text-center">
                    {sponsor.contribution}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
