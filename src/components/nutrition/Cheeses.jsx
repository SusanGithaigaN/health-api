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

export default function Cheeses() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://api.edamam.com/api/food-database/v2/parser?app_id=c2a31dec&app_key=008f387eafac54dd31390d89e769e305&nutrition-type=cooking';
            const options = {
                method: 'GET',
                // headers: {
                //     'X-RapidAPI-Key': '008f387eafac54dd31390d89e769e305	',
                //     'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
                // }
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