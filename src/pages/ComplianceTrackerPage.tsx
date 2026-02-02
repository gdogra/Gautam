import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, AlertTriangle, MessageCircle, Eye, TrendingUp, FileText } from "lucide-react";

const ComplianceTrackerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12" data-id="compliance-page" data-path="src/pages/ComplianceTrackerPage.tsx">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16" data-id="hero-section" data-path="src/pages/ComplianceTrackerPage.tsx">
          <h1 className="text-5xl font-bold text-gray-900 mb-6" data-id="hero-title" data-path="src/pages/ComplianceTrackerPage.tsx">
            AI-Powered <span className="text-purple-600">Compliance Tracker</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8" data-id="hero-desc" data-path="src/pages/ComplianceTrackerPage.tsx">
            Revolutionary platform transforming how accounting firms manage tax deadlines with predictive intelligence and automated compliance.
          </p>
          <div className="flex justify-center gap-4" data-id="hero-buttons" data-path="src/pages/ComplianceTrackerPage.tsx">
            <a href="https://github.com/gdogra/compliance-deadline-tracker" target="_blank" rel="noopener noreferrer" data-id="github-btn-link" data-path="src/pages/ComplianceTrackerPage.tsx">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3" data-id="github-btn" data-path="src/pages/ComplianceTrackerPage.tsx">
                View on GitHub
              </Button>
            </a>
            <a href="https://compliance-deadline-tracker.vercel.app" target="_blank" rel="noopener noreferrer" data-id="demo-btn-link" data-path="src/pages/ComplianceTrackerPage.tsx">
              <Button variant="outline" className="px-6 py-3" data-id="demo-btn" data-path="src/pages/ComplianceTrackerPage.tsx">
                Live Demo
              </Button>
            </a>
          </div>
        </div>

        {/* Key Features Section */}
        <section className="mb-16" data-id="features-section" data-path="src/pages/ComplianceTrackerPage.tsx">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" data-id="features-title" data-path="src/pages/ComplianceTrackerPage.tsx">
            Cutting-Edge AI Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="features-grid" data-path="src/pages/ComplianceTrackerPage.tsx">
            {/* Predictive Risk Scoring */}
            <Card className="hover:shadow-xl transition-shadow duration-300" data-id="risk-card" data-path="src/pages/ComplianceTrackerPage.tsx">
              <CardHeader data-id="risk-header" data-path="src/pages/ComplianceTrackerPage.tsx">
                <div className="flex items-center gap-3" data-id="risk-header-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                  <div className="p-2 bg-red-100 rounded-lg" data-id="risk-icon-bg" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <AlertTriangle className="h-6 w-6 text-red-600" data-id="risk-icon" data-path="src/pages/ComplianceTrackerPage.tsx" />
                  </div>
                  <CardTitle className="text-xl" data-id="risk-title" data-path="src/pages/ComplianceTrackerPage.tsx">
                    Predictive Risk Scoring
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent data-id="risk-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                <p className="text-gray-600 mb-4" data-id="risk-desc" data-path="src/pages/ComplianceTrackerPage.tsx">
                  AI algorithms analyze historical data and client patterns to predict which deadlines are most likely to be missed, allowing for proactive intervention.
                </p>
                <div className="space-y-2" data-id="risk-benefits" data-path="src/pages/ComplianceTrackerPage.tsx">
                  <div className="flex items-start gap-2" data-id="risk-benefit-1" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" data-id="risk-dot-1" data-path="src/pages/ComplianceTrackerPage.tsx"></div>
                    <p className="text-gray-600 text-sm" data-id="risk-text-1" data-path="src/pages/ComplianceTrackerPage.tsx">Reduces missed deadlines by up to 90%</p>
                  </div>
                  <div className="flex items-start gap-2" data-id="risk-benefit-2" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" data-id="risk-dot-2" data-path="src/pages/ComplianceTrackerPage.tsx"></div>
                    <p className="text-gray-600 text-sm" data-id="risk-text-2" data-path="src/pages/ComplianceTrackerPage.tsx">Prioritizes high-risk clients</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intelligent Document Processing */}
            <Card className="hover:shadow-xl transition-shadow duration-300" data-id="doc-card" data-path="src/pages/ComplianceTrackerPage.tsx">
              <CardHeader data-id="doc-header" data-path="src/pages/ComplianceTrackerPage.tsx">
                <div className="flex items-center gap-3" data-id="doc-header-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                  <div className="p-2 bg-blue-100 rounded-lg" data-id="doc-icon-bg" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <FileText className="h-6 w-6 text-blue-600" data-id="doc-icon" data-path="src/pages/ComplianceTrackerPage.tsx" />
                  </div>
                  <CardTitle className="text-xl" data-id="doc-title" data-path="src/pages/ComplianceTrackerPage.tsx">
                    Intelligent Document Processing
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent data-id="doc-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                <p className="text-gray-600 mb-4" data-id="doc-desc" data-path="src/pages/ComplianceTrackerPage.tsx">
                  OCR and NLP technology automatically extract compliance-relevant information from tax documents, reducing manual data entry by up to 90%.
                </p>
                <div className="space-y-2" data-id="doc-benefits" data-path="src/pages/ComplianceTrackerPage.tsx">
                  <div className="flex items-start gap-2" data-id="doc-benefit-1" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" data-id="doc-dot-1" data-path="src/pages/ComplianceTrackerPage.tsx"></div>
                    <p className="text-gray-600 text-sm" data-id="doc-text-1" data-path="src/pages/ComplianceTrackerPage.tsx">Automatically populates client data</p>
                  </div>
                  <div className="flex items-start gap-2" data-id="doc-benefit-2" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" data-id="doc-dot-2" data-path="src/pages/ComplianceTrackerPage.tsx"></div>
                    <p className="text-gray-600 text-sm" data-id="doc-text-2" data-path="src/pages/ComplianceTrackerPage.tsx">Flags inconsistencies in documents</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Smart Recommendations */}
            <Card className="hover:shadow-xl transition-shadow duration-300" data-id="recommend-card" data-path="src/pages/ComplianceTrackerPage.tsx">
              <CardHeader data-id="recommend-header" data-path="src/pages/ComplianceTrackerPage.tsx">
                <div className="flex items-center gap-3" data-id="recommend-header-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                  <div className="p-2 bg-green-100 rounded-lg" data-id="recommend-icon-bg" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <TrendingUp className="h-6 w-6 text-green-600" data-id="recommend-icon" data-path="src/pages/ComplianceTrackerPage.tsx" />
                  </div>
                  <CardTitle className="text-xl" data-id="recommend-title" data-path="src/pages/ComplianceTrackerPage.tsx">
                    Smart Recommendations
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent data-id="recommend-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                <p className="text-gray-600 mb-4" data-id="recommend-desc" data-path="src/pages/ComplianceTrackerPage.tsx">
                  Context-aware AI suggests optimal filing strategies, extensions, and compliance pathways based on client entity types and circumstances.
                </p>
                <div className="space-y-2" data-id="recommend-benefits" data-path="src/pages/ComplianceTrackerPage.tsx">
                  <div className="flex items-start gap-2" data-id="recommend-benefit-1" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" data-id="recommend-dot-1" data-path="src/pages/ComplianceTrackerPage.tsx"></div>
                    <p className="text-gray-600 text-sm" data-id="recommend-text-1" data-path="src/pages/ComplianceTrackerPage.tsx">Entity-specific guidance</p>
                  </div>
                  <div className="flex items-start gap-2" data-id="recommend-benefit-2" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" data-id="recommend-dot-2" data-path="src/pages/ComplianceTrackerPage.tsx"></div>
                    <p className="text-gray-600 text-sm" data-id="recommend-text-2" data-path="src/pages/ComplianceTrackerPage.tsx">Suggests extension opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Anomaly Detection */}
            <Card className="hover:shadow-xl transition-shadow duration-300" data-id="anomaly-card" data-path="src/pages/ComplianceTrackerPage.tsx">
              <CardHeader data-id="anomaly-header" data-path="src/pages/ComplianceTrackerPage.tsx">
                <div className="flex items-center gap-3" data-id="anomaly-header-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                  <div className="p-2 bg-yellow-100 rounded-lg" data-id="anomaly-icon-bg" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <Eye className="h-6 w-6 text-yellow-600" data-id="anomaly-icon" data-path="src/pages/ComplianceTrackerPage.tsx" />
                  </div>
                  <CardTitle className="text-xl" data-id="anomaly-title" data-path="src/pages/ComplianceTrackerPage.tsx">
                    Anomaly Detection
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent data-id="anomaly-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                <p className="text-gray-600 mb-4" data-id="anomaly-desc" data-path="src/pages/ComplianceTrackerPage.tsx">
                  Advanced algorithms identify unusual patterns in client compliance behavior that might indicate business changes requiring attention.
                </p>
                <div className="space-y-2" data-id="anomaly-benefits" data-path="src/pages/ComplianceTrackerPage.tsx">
                  <div className="flex items-start gap-2" data-id="anomaly-benefit-1" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" data-id="anomaly-dot-1" data-path="src/pages/ComplianceTrackerPage.tsx"></div>
                    <p className="text-gray-600 text-sm" data-id="anomaly-text-1" data-path="src/pages/ComplianceTrackerPage.tsx">Detects unusual filing spikes</p>
                  </div>
                  <div className="flex items-start gap-2" data-id="anomaly-benefit-2" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" data-id="anomaly-dot-2" data-path="src/pages/ComplianceTrackerPage.tsx"></div>
                    <p className="text-gray-600 text-sm" data-id="anomaly-text-2" data-path="src/pages/ComplianceTrackerPage.tsx">Identifies performance degradation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conversational Assistant */}
            <Card className="hover:shadow-xl transition-shadow duration-300" data-id="assistant-card" data-path="src/pages/ComplianceTrackerPage.tsx">
              <CardHeader data-id="assistant-header" data-path="src/pages/ComplianceTrackerPage.tsx">
                <div className="flex items-center gap-3" data-id="assistant-header-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                  <div className="p-2 bg-indigo-100 rounded-lg" data-id="assistant-icon-bg" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <MessageCircle className="h-6 w-6 text-indigo-600" data-id="assistant-icon" data-path="src/pages/ComplianceTrackerPage.tsx" />
                  </div>
                  <CardTitle className="text-xl" data-id="assistant-title" data-path="src/pages/ComplianceTrackerPage.tsx">
                    Conversational Assistant
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent data-id="assistant-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                <p className="text-gray-600 mb-4" data-id="assistant-desc" data-path="src/pages/ComplianceTrackerPage.tsx">
                  Natural language interface for instant compliance guidance, penalty calculations, and filing requirement information.
                </p>
                <div className="space-y-2" data-id="assistant-benefits" data-path="src/pages/ComplianceTrackerPage.tsx">
                  <div className="flex items-start gap-2" data-id="assistant-benefit-1" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" data-id="assistant-dot-1" data-path="src/pages/ComplianceTrackerPage.tsx"></div>
                    <p className="text-gray-600 text-sm" data-id="assistant-text-1" data-path="src/pages/ComplianceTrackerPage.tsx">Answers complex compliance questions</p>
                  </div>
                  <div className="flex items-start gap-2" data-id="assistant-benefit-2" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" data-id="assistant-dot-2" data-path="src/pages/ComplianceTrackerPage.tsx"></div>
                    <p className="text-gray-600 text-sm" data-id="assistant-text-2" data-path="src/pages/ComplianceTrackerPage.tsx">Provides context-aware guidance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Intelligence */}
            <Card className="hover:shadow-xl transition-shadow duration-300" data-id="intelligence-card" data-path="src/pages/ComplianceTrackerPage.tsx">
              <CardHeader data-id="intelligence-header" data-path="src/pages/ComplianceTrackerPage.tsx">
                <div className="flex items-center gap-3" data-id="intelligence-header-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                  <div className="p-2 bg-purple-100 rounded-lg" data-id="intelligence-icon-bg" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <Brain className="h-6 w-6 text-purple-600" data-id="intelligence-icon" data-path="src/pages/ComplianceTrackerPage.tsx" />
                  </div>
                  <CardTitle className="text-xl" data-id="intelligence-title" data-path="src/pages/ComplianceTrackerPage.tsx">
                    Compliance Intelligence
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent data-id="intelligence-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                <p className="text-gray-600 mb-4" data-id="intelligence-desc" data-path="src/pages/ComplianceTrackerPage.tsx">
                  Track regulatory changes, benchmark against industry peers, and optimize costs with actionable insights.
                </p>
                <div className="space-y-2" data-id="intelligence-benefits" data-path="src/pages/ComplianceTrackerPage.tsx">
                  <div className="flex items-start gap-2" data-id="intelligence-benefit-1" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" data-id="intelligence-dot-1" data-path="src/pages/ComplianceTrackerPage.tsx"></div>
                    <p className="text-gray-600 text-sm" data-id="intelligence-text-1" data-path="src/pages/ComplianceTrackerPage.tsx">Regulatory change monitoring</p>
                  </div>
                  <div className="flex items-start gap-2" data-id="intelligence-benefit-2" data-path="src/pages/ComplianceTrackerPage.tsx">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" data-id="intelligence-dot-2" data-path="src/pages/ComplianceTrackerPage.tsx"></div>
                    <p className="text-gray-600 text-sm" data-id="intelligence-text-2" data-path="src/pages/ComplianceTrackerPage.tsx">Industry benchmarking</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-16" data-id="metrics-section" data-path="src/pages/ComplianceTrackerPage.tsx">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" data-id="metrics-title" data-path="src/pages/ComplianceTrackerPage.tsx">
            Impactful Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-id="metrics-grid" data-path="src/pages/ComplianceTrackerPage.tsx">
            <Card className="text-center py-6" data-id="metric-1" data-path="src/pages/ComplianceTrackerPage.tsx">
              <CardContent className="space-y-2" data-id="metric-1-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                <div className="text-4xl font-bold text-purple-600" data-id="metric-1-value" data-path="src/pages/ComplianceTrackerPage.tsx">90%</div>
                <div className="text-gray-600" data-id="metric-1-label" data-path="src/pages/ComplianceTrackerPage.tsx">Reduction in missed deadlines</div>
              </CardContent>
            </Card>
            
            <Card className="text-center py-6" data-id="metric-2" data-path="src/pages/ComplianceTrackerPage.tsx">
              <CardContent className="space-y-2" data-id="metric-2-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                <div className="text-4xl font-bold text-blue-600" data-id="metric-2-value" data-path="src/pages/ComplianceTrackerPage.tsx">75%</div>
                <div className="text-gray-600" data-id="metric-2-label" data-path="src/pages/ComplianceTrackerPage.tsx">Time saved on manual tracking</div>
              </CardContent>
            </Card>
            
            <Card className="text-center py-6" data-id="metric-3" data-path="src/pages/ComplianceTrackerPage.tsx">
              <CardContent className="space-y-2" data-id="metric-3-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                <div className="text-4xl font-bold text-green-600" data-id="metric-3-value" data-path="src/pages/ComplianceTrackerPage.tsx">40%</div>
                <div className="text-gray-600" data-id="metric-3-label" data-path="src/pages/ComplianceTrackerPage.tsx">Increase in compliance accuracy</div>
              </CardContent>
            </Card>
            
            <Card className="text-center py-6" data-id="metric-4" data-path="src/pages/ComplianceTrackerPage.tsx">
              <CardContent className="space-y-2" data-id="metric-4-content" data-path="src/pages/ComplianceTrackerPage.tsx">
                <div className="text-4xl font-bold text-indigo-600" data-id="metric-4-value" data-path="src/pages/ComplianceTrackerPage.tsx">3.2x</div>
                <div className="text-gray-600" data-id="metric-4-label" data-path="src/pages/ComplianceTrackerPage.tsx">ROI on compliance investments</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16" data-id="tech-section" data-path="src/pages/ComplianceTrackerPage.tsx">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-id="tech-title" data-path="src/pages/ComplianceTrackerPage.tsx">
            Technologies & Architecture
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3" data-id="tech-tags" data-path="src/pages/ComplianceTrackerPage.tsx">
            <Badge variant="secondary" className="text-lg px-4 py-2" data-id="tech-badge-1" data-path="src/pages/ComplianceTrackerPage.tsx">Next.js</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2" data-id="tech-badge-2" data-path="src/pages/ComplianceTrackerPage.tsx">TypeScript</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2" data-id="tech-badge-3" data-path="src/pages/ComplianceTrackerPage.tsx">AI/ML</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2" data-id="tech-badge-4" data-path="src/pages/ComplianceTrackerPage.tsx">Supabase</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2" data-id="tech-badge-5" data-path="src/pages/ComplianceTrackerPage.tsx">React</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2" data-id="tech-badge-6" data-path="src/pages/ComplianceTrackerPage.tsx">Tailwind CSS</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2" data-id="tech-badge-7" data-path="src/pages/ComplianceTrackerPage.tsx">Node.js</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2" data-id="tech-badge-8" data-path="src/pages/ComplianceTrackerPage.tsx">PostgreSQL</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2" data-id="tech-badge-9" data-path="src/pages/ComplianceTrackerPage.tsx">OCR</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2" data-id="tech-badge-10" data-path="src/pages/ComplianceTrackerPage.tsx">NLP</Badge>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center" data-id="cta-section" data-path="src/pages/ComplianceTrackerPage.tsx">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-id="cta-title" data-path="src/pages/ComplianceTrackerPage.tsx">
            Experience the Future of Compliance Management
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto" data-id="cta-desc" data-path="src/pages/ComplianceTrackerPage.tsx">
            Revolutionize your compliance workflow with AI-powered insights and automation.
          </p>
          <div className="flex justify-center gap-4" data-id="cta-buttons" data-path="src/pages/ComplianceTrackerPage.tsx">
            <a href="https://github.com/gdogra/compliance-deadline-tracker" target="_blank" rel="noopener noreferrer" data-id="cta-github-link" data-path="src/pages/ComplianceTrackerPage.tsx">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg" data-id="cta-github-btn" data-path="src/pages/ComplianceTrackerPage.tsx">
                Explore Source Code
              </Button>
            </a>
            <a href="https://compliance-deadline-tracker.vercel.app" target="_blank" rel="noopener noreferrer" data-id="cta-demo-link" data-path="src/pages/ComplianceTrackerPage.tsx">
              <Button variant="outline" className="px-8 py-3 text-lg" data-id="cta-demo-btn" data-path="src/pages/ComplianceTrackerPage.tsx">
                Try Live Demo
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComplianceTrackerPage;