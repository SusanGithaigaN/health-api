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

import './About.css'

import reason from './Startled.gif';
import pineapple from './pineapple.gif';
import slush from './slush.gif';
// import Acorn from './Acorns.gif';
import drink from './drinking coconut.gif';
import corn from './Acorns (1).gif'
import img2 from './Instant information.gif'
import weights from './Weights.gif';
import workout from './Workout.gif';
import community from './Community.gif';

export default function Benefits() {
    return (
        <div>
            <div id='card1'>
                <MDBCard id='my-card'>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage src={reason} alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                {/* <MDBCardTitle id='titles'>Benefits of Eating Healthy</MDBCardTitle> */}
                                <MDBCardText id='text'>
                                    <img src={pineapple} height='80' width='80' />
                                    Reduces the risk of chronic diseases such as heart disease, stroke, diabetes, and cancer.
                                </MDBCardText>
                                <MDBCardText id='text'>
                                    <img src={workout} height='80' width='80' />
                                    Improves Heart Health
                                </MDBCardText>
                                <MDBCardText id='text'>
                                    <img src={slush} height='80' width='80' />
                                    Helps you maintain a healthy weight.
                                </MDBCardText>
                                <MDBCardText id='text'>
                                    <img src={drink} height='80' width='80' />
                                    Improves skin health.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </div>
            <div id='card2'>
                <MDBCard id='my-card'>
                    <MDBRow className='g-0'>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle id='titles'>More benefits</MDBCardTitle>
                                <MDBCardText id='text'>
                                    <img src={weights} height='80' width='80' />
                                    Helps Lose Weight
                                </MDBCardText>
                                {/* <MDBCardText id='text'>
                                    <img src={workout} height='80' width='80' />
                                    Helps you maintain a healthy weight.
                                </MDBCardText> */}
                                <MDBCardText id='text'>
                                    <img src={community} height='80' width='80' />
                                    Increases Immunity
                                </MDBCardText>
                                <MDBCardText id='text'>
                                    <img src={corn} height='80' width='80' />
                                    Strengthens bones and muscles.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBCardImage src={img2} alt='...' fluid />
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <div className='d-flex justify-content-center' style={{ paddingBottom: '4em' }}>
                    <MDBCardText>
                        <MDBBtn id='but'>
                            <Link to='/monitor'>
                                Monitor your eating
                            </Link>
                            <i class="fa fa-arrow-right" aria-hidden="true"></i></MDBBtn>
                    </MDBCardText>
                </div>
            </div>
        </div>
    );
}