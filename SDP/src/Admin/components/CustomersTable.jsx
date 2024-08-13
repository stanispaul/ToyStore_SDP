import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { deleteProduct, findProducts } from '../../State/product/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button,CardHeader } from '@mui/material';
import { Card } from 'mdi-material-ui';
import axios from 'axios';

const CustomersTable = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data from the backend API using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8182/feedback/get');
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
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedbackList.map((item) => (
              <TableRow key={item.fid} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='left' scope="row">
                  {item.fid}
                </TableCell>
                <TableCell align="left">{item.username}</TableCell>
                <TableCell align="left">{item.useremail}</TableCell>
                <TableCell align="left">{item.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CustomersTable