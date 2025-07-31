import React, { useState } from 'react';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numberOfTickets, setNumberOfTickets] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking logic
        console.log(`Booking for ${name} with ${numberOfTickets} tickets.`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Number of Tickets:</label>
                <input type="number" value={numberOfTickets} onChange={(e) => setNumberOfTickets(e.target.value)} min="1" required />
            </div>
            <button type="submit">Book</button>
        </form>
    );
};

export default BookingForm;