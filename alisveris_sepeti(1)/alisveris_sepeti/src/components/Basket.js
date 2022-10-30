import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Basket({ localStorageItem, cost, basket }) {






  return (
    <div>
      <div className='mainBasket'>
        <div className='showBasket'>
          <h2>Basket</h2>
          {localStorageItem.length === 0 && <p>not found result</p> || null}
          {
            localStorageItem.map(item => (
              <div key={item.id} className='basketList'>
                <img width="100" src={item.img} />
                <p>{item.name} x {item.amount}</p>
                <p> $ {item.price * item.amount}</p>

              </div>
            ))
          }
          {cost && <p>Total : $ {cost}</p> || null}
        </div>



      </div>

      
    </div>
  )
}