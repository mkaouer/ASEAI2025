import { Card, CardContent } from "@/components/ui/card";
import { speakers } from "@/data/speakers";

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Plenary Speakers
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          World-class scholars and industry experts from leading institutions across the globe
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-secondary">
                <img 
                  src={speaker.photo} 
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/images/event/logo-aseai.jpg";
                  }}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{speaker.affiliation}</p>
                <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  {speaker.type}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
