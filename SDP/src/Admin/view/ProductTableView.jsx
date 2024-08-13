import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Typography } from '@mui/material';

// Import the findProducts action
import { findProducts } from '../../State/product/Action';

const ProductTableView = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  useEffect(() => {
    const data = {
      category: '',
      colors: [],
      minPrice: 0,
      maxPrice: 9999999,
      minDiscount: 0,
      sort: 'price_low',
      pageNumber: 0,
      pageSize: 10,
      stock: '',
    };

    // Call the findProducts action
    dispatch(findProducts(data));
  }, [products.deleteProduct]);

  const visibleRows = 5; // Set the number of rows to be visible

  return (
    <div className='p-10'>
      <Typography variant="h6" gutterBottom>
        Product List
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
           
           
          </TableHead>
          <TableBody>
            <div style={{ maxHeight: `${visibleRows * 56}px`, overflow: 'auto' }}>
              {products?.products?.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell align='left' scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                </TableRow>
              ))}
            </div>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductTableView;
