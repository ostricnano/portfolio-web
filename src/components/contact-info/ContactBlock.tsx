import { Col, Container, Row } from "react-bootstrap"
import { Title } from "../title/Title"
import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"
import './ContactBlock.css'

export const ContactBlock = () => {
  return (
    <section id='contact-me' className="block contact-block">
      <Title title='Contact-us' subtitle='get connected with us' />
      <Container >
        <Row>
          <Col sx={6}>
            <ContactInfo />
          </Col>
          <Col sx={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
