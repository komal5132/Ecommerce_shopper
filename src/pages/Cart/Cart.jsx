import React from 'react'
import CartDisplay from '../../components/CartDisplay/CartDisplay'
import CartTotalDisplay from '../../components/CartTotalDisplay/CartTotalDisplay'

const Cart = () => {
  return (
    <div className='Cart'>
      <CartDisplay/>
      <CartTotalDisplay/>
    </div>
  )
}

export default Cart