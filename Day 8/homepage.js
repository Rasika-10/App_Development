import React from "react";
import './homepage.css'
import { Link } from "react-router-dom";
import profile from"./images/main.jpg";
function HomePage() {
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
      
      
            <img src={profile} alt="profile" className="profile-main"/>
        <div className="home-main" >
         <h1 style={{fontFamily:"cursive",fontSize:"38px"}} >Online Voting <br></br>And <br></br>Polling System</h1>
         <div className="quote">

            <ul class="list-unstyled">
                <li class="mb-1"><i class="fas fa-check-circle me-2 text-success"></i> “It's not enough to just want change .You have to go and make a change by voting."</li>
                <li class="mb-1"><i class="fas fa-check-circle me-2 text-success"></i>"We have the power to make a difference. But we need to VOTE." </li>
                <li class="mb-1" ><i class="fas fa-check-circle me-2 text-success"></i>Voting is your right. Try to do it right.</li>
            </ul>
        </div>
        </div>
        
       
 
   </>
     );
}

export default HomePage;