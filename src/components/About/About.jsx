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
    <div>
      <div id='header'>
      <MDBCard alignment='center' id='header-card'>
      <MDBCardHeader>Health benefits</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Why you should monitor what you eat</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
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
