import { Alert, AlertTitle, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import OrderTracker from '../Order/OrderTracker';
import axios from 'axios';

const PaymentSuccess = () => {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jwt = localStorage.getItem('jwt');
        const response = await axios.get('http://localhost:8181/api/cart/', {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        });

        setOrderItems(response.data.cartItems);
        console.log(orderItems);
      } catch (error) {
        console.error('Error fetching order items:', error);
        
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order Get Placed
        </Alert>
      </div>

      <OrderTracker activeStep={1}/>

      <Grid container className="space-y-5 py-5 pt-20">
        {orderItems.map((item) => (
          <Grid
            key={item.productId} 
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item.product.imageUrl} 
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">Title : {item.product.title}</p>
                  <p>Price : ₹{item.discountedPrice}</p>
                </div>
              </div>
            </Grid>
            
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess