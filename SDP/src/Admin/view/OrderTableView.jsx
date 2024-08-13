import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';
import { Avatar, Typography,AvatarGroup, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const OrdersTableView = () => {
  const dispatch = useDispatch();

  const { adminOrder } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deleteOrder]);

  const handleShipedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleDeliveriedOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  const [anchorEl, setAnchorEl] = useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event, index) => {
    const newAnchorEIArray = [...anchorEl];
    newAnchorEIArray[index] = event.currentTarget;
    setAnchorEl(newAnchorEIArray);
  };

  const handleClose = (index) => {
    const newAnchorEIArray = [...anchorEl];
    newAnchorEIArray[index] = null;
    setAnchorEl(newAnchorEIArray);
  };

  const visibleRows = 5; // Set the number of rows to be visible

  return (
    <div className='p-10'>
        <Typography variant="h6" gutterBottom>
        Order List
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {/* <TableHead>
            <TableRow>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            <div style={{ maxHeight: `${visibleRows * 56}px`, overflow: 'auto' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Image</TableCell>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Id</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {adminOrder.orders?.map((item, index) => (
                    <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="left">
                        <AvatarGroup max={3} sx={{ justifyContent: 'Start' }}>
                          {item.orderItems.map((orderItem) => (
                            <Avatar key={orderItem.product.id} src={orderItem.product.imageUrl}></Avatar>
                          ))}
                        </AvatarGroup>
                      </TableCell>
                      <TableCell align='left' scope="row">
                        {item.orderItems.map((orderItem) => (
                          <p key={orderItem.product.id}> {orderItem.product.title}</p>
                        ))}
                      </TableCell>
                      <TableCell align="left">{item.id}</TableCell>
                      <TableCell align="left">{item.totalPrice}</TableCell>
                      <TableCell align="left">
                        <span
                          className={`text-white px-5 py-2 rounded-full ${
                            item.orderStatus === 'PLACED'
                              ? 'bg-[#02B290]'
                              : item.orderStatus === 'CONFIRMED'
                              ? 'bg-[#369236]'
                              : item.orderStatus === 'SHIPPED'
                              ? 'bg-[#4141ff]'
                              : item.orderStatus === 'PENDING'
                              ? 'bg-[gray]'
                              : 'bg-[#025720]'
                          }`}
                        >
                          {item.orderStatus}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrdersTableView;
