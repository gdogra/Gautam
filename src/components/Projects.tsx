import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Calendar, Target } from "lucide-react";

const Projects = () => {
  const projects = [
  {
    title: "AI-Powered Compliance Tracker",
    year: "2026",
    url: "compliance-deadline-tracker.vercel.app",
    icon: <Brain className="h-6 w-6 text-purple-600" data-id="o13n2tf4t" data-path="src/components/Projects.tsx" />,
    description: "Revolutionary platform transforming how accounting firms manage tax deadlines with predictive intelligence and automated compliance.",
    features: [
    "Predictive Risk Scoring: AI algorithms analyze historical data and client patterns to predict which deadlines are most likely to be missed, allowing for proactive intervention.",
    "Intelligent Document Processing: OCR and NLP technology automatically extract compliance-relevant information from tax documents, reducing manual data entry by up to 90%.",
    "Smart Recommendations: Context-aware AI suggests optimal filing strategies, extensions, and compliance pathways based on client entity types and circumstances.",
    "Anomaly Detection: Advanced algorithms identify unusual patterns in client compliance behavior that might indicate business changes requiring attention.",
    "Conversational Assistant: Natural language interface for instant compliance guidance, penalty calculations, and filing requirement information."],

    technologies: ["Next.js", "TypeScript", "Supabase", "AI/ML", "OCR", "NLP", "React", "Tailwind CSS", "Node.js"]
  },
  {
    title: "OncoSafeRx Evidence Explorer",
    year: "2025",
    url: "oncosafedxplorer.com",
    icon: <Brain className="h-6 w-6 text-red-600" data-id="o13n2tf4t" data-path="src/components/Projects.tsx" />,
    description: "AI-powered platform for oncology research and precision medicine, connecting cancer mutations with drug therapies and clinical evidence.",
    features: [
    "Evidence Mapping Engine: AI algorithms map cancer mutations to targeted therapies with confidence scores and clinical trial matches.",
    "Knowledge Graph Integration: Connects genomic data with real-world evidence, drug interactions, and patient outcomes."],

    technologies: ["React", "Python", "AI/ML", "Knowledge Graphs", "GraphQL", "PostgreSQL", "NLP", "Biomedical APIs"]
  },
  {
    title: "SiteBoss",
    year: "2024",
    url: "siteboss.com",
    icon: <Code className="h-6 w-6 text-green-600" data-id="3egmzndj2" data-path="src/components/Projects.tsx" />,
    description: "AI-powered website optimization platform that automatically improves conversion rates and user experience through intelligent testing and personalization.",
    features: [
    "A/B Testing Automation: ML algorithms determine optimal experiences for different user segments in real-time.",
    "Performance Optimization: AI-driven recommendations for site speed, accessibility, and SEO improvements."],

    technologies: ["Next.js", "TypeScript", "AI/ML", "A/B Testing", "Analytics", "SEO", "Performance Monitoring", "Node.js"]
  }];


  return (
    <section id="work" className="py-20 bg-white" data-id="3p0k9j9s4" data-path="src/components/Projects.tsx">
      <div className="container mx-auto px-4" data-id="th6zr45dn" data-path="src/components/Projects.tsx">
        <div className="text-center mb-16" data-id="rk04g1z06" data-path="src/components/Projects.tsx">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="5sl9qzesc" data-path="src/components/Projects.tsx">Selected Recent Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="zo1gxqnyv" data-path="src/components/Projects.tsx">
            Transforming ideas into impactful, community-driven applications
          </p>
        </div>

        <div className="space-y-12" data-id="kdfxqwsaa" data-path="src/components/Projects.tsx">
          {projects.map((project, index) =>
          <Card key={index} className="hover:shadow-xl transition-shadow duration-300" data-id="a9233b2xo" data-path="src/components/Projects.tsx">
              <CardHeader data-id="amh870qv9" data-path="src/components/Projects.tsx">
                <div className="flex items-start justify-between" data-id="ywfydhznj" data-path="src/components/Projects.tsx">
                  <div className="flex items-center gap-3" data-id="jc875330t" data-path="src/components/Projects.tsx">
                    {project.icon}
                    <div data-id="3b45e6mps" data-path="src/components/Projects.tsx">
                      <CardTitle className="text-2xl flex items-center gap-2" data-id="31f1ncaty" data-path="src/components/Projects.tsx">
                        {index + 1} · {project.title}
                        <span className="text-sm text-gray-500 font-normal" data-id="319uch0j3" data-path="src/components/Projects.tsx">({project.year})</span>
                      </CardTitle>
                      <Button variant="link" className="p-0 h-auto text-blue-600" asChild data-id="7maektk4t" data-path="src/components/Projects.tsx">
                        <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" data-id="upccpfw43" data-path="src/components/Projects.tsx">
                          {project.url}
                          <ExternalLink className="ml-1 h-3 w-3" data-id="1cflz5fy0" data-path="src/components/Projects.tsx" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6" data-id="x36iml0ka" data-path="src/components/Projects.tsx">
                <p className="text-gray-700 text-lg leading-relaxed" data-id="ngpq72pcu" data-path="src/components/Projects.tsx">
                  {project.description}
                </p>
                
                <div className="space-y-3" data-id="l8hb8fi6k" data-path="src/components/Projects.tsx">
                  {project.features.map((feature, featureIndex) =>
                <div key={featureIndex} className="flex items-start gap-2" data-id="qnun5g44d" data-path="src/components/Projects.tsx">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" data-id="40mnnfrwp" data-path="src/components/Projects.tsx"></div>
                      <p className="text-gray-600 leading-relaxed" data-id="o6ekaxfec" data-path="src/components/Projects.tsx">{feature}</p>
                    </div>
                )}
                </div>



                <div className="flex flex-wrap gap-2" data-id="frjud0hk6" data-path="src/components/Projects.tsx">
                  {project.technologies.map((tech, techIndex) =>
                <Badge key={techIndex} variant="secondary" className="text-xs" data-id="fhunrpg7u" data-path="src/components/Projects.tsx">
                      {tech}
                    </Badge>
                )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>);

};

export default Projects;