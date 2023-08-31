import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function Carousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://images.pexels.com/photos/3985094/pexels-photo-3985094.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
        alt='...'
        style={{
          height: '50rem',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: "10rem"
          
        }}
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://th.bing.com/th/id/R.1febf2fdfa1d36a905304ae81c09f955?rik=xyhqpRvFZZuUEA&riu=http%3a%2f%2fwww.shoppinguide.us%2fwp-content%2fuploads%2f2019%2f03%2f26.jpg&ehk=PoQfVKTiXkUnYrfqlBAfWMLHCwHAOP6vinYuVUgC734%3d&risl=&pid=ImgRaw&r=0'
        alt='...'
        style={{
          height: '50rem',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: "10rem"
        }}
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://th.bing.com/th/id/OIP.Dar2rbRBUGWa7KErhi8rcQHaE7?pid=ImgDet&rs=1'
        alt='...'
        style={{
          height: '50rem',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: "10rem"
        }}

      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default Carousel