import './App.css';
import { useEffect } from 'react';
import profileImage from './assets/images/man.png'; 
import logoImage from './assets/images/newlogo.png'; 
import instaImage from './assets/images/instagram.png'; 
import fbImage from './assets/images/facebook.png';
import linkedImage from './assets/images/linkedin.png';
import twitImage from './assets/images/twitter.png';
import ytImage from './assets/images/youtube.png';
import manImage from './assets/images/man2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.3 });

    const elements = document.querySelectorAll('.fade-on-scroll');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.text-and-image-container');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header>
        <div className="logo-section">
          <img src={logoImage} alt="Logo" className="logo-image" />
          <div className="name-title">
            <p className="name">Vishwa Wijesakare</p>
            <p className="title">Undergraduate</p>
          </div>
        </div>
        <div className="contact-info">
          <p className="contact">Email: araliyawijesakare@gmail.com | Phone: +94 70 233 1284</p>
          <a href="https://www.instagram.com/vishwa_wijesakare?igsh=anpnZGR5N2EwdDB5"><img src={instaImage} alt="Insta" className="insta-image" /></a>
          <a href="https://www.facebook.com/araliya.wijesakara"><img src={fbImage} alt="fb" className="fb-image" /></a>
          <a href="https://www.linkedin.com/in/vishwa-wijesakare-752040247"><img src={linkedImage} alt="linkedin" className="lin-image" /></a>
          <a href="https://x.com/VWijesakare"><img src={twitImage} alt="twitter" className="twit-image" /></a>
          <a href="https://www.youtube.com/@vishwawijesakare4157"><img src={ytImage} alt="youtube" className="yt-image" /></a>
        </div>
      </header>
      <hr className="nav-line"/>
      <div className="first-section">
        <div>
          <h1 className="News">Hello, I'm Vishwa!</h1>
          <p className="under">- Tech enthusiast -</p>
          <button className="contact-btn">Contact Me</button>
        </div>
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="scroll-down" onClick={scrollToNextSection}>
          <FontAwesomeIcon icon={faChevronDown} className="scroll-icon" />
        </div>
      </div>
      <div className="text-and-image-container fade-on-scroll">
        <img src={manImage} alt="Man" className="man2-image" />
        <div className="text-section">
          <h1 className="News2">Who am I?</h1>
          <p>I’m a versatile software developer with strong expertise in Flutter, React, and Java. Fueled by a deep passion for software development and an eagerness to continuously grow, 
            I thrive in collaborative settings and am excited to contribute to cutting edge projects. 
            My aim is to apply my technical expertise and collaborative skills to create meaningful solutions while further advancing my knowledge and capabilities in the field.</p>
       
          <h2>I'm good at:</h2>
          <ul className="skills-list">
            <li><FontAwesomeIcon icon={faCheck} className="black-tick" /> Flutter Development</li>
            <li><FontAwesomeIcon icon={faCheck} className="black-tick" /> React Development</li>
            <li><FontAwesomeIcon icon={faCheck} className="black-tick" /> Java Programming</li>
            <li><FontAwesomeIcon icon={faCheck} className="black-tick" /> Problem Solving</li>
            <li><FontAwesomeIcon icon={faCheck} className="black-tick" /> Team Collaboration</li>
          </ul>
          <div className="button-group">
            <button className="btn-primary">Portfolio</button>
            <button className="btn-secondary">Download CV</button>
          </div>
        </div>
      </div>

      <div className="text-and-image-container fade-on-scroll">
        <img src={manImage} alt="Man" className="man2-image" />
        <div className="text-section">
          <h1 className="News2">Who am I?</h1>
          <p>I’m a versatile software developer with strong expertise in Flutter, React, and Java. Fueled by a deep passion for software development and an eagerness to continuously grow, 
            I thrive in collaborative settings and am excited to contribute to cutting edge projects. 
            My aim is to apply my technical expertise and collaborative skills to create meaningful solutions while further advancing my knowledge and capabilities in the field.</p>
       
          <h2>I'm good at:</h2>
          <ul className="skills-list">
            <li><FontAwesomeIcon icon={faCheck} className="black-tick" /> Flutter Development</li>
            <li><FontAwesomeIcon icon={faCheck} className="black-tick" /> React Development</li>
            <li><FontAwesomeIcon icon={faCheck} className="black-tick" /> Java Programming</li>
            <li><FontAwesomeIcon icon={faCheck} className="black-tick" /> Problem Solving</li>
            <li><FontAwesomeIcon icon={faCheck} className="black-tick" /> Team Collaboration</li>
          </ul>
          <div className="button-group">
            <button className="btn-primary">Portfolio</button>
            <button className="btn-secondary">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
