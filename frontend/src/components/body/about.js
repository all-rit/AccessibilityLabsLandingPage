import React from 'react';

const About = ({title, description, links}) => {
  if (links === undefined) {
    links = [null, null, null];
  }

  return (
    <div className='backgroundColor'>
      <p className='aboutTitle'>
        {title}
      </p>
      <p className='description'>
        {description}
      </p>
      <div className='links'>
        <p className='backgroundColor textColorSwap'>
          Visit this lab's webpage
            <a href={links[0]} className='backgroundColor'>here</a>
          .
        </p>
        <p className='backgroundColor textColorSwap'>
          Visit this lab's case study
            <a href={links[1]} className='backgroundColor'>here</a>
          .
        </p>
        <p className='backgroundColor textColorSwap'>
          And visit this lab's about page
            <a href={links[2]} className='backgroundColor'>here</a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
