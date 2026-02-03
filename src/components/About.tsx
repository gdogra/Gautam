import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white" data-id="about-section" data-path="src/components/About.tsx">
      <div className="container mx-auto px-4" data-id="about-container" data-path="src/components/About.tsx">
        <div className="text-center mb-16" data-id="about-header" data-path="src/components/About.tsx">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="about-title" data-path="src/components/About.tsx">Professional Profile</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="about-subtitle" data-path="src/components/About.tsx">
            Senior Technical Program Manager & AI Developer with 15+ years of experience in regulated environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-id="about-content" data-path="src/components/About.tsx">
          <Card data-id="about-card" data-path="src/components/About.tsx">
            <CardContent className="p-8" data-id="about-card-content" data-path="src/components/About.tsx">
              <div className="prose prose-lg max-w-none" data-id="about-prose" data-path="src/components/About.tsx">
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-p1" data-path="src/components/About.tsx">
                  I am a Senior Technical Program Manager and AI Developer with 15+ years of experience leading complex software development programs from initiation through commercialization in highly regulated environments. I hold an active DOD Secret clearance. My expertise spans technical program management, agile methodologies, DevOps, and AI development across diverse industries including defense, healthcare, federal agencies, and enterprise software.
                </p>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-p2" data-path="src/components/About.tsx">
                  Throughout my career, I've successfully managed multiple software programs across regulated environments (FDA medical devices, DoD defense systems, federal agencies), consistently improving delivery outcomes with measurable results: 40% improvement at EPA, 30% at Army, and 20% at Navy programs. I specialize in bridging the gap between technical capabilities and business value while ensuring regulatory compliance.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4" data-id="work-experience-title" data-path="src/components/About.tsx">Professional Experience</h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-work-p1" data-path="src/components/About.tsx">
                  My experience includes leading technical software projects for high-profile organizations:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4" data-id="about-experience-list" data-path="src/components/About.tsx">
                  <li data-id="exp-li1" data-path="src/components/About.tsx">
                    <strong data-id="exp-strong1" data-path="src/components/About.tsx">Senior Technical Program Manager / Agile Transformation Lead</strong> at Datawiz for EPA (2024–2025): Led technical software projects for EPA's Salesforce enterprise platform, establishing Agile Center of Excellence serving 200+ professionals and improving delivery predictability by 40%.
                  </li>
                  <li data-id="exp-li2" data-path="src/components/About.tsx">
                    <strong data-id="exp-strong2" data-path="src/components/About.tsx">Technical Program Manager / Product Owner</strong> at LMI for U.S. Army (2023–2024): Managed software programs for Army identity and systems modernization, reducing requirement churn by 30%.
                  </li>
                  <li data-id="exp-li3" data-path="src/components/About.tsx">
                    <strong data-id="exp-strong3" data-path="src/components/About.tsx">Technical Program Manager / Product Owner</strong> at Peraton/Perspecta for Navy Programs (2020–2023): Led Tomahawk weapons-system modernization and Navy enterprise software initiatives, improving program delivery predictability by 20%.
                  </li>
                  <li data-id="exp-li4" data-path="src/components/About.tsx">
                    <strong data-id="exp-strong4" data-path="src/components/About.tsx">Staff Systems Engineer / Technical Program Lead</strong> at Dexcom (2018–2020): Led medical device software development in FDA-regulated environment, validating multiple databases ensuring compliance with ISO 13485/14971.
                  </li>
                  <li data-id="exp-li5" data-path="src/components/About.tsx">
                    <strong data-id="exp-strong5" data-path="src/components/About.tsx">Lead Technical Program Manager / DevOps Engineering</strong> at Sony Interactive Entertainment (2013–2017): Led PlayStation's global database platform supporting millions of concurrent users, reducing deployment cycles from days to hours through automation.
                  </li>
                </ul>
                
                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4" data-id="applications-title" data-path="src/components/About.tsx">Key Applications & Projects</h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-apps-p1" data-path="src/components/About.tsx">
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
                  <li data-id="app-li5" data-path="src/components/About.tsx">
                    <strong data-id="app-strong5" data-path="src/components/About.tsx">OncoSafeRx.com</strong>: AI-Enabled Drug Safety Platform (2023–Present) - End-to-end AI-assisted clinical decision tool leveraging RAG, vector search, and automated medical data enrichment
                  </li>
                </ul>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-work-p2" data-path="src/components/About.tsx">
                  My technical expertise spans full-stack development, AI/ML implementation, DevOps, cloud infrastructure (AWS/Azure), backend architecture, and mobile platforms. I'm passionate about building tools that empower niche communities with intelligent workflows, allowing people to focus on achieving their goals rather than wrestling with technology.
                </p>
                
                <p className="text-gray-700 mb-4 leading-relaxed" data-id="about-work-p3" data-path="src/components/About.tsx">
                  I approach each project with a lean methodology, focusing on rapid prototyping, continuous iteration, and measurable impact. My mission is to create solutions that not only meet technical requirements but also deliver real-world value to users while maintaining compliance with industry standards.
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