import React,{useState,useEffect} from "react"
import Hero from "./Component/Hero";
import InfoSection from "./Component/InfoSection";
import Navbar from "./Component/Navbar";
import { InfoData } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyle";
import Footer from "./Component/Footer";
import { Routes, Route } from "react-router-dom"
// import Rentals from "./Component/Rentals";
import RentalList from "./Component/RentalList";
import BookingForm from "./Component/BookingForm";
import BookList from "./Component/Booklist"


  
  
  
function App() {

  const [rentals, setRentals] = useState([])
  const [book,setBook]=useState([])

  useEffect(() => {
    fetch('https://jack132.herokuapp.com/homes')
      .then((res) => res.json())
    .then((rentals)=>setRentals(rentals))
  }, [])
  
//booking data
  useEffect(() => {
    fetch("https://jack132.herokuapp.com/booking")
      .then((res) => res.json())
      .then((book) => setBook(book));
  },[]);

  //function to update booking state
  function handleBook(newBook) {
    setBook([...book,newBook])
  }
 
  return (
    <>
    
    <GlobalStyle/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero slides={SliderData} />} />
        <Route path="/rentals" element={<RentalList rentals={rentals} />} />
        <Route path="/booking" element={<BookingForm onBook={handleBook} />} />
        <Route path="/bookings" element={<BookList bookList={book} />} />
      </Routes>

      <InfoSection{...InfoData} />
    
        <Footer />
    
    </>
  );
}

export default App;
