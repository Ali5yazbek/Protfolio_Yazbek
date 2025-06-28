
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const Contact = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="text-purple-600" />
              <span>ali55yazbeck@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-purple-600" />
              <span>+961 81 994 663</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="text-purple-600" />
              <a href="https://linkedin.com" className="hover:text-purple-600 transition-colors">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="text-purple-600" />
              <a href="https://github.com" className="hover:text-purple-600 transition-colors">
                GitHub Profile
              </a>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
