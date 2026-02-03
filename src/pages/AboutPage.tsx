import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white py-12" data-id="about-page" data-path="src/pages/AboutPage.tsx">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b mb-12" data-id="about-header" data-path="src/pages/AboutPage.tsx">
          <div className="container mx-auto px-4 py-4" data-id="about-header-container" data-path="src/pages/AboutPage.tsx">
            <div className="flex justify-between items-center" data-id="about-header-content" data-path="src/pages/AboutPage.tsx">
              <div className="flex items-center space-x-2" data-id="about-header-info" data-path="src/pages/AboutPage.tsx">
                <h1 className="text-2xl font-bold text-gray-900" data-id="about-header-title" data-path="src/pages/AboutPage.tsx">Gautam Dogra</h1>
                <span className="text-sm text-gray-500" data-id="about-header-subtitle" data-path="src/pages/AboutPage.tsx">Senior Technical Program Manager & AI Developer</span>
              </div>
              
              <nav className="hidden md:flex space-x-6" data-id="about-nav" data-path="src/pages/AboutPage.tsx">
                <a href="/" className="text-gray-600 hover:text-gray-900" data-id="about-nav-home" data-path="src/pages/AboutPage.tsx">Home</a>
                <span className="text-gray-900 font-medium" data-id="about-nav-current" data-path="src/pages/AboutPage.tsx">About</span>
                <a href="/work" className="text-gray-600 hover:text-gray-900" data-id="about-nav-work" data-path="src/pages/AboutPage.tsx">Work</a>
                <a href="/projects" className="text-gray-600 hover:text-gray-900" data-id="about-nav-projects" data-path="src/pages/AboutPage.tsx">Projects</a>
                <a href="/skills" className="text-gray-600 hover:text-gray-900" data-id="about-nav-skills" data-path="src/pages/AboutPage.tsx">Skills</a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900" data-id="about-nav-contact" data-path="src/pages/AboutPage.tsx">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <div className="text-center mb-16" data-id="about-header-section" data-path="src/pages/AboutPage.tsx">
          <h1 className="text-5xl font-bold text-gray-900 mb-6" data-id="about-title" data-path="src/pages/AboutPage.tsx">
            About <span className="text-purple-600">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="about-subtitle" data-path="src/pages/AboutPage.tsx">
            Senior Technical Program Manager & AI Developer with 15+ years of experience in regulated environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-id="about-content" data-path="src/pages/AboutPage.tsx">
          <Card data-id="about-card" data-path="src/pages/AboutPage.tsx">
            <CardContent className="p-8" data-id="about-card-content" data-path="src/pages/AboutPage.tsx">
              <div className="prose prose-lg max-w-none" data-id="about-prose" data-path="src/pages/AboutPage.tsx">
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-p1" data-path="src/pages/AboutPage.tsx">
                  I am a Senior Technical Program Manager and AI Developer with 15+ years of experience leading complex software development programs from initiation through commercialization in highly regulated environments. I hold an active DOD Secret clearance. My expertise spans technical program management, agile methodologies, DevOps, and AI development across diverse industries including defense, healthcare, federal agencies, and enterprise software.
                </p>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-p2" data-path="src/pages/AboutPage.tsx">
                  My expertise spans across technical program management, agile leadership (CSM/CSPO certified), regulatory compliance (FDA, ISO 13485/14971), devops, and full-stack development. I have consistently delivered measurable impact across multiple organizations including EPA, U.S. Army, U.S. Navy, Dexcom, and Sony PlayStation.
                </p>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-p3" data-path="src/pages/AboutPage.tsx">
                  Throughout my career, I've successfully managed multiple software programs across regulated environments (FDA medical devices, DoD defense systems, federal agencies), consistently improving delivery outcomes with measurable results: 40% improvement at EPA, 30% at Army, and 20% at Navy programs. I specialize in bridging the gap between technical capabilities and business value while ensuring regulatory compliance.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4" data-id="approach-title" data-path="src/pages/AboutPage.tsx">My Approach</h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-approach-p1" data-path="src/pages/AboutPage.tsx">
                  My approach combines deep technical knowledge with strategic program management skills, enabling successful delivery of complex projects in regulated environments while maintaining quality standards and compliance requirements. I'm passionate about building tools that empower niche communities with intelligent workflows, allowing people to focus on achieving their goals rather than wrestling with technology.
                </p>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-approach-p2" data-path="src/pages/AboutPage.tsx">
                  I approach each project with a lean methodology, focusing on rapid prototyping, continuous iteration, and measurable impact. My mission is to create solutions that not only meet technical requirements but also deliver real-world value to users while maintaining compliance with industry standards.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;