import { Container } from 'react-bootstrap';
import './About.css';
export const About = () => {
  return (
    <section  className='block about-block'>
      <Container>
        <h5 className="title">ABOUT ME</h5>
        <div className='description-container'>
          <p >
          I am a proactive and enthusiastic team player, eager to share my skills and experience to achieve goals. I aim to develop professionally and continuously enhance my abilities to provide better solutions.
          </p>
        </div>
      </Container>
    </section>
  )
}
