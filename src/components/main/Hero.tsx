import { Button, Col, Container, Row } from 'react-bootstrap'
import { IoLogoVercel } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import './Hero.css'

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
  return (
    <section className='block hero-block'>
      <Container>
        <Row>
          <Col md={6} className='header-block'>
            <h1 className='hero-title'>Frontend Developer</h1>
            <h2 className='hero-subtitle'>React.js | React native</h2>
            <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
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
          </Col>
          <Col md={6} >
            <div className='img-container'>
              <img src='./images/hero-bg02.png' alt='profile-picture' className='profile-picture'/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
