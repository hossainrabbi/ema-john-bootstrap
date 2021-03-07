import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
   const [cart, setCart] = useState([]);

   const handleAddToCart = (data) => {
      const newCart = [...cart, data];
      setCart(newCart);
   };

   return (
      <Container>
         <Row>
            <Col md={8}>
               {fakeData.map((data) => (
                  <Product
                     data={data}
                     key={data.key}
                     showBtn={true}
                     handleAddToCart={handleAddToCart}
                  />
               ))}
            </Col>
            <Col md={4}>
               <Cart cart={cart} />
            </Col>
         </Row>
      </Container>
   );
};

export default Shop;
