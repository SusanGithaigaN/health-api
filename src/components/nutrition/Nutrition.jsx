import React, { useEffect, useState } from 'react';
import './Nutrition.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCardImage,
    MDBRipple
} from 'mdb-react-ui-kit';

export default function Nutrition() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '4a1fb52c8cmshf903322185999c4p16ed13jsn69168c2f11c1',
                    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result.hints.map((hint) => hint.food)); // Mapping all objects from the hints array
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
        console.log(data);
    }, []);


    // return <div>Fetching data...</div>;

    return (
        <div id='nutrition'>
            {isLoading ? (
                <div>Fetching data...</div>
            ) : (
                <MDBRow>
                    {data.map((food) => (
                        <MDBCol sm='4' key={food.foodId} style={{ marginBottom: '5em', paddingRight: '2em' }}>
                            <MDBCard>
                                <MDBCardImage position='top' alt='...' src={food.image} id='food-image' />
                                <MDBCardBody>
                                    <MDBCardTitle>Category: {food.category} / {food.categoryLabel}</MDBCardTitle>
                                    <MDBCardText>Known as: {food.knownAs}</MDBCardText>
                                    <MDBCardText>
                                        {/* Nutrients: {data.food.nutrients} */}
                                    </MDBCardText>
                                    <MDBBtn href='#' id='nutrient-card'>View nutrients</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            )}
        </div>
    );
}