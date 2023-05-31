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
import Video from './Video';

export default function Track() {
  return (
    <div id='track'>
      <div id='header'>
      <MDBCard alignment='center' id='header-card'>
      <MDBCardHeader id='sub'>Learn more</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle id='titles'>Learn to monitor your eating habits</MDBCardTitle>
        <MDBCardText id='text'>
        If you are interested in learning more about how to monitor your eating habits, there are many resources available. Your doctor or a registered dietitian can provide you with more information and support. There are also many books, websites, and apps that can help you to track your eating habits and make healthy changes to your diet.
        </MDBCardText>
      </MDBCardBody>
      {/* youtube video */}
      <Video />
    </MDBCard>
      </div>
    </div>
  )
}
