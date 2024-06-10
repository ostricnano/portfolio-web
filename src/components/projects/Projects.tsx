import { Col, Container, Row } from 'react-bootstrap';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'EcoWave us',
    description: 'Website for a company that provides services for installation of ev-chargers, heat pumps and energy storage.',
    stack: ['React.js', 'Styled components', 'Git & Github', 'Vercel deploy'],
    image: './images/ecoWave.jpg',
    url: 'https://ecowaveus.com/',
  },
  {
    id: 2,
    name: 'M|A Architects',
    description: 'Personal website for an architect that showcases his projects and services.',
    stack: ['React.js', 'React bootstrap', 'Git & Github','Vitest',' React testing library','Vercel deploy'],
    image: './images/arquitect.jpg',
    url: 'https://arquitect-page.vercel.app/',
  },
  {
    id: 3,
    name: 'Corporet Page',
    description: 'A landing page for a company who wants to show their services, temas, works, contact forms and others funcionalities.',
    stack: ['React.js', 'React bootstrap', 'Git & Github','Vitest',' React testing library','Vercel deploy'],
    image: './images/corporet.jpg',
    url: 'https://corporet-page.vercel.app/',
  },
  {
    id: 4,
    name: 'Crema App',
    description:  "A mobile app for a soccer team, featuring news, live scores, league standings, team statistics, fixtures, and more.",
    stack: ['ReactNative.js', 'Expo', 'Git & Github','styled components' ,'Deploy in App Store and Google Play Store'],
    image: './images/comunicaciones.png',
    url: 'https://apps.apple.com/gt/app/crema-app-oficial/id6470518256',
  },
  {
    id: 5,
    name: 'Jamming App',
    description: 'Website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.',
    stack: ['ReactNative.js', 'Expo', 'Git & Github','Css' ,'Vercel deploy'],
    image: './images/spotify.jpg',
    url: 'https://apps.apple.com/gt/app/crema-app-oficial/id6470518256',
  },
  {
    id: 6,
    name: 'Future World',
    description: 'On line eccomerce made with next.js and shoppyfy.',
    stack: ['Next.js', 'Shoppyfy','Git & Github','Sass' ,'Vercel Deploy'],
    image: './images/futureWorld.png',
    url: 'https://apps.apple.com/gt/app/crema-app-oficial/id6470518256',
  },
]
export const Projects = () => {
  return (
    <section id='projects' className='projects-block'>
      <h5 className="title">PROJECTS</h5>
      <Container fluid>
        <Row>
          {
            projects.map((project) => (
              <Col sm={4} key={project.id}>
                <a href={project.url} target="_blank">
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
                    </div>
                  </div>
                </a>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>

  )
}
