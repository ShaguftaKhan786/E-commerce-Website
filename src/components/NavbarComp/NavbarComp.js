import React, { useContext } from 'react'
import '../style/NavbarComp.css'
import { NavLink } from 'react-router-dom'
import { Cartcontext } from "../context/Context";
// import logoImage from '../image/logo1.jpg'


const NavbarComp = () => {
  const Globalstate = useContext(Cartcontext);
  return (

    <div className="nav">
      <img src='/image/logo1.jpg' alt=''
        style={{ height: "70px" }}
      />
      <NavLink to="/" style={{ marginLeft: "-51px", color: "#B9AFF8" }}>MoreMall</NavLink>

      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <span>{Globalstate?.cartItems}</span><br />
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/about" className='reg'>About</NavLink>
      <NavLink to="/product" className='reg'>Product</NavLink>
      <NavLink to="/contact" className='reg'>Contact</NavLink>
      <NavLink to="/signup" className='reg'>SignUp</NavLink>
      <NavLink to="/login" className='reg'>Login</NavLink>
      <NavLink to="/cart"><i class="fa fa-cart-plus"></i>
        <span>{Globalstate.state.length}</span>
      </NavLink>
    </div>
  )
}

export default NavbarComp