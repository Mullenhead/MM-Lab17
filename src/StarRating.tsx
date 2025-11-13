import React, { useState } from 'react';
import Star from './Star.tsx';

const STAR_COUNT = 5;

const StarRating = () => {
    const [rating, setRating] = useState(1);

    // Function to handle star click
    const handleStarClick = (index) => {
        setRating(index + 1); // Set the rating based on clicked star index
    };

    return (
        <div>
            {[...Array(STAR_COUNT)].map((_, index) => (
                <Star
                    key={index}
                    filled={index < rating} // Determine if the star should be filled
                    onClick={() => handleStarClick(index)} // Handle star click
                />
            ))}
             <p className="small text-primary">Customer's rating:</p>
            {/* <p>Customer's rating: {rating}</p> Display the rating */}
        </div>
    );
};

export default StarRating;