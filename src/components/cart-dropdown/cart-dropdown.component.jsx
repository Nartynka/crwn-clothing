import React from 'react'

import './cart-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ()=>(
   <div className="cart-dropdown">
      <div className="cart-items">
      {
         // props.map(item=>(
         //    <div className="cart-item">
         //       <img src={item.img} alt="item preview" className="item-photo" />
         //       {/* <AdjustQuanity/> */}
         //       <span className="price">{item.price}$</span>
         //    </div>
         // ))
      }
      </div>
      <CustomButton>Go to checkout</CustomButton>
   </div>
)

export default CartDropdown;