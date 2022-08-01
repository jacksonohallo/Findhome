import React from "react";

const Booking= ({
  name,
  category,
  price,
  code

}) => {
  return (
    <div className="items">
      <label htmlFor="">Name : </label>
      <input type="text" value={name} />
      <label htmlFor=""> Code :</label>
      <input type="text" value={code} />
       <label htmlFor="">price :</label>
      <input type="text" value={price} />
      <label htmlFor="">Category :</label>
      <input type="text" value={category} />
    
    </div>
  );
};

export default Booking;
