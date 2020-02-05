import React from 'react';
import Video from './video';
import About from './about';

const Rectangle = ({data}) => {
  return(
    <div className='Rectange'>
      <Video link={data[0]} title={data[1]}/>
      <About title={data[1]} description={data[2]} links={data[3]}/>
    </div>
  );
}

export default Rectangle;
