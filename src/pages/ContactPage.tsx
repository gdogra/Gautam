import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12" data-id="contact-page" data-path="src/pages/ContactPage.tsx">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b mb-12" data-id="contact-header" data-path="src/pages/ContactPage.tsx">
          <div className="container mx-auto px-4 py-4" data-id="contact-header-container" data-path="src/pages/ContactPage.tsx">
            <div className="flex justify-between items-center" data-id="contact-header-content" data-path="src/pages/ContactPage.tsx">
              <div className="flex items-center space-x-2" data-id="contact-header-info" data-path="src/pages/ContactPage.tsx">
                <h1 className="text-2xl font-bold text-gray-900" data-id="contact-header-title" data-path="src/pages/ContactPage.tsx">Gautam Dogra</h1>
                <span className="text-sm text-gray-500" data-id="contact-header-subtitle" data-path="src/pages/ContactPage.tsx">Senior Technical Program Manager & AI Developer</span>
              </div>
              
              <nav className="hidden md:flex space-x-6" data-id="contact-nav" data-path="src/pages/ContactPage.tsx">
                <a href="/" className="text-gray-600 hover:text-gray-900" data-id="contact-nav-home" data-path="src/pages/ContactPage.tsx">Home</a>
                <a href="/about" className="text-gray-600 hover:text-gray-900" data-id="contact-nav-about" data-path="src/pages/ContactPage.tsx">About</a>
                <a href="/work" className="text-gray-600 hover:text-gray-900" data-id="contact-nav-work" data-path="src/pages/ContactPage.tsx">Work</a>
                <a href="/projects" className="text-gray-600 hover:text-gray-900" data-id="contact-nav-projects" data-path="src/pages/ContactPage.tsx">Projects</a>
                <a href="/skills" className="text-gray-600 hover:text-gray-900" data-id="contact-nav-skills" data-path="src/pages/ContactPage.tsx">Skills</a>
                <span className="text-gray-900 font-medium" data-id="contact-nav-current" data-path="src/pages/ContactPage.tsx">Contact</span>
              </nav>
            </div>
          </div>
        </header>

        <div className="text-center mb-16" data-id="contact-header-section" data-path="src/pages/ContactPage.tsx">
          <h1 className="text-5xl font-bold text-gray-900 mb-6" data-id="contact-title" data-path="src/pages/ContactPage.tsx">
            Let's <span className="text-purple-600">Connect</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="contact-subtitle" data-path="src/pages/ContactPage.tsx">
            Exploring opportunities in technical program management, AI development, and complex system integration
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-id="contact-content" data-path="src/pages/ContactPage.tsx">
          <Card className="mb-8" data-id="contact-card" data-path="src/pages/ContactPage.tsx">
            <CardHeader data-id="contact-card-header" data-path="src/pages/ContactPage.tsx">
              <CardTitle className="text-2xl text-center" data-id="contact-card-title" data-path="src/pages/ContactPage.tsx">Available for Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="text-center" data-id="contact-card-content" data-path="src/pages/ContactPage.tsx">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed" data-id="contact-p" data-path="src/pages/ContactPage.tsx">
                I'm open to opportunities in <strong data-id="contact-strong1" data-path="src/pages/ContactPage.tsx">technical program management</strong>, <strong data-id="contact-strong2" data-path="src/pages/ContactPage.tsx">AI development</strong>, or <strong data-id="contact-strong3" data-path="src/pages/ContactPage.tsx">complex system integration</strong> roles that leverage my expertise in regulated environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="contact-buttons" data-path="src/pages/ContactPage.tsx">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700" data-id="contact-email-btn" data-path="src/pages/ContactPage.tsx">
                  <a href="mailto:gdogra@gmail.com" data-id="contact-email-link" data-path="src/pages/ContactPage.tsx">
                    <Mail className="mr-2 h-4 w-4" data-id="contact-mail-icon" data-path="src/pages/ContactPage.tsx" />
                    Email Me
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild data-id="contact-linkedin-btn" data-path="src/pages/ContactPage.tsx">
                  <a href="https://linkedin.com/in/gautam-dogra" target="_blank" rel="noopener noreferrer" data-id="contact-linkedin-link" data-path="src/pages/ContactPage.tsx">
                    <MessageCircle className="mr-2 h-4 w-4" data-id="contact-message-icon" data-path="src/pages/ContactPage.tsx" />
                    Let's Connect
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="contact-links-grid" data-path="src/pages/ContactPage.tsx">
            <Card className="hover:shadow-lg transition-shadow duration-300" data-id="contact-email-card" data-path="src/pages/ContactPage.tsx">
              <CardContent className="p-6 text-center" data-id="contact-email-content" data-path="src/pages/ContactPage.tsx">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" data-id="contact-email-icon" data-path="src/pages/ContactPage.tsx" />
                <h3 className="font-semibold text-gray-900 mb-2" data-id="contact-email-title" data-path="src/pages/ContactPage.tsx">Email</h3>
                <Button variant="link" className="p-0 text-blue-600" asChild data-id="contact-email-button" data-path="src/pages/ContactPage.tsx">
                  <a href="mailto:gdogra@gmail.com" data-id="contact-email-link2" data-path="src/pages/ContactPage.tsx">gdogra@gmail.com</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300" data-id="contact-linkedin-card" data-path="src/pages/ContactPage.tsx">
              <CardContent className="p-6 text-center" data-id="contact-linkedin-content" data-path="src/pages/ContactPage.tsx">
                <Linkedin className="h-8 w-8 text-blue-600 mx-auto mb-3" data-id="contact-linkedin-icon" data-path="src/pages/ContactPage.tsx" />
                <h3 className="font-semibold text-gray-900 mb-2" data-id="contact-linkedin-title" data-path="src/pages/ContactPage.tsx">LinkedIn</h3>
                <Button variant="link" className="p-0 text-blue-600" asChild data-id="contact-linkedin-button" data-path="src/pages/ContactPage.tsx">
                  <a href="https://linkedin.com/in/gautam-dogra" target="_blank" rel="noopener noreferrer" data-id="contact-linkedin-link2" data-path="src/pages/ContactPage.tsx">
                    linkedin.com/in/gautam‑dogra
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300" data-id="contact-github-card" data-path="src/pages/ContactPage.tsx">
              <CardContent className="p-6 text-center" data-id="contact-github-content" data-path="src/pages/ContactPage.tsx">
                <Github className="h-8 w-8 text-gray-700 mx-auto mb-3" data-id="contact-github-icon" data-path="src/pages/ContactPage.tsx" />
                <h3 className="font-semibold text-gray-900 mb-2" data-id="contact-github-title" data-path="src/pages/ContactPage.tsx">GitHub</h3>
                <Button variant="link" className="p-0 text-gray-700" asChild data-id="contact-github-button" data-path="src/pages/ContactPage.tsx">
                  <a href="https://github.com/gdogra" target="_blank" rel="noopener noreferrer" data-id="contact-github-link" data-path="src/pages/ContactPage.tsx">
                    github.com/gdogra
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;