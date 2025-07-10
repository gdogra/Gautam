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
            <span className="text-lg font-medium text-blue-600" data-id="tldoo9pkq" data-path="src/components/Hero.tsx">AI Developer & Community Platform Builder</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-id="jd8aoctlq" data-path="src/components/Hero.tsx">
            Gautam Dogra
          </h1>
          
          <div className="max-w-3xl mx-auto mb-8 space-y-4" data-id="ba2sl1kdf" data-path="src/components/Hero.tsx">
            <p className="text-xl text-gray-600 leading-relaxed" data-id="hxlu8brp7" data-path="src/components/Hero.tsx">
              Seasoned AI developer and product engineer with <strong data-id="p5ymsk3rr" data-path="src/components/Hero.tsx">15+ years</strong> of experience transforming ideas into data‑driven applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed" data-id="t6zj25dq3" data-path="src/components/Hero.tsx">
              I specialize in blending machine‑learning workflows with pragmatic, community‑centric product design—shipping rapidly, iterating relentlessly, and always measuring real‑world impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" data-id="8qv3hxelq" data-path="src/components/Hero.tsx">
            <Button size="lg" onClick={scrollToWork} className="bg-blue-600 hover:bg-blue-700" data-id="4i1rmvpbx" data-path="src/components/Hero.tsx">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" data-id="ejvq2elr1" data-path="src/components/Hero.tsx" />
            </Button>
            <Button size="lg" variant="outline" asChild data-id="2pgwjflg7" data-path="src/components/Hero.tsx">
              <a href="mailto:gdogra@gmail.com" data-id="51m9cfi5z" data-path="src/components/Hero.tsx">Get In Touch</a>
            </Button>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-sm" data-id="9up862vbs" data-path="src/components/Hero.tsx">
            <p className="text-gray-700 font-medium" data-id="zy7bw7lsi" data-path="src/components/Hero.tsx">
              <strong data-id="ppif9bhks" data-path="src/components/Hero.tsx">Mission:</strong> Build tools that empower niche communities with intelligent workflows—so people spend less time wrangling tech and more time achieving goals.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;