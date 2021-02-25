import React, { useRef, useEffect } from 'react';
import ScrollReveal from './utils/ScrollReveal';


import Footer from './components/sections/Footer';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Formations from './components/sections/Formations';
import Contact from './components/sections/Contact';
import Header from './components/sections/Header';
import Experiences from './components/sections/Experiences';
// Layouts

// Views 

const App = () => {

  const childRef = useRef();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <div className='App'>
          <Header id={'Header'}/>
          <About id={'About'} />
          <Formations id={'Formations'}/>
          <Skills id = {'Skills'}/>
          <Experiences id={'Experiences'}/>
          <Projects id={'Projects'}/>
          <Contact id={'Contact'}/>
          <Footer id={'Footer'}/>
          
        </div>
      )} />
  );
}

export default App;