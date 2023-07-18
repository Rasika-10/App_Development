import React from "react";
import './admin.css';
import profile from './images/admin.jpg';
import { Link } from "react-router-dom";
import logo from "./images/animation.mp4";
function AdminLogin() {
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
     <div className="main-admin">
        < video className='videoTag-admin' width={"50%"} heigth={"50%"} autoPlay loop muted>
              <source src={logo}   type='video/mp4' />
           </video>
       <div className="sub-main-admin ">
         <div>
            <div className="imgs-admin">
                <div className='container-image-admin'>
                  <img src={profile} alt="profile" className="profile-admin"/>
                </div>
            </div>
            <div>
                <h1 className="h1-login-admin">Admin Login </h1>
            </div>
            <br></br>
            <form>
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
					
          <br></br>
          <br></br>
					<div class="form-group">
						<Link to='/sidebar'><input type="submit" value="Login" class="btn float-center login_btn"/></Link>
					</div>
				</form>
                   
                   
              
                      
                    

         </div>
    
      </div>
     </div>
     </>
     );
}

export default AdminLogin;