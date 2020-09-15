import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaAlignLeft, FaTimes } from 'react-icons/fa';
import './navbar.css';
function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleSideBar = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <div className={!toggle ? 'hideSideBar ' : 'mobile-view'}>
        <div>
          <Link to='/' className='Logo'>
            Ecommerence
          </Link>
          <span onClick={toggleSideBar}>
            <FaTimes />
          </span>
        </div>

        <ul className='mobile'>
          <li className='home'>
            <Link to='/'>Home</Link>
          </li>

          <>
            <li>
              <Link to='/product'>Product</Link>
            </li>
            {/* <li>
                            <Link to='/'>
                                <FaUserCircle />

                            </Link>
                        </li> */}
            <li>
              <Link to='/'>Contact us</Link>
            </li>
          </>

          <li>Sign</li>
        </ul>
      </div>

      <div className='site-view'>
        <Link to='/' className='Logo'>
          AllMarket
        </Link>
        <span>
          <FaAlignLeft onClick={toggleSideBar} />
        </span>
        <ul className='hide'>
          <li className='home'>
            <Link to='/'>Home</Link>
          </li>

          <>
            <li>
              <Link to='/product'>Product</Link>
            </li>
            {/* <li>
                            <Link to='/'>
                                <FaUserCircle />

                            </Link>
                        </li> */}
            <li>
              <Link to='/'>Contact us</Link>
            </li>
          </>

          <li>Sign</li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
