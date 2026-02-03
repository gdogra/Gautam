import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Brain, Shield, Activity, Globe, Building, ExternalLink } from "lucide-react";

const AppsPage = () => {
  const apps = [
    {
      title: "AI-Powered Compliance Tracker",
      icon: <Calendar className="h-8 w-8 text-purple-600" />,
      description: "Revolutionary platform transforming how accounting firms manage tax deadlines with predictive intelligence and automated compliance.",
      features: [
        "Predictive Risk Scoring",
        "Intelligent Document Processing", 
        "Smart Recommendations",
        "Anomaly Detection",
        "Conversational Assistant"
      ],
      technologies: ["Next.js", "TypeScript", "AI/ML", "Supabase", "OCR", "NLP", "React", "Tailwind CSS", "Node.js"],
      url: "https://compliance-deadline-tracker.netlify.app",
      github: "https://github.com/gdogra/compliance-deadline-tracker"
    },
    {
      title: "OncoSafeRx - AI-Enabled Drug Safety Platform",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      description: "End-to-end AI-assisted clinical decision tool leveraging RAG, vector search, and automated medical data enrichment for oncology research and precision medicine.",
      features: [
        "RAG Implementation",
        "Vector Search",
        "Automated Data Enrichment",
        "Clinical Decision Support"
      ],
      technologies: ["AI/ML", "RAG", "Vector Search", "Python", "PostgreSQL", "NLP", "Biomedical APIs", "Cloud Deployment"],
      url: "https://oncosaferx.com",
      github: "https://github.com/gdogra/oncosaferx"  // Updated with actual GitHub link
    },
    {
      title: "SiteBoss - Construction Management Platform",
      icon: <Activity className="h-8 w-8 text-green-600" />,
      description: "Comprehensive construction management application for project tracking, resource allocation, and progress monitoring.",
      features: [
        "Project Management",
        "Resource Allocation",
        "Progress Tracking",
        "Team Collaboration"
      ],
      technologies: ["React", "JavaScript", "Netlify", "Construction Management", "Project Planning"],
      url: "https://siteboss-construction-management.netlify.app/login",
      github: "https://github.com/gdogra/siteboss-construction-management"
    },
    {
      title: "Del Mar Golf Center",
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      description: "Modern golf course management website providing booking, membership, and course information services.",
      features: [
        "Online Booking System",
        "Membership Management",
        "Course Information",
        "Responsive Design"
      ],
      technologies: ["React", "JavaScript", "Netlify", "Golf Course Management", "Booking Systems"],
      url: "https://delmargolfcenter.netlify.app/",
      github: "https://github.com/gdogra/delmargolfcenter"
    },
    {
      title: "Tennis League Management",
      icon: <Building className="h-8 w-8 text-indigo-600" />,
      description: "Tennis league administration platform for scheduling, player management, and tournament coordination.",
      features: [
        "League Scheduling",
        "Player Management",
        "Tournament Coordination",
        "Match Results Tracking"
      ],
      technologies: ["React", "JavaScript", "Netlify", "Sports Management", "Tournament Systems"],
      url: "https://tennisleague2.netlify.app/",
      github: "https://github.com/gdogra/tennisleague"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12" data-id="projects-page" data-path="src/pages/AppsPage.tsx">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b mb-12" data-id="projects-header" data-path="src/pages/AppsPage.tsx">
          <div className="container mx-auto px-4 py-4" data-id="projects-header-container" data-path="src/pages/AppsPage.tsx">
            <div className="flex justify-between items-center" data-id="projects-header-content" data-path="src/pages/AppsPage.tsx">
              <div className="flex items-center space-x-2" data-id="projects-header-info" data-path="src/pages/AppsPage.tsx">
                <h1 className="text-2xl font-bold text-gray-900" data-id="projects-header-title" data-path="src/pages/AppsPage.tsx">Gautam Dogra</h1>
                <span className="text-sm text-gray-500" data-id="projects-header-subtitle" data-path="src/pages/AppsPage.tsx">Senior Technical Program Manager & AI Developer</span>
              </div>
              
              <nav className="hidden md:flex space-x-6" data-id="projects-nav" data-path="src/pages/AppsPage.tsx">
                <a href="/" className="text-gray-600 hover:text-gray-900" data-id="projects-nav-home" data-path="src/pages/AppsPage.tsx">Home</a>
                <a href="/about" className="text-gray-600 hover:text-gray-900" data-id="projects-nav-about" data-path="src/pages/AppsPage.tsx">About</a>
                <a href="/work" className="text-gray-600 hover:text-gray-900" data-id="projects-nav-work" data-path="src/pages/AppsPage.tsx">Work</a>
                <span className="text-gray-900 font-medium" data-id="projects-nav-current" data-path="src/pages/AppsPage.tsx">Projects</span>
                <a href="/skills" className="text-gray-600 hover:text-gray-900" data-id="projects-nav-skills" data-path="src/pages/AppsPage.tsx">Skills</a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900" data-id="projects-nav-contact" data-path="src/pages/AppsPage.tsx">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-16" data-id="projects-hero" data-path="src/pages/AppsPage.tsx">
          <h1 className="text-5xl font-bold text-gray-900 mb-6" data-id="projects-title" data-path="src/pages/AppsPage.tsx">
            Featured <span className="text-purple-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8" data-id="projects-description" data-path="src/pages/AppsPage.tsx">
            Diverse portfolio of applications demonstrating technical excellence across domains
          </p>
        </div>

        {/* Projects Grid - All 5 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="projects-grid" data-path="src/pages/AppsPage.tsx">
          {apps.map((app, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col cursor-pointer" data-id={`project-card-${index}`} data-path="src/pages/AppsPage.tsx">
              <CardHeader data-id={`project-header-${index}`} data-path="src/pages/AppsPage.tsx">
                <div className="flex items-center gap-3" data-id={`project-header-content-${index}`} data-path="src/pages/AppsPage.tsx">
                  <div className="p-2 bg-gray-100 rounded-lg" data-id={`project-icon-bg-${index}`} data-path="src/pages/AppsPage.tsx">
                    {app.icon}
                  </div>
                  <CardTitle className="text-xl" data-id={`project-title-${index}`} data-path="src/pages/AppsPage.tsx">
                    {app.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow" data-id={`project-content-${index}`} data-path="src/pages/AppsPage.tsx">
                <p className="text-gray-600 mb-4" data-id={`project-desc-${index}`} data-path="src/pages/AppsPage.tsx">
                  {app.description}
                </p>
                
                <div className="mb-4" data-id={`project-features-${index}`} data-path="src/pages/AppsPage.tsx">
                  <h3 className="font-semibold text-gray-800 mb-2" data-id={`features-title-${index}`} data-path="src/pages/AppsPage.tsx">Key Features:</h3>
                  <ul className="space-y-1" data-id={`features-list-${index}`} data-path="src/pages/AppsPage.tsx">
                    {app.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600" data-id={`feature-item-${index}-${featureIndex}`} data-path="src/pages/AppsPage.tsx">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" data-id={`feature-dot-${index}-${featureIndex}`} data-path="src/pages/AppsPage.tsx"></span>
                        <span data-id={`feature-text-${index}-${featureIndex}`} data-path="src/pages/AppsPage.tsx">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4" data-id={`project-tech-${index}`} data-path="src/pages/AppsPage.tsx">
                  <h3 className="font-semibold text-gray-800 mb-2" data-id={`tech-title-${index}`} data-path="src/pages/AppsPage.tsx">Technologies:</h3>
                  <div className="flex flex-wrap gap-2" data-id={`tech-tags-${index}`} data-path="src/pages/AppsPage.tsx">
                    {app.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs" data-id={`tech-badge-${index}-${techIndex}`} data-path="src/pages/AppsPage.tsx">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2" data-id={`project-actions-${index}`} data-path="src/pages/AppsPage.tsx">
                  <a href={app.url} target="_blank" rel="noopener noreferrer" data-id={`project-url-${index}`} data-path="src/pages/AppsPage.tsx">
                    <Button variant="outline" size="sm" disabled={app.url === "#"} data-id={`project-demo-btn-${index}`} data-path="src/pages/AppsPage.tsx">
                      Launch App
                      <ExternalLink className="ml-2 h-4 w-4" data-id={`demo-icon-${index}`} data-path="src/pages/AppsPage.tsx" />
                    </Button>
                  </a>
                  <a href={app.github} target="_blank" rel="noopener noreferrer" data-id={`project-github-${index}`} data-path="src/pages/AppsPage.tsx">
                    <Button size="sm" disabled={app.github === "#"} data-id={`project-github-btn-${index}`} data-path="src/pages/AppsPage.tsx">
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center" data-id="apps-footer" data-path="src/pages/AppsPage.tsx">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" data-id="apps-footer-title" data-path="src/pages/AppsPage.tsx">
            Diverse Technical Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-id="apps-footer-desc" data-path="src/pages/AppsPage.tsx">
            From AI-powered compliance tracking to construction management, golf center websites to tennis leagues, 
            each project showcases adaptability and technical depth across various domains and industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppsPage;