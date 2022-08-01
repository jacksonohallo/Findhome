import React from 'react'
import { Link } from 'react-router-dom'
import Rentals from './Rentals'

const RentalList = ({ rentals }) => {
    const rentalsData = rentals.map((rental) => {
        return <Rentals key={rental.id}
            name={rental.name}
            image={rental.image}
            description={rental.description}
            price={rental.price}
            category={rental.category}
            code={rental.code}
        />
    })


    return (
        <div>
            <h1>Rental List</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>{rentalsData}</div>
            <Link to="/booking">   <button>Click To Book</button></Link>
         
        </div>
    )
}

export default RentalList

