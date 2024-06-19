import React, { Component } from 'react';
import VideoGrid from '../../components/VideoGrid/VideoGrid';
import './Home.scss';
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='home'>
          <div className='responsive-video-grid-container'>
            <VideoGrid title='Trending' />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
