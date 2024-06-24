import { Skills } from './components/skills/Skills';
import { Projects } from './components/our-projects/Projects';
import { Expirience } from './components/expirience/Expirience';
import { Header } from './components/header/Header';
import { ContactBlock } from './components/contact-info/ContactBlock';
import { Hero } from './components/main/Hero';
import { motion, useScroll, useSpring } from "framer-motion"
import './App.css'
import { Services } from './components/our-services/Services';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div>
        <Header/>
        <main>
          <Hero />
          <Expirience/>
          <Projects />
          <Services />
          <Skills />
          <ContactBlock />
        </main>
      </div>
    </>
  )
}

export default App
