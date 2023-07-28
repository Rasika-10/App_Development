

import React from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import profile from './images/login.png';
 import { Link } from 'react-router-dom';
import logo from "./images/animation-admin.mp4";
import { SignInSchema } from './scheme/loginScheme';
import UserAuthService from './service/userAuthService';
import { useDispatch } from "react-redux";
import { addEmails,addToken } from './store/masterSlice';
import './userLogin.css';

const UserLogin = () => {
  const dispatch=useDispatch();
  const initialState = {
    email: "",
    password: "",
  };
  const { values, errors,  handleBlur, handleChange,handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventLogin();
        action.resetForm();
      }
    })

  const eventLogin = async () => {
    try {
      const response = await UserAuthService.loginUserWithEmailAndPassword(values);
      console.log(response);
      var token = response.data.accessToken;
      var userEmail = response.data.email;

      if (response.message != "Request failed with status code 400") {
        setTimeout(() => {
          dispatch(addEmails(userEmail));
          dispatch(addToken(token));
          navigate("/voterHome");
        });
      }
      else {
        <h1>Login failed:(</h1>
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
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
    
      <form onSubmit={handleSubmit}>
        <div className="input-group form-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
            <input
              type="email"
              className="form-control"
              placeholder="email id"
              id="email"
              name="email"
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
             
            />
          </div>
        </div>
       

        <div className="input-group form-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-key"></i></span>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="password"
              required
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
             
            />
          </div>
        </div>
        
        <div class="form-group">
        <input type="submit" value="Login" class="btn float-center login_btn"/>
					</div>
       
        <br />
        <p style={{ color: "CaptionText" }}>New Register??</p>
        <div className="d-flex justify-content-center links">
          <Link to='/RegistrationV' style={{ paddingLeft: "14px" }}>User Registration</Link>
        </div>
      </form>
      </div>
                     
                      
                    

               </div>
                
           </div>
   </>
 
  );
}

export default UserLogin;


