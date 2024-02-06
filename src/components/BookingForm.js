import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id='book-date' onChange={(e) => handleChange(e.target.value)} value={date} type='date' required/>
                        </div>

                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {
                                        return <option key={availableTimes}>{availableTimes}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Tell Us How Many Guests:</label>
                            <input id="book-guests" value={guests} onChange={(e) => setGuests(e.target.value)}></input>
                        </div>

                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className='btnReceive'>
                            <input aria-label="on click" type="submit" value="Submit"/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;