import { Col, Container, Row } from 'react-bootstrap';
import { Title } from '../title/Title';
import './Services.css';

const services = [
  {
    id: 1,
    icon: './images/ui-ux-icon.webp',
    title: 'Ui/UX design',
    description: 'I create intuitive and engaging user experiences with a focus on user-centric design. My interfaces are visually appealing, easy to navigate, and provide seamless interactions.',
  },
  {
    id: 2,
    icon: './images/web-icon.webp',
    title: 'Web Development',
    description: "I build responsive, dynamic websites using the latest technologies. From simple landing pages to complex web applications, I ensure optimal performance, scalability, and accessibility.",
  },
  {
    id: 2,
    icon: './images/mobile-icon.webp',
    title: 'Mobile Development',
    description: 'I develop robust mobile apps for iOS and Android using modern frameworks and best practices, ensuring smooth performance and a great user experience tailored to your needs.',
  },
]

export const Services = () => {
  return (
    <section id='services' className='block services-block'>
      <Title title='SERVICES' subtitle='Crafting Seamless Web and Mobile Experiences' />
      <Container>
        <Row>
          {
            services.map((service, index) => {
              return (
                <Col key={index} md={4}>
                  <div className='service'>
                    <div className='service-icon'>
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}
