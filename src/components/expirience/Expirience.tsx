import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { IoIosArrowDropdown } from "react-icons/io";
import './Expirience.css';

const expirience = [
  {
    id:1,
    company: 'Byron solutions (remote)',
    jobTitle: 'Frontend Developer',
    date: '2024 - Actual',
    description: 'As a Front-End Developer, I focused on creating reusable components with React, ensuring efficient development and consistent design. I also refactored code and fixed bugs to optimize performance. I adhered to best practices, including object-oriented programming, SOLID principles, and used hooks and portals for advanced functionality. This approach improved code maintainability and user experience. Additionally, I implemented unit testing with Vitest and React Testing Library to ensure robust and reliable code. This comprehensive approach improved code maintainability and significantly enhanced the user experience.',
    stack: ['React', 'HTML5', 'CSS', 'Git', 'Github', 'Figma', 'Trello', 'Discord'],
  },
  {
    id:2,
    company: 'Onvo sites (remote)',
    jobTitle: 'Frontend Developer',
    date: '2023 - 2024',
    description: 'As a Front-End Developer using React Native and Expo, I specialized in building reusable components to streamline development and maintain design consistency. I focused on refactoring code and fixing bugs to enhance performance. I followed best practices, including object-oriented programming, SOLID principles, and effectively utilized hooks and portals for advanced features. This ensured better code maintainability and significantly improved the user experience.',
    stack: ['React', 'React Native', 'Typescript', 'Expo', 'Firebase', 'Styled Components', 'Git', 'Bitbucket', 'Figma', 'Slack']
  },
  {
    id:3,
    company: 'Onvo sites (remote)',
    jobTitle: 'Frontend Developer',
    date: '2023 - 2024',
    description: 'As a Front-End Developer using React Native and Expo, I specialized in building reusable components to streamline development and maintain design consistency. I focused on refactoring code and fixing bugs to enhance performance. I followed best practices, including object-oriented programming, SOLID principles, and effectively utilized hooks and portals for advanced features. This ensured better code maintainability and significantly improved the user experience.',
    stack: ['React', 'React Native', 'Typescript', 'Expo', 'Firebase', 'Styled Components', 'Git', 'Bitbucket', 'Figma', 'Slack']
  },
]
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
    <section className='expirience-block'>
      <h5 className="title">WORK EXPIRIENCE</h5>
      <Container>
          {
            expirience.map((exp) => (
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
                  <p>{exp.description}</p>
                  <div className='work-stack'>
                    {
                      exp.stack.map((stack, index) => (
                        <span key={index}>{stack}</span>
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
