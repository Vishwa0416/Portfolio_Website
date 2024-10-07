import './App.css';
import profileImage from './assets/images/man.png'; 
import logoImage from './assets/images/newlogo.png'; 
import instaImage from './assets/images/instagram.png'; 
import fbImage from './assets/images/facebook.png';
import linkedImage from './assets/images/linkedin.png';
import twitImage from './assets/images/twitter.png';

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
          <img src={instaImage} alt="Insta" className="insta-image" />
          <img src={fbImage} alt="fb" className="fb-image" />
          <img src={linkedImage} alt="linkedin" className="lin-image" />
          <img src={twitImage} alt="twitter" className="twit-image" />
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
