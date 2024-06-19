import React, { Component } from 'react';
import './HeaderNavbar.scss';
import logo from '../../assets/images/youtube-logo-nuovo-banner.jpg';
import { Button, Navbar, Form, FormControl, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class HeaderNavbar extends Component {
  render() {
    return (
      <Navbar className='bg-light justify-content-between'>
        <Row>
          <Link to='/watch'>
            <Image className='logo' src={logo}></Image>
          </Link>
        </Row>
        <Form inline>
          <FormControl type='text' placeholder='Search' className=' mr-sm-2' />
          <Button type='submit'>Submit</Button>
        </Form>

        <div>
          <Link to='/addNew'>
            <Button>Add New Video</Button>
          </Link>
        </div>
      </Navbar>
    );
  }
}
