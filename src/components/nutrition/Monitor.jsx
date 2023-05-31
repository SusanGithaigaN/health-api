import React from 'react'
import './Nutrition.css'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import Nutrition from './Nutrition';
import Track from './Track';
import Pagination from '../Pagination/Pagination';

export default function Monitor() {
  return (
    <div id='monitor'>
      <div id='header'>
      <MDBCard alignment='center' id='header-card'>
      <MDBCardHeader id='sub'>Monitor your eating habits</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle id='titles'>Why you should monitor what you eat</MDBCardTitle>
        <MDBCardText id='text'>
        When you're aware of what you're eating, you can make more informed food choices. This can help you<br /> choose foods that are healthy for you and that you enjoy
        </MDBCardText>
        {/* <MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
      </div>
      <div id='benefits-list'>
      <Nutrition />
      <Track />
      <Pagination />
      </div>
    </div>
  )
}
