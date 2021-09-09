import React, {useState, useEffect} from 'react'

import './App.css';
import  './style.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';






function ItemDetails({match}) {

  

    useEffect(() => {
        fetchItem();
        console.log(match)
    },[]);
        
    const [item, setItem] = useState({});
   
    const fetchItem = async () =>   {
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const item = await fetchItem.json();
        setItem(item);
        console.log(item)
        
    }
    
  return (
    <Container>
      <Row mt={4} className="mt-5">
        <h1></h1>
      </Row>

      <Row >
        <Col xs={6} className="align-items-center">
        <img src={item.image} />
        </Col>
        <Col xs={6} >
          <h2 className='title'>{item.title}</h2>
            <p>{item.description}</p>
         
        </Col>
      </Row>

      <Row>
        <Col md={6}>
        </Col>
        <Col md={6}>
        <Button variant="outline-dark">Add to Cart</Button>

        </Col>
      </Row>

    </Container>

  )
  }

export default ItemDetails;



{/* <div className ="item-det">
      
<h3>{item.title}</h3>
<img src={item.image} />
<p className ="ptag">{item.description}</p>
<h4>${item.price}</h4> 
<button>Add to cart!</button>

</div> */}