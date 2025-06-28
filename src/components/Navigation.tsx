
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="text-xl font-semibold">Ali Yazbek</span>
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-purple-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-purple-600 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
