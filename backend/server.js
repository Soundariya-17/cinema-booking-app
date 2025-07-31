const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Example route for booking a ticket
app.post('/book-ticket', (req, res) => {
    const { movieId, userId, seatNumber } = req.body;
    // Logic to book the ticket
    res.status(200).send({ message: 'Ticket booked successfully!', movieId, userId, seatNumber });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
