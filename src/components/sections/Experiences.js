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

const Experiences = ({
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
    title: 'Professional experiences',
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
                National Centre of Scientific and Technical Research (CNRST) | Rabat, Morocco
                  </div>
                  
                <h3 className="mt-0 mb-12">
                  4 months internship
                  </h3>
                  <h6 className=" mb-12 mt-0 fw-600 text-xxs">
                    C++, SQL, Qt
                  </h6>
                <p className="m-0">
                Design and realisation of an asset management and inventory application within CNRST (flexible database with interface).
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                
                <Image
                  src={require('./../../assets/images/cnrst.jpg')}
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

Experiences.propTypes = propTypes;
Experiences.defaultProps = defaultProps;

export default Experiences;