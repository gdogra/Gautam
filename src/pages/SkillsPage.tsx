import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Code, Wrench, Shield, Database, Brain } from "lucide-react";

const SkillsPage = () => {
  const skills = [
  {
    icon: <Cog className="h-8 w-8 text-purple-600" data-id="fz95b5azd" data-path="src/pages/SkillsPage.tsx" />,
    title: "Technical Program Management",
    description: "15+ years of leading complex software development programs from initiation through commercialization in highly regulated environments.",
    technologies: ["Technical Program Management", "SDLC", "Regulated Environment Leadership", "Change Control", "Design Controls", "Cross-Functional Team Coordination", "Software Roadmap Development", "Project Planning & Scheduling", "Risk Assessment & Mitigation"]
  },
  {
    icon: <Wrench className="h-8 w-8 text-blue-600" data-id="fv138g6j6" data-path="src/pages/SkillsPage.tsx" />,
    title: "Agile Leadership & Scrum Mastery",
    description: "Expert in Agile methodologies (Scrum, SAFe) with certifications as Certified ScrumMaster (CSM) and Certified Scrum Product Owner (CSPO).",
    technologies: ["Scrum", "SAFe", "Kanban", "Agile Methodologies", "Scrum Master Leadership", "Product Ownership", "Sprint Planning", "Backlog Refinement", "User Story Creation", "Ceremony Facilitation", "Continuous Improvement"]
  },
  {
    icon: <Shield className="h-8 w-8 text-green-600" data-id="b4vnfr73g" data-path="src/pages/SkillsPage.tsx" />,
    title: "Regulatory Compliance & Quality",
    description: "Proven expertise in FDA, ISO 13485/14971, DoD, and federal agency compliance with rigorous change control and design controls.",
    technologies: ["FDA 21 CFR Part 11", "ISO 13485/14971", "Medical Device Design Controls", "DoD Compliance", "Federal Agency Standards", "Quality Assurance", "Validation & Verification", "Risk Management"]
  },
  {
    icon: <Database className="h-8 w-8 text-orange-600" data-id="cq6uffoed" data-path="src/pages/SkillsPage.tsx" />,
    title: "DevOps & Technical Architecture",
    description: "Full-stack development with backend architecture, cloud services (AWS/Azure), and CI/CD pipelines for reliable delivery.",
    technologies: ["AWS", "Azure", "Backend Architecture", "Cloud Services", "CI/CD", "Jenkins", "Git/GitHub", "Database Validation", "Python", "SQL", "Linux/RHEL", "Microservices", "API Integration"]
  },
  {
    icon: <Code className="h-8 w-8 text-indigo-600" data-id="cq6uffoed" data-path="src/pages/SkillsPage.tsx" />,
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
    <div className="min-h-screen bg-gray-50 py-12" data-id="skills-page" data-path="src/pages/SkillsPage.tsx">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b mb-12" data-id="skills-header" data-path="src/pages/SkillsPage.tsx">
          <div className="container mx-auto px-4 py-4" data-id="skills-header-container" data-path="src/pages/SkillsPage.tsx">
            <div className="flex justify-between items-center" data-id="skills-header-content" data-path="src/pages/SkillsPage.tsx">
              <div className="flex items-center space-x-2" data-id="skills-header-info" data-path="src/pages/SkillsPage.tsx">
                <h1 className="text-2xl font-bold text-gray-900" data-id="skills-header-title" data-path="src/pages/SkillsPage.tsx">Gautam Dogra</h1>
                <span className="text-sm text-gray-500" data-id="skills-header-subtitle" data-path="src/pages/SkillsPage.tsx">Senior Technical Program Manager & AI Developer</span>
              </div>
              
              <nav className="hidden md:flex space-x-6" data-id="skills-nav" data-path="src/pages/SkillsPage.tsx">
                <a href="/" className="text-gray-600 hover:text-gray-900" data-id="skills-nav-home" data-path="src/pages/SkillsPage.tsx">Home</a>
                <a href="/about" className="text-gray-600 hover:text-gray-900" data-id="skills-nav-about" data-path="src/pages/SkillsPage.tsx">About</a>
                <a href="/work" className="text-gray-600 hover:text-gray-900" data-id="skills-nav-work" data-path="src/pages/SkillsPage.tsx">Work</a>
                <a href="/projects" className="text-gray-600 hover:text-gray-900" data-id="skills-nav-projects" data-path="src/pages/SkillsPage.tsx">Projects</a>
                <span className="text-gray-900 font-medium" data-id="skills-nav-current" data-path="src/pages/SkillsPage.tsx">Skills</span>
                <a href="/contact" className="text-gray-600 hover:text-gray-900" data-id="skills-nav-contact" data-path="src/pages/SkillsPage.tsx">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <div className="text-center mb-16" data-id="skills-header-section" data-path="src/pages/SkillsPage.tsx">
          <h1 className="text-5xl font-bold text-gray-900 mb-6" data-id="skills-title" data-path="src/pages/SkillsPage.tsx">
            How I <span className="text-purple-600">Deliver Value</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="skills-subtitle" data-path="src/pages/SkillsPage.tsx">
            Core strengths that drive meaningful impact in every project
          </p>
        </div>

        <div className="mb-16" data-id="fjgse37jy" data-path="src/pages/SkillsPage.tsx">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center" data-id="fapd3snp2" data-path="src/pages/SkillsPage.tsx">Core Strengths</h3>
          <div className="flex flex-wrap gap-3 justify-center" data-id="r8ep8rzl7" data-path="src/pages/SkillsPage.tsx">
            {coreStrengths.map((strength, index) =>
            <Badge key={index} variant="secondary" className="px-4 py-2 text-sm" data-id="f33l7vx9q" data-path="src/pages/SkillsPage.tsx">
                {strength}
              </Badge>
            )}
          </div>
        </div>

        {/* Agile, Scrum, and SAFe related visualizations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" data-id="skills-viz" data-path="src/pages/SkillsPage.tsx">
          <div className="bg-white p-6 rounded-lg shadow-md text-center" data-id="agile-viz" data-path="src/pages/SkillsPage.tsx">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" data-id="agile-img" data-path="src/pages/SkillsPage.tsx" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2" data-id="agile-title" data-path="src/pages/SkillsPage.tsx">Agile Methodologies</h3>
            <p className="text-gray-600" data-id="agile-desc" data-path="src/pages/SkillsPage.tsx">Iterative development approaches for adaptive planning and continuous improvement</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center" data-id="scrum-viz" data-path="src/pages/SkillsPage.tsx">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" data-id="scrum-img" data-path="src/pages/SkillsPage.tsx" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2" data-id="scrum-title" data-path="src/pages/SkillsPage.tsx">Scrum Framework</h3>
            <p className="text-gray-600" data-id="scrum-desc" data-path="src/pages/SkillsPage.tsx">Certified ScrumMaster (CSM) with expertise in sprint planning and ceremonies</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center" data-id="safe-viz" data-path="src/pages/SkillsPage.tsx">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" data-id="safe-img" data-path="src/pages/SkillsPage.tsx" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2" data-id="safe-title" data-path="src/pages/SkillsPage.tsx">SAFe Implementation</h3>
            <p className="text-gray-600" data-id="safe-desc" data-path="src/pages/SkillsPage.tsx">Scaled Agile Framework for enterprise-level program management</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="cb2amxdl2" data-path="src/pages/SkillsPage.tsx">
          {skills.map((skill, index) =>
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300" data-id="4v60gxjxb" data-path="src/pages/SkillsPage.tsx">
              <CardHeader data-id="svzo4m79a" data-path="src/pages/SkillsPage.tsx">
                <div className="flex items-center gap-3 mb-2" data-id="9nfakoo7d" data-path="src/pages/SkillsPage.tsx">
                  {skill.icon}
                  <CardTitle className="text-xl" data-id="nj06q7bll" data-path="src/pages/SkillsPage.tsx">{skill.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent data-id="yrw95bshq" data-path="src/pages/SkillsPage.tsx">
                <p className="text-gray-600 mb-4 leading-relaxed" data-id="351pwehbq" data-path="src/pages/SkillsPage.tsx">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2" data-id="d8y3x0ft6" data-path="src/pages/SkillsPage.tsx">
                  {skill.technologies.map((tech, techIndex) =>
                <Badge key={techIndex} variant="outline" className="text-xs" data-id="cli1wrdlj" data-path="src/pages/SkillsPage.tsx">
                      {tech}
                    </Badge>
                )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;