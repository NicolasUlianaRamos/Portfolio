import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import facilitaImg from '@/assets/facilitaServico.png';
import getapetImg from '@/assets/getapet.png';
import medicalImg from '@/assets/medicalservice.png';
import nillyTrack from '@/assets/nillytrack.png';

interface CustomProject {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  tech: string[];
}


const Projects = () => {
  // Substitua as imagens abaixo pelas imagens reais dos projetos, se desejar
  const customProjects: CustomProject[] = [
    {
      id: 'facilita-servicos',
      name: 'Facilita Serviços',
      description: 'O maior site de profissionais autônomos do Brasil! Plataforma para conectar clientes e prestadores de serviços.',
      image: facilitaImg,
      url: 'https://facilita-servico.vercel.app/',
      tech: ['Vue', 'Node.js', 'Express', 'MongoDB']
    },
    {
      id: 'get-a-pet',
      name: 'Get a Pet',
      description: 'Sistema para adoção de pets, cadastro de animais e gerenciamento de adoções.',
      image: getapetImg,
      url: 'https://get-a-pet-alpha.vercel.app/',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT']
    },
    {
      id: 'medical-service',
      name: 'Medical Service',
      description: 'Sistema de geração de ordens de serviço.',
      image: medicalImg,
      url: 'https://medical-service-red.vercel.app/',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT']
    },
    {
      id: 'nilly-track',
      name: 'NillyTrack',
      description: 'Sistema para avaliação de livros',
      image: nillyTrack,
      url: 'https://nillytrack.online',
      tech: ['React', 'Node.js', 'Express', 'Typescript', 'MongoDB', 'JWT']
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-portfolio">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e projetos em destaque, 
            demonstrando minhas habilidades em diferentes tecnologias.
          </p>
        </div>

        {/* Projetos em Destaque */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Projetos em Destaque</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customProjects.map((project) => (
              <div key={project.id} className="card-portfolio p-6 group flex flex-col h-full">
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col flex-grow justify-between">
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-muted-foreground mt-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Button asChild size="sm" className="w-full">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Site
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;