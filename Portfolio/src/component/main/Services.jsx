import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Services = () => {
  return (
  <div>
     <div className='sm:flex justify-around'>

<Card  className='  md:w-1/2 m-2 mt-2 mb-2 hover:shadow-slate-50'>
  <Card.Img variant="top" src="./public/images/shopppingss.png" />
  <Card.Body>
    <Card.Title>Shopping Template</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <div className=' text-center text-2xl md:text-left'><Button variant="primary" className='mt-3 '>Review</Button></div>
  </Card.Body>
</Card>

<Card className=' md:w-1/2 m-2 mt-2 mb-2  '>
  <Card.Img variant="top" src="./public/images/fakestoress.png" />
  <Card.Body>
    <Card.Title>Fakestore Template With API</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <div className=' text-center text-2xl'><Button variant="primary" className='mt-3 '>Review</Button></div>
  </Card.Body>
</Card>

<Card className='  md:w-1/2 m-2 mt-2 mb-2 hover: shadow-white '>
  <Card.Img variant="top" src="./public/images/netflixss.png" />
  <Card.Body>
    <Card.Title>Netflix Template</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <div className=' text-center text-2xl'><Button variant="primary" className='mt-3 '>Review</Button></div>
  </Card.Body>
</Card>

</div>

<div className=' sm:flex justify-around '>

<Card className='  md:w-1/2 m-2 mt-2 mb-2 hover: shadow-white '>
  <Card.Img variant="top" src="./public/images/colorlibss.png" />
  <Card.Body>
    <Card.Title>Colorlib Template</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <div className=' text-center text-2xl'><Button variant="primary" className='mt-3 '>Review</Button></div>
  </Card.Body>
</Card>

<Card className='  md:w-1/2 m-2 mt-2 mb-2 hover: shadow-white '>
  <Card.Img variant="top" src="./public/images/landkitss.png" />
  <Card.Body>
    <Card.Title>Landkit Template</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <div className=' text-center text-2xl'><Button variant="primary" className='mt-3 '>Review</Button></div>
  </Card.Body>
</Card>

<Card className='  md:w-1/2 m-2 mt-2 mb-2 hover: shadow-white '>
  <Card.Img variant="top" src="./public/images/instass.png" />
  <Card.Body>
    <Card.Title>Instagram Login Form Template</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <div className=' text-center text-2xl'><Button variant="primary" className='mt-3 '>Review</Button></div>
  </Card.Body>
</Card>

</div>


  </div>

  )
}

export default Services
