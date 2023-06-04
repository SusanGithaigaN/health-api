import React from 'react';
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
import Nutritionlink from '../Pagination/Nutritionlink';
// import Mexican from './Mexican';


export default function Monitor() {


  return (
    <div id='monitor'>
      <div id='header'>
    <Track />
      </div>
      <div id='benefits-list'>
      <MDBCard alignment='center' id='header-card'>
      {/* <MDBCardHeader style={{color: 'red'}}>Site is currently under development</MDBCardHeader> */}
      <MDBCardHeader id='sub'>Monitor your eating habits</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle id='titles'>Find recipes that fit your dietary needs.</MDBCardTitle>
        <MDBCardText id='text'>
        Whether you're following a vegan diet, a gluten-free diet, or something else, we have recipes that will fit your needs. Our nutrition info catalogue includes recipes for all types of meals, including breakfast, lunch, dinner, and snacks.
        </MDBCardText>
        {/* <MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
      <Nutrition />
      {/* <Pagination /> */}
      <Nutritionlink />
      </div>
    </div>
  )
}
