import logo from '../logo.svg';
import '../App.css';
import { Helmet } from 'react-helmet';


function Contact() {
  return (
    <div className="About">

      <Helmet>
        <script src="https://kit.fontawesome.com/55917b94b9.js" crossorigin="anonymous"></script>
      </Helmet>

      <nav className="nav-bar-container make-sticky">
        <div className="logo-head"><span>JR</span></div>
        <div className="nav-items">
          <div className="item"><a href='/'>Home</a></div>
          <div className="item"><a href='/about'>About</a></div>
          <div className="item"><a href='/projects'>Projects</a></div>
          <div className="item"><a href='/vision'>Vision</a></div>
          <div className="item"><a href='/contact'>Contact</a></div>
        </div>
      </nav>

      <section className="TopHero">
        <h1>Contact</h1>
      </section>

      <section className='contact'>

        <div className='top-holder'>
             <div className='touch'>
                <h1>Get In Touch</h1>
                <p>We'd love to hear from you.We'd love to hear from you.We'd love to hear from you.
                    We'd love to hear from you.We'd love to hear from you.We'd love to hear from you.We'd love to hear from you. </p>
             </div>

             <div className='element-address'>
                <div className='element-pin flex-box'>
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <h1>My Address</h1>
                <span>MKRA 19,<br></br>Kerala,India</span>
             </div>

             <div className='element-contact'>
                <div className='element-pin  flex-box'>
                    <i class="fa-solid fa-phone"></i>
                </div>
                <h1>My Contact</h1>
                <span>+91 1234567890<br></br>myselfjoraj@proton.me</span>
             </div>
        </div>

        <div className='divider-holder flex-box'>
          <div className='divider'></div>
        </div>

        <div className='social-contact'>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
        </div>

        <div className='divider-holder flex-box'>
          <div className='divider'></div>
        </div>
        
      
        <div className='map-emb'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.346391824742!2d76.8829068758247!3d8.56265169611289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bee3b7df91a7%3A0x5bfd4a26930f8877!2sUniversity%20of%20Kerala%20Karyavattom%20Campus!5e0!3m2!1sen!2sin!4v1729846015701!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <form id="contactForm">
            <h1>Leave me a message</h1>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" 
                       name="name" 
                       placeholder="Your Name" required></input>
                <span class="error-message" id="nameError"></span>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" 
                       name="email" 
                       placeholder="Your Email" required></input>
                <span class="error-message" id="emailError"></span>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" 
                       name="phone" 
                       placeholder="Your Phone Number" required></input>
                <span class="error-message" id="phoneError"></span>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" 
                          name="message" 
                          placeholder="Your Message" 
                          rows="5" required></textarea>
                <span class="error-message" 
                      id="messageError"></span>
            </div>
            <button type="submit" 
                    class="submit-button">
              Send Message
            </button>
        </form>
        </div>

      </section>

      

    

      <section class="footer">
      <div class="footer-row">
      <div class="footer-col">
          <h4>JORAJ J R</h4>
          <p>
            A passionate programmer, graduated from Kerala University.
          </p>
          <div class="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="#">Home Page</a></li>
            <li><a href="#">About Page</a></li>
            <li><a href="#">Vision Page</a></li>
            <li><a href="#">Projects Page</a></li>
            <li><a href="#">Contact Page</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Projects</h4>
          <ul class="links">
            <li><a href="#">Cloud Box Android App</a></li>
            <li><a href="#">React Safe Android App</a></li>
            <li><a href="#">Exa Learn Web App</a></li>
            <li><a href="#">Code Next Web App</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="links">
            <li><a href="#">+918086786159</a></li>
            <li><a href="#">myselfjoraj@proton.me</a></li>
            <li><a href="#">linkedin.com/in/myselfjoraj</a></li>
            <li><a href="#">github.com/myselfjoraj</a></li>
          </ul>
        </div>
        
      </div>
    </section>

    </div>
  );
}

export default Contact;