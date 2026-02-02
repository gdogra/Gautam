import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white" data-id="about-section" data-path="src/components/About.tsx">
      <div className="container mx-auto px-4" data-id="about-container" data-path="src/components/About.tsx">
        <div className="text-center mb-16" data-id="about-header" data-path="src/components/About.tsx">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="about-title" data-path="src/components/About.tsx">Professional Profile</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="about-subtitle" data-path="src/components/About.tsx">
            15+ years of experience delivering innovative solutions across diverse domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-id="about-content" data-path="src/components/About.tsx">
          <Card data-id="about-card" data-path="src/components/About.tsx">
            <CardContent className="p-8" data-id="about-card-content" data-path="src/components/About.tsx">
              <div className="prose prose-lg max-w-none" data-id="about-prose" data-path="src/components/About.tsx">
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-p1" data-path="src/components/About.tsx">
                  I am an experienced AI developer and product engineer with over 15 years of expertise in transforming complex challenges into elegant, data-driven solutions. My career spans diverse industries including finance, healthcare, and community platforms, where I've consistently delivered impactful results.
                </p>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-p2" data-path="src/components/About.tsx">
                  Throughout my career, I've led cross-functional teams implementing agile methodologies including SAFe, Scrum, and Kanban. My experience includes zero-downtime releases at scale for major organizations like Sony PlayStation, Yahoo Ads, and Active Network. I specialize in bridging the gap between technical capabilities and business value.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4" data-id="work-experience-title" data-path="src/components/About.tsx">Work Experience & Applications</h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-work-p1" data-path="src/components/About.tsx">
                  My portfolio includes several innovative applications that demonstrate my ability to combine technical excellence with practical problem-solving:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4" data-id="about-apps-list" data-path="src/components/About.tsx">
                  <li data-id="app-li1" data-path="src/components/About.tsx">
                    <strong data-id="app-strong1" data-path="src/components/About.tsx">AI-Powered Compliance Tracker</strong>: Revolutionary platform for accounting firms to manage tax deadlines with predictive intelligence
                  </li>
                  <li data-id="app-li2" data-path="src/components/About.tsx">
                    <strong data-id="app-strong2" data-path="src/components/About.tsx">OncoSafeRx</strong>: AI-powered platform for oncology research connecting cancer mutations with drug therapies
                  </li>
                  <li data-id="app-li3" data-path="src/components/About.tsx">
                    <strong data-id="app-strong3" data-path="src/components/About.tsx">SiteBoss</strong>: AI-powered website optimization platform for conversion rate improvement
                  </li>
                  <li data-id="app-li4" data-path="src/components/About.tsx">
                    <strong data-id="app-strong4" data-path="src/components/About.tsx">CalmIntake</strong>: Mental health platform with AI-powered screening and care recommendations
                  </li>
                </ul>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-work-p2" data-path="src/components/About.tsx">
                  My technical expertise spans full-stack development, AI/ML implementation, DevOps, and cloud infrastructure. I'm passionate about building tools that empower niche communities with intelligent workflows, allowing people to focus on achieving their goals rather than wrestling with technology.
                </p>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-work-p3" data-path="src/components/About.tsx">
                  I approach each project with a lean methodology, focusing on rapid prototyping, continuous iteration, and measurable impact. My mission is to create solutions that not only meet technical requirements but also deliver real-world value to users.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;