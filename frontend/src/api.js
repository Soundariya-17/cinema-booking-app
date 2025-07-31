// API helper functions for booking management

const API_BASE_URL = 'https://api.example.com/bookings'; // Replace with your actual API base URL

// Function to get all bookings
export const getBookings = async () => {
    try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
};

// Function to create a new booking
export const createBooking = async (bookingData) => {
    try {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
};
