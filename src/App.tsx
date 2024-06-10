import './App.css'
import { Contact } from './components/contanct/Contact';
import { Education } from './components/education/Education';
import { Header } from './components/navbar/Header';
import { SideBar } from './components/sidebar/SideBar';
import {  Box, Grid } from '@mui/material';
import useWindowWidth from './hooks/useWindowWidth';
import { Languages } from './components/languages/Languages';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Expirience } from './components/expirience/Expirience';

function App() {
  const windowWidth = useWindowWidth();

  return (
    <Box sx={{height:'100vh', background:'#000'}} >
      <Grid container columnSpacing={1}>
        {
          windowWidth > 1224 &&           
            <Grid item xs={3}  >
              <SideBar>
                <Contact />
                <Education />
                <Languages />
              </SideBar>
            </Grid>
        }
        <Grid item xs={windowWidth > 1224 ? 9 : 12} >
          <Box >
            <section className='main-page'>
              <Header />
              <About />
              <div className='separator'></div>
              <Skills />
              <div className='separator'></div>
              <Projects />
              <div className='separator'></div>
              <Expirience />
            </section>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
