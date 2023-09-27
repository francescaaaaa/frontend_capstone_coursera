import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
import "./style.css"

const ConfirmedBooking = () => {
    const navigate = useNavigate();
    const [booking, setBooking] = useState({date:null,time:null,guest:null,occasion:null});
  
    useEffect(() => {
      const booking = localStorage.getItem("Bookings");
      if (booking) {
        setBooking(JSON.parse(booking));
      };
    }, []);

    return (
        <div className="container confirmed-booking">
            <FontAwesomeIcon icon={faCircleCheck} size="3x" />
            <h2>Your reservation has been confirmed.</h2>
            <h2>Confirmation details</h2>
            <div className='details'><strong>Occasion:</strong> {booking.occasion}</div>
            <div className='details'><strong>Guests:</strong> {booking.guest}</div>
            <div className='details'><strong>Date:</strong> {booking.date}</div>
            <div className='details'><strong>Time:</strong> {booking.time}</div>
            <button onClick={()=> navigate("/")}>Back to home</button>
        </div>
    );
};

export default ConfirmedBooking;