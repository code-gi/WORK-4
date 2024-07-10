import React from 'react';
import '../App.css'

// Functional component for displaying educational information
function Education() {
    return (
        <div className="education-container">
            <h2>Our Education Services</h2>
            <div className="education-info">
                <p>Welcome to Our Education Services!</p>
                <p>We provide comprehensive educational solutions for students and institutions.</p>
                <p>Contact us today to explore our courses and educational programs.</p>
            </div>
            <div className="education-image-container">
                <img src="/images/education-classroom.jpg" alt="Education Classroom" className="education-image" />
            </div>
        </div>
    );
}

export default Education;
