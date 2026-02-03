import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Brain, Shield, Activity, ExternalLink, Database, Globe, Building } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50 py-12" data-id="apps-page" data-path="src/pages/AppsPage.tsx">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b mb-12" data-id="apps-header" data-path="src/pages/AppsPage.tsx">
          <div className="container mx-auto px-4 py-4" data-id="apps-header-container" data-path="src/pages/AppsPage.tsx">
            <div className="flex justify-between items-center" data-id="apps-header-content" data-path="src/pages/AppsPage.tsx">
              <div className="flex items-center space-x-2" data-id="apps-header-info" data-path="src/pages/AppsPage.tsx">
                <h1 className="text-2xl font-bold text-gray-900" data-id="apps-header-title" data-path="src/pages/AppsPage.tsx">Gautam Dogra</h1>
                <span className="text-sm text-gray-500" data-id="apps-header-subtitle" data-path="src/pages/AppsPage.tsx">Senior Technical Program Manager & AI Developer</span>
              </div>
              
              <nav className="hidden md:flex space-x-6" data-id="apps-nav" data-path="src/pages/AppsPage.tsx">
                <a href="/" className="text-gray-600 hover:text-gray-900" data-id="apps-nav-home" data-path="src/pages/AppsPage.tsx">Home</a>
                <a href="/#about" className="text-gray-600 hover:text-gray-900" data-id="apps-nav-about" data-path="src/pages/AppsPage.tsx">About</a>
                <a href="/#work" className="text-gray-600 hover:text-gray-900" data-id="apps-nav-work" data-path="src/pages/AppsPage.tsx">Work</a>
                <span className="text-gray-900 font-medium" data-id="apps-nav-current" data-path="src/pages/AppsPage.tsx">Apps</span>
                <a href="/#skills" className="text-gray-600 hover:text-gray-900" data-id="apps-nav-skills" data-path="src/pages/AppsPage.tsx">Skills</a>
                <a href="/#contact" className="text-gray-600 hover:text-gray-900" data-id="apps-nav-contact" data-path="src/pages/AppsPage.tsx">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-16" data-id="apps-hero" data-path="src/pages/AppsPage.tsx">
          <h1 className="text-5xl font-bold text-gray-900 mb-6" data-id="apps-title" data-path="src/pages/AppsPage.tsx">
            Professional <span className="text-purple-600">Experience</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8" data-id="apps-description" data-path="src/pages/AppsPage.tsx">
            15+ years of experience in technical program management across regulated environments
          </p>
        </div>

        {/* Professional Experience Section */}
        <div className="mb-16" data-id="professional-exp" data-path="src/pages/AppsPage.tsx">
          <div className="space-y-8" data-id="exp-list" data-path="src/pages/AppsPage.tsx">
            <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-1" data-path="src/pages/AppsPage.tsx">
              <CardHeader>
                <CardTitle className="text-xl" data-id="exp-card-title-1" data-path="src/pages/AppsPage.tsx">
                  Senior Technical Program Manager / Agile Transformation Lead - Datawiz for EPA (2024–2025)
                </CardTitle>
              </CardHeader>
              <CardContent data-id="exp-card-content-1" data-path="src/pages/AppsPage.tsx">
                <p className="text-gray-600 mb-4" data-id="exp-desc-1" data-path="src/pages/AppsPage.tsx">
                  Led technical software projects for EPA's Salesforce enterprise platform, establishing Agile Center of Excellence serving 200+ professionals and improving delivery predictability by 40%.
                </p>
                <div className="flex flex-wrap gap-2" data-id="exp-tech-1" data-path="src/pages/AppsPage.tsx">
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-1" data-path="src/pages/AppsPage.tsx">Salesforce</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-2" data-path="src/pages/AppsPage.tsx">Agile Methodologies</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-3" data-path="src/pages/AppsPage.tsx">Jira</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-4" data-path="src/pages/AppsPage.tsx">Confluence</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-5" data-path="src/pages/AppsPage.tsx">Cloud Platforms</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-6" data-path="src/pages/AppsPage.tsx">API Integration</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-2" data-path="src/pages/AppsPage.tsx">
              <CardHeader>
                <CardTitle className="text-xl" data-id="exp-card-title-2" data-path="src/pages/AppsPage.tsx">
                  Technical Program Manager / Product Owner - LMI for U.S. Army (2023–2024)
                </CardTitle>
              </CardHeader>
              <CardContent data-id="exp-card-content-2" data-path="src/pages/AppsPage.tsx">
                <p className="text-gray-600 mb-4" data-id="exp-desc-2" data-path="src/pages/AppsPage.tsx">
                  Managed software programs for Army identity and systems modernization, reducing requirement churn by 30% through effective SAFe framework implementation and cross-functional collaboration.
                </p>
                <div className="flex flex-wrap gap-2" data-id="exp-tech-2" data-path="src/pages/AppsPage.tsx">
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-1" data-path="src/pages/AppsPage.tsx">SAFe</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-2" data-path="src/pages/AppsPage.tsx">Cybersecurity</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-3" data-path="src/pages/AppsPage.tsx">Identity Management</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-4" data-path="src/pages/AppsPage.tsx">Platform Architecture</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-5" data-path="src/pages/AppsPage.tsx">Integration Solutions</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-6" data-path="src/pages/AppsPage.tsx">Agile Methodologies</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-3" data-path="src/pages/AppsPage.tsx">
              <CardHeader>
                <CardTitle className="text-xl" data-id="exp-card-title-3" data-path="src/pages/AppsPage.tsx">
                  Technical Program Manager / Product Owner - Peraton/Perspecta for Navy Programs (2020–2023)
                </CardTitle>
              </CardHeader>
              <CardContent data-id="exp-card-content-3" data-path="src/pages/AppsPage.tsx">
                <p className="text-gray-600 mb-4" data-id="exp-desc-3" data-path="src/pages/AppsPage.tsx">
                  Led Tomahawk weapons-system modernization and Navy enterprise software initiatives, improving program delivery predictability by 20%.
                </p>
                <div className="flex flex-wrap gap-2" data-id="exp-tech-3" data-path="src/pages/AppsPage.tsx">
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-1" data-path="src/pages/AppsPage.tsx">Technical Program Management</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-2" data-path="src/pages/AppsPage.tsx">SDLC</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-3" data-path="src/pages/AppsPage.tsx">Regulated Environment Leadership</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-4" data-path="src/pages/AppsPage.tsx">Change Control</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-5" data-path="src/pages/AppsPage.tsx">Design Controls</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-6" data-path="src/pages/AppsPage.tsx">Cross-Functional Team Coordination</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-4" data-path="src/pages/AppsPage.tsx">
              <CardHeader>
                <CardTitle className="text-xl" data-id="exp-card-title-4" data-path="src/pages/AppsPage.tsx">
                  Staff Systems Engineer / Technical Program Lead - Dexcom (2018–2020)
                </CardTitle>
              </CardHeader>
              <CardContent data-id="exp-card-content-4" data-path="src/pages/AppsPage.tsx">
                <p className="text-gray-600 mb-4" data-id="exp-desc-4" data-path="src/pages/AppsPage.tsx">
                  Led medical device software development in FDA-regulated environment, validating multiple databases ensuring compliance with ISO 13485/14971.
                </p>
                <div className="flex flex-wrap gap-2" data-id="exp-tech-4" data-path="src/pages/AppsPage.tsx">
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-1" data-path="src/pages/AppsPage.tsx">FDA 21 CFR Part 11</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-2" data-path="src/pages/AppsPage.tsx">ISO 13485/14971</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-3" data-path="src/pages/AppsPage.tsx">Backend Architecture</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-4" data-path="src/pages/AppsPage.tsx">Cloud Services</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-5" data-path="src/pages/AppsPage.tsx">Mobile Integration</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-6" data-path="src/pages/AppsPage.tsx">Database Systems</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-5" data-path="src/pages/AppsPage.tsx">
              <CardHeader>
                <CardTitle className="text-xl" data-id="exp-card-title-5" data-path="src/pages/AppsPage.tsx">
                  Lead Technical Program Manager / DevOps Engineering - Sony Interactive Entertainment (2013–2017)
                </CardTitle>
              </CardHeader>
              <CardContent data-id="exp-card-content-5" data-path="src/pages/AppsPage.tsx">
                <p className="text-gray-600 mb-4" data-id="exp-desc-5" data-path="src/pages/AppsPage.tsx">
                  Led PlayStation's global database platform supporting millions of concurrent users, reducing deployment cycles from days to hours through automation.
                </p>
                <div className="flex flex-wrap gap-2" data-id="exp-tech-5" data-path="src/pages/AppsPage.tsx">
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-1" data-path="src/pages/AppsPage.tsx">Backend Architecture</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-2" data-path="src/pages/AppsPage.tsx">Cloud Services</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-3" data-path="src/pages/AppsPage.tsx">Distributed Databases</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-4" data-path="src/pages/AppsPage.tsx">Microservices</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-5" data-path="src/pages/AppsPage.tsx">DevOps</Badge>
                  <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-6" data-path="src/pages/AppsPage.tsx">CI/CD</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="text-center mb-16" data-id="apps-grid-header" data-path="src/pages/AppsPage.tsx">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-id="apps-grid-title" data-path="src/pages/AppsPage.tsx">Selected Recent Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="apps-grid-subtitle" data-path="src/pages/AppsPage.tsx">
            Key projects demonstrating technical excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="apps-grid" data-path="src/pages/AppsPage.tsx">
          {apps.map((app, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col" data-id={`app-card-${index}`} data-path="src/pages/AppsPage.tsx">
              <CardHeader data-id={`app-header-${index}`} data-path="src/pages/AppsPage.tsx">
                <div className="flex items-center gap-3" data-id={`app-header-content-${index}`} data-path="src/pages/AppsPage.tsx">
                  <div className="p-2 bg-gray-100 rounded-lg" data-id={`app-icon-bg-${index}`} data-path="src/pages/AppsPage.tsx">
                    {app.icon}
                  </div>
                  <CardTitle className="text-2xl" data-id={`app-title-${index}`} data-path="src/pages/AppsPage.tsx">
                    {app.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow" data-id={`app-content-${index}`} data-path="src/pages/AppsPage.tsx">
                <p className="text-gray-600 mb-4" data-id={`app-desc-${index}`} data-path="src/pages/AppsPage.tsx">
                  {app.description}
                </p>
                
                <div className="mb-4" data-id={`app-features-${index}`} data-path="src/pages/AppsPage.tsx">
                  <h3 className="font-semibold text-gray-800 mb-2" data-id={`features-title-${index}`} data-path="src/pages/AppsPage.tsx">Key Features:</h3>
                  <ul className="space-y-1" data-id={`features-list-${index}`} data-path="src/pages/AppsPage.tsx">
                    {app.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600" data-id={`feature-item-${index}-${featureIndex}`} data-path="src/pages/AppsPage.tsx">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" data-id={`feature-dot-${index}-${featureIndex}`} data-path="src/pages/AppsPage.tsx"></span>
                        <span data-id={`feature-text-${index}-${featureIndex}`} data-path="src/pages/AppsPage.tsx">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4" data-id={`app-tech-${index}`} data-path="src/pages/AppsPage.tsx">
                  <h3 className="font-semibold text-gray-800 mb-2" data-id={`tech-title-${index}`} data-path="src/pages/AppsPage.tsx">Technologies:</h3>
                  <div className="flex flex-wrap gap-2" data-id={`tech-tags-${index}`} data-path="src/pages/AppsPage.tsx">
                    {app.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs" data-id={`tech-badge-${index}-${techIndex}`} data-path="src/pages/AppsPage.tsx">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2" data-id={`app-actions-${index}`} data-path="src/pages/AppsPage.tsx">
                  <a href={app.url} target="_blank" rel="noopener noreferrer" data-id={`app-url-${index}`} data-path="src/pages/AppsPage.tsx">
                    <Button variant="outline" size="sm" disabled={app.url === "#"} data-id={`app-demo-btn-${index}`} data-path="src/pages/AppsPage.tsx">
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" data-id={`demo-icon-${index}`} data-path="src/pages/AppsPage.tsx" />
                    </Button>
                  </a>
                  <a href={app.github} target="_blank" rel="noopener noreferrer" data-id={`app-github-${index}`} data-path="src/pages/AppsPage.tsx">
                    <Button size="sm" disabled={app.github === "#"} data-id={`app-github-btn-${index}`} data-path="src/pages/AppsPage.tsx">
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