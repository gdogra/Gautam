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
            <Button variant="ghost" asChild data-id="home-nav" data-path="src/components/Header.tsx">
              <a href="/" data-id="home-link" data-path="src/components/Header.tsx">Home</a>
            </Button>
            <Button variant="ghost" asChild data-id="about-nav" data-path="src/components/Header.tsx">
              <a href="/about" data-id="about-link" data-path="src/components/Header.tsx">About</a>
            </Button>
            <Button variant="ghost" asChild data-id="work-nav" data-path="src/components/Header.tsx">
              <a href="/work" data-id="work-link" data-path="src/components/Header.tsx">Work</a>
            </Button>
            <Button variant="ghost" asChild data-id="projects-nav" data-path="src/components/Header.tsx">
              <a href="/projects" data-id="projects-link" data-path="src/components/Header.tsx">Projects</a>
            </Button>
            <Button variant="ghost" asChild data-id="skills-nav" data-path="src/components/Header.tsx">
              <a href="/skills" data-id="skills-link" data-path="src/components/Header.tsx">Skills</a>
            </Button>
            <Button variant="ghost" asChild data-id="contact-nav" data-path="src/components/Header.tsx">
              <a href="/contact" data-id="contact-link" data-path="src/components/Header.tsx">Contact</a>
            </Button>
          </nav>

          <div className="flex items-center space-x-2" data-id="8596trsww" data-path="src/components/Header.tsx">
            <Button variant="ghost" size="sm" asChild data-id="n9bkb2vpy" data-path="src/components/Header.tsx">
              <a href="mailto:gdogra@gmail.com" target="_blank" rel="noopener noreferrer" data-id="ryr4gxzzx" data-path="src/components/Header.tsx">
                <Mail className="h-4 w-4" data-id="2oy0e7rch" data-path="src/components/Header.tsx" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild data-id="tux7g1xb5" data-path="src/components/Header.tsx">
              <a href="https://www.linkedin.com/in/gautamdogra/" target="_blank" rel="noopener noreferrer" data-id="rrsvua1tw" data-path="src/components/Header.tsx">
                <Linkedin className="h-4 w-4" data-id="glrv9i89r" data-path="src/components/Header.tsx" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild data-id="185x3pnuc" data-path="src/components/Header.tsx">
              <a href="https://github.com/gdogra" target="_blank" rel="noopener noreferrer" data-id="a5jdk64ku" data-path="src/components/Header.tsx">
                <Github className="h-4 w-4" data-id="ed7ugn7x1" data-path="src/components/Header.tsx" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild data-id="logout-btn" data-path="src/components/Header.tsx">
              <a href="/login" data-id="logout-link" data-path="src/components/Header.tsx">
                <span className="text-red-600">Logout</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>);

};

export default Header;