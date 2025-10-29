import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { program } from "@/data/program";
import { Clock, User, MapPin } from "lucide-react";

export default function Program() {
  const [activeDay, setActiveDay] = useState("0");

  return (
    <section id="program" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Program Schedule
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Three days of intensive learning, networking, and collaboration
        </p>

        <div className="max-w-5xl mx-auto">
          <Tabs value={activeDay} onValueChange={setActiveDay}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {program.map((day, index) => (
                <TabsTrigger key={index} value={index.toString()}>
                  <div className="text-center">
                    <div className="font-semibold">{day.day}</div>
                    <div className="text-xs hidden sm:block">{day.date}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {program.map((day, dayIndex) => (
              <TabsContent key={dayIndex} value={dayIndex.toString()}>
                <Card>
                  <CardHeader>
                    <CardTitle>{day.date}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {day.sessions.map((session, sessionIndex) => (
                      <div 
                        key={sessionIndex}
                        className="border-l-4 border-primary pl-4 py-2 hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-primary mb-1">
                              {session.time}
                            </div>
                            <div className="font-medium mb-1">
                              {session.session}
                            </div>
                            {session.speaker && (
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <User className="h-3 w-3" />
                                <span>{session.speaker}</span>
                              </div>
                            )}
                            {session.type && (
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                <MapPin className="h-3 w-3" />
                                <span>{session.type}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
