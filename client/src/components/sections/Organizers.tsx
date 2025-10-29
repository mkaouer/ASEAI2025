import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Organizers() {
  const organizers = [
    {
      name: "Ali Ouni",
      title: "General Chair",
      affiliation: "ÉTS Montreal, University of Quebec, Canada"
    },
    {
      name: "Med Wiem Mkaouer",
      title: "General Chair",
      affiliation: "University of Michigan-Flint, USA"
    },
    {
      name: "Maha Khemaja",
      title: "Local Chair",
      affiliation: "ISSAT Sousse, Tunisia"
    },
    {
      name: "Montassar Ben Messaoud",
      title: "Local Chair",
      affiliation: "TBS, Tunisia"
    }
  ];

  return (
    <section id="organizers" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Organizing Committee
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {organizers.map((organizer, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{organizer.name}</CardTitle>
                <p className="text-sm font-semibold text-primary">{organizer.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{organizer.affiliation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
