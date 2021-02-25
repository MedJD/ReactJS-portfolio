import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Projects = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Academic projects',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
      <hr></hr>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

          <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Roger Skyline
                  </div>
                <h3 className="mt-0 mb-12">
                  Systems and Networks administration
                  </h3>
                  <h6 className=" mb-12 mt-0 fw-600 text-xxs">
                    VM Box, Debian 10, Apache, Fail2ban
                  </h6>
                <p className="m-0">
                This project is to learn some of basics commands and first reflexes in systems and networks administration. This one is a concrete example of the use of those commands and is let us start our own first web server and protect it from DOS Attacks and Ports Scan.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/roger.png')}
                  alt="Fractol pic"
                  />
              </div>
            </div>

          <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <a href="https://github.com/MedJD/Fractol">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Fract'ol
                  </div>
                  </a>
                <h3 className="mt-0 mb-12">
                  Fractal geometry
                  </h3>
                  <h6 className=" mb-12 mt-0 fw-600 text-xxs">
                    C, minilibX, Multithreading
                  </h6>
                <p className="m-0">
                Discovering 2D programming and the psychedelic universe of fractals in this project by creating a fractals manipulator, using minilibX.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <a href="https://github.com/MedJD/Fractol">
                <Image
                  src={require('./../../assets/images/fract.jpg')}
                  alt="Fractol pic"
                  />
                  </a>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <a href="https://github.com/MedJD/Wolf3D">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Wolf3D
                  </div>
                </a>
                <h3 className="mt-0 mb-12">
                  Raycasting Project
                  </h3>
                  <h6 className=" mb-12 mt-0 fw-600 text-xxs">
                    C, minilibX, Multithreading
                  </h6>
                <p className="m-0">
                Implementation of the Raycasting method to recreate the famous game Wolfeinstein.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <a href="https://github.com/MedJD/Wolf3D">
                <Image
                  src={require('./../../assets/images/wolf3d.png')}
                  alt="wolf3d pic"
                   />
                   </a>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <a href="https://github.com/MedJD/RT">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  RT
                  </div>
                  </a>
                <h3 className="mt-0 mb-12">
                  Raytracing project
                  </h3>
                  <h6 className=" mb-12 mt-0 fw-600 text-xxs">
                    C, minilibX, SDL, Multithreading
                  </h6>
                <p className="m-0">
                Implementation of the Raytracing method to obtain a synthetic image from a configuration file.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  <a href="https://github.com/MedJD/RT">
                <Image
                  src={require('./../../assets/images/rt.png')}
                  alt="RT pic"
                  />
                  </a>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  ComputerV2
                  </div>
                <h3 className="mt-0 mb-12">
                Mathematics interpreter
                  </h3>
                  <h6 className=" mb-12 mt-0 fw-600 text-xxs">
                    Python3
                  </h6>
                <p className="m-0">
                Creation of a powerful and easy to use interpreter which allows user to assign variables, make calculations (formulas, matrices, functions, complexes...), solve equations...
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/cpv2.png')}
                  alt="Fractol pic"
                  />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <a href="https://github.com/MedJD/Dr-Quine"><div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  DR-Quine
                  </div></a>
                <h3 className="mt-0 mb-12">
                  Self-reproduction theory
                  </h3>
                  <h6 className=" mb-12 mt-0 fw-600 text-xxs">
                    Assembly, C, C++, Quines Algorithms
                  </h6>
                <p className="m-0">
                Creation of a program capable of rewriting, modifying and recompiling its source code in 3 versions (Assembler, C, C++).
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  <a href="https://github.com/MedJD/Dr-Quine">
                <Image
                  src={require('./../../assets/images/quine.png')}
                  alt="Quine pic"
                  /></a>
              </div>
            </div>
            
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Darkly
                  </div>
                <h3 className="mt-0 mb-12">
                  Web security project
                  </h3>
                <p className="m-0">
                  Introductory project to computer security in the specific field of the web, this project aims to dissect a vulnerable website. In doing so, we have developed our own way of thinking about security in a web application and becoming aware of the problems linked to simple development errors.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/darkly.jpg')}
                  alt="Fractol pic"
                  />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;

export default Projects;