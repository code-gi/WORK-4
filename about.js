import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <h1>INVIX MEDIA</h1>
      <p>Our mission is to deliver accurate, timely, and<br> unbiased news coverage that informs, educates, and empowers our readers</br></p>
      <p>To become the leading digital platform for <br>insightful journalism, fostering a well-informed society and promoting </br>transparency in governance.</p>
      
      <h2>Our Team</h2>
      <ul>
        {AboutPage.team.map(member => (
          <li key={member.name}>
            {member.name} - {member.position}
          </li>
        ))}
      </ul>
      
      <h2>Contact Us</h2>
      <p>Email: invixmedia@gmail.com</p>
      <p>Phone:00000000</p>
      <p>Address:william street</p>
      
      <h2>Follow Us</h2>
      <ul>
        <li><a href={AboutPage.socialMedia.twitter}>Twitter</a></li>
        <li><a href={AboutPage.socialMedia.facebook}>Facebook</a></li>
        <li><a href={AboutPage.socialMedia.instagram}>Instagram</a></li>
        {/* Add more social media links if needed */}
      </ul>
    </div>
  );
}

export default AboutPage;
