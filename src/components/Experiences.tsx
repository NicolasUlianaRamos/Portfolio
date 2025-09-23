import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

const Experiences = () => {
  const experiences: Experience[] = [
    {
      id: 'way-anima-hub',
      company: 'Way Anima Hub',
      position: 'Desenvolvedor Front-end',
      period: 'Ago 2025 - Atual',
      location: 'Remoto',
      description: 'Participação em projeto acadêmico de desenvolvimento web voltado para horas extracurriculares e ganho de experiência prática. Trabalhando com tecnologias modernas em um ambiente de aprendizado supervisionado.',
      technologies: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
      highlights: [
        'Desenvolvimento de interfaces utilizando Vue.js',
        'Aplicação de conhecimentos teóricos em projetos práticos',
        'Colaboração em equipe de desenvolvimento',
        'Implementação de layouts responsivos para diferentes dispositivos',
        'Ganho de experiência em ambiente profissional supervisionado',
        'Contribuição para projeto de longa duração (6+ meses)'
      ]
    },
    {
      id: 'nillytrack',
      company: 'NillyTrack',
      position: 'Desenvolvedor Full Stack (Projeto Pessoal)',
      period: '2025 (2 meses)',
      location: 'Remoto',
      description: 'Projeto pessoal completo para avaliação de livros, com autenticação, cadastro e gerenciamento de avaliações, busca e filtragem.',
      technologies: ['React', 'Node.js', 'Express', 'TypeScript', 'MongoDB', 'JWT'],
      highlights: [
        'Arquitetura full stack com API REST em Node.js/Express e frontend em React',
        'Autenticação e autorização com JWT e proteção de rotas',
        'CRUD completo de livros e avaliações com validações',
        'Modelagem e persistência de dados no MongoDB',
        'Design responsivo e boas práticas de UX'
      ]
    }
  ];

  return (
    <section id="experiences" className="section-padding bg-muted/30">
      <div className="container-portfolio">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiências <span className="text-gradient">Profissionais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Minha trajetória profissional em desenvolvimento de software, 
            contribuindo para projetos inovadores e aplicando conhecimentos em tecnologias modernas.
          </p>
        </div>

        {/* Experiences Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-40 bg-gradient-to-b from-primary to-primary/20 hidden md:block"></div>
              )}
              
              {/* Experience Card */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12">
                
                {/* Timeline Dot */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20 relative z-10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="card-portfolio p-6 md:p-8 glow-effect">
                    
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {experience.position}
                          </h3>
                          <p className="text-lg font-semibold text-primary mb-2">
                            {experience.company}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end space-y-1">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm font-medium">{experience.period}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Tecnologias Utilizadas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span key={tech} className="skill-tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Principais Realizações
                      </h4>
                      <ul className="space-y-2">
                        {experience.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experiences;