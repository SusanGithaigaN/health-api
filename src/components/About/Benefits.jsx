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
import reason from './Startled.gif'

export default function Benefits() {
  return (
    <MDBCard>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={reason} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Benefits of Eating Healthy</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}