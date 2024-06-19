import React from 'react';
import './VideoPlayList.scss';
import VideoPreview from '../VideoPreview/VideoPreview';
import { connect } from 'react-redux';

function VideoPlayList(props) {
  const videoObj = props.video;

  return (
    <div className='videos-playlist'>
      <VideoPreview horizontal={true} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  video: state,
});
export default connect(mapStateToProps)(VideoPlayList);
