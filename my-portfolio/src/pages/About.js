import logo from '../logo.svg';
import '../App.css';
import { Helmet } from 'react-helmet';


function About() {
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

      <section className="AboutMeHero">
        <h1>About Me</h1>
      </section>

      <section className='about flex-box'>
      <img src="https://cdn.gadgets360.com/content/assets/entertainment/shah-rukh-khan-poster.jpg"/>
      <div className='about-right'>
        <h1>Joraj J R</h1>
        <h2>Android Developer</h2>
        <p>I'm dedicated in building intuitive and high-performance mobile applications. With a deep understanding of Android frameworks and 
          a passion for crafting seamless user experiences. With a deep understanding of Android frameworks and a passion for crafting seamless user experiences.
        </p>
      </div>
      </section>

      <section className='education'>
        <h1>Educational Qualifications</h1>

        {/* -- Education item -- */}
        <div className='edu-item flex-box'>
          <img src='ku_logo.jpg'></img>
          <div className='about-right'>
          <h1>University of Kerala</h1>
          <h2>MSc. Computer Science (2024 - Present)</h2>
          <p>I am currently doing my Post Graduation in Computer Science from Karyavattam Campus, Trivandrum</p>
          </div>
        </div>
        {/* -- end -- */}
        
        {/* -- Education item -- */}
        <div className='edu-item flex-box'>
          <img src='ku_logo.jpg'></img>
          <div className='about-right'>
          <h1>University of Kerala</h1>
          <h2>BSc. Computer Science (2021 - 2024)</h2>
          <p>I have completed my Under Graduation in Computer Science from University Institute of Technology, Trivandrum</p>
          </div>
        </div>
        {/* -- end -- */}

        {/* -- Education item -- */}
        <div className='edu-item flex-box'>
          <img src='https://upload.wikimedia.org/wikipedia/en/9/95/CBSE_new_logo.svg'></img>
          <div className='about-right'>
          <h1>Central Board of Secondary Education</h1>
          <h2>Higher Secondary Education (2021)</h2>
          <p>I have completed my Higher Secondary Education from Blue Mount Public School, Trivandrum</p>
          </div>
        </div>
        {/* -- end -- */}

      </section>

      <section className='certification'>
        <h1>Certifications</h1>
        <div className='certificate-container flex-box'>

        <div className='cert-holder'>
          <img src='association_for_computing_machinery_logo.jpg'></img>
          <h4>Association for Computing Machinery</h4>
          <p>Certified Programmer in Machine Learning with Python</p>
        </div>

        <div className='cert-holder'>
          <img src='google_analytics.png'></img>
          <h4>Google LLC</h4>
          <p>Certified Programmer in Data Analytics with Google</p>
        </div>

        <div className='cert-holder'>
          <img src='https://www.nasscomfoundation.org/images/nasscom-logo.svg'></img>
          <h4>Nasscom Foundation</h4>
          <p>Certified Programmer in Python</p>
        </div>

        <div className='cert-holder'>
          <img src='steyp.jpg'></img>
          <h4>Steyp</h4>
          <p>Certified Programmer in UI/UX Engineering from Steyp from Talrop</p>
        </div>

        </div>

      </section>

      <section className='certification'>
        <h1>Work Shops</h1>
        <div className='certificate-container flex-box'>

        <div className='cert-holder'>
          <img src='wt_tech.png'></img>
          <h4>White Track Technology</h4>
          <p>Workshop in Java Database Connector</p>
        </div>

        <div className='cert-holder'>
          <img src='youwin1.png'></img>
          <h4>You Win Technologies</h4>
          <p>Workshop in Mobile Engineering</p>
        </div>

        <div className='cert-holder'>
          <img src='career_avenues.jpg'></img>
          <h4>Career Avenues</h4>
          <p>Workshop in Logic Building & Interview Prepration</p>
        </div>

        <div className='cert-holder'>
          <img src='ms_logo.png'></img>
          <h4>Microsoft Corporation</h4>
          <p>Workshop in Devops & Webrtc p2p mechanism</p>
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
            <li><a href="#">+91 8086786159</a></li>
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

export default About;
