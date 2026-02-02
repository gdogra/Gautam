import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Brain, Shield, Activity, ExternalLink } from "lucide-react";

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
      technologies: ["Next.js", "TypeScript", "AI/ML", "Supabase", "OCR", "NLP"],
      url: "https://compliance-deadline-tracker.vercel.app",
      github: "https://github.com/gdogra/compliance-deadline-tracker"
    },
    {
      title: "OncoSafeRx",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      description: "AI-powered platform for oncology research and precision medicine, connecting cancer mutations with drug therapies and clinical evidence.",
      features: [
        "Evidence Mapping Engine",
        "Knowledge Graph Integration",
        "Treatment Pathway Analysis",
        "Clinical Trial Matching"
      ],
      technologies: ["React", "Python", "AI/ML", "GraphQL", "NLP", "Biomedical APIs"],
      url: "#",
      github: "#"
    },
    {
      title: "SiteBoss",
      icon: <Activity className="h-8 w-8 text-green-600" />,
      description: "AI-powered website optimization platform that automatically improves conversion rates and user experience through intelligent testing and personalization.",
      features: [
        "A/B Testing Automation",
        "Performance Optimization",
        "Conversion Rate Intelligence",
        "User Behavior Analytics"
      ],
      technologies: ["Next.js", "TypeScript", "AI/ML", "Analytics", "SEO", "Performance Monitoring"],
      url: "#",
      github: "#"
    },
    {
      title: "CalmIntake",
      icon: <Brain className="h-8 w-8 text-orange-600" />,
      description: "Mental health intake platform with AI-powered screening tools and personalized care pathway recommendations.",
      features: [
        "Automated Screening",
        "Care Pathway Recommendations",
        "Patient Journey Tracking",
        "Clinical Decision Support"
      ],
      technologies: ["React", "Node.js", "AI/ML", "HIPAA Compliance", "Secure Forms", "Telehealth APIs"],
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
            My <span className="text-purple-600">Applications</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8" data-id="apps-description" data-path="src/pages/AppsPage.tsx">
            A collection of innovative applications designed to solve complex problems across various domains using AI and modern technology.
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
            Continuous Innovation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-id="apps-footer-desc" data-path="src/pages/AppsPage.tsx">
            Each application represents a solution to real-world challenges, combining cutting-edge technology with practical usability. 
            I continuously iterate and improve these platforms to deliver maximum value to users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppsPage;