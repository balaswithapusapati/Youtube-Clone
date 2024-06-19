import React from 'react';
import './Comments.scss';
import { Button, Form, FormControl, Image } from 'react-bootstrap';

export default function Comments() {
  return (
    //   Comments header
    <div>
      <div className='comments-header'>
        <h5>{1000} Comments</h5>
      </div>
      {/* Add new comments */}
      <div className='add-comment'>
        <Image
          className='user-image'
          src='http://via.placeholder.com/48x48'
          circular
        />
        <Form>
          <FormControl placeholder='Add a public comment...' />
        </Form>
      </div>
      {/* Show comments */}
      <div>
        <div className='comment user-name'>Ashish Ambule</div>
        <span>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book
        </span>
        <div className='comment-actions'>
          {/* <Rating likeCount={1} />{' '} */}
          <Button variant='link'>REPLY</Button>
        </div>
      </div>
      <div>
        <div className='comment user-name'>Ashish Ambule</div>
        <span>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book
        </span>
        <div className='comment-actions'>
          {/* <Rating likeCount={1} />{' '} */}
          <Button variant='link'>REPLY</Button>
        </div>
      </div>
    </div>
  );
}
