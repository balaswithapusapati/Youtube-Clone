import React, { Component } from 'react';
import './VideoPreview.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class VideoPreview extends Component {
  imageClicked = () => {};
  render() {
    const horizontal = this.props.horizontal ? 'horizontal' : null;
    const videoInfoObj = this.props;

    return (
      <div>
        <div className={['video-preview', horizontal].join(' ')}>
          <div className='image-container'>
            <Link to='/watch'>
              <img
                src='https://i.ytimg.com/vi/Xcy2DzvvB7s/default.jpg'
                alt='thumbnail'
                onClick={this.imageClicked}
              />
            </Link>
          </div>

          <div className='video-info'>
            <div className='semi-bold show-max-two-lines'>
              Caterpillar 777 Mining Truck - Like Driving A Three-Storey
              Building
            </div>
            <div className='video-preview-metadata-container'>
              <div>
                <span>4.2M</span>
              </div>
            </div>
          </div>
        </div>
        {videoInfoObj.posts.map((video, index) => (
          <div className={['video-preview', horizontal].join(' ')}>
            <div className='image-container'>
              <Link to='watch'>
                <img
                  src={video.thumbnail}
                  alt='thumbnail'
                  onClick={this.imageClicked()}
                />
              </Link>
            </div>

            <div className='video-info'>
              <div className='semi-bold show-max-two-lines'>
                {video.videoTitle}
              </div>
              <div className='video-preview-metadata-container'>
                <div>
                  <span>{video.viewCount}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(VideoPreview);
