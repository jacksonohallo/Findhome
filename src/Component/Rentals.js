
import React from 'react'
import { Link } from 'react-router-dom'
function Rentals({ name,price,image,description,category,code }) {
  return (
      <div className='each-product'>
         <p>
          
          <img id="img-product" src={image} alt="" />
          <span>{name}</span>{" "}
        </p>
        <p>
          <span>{category}</span>
        </p>
        <p>{price}</p>
          <p>Code : {code}</p>
          <Link to="/booking">
          <button className="button">Book NOW</button>
        </Link>

      </div>
      

)}

export default Rentals

