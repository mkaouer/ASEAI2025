import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            About the Event
          </h2>
          
          <Card className="border-2">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                The Winter School brings world-class scholars from across the globe to Africa to share knowledge, 
                inspire creativity, and build lasting collaborations. By serving as a bridge between Africa and other 
                continents, this winter school fosters cross-continental scientific exchange and global cooperation in 
                Software Engineering and AI. Through interactive sessions, mentoring, and cutting-edge talks, the 
                mission of the school is to empower the next generation of students, researchers, and professionals 
                with hands-on knowledge and insights into the future of Software Engineering in the era of AI.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
