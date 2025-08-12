import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 
    'React Native', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 
    'Java', 'C#', 'ASP.NET', 'Bootstrap', 'Tailwind CSS', 'Sequelize'
  ];

  const categories = [
    {
      icon: Globe,
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript']
    },
    {
      icon: Code,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'ASP.NET', 'C#', 'Java']
    },
    {
      icon: Database,
      title: 'Banco de Dados',
      skills: ['MongoDB', 'MySQL', 'Sequelize']
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      skills: ['React Native']
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-portfolio">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estudante de Ciência da Computação apaixonado por tecnologia e desenvolvimento, 
            sempre em busca de aprender novas ferramentas e criar soluções inovadoras.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Story */}
          <div className="space-y-6">
            <div className="card-portfolio p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Minha Trajetória</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Iniciei minha jornada na programação durante meu curso de Ciência da Computação, 
                  onde descobri minha paixão por desenvolvimento web e criação de aplicações que 
                  resolvem problemas reais.
                </p>
                <p>
                  Ao longo dos meus estudos, desenvolvi uma sólida base em tecnologias frontend 
                  e backend, sempre focando em escrever código limpo, eficiente e escalável.
                </p>
                <p>
                  Hoje, busco oportunidades para aplicar meus conhecimentos em projetos desafiadores 
                  e continuar crescendo como desenvolvedor, contribuindo para equipes inovadoras.
                </p>
              </div>
            </div>

            {/* All Skills */}
            <div className="card-portfolio p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills by Category */}
          <div className="space-y-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.title} className="card-portfolio p-6 glow-effect">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;