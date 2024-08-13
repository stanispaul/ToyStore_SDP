import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';

import axios from 'axios';

const Payment = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8183/payment/getAllPayments');
        setFeedbackList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='p-10'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Amount</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {feedbackList.map((item) => (
              <TableRow key={item.paymentid} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='left' scope="row">
                  {item.paymentid}
                </TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.amount}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Payment