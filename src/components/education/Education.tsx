import ListGroup from 'react-bootstrap/ListGroup';
import './Education.css'

export const Education = () => {
  return (
    <section className="education-block">
      <h5 className="title">EDUCATION</h5>
      <ListGroup className='list-group'>
        <ListGroup.Item >
          <h6 className="subtitle">Managment of technological infrastructure</h6>
          <div className='institution-container'>
            <p className="text">Universidad Siglo 21</p>
            <p className="text-date">Actually</p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item >
          <h6 className="subtitle">Certified tech developer</h6>
          <div className='institution-container'>
            <p className="text">Digital house</p>
            <p className="text-date">2021</p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item >
          <h6 className="subtitle">University of Bs As</h6>
          <div className='institution-container'>
            <p className="text">Architect Degree</p>
            <p className="text-date">20216</p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item >
          <h6 className="subtitle">Bachelor Degree</h6>
          <div className='institution-container'>
            <p className="text">San juan School</p>
            <p className="text-date">2008</p>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </section>
  )
}
