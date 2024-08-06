import { Col, Container, Row } from 'react-bootstrap';
import './Projects.css';
import { Title } from '../title/Title';
import { projects } from '../../constants';


export const Projects = () => {
  return (
    <section id='projects' className='block projects-block'>
      <Title title='PROJECTS' subtitle='Some of my recent works' />
      <Container fluid>
        <Row>
          {
            projects.map((project) => (
              <Col sm={4} key={project.id}>
                <div className='container-project'>
                  <img className='img-projects' src={project.image} alt="projects" />
                  <div className='overlay-description'>
                    <h5>{project.name}</h5>
                    <p>{project.description}</p>
                    <h5>Stack</h5>
                    {
                      project.stack.map((stack, index) => (
                        <li key={index}>{stack}</li>
                      ))
                    }
                    <div className='btn-wrapper'>
                      <a href={project.url} target='blank'>Live link</a>
                      <a href={project.repoLink} target='blank'>Github Repo</a>
                    </div>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>

  )
}
