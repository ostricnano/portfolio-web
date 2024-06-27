import './About.css';
import { Title } from '../title/Title';

export const About = () => {
  return (
    <div className='about-block'>
        <div className='avatar-container'>
          <img src='./images/profile-picture02.png' alt='profile' className='profile-img' />
        </div>
        <Title title='ABOUT ME' subtitle='Passionate Developer Crafting Digital Solutions' />
        <div className='description'>
          <p>
          I am a proactive and enthusiastic person. I enjoy working in dynamic teams where I can share my skills and experience to achieve the team's goals. My personal objective is to develop myself in a professional environment and continue enhancing my skills to provide better solutions.
          </p>
        </div>
    </div>
  )
}
