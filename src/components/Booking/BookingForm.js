import { useState } from "react";
import './style.css'

const BookingForm = ({
    submitData,
    dispatchOnDateChange,
    availableTimes
}) => {
    const maxguest = 10;
    const minguest = 1;
    const earliestDate = new Date().toISOString().split('T')[0];
    const defaultTime = availableTimes[0];
    const occasions = ['Birthday', 'Anniversary'];

    const [date, setDate] = useState(earliestDate);
    const [time, setTime] = useState(defaultTime);
    const [guest, setGuest] = useState(minguest);
    const [occasion, setOccasion] = useState(occasions[0]);

    const handleDateChange = e => {
        setDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    const handleTimeChange = e => setTime(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        submitData({date, time, guest, occasion});
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                data-testid="date-test"
                onChange={handleDateChange}
                required
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" data-testid="time-test" onChange={handleTimeChange} required>
                {availableTimes.map(times =>
                <option data-testid="booking-time-option" key={times}>
                {times}
                </option>
                )}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                min={minguest}
                max={maxguest}
                value={guest}
                id="guests"
                onChange={e=> setGuest(e.target.value)}
                required
            />
            <label htmlFor="res-occasion">Occasion</label>
            <select id="res-occasion" onChange={e=>setOccasion(e.target.value)} value={occasion} required>
                {occasions.map(occasion =>
                    <option key={occasion} data-testid="booking-occasion-option">{occasion}</option>
                    )}
            </select>
            <div className="btn">
                <button type="submit">Make your reservation</button>
            </div>
        </form>
    )

};

export default BookingForm;