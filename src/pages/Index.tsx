import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experiences from '@/components/Experiences';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SnakeGame from '@/components/SnakeGame';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <SnakeGame />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
