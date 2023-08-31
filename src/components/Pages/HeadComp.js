import React from 'react'


const headComp = () => {
    return (
        <>

            <div className='container '>
                <div className='grid grid-two-column d-flex'>
                    <div className='hero-section-data'>
                        <p className='intro-data' style={{color: "skyblue"}}>
                            Welcome to</p>
                        <h1>MoreMall</h1>
                        <p style={{height: "6rem", width:"47rem",paddingRight: "5rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <button style={{width: "10rem"}}>Shop Now</button>

                    </div>
                    <div className='hero-section-img'>
                        <figure>
                            <img src='/image/OIP copy.jpeg' alt='hero-section-photos' className='img-style'
                             style={{position:"absolute",right: "15rem", top:"11rem", zIndex: "1"}} />

                        </figure>
                    </div>
                    <div className='hero-section-img' 
                    style={{border: "2px solid #B9AFF8", height: "20rem", width: "40rem",
                    bottom:"4rem", left: "0rem", position: "relative", backgroundColor:"#B9AFF8"}}>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default headComp