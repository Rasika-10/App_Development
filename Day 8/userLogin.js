import React from "react";
import './userLogin.css';
import profile from './images/login.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from "./images/animation-admin.mp4";

function UserLogin() {
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
     <div className="main-user">
         < video className='videoTag-user' width={"50%"} heigth={"51%"} autoPlay loop muted>
              <source src={logo}   type='video/mp4' />
           </video>
       <div className="sub-main-user">
         <div>
          <div>
          </div>
            <div className="imgs-user">
                <div className='container-image-user'>
                  <img src={profile} alt="profile" className="profile-user"/>
                </div>
            </div>
            <div>
                <h1 className="h1-login-user">User Login </h1>
            </div>
            <br></br>
            <form>
					  <div class="input-group form-group">
						 <div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-envelope"></i></span>
						<input type="email" class="form-control" placeholder="email id" required/>
						</div>
					</div>

					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						<input type="password" class="form-control" placeholder="password" required/>
						</div>
					</div>
					
				</form>
					<div class="form-group">
              <Link to='/sidebarVoter'><input type="submit" value="Login" class="btn float-center login_btn"/></Link>
					</div>
         <br></br>
         <p>New Register??</p>    
          <div class="d-flex justify-content-center links">
                    <Link to='/RegistrationV' style={{paddingLeft:"18px"}}>User Registration</Link> <br></br>
          
                   
				   </div>
                     
                      
                    

         </div>
    
      </div>
     </div>
     </>
     );
}

export default UserLogin;