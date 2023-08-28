import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {

    const prod = useSelector(y=>y.product);

    const navigate = useNavigate()


    const addItem = ()=>{
         navigate("/cartitem")
    }
  return (
    <div class="header">
      <div class="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTervYQ39ToB-6vICysXF8z4j9bbqV7tuB7tcCmX1q-dpxRI1BxtC_1QDrV2Bqakb6vkVM&usqp=CAU"
          alt=""
        />
      </div>

      <div class="navbar">
        <ul>
        
          <li><Link to = "/products" className='contact'>Home</Link></li>
          <li><Link to = "/about" className='contact'>About</Link></li>
          <li><Link to="/services" className='contact'>Services</Link></li>
          <li><Link to="/contact" className='contact'>Contact</Link></li>
          
          
          <div>
          <li className="login">
            
          <i  onClick={addItem} className="fa-solid fa-cart-shopping" style={{color: "orange"}} >{prod.cart.length}</i>
          </li>
          </div>
          
          
          

         
        </ul>
      </div>
    </div>
  )
}
