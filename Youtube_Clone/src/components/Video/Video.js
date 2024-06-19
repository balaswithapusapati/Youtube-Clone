import React from 'react';
import './Video.scss';

const EMBED_URL_YOUTUBE = 'https://www.youtube.com/embed/';
export default function Video(props) {
  if (!props.id) {
    return null;
  }
  const embedURL = ` ${EMBED_URL_YOUTUBE}${props.id}`;
  //   const embedURL = `${BASE_EMBED_URL}${props.id}?autoplay=1`;   /* to autoplay */
  return (
    <div className='video-container'>
      <div className='video'>
        <iframe
          className='video-player'
          src={embedURL}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>
    </div>
  );
}
