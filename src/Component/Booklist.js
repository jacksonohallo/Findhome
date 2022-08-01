import React from "react";
import Booking from "./Booking";

const BookList = ({ bookList }) => {
  

  const myBookings = bookList.map((booking) => {
    return (
      <Booking
        key={booking.id}
        name={booking.name}
        category={booking.category}
        price={booking.price}
        code={booking.code}
      />
    );
  });
  return (
    <div>
        <h1> My Bookings </h1> <hr/>
        <div > {myBookings} </div>
        </div >
    );
}


export default BookList;


 
