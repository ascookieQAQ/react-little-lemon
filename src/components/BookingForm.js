import React, { useState } from 'react';

const BookingForm = () => {
    const [date, setDate] = useState("");
    const handleChange = (e) => {
        setDate(e);
    }
    return (
        <header>
            <section>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' onChange={(e) => handleChange(e.target.value)} value={date} type='date' required/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;