import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardImage
} from 'mdb-react-ui-kit';

const Nutrition = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://keto-diet.p.rapidapi.com/';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4a1fb52c8cmshf903322185999c4p16ed13jsn69168c2f11c1',
          'X-RapidAPI-Host': 'keto-diet.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <MDBRow>
      {data.map((item) => (
        <MDBCol sm='4' key={item.id} style={{marginBottom: '3em'}}>
          <MDBCard>
          <MDBCardImage src={item.image} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>{item.recipe}</MDBCardTitle>
              <MDBCardText>
                <ul>
                  <li>Prep Time: {item.prep_time_in_minutes} minutes</li>
                  <li>Cook Time: {item.cook_time_in_minutes} minutes</li>
                  <li>Difficulty: {item.difficulty}</li>
                  <li>Servings: {item.serving}</li>
                  <li>Calories: {item.calories}</li>
                  <li>Fat: {item.fat_in_grams} grams</li>
                  <li>Carbohydrates: {item.carbohydrates_in_grams} grams</li>
                  <li>Protein: {item.protein_in_grams} grams</li>
                </ul>
              </MDBCardText>
              {/* <MDBBtn href={item.source_url}>Go somewhere</MDBBtn> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  );
};

export default Nutrition;
