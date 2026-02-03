import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-white py-12" data-id="work-page" data-path="src/pages/WorkPage.tsx">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b mb-12" data-id="work-header" data-path="src/pages/WorkPage.tsx">
          <div className="container mx-auto px-4 py-4" data-id="work-header-container" data-path="src/pages/WorkPage.tsx">
            <div className="flex justify-between items-center" data-id="work-header-content" data-path="src/pages/WorkPage.tsx">
              <div className="flex items-center space-x-2" data-id="work-header-info" data-path="src/pages/WorkPage.tsx">
                <h1 className="text-2xl font-bold text-gray-900" data-id="work-header-title" data-path="src/pages/WorkPage.tsx">Gautam Dogra</h1>
                <span className="text-sm text-gray-500" data-id="work-header-subtitle" data-path="src/pages/WorkPage.tsx">Senior Technical Program Manager & AI Developer</span>
              </div>
              
              <nav className="hidden md:flex space-x-6" data-id="work-nav" data-path="src/pages/WorkPage.tsx">
                <a href="/" className="text-gray-600 hover:text-gray-900" data-id="work-nav-home" data-path="src/pages/WorkPage.tsx">Home</a>
                <a href="/about" className="text-gray-600 hover:text-gray-900" data-id="work-nav-about" data-path="src/pages/WorkPage.tsx">About</a>
                <span className="text-gray-900 font-medium" data-id="work-nav-current" data-path="src/pages/WorkPage.tsx">Work</span>
                <a href="/projects" className="text-gray-600 hover:text-gray-900" data-id="work-nav-projects" data-path="src/pages/WorkPage.tsx">Projects</a>
                <a href="/skills" className="text-gray-600 hover:text-gray-900" data-id="work-nav-skills" data-path="src/pages/WorkPage.tsx">Skills</a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900" data-id="work-nav-contact" data-path="src/pages/WorkPage.tsx">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <div className="text-center mb-16" data-id="work-header-section" data-path="src/pages/WorkPage.tsx">
          <h1 className="text-5xl font-bold text-gray-900 mb-6" data-id="work-title" data-path="src/pages/WorkPage.tsx">
            Professional <span className="text-purple-600">Experience</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="work-subtitle" data-path="src/pages/WorkPage.tsx">
            15+ years of experience in technical program management across regulated environments
          </p>
        </div>

        <div className="space-y-8" data-id="professional-exp" data-path="src/pages/WorkPage.tsx">
          <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-1" data-path="src/pages/WorkPage.tsx">
            <CardHeader>
              <CardTitle className="text-xl" data-id="exp-card-title-1" data-path="src/pages/WorkPage.tsx">
                Senior Technical Program Manager / Agile Transformation Lead - Datawiz for EPA (2024–2025)
              </CardTitle>
            </CardHeader>
            <CardContent data-id="exp-card-content-1" data-path="src/pages/WorkPage.tsx">
              <p className="text-gray-600 mb-4" data-id="exp-desc-1" data-path="src/pages/WorkPage.tsx">
                Led technical software projects for EPA's Salesforce enterprise platform, establishing Agile Center of Excellence serving 200+ professionals and improving delivery predictability by 40%.
              </p>
              <div className="flex flex-wrap gap-2" data-id="exp-tech-1" data-path="src/pages/WorkPage.tsx">
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-1" data-path="src/pages/WorkPage.tsx">Salesforce</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-2" data-path="src/pages/WorkPage.tsx">Agile Methodologies</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-3" data-path="src/pages/WorkPage.tsx">Jira</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-4" data-path="src/pages/WorkPage.tsx">Confluence</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-5" data-path="src/pages/WorkPage.tsx">Cloud Platforms</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-6" data-path="src/pages/WorkPage.tsx">API Integration</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-2" data-path="src/pages/WorkPage.tsx">
            <CardHeader>
              <CardTitle className="text-xl" data-id="exp-card-title-2" data-path="src/pages/WorkPage.tsx">
                Technical Program Manager / Product Owner - LMI for U.S. Army (2023–2024)
              </CardTitle>
            </CardHeader>
            <CardContent data-id="exp-card-content-2" data-path="src/pages/WorkPage.tsx">
              <p className="text-gray-600 mb-4" data-id="exp-desc-2" data-path="src/pages/WorkPage.tsx">
                Managed software programs for Army identity and systems modernization, reducing requirement churn by 30% through effective SAFe framework implementation and cross-functional collaboration.
              </p>
              <div className="flex flex-wrap gap-2" data-id="exp-tech-2" data-path="src/pages/WorkPage.tsx">
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-1" data-path="src/pages/WorkPage.tsx">SAFe</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-2" data-path="src/pages/WorkPage.tsx">Cybersecurity</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-3" data-path="src/pages/WorkPage.tsx">Identity Management</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-4" data-path="src/pages/WorkPage.tsx">Platform Architecture</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-5" data-path="src/pages/WorkPage.tsx">Integration Solutions</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-6" data-path="src/pages/WorkPage.tsx">Agile Methodologies</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-3" data-path="src/pages/WorkPage.tsx">
            <CardHeader>
              <CardTitle className="text-xl" data-id="exp-card-title-3" data-path="src/pages/WorkPage.tsx">
                Technical Program Manager / Product Owner - Peraton/Perspecta for Navy Programs (2020–2023)
              </CardTitle>
            </CardHeader>
            <CardContent data-id="exp-card-content-3" data-path="src/pages/WorkPage.tsx">
              <p className="text-gray-600 mb-4" data-id="exp-desc-3" data-path="src/pages/WorkPage.tsx">
                Led Tomahawk weapons-system modernization and Navy enterprise software initiatives, improving program delivery predictability by 20%.
              </p>
              <div className="flex flex-wrap gap-2" data-id="exp-tech-3" data-path="src/pages/WorkPage.tsx">
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-1" data-path="src/pages/WorkPage.tsx">Technical Program Management</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-2" data-path="src/pages/WorkPage.tsx">SDLC</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-3" data-path="src/pages/WorkPage.tsx">Regulated Environment Leadership</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-4" data-path="src/pages/WorkPage.tsx">Change Control</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-5" data-path="src/pages/WorkPage.tsx">Design Controls</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-6" data-path="src/pages/WorkPage.tsx">Cross-Functional Team Coordination</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-4" data-path="src/pages/WorkPage.tsx">
            <CardHeader>
              <CardTitle className="text-xl" data-id="exp-card-title-4" data-path="src/pages/WorkPage.tsx">
                Staff Systems Engineer / Technical Program Lead - Dexcom (2018–2020)
              </CardTitle>
            </CardHeader>
            <CardContent data-id="exp-card-content-4" data-path="src/pages/WorkPage.tsx">
              <p className="text-gray-600 mb-4" data-id="exp-desc-4" data-path="src/pages/WorkPage.tsx">
                Led medical device software development in FDA-regulated environment, validating multiple databases ensuring compliance with ISO 13485/14971.
              </p>
              <div className="flex flex-wrap gap-2" data-id="exp-tech-4" data-path="src/pages/WorkPage.tsx">
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-1" data-path="src/pages/WorkPage.tsx">FDA 21 CFR Part 11</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-2" data-path="src/pages/WorkPage.tsx">ISO 13485/14971</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-3" data-path="src/pages/WorkPage.tsx">Backend Architecture</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-4" data-path="src/pages/WorkPage.tsx">Cloud Services</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-5" data-path="src/pages/WorkPage.tsx">Mobile Integration</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-6" data-path="src/pages/WorkPage.tsx">Database Systems</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-5" data-path="src/pages/WorkPage.tsx">
            <CardHeader>
              <CardTitle className="text-xl" data-id="exp-card-title-5" data-path="src/pages/WorkPage.tsx">
                Lead Technical Program Manager / DevOps Engineering - Sony Interactive Entertainment (2013–2017)
              </CardTitle>
            </CardHeader>
            <CardContent data-id="exp-card-content-5" data-path="src/pages/WorkPage.tsx">
              <p className="text-gray-600 mb-4" data-id="exp-desc-5" data-path="src/pages/WorkPage.tsx">
                Led PlayStation's global database platform supporting millions of concurrent users, reducing deployment cycles from days to hours through automation.
              </p>
              <div className="flex flex-wrap gap-2" data-id="exp-tech-5" data-path="src/pages/WorkPage.tsx">
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-1" data-path="src/pages/WorkPage.tsx">Backend Architecture</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-2" data-path="src/pages/WorkPage.tsx">Cloud Services</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-3" data-path="src/pages/WorkPage.tsx">Distributed Databases</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-4" data-path="src/pages/WorkPage.tsx">Microservices</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-5" data-path="src/pages/WorkPage.tsx">DevOps</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-6" data-path="src/pages/WorkPage.tsx">CI/CD</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;