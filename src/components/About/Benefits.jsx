import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import reason from './Startled.gif';
import pineapple from './pineapple.gif';
import slush from './slush.gif';
import Acorn from './Acorns.gif';
import drink from './drinking coconut.gif';
import corn from './Acorns (1).gif'
export default function Benefits() {
  return (
    <MDBCard>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={reason} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle id='titles'>Benefits of Eating Healthy</MDBCardTitle>
            <MDBCardText id='text'>
            <img src={pineapple} height='80' width='80'/>
            Reduces the risk of chronic diseases such as heart disease, stroke, diabetes, and cancer.
            </MDBCardText>
            <MDBCardText id='text'>
            <img src={Acorn} height='80' width='80'/>
            Improves mood and cognitive function.
            </MDBCardText>
            <MDBCardText id='text'>
            <img src={slush} height='80' width='80'/>
            Helps you maintain a healthy weight.
            </MDBCardText>
            <MDBCardText id='text'>
            <img src={drink} height='80' width='80'/>
            Improves skin health.
            </MDBCardText>
            <MDBCardText id='text'>
            <img src={corn} height='80' width='80'/>
            Strengthens bones and muscles.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}