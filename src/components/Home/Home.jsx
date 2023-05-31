import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Home.css'
import avocado from './avocado.avif'
import a from './anavocado.jpg'
import About from '../About/About';
export default function Home() {
  return (
    <div id='home'>
      <MDBCard id='home-card'>
        <MDBRow className='g-0'>
          {/* <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol> */}
          <MDBCol md='4'>
            <MDBCardBody>
              <MDBCardTitle id='title'>
                Avocad
                <img src={a} width='auto' height='80' />
              </MDBCardTitle>
              <MDBCardText>
                The avocado is a rather unique fruit, while most fruit <br />
                consists primarily of carbohydrates, avocado is high in health fats
              </MDBCardText>
              <MDBCardText>
                <MDBBtn id='buto'>Help prevent illness</MDBBtn>
              </MDBCardText>
              <MDBCardText>
                <MDBBtn id='but'>Boost immune system</MDBBtn>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardImage src={avocado} alt='...' fluid />
          </MDBCol>
        </MDBRow>
      </MDBCard>
      <div id='pages'>
      <About />
      </div>
    </div>
  );
}