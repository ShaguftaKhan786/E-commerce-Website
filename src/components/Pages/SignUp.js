import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
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

function SignUP() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Here you can send the data to a server or perform any other actions
    console.log('Form data submitted:', formData);
    navigate("/login");
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

return (
<>
    <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                        <form onSubmit={handleSubmit}>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />

                                <MDBInput label='Your Name'
                                    id='name'
                                    type='text'
                                    name='name'
                                    className='w-100'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

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

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size='lg' />
                                <MDBInput label='Re-enter your password'
                                    id='confirmPassword'
                                    type='password'
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required />
                            </div>

                            <div className='mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div>

                            <MDBBtn className='mb-4' size='lg' style={{width: "10rem"}}>Register</MDBBtn>
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

export default SignUP;