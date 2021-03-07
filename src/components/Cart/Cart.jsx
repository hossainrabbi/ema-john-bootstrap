import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
   let price = cart.reduce((acc, totalPrice) => acc + totalPrice.price, 0);
   price = Number(price.toFixed(2));
   const tax = Number((price / 10).toFixed(2));
   const total = Number((price + tax).toFixed(2));

   return (
      <>
         <h2 className="text-center">Order Summary</h2>
         <h5 className="text-center">Ordered items: {cart.length}</h5>
         <Table bordered>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Price</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Items Price:</td>
                  <td>${price}</td>
               </tr>
               <tr>
                  <td>Tax + Vat: </td>
                  <td>${tax}</td>
               </tr>
               <tr>
                  <td>
                     <strong>Order Total: </strong>
                  </td>
                  <td>
                     <strong>${total}</strong>
                  </td>
               </tr>
            </tbody>
         </Table>
         <Link to="/review">
            <Button variant="warning">Review Place</Button>
         </Link>
      </>
   );
};

export default Cart;
