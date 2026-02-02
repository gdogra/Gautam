import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Rocket, Users, Wrench, Workflow } from "lucide-react";

const Skills = () => {
  const skills = [
  {
    icon: <Wrench className="h-8 w-8 text-purple-600" data-id="fz95b5azd" data-path="src/components/Skills.tsx" />,
    title: "DevOps & Infrastructure",
    description: "End-to-end infrastructure management with AWS, Docker, Kubernetes, and CI/CD pipelines optimized for reliability and scalability.",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "CI/CD", "Infrastructure as Code"]
  },
  {
    icon: <Workflow className="h-8 w-8 text-blue-600" data-id="fv138g6j6" data-path="src/components/Skills.tsx" />,
    title: "Agile Leadership",
    description: "15+ years of leading cross-functional teams with proven methodologies including SAFE, Scrum, Kanban, and Lean principles.",
    technologies: ["SAFe", "Scrum", "Kanban", "Agile Methodologies", "Cross-functional Teams", "Sprint Planning", "Stakeholder Management"]
  },
  {
    icon: <Brain className="h-8 w-8 text-green-600" data-id="b4vnfr73g" data-path="src/components/Skills.tsx" />,
    title: "AI & Machine Learning",
    description: "Advanced AI implementation with LLMs, NLP, computer vision, and production-ready MLOps practices.",
    technologies: ["LLMs", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "MLOps", "Hugging Face", "OpenAI APIs"]
  },
  {
    icon: <Code className="h-8 w-8 text-orange-600" data-id="cq6uffoed" data-path="src/components/Skills.tsx" />,
    title: "Full-Stack Development",
    description: "Modern application architecture with TypeScript, React, Node.js, and cloud-native solutions.",
    technologies: ["TypeScript", "React", "Node.js", "Next.js", "Python", "PostgreSQL", "MongoDB", "Cloud Architecture"]
  }];


  const coreStrengths = [
  "DevOps & Cloud Infrastructure",
  "Agile & SAFE Methodologies", 
  "AI/ML Implementation",
  "Full-Stack Development",
  "Team Leadership",
  "Cross-functional Collaboration"];


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