import React from 'react';
import { Link } from 'react-router-dom';
import HeaderPic from '../../public/img/HeaderPic.jpg';
import './footer.css';
function Footer() {
  return (
    <footer className='site-footer custom-border-top'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
            <h3 className='footer-heading mb-4'>Promo</h3>
            <Link to='/' className='block-6'>
              <img
                src={HeaderPic}
                alt=' placeholder'
                className='img-fluid rounded mb-4'
              />
              <h3 className='font-weight-light mb-0'>
                Finding Your Perfect Shirts
              </h3>
              <p>Promo from September 15 &mdash; 25, 2020</p>
            </Link>
          </div>
          <div className='col-lg-5 ml-auto mb-5 mb-lg-0'>
            <div className='row'>
              <div className='col-md-12'>
                <h3 className='footer-heading mb-4'>Quick Links</h3>
              </div>
              <div className='col-md-6 col-lg-4'>
                <ul className='list-unstyled'>
                  <li>
                    <Link to='#'> Lorem ipsum</Link>
                  </li>
                  <li>
                    <Link to='#'> Lorem ipsum</Link>
                  </li>
                  <li>
                    <Link to='#'> Lorem ipsum</Link>
                  </li>
                  <li>
                    <Link to='#'> Lorem ipsum</Link>
                  </li>
                </ul>
              </div>
              <div className='col-md-6 col-lg-4'>
                <ul className='list-unstyled'>
                  <li>
                    <Link to='#'> Lorem ipsum</Link>
                  </li>
                  <li>
                    <Link to='#'> Lorem ipsum</Link>
                  </li>
                  <li>
                    <Link to='#'> Lorem ipsum</Link>
                  </li>
                </ul>
              </div>
              <div className='col-md-6 col-lg-4'>
                <ul className='list-unstyled'>
                  <li>
                    <Link to='#'> Lorem ipsum of sLinkle</Link>
                  </li>
                  <li>
                    <Link to='#'> Lorem ipsum</Link>
                  </li>
                  <li>
                    <Link to='#'> Lorem ipsum</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-3'>
            <div className='block-5 mb-5'>
              <h3 className='footer-heading mb-4'>Contact Info</h3>
              <ul className='list-unstyled'>
                <li className='address'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum exercitationem numquam iusto
                </li>
                <li className='phone'>
                  <Link to='tel://23923929210'>+234098769876</Link>
                </li>
                <li className='email'>Loremipsum@domain.com</li>
              </ul>
            </div>

            <div className='block-7'>
              <form action='#' method='post'>
                <label htmlFor='email_subscribe' className='footer-heading'>
                  Subscribe
                </label>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control py-4'
                    id='email_subscribe'
                    placeholder='Email'
                  />
                  <input
                    type='submit'
                    className='btn btn-sm btn-dark'
                    value='Send'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
