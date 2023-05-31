import React from 'react'
import './About.css'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import Benefits from './Benefits';

export default function About() {
  return (
    <div id='about'>
      <div id='header'>
      <MDBCard alignment='center' id='header-card'>
      <MDBCardHeader id='sub'>Health benefits</MDBCardHeader>
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
      <Benefits />
      </div>
    </div>
  )
}
