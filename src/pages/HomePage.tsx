import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <div className="min-h-screen" data-id="6nl6rd1kh" data-path="src/pages/HomePage.tsx">
      <Header data-id="u1f575kuc" data-path="src/pages/HomePage.tsx" />
      <Hero data-id="xmgqdymp2" data-path="src/pages/HomePage.tsx" />
      <About data-id="about-section-home" data-path="src/pages/HomePage.tsx" />
      <Projects data-id="kkroc1plo" data-path="src/pages/HomePage.tsx" />
      <Skills data-id="80rlr2ihz" data-path="src/pages/HomePage.tsx" />
      <Contact data-id="d2101o379" data-path="src/pages/HomePage.tsx" />
      
      <footer className="bg-gray-900 text-white py-8" data-id="y0v3j819g" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4 text-center" data-id="fx7pnlh25" data-path="src/pages/HomePage.tsx">
          <p className="text-gray-400" data-id="kj7wcp2vn" data-path="src/pages/HomePage.tsx">
            © {new Date().getFullYear()} Gautam Dogra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>);

};

export default HomePage;