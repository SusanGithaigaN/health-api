import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import logo from './logo.jpeg'
import './Navbar.css'


export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  // search query
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

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
      setSearchResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };


  return (
    <div>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src={logo}
              height='80'
              width='80'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/' id='eatico'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <Link to='/monitor' id='eatico'>
                    Nutrition
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className='d-flex input-group w-auto' onSubmit={handleSearch}>
              <input
                type='search'
                className='form-control'
                placeholder='Type query'
                aria-label='Search'
                value={searchQuery}
                onChange={handleInputChange}
              />
              <MDBBtn color='success' type='submit'>
                Search
              </MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
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
                <MDBCardText>Prep Time: {item.prep_time_in_minutes} minutes</MDBCardText>
                <MDBCardText>Cook Time: {item.cook_time_in_minutes} minutes</MDBCardText>
                <MDBCardText>Difficulty: {item.difficulty}</MDBCardText>
                <MDBCardText>Servings: {item.serving}</MDBCardText>
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
  );
}