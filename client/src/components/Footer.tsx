import { Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ASEAI 2025</h3>
            <p className="text-sm opacity-90">
              1st African Winter School on Software Engineering & AI
            </p>
            <p className="text-sm opacity-90 mt-2">
              November 24-26, 2025
            </p>
            <p className="text-sm opacity-90">
              Novation City, Sousse, Tunisia
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2">
              <a 
                href="mailto:africa.aseai@gmail.com"
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                africa.aseai@gmail.com
              </a>
              <a 
                href="https://africaseai.github.io/ASEAI2025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
              >
                <Globe className="h-4 w-4" />
                africaseai.github.io/ASEAI2025
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <p className="text-sm opacity-90">
              #aseai
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 ASEAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
