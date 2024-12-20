import logo from '../logo.svg';
import '../App.css';

import '../Anim.css';
import { Helmet } from 'react-helmet';
import bgvideo from '../static/bgvideo.mp4'
import React, { useState, useEffect,useRef } from 'react';


function Home() {

  const texts = [
    "Android Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Developer"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0); // Store the current character index
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 100; // Speed in milliseconds

  useEffect(() => {
    let typingInterval;

    const typeText = () => {
      // Check if we're typing and still have characters left in the current text
      if (isTyping && charIndex < texts[currentTextIndex].length) {
        typingInterval = setTimeout(() => {
          setCurrentText((prev) => prev + texts[currentTextIndex][charIndex]);
          setCharIndex((prev) => prev + 1); // Move to the next character

          // If we typed all the characters, stop typing and start deleting
          if (charIndex === texts[currentTextIndex].length - 1) {
            setTimeout(() => {
              setIsTyping(false); // Start deleting after typing is done
            }, typingSpeed * 2); // Wait before starting to delete
          }
        }, typingSpeed);
      } else if (!isTyping && charIndex > 0) {
        // If we're deleting, remove one character at a time
        typingInterval = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1); // Move back to the previous character

          // If all characters are deleted, go to the next text
          if (charIndex === 1) {
            setTimeout(() => {
              setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Go to next text
              setIsTyping(true); // Start typing again
            }, typingSpeed);
          }
        }, typingSpeed);
      }
    };

    typeText(); // Start typing and deleting

    return () => {
      clearTimeout(typingInterval); // Cleanup the interval when the component unmounts or on state change
    };
  }, [charIndex, isTyping, currentTextIndex, texts]);



  return (
    <div className="Home">

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

      <section className="hero slide-up">
        <div className="hero-container">
        <div className="l-item">
          <h1 className="text-slide-up-anim">I'm JORAJ J R</h1>
          <h2>I'm a <span>{currentText}</span></h2>
          <p >
          I am a versatile developer with expertise in Android, frontend, backend, and DevOps. With a passion for building seamless and efficient applications, I create intuitive user interfaces, robust backend systems, and implement scalable DevOps practices to ensure smooth deployment and continuous integration. I thrive on solving complex problems and delivering high-quality solutions across the entire software development lifecycle.</p>
          <a href="https://shorturl.at/RX0Vo">My Resume</a>
        </div>
        <img className='slide-right' src="me2.jpg"></img>
        </div>

        <a href='#about' className='shake' >
        <div className="scroll-down">
        <h2> <i class="fa-solid fa-computer-mouse"></i> &nbsp;SCROLL DOWN</h2>
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"/>
        </svg>
        </div>
        </a>

      </section>

      

      <section className="about flex-box" id='about'>
        <img src="me.jpg"/>
        <div className='about-right'>
        <div className='hi-head-cont'>
        <h2>Hi!</h2>
        <div className="hi-head"></div>
        </div>
          <h2>I'm a <span>{currentText}</span></h2>
          <p>I'm a skilled developer specializing in Android, frontend, backend, and DevOps. I build user-friendly apps, scalable systems, and streamline deployment processes to deliver high-quality, efficient solutions.</p>

          <div className='about-item-container'>

            <div className='about-item-row'>
              <h4>Name</h4>
              <p>Joraj J R</p>

              <h4>Phone</h4>
              <p>+91 8086786159</p>
            </div>

            <div className='about-item-row'>
              <h4>Email</h4>
              <p>myselfjoraj@proton.me</p>

              <h4>Job</h4>
              <p>Android Developer</p>
            </div>

            <div className='about-item-row'>
              <h4>Age</h4>
              <p>22</p>

              <h4>From</h4>
              <p>Trivandrum</p>
            </div>


          </div>

          <div className='buttons-flex'>
            <a href="https://shorturl.at/RX0Vo">My Resume</a>
            <a href="/contact">Contact Me</a>
          </div>
          
        </div>
      </section>

      <section className='skill'>
        <h1>What I Know</h1>
        <h2>My Skill</h2>
        <div className='skill-container'>
        <div className='skill-item-row'>
          <div className='skill-item'>
            <h4>Web Developement</h4>
            <span>80%</span>
          </div>
          <div className='progress-bar-border'>
            <div className='progress-bar1'></div>
          </div>

          <div className='skill-item'>
            <h4>Android Developement</h4>
            <span>90%</span>
          </div>
          <div className='progress-bar-border'>
          <div className='progress-bar2'></div>
          </div>
    
        </div>

        <div className='skill-item-row'>
          <div className='skill-item'>
            <h4>DevOps Developement</h4>
            <span>68%</span>
          </div>
          <div className='progress-bar-border'>
            <div className='progress-bar3'></div>
          </div>

          <div className='skill-item'>
            <h4>Wordpress Developement</h4>
            <span>88%</span>
          </div>
          <div className='progress-bar-border'>
          <div className='progress-bar4'></div>
          </div>
        </div>
    
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

export default Home;
