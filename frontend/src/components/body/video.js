import React from 'react';

const Video = ({link, title}) => {
  return (
    <div className='backgroundColor'>
      <iframe
        src={link}
        allowFullScreen
        className='video'
        title={title}
      >
        Video unsuccessfully loaded
      </iframe>
    </div>
  );
}

export default Video;
