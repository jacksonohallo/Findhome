import React from "react";
import { useState } from "react";


function BookingForm({ onBook }) {
  //usestate return poem item values that hold the state values to be posted
  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("");
 const [price, setPrice] = useState("");
 const [code, setCode] = useState("");

//posting poems function
  function handleSubmit(event) {
    event.preventDefault();
//a constant that holds new poem data to be posted
    
    const bookingData = {
      name: name,
      category: category,
        price: price,
      code:code
    };
    
//posting data using our fetch API
    fetch("https://jack132.herokuapp.com/booking", {
      method: "POST",
      headers:
        { "Content-Type": "application/json", },
      body: JSON.stringify(bookingData)
    })
      .then((r) => r.json())
      // call the onAddPoem prop with the newPoem
      .then((newBook) => onBook(newBook));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      <input
         type="text"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="category"
      
      />
      <input
         type="text"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
      
          />
            <input
         type="text"
        name="code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="code"
      
      />
      <input type="submit" value="Book Now" />
    </form>
  );
}

export default BookingForm;
