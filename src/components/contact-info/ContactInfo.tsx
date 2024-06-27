import { Col, Row } from 'react-bootstrap';
import { IoLogoVercel } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import './ContactInfo.css';

const contactInfo = [
  {
    icon: <FaPhone size={50} />,
    text: '(+54) 9 11 6523-4000',
  },
  {
    icon: <IoMail size={50} />,
    text: 'ostricmariano@gmail.com',
  },
  {
    icon: <IoLocation size={50} />,
    text: 'Buenos Aires, Argentina',
  },
  {
    icon: <IoLogoLinkedin size={50} />,
    text: 'mariano-ostric',
    url: 'https://www.linkedin.com/in/mariano-ostric-719890100/'
  },
  {
    icon: <IoLogoGithub size={50} />,
    text: 'ostricnano',
    url: 'https://github.com/ostricnano'
  },
  {
    icon: <IoLogoVercel size={50} />,
    text: 'ostricnano-projects',
    url: 'https://vercel.com/ostricnanos-projects'
  }
  
]
export const ContactInfo = () => {
  return (
      <div className='info-block'>
        <Row>
            {
              contactInfo.map((info, index) => (
                <Col md={6} key={index}>
                  <div  className='contact-info'>
                    <div className='icon'>
                      {info.icon}
                    </div>
                    <a href={info.url} target="_blank">
                      <p className='text'>{info.text}</p>
                    </a>
                  </div>
                </Col>
              ))
            }
        </Row>
      </div>
  )
}
