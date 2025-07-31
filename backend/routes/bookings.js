const express = require('express');
const router = express.Router();

// Sample route for getting all bookings
router.get('/', (req, res) => {
    res.send('Get all bookings');
});

// Sample route for creating a new booking
router.post('/', (req, res) => {
    res.send('Create a new booking');
});

// Sample route for getting a booking by ID
router.get('/:id', (req, res) => {
    res.send(`Get booking with ID: ${req.params.id}`);
});

// Sample route for updating a booking by ID
router.put('/:id', (req, res) => {
    res.send(`Update booking with ID: ${req.params.id}`);
});

// Sample route for deleting a booking by ID
router.delete('/:id', (req, res) => {
    res.send(`Delete booking with ID: ${req.params.id}`);
});

module.exports = router;