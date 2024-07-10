// // import logo from './logo.svg';
// // import './App.css';

// //      function App() {
// //   return (
// // <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;




// import React, { useState } from 'react';
// import './App.css';
// import Home from './components/home';
// import AboutPage from './components/about';
// import ContactPage from './components/contact';


// function App() {
//   const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

//   const toggleHamburgerMenu = () => {
//     setIsHamburgerOpen(!isHamburgerOpen);
//   };

//   return (
//     <div className="App">
//       {/* Hamburger Menu */}
//       <div className="hamburger-menu" onClick={toggleHamburgerMenu}>
//         ☰
//       </div>

//       {/* Main Menu Bar */}
//       <div className="main-menu">
//         <div className="left-menu">
//           <a href="#home">Home</a>
//           <a href="#about">About Us</a>
//           <a href="#contact">Contact Us</a>
//         </div>
//         <div className="right-menu">
//         <a href="#facebook">FB</a>
//           <a href="#twitter">TW</a>
//           <a href="#instagram">IG</a>
//         </div>
//       </div>

//       {/* Secondary Menu Bar */}
//       <div className="secondary-menu">
//         <div className="logo">INVIX MEDIA</div>
//         <div className="dropdown-menus">
//           <div className="dropdown">
//             <button className="dropbtn">Content</button>
//             <div className="dropdown-content">
//               <a href="#item1">Latest news</a>
//               <a href="#item2">Program updates</a>
//             </div>
//           </div>
//           <div className="dropdown">
//             <button className="dropbtn">Updates</button>
//             <div className="dropdown-content">
//               <a href="#item1">Morning Breeze</a>
//               <a href="#item2">Breakfast Meeting</a>
//             </div>
//           </div>
//           <div className="dropdown">
//             <button className="dropbtn">Categories</button>
//             <div className="dropdown-content">
//               <a href="#item1">Sports</a>
//               <a href="#item2">Politics</a>
//               <a href="#item3">Business</a>
//               <a href="#item4">Education</a>
//               <a href="#item5">General</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="image-section">
//         <div className="image-item">About Us</div>
//         <div className="image-item">Latest News</div>
//         <div className="image-item">Streaming Time for News</div>
//       </div>

//       {/* Follow Us Section */}
//       <div className="follow-us">
//         <h3>Follow Us</h3>
//         <div className="social-icons">

      
//           <a href="#facebook">FB</a>
//           <a href="#twitter">TW</a>
//           <a href="#instagram">IG</a>
//         </div>
      

//       </div>
      

//       {/* Footer */}
//       <footer>
//         <p>© 2024 INVIX MEDIA. All rights reserved.</p>

        
//       </footer>
//     </div>
    
//   );
// }

// export default App






import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import '../src/App.css';
import LatestNews from './components/LatestNews';
import ProgramUpdates from './components/ProgramUpdates';
import MorningBreeze from './components/MorningBreeze';
import BreakfastMeeting from './components/BreakfastMeetng';
import Sports from './components/Sports';
import Politics from './components/Politics';
import Business from './components/Business';
import Education from './components/Education';
import General from './components/General';
import Home from "./components/home";
import AboutPage from './components/about';
import ContactPage from "./components/contact";


console.log("Hello, world!");


const SecondaryMenuBar = () => (
  <div className="secondary-menu">
    <div className="logo">INVIX MEDIA</div>
    <div className="dropdown-menus">
      <div className="dropdown">
        <button className="dropbtn">Content</button>
        <div className="dropdown-content">
          <Link to="/latest-news">Latest news</Link>
          <Link to="/program-updates">Program updates</Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Updates</button>
        <div className="dropdown-content">
          <Link to="/morning-breeze">Morning Breeze</Link>
          <Link to="/breakfast-meeting">Breakfast Meeting</Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          <Link to="/sports">Sports</Link>
          <Link to="/politics">Politics</Link>
          <Link to="/business">Business</Link>
          <Link to="/education">Education</Link>
          <Link to="/general">General</Link>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <Router>
      <div className="App">
        <SecondaryMenuBar />

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleHamburgerMenu}>
          ☰
        </div>

        {/* Main Menu Bar */}
        <div className="main-menu">
          <div className="left-menu">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="right-menu">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
      </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <div className="image-item">About Us</div>
          <div className="image-item">Latest News</div>
          <div className="image-item">Streaming Time for News</div>
        </div>

        {/* Follow Us Section */}
        <div className="follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#facebook">FB</a>
            <a href="#twitter">TW</a>
            <a href="#instagram">IG</a>
          </div>
        </div>

        {/* Footer */}
        <footer>
          <p>© 2024 INVIX MEDIA. All rights reserved.</p>
        </footer>

        <Switch>
          <Route path='home'component={Home}/>
          <Route path='contact'component={ContactPage}/>
          <Route path='about'component={AboutPage}/>
          <Route path="/latest-news" component={LatestNews} />
          <Route path="/program-updates" component={ProgramUpdates} />
          <Route path="/morning-breeze" component={MorningBreeze} />
          <Route path="/breakfast-meeting" component={BreakfastMeeting} />
          <Route path="/sports" component={Sports} />
          <Route path="/politics" component={Politics} />
          <Route path="/business" component={Business} />
          <Route path="/education" component={Education} />
          <Route path="/general" component={General} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
