import { Button, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Formik, FormikHelpers } from "formik";

import * as Yup from 'yup';
import './ContactForm.css';

interface FormValues {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  code: string;
  message: string;
}

export const ContactForm = () => {

  const schema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Requirede'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    code: Yup.string().required('Code is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmitForm = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm(); // Resetea el formulario después de enviarlo
    }, 500);
  }

  return (
    <Row>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          city: '',
          state: '',
          code: '',
          message: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmitForm}
        validateOnBlur
        validateOnChange={false}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
          <Form className="contact-form" noValidate onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationFormik101" className="position-relative">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={touched.firstName && !!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationFormik102" className="position-relative">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  name='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={touched.lastName && !!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group 
                as={Col} 
                md="6" 
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>City</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="City" 
                  name='city'
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.city && !errors.city}
                  isInvalid={touched.city && !!errors.city}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="State" 
                  name='state'
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.state && !errors.state}
                  isInvalid={touched.state && !!errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Zip code</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Zip Code" 
                  name='code'
                  value={values.code}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.code && !errors.code}
                  isInvalid={touched.code && !!errors.code}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.code}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="12">
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  placeholder="Enter your message" 
                  name='message'
                  id='message'
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.message && !errors.message}
                  isInvalid={touched.message && !!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button className="mb-5 ps-5 pe-5" variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Row>
  )
}
