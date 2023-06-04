import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Nutritionlink() {
  return (
    <nav aria-label='Page navigation example' className='d-flex justify-content-center'>
      <MDBPagination className='mb-0'>
        <MDBPaginationItem>
          <MDBPaginationLink>
            <Link to='/'>
              Previous
            </Link>
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink >
            <Link to='/'>
              1
            </Link>
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink>
            <Link to='/monitor'>
              2
            </Link>
          </MDBPaginationLink>
        </MDBPaginationItem>
        {/* <MDBPaginationItem>
          <MDBPaginationLink href='#'>3</MDBPaginationLink>
        </MDBPaginationItem> */}
        <MDBPaginationItem>
          <MDBPaginationLink>
            <Link to='/keto2'>
              Next
            </Link>
          </MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
}