import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const OrderForm = (onAddOrder) => {
  //usestate return order item values that hold the state values to be posted
  const [identity, setIdentity] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [code, setCode] = useState("");
  const [product, setProduct] = useState("");
  const [review, setReview] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //a constant that holds new order data to be posted
    const orderItem = {
      identity: identity,
      phone: phone,
      code: code,
      product: product,
      location: location,
      category: category,
      review: review,
    };

    //posting order data using our fetch API
    fetch("https://jack132.herokuapp.com/homes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderItem),
    })
      .then((r) => r.json())
      //new posted order
      .then((newOrder) => onAddOrder(newOrder));
  }
  return (
    <div>
      <div id="form-header">
        Enter Your Correct Information To Make an Order
      </div>
      <div id="form-container">
        <form className="orderform" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Names"
		  name="identity"
		  value={identity}
						onChange={(e) => setIdentity(e.target.value)} />
			<input
		  type="text"
		  placeholder="Your phone contact"
		  name="phone"
		  value={phone}
				onChange={(e) => setPhone(e.target.value)} />		
			<input
		  type="text"
		  placeholder="Product Name"
		  name="product"
		  value={product}
		 onChange={(e) => setProduct(e.target.value)} />	
			<input
		  type="text"
		  placeholder="Location"
		  name="location"
		  value={location}
		  onChange={(e) => setLocation(e.target.value)}/>		
			<input
		  type="text"
		  placeholder="Product-category"
		  name="category"
		  value={category}
					onChange={(e) => setCategory(e.target.value)} />
			<input
		  type="text"
		  placeholder="Product-code"
		  name="code"
		  value={code}
		 onChange={(e) => setCode(e.target.value)} />	
			<input
		  type="text"
		  placeholder="Review"
		  name="review"
		  value={review}
		onChange={(e) => setReview(e.target.value)} />	
				  <button type="submit">Click To Order</button> 
			<Link to="/orders"><button>Check My Orders</button>	</Link>
			</form>
			</div>
	    </div>
	 );
}
 
export default OrderForm;
