import { Button } from 'react-bootstrap'
import { IoLogoVercel } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import './Hero.css'
import { About } from '../about/About';
import useInView from '../../hooks/useInView';

const socials = [
  {
    icon: <IoLogoLinkedin size={25} />,
    url: 'https://www.linkedin.com/in/mariano-ostric-719890100/'
  },
  {
    icon: <IoLogoGithub size={25} />,
    url: 'https://github.com/ostricnano'
  },
  {
    icon: <IoLogoVercel size={25} />,
    url: 'https://vercel.com/ostricnanos-projects'
  }
]

export const Hero = () => {
  const [ref, isInView, hasAnimated] = useInView<HTMLHeadingElement | HTMLDivElement>({
    threshold: 0.1  // Ajusta el umbral según sea necesario
  });
  console.log(isInView)
  
  return (
    <section id='about' className='hero-block'>
      <div className='bg-container'>
        <img className='hero-image' src='/images/hero-bg.jpg' alt='hero-image' />
      </div>
      <div 
        className={`header-block ${hasAnimated  ? 'header-block-animated' : ''}`} 
        ref={ref}
      >
        <h1 className='hero-title'>Front-end <span>Developer</span></h1>
        <div className='description-container'>
          <h2 className='hero-subtitle'>React.js | React native</h2>
          <p className='hero-description'>
            I specialize in building dynamic and responsive web and mobile applications using React.js and React Native. My focus is on creating visually appealing and highly functional user interfaces that provide a seamless experience across all devices.
          </p>
          <div className='btn-container'>
            <Button className='ps-5 pe-5' variant="outline-secondary ">
              <a href='#contact-me'>Contact me</a>
            </Button>
            <Button className='ps-5 pe-5'  variant="outline-secondary">
              <a href='#projects'>View my jobs</a>
            </Button>
          </div>
          <div className='socials-container'> 
            {
              socials.map((social, index) => (
                <li className='list-item' key={index}>
                  <a href={social.url} target="_blank">
                    {social.icon}
                  </a>
                </li>
              ))
            }
          </div>
        </div>
      </div>
      <About />
    </section>
  )
}
