import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/logo.png';
import Heart from '../svg/heart.svg';
import Person from '../svg/person.svg';
import Cart from '../svg/cart.svg';
import SubjectIcon from '@mui/icons-material/Subject';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='top'>
            <Link to='/aboutus'>About US</Link>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/storelocation'>Store Location</Link>
            <Link to='/trackorder'>Track Order</Link>
            <Link to='/blog'>Blog</Link>
            <div className='compare'> 
                <h4> Compare:2 </h4>
                <h4> Currency: 
                    <select>
                        <option>INR</option>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>SGD</option>
                        <option>AED</option>
                    </select>
                </h4>
                <h4> Language: 
                    <select>
                        <option>EN</option>
                        <option>TAM</option>
                        <option>MAL</option>
                        <option>TEL</option>
                        <option>KAN</option>
                    </select>
                </h4>
            </div>
        </div>

        <div className='mid'>
                <img src={Logo} />
            
                <form>
                    <select>
                        <option>
                            Select Vehicle 
                        </option>
                    </select>
                </form> 
                <form>
                    <input type="text" placeholder="Enter Keyword or Part Number" name="search" />
                </form>

                <div className="image">
                    <img src={Heart} />
                </div>
                <div className="image1">
                    <img src={Person} title="My Account" />
                    <h3> My Account </h3>
                </div>
                <div className="image1">
                    <img src={Cart} />
                    <h3> Rs:1468.60 </h3>
                </div>
            </div>
        

        <div class="bottom">
            <button>
                <SubjectIcon /> 
                Shop By Category
            </button>
            <Link to="/home">Home </Link>
            <Link to="/megamenu">Megamenu</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/account">Account</Link>
            <Link to="/pages">Pages</Link>
            <Link to="/buytheme">BuyTheme</Link>
            <p> Call Us: <span> 089252 97807 </span></p>
        </div>
               
    </div>

  )
}

export default Navbar;