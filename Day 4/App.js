import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UserRegistration from './components/userRegistration';
import AdminLogin from './components/adminLogin';
import CandidateRegistration from './components/candidateRegister';
import UserLogin from './components/userLogin';
import HomePage from './components/homepage';

function App() {
  return (
    <div>
      <>
  <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="nav nav-pills">
                
                <li className="nav-item">
                  <Link className="navbar-brand" to={'/'}>
                    Home page
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand" to={'/sign-in'}>
                    User Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand" to={'/sign-up'}>
                    Admin Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<UserLogin />} />
              <Route path="/sign-up" element={<AdminLogin/>} />
              <Route path="/RegistrationV" element={<UserRegistration/>}/>
              <Route path="/RegistrationC" element={<CandidateRegistration/>}/>
       
      </Routes>
     
            
          </div>
        </div>
      </div>
    </Router>
   </>
    </div>
  );
}

export default App;
