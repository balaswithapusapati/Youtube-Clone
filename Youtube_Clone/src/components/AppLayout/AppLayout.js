import React from 'react';
import HeaderNavbar from '../../containers/HeaderNavbar/HeaderNavbar';

export default function AppLayout(props) {
  return (
    <div className='app-layout'>
      <HeaderNavbar />
      {props.children}
    </div>
  );
}
