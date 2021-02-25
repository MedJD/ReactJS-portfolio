import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Skills = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Skills',
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
          <br/><br/><br/>
          <SectionHeader data={sectionHeader} className="center-content" />
          
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/back.png')}
                      alt="Back-end pic"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Back-end Developpement
                  </div>
                 
                  <p className="m-0 text-sm">
                    Python / Django / RestAPI
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/front.png')}
                      alt="Front-end pic"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Front-end Developpement
                  </div>
                  <p className="m-0 text-sm">
                    HTML / CSS / Javascript / ReactJS
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/mobile.png')}
                      alt="Mobile pic"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Mobile Developpement (Basic)
                </div>
                  <p className="m-0 text-sm">
                    Python / Kivy
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/database.png')}
                      alt="Database pic"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Databases
                  </div>
                  <p className="m-0 text-sm">
                    SQL / MySQL / SQLlite / ORM
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/desktop.png')}
                      alt="Desltop pic"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Programming languages
                  </div>
                  <p className="m-0 text-sm">
                    Assembly / C / C++ / Python / Shell scripting
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/security.png')}
                      alt="Security pic"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Web/Servers Security (Basic)
                </div>
                  <p className="m-0 text-sm">
                    SQL injections / Port scans / DOS Attacks / XSS / Redirections ...
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Skills.propTypes = propTypes;
Skills.defaultProps = defaultProps;

export default Skills;