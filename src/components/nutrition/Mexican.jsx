// export default function Mexican() {
    import React, { useState, useEffect } from 'react';
    import {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBRow,
      MDBCol,
      MDBBtn
    } from 'mdb-react-ui-kit';
    
    export default function Mexican() {
      const url = 'https://the-mexican-food-db.p.rapidapi.com/';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4a1fb52c8cmshf903322185999c4p16ed13jsn69168c2f11c1',
          'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
        }
      };
    
      const [data, setData] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error(error);
          }
        };
        console.log(data);
        fetchData();
      }, []);
    
      return (
        <MDBRow>
          {data.map((item) => (
            <MDBCol key={item.id} sm='4'>
              <MDBCard>
                <MDBCardBody>
                <MDBCardText>
                    <img src={item.image} alt={item.title} style={{ width: '100%' }} />
                  </MDBCardText>
                  <MDBCardTitle>Dish Title: {item.title}</MDBCardTitle>
                  <MDBCardText>Cooking difficulty: {item.difficulty}</MDBCardText>
                  {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      );
    };
    
    // export default DataComponent;
    