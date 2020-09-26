import React from 'react';
import { Link } from 'react-router-dom';
import './pagination.css';
function PaginationComp() {
  return (
    <div class='row page_nav_row'>
      <div class='col'>
        <div class='page_nav'>
          <ul class='d-flex flex-row align-items-start justify-content-center'>
            <li class='active'>
              <Link to='#'>01</Link>
            </li>
            <li>
              <Link to='#'>02</Link>
            </li>
            <li>
              <Link to='#'>03</Link>
            </li>
            <li>
              <Link to='#'>04</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PaginationComp;
