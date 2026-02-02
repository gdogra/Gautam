import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Wrench, Workflow, Shield, Database } from "lucide-react";

const Skills = () => {
  const skills = [
  {
    icon: <Workflow className="h-8 w-8 text-purple-600" data-id="fz95b5azd" data-path="src/components/Skills.tsx" />,
    title: "Technical Program Management",
    description: "15+ years of leading complex software development programs from initiation through commercialization in highly regulated environments.",
    technologies: ["Technical Program Management", "SDLC", "Regulated Environment Leadership", "Change Control", "Design Controls", "Cross-Functional Team Coordination", "Software Roadmap Development", "Project Planning & Scheduling", "Risk Assessment & Mitigation"]
  },
  {
    icon: <Wrench className="h-8 w-8 text-blue-600" data-id="fv138g6j6" data-path="src/components/Skills.tsx" />,
    title: "Agile Leadership & Scrum Mastery",
    description: "Expert in Agile methodologies (Scrum, SAFe) with certifications as Certified ScrumMaster (CSM) and Certified Scrum Product Owner (CSPO).",
    technologies: ["Scrum", "SAFe", "Kanban", "Agile Methodologies", "Scrum Master Leadership", "Product Ownership", "Sprint Planning", "Backlog Refinement", "User Story Creation", "Ceremony Facilitation", "Continuous Improvement"]
  },
  {
    icon: <Shield className="h-8 w-8 text-green-600" data-id="b4vnfr73g" data-path="src/components/Skills.tsx" />,
    title: "Regulatory Compliance & Quality",
    description: "Proven expertise in FDA, ISO 13485/14971, DoD, and federal agency compliance with rigorous change control and design controls.",
    technologies: ["FDA 21 CFR Part 11", "ISO 13485/14971", "Medical Device Design Controls", "DoD Compliance", "Federal Agency Standards", "Quality Assurance", "Validation & Verification", "Risk Management"]
  },
  {
    icon: <Database className="h-8 w-8 text-orange-600" data-id="cq6uffoed" data-path="src/components/Skills.tsx" />,
    title: "DevOps & Technical Architecture",
    description: "Full-stack development with backend architecture, cloud services (AWS/Azure), and CI/CD pipelines for reliable delivery.",
    technologies: ["AWS", "Azure", "Backend Architecture", "Cloud Services", "CI/CD", "Jenkins", "Git/GitHub", "Database Validation", "Python", "SQL", "Linux/RHEL", "Microservices", "API Integration"]
  },
  {
    icon: <Code className="h-8 w-8 text-indigo-600" data-id="cq6uffoed" data-path="src/components/Skills.tsx" />,
    title: "AI & Full-Stack Development",
    description: "Modern application architecture with AI implementation, TypeScript, React, and cloud-native solutions.",
    technologies: ["TypeScript", "React", "Node.js", "Next.js", "AI/ML", "LLMs", "NLP", "RAG", "Vector Search", "Python", "PostgreSQL", "MongoDB", "Mobile Development"]
  }
  ];


  const coreStrengths = [
  "Technical Program Management",
  "Agile Leadership (CSM/CSPO)",
  "Regulatory Compliance (FDA/ISO)",
  "DevOps & Cloud Architecture",
  "AI/ML Implementation",
  "Cross-functional Team Leadership"];


  return (
    <section id="skills" className="py-20 bg-gray-50" data-id="7gsi4jfrl" data-path="src/components/Skills.tsx">
      <div className="container mx-auto px-4" data-id="b0r5z24p5" data-path="src/components/Skills.tsx">
        <div className="text-center mb-16" data-id="ubg3c127y" data-path="src/components/Skills.tsx">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="yrwtfvok5" data-path="src/components/Skills.tsx">How I Deliver Value</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="m6ff172fb" data-path="src/components/Skills.tsx">
            Core strengths that drive meaningful impact in every project
          </p>
        </div>

        <div className="mb-16" data-id="fjgse37jy" data-path="src/components/Skills.tsx">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center" data-id="fapd3snp2" data-path="src/components/Skills.tsx">Core Strengths</h3>
          <div className="flex flex-wrap gap-3 justify-center" data-id="r8ep8rzl7" data-path="src/components/Skills.tsx">
            {coreStrengths.map((strength, index) =>
            <Badge key={index} variant="secondary" className="px-4 py-2 text-sm" data-id="f33l7vx9q" data-path="src/components/Skills.tsx">
                {strength}
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="cb2amxdl2" data-path="src/components/Skills.tsx">
          {skills.map((skill, index) =>
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300" data-id="4v60gxjxb" data-path="src/components/Skills.tsx">
              <CardHeader data-id="svzo4m79a" data-path="src/components/Skills.tsx">
                <div className="flex items-center gap-3 mb-2" data-id="9nfakoo7d" data-path="src/components/Skills.tsx">
                  {skill.icon}
                  <CardTitle className="text-xl" data-id="nj06q7bll" data-path="src/components/Skills.tsx">{skill.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent data-id="yrw95bshq" data-path="src/components/Skills.tsx">
                <p className="text-gray-600 mb-4 leading-relaxed" data-id="351pwehbq" data-path="src/components/Skills.tsx">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2" data-id="d8y3x0ft6" data-path="src/components/Skills.tsx">
                  {skill.technologies.map((tech, techIndex) =>
                <Badge key={techIndex} variant="outline" className="text-xs" data-id="cli1wrdlj" data-path="src/components/Skills.tsx">
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

export default Skills;