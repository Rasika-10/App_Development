import React from "react";
import './candidateLogin.css';
import profile from './images/login.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from "./images/animation-admin.mp4";

function CandidateLogin() {
    return ( 

     
      <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: "WhiteSmoke",padding:"2px"}} >
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav pills"  style={{paddingBottom:"5px"}}>
                
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
       <div className="sub-main-candid ">
         <div>
            <div className="imgs-candid">
                <div className='container-image-candid'>
                  <img src={profile} alt="profile" className="profile-candid"/>
                </div>
            </div>
            <div>
                <h1 className="h1-login-candid">Candidate Login </h1>
            </div>
            <br></br>
            <form className="form">
					  <div class="input-group form-group">
						 <div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-envelope"></i></span>
						<input type="email" class="form-control" placeholder="email id"/>
						</div>
					</div>

					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						<input type="password" class="form-control" placeholder="password"/>
						</div>
					</div>
					
				</form>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-center login_btn"/>
					</div>
         <br></br>
                   
              
          <div class="d-flex justify-content-center links">
                    
                    <Link to='/RegistrationC' style={{paddingLeft:"18px"}}>Candidate Registration</Link>
		 </div>
                     
                      
                    

         </div>
    
      </div>
        < video className='videoTag-candid' width={"55%"} heigth={"55%"} autoPlay loop muted>
              <source src={logo}   type='video/mp4' />
           </video>
     </div>
     </>
     );
}

export default CandidateLogin;