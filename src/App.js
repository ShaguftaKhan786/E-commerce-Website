import './App.css';
import Cart from './components/Pages/Cart';

import NavbarComp from './components/NavbarComp/NavbarComp';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Pages/HomePage';
// import Profile from './components/Pages/Profile';
import SignUp from './components/Pages/SignUp'
import Login from './components/Pages/Login';
import Product from './components/Pages/Product';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
function App() {
  return (
    <div className="App">

      <NavbarComp />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>


    </div>
  );
}

export default App;
