import React, { Component } from 'react';
import './SideBar.scss';
import SideBarItem from './SideBarItems/SideBarItem';
export default class SideBar extends Component {
  render() {
    return (
      <div className='side-nav'>
        <SideBarItem title='Home' />
        <SideBarItem title='Home' />
        <SideBarItem title='Home' />
        <SideBarItem title='Home' />
        <SideBarItem title='Home' />
      </div>
    );
  }
}
