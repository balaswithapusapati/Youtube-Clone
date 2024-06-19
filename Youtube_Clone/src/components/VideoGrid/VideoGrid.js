import React from 'react';
import './VideoGrid.scss';
import VideoPreview from '../VideoPreview/VideoPreview';
import { Divider } from 'semantic-ui-react';
import VideoGridHeader from './VideoGridHeader/VideoGridHeader';
export default function VideoGrid(props) {
  const divider = props.hideDivider ? null : <Divider />;

  return (
    <React.Fragment>
      <div className='video-section'>
        <VideoGridHeader title={props.title} />
        <div className='video-grid'>
          <VideoPreview />
        </div>
        {divider}
      </div>
    </React.Fragment>
  );
}
