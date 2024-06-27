import { Col, Container, Row } from "react-bootstrap"
import { Title } from "../title/Title"
import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"

export const ContactBlock = () => {
  return (
    <section id='contact-me' className="block contact-block">
      <Title title='Contact-us' subtitle='get connected with us' />
      <Container >
        <Row>
          <Col md={6}>
            <ContactInfo />
          </Col>
          <Col md={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
