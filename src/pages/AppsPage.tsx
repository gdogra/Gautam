import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Brain, ExternalLink } from "lucide-react";

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
      github: "#"
    },
    {
      title: "EPA Salesforce Integration Platform",
      icon: <Building className="h-8 w-8 text-green-600" />,
      description: "Salesforce integration platform for EPA's Office of Chemical Safety and Pollution Prevention, delivering pollutants and pesticides regulatory systems under fixed political deadlines.",
      features: [
        "Agile Center of Excellence",
        "Proof-of-Concept Delivery",
        "Delivery Predictability Improvements",
        "Multi-team Coordination"
      ],
      technologies: ["Salesforce", "Integration Platforms", "Agile Methodologies", "Jira", "Confluence", "Cloud Platforms", "API Integration"],
      url: "#",
      github: "#"
    },
    {
      title: "Dexcom Medical Device Platform",
      icon: <Database className="h-8 w-8 text-orange-600" />,
      description: "Medical device software platform for continuous glucose monitoring in FDA-regulated environment, including database validation and compliance with ISO 13485/14971.",
      features: [
        "Regulatory Compliance (FDA/ISO)",
        "Database Validation",
        "Cross-functional Team Coordination",
        "Full SDLC Management"
      ],
      technologies: ["FDA 21 CFR Part 11", "ISO 13485/14971", "Backend Architecture", "Cloud Services", "Mobile Integration", "Database Systems"],
      url: "#",
      github: "#"
    },
    {
      title: "PlayStation Global Platform Services",
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      description: "Global database platform supporting millions of concurrent PlayStation users with strict uptime requirements, reducing deployment cycles from days to hours.",
      features: [
        "Zero-Downtime Releases",
        "High Availability Architecture",
        "Performance Optimization",
        "DevOps & CI/CD Pipelines"
      ],
      technologies: ["Backend Architecture", "Cloud Services", "Distributed Databases", "Microservices", "DevOps", "CI/CD", "Jenkins", "Git/GitHub"],
      url: "#",
      github: "#"
    },
    {
      title: "U.S. Army Identity Management Platform",
      icon: <Activity className="h-8 w-8 text-red-600" />,
      description: "Identity management platform architecture and integration solutions for U.S. Army within SAFe framework, reducing requirement churn by 30%.",
      features: [
        "SAFe Framework Implementation",
        "Requirements Management",
        "Security & Cybersecurity Integration",
        "Cross-functional Collaboration"
      ],
      technologies: ["SAFe", "Cybersecurity", "Identity Management", "Platform Architecture", "Integration Solutions", "Agile Methodologies"],
      url: "#",
      github: "#"
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
            Two key projects that demonstrate technical excellence and innovation
          </p>
        </div>

        {/* Projects Grid - Only the 2 specific projects that link to apps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="projects-grid" data-path="src/pages/AppsPage.tsx">
          <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col" data-id="project-card-1" data-path="src/pages/AppsPage.tsx">
            <CardHeader data-id="project-header-1" data-path="src/pages/AppsPage.tsx">
              <div className="flex items-center gap-3" data-id="project-header-content-1" data-path="src/pages/AppsPage.tsx">
                <div className="p-2 bg-gray-100 rounded-lg" data-id="project-icon-bg-1" data-path="src/pages/AppsPage.tsx">
                  <Calendar className="h-8 w-8 text-purple-600" data-id="project-icon-1" data-path="src/pages/AppsPage.tsx" />
                </div>
                <CardTitle className="text-2xl" data-id="project-title-1" data-path="src/pages/AppsPage.tsx">
                  AI-Powered Compliance Tracker
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow" data-id="project-content-1" data-path="src/pages/AppsPage.tsx">
              <p className="text-gray-600 mb-4" data-id="project-desc-1" data-path="src/pages/AppsPage.tsx">
                Revolutionary platform transforming how accounting firms manage tax deadlines with predictive intelligence and automated compliance.
              </p>
              
              <div className="mb-4" data-id="project-features-1" data-path="src/pages/AppsPage.tsx">
                <h3 className="font-semibold text-gray-800 mb-2" data-id="features-title-1" data-path="src/pages/AppsPage.tsx">Key Features:</h3>
                <ul className="space-y-1" data-id="features-list-1" data-path="src/pages/AppsPage.tsx">
                  <li key="1" className="flex items-start gap-2 text-sm text-gray-600" data-id="feature-item-1-1" data-path="src/pages/AppsPage.tsx">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" data-id="feature-dot-1-1" data-path="src/pages/AppsPage.tsx"></span>
                    <span data-id="feature-text-1-1" data-path="src/pages/AppsPage.tsx">Predictive Risk Scoring</span>
                  </li>
                  <li key="2" className="flex items-start gap-2 text-sm text-gray-600" data-id="feature-item-1-2" data-path="src/pages/AppsPage.tsx">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" data-id="feature-dot-1-2" data-path="src/pages/AppsPage.tsx"></span>
                    <span data-id="feature-text-1-2" data-path="src/pages/AppsPage.tsx">Intelligent Document Processing</span>
                  </li>
                  <li key="3" className="flex items-start gap-2 text-sm text-gray-600" data-id="feature-item-1-3" data-path="src/pages/AppsPage.tsx">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" data-id="feature-dot-1-3" data-path="src/pages/AppsPage.tsx"></span>
                    <span data-id="feature-text-1-3" data-path="src/pages/AppsPage.tsx">Smart Recommendations</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-4" data-id="project-tech-1" data-path="src/pages/AppsPage.tsx">
                <h3 className="font-semibold text-gray-800 mb-2" data-id="tech-title-1" data-path="src/pages/AppsPage.tsx">Technologies:</h3>
                <div className="flex flex-wrap gap-2" data-id="tech-tags-1" data-path="src/pages/AppsPage.tsx">
                  <Badge variant="outline" className="text-xs" data-id="tech-badge-1-1" data-path="src/pages/AppsPage.tsx">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs" data-id="tech-badge-1-2" data-path="src/pages/AppsPage.tsx">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs" data-id="tech-badge-1-3" data-path="src/pages/AppsPage.tsx">
                    AI/ML
                  </Badge>
                  <Badge variant="outline" className="text-xs" data-id="tech-badge-1-4" data-path="src/pages/AppsPage.tsx">
                    Supabase
                  </Badge>
                </div>
              </div>
              
              <div className="flex gap-2" data-id="project-actions-1" data-path="src/pages/AppsPage.tsx">
                <a href="https://compliance-deadline-tracker.netlify.app" target="_blank" rel="noopener noreferrer" data-id="project-url-1" data-path="src/pages/AppsPage.tsx">
                  <Button variant="outline" size="sm" data-id="project-demo-btn-1" data-path="src/pages/AppsPage.tsx">
                    Launch App
                    <ExternalLink className="ml-2 h-4 w-4" data-id="demo-icon-1" data-path="src/pages/AppsPage.tsx" />
                  </Button>
                </a>
                <a href="https://github.com/gdogra/compliance-deadline-tracker" target="_blank" rel="noopener noreferrer" data-id="project-github-1" data-path="src/pages/AppsPage.tsx">
                  <Button size="sm" data-id="project-github-btn-1" data-path="src/pages/AppsPage.tsx">
                    GitHub
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col" data-id="project-card-2" data-path="src/pages/AppsPage.tsx">
            <CardHeader data-id="project-header-2" data-path="src/pages/AppsPage.tsx">
              <div className="flex items-center gap-3" data-id="project-header-content-2" data-path="src/pages/AppsPage.tsx">
                <div className="p-2 bg-gray-100 rounded-lg" data-id="project-icon-bg-2" data-path="src/pages/AppsPage.tsx">
                  <Brain className="h-8 w-8 text-blue-600" data-id="project-icon-2" data-path="src/pages/AppsPage.tsx" />
                </div>
                <CardTitle className="text-2xl" data-id="project-title-2" data-path="src/pages/AppsPage.tsx">
                  OncoSafeRx - AI-Enabled Drug Safety Platform
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow" data-id="project-content-2" data-path="src/pages/AppsPage.tsx">
              <p className="text-gray-600 mb-4" data-id="project-desc-2" data-path="src/pages/AppsPage.tsx">
                End-to-end AI-assisted clinical decision tool leveraging RAG, vector search, and automated medical data enrichment for oncology research and precision medicine.
              </p>
              
              <div className="mb-4" data-id="project-features-2" data-path="src/pages/AppsPage.tsx">
                <h3 className="font-semibold text-gray-800 mb-2" data-id="features-title-2" data-path="src/pages/AppsPage.tsx">Key Features:</h3>
                <ul className="space-y-1" data-id="features-list-2" data-path="src/pages/AppsPage.tsx">
                  <li key="1" className="flex items-start gap-2 text-sm text-gray-600" data-id="feature-item-2-1" data-path="src/pages/AppsPage.tsx">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" data-id="feature-dot-2-1" data-path="src/pages/AppsPage.tsx"></span>
                    <span data-id="feature-text-2-1" data-path="src/pages/AppsPage.tsx">RAG Implementation</span>
                  </li>
                  <li key="2" className="flex items-start gap-2 text-sm text-gray-600" data-id="feature-item-2-2" data-path="src/pages/AppsPage.tsx">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" data-id="feature-dot-2-2" data-path="src/pages/AppsPage.tsx"></span>
                    <span data-id="feature-text-2-2" data-path="src/pages/AppsPage.tsx">Vector Search</span>
                  </li>
                  <li key="3" className="flex items-start gap-2 text-sm text-gray-600" data-id="feature-item-2-3" data-path="src/pages/AppsPage.tsx">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" data-id="feature-dot-2-3" data-path="src/pages/AppsPage.tsx"></span>
                    <span data-id="feature-text-2-3" data-path="src/pages/AppsPage.tsx">Automated Data Enrichment</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-4" data-id="project-tech-2" data-path="src/pages/AppsPage.tsx">
                <h3 className="font-semibold text-gray-800 mb-2" data-id="tech-title-2" data-path="src/pages/AppsPage.tsx">Technologies:</h3>
                <div className="flex flex-wrap gap-2" data-id="tech-tags-2" data-path="src/pages/AppsPage.tsx">
                  <Badge variant="outline" className="text-xs" data-id="tech-badge-2-1" data-path="src/pages/AppsPage.tsx">
                    AI/ML
                  </Badge>
                  <Badge variant="outline" className="text-xs" data-id="tech-badge-2-2" data-path="src/pages/AppsPage.tsx">
                    RAG
                  </Badge>
                  <Badge variant="outline" className="text-xs" data-id="tech-badge-2-3" data-path="src/pages/AppsPage.tsx">
                    Vector Search
                  </Badge>
                  <Badge variant="outline" className="text-xs" data-id="tech-badge-2-4" data-path="src/pages/AppsPage.tsx">
                    Python
                  </Badge>
                </div>
              </div>
              
              <div className="flex gap-2" data-id="project-actions-2" data-path="src/pages/AppsPage.tsx">
                <a href="https://oncosaferx.com" target="_blank" rel="noopener noreferrer" data-id="project-url-2" data-path="src/pages/AppsPage.tsx">
                  <Button variant="outline" size="sm" data-id="project-demo-btn-2" data-path="src/pages/AppsPage.tsx">
                    Launch App
                    <ExternalLink className="ml-2 h-4 w-4" data-id="demo-icon-2" data-path="src/pages/AppsPage.tsx" />
                  </Button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" data-id="project-github-2" data-path="src/pages/AppsPage.tsx">
                  <Button size="sm" disabled data-id="project-github-btn-2" data-path="src/pages/AppsPage.tsx">
                    GitHub
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center" data-id="apps-footer" data-path="src/pages/AppsPage.tsx">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" data-id="apps-footer-title" data-path="src/pages/AppsPage.tsx">
            Proven Track Record
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-id="apps-footer-desc" data-path="src/pages/AppsPage.tsx">
            Each project demonstrates measurable impact: 40% improvement at EPA, 30% at Army, 20% at Navy, 
            and zero-downtime releases at Sony PlayStation. My expertise spans technical program management, 
            AI development, and complex system integration across regulated environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppsPage;