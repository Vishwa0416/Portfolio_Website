import './App.css';
import profileImage from './assets/images/man.png'; 

function App() {
  return (
    <div className="App">
      <div className="first-section">
        <div>
          <h1 className="News">Hello, I'm Vishwa!</h1>
          <p className="under">- Tech enthusiast -</p>
          <button className="contact-btn">Contact Me</button>
        </div>
        <img src={profileImage} alt="Profile" className="profile-image" /> {/* Profile image on the right */}
      </div>
    </div>
  );
}

export default App;
