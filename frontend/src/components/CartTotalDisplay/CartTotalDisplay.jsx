import React, { useContext } from 'react'
import "./CartTotalDisplay.css"
import { shopContext } from '../../context/ShopContext'

const CartTotalDisplay = () => {
    const {cartTotal}=useContext(shopContext)
  return (
    <div className='CartTotalDisplay'>
        <div className="cartTotaldisplay-left">
            <h2>Cart Totals</h2>
            <div className="left-div-part subtotal-div">
                <p>Subtotal</p>
                <p>${cartTotal()}</p>
            </div>
            <hr />
            <div className="left-div-part shipping-div">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="left-div-part total-div">
                <p>Total</p>
                <p>${cartTotal()}</p>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartTotaldisplay-right">
            <p>If you have a promo code ,Enter it here</p>
            <div className="promocode-div">
                <input type="text" placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CartTotalDisplay