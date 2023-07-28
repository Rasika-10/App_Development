// import React from "react";
// import './candidateLogin.css';
// import profile from './images/login.png';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import logo from "./images/animation-admin.mp4";

// function CandidateLogin() {
  
//     return ( 

     
//       <>
//       <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: "WhiteSmoke",padding:"2px"}} >
//           <div className="container">
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav pills"  style={{paddingBottom:"5px"}}>
                
//                 <li className="nav-item">
//                   <Link className="navbar-brand" to={'/'}>
//                         <p style={{paddingLeft:"7px"}}>Home Page</p>
//                   </Link>
                  
//                 </li>
//                 <li className="nav-item">
//                   <Link className="navbar-brand" to={'/sign-in'}>
//                   <p> User Login </p>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="navbar-brand" to={'/signIn'}>
//                   <p> Candidate Login </p>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="navbar-brand" to={'/sign-up'}>
//                   <p> Admin Login </p>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//           <div className="main-candid">
//        <div className="sub-main-candid ">
//          <div>
//             <div className="imgs-candid">
//                 <div className='container-image-candid'>
//                   <img src={profile} alt="profile" className="profile-candid"/>
//                 </div>
//             </div>
//             <div>
//                 <h1 className="h1-login-candid">Candidate Login </h1>
//             </div>
//             <br></br>
//             <form className="form">
// 					  <div class="input-group form-group">
// 						 <div class="input-group-prepend">
// 							<span class="input-group-text"><i class="fas fa-envelope"></i></span>
// 						<input type="email" class="form-control" placeholder="email id"/>
// 						</div>
// 					</div>

// 					<div class="input-group form-group">
// 						<div class="input-group-prepend">
// 							<span class="input-group-text"><i class="fas fa-key"></i></span>
// 						<input type="password" class="form-control" placeholder="password"/>
// 						</div>
// 					</div>
					
// 				</form>
// 					<div class="form-group">
// 						<input type="submit" value="Login" class="btn float-center login_btn"/>
// 					</div>
//          <br></br>
                   
//          <p style={{color:"CaptionText"}}>New Register??</p>      
//           <div class="d-flex justify-content-center links">
                    
//                     <Link to='/RegistrationC' style={{paddingLeft:"18px"}}>Candidate Registration</Link>
// 		 </div>
                     
                      
                    

//          </div>
    
//       </div>
//         < video className='videoTag-candid' width={"55%"} heigth={"55%"} autoPlay loop muted>
//               <source src={logo}   type='video/mp4' />
//            </video>
//      </div>
//      </>
//      );
// }

// export default CandidateLogin;

import React, { useState } from "react";
import './candidateLogin.css';
import profile from './images/login.png';
import { Link } from 'react-router-dom';
import logo from "./images/animation-admin.mp4";

function CandidateLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    // Additional login logic can be added here, e.g., sending the form data to a server for authentication.

    // Perform the redirect to the 'ehome' page if there are no errors
    if (!emailError && !passwordError) {
      window.location.href = '/sidebarVoter'; // Redirect using window.location.href
    }
  };
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: "WhiteSmoke",padding:"2px"}} >
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav pills" style={{paddingBottom:"5px"}}>
                
                <li className="nav-item">
                  <Link className="navbar-brand" to={'/'}>
                        <p style={{paddingLeft:"7px"}}>Home Page</p>
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand" to={'/sign-in'}>
                  <p> User Login </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand" to={'/signIn'}>
                  <p> Candidate Login </p>
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
     <div className="main-candid">
       <div className="sub-main-candid">
         <div>
          <div>
          </div>
            <div className="imgs-candid">
                <div className='container-image-candid'>
                  <img src={profile} alt="profile" className="profile-candid"/>
                </div>
            </div>
            <div>
                <h1 className="h1-login-candid">Candidate Login </h1>
            </div>
            <br></br>
    
      <form onSubmit={handleSubmit}>
        <div className="input-group form-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
            <input
              type="email"
              className="form-control"
              placeholder="email id"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              error={!!emailError}
              helperText={emailError}
            />
          </div>
        </div>
       

        <div className="input-group form-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-key"></i></span>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              error={!!passwordError}
              helperText={passwordError}
            />
          </div>
        </div>
        
        <div class="form-group">
        <input type="submit" value="Login" class="btn float-center login_btn"/>
					</div>
       
        <br />
        <p style={{ color: "CaptionText" }}>New Register??</p>
        <div className="d-flex justify-content-center links">
          <Link to='/RegistrationC' style={{ paddingLeft: "18px" }}>Candidate Registration</Link>
        </div>
      </form>
      </div>
                     
                      
                    

               </div>
         < video className='videoTag-candid' width={"50%"} heigth={"51%"} autoPlay loop muted>
              <source src={logo}   type='video/mp4' />
           </video>
                
           </div>
                
                
    </>
  );
}

export default CandidateLogin;
