import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpeg';
import cvFile from '@/assets/Currículo - Nicolas Uliana Ramos.pdf';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section min-h-screen flex items-center">
      <div className="container-portfolio section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Olá, eu sou
                <span className="block text-gradient">Nicolas Uliana Ramos</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Estudante de Ciência da Computação
              </p>
              <p className="text-lg text-white/80 max-w-2xl">
                Desenvolvedor apaixonado por criar soluções web inovadoras, 
                APIs robustas e aplicações interativas que fazem a diferença.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                className="btn-hero px-8 py-3 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Entre em Contato
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-8 py-3 text-lg border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white/60 hover:text-white"
              >
                <a
                  href={cvFile}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://github.com/NicolasUlianaRamos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nicolas-uliana-ramos-233854268" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-foreground/20 to-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 p-4 animate-float">
                <img 
                  src={profileImage} 
                  alt="Nicolas Uliana Ramos - Desenvolvedor Full Stack"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-foreground/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary-foreground/30 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/4 -right-8 w-4 h-4 bg-primary-foreground/25 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;