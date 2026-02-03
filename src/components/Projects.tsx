import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Workflow, Shield, Rocket, Database, Globe } from "lucide-react";

const Projects = () => {
  const workExperiences = [
    {
      title: "Senior Technical Program Manager / Agile Transformation Lead",
      company: "Datawiz for EPA",
      year: "2024-2025",
      icon: <Workflow className="h-6 w-6 text-green-600" />,
      description: "Led technical software projects for EPA's Office of Chemical Safety and Pollution Prevention, delivering Salesforce enterprise platform for pollutants and pesticides regulatory systems under fixed political deadlines.",
      achievements: [
        "Established Agile Center of Excellence serving 200+ professionals with standardized delivery governance",
        "Delivered working proof-of-concept solution in 4 sprints ahead of administration change",
        "Improved delivery predictability by 40% through data-informed enhancements and disciplined execution"
      ],
      technologies: ["Salesforce", "Agile Methodologies", "Jira", "Confluence", "API Integration", "Cloud Platforms"]
    },
    {
      title: "Technical Program Manager / Product Owner",
      company: "LMI for U.S. Army",
      year: "2023-2024",
      icon: <Shield className="h-6 w-6 text-red-600" />,
      description: "Managed software programs for Army identity and systems modernization within SAFe framework, delivering identity management platform architecture and integration solutions.",
      achievements: [
        "Reduced requirement churn by 30% through improved requirements management",
        "Led SAFe framework implementation for cross-functional teams",
        "Integrated security and cybersecurity requirements into platform architecture"
      ],
      technologies: ["SAFe", "Cybersecurity", "Identity Management", "Platform Architecture", "Agile Methodologies"]
    },
    {
      title: "Technical Program Manager / Product Owner",
      company: "Peraton/Perspecta for Navy Programs",
      year: "2020-2023",
      icon: <Rocket className="h-6 w-6 text-blue-600" />,
      description: "Led Tomahawk weapons-system modernization and Navy enterprise software initiatives in highly regulated defense environment.",
      achievements: [
        "Improved program delivery predictability by 20%",
        "Managed complex software programs across regulated defense environments",
        "Coordinated cross-functional teams for weapons-system modernization"
      ],
      technologies: ["Defense Systems", "Agile Methodologies", "Program Management", "Systems Engineering"]
    },
    {
      title: "Staff Systems Engineer / Technical Program Lead",
      company: "Dexcom",
      year: "2018-2020",
      icon: <Database className="h-6 w-6 text-orange-600" />,
      description: "Led medical device software development in FDA-regulated environment for continuous glucose monitoring systems.",
      achievements: [
        "Validated multiple databases ensuring compliance with FDA 21 CFR Part 11",
        "Ensured compliance with ISO 13485/14971 standards",
        "Coordinated cross-functional teams for full SDLC management"
      ],
      technologies: ["FDA 21 CFR Part 11", "ISO 13485/14971", "Backend Architecture", "Cloud Services", "Mobile Integration"]
    },
    {
      title: "Lead Technical Program Manager / DevOps Engineering",
      company: "Sony Interactive Entertainment",
      year: "2013-2017",
      icon: <Globe className="h-6 w-6 text-indigo-600" />,
      description: "Led PlayStation's global database platform supporting millions of concurrent users with strict uptime requirements.",
      achievements: [
        "Reduced deployment cycles from days to hours through automation",
        "Implemented zero-downtime release processes",
        "Built high-availability architecture for global scale"
      ],
      technologies: ["Backend Architecture", "Cloud Services", "Distributed Databases", "DevOps", "CI/CD", "Jenkins"]
    }
  ];


  return (
    <section id="work" className="py-20 bg-white" data-id="3p0k9j9s4" data-path="src/components/Projects.tsx">
      <div className="container mx-auto px-4" data-id="th6zr45dn" data-path="src/components/Projects.tsx">
        <div className="text-center mb-16" data-id="rk04g1z06" data-path="src/components/Projects.tsx">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="5sl9qzesc" data-path="src/components/Projects.tsx">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="zo1gxqnyv" data-path="src/components/Projects.tsx">
            15+ years leading complex software programs across regulated environments
          </p>
        </div>

        <div className="space-y-12" data-id="kdfxqwsaa" data-path="src/components/Projects.tsx">
          {workExperiences.map((work, index) =>
          <Card key={index} className="hover:shadow-xl transition-shadow duration-300" data-id="a9233b2xo" data-path="src/components/Projects.tsx">
              <CardHeader data-id="amh870qv9" data-path="src/components/Projects.tsx">
                <div className="flex items-start justify-between" data-id="ywfydhznj" data-path="src/components/Projects.tsx">
                  <div className="flex items-center gap-3" data-id="jc875330t" data-path="src/components/Projects.tsx">
                    {work.icon}
                    <div data-id="3b45e6mps" data-path="src/components/Projects.tsx">
                      <CardTitle className="text-2xl flex items-center gap-2" data-id="31f1ncaty" data-path="src/components/Projects.tsx">
                        {work.title}
                      </CardTitle>
                      <p className="text-blue-600 font-medium" data-id="company-name" data-path="src/components/Projects.tsx">
                        {work.company} <span className="text-gray-500 font-normal">({work.year})</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6" data-id="x36iml0ka" data-path="src/components/Projects.tsx">
                <p className="text-gray-700 text-lg leading-relaxed" data-id="ngpq72pcu" data-path="src/components/Projects.tsx">
                  {work.description}
                </p>

                <div className="space-y-3" data-id="l8hb8fi6k" data-path="src/components/Projects.tsx">
                  <h4 className="font-semibold text-gray-800" data-id="achievements-title" data-path="src/components/Projects.tsx">Key Achievements:</h4>
                  {work.achievements.map((achievement, achievementIndex) =>
                <div key={achievementIndex} className="flex items-start gap-2" data-id="qnun5g44d" data-path="src/components/Projects.tsx">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" data-id="40mnnfrwp" data-path="src/components/Projects.tsx"></div>
                      <p className="text-gray-600 leading-relaxed" data-id="o6ekaxfec" data-path="src/components/Projects.tsx">{achievement}</p>
                    </div>
                )}
                </div>

                <div className="flex flex-wrap gap-2" data-id="frjud0hk6" data-path="src/components/Projects.tsx">
                  {work.technologies.map((tech, techIndex) =>
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