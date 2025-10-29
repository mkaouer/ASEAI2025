import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, GraduationCap, Award } from "lucide-react";

export default function Topics() {
  const topics = [
    {
      icon: BookOpen,
      title: "Research Talks",
      description: "Emerging topics in SE and AI"
    },
    {
      icon: Users,
      title: "Research Student Mentoring",
      description: "Guidance for graduate students"
    },
    {
      icon: GraduationCap,
      title: "New Faculty Mentoring",
      description: "Support for early-career academics"
    },
    {
      icon: Award,
      title: "AI Certifications",
      description: "NVIDIA certification workshops"
    }
  ];

  return (
    <section id="topics" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Topics & Focus Areas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
