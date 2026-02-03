import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white" data-id="oeucj65ny" data-path="src/components/Hero.tsx">
      <div className="container mx-auto px-4 text-center" data-id="wb3jyxokp" data-path="src/components/Hero.tsx">
        <div className="max-w-4xl mx-auto" data-id="u3y7yqlwf" data-path="src/components/Hero.tsx">
          <div className="flex items-center justify-center mb-6" data-id="1s7spskk3" data-path="src/components/Hero.tsx">
            <Sparkles className="h-8 w-8 text-blue-600 mr-2" data-id="995ii16ou" data-path="src/components/Hero.tsx" />
            <span className="text-lg font-medium text-blue-600" data-id="tldoo9pkq" data-path="src/components/Hero.tsx">Senior Technical Program Manager & AI Developer</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-id="jd8aoctlq" data-path="src/components/Hero.tsx">
            Gautam Dogra
          </h1>
          
          <div className="max-w-3xl mx-auto mb-8 space-y-4" data-id="ba2sl1kdf" data-path="src/components/Hero.tsx">
            <p className="text-xl text-gray-600 leading-relaxed" data-id="hxlu8brp7" data-path="src/components/Hero.tsx">
              Senior Technical Program Manager and AI Developer with <strong data-id="p5ymsk3rr" data-path="src/components/Hero.tsx">15+ years</strong> of experience leading complex software development programs in regulated environments.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed" data-id="t6zj25dq3" data-path="src/components/Hero.tsx">
              Expert in technical program management, agile methodologies (CSM/CSPO certified), DevOps, and AI development—delivering measurable results across defense, healthcare, and federal sectors.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-12" data-id="8qv3hxelq" data-path="src/components/Hero.tsx">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700" data-id="nav-about-btn" data-path="src/components/Hero.tsx">
              <a href="/about" data-id="nav-about-link" data-path="src/components/Hero.tsx">About Me</a>
            </Button>
            <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700" data-id="nav-work-btn" data-path="src/components/Hero.tsx">
              <a href="/work" data-id="nav-work-link" data-path="src/components/Hero.tsx">My Work</a>
            </Button>
            <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700" data-id="nav-projects-btn" data-path="src/components/Hero.tsx">
              <a href="/projects" data-id="nav-projects-link" data-path="src/components/Hero.tsx">Projects</a>
            </Button>
            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700" data-id="nav-skills-btn" data-path="src/components/Hero.tsx">
              <a href="/skills" data-id="nav-skills-link" data-path="src/components/Hero.tsx">Skills</a>
            </Button>
            <Button size="lg" variant="outline" asChild data-id="nav-contact-btn" data-path="src/components/Hero.tsx">
              <a href="/contact" data-id="nav-contact-link" data-path="src/components/Hero.tsx">Contact</a>
            </Button>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-sm" data-id="9up862vbs" data-path="src/components/Hero.tsx">
            <p className="text-gray-700 font-medium" data-id="zy7bw7lsi" data-path="src/components/Hero.tsx">
              <strong data-id="ppif9bhks" data-path="src/components/Hero.tsx">Mission:</strong> Drive predictable execution and transformative outcomes in complex, regulated environments through technical leadership, agile excellence, and innovative AI solutions.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;