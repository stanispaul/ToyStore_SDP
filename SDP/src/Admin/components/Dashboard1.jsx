import React from 'react'
import { Grid } from '@mui/material'
import Achivement from './Achivement'
import MonthlyOvervie from './MonthlyOvervie'
import OrdersTableView from '../view/OrderTableView'
import ProductTableView from '../view/ProductTableView'

const Dashboard1 = () => {
  return (
    <div className='p-10'>
      <Grid container spacing={5}>
        <Grid  item xs={12} md={4}>
          <div className='shadow-lg shadow-gray-600'>

            <Achivement/>  
          </div>

        </Grid>
        <Grid  item xs={12} md={8}>
          <div className='shadow-lg shadow-gray-600'>

          <MonthlyOvervie/>
          </div>
        </Grid>
        <Grid  item xs={12} md={6}>
          <div className='shadow-lg shadow-gray-600'>
          <OrdersTableView/>
          </div>
        </Grid>
        <Grid  item xs={12} md={6}>
          <div className='shadow-lg shadow-gray-600'>
          <ProductTableView/>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard1