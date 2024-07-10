import React from 'react';
import '../App.css'

// Functional component for displaying business information
function Business() {
    return (
        <div className="business-container">
            <h2>Our Business</h2>
            <div className="business-info">
                <p>Welcome to Our Business!</p>
                <p>We specialize in providing innovative solutions for businesses of all sizes.</p>
                <p>Contact us today to learn more about our services.</p>
            </div>
            <div className="business-image-container">
                <img src="/images/business-office.jpg" alt="Business Office" className="business-image" />
            </div>
        </div>
    );
}

export default Business;
