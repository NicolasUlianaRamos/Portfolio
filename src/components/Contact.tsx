import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast({
        variant: "destructive",
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome."
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Email inválido",
        description: "Por favor, informe um email válido."
      });
      return false;
    }

    if (!formData.subject.trim()) {
      toast({
        variant: "destructive",
        title: "Assunto obrigatório",
        description: "Por favor, informe o assunto da mensagem."
      });
      return false;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      toast({
        variant: "destructive",
        title: "Mensagem muito curta",
        description: "A mensagem deve ter pelo menos 10 caracteres."
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Enviar formulário usando formsubmit.co
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch("https://formsubmit.co/nicolasuliana10@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) throw new Error('Falha ao enviar o formulário');
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!"
      });

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente ou entre em contato diretamente."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nicolasuliana10@gmail.com',
      link: 'mailto:nicolasuliana10@gmail.com'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 (51) 98604-3494',
      link: 'tel:+5551986043494'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Porto Alegre, RS - Brasil',
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-portfolio">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estou sempre aberto a discutir novas oportunidades, projetos interessantes 
            ou simplesmente trocar ideias sobre tecnologia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Vamos conversar!</h3>
              <p className="text-muted-foreground mb-8">
                Você pode entrar em contato comigo através do formulário ao lado ou 
                pelos canais abaixo. Responderei o mais breve possível.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="flex items-start space-x-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );

                return info.link ? (
                  <a key={info.title} href={info.link} className="block hover:scale-105 transition-transform">
                    {content}
                  </a>
                ) : (
                  <div key={info.title}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-portfolio p-8">
            <form onSubmit={handleSubmit} className="space-y-6" action="https://formsubmit.co/nicolasuliana10@gmail.com" method="POST">
              {/* FormSubmit configuração */}
              <input type="hidden" name="_subject" value="Novo contato do portfólio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_next" value={window.location.href} />
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Assunto *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Sua mensagem aqui..."
                  rows={6}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-hero"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;