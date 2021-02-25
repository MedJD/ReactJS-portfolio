import React from 'react';
// import sections
import Hero from '../components/sections/About';
import FeaturesTiles from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Formations from '../components/sections/Formations';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Projects_view = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Formations invertMobile topDivider imageFill className="illustration-section-02" />
      <Projects invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Projects_view;