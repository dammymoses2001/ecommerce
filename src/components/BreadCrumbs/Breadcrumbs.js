import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumbs.css';
function Breadcrumbs({ item1, item2, item3, currentItem, active }) {
  return (
    <div class='custom-border-bottom py-3'>
      <div class='container'>
        <div class='row'>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              {item1 ? (
                <li
                  class={`breadcrumb-item ${
                    currentItem === item1 ? active : null
                  }`}
                >
                  <Link to='/'>{item1}</Link>
                </li>
              ) : null}
              {item2 ? (
                <li
                  class={`breadcrumb-item ${
                    currentItem === item2 ? active : null
                  }`}
                >
                  <Link to='/product'>{item2}</Link>
                </li>
              ) : null}
              {item3 ? (
                <li
                  class={`breadcrumb-item ${
                    currentItem === item3 ? active : null
                  }`}
                  aria-current='page'
                >
                  <Link to='/product'>{item3}</Link>
                </li>
              ) : null}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;
