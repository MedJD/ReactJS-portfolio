import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Contact = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container mt-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
      <hr></hr>
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Contact informations<br/><br/><br/>
            </h3>
            <h6 className="m-0">
              Discuss a project or just want to say Hi ?<br/> My inbox is open for all :<br/><br/>
            </h6>
            <p className="m-0">
              Mohammed ELJADI<br/>
              +212 708 97 1337<br/>
              eljadi.med@gmail.com<br/>
              Yassmina II, 25000, Khouribga, Morocco
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;