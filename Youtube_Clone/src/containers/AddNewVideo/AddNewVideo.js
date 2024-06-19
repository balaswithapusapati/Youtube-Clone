import React, { Component } from 'react';
import './AddNewVideo.scss';
import { connect } from 'react-redux';
import { addNewVideo } from '../../Store/Actions/videoAction';
import { Link } from 'react-router-dom';

class AddNewVideo extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const videoId = this.getVideoId.value;
    const videoTitle = this.getVideoTitle.value;
    const thumbnail = this.getThumbnail.value;
    const viewCount = this.vievs.value;

    const data = {
      id: new Date(),
      videoId,
      videoTitle,
      thumbnail,
      viewCount,
    };

    this.props.dispatch(addNewVideo(data));
  };
  render() {
    return (
      <div className='input-box'>
        <h3>Add new Video</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type='text'
            ref={(input) => (this.getVideoId = input)}
            placeholder='Enter Video Id'
          />
          <br />
          <br />
          <input
            required
            type='text'
            ref={(input) => (this.getVideoTitle = input)}
            placeholder='Enter Video Title'
          />
          <br />
          <br />
          <input
            required
            type='text'
            ref={(input) => (this.getThumbnail = input)}
            placeholder='Enter Thumbnail URL'
          />
          <br />
          <br />
          <input
            required
            type='text'
            ref={(input) => (this.vievs = input)}
            placeholder='Enter Views Count'
          />
          <br />
          <br />
          {/* <Link to='/watch'> */}
          <button>Submit</button>
          {/* </Link> */}
        </form>
      </div>
    );
  }
}
export default connect()(AddNewVideo);
