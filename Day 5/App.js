import logo from './logo.svg';
// import './App.css';

import './components/router.css';
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
      <header>
        
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: "WhiteSmoke"}} >
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="nav nav-pills">
                
                <li className="nav-item">
                  <Link className="navbar-brand" to={'/'}>
                    <p>Home Page</p>
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand" to={'/sign-in'}>
                  <p> User Login </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand" to={'/sign-up'}>
                  <p> Admin Login </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
       </header>
        <div className="auth-wrapper">
         
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<UserLogin />} />
              <Route path="/sign-up" element={<AdminLogin/>} />
              <Route path="/RegistrationV" element={<UserRegistration/>}/>
              <Route path="/RegistrationC" element={<CandidateRegistration/>}/>
       
      </Routes>
     
            
          </div>
     
      </div>
    </Router>
   </>
    </div>
  );
}

export default App;
