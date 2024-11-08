import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Helmet } from 'react-helmet';
import Main from './Main';

function App() {
  return (
    <div className="App">
      
      <Main/>

    </div>
  );
}

export default App;
