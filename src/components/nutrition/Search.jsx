import { React, useState } from 'react'
import {
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle
} from 'mdb-react-ui-kit';


export default function Search() {
    // search query
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    // errors
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();

        const url = `https://keto-diet.p.rapidapi.com/?search=${searchQuery}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4a1fb52c8cmshf903322185999c4p16ed13jsn69168c2f11c1',
                'X-RapidAPI-Host': 'keto-diet.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
      
            if (data.length === 0) {
              setErrorMessage('No results found.');
              setSearchResult([]); // Clear previous search results
            } else {
              setSearchResult(data);
              setErrorMessage('');
            }
          } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred. Please try again later.');
          }
        };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };


    return (
        <div>
            <form className='d-flex input-group w-auto' onSubmit={handleSearch}>
                <input
                    type='search'
                    className='form-control'
                    placeholder='Type your search item eg. bacon'
                    aria-label='Search'
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <MDBBtn color='success' type='submit'>
                    Search
                </MDBBtn>
            </form>
             {/* errors */}
             {errorMessage &&<MDBCardText style={{color: 'red'}}>{errorMessage}</MDBCardText>}
             
            {/* Display search results */}
            <div id='search-results'>
                <MDBRow>
                    {/* <MDBCardHeader id='subt'>Your search results:</MDBCardHeader> */}
                    {searchResult.map((item) => (
                        <MDBCol sm='4' key={item.id} style={{ marginBottom: '3em' }}>
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
               
            </div>
        </div>
    )
}
