import logo from '../logo.svg';
import React from 'react';

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
                <p>Feel free to reach out! Whether you have a question, project idea, or collaboration in mind, I’d love to connect and discuss how we can work together.</p>
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
                <span>+91 8086786159<br></br>myselfjoraj@proton.me</span>
             </div>
        </div>

        <div className='divider-holder flex-box'>
          <div className='divider'></div>
        </div>

        <div className='social-contact'>
            <a href='https://fb.com/myselfjoraj'><i class="fa-brands fa-facebook-f"></i></a>
            <a href='https://x.com/myselfjoraj'><i class="fa-brands fa-twitter"></i></a>
            <a href='https://instagram.com/myselfjoraj'><i class="fa-brands fa-instagram"></i></a>
            <a href='https://linkedin.com/in/myselfjoraj'><i class="fa-brands fa-linkedin"></i></a>
            <a href='https://github.com/myselfjoraj'><i class="fa-brands fa-github"></i></a>
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
          <a href='https://fb.com/myselfjoraj'><i class="fa-brands fa-facebook-f"></i></a>
            <a href='https://x.com/myselfjoraj'><i class="fa-brands fa-twitter"></i></a>
            <a href='https://instagram.com/myselfjoraj'><i class="fa-brands fa-instagram"></i></a>
            <a href='https://linkedin.com/in/myselfjoraj'><i class="fa-brands fa-linkedin"></i></a>
            <a href='https://github.com/myselfjoraj'><i class="fa-brands fa-github"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="/home">Home Page</a></li>
            <li><a href="/about">About Page</a></li>
            <li><a href="http://localhost:4200/vision">Vision Page</a></li>
            <li><a href="http://localhost:4200/projects">Projects Page</a></li>
            <li><a href="/contact">Contact Page</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Projects</h4>
          <ul class="links">
            <li><a href="https://github.com/myselfjoraj/CloudBox">Cloud Box Android App</a></li>
            <li><a href="https://github.com/myselfjoraj/ReactSafe">React Safe Android App</a></li>
            <li><a href="https://github.com/myselfjoraj/ExaLearn">Exa Learn Web App</a></li>
            <li><a href="https://github.com/myselfjoraj/Codenest-Flask">Code Next Web App</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="links">
            <li><a href="tel:918086786159">Mobile : +91 8086786159</a></li>
            <li><a href="mailto:myselfjoraj@proton.me">myselfjoraj@proton.me</a></li>
            <li><a href="https://linkedin.com/in/myselfjoraj">linkedin.com/in/myselfjoraj</a></li>
            <li><a href="https://github.com/myselfjoraj">github.com/myselfjoraj</a></li>
          </ul>
        </div>
        
      </div>
    </section>

    </div>
  );
}

export default Contact;
