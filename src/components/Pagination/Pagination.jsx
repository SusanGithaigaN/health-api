import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

export default function Pagination() {
  return (
    <nav aria-label='Page navigation example' className='d-flex justify-content-center'>
      <MDBPagination className='mb-0'>
        <MDBPaginationItem>
          <MDBPaginationLink href='/monitor'>Previous</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='/home'>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='/monitor'>2</MDBPaginationLink>
        </MDBPaginationItem>
        {/* <MDBPaginationItem>
          <MDBPaginationLink href='#'>3</MDBPaginationLink>
        </MDBPaginationItem> */}
        <MDBPaginationItem>
          <MDBPaginationLink href='/home'>Next</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
}