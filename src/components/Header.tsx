import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b" data-id="oiyx0hlb7" data-path="src/components/Header.tsx">
      <div className="container mx-auto px-4 py-4" data-id="csnyx7o1w" data-path="src/components/Header.tsx">
        <div className="flex justify-between items-center" data-id="txmrfihca" data-path="src/components/Header.tsx">
          <div className="flex items-center space-x-2" data-id="ccohklawr" data-path="src/components/Header.tsx">
            <h1 className="text-2xl font-bold text-gray-900" data-id="sa8muj29f" data-path="src/components/Header.tsx">Gautam Dogra</h1>
            <span className="text-sm text-gray-500" data-id="iga20owrp" data-path="src/components/Header.tsx">Senior Technical Program Manager & AI Developer</span>
          </div>
          
          <nav className="hidden md:flex space-x-6" data-id="1trz7c2bd" data-path="src/components/Header.tsx">
            <Button variant="ghost" onClick={() => scrollToSection('about')} data-id="uflgxky8n" data-path="src/components/Header.tsx">
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('work')} data-id="hut254xlq" data-path="src/components/Header.tsx">
              Work
            </Button>
            <Button variant="ghost" asChild data-id="apps-nav" data-path="src/components/Header.tsx">
              <a href="/apps" data-id="apps-link" data-path="src/components/Header.tsx">Apps</a>
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('skills')} data-id="npskfb9ko" data-path="src/components/Header.tsx">
              Skills
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')} data-id="9ztoa1g2x" data-path="src/components/Header.tsx">
              Contact
            </Button>
          </nav>

          <div className="flex items-center space-x-2" data-id="8596trsww" data-path="src/components/Header.tsx">
            <Button variant="ghost" size="sm" asChild data-id="n9bkb2vpy" data-path="src/components/Header.tsx">
              <a href="mailto:gdogra@gmail.com" target="_blank" rel="noopener noreferrer" data-id="ryr4gxzzx" data-path="src/components/Header.tsx">
                <Mail className="h-4 w-4" data-id="2oy0e7rch" data-path="src/components/Header.tsx" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild data-id="tux7g1xb5" data-path="src/components/Header.tsx">
              <a href="https://linkedin.com/in/gautam-dogra" target="_blank" rel="noopener noreferrer" data-id="rrsvua1tw" data-path="src/components/Header.tsx">
                <Linkedin className="h-4 w-4" data-id="glrv9i89r" data-path="src/components/Header.tsx" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild data-id="185x3pnuc" data-path="src/components/Header.tsx">
              <a href="https://github.com/gdogra" target="_blank" rel="noopener noreferrer" data-id="a5jdk64ku" data-path="src/components/Header.tsx">
                <Github className="h-4 w-4" data-id="ed7ugn7x1" data-path="src/components/Header.tsx" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>);

};

export default Header;