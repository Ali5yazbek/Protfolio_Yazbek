
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-purple-600 font-medium">Hello, I'm</p>
          <h1 className="text-5xl font-bold">Ali Yazbek</h1>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Junior Frontend Developer
          </h2>
          <p className="text-gray-600 max-w-lg">
            Passionate about creating responsive and user-friendly web applications using modern technologies.
          </p>
          <div className="flex gap-4">
            <Button asChild variant="default" className="bg-purple-600 hover:bg-purple-700">
              <a href="/aliyazbek_resume.pdf" download>
                Download CV
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-96 h-96 overflow-hidden rounded-full border-4 border-purple-200 shadow-lg">
            <img
              src="/lovable-uploads/c71acf4b-3786-469c-b1dc-6f2a6e03b3bb.png"
              alt="Ali Yazbek"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
