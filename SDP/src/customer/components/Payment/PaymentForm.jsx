import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    const fetchAmount = async () => {
      try {
        const jwt = localStorage.getItem('jwt');
        const response = await axios.get('http://localhost:8181/api/cart/', {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        });

        
        setAmount(response.data.totalDiscountedPrice);
      } catch (error) {
        console.error('Error fetching amount', error);
      }
    };

    fetchAmount();
  }, []);
  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:8183/payment/pay', {
        name,
        cardnumber: cardNumber,
        date: expiryDate,
        code: cvv,
        amount: amount.toString(),
      });

      console.log('Payment processed successfully', response.data);
      navigate("/payment/4")
    } catch (error) {
      console.error('Error processing payment', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Payment Details
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" align="center" gutterBottom>
                Amount: ₹{amount}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Expiry Date"
                variant="outlined"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVV"
                variant="outlined"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Cardholder Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handlePayment}
              >
                Pay Now
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default PaymentForm;
