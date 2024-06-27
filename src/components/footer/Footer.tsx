import { Col, Container, Row } from 'react-bootstrap'
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import './Footer.css'

export const Footer = () => {
  return (
    <section className='footer'>
      <Container>
        <Row className='footer-row'>
          <Col md={6}>
          <div className='footer-description'>
            <div className='avatar-container-footer'>
              <img src='./images/profile-picture02.png' alt='profile' className='profile-img-footer' />
            </div>
            <p>Passionate web developer specializing in creating responsive and interactive web applications. Skilled in HTML, CSS, Sass, JavaScript, and React Native. Dedicated to delivering high-quality code and user-friendly designs. Let's work together to bring your ideas to life!</p>
          </div>
          </Col>
          <Col md={3}>
            <div className='list-items'>
              <ul>
                <h4>About</h4>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Post</li>
                <li>Skills</li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className='list-items'>
              <ul>
                <h4>Contact Me</h4>
                <li>
                  <a href='https://www.linkedin.com/in/mariano-ostric-719890100/' target='_blank'>
                    <IoLogoLinkedin />
                  </a>
                  Linkedin
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/mariano-ostric-719890100/' target='_blank'>
                    <FaPhone />
                  </a>
                  (+54) 9 11 6523-4000
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/mariano-ostric-719890100/' target='_blank'>
                    <IoMail />
                  </a>
                  Ostricmarino@gmail.com
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/mariano-ostric-719890100/' target='_blank'>
                    <IoLocation />
                  </a>
                  Buenos Aires, Argentina
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='rights'>
        <p className='footer-text'>© 2021 Mariano Ostric. All Rights Reserved.</p>
      </div>
    </section>
  )
}
