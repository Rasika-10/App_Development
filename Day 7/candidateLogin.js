import React from "react";
import './userLogin.css';
import profile from './images/login.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function CandidateLogin() {
    return ( 

     
     <div className="main">
        
       <div className="sub-main ">
         <div>
            <div className="imgs">
                <div className='container-image'>
                  <img src={profile} alt="profile" className="profile"/>
                </div>
            </div>
            <div>
                <h1 className="h1-login">Candidate Login </h1>
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
                    
                    <Link to='/RegistrationC'>Candidate Registration</Link>
		 </div>
                     
                      
                    

         </div>
    
      </div>
     </div>
    
     );
}

export default CandidateLogin;