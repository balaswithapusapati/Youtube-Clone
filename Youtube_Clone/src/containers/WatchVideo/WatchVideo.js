import React, { Component } from 'react';
import Video from '../../components/Video/Video';
import VideoPlayList from '../../components/VideoPlayList/VideoPlayList';
import './WatchVideo.scss';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';
import Comments from '../Comments/Comments';
import { fetchProductsSuccess } from '../../Store/Actions/videoAction';
import { connect } from 'react-redux';

class WatchVideo extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProductsSuccess());
  }

  render() {
    const videoObj = this.props;
    const loadVideo = videoObj.video.length == 0 ? true : false;
    const renderVideo = () => {
      if (loadVideo) {
        return <Video className='video' id='Xcy2DzvvB7s' />;
      } else {
        return videoObj.video.map((video, index) => (
          <Video className='video' id={video.videoId} />
        ));
      }
    };
    return (
      <div className='watch-grid'>
        {renderVideo()}
        <VideoMetadata className='metadata' viewCount={1000} />
        <Comments />
        <VideoPlayList className='videos-playlist' />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  video: state,
});
export default connect(mapStateToProps)(WatchVideo);
