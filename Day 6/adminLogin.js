import React from "react";
import './admin.css';
import profile from './images/admin.jpg';


function AdminLogin() {
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
                <h1 className="h1-login">Admin Login </h1>
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
						<input type="submit" value="Login" class="btn float-center login_btn"/>
					</div>
				</form>
                   
                   
              
                      
                    

         </div>
    
      </div>
     </div>
    
     );
}

export default AdminLogin;