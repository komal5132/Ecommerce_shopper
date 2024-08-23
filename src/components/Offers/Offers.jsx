import React from 'react'
import "./Offers.css"
import exculsiveImage from "../assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='Offers'>
        <div className="offers-left">
            <h1>Exlusive</h1>
            <h1>Offers For You</h1>
            <p>only on best selllers products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exculsiveImage} alt="" />
        </div>
    </div>
  )
}

export default Offers