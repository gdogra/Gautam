import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Target } from "lucide-react";

const Projects = () => {
  const projects = [
  {
    title: "AI-Powered Compliance Tracker",
    year: "2026",
    url: "compliance-deadline-tracker.netlify.app",
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
    title: "OncoSafeRx - AI-Enabled Drug Safety Platform",
    year: "2023-Present",
    url: "oncosaferx.com",
    icon: <Brain className="h-6 w-6 text-red-600" data-id="o13n2tf4t" data-path="src/components/Projects.tsx" />,
    description: "End-to-end AI-assisted clinical decision tool leveraging RAG, vector search, and automated medical data enrichment for oncology research and precision medicine.",
    features: [
    "RAG Implementation: Retrieval-Augmented Generation for contextual medical information retrieval.",
    "Vector Search: Advanced similarity search for matching patient profiles with treatment options.",
    "Automated Data Enrichment: AI algorithms process and enrich medical datasets for enhanced decision support."],

    technologies: ["AI/ML", "RAG", "Vector Search", "Python", "PostgreSQL", "NLP", "Biomedical APIs", "Cloud Deployment"]
  }];


  return (
    <section id="work" className="py-20 bg-white" data-id="3p0k9j9s4" data-path="src/components/Projects.tsx">
      <div className="container mx-auto px-4" data-id="th6zr45dn" data-path="src/components/Projects.tsx">
        <div className="text-center mb-16" data-id="rk04g1z06" data-path="src/components/Projects.tsx">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="5sl9qzesc" data-path="src/components/Projects.tsx">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="zo1gxqnyv" data-path="src/components/Projects.tsx">
            15+ years of experience in technical program management across regulated environments
          </p>
        </div>

        {/* Detailed Professional Experience */}
        <div className="space-y-8 mb-16" data-id="professional-exp" data-path="src/components/Projects.tsx">
          <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-1" data-path="src/components/Projects.tsx">
            <CardHeader>
              <CardTitle className="text-xl" data-id="exp-card-title-1" data-path="src/components/Projects.tsx">
                Senior Technical Program Manager / Agile Transformation Lead - Datawiz for EPA (2024–2025)
              </CardTitle>
            </CardHeader>
            <CardContent data-id="exp-card-content-1" data-path="src/components/Projects.tsx">
              <p className="text-gray-600 mb-4" data-id="exp-desc-1" data-path="src/components/Projects.tsx">
                Led technical software projects for EPA's Salesforce enterprise platform, establishing Agile Center of Excellence serving 200+ professionals and improving delivery predictability by 40%.
              </p>
              <div className="flex flex-wrap gap-2" data-id="exp-tech-1" data-path="src/components/Projects.tsx">
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-1" data-path="src/components/Projects.tsx">Salesforce</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-2" data-path="src/components/Projects.tsx">Agile Methodologies</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-3" data-path="src/components/Projects.tsx">Jira</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-4" data-path="src/components/Projects.tsx">Confluence</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-5" data-path="src/components/Projects.tsx">Cloud Platforms</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-1-6" data-path="src/components/Projects.tsx">API Integration</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-2" data-path="src/components/Projects.tsx">
            <CardHeader>
              <CardTitle className="text-xl" data-id="exp-card-title-2" data-path="src/components/Projects.tsx">
                Technical Program Manager / Product Owner - LMI for U.S. Army (2023–2024)
              </CardTitle>
            </CardHeader>
            <CardContent data-id="exp-card-content-2" data-path="src/components/Projects.tsx">
              <p className="text-gray-600 mb-4" data-id="exp-desc-2" data-path="src/components/Projects.tsx">
                Managed software programs for Army identity and systems modernization, reducing requirement churn by 30% through effective SAFe framework implementation and cross-functional collaboration.
              </p>
              <div className="flex flex-wrap gap-2" data-id="exp-tech-2" data-path="src/components/Projects.tsx">
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-1" data-path="src/components/Projects.tsx">SAFe</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-2" data-path="src/components/Projects.tsx">Cybersecurity</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-3" data-path="src/components/Projects.tsx">Identity Management</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-4" data-path="src/components/Projects.tsx">Platform Architecture</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-5" data-path="src/components/Projects.tsx">Integration Solutions</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-2-6" data-path="src/components/Projects.tsx">Agile Methodologies</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-3" data-path="src/components/Projects.tsx">
            <CardHeader>
              <CardTitle className="text-xl" data-id="exp-card-title-3" data-path="src/components/Projects.tsx">
                Technical Program Manager / Product Owner - Peraton/Perspecta for Navy Programs (2020–2023)
              </CardTitle>
            </CardHeader>
            <CardContent data-id="exp-card-content-3" data-path="src/components/Projects.tsx">
              <p className="text-gray-600 mb-4" data-id="exp-desc-3" data-path="src/components/Projects.tsx">
                Led Tomahawk weapons-system modernization and Navy enterprise software initiatives, improving program delivery predictability by 20%.
              </p>
              <div className="flex flex-wrap gap-2" data-id="exp-tech-3" data-path="src/components/Projects.tsx">
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-1" data-path="src/components/Projects.tsx">Technical Program Management</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-2" data-path="src/components/Projects.tsx">SDLC</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-3" data-path="src/components/Projects.tsx">Regulated Environment Leadership</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-4" data-path="src/components/Projects.tsx">Change Control</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-5" data-path="src/components/Projects.tsx">Design Controls</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-3-6" data-path="src/components/Projects.tsx">Cross-Functional Team Coordination</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-4" data-path="src/components/Projects.tsx">
            <CardHeader>
              <CardTitle className="text-xl" data-id="exp-card-title-4" data-path="src/components/Projects.tsx">
                Staff Systems Engineer / Technical Program Lead - Dexcom (2018–2020)
              </CardTitle>
            </CardHeader>
            <CardContent data-id="exp-card-content-4" data-path="src/components/Projects.tsx">
              <p className="text-gray-600 mb-4" data-id="exp-desc-4" data-path="src/components/Projects.tsx">
                Led medical device software development in FDA-regulated environment, validating multiple databases ensuring compliance with ISO 13485/14971.
              </p>
              <div className="flex flex-wrap gap-2" data-id="exp-tech-4" data-path="src/components/Projects.tsx">
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-1" data-path="src/components/Projects.tsx">FDA 21 CFR Part 11</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-2" data-path="src/components/Projects.tsx">ISO 13485/14971</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-3" data-path="src/components/Projects.tsx">Backend Architecture</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-4" data-path="src/components/Projects.tsx">Cloud Services</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-5" data-path="src/components/Projects.tsx">Mobile Integration</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-4-6" data-path="src/components/Projects.tsx">Database Systems</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow duration-300" data-id="exp-card-5" data-path="src/components/Projects.tsx">
            <CardHeader>
              <CardTitle className="text-xl" data-id="exp-card-title-5" data-path="src/components/Projects.tsx">
                Lead Technical Program Manager / DevOps Engineering - Sony Interactive Entertainment (2013–2017)
              </CardTitle>
            </CardHeader>
            <CardContent data-id="exp-card-content-5" data-path="src/components/Projects.tsx">
              <p className="text-gray-600 mb-4" data-id="exp-desc-5" data-path="src/components/Projects.tsx">
                Led PlayStation's global database platform supporting millions of concurrent users, reducing deployment cycles from days to hours through automation.
              </p>
              <div className="flex flex-wrap gap-2" data-id="exp-tech-5" data-path="src/components/Projects.tsx">
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-1" data-path="src/components/Projects.tsx">Backend Architecture</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-2" data-path="src/components/Projects.tsx">Cloud Services</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-3" data-path="src/components/Projects.tsx">Distributed Databases</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-4" data-path="src/components/Projects.tsx">Microservices</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-5" data-path="src/components/Projects.tsx">DevOps</Badge>
                <Badge variant="outline" className="text-xs" data-id="exp-tech-badge-5-6" data-path="src/components/Projects.tsx">CI/CD</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Recent Work */}
        <div className="text-center mb-16" data-id="selected-work-header" data-path="src/components/Projects.tsx">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-id="selected-work-title" data-path="src/components/Projects.tsx">Selected Recent Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="selected-work-subtitle" data-path="src/components/Projects.tsx">
            Key projects demonstrating technical excellence and innovation
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