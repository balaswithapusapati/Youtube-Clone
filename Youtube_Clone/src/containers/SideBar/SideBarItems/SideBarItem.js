import React from 'react';
import { Home } from '../../../assets/Icons/Home.svg';
import { ListGroup, Row } from 'react-bootstrap';
export default function SideBarItem(props) {
  return (
    <ListGroup class='LeftItems'>
      <ListGroup.Item class='LeftItems-item'>{props.title}</ListGroup.Item>
    </ListGroup>
  );
}
