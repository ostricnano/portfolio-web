import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { IoIosArrowDropdown } from "react-icons/io";
import './Expirience.css';
import { Title } from '../title/Title';
import { workExperience } from '../../constants';

export const Expirience = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleExperience = (index: number) => {
    setActiveIndexes((prevIndexes) => 
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <section id='expirience' className=' block expirience-block'>
      <Title title='EXPERIENCE' subtitle='Professional Journey and Achievements' />
      <Container>
          {
            workExperience.map((exp) => (
              <div className='work-block' key={exp.id}>
                <div className='work-header'>
                  <p>{exp.company}</p>
                  <div>
                    <p>{exp.date}</p>
                    <button 
                      className='btn' 
                      onClick={() => toggleExperience(exp.id - 1)}
                    >
                      <IoIosArrowDropdown 
                        color={'#ababab'} 
                        size={24} 
                        className={activeIndexes.includes(exp.id - 1) ? 'icon-rotated' : 'icon'}  
                      />
                    </button>
                  </div>
                </div>
                <div className={`work-description ${activeIndexes.includes(exp.id - 1) ? 'show' : ''}`}>
                  <p>{exp.jobTitle}</p>
                  <p className='description-text'>{exp.description}</p>
                  <div className='work-stack'>
                    <p>Tools and Technologies Utilized</p>
                    {
                      exp.stack.map((stack, index) => (
                        <span key={index}>-{stack}</span>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
      </Container>
    </section>
  )
}
