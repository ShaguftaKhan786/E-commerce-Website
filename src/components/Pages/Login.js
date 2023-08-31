import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import SignUP from './SignUp';
import Footer from './Footer'


import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        
        email: '',
        password: '',
      
    })

const handleInputChange = (event) => {
// console.log(event)
const {name, value} = event.target;
setFormData({
    ...formData, 
    [name] : value,
   
})

}

const handleSubmit = (event) => {
    event.preventDefault();

    if (SignUP.password !== Login.Password) {
        alert("Passwords do not match");
        return;
      }

    console.log('Form data submitted:', formData);
    navigate("/");
    setFormData({
     
      email: '',
      password: '',
      
    });
  };

return (
    <>
    <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">login Page</p>
                        <form onSubmit={handleSubmit}>

                           

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput label='Your Email'
                                    id='email'
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg' />
                                <MDBInput label='Password'
                                    id='password'
                                    type='password'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required />
                            </div>


                            <div className='mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div>

                            <MDBBtn className='mb-4' size='lg' style={{width: "10rem"}}>Login</MDBBtn>
                        </form>
                    </MDBCol>

                    <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                    </MDBCol>

                </MDBRow>
            </MDBCardBody>
        </MDBCard>

    </MDBContainer>
    <Footer/>
    </>
);
}

export default Login;