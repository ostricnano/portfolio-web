import { Col, Container, Row, ProgressBar } from 'react-bootstrap';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import './Skills.css';

const skills = [
  {
    id:'1',
    name: 'HTML5',
    percentage: 90,
    description: 'Crafting the structure and content of web pages',
    icon: <FaHtml5 color='#fff' size='24'/>
  },
  {
    id:'2',
    name: 'CSS',
    percentage: 75,
    description: 'Designing and styling web pages for a visually appealing experience.',
    icon: <FaCss3Alt color='#fff' size='24'/>
  },
  {
    id:'3',
    name: 'SASS',
    description: 'Utilizing advanced CSS preprocessors for better manageability.',
    percentage: 67,
    icon: <IoLogoSass  color='#fff' size='24'/>
  },
  {
    id:'4',
    name: 'JAVASCRIPT',
    description: 'Building dynamic and interactive web applications.',
    percentage: 85,
    icon: <IoLogoJavascript  color='#fff' size='24'/>
  },
  {
    id:'5',
    name: 'REACT JS',
    description: 'Building scalable and reusable user interfaces.',
    percentage: 95,
    icon: <FaReact  color='#fff' size='24'/>
  },
  {
    id:'6',
    name: 'REACT NATIVE',
    description: 'Developing cross-platform mobile applications.',
    percentage: 82,
    icon: <TbBrandReactNative color='#fff' size='24'/>
  },
  {
    id:'7',
    name: 'TYPESCRIPT',
    description: 'Adding static types to JavaScript to improve code quality.',
    percentage: 92,
    icon: <SiTypescript color='#fff' size='24'/>
  },
  {
    id:'8',
    name: 'GIT & GITHUB',
    description: 'Version control and collaboration for software development.',
    percentage: 84,
    icon: <FaGithub color='#fff' size='24'/>
  },
]

export const Skills = () => {
  return (
    <section id='skills' className='skills-block'>
      <Container>
        <h5 className="title">SKILSS</h5>
        <p>I am proficient in a wide range of technologies essential for modern web and mobile development.<br/> My core skills include:</p>
        <Row className='top-container'>
          <Col md={6}>
            <img className='img-skills' src="./images/skills.webp" alt="skills" />
          </Col>
          <Col md={6}>
            <Row className='top-container'>
              {
                skills.map((skill) => (
                  <Col xs={6}  key={skill.id}>
                    <div className='skills-container'>
                      <div className='info'>
                        {skill.icon}
                        <p>{skill.name}</p>
                      </div>
                      <ProgressBar 
                        now={skill.percentage} 
                        label={`${skill.percentage}%`} 
                      />
                    </div>
                  </Col>
                ))
                }
            </Row>
          </Col>
        </Row>
        <Row>
          {
            skills.map((skill) => (
              <Col xs={6} key={skill.id}>
                <div className='skill-description'>
                  <h6>{skill.name}</h6>
                  <p>{skill.description}</p>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}
