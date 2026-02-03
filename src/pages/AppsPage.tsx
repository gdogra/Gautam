import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Brain, Shield, Sparkles, ExternalLink } from "lucide-react";

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
      url: "https://compliancetracker.netlify.app",
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
      title: "SiteBoss - AI Website Optimization",
      icon: <Sparkles className="h-8 w-8 text-green-600" />,
      description: "AI-powered website optimization platform for conversion rate improvement, helping businesses maximize their online presence.",
      features: [
        "AI-Powered Analysis",
        "Conversion Rate Optimization",
        "Performance Insights",
        "Automated Recommendations"
      ],
      technologies: ["AI/ML", "React", "Node.js", "Analytics", "Cloud Deployment"],
      url: "#",
      github: "#"
    },
    {
      title: "CalmIntake - Mental Health Platform",
      icon: <Brain className="h-8 w-8 text-teal-600" />,
      description: "Mental health platform with AI-powered screening and care recommendations, helping connect individuals with appropriate mental health resources.",
      features: [
        "AI-Powered Screening",
        "Care Recommendations",
        "Resource Matching",
        "Privacy-First Design"
      ],
      technologies: ["AI/ML", "React", "Node.js", "Healthcare APIs", "Cloud Deployment"],
      url: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12" data-id="apps-page" data-path="src/pages/AppsPage.tsx">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16" data-id="apps-hero" data-path="src/pages/AppsPage.tsx">
          <h1 className="text-5xl font-bold text-gray-900 mb-6" data-id="apps-title" data-path="src/pages/AppsPage.tsx">
            My <span className="text-purple-600">Apps</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8" data-id="apps-description" data-path="src/pages/AppsPage.tsx">
            A collection of applications I've built, leveraging AI/ML, modern web technologies, and cloud platforms to solve real-world problems.
          </p>
        </div>

        {/* Apps Grid */}
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
            Built with Modern Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-id="apps-footer-desc" data-path="src/pages/AppsPage.tsx">
            These applications demonstrate my passion for building tools that empower users with intelligent workflows.
            Each project combines AI/ML capabilities with modern web technologies to deliver practical solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppsPage;