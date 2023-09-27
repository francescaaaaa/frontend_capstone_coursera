import BookingForm from "./BookingForm"
import { useReducer } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../../util/temp';
import "./style.css"

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes; 
  };
  
const initializeTimes = initialAvailableTimes => 
[...initialAvailableTimes, ...fetchAPI(new Date())];

const BookingPage = () => {
    const [
      availableTimes, 
      dispatchOnDateChange
    ] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();
  
    const submitData = formData => {
      const response = submitAPI(formData);
      if (response) {
        localStorage.setItem("Bookings", JSON.stringify(formData));
        navigate("/confirmation");}
    }; 
  
    return (
      <div className="bookings">
        <h2>Table reservation</h2>
        <BookingForm 
          availableTimes={availableTimes} 
          dispatchOnDateChange={dispatchOnDateChange} 
          submitData={submitData} 
        />
      </div>
    );
  };

export default BookingPage;