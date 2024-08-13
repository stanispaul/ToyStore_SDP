import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action'
import { Avatar,AvatarGroup, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const OrdersTable = () => {
  const dispatch=useDispatch()

  const {adminOrder}=useSelector(store=>store)

  useEffect(()=>{
dispatch(getOrders())
  },[adminOrder.confirmed,adminOrder.shipped,adminOrder.delivered,adminOrder.deleteOrder])

  const handleShipedOrder=(orderId)=>{
    dispatch(shipOrder(orderId))
    handleClose()
  }

  const handleConfirmedOrder=(orderId)=>{
    dispatch(confirmOrder(orderId))
    handleClose()
  }

  const handleDeliveriedOrder=(orderId)=>{
    dispatch(deliveredOrder(orderId))
    handleClose()
  }

  const handleDeleteOrder=(orderId)=>{
    dispatch(deleteOrder(orderId))
    
  }
  
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event,index) => {
    const newAnchorEIArray = [...anchorEl];
    newAnchorEIArray[index] = event.currentTarget
    setAnchorEl(newAnchorEIArray);
  };
  const handleClose = (index) => {
    const newAnchorEIArray=[...anchorEl];
    newAnchorEIArray[index]=null
    setAnchorEl(newAnchorEIArray);
  };
  return (
    <div className='p-10'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Update</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminOrder.orders?.map((item,index) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell align="left">
                <AvatarGroup max={3} sx={{justifyContent:"Start"}}>
                  {item.orderItems.map((orderItem)=><Avatar src={orderItem.product.imageUrl}></Avatar>)}
                </AvatarGroup>
                
              </TableCell>
              <TableCell align='left' scope="row">
                 {item.orderItems.map((orderItem)=><p> {orderItem.product.title}</p>)}
              </TableCell>
              <TableCell align="left">{item.id}</TableCell>
              <TableCell align="left">{item.totalPrice}</TableCell>
              <TableCell align="left"><span className={`text-white px-5 py-2 rounded-full ${
    item.orderStatus === "PLACED" ? "bg-[#02B290]" : item.orderStatus==="CONFIRMED"?"bg-[#369236]": item.orderStatus==="SHIPPED"?"bg-[#4141ff]":item.orderStatus==="PENDING"?"bg-[gray]":"bg-[#025720]"
  }`}>{item.orderStatus}</span></TableCell>
              
              <TableCell align="left">
              <Button
        id="basic-button"
        aria-haspopup="true"
        onClick={(event)=>handleClick(event,index)}
        aria-controls={`basic-menu-${item.id}`} 
        aria-expanded={Boolean(anchorEl[index])}
      >
        STATUS
      </Button>
      <Menu
        id={`basic-menu-${item.id}`}
        anchorEl={anchorEl[index]}
        open={Boolean(anchorEl[index])}
        onClose={()=>handleClose(index)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>handleConfirmedOrder(item.id)}>Confirmed Order</MenuItem>
        <MenuItem onClick={()=>handleShipedOrder(item.id)}>Shipped Order</MenuItem>
        <MenuItem onClick={()=>handleDeliveriedOrder(item.id)}>Delivered Orde</MenuItem>
      </Menu>
              </TableCell>
              <TableCell align="left">
                <Button onClick={()=>handleDeleteOrder(item.id)} variant='outlined' >Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default OrdersTable