import React from 'react';
import '../App.css'

// Functional component for a breakfast meeting
function BreakfastMeeting() {
    return (
        <div className="meeting-container">
            <h2>Breakfast Meeting Information</h2>
            <div className="image-container">
                <img src="/images/meeting-room.jpg" alt="Meeting Room" className="meeting-image" />
            </div>
            <div className="meeting-details">
                <p>Date: July 15, 2024</p>
                <p>Time: 8:30 AM</p>
                <p>Location: Conference Room A</p>
                {/* Additional meeting details */}
            </div>
        </div>
    );
}

export default BreakfastMeeting;
