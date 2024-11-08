import logo from '../logo.svg';
import '../App.css';
import { Helmet } from 'react-helmet';


function NotFound() {
  return (
    <div className="NotFound">

      <Helmet>
        <script src="https://kit.fontawesome.com/55917b94b9.js" crossorigin="anonymous"></script>
      </Helmet>

      <section className="AboutMeHero">
        <h1>Currently Working on This Page</h1>
      </section>

      

    </div>
  );
}

export default NotFound;
