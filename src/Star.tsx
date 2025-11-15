import React from 'react';



// Define the Star component
export default function Star ({ filled, onClick }) {
    return (
        <span  onClick={onClick} style={{ cursor: 'pointer' }}>
            {filled ? "★" : "☆"} {/* Filled or empty star */}
        </span>
    );
};



