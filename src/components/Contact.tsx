import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50" data-id="333tte8u7" data-path="src/components/Contact.tsx">
      <div className="container mx-auto px-4" data-id="32c8h52h1" data-path="src/components/Contact.tsx">
        <div className="text-center mb-16" data-id="05ulx5ixk" data-path="src/components/Contact.tsx">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="3zv1hsi79" data-path="src/components/Contact.tsx">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="r0zkf0og0" data-path="src/components/Contact.tsx">
            Exploring opportunities in technical program management, AI development, and complex system integration
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-id="tsknmgamu" data-path="src/components/Contact.tsx">
          <Card className="mb-8" data-id="o5flf39ib" data-path="src/components/Contact.tsx">
            <CardHeader data-id="o2pk9cqie" data-path="src/components/Contact.tsx">
              <CardTitle className="text-2xl text-center" data-id="kiwzepdbx" data-path="src/components/Contact.tsx">Available for Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="text-center" data-id="0kya9xghs" data-path="src/components/Contact.tsx">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed" data-id="plkbayw06" data-path="src/components/Contact.tsx">
                I'm open to opportunities in <strong data-id="f2rrjxp90" data-path="src/components/Contact.tsx">technical program management</strong>, <strong data-id="0pyzxlat6" data-path="src/components/Contact.tsx">AI development</strong>, or <strong data-id="hake1eyi4" data-path="src/components/Contact.tsx">complex system integration</strong> roles that leverage my expertise in regulated environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="uvubqmyhx" data-path="src/components/Contact.tsx">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700" data-id="bsocju128" data-path="src/components/Contact.tsx">
                  <a href="mailto:gdogra@gmail.com" data-id="gwcgfa0ta" data-path="src/components/Contact.tsx">
                    <Mail className="mr-2 h-4 w-4" data-id="xh5mrkmuh" data-path="src/components/Contact.tsx" />
                    Email Me
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild data-id="cj9cs4auo" data-path="src/components/Contact.tsx">
                  <a href="https://linkedin.com/in/gautam-dogra" target="_blank" rel="noopener noreferrer" data-id="qch1f4h4u" data-path="src/components/Contact.tsx">
                    <MessageCircle className="mr-2 h-4 w-4" data-id="frwruf6mc" data-path="src/components/Contact.tsx" />
                    Let's Connect
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="97pjs0cir" data-path="src/components/Contact.tsx">
            <Card className="hover:shadow-lg transition-shadow duration-300" data-id="3ybgv7dvr" data-path="src/components/Contact.tsx">
              <CardContent className="p-6 text-center" data-id="nqi58suvw" data-path="src/components/Contact.tsx">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" data-id="mypg8me2c" data-path="src/components/Contact.tsx" />
                <h3 className="font-semibold text-gray-900 mb-2" data-id="e6p6zoz0q" data-path="src/components/Contact.tsx">Email</h3>
                <Button variant="link" className="p-0 text-blue-600" asChild data-id="97nvpfpqy" data-path="src/components/Contact.tsx">
                  <a href="mailto:gdogra@gmail.com" data-id="uq1a4fbcn" data-path="src/components/Contact.tsx">gdogra@gmail.com</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300" data-id="8bzn126mc" data-path="src/components/Contact.tsx">
              <CardContent className="p-6 text-center" data-id="xq57d06lr" data-path="src/components/Contact.tsx">
                <Linkedin className="h-8 w-8 text-blue-600 mx-auto mb-3" data-id="8gn9owwo0" data-path="src/components/Contact.tsx" />
                <h3 className="font-semibold text-gray-900 mb-2" data-id="hbw7p2u73" data-path="src/components/Contact.tsx">LinkedIn</h3>
                <Button variant="link" className="p-0 text-blue-600" asChild data-id="2eqhg8ym5" data-path="src/components/Contact.tsx">
                  <a href="https://linkedin.com/in/gautam-dogra" target="_blank" rel="noopener noreferrer" data-id="33h71oxj6" data-path="src/components/Contact.tsx">
                    linkedin.com/in/gautam‑dogra
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300" data-id="h63u79mkc" data-path="src/components/Contact.tsx">
              <CardContent className="p-6 text-center" data-id="46vou212d" data-path="src/components/Contact.tsx">
                <Github className="h-8 w-8 text-gray-700 mx-auto mb-3" data-id="vd2mxxwy6" data-path="src/components/Contact.tsx" />
                <h3 className="font-semibold text-gray-900 mb-2" data-id="a3asckr8d" data-path="src/components/Contact.tsx">GitHub</h3>
                <Button variant="link" className="p-0 text-gray-700" asChild data-id="zubad8mfu" data-path="src/components/Contact.tsx">
                  <a href="https://github.com/gdogra" target="_blank" rel="noopener noreferrer" data-id="ob23bbjk9" data-path="src/components/Contact.tsx">
                    github.com/gdogra
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>);

};

export default Contact;