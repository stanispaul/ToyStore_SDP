import React from 'react';
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

const ProductTable00 = () => {

    const dispatch=useDispatch();
    const {products}=useSelector(store=>store);

    

    const handleProductDelete=(productId)=>{
      console.log(productId);
      dispatch(deleteProduct(productId))
    }

    useEffect(()=>{
        const data={
            category:"",
            colors: [],
            minPrice:0,
            maxPrice:9999999,
            minDiscount:0,
            sort:"price_low",
            pageNumber:0,
            pageSize:10,
            stock:""
          }
          
          dispatch(findProducts(data))
    },[products.deleteProduct])
  return (
    <div className='p-10'>

        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
              <TableCell align="left">
                <Button onClick={()=>handleProductDelete(item.id)} variant='outlined'>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductTable00