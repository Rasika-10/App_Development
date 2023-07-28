

import React from "react";
import './homepage.css';
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
                  <Link className="navbar-brand" to={'/sign-up'}>
                  <p> Admin Login </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
        <img src={profile} alt="profile" className="profile-main" />
        <div className="home-main" >
         <h1 style={{fontFamily:"cursive",fontSize:"38px"}} >Online Voting <br />And <br />Polling System</h1>
         <div className="quote">
            <ul className="list-unstyled">
                <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i> “It's not enough to just want change. You have to go and make a change by voting."</li>
                <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i>"We have the power to make a difference. But we need to VOTE."</li>
                <li className="mb-1" ><i className="fas fa-check-circle me-2 text-success"></i>Voting is your right. Try to do it right.</li>
            </ul>
        </div>
     
   

 
     


     

<footer class="text-center text-black  bg-white"  >
<section class="d-flex justify-content-center  border-bottom">

 <p style={{paddingLeft:"300px"}}>Get connected with us on social networks:</p>
  <div class="container p-2 pb-0">
   
    <section class="mb-4">
  
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor:"#3b5998"}}
        href="#!"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

 
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor:"#55acee"}}
        href="#!"
        role="button"
        ><i class="fab fa-twitter"></i
      ></a>

     
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor:"#dd4b39"}}
        href="#!"
        role="button"
        ><i class="fab fa-google"></i
      ></a>

   
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor:"#ac2bac"}}
        href="#!"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>

    
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#0082ca"}}
        href="#!"
        role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
  
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#333333"}}
        href="#!"
        role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
  
  </div>
  </section>
  <section class="">
    <div class="container text-center text-md-start mt-5">

      <div class="row mt-3">
  
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
          <h5 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-5 text-secondary"></i>About Us
          </h5>
          <p>
          Today voting means - travelling to a booth, standing there in queue for hours, 
          getting hand inked to vote. Lets voter vote directly from their mobile, 
          from the comforts of their homes and that also within few seconds.
          </p>
        </div>
     

       
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h5 class="text-uppercase fw-bold mb-4">
            Products
          </h5>
          <p>
            <a href="#!" class="text-reset">Spring Boot</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React JS</a>
          </p>
          <p>
            <a href="#!" class="text-reset">SQL</a>
          </p>
          <p>
            <a href="#!" class="text-reset">HTML,CSS,JS</a>
          </p>
        </div>
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
        <h5 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-5 text-secondary"></i>Our Focus
          </h5>
          <p>
          We are a VOTING focused platform. We are not a market survey tool like Survey Monkey or opinion 
          poll tool like poll daddy. Hence, we are also very focused on 
          SECURITY and AUTHENICATION, unlike market survey or polling platforms where these are not major concern area.
          </p>
          
        </div>
    
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
   
          <h5 class="text-uppercase fw-bold mb-4">Contact</h5>
          <p><i class="fas fa-home me-3 text-secondary"></i> COIMBATORE</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            evoting@example.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
        </div>
  
      </div>
      </div>
      </section>
  <div class="text-center p-4" style={{backgroundColor: "LightGrey"}}>
    © 2023 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">OnlineVoting.com</a>
  </div>

</footer>
        </div>
        
  
   </>
     );
}

export default HomePage;
