// import React from "react";
// import './admin.css';
// import profile from './images/admin.jpg';
// import { Link } from "react-router-dom";
// import logo from "./images/animation.mp4";
// function AdminLogin() {
//     return ( 
    

     
//       <>
//          <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: "WhiteSmoke",padding:"2px"}} >
//           <div className="container">
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav pills" style={{paddingBottom:"5px"}}>
                
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
//      <div className="main-admin">
//         < video className='videoTag-admin' width={"50%"} heigth={"50%"} autoPlay loop muted>
//               <source src={logo}   type='video/mp4' />
//            </video>
//        <div className="sub-main-admin ">
//          <div>
//             <div className="imgs-admin">
//                 <div className='container-image-admin'>
//                   <img src={profile} alt="profile" className="profile-admin"/>
//                 </div>
//             </div>
//             <div>
//                 <h1 className="h1-login-admin">Admin Login </h1>
//             </div>
//             <br></br>
//             <form>
// 					  <div class="input-group form-group">
// 						<div class="input-group-prepend">
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
					
//           <br></br>
//           <br></br>
// 					<div class="form-group">
// 						<Link to='/sidebar'><input type="submit" value="Login" class="btn float-center login_btn"/></Link>
// 					</div>
// 				</form>
                   
                   
              
                      
                    

//          </div>
    
//       </div>
//      </div>
//      </>
//      );
// }

// export default AdminLogin;

import React, { useState } from "react";
import './admin.css';
import profile from './images/login.png';
import { Link } from 'react-router-dom';
import logo from "./images/animation.mp4";

function AdminLogin() {
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

   
    if (!emailError && !passwordError) {
      window.location.href = '/adminHome'; 
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
                  <Link className="navbar-brand" to={'/sign-up'}>
                  <p> Admin Login </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
     <div className="main-candid">
         < video className='videoTag-admin' width={"50%"} heigth={"51%"} autoPlay loop muted>
              <source src={logo}   type='video/mp4' />
           </video>
       <div className="sub-main-admin">
         <div>
          <div>
          </div>
            <div className="imgs-admin">
                <div className='container-image-admin'>
                  <img src={profile} alt="profile" className="profile-admin"/>
                </div>
            </div>
            <div>
                <h1 className="h1-login-admin">Admin Login </h1>
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
        <br></br>
        <div class="form-group">
        <input type="submit" value="Login" class="btn float-center login_btn"/>
					</div>
       
        
       
      </form>
      </div>
                     
                      
                    

               </div>
                
           </div>
                
                
    </>
  );
}

export default AdminLogin;
