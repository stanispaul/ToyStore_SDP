import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOrderById } from '../../../State/Order/Action'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {
  
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const location=useLocation();
  const {order}=useSelector(store=>store);
  const searchParams=new URLSearchParams(location.search);
  const orderId=searchParams.get("order_id")

  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])

  const handleButtonClick = () => {
    dispatch(createPayment())
    navigate("/payment")
  };
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AdressCard address={order.order?.shippingAddress}/>
        </div>
        <div>
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2 shadow-lg rounded-md">
          {order.order?.orderItems?.map((item) => (
            <CartItem item={item}/>
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">-₹{order.order?.discounte}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹{order.order?.totalDiscountedPrice}</span>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full mt-5"
              onClick={handleButtonClick}
              sx={{
                px: "2.5rem",
                py: "1rem",
                bgcolor: "#9155fd",
                "&:hover": { backgroundColor: "##9155fd" },
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary