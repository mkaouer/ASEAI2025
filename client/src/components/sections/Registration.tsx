import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Registration() {
  return (
    <section id="registration" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Registration
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Join ASEAI 2025</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Hybrid event for non-residents in Tunisia</strong>
                  <br />
                  Both in-person and remote participation options available
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Registration Deadline</h3>
                    <p className="text-muted-foreground">November 3, 2025</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Admitted participants will be notified via email by November 5, 2025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Contact</h3>
                    <a 
                      href="mailto:africa.aseai@gmail.com"
                      className="text-primary hover:underline"
                    >
                      africa.aseai@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={() => window.open("https://forms.gle/BeYwwqgiUm5qiPPu5", "_blank")}
                >
                  Register Now
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  For more information, visit{" "}
                  <a 
                    href="https://africaseai.github.io/ASEAI2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    africaseai.github.io/ASEAI2025
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
