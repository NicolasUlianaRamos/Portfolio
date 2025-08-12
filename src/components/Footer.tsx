import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-portfolio py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">Nicolas Uliana Ramos</h3>
            <p className="text-muted-foreground text-sm">
              Desenvolvedor Full Stack
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/NicolasUlianaRamos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nicolas-uliana-ramos-233854268/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:nicolasuliana10@gmail.com"
              className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Nicolas Uliana Ramos. Todos os direitos reservados.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-xs">
            Desenvolvido com React, TypeScript e muito ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;