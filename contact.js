import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      
      <h2>General Inquiries</h2>
      <p>Email: </p>
      <p>Phone: </p>
      <p>Address: </p>
      
      <h2>Follow Us</h2>
      <ul>
        <li><a href={ContactPage.socialMedia.twitter}>Twitter</a></li>
        <li><a href={ContactPage.socialMedia.facebook}>Facebook</a></li>
        <li><a href={ContactPage.socialMedia.instagram}>Instagram</a></li>
        {/* Add more social media links if needed */}
      </ul>
      
      <h2>Business Inquiries</h2>
      <p>Email: {ContactPage.businessInquiries.email}</p>
      <p>Phone: {ContactPage.businessInquiries.phone}</p>
      
      <h2>Feedback</h2>
      <p>Provide your feedback <a href={ContactPage.feedbackForm}>here</a>.</p>
    </div>
  );
}

export default ContactPage;
