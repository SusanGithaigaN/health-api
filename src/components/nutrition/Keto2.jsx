import React, { useState, useEffect } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardImage,
    MDBCardHeader
} from 'mdb-react-ui-kit';
import './Nutrition.css'
import Nutritionlink from '../Pagination/Nutritionlink';
import Search from './Search';

const Keto2 = () => {
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
        <div id='keto-body'>
        <Search />
        <MDBRow>
        <MDBCardHeader id='subt'>More nutrition info</MDBCardHeader>
            {data.slice(72,141).map((item) => (
                <MDBCol sm='2' key={item.id} style={{ marginBottom: '3em' }}>
                    <MDBCard className='h-100' id='keto-card'>
                        <MDBCardImage src={item.image} position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle>Recipe: {item.recipe}</MDBCardTitle>
                            {/* <MDBCardText>Prep Time: {item.prep_time_in_minutes} minutes</MDBCardText>
                            <MDBCardText>Cook Time: {item.cook_time_in_minutes} minutes</MDBCardText>
                            <MDBCardText>Difficulty: {item.difficulty}</MDBCardText>
                            <MDBCardText>Servings: {item.serving}</MDBCardText> */}
                            
                            <MDBCardText>Calories: {item.calories}</MDBCardText>
                            <MDBCardText>Fat: {item.fat_in_grams} grams</MDBCardText>
                            <MDBCardText>Carbohydrates: {item.carbohydrates_in_grams} grams</MDBCardText>
                            <MDBCardText>Protein: {item.protein_in_grams} grams</MDBCardText>
                            {/* <MDBBtn href={item.source_url}>Go somewhere</MDBBtn> */}
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            ))}
        </MDBRow>
        <Nutritionlink />
        </div>
    );
};

export default Keto2;
