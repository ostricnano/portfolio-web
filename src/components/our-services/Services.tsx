import { Col, Container, Row } from 'react-bootstrap';
import { Title } from '../title/Title';
import useInView from '../../hooks/useInView';
import { motion } from "framer-motion";
import './Services.css';
import { services } from '../../constants';


export const Services = () => {
  const [ref, isInView ] = useInView<HTMLDivElement>({
    threshold: 0.1  // Ajusta el umbral según sea necesario
  });

  return (
    <section id='services' className='block services-block'>
      <Title title='SERVICES' subtitle='Crafting Seamless Web and Mobile Experiences' />
      <Container>
        <Row>
          {
            services.map((service) => {
              return (
                <Col key={service.id} md={4}>
                  <motion.div 
                    className='service'
                    ref={ref}  // Añade la referencia al contenedor
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}  // Inicia la animación solo si está en vista
                    transition={{
                      duration: 2,
                      delay: 1,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                  >
                    <div className='service-icon'>
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </motion.div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}
