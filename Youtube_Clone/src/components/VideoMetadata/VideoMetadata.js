import React from 'react';
import './VideoMetadata.scss';

export default function VideoMetadata() {
  // const viewCount = Number(props.viewCount).toLocaleString() || '';
  const viewCount = 100;
  return (
    <div className='video-metadata'>
      <h3>Video title</h3>
      <div className='video-stats'>
        <span>{viewCount} views</span>
        <div>{/*TODO*/}</div>
      </div>
    </div>
  );
}
