import React from 'react';
import bg from '../assets/images/bg.jpg';
import logo from '../assets/images/logo2.png';
import '../componets/Header.css'; // Correct path to your CSS file
import av1 from '../assets/images/av1.jpg'
import av2 from '../assets/images/av2.jpg'
import av3 from '../assets/images/av3.jpg'
import { TbLogin2 } from "react-icons/tb";
import { MdOutlineCreate } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className='underline'>
        <img src={bg} alt="Background" className='bg-fit' />
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Lessons</a></li>
          <li><a href="#">Shows</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </div>
        <header className="header-content">
        <div className="content">
          <h1>Crack the Code to Success with Bit Zarna</h1>
          <p>
            Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.
          </p>
          <div className="button-group">
            <a href="#" className="btn primary">View Courses</a>
            <a href="#" className="btn live">Log In <span><TbLogin2 /></span> </a>
            <a href="#" className="btn live">Create account <span ><MdOutlineCreate /></span> </a>
          </div>

          {/* Students Section */}
          <div className="students-section">
            <div className="students-profiles">
              {/* Assuming these are student images */}
              <img src={av1} alt="Student 1" />
              <img src={av2} alt="Student 2" />
              <img src={av3} alt="Student 3" />
              <img src={av1} alt="Student 4" />
              <img src={av2} alt="Student 5" />
            </div>
            <span>70,000+ Happy Students</span>
          </div>

          {/* Features Section */}
          <div className="features-section">
            <div className="feature-box">Free Web Dev</div>
            <div className="feature-box">Quick Compiler</div>
            <div className="feature-box">Tutorials</div>
            <div className="feature-box">Articles</div>
            <div className="feature-box"> Challenges</div>
            <div className="feature-box">Interview Experiences</div>
            <div className="feature-box">Mock Tests</div>
            <div className="feature-box">Core CS Subjects</div>
          </div>
        </div>
      </header>
      </div>

      
    </>
  );
};

export default Header;
