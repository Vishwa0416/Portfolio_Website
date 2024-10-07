import './App.css';
import profileImage from './assets/images/man.png'; 
import logoImage from './assets/images/newlogo.png'; 
import instaImage from './assets/images/instagram.png'; 
import fbImage from './assets/images/facebook.png';
import linkedImage from './assets/images/linkedin.png';
import twitImage from './assets/images/twitter.png';
import ytImage from './assets/images/youtube.png';

function App() {
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
      </div>
    </div>
  );
}

export default App;
