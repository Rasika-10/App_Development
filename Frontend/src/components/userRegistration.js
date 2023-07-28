// import React, { useState } from 'react';
// import './userRegistration.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// const UserRegistration = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     gender: '',
//     email: '',
//     password: '',
//     department: '',
//     registerNo: '',
//     dateOfBirth: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Form is valid, perform registration or submit data
//       console.log('Form data:', formData);
//       // Reset form fields
//       setFormData({
//         name: '',
//         gender: '',
//         email: '',
//         password: '',
//         department: '',
//         registerNo: '',
//         dateOfBirth: '',

//       });
//       setErrors({});
//     }
//   };

//   const validateForm = () => {
//     const { name, gender, email, password, department, registerNo, dateOfBirth } = formData;
//     const errors = {};

//     // Name validation
//     if (!name.trim()) {
//       errors.name = 'Name is required';
//     }

//     // Gender validation
//     if (!gender) {
//       errors.gender = 'Gender is required';
//     }

//     // Email validation
//     if (!email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = 'Invalid email format';
//     }

//     // Password validation
//     if (!password) {
//       errors.password = 'Password is required';
//     } else if (password.length < 6) {
//       errors.password = 'Password should be at least 6 characters long';
//     }

//     // Department validation
//     if (!department) {
//       errors.department = 'Department is required';
//     }

//     // Register number validation
//     if (!registerNo) {
//       errors.registerNo = 'Register number is required';
//     }

//     // Date of birth validation
//     if (!dateOfBirth) {
//       errors.dateOfBirth = 'Date of birth is required';
//     }


//     setErrors(errors);
//     return Object.keys(errors).length === 0; // Return true if there are no errors
//   };

//   return (
// <>

// <div className="reg-main">
// <div className="registration-form-container">
//   <h1>User Registration</h1>
//   <form onSubmit={handleSubmit}>
//     <div className="form-group">
//       <label htmlFor="registerNo">Register No:</label>
//       <input type="text" id="registerNo" name="registerNo" value={formData.registerNo} onChange={handleChange} />
//       {errors.registerNo && <span className="error">{errors.registerNo}</span>}
//     </div>
//     <div className="form-group">
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
//       {errors.name && <span className="error">{errors.name}</span>}
//     </div>

//     <div className="form-group">
//       <label htmlFor="dateOfBirth">Date of Birth:</label>
//       <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
//       {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
//     </div>
//     <div className="form-group">
//       <label htmlFor="gender">Gender:</label>
//       <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
//         <option value="">Select gender</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//         <option value="other">Other</option>
//       </select>
//       {errors.gender && <span className="error">{errors.gender}</span>}
//     </div>

//     <div className="form-group">
//       <label htmlFor="department">Department:</label>
//       <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} />
//       {errors.department && <span className="error">{errors.department}</span>}
//     </div>

//     <div className="form-group">
//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
//       {errors.email && <span className="error">{errors.email}</span>}
//     </div>

//     <div className="form-group">
//       <label htmlFor="password">Password:</label>
//       <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
//       {errors.password && <span className="error">{errors.password}</span>}
//     </div>




//     <button type="submit">Register</button>
//   </form>
//    <div class="d-flex justify-content-center links" >
//               <p>Back to </p>
//                 <Link to='/sign-in' style={{fontSize:"15px",paddingLeft:"7px",paddingTop:"2px"}} >User Login</Link>

//  </div>
// </div>
// </div>
// </>
//   );
// };

// export default UserRegistration;





// import React, { useState } from 'react';
// import './userRegistration.css';
// import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';





// const UserRegistration = () => {

//   const [regno, setRegisterNo] = useState('');
//   const [name, setName] = useState('');
//   const [dob, setDateOfBirth] = useState('');
//   const [gender, setGender] = useState('');
//   const [dep, setDept] = useState('');
//   const [mobno, setMobile] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const[loading,setLoading]=useState(false);
//   const[open,setOpen]=useState();

//   async function handleSubmit (event) {
//     event.preventDefault();
//     setLoading(true);
//     try{
//       const data={
//         regno:regno,
//         name:name,
//         dob:dob,
//         gender:gender,
//         dep:dep,
//         mobno:mobno,
//         email:email,
//         password:password,
//       };
//       const res= await axios.post("http://localhost:8080/auth/register",data);
//       await console.log(res);
//     }
//     catch(e){
//       console.log(e.message);
//     }

//     alert("Registration Successfull");

//     const validationErrors = {};
//         if (!name.trim()) {
//           validationErrors.name = 'Name is required';
//               }

//           // Gender validation
//           if (!gender) {
//             validationErrors.gender = 'Gender is required';
//           }

//           // Email validation
//           if (!email) {
//             validationErrors.email = 'Email is required';
//           } else if (!/\S+@\S+\.\S+/.test(email)) {
//             validationErrors.email = 'Invalid email format';
//           }

//           // Password validation
//           if (!password) {
//             validationErrors.password = 'Password is required';
//           } else if (password.length < 6) {
//             validationErrors.password = 'Password should be at least 6 characters long';
//           }

//           // Department validation
//           if (!dep) {
//             validationErrors.dep = 'Department is required';
//           }

//           // Register number validation
//           if (!regno) {
//             validationErrors.regno = 'Register number is required';
//           }

//           // Date of birth validation
//           if (!dob) {
//             validationErrors.dob = 'Date of birth is required';
//           }
//           if (!mobno) {
//             validationErrors.mobno = 'Mobile number is required';
//           } else if (!/^[0-9]{10}$/.test(mobno)) {
//             validationErrors.mobno = 'Invalid mobile number format';
//           }

//     if (Object.keys(validationErrors).length === 0) {
//       console.log('Registration data:', { regno,name,dob,gender,dep,mobno,email,password});
//       setRegisterNo('');
//       setName('');
//       setDateOfBirth('');
//       setGender('');
//       setDept('');
//       setMobile('');
//       setEmail('');

//       setPassword('');

//       setErrors({});
//     } else {
//       setErrors(validationErrors);
//     }

//   };
// import React, { useState } from 'react';
// import './userRegistration.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const UserRegistration = () => {
//   const [regno, setRegisterNo] = useState('');
//   const [name, setName] = useState('');
//   const [dob, setDateOfBirth] = useState('');
//   const [gender, setGender] = useState('');
//   const [dep, setDept] = useState('');
//   const [mobno, setMobile] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(event) {
//     event.preventDefault();
//     setLoading(true);

//     const validationErrors = {};

//     if (!name.trim()) {
//       validationErrors.name = 'Name is required';
//     }

//     if (!gender) {
//       validationErrors.gender = 'Gender is required';
//     }

//     if (!email) {
//       validationErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       validationErrors.email = 'Invalid email format';
//     }

//     if (!password) {
//       validationErrors.password = 'Password is required';
//     } else if (password.length < 6) {
//       validationErrors.password = 'Password should be at least 6 characters long';
//     }

//     if (!dep) {
//       validationErrors.dep = 'Department is required';
//     }

//     if (!regno) {
//       validationErrors.regno = 'Register number is required';
//     }

//     if (!dob) {
//       validationErrors.dob = 'Date of birth is required';
//     }

//     if (!mobno) {
//       validationErrors.mobno = 'Mobile number is required';
//     } else if (!/^[0-9]{10}$/.test(mobno)) {
//       validationErrors.mobno = 'Invalid mobile number format';
//     }

//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const data = {
//           regno,
//           name,
//           dob,
//           gender,
//           dep,
//           mobno,
//           email,
//           password,
//         };
//         const res = await axios.post("http://localhost:8080/auth/register", data);
//         console.log(res);
//         setLoading(false);
//         alert("Registration Successful");
//         // Clear form fields after successful registration
//         setRegisterNo('');
//         setName('');
//         setDateOfBirth('');
//         setGender('');
//         setDept('');
//         setMobile('');
//         setEmail('');
//         setPassword('');
//         setErrors({});
//       } catch (error) {
//         console.log(error.message);
//         setLoading(false);
//         alert("Registration failed");
//       }
//     } else {
//       setErrors(validationErrors);
//       setLoading(false);
//     }
//   }
// return (
//       <>

//       <div className="reg-main">
//       <div className="registration-form-container">
//         <h1>User Registration</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="registerNo">Register No:</label>
//             <input type="text" id="registerNo" name="registerNo" value={regno} onChange={(e) => setRegisterNo(e.target.value)}  placeholder='Enter a register number'/>
//             {errors.regno && <span className="error">{errors.regno}</span>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}  placeholder='Enter a name'/>
//             {errors.name && <span className="error">{errors.name}</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="dateOfBirth">Date of Birth:</label>
//             <input type="date" id="dateOfBirth" name="dateOfBirth" value={dob} onChange={(e) => setDateOfBirth(e.target.value)}  placeholder='Enter a date of birth' />
//             {errors.dob && <span className="error">{errors.dob}</span>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="gender">Gender:</label>
//             <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} >
//               <option value="">Select gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//             {errors.gender && <span className="error">{errors.gender}</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="department">Department:</label>
//             <input type="text" id="department" name="department" value={dep} onChange={(e) => setDept(e.target.value)}  placeholder='Enter a department'/>
//             {errors.dep && <span className="error">{errors.dep}</span>}
//           </div>
//     <div className="form-group">
//   <label htmlFor="mobileNumber">Mobile Number:</label>
//   <input
//     type="text"
//     id="mobileNumber"
//     name="mobileNumber"
//     value={mobno}
//     onChange={(e) => setMobile(e.target.value)}
//     placeholder='Enter a mobile number'
//   />
//   {errors.mobno && <span className="error">{mobno}</span>}
// </div>

//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Enter a email' />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Enter a password' />
//             {errors.password && <span className="error">{errors.password}</span>}
//           </div>




//           <button type="submit">Register</button>
//         </form>
//          <div class="d-flex justify-content-center links" >
//                     <p>Back to </p>
//                       <Link to='/sign-in' style={{fontSize:"15px",paddingLeft:"7px",paddingTop:"2px"}} >User Login</Link>

//   		 </div>
//       </div>
//       </div>
//       </>
//     );
//   };

//   export default UserRegistration;


import React from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Checkbox, Typography } from "@mui/material";
import { useFormik } from "formik";
import { SignUpSchema } from './scheme/registerScheme';
import UserAuthService from './service/userAuthService';
import './userRegistration.css';
import { Link } from 'react-router-dom';
import logo from "./images/animation-admin.mp4";
import admin from "./images/voter.png";
export default function Registration() {

  const navigate = useNavigate();
  const initialState = {
    name: "",
    email: "",
    password: "",
    regno: "",
    dep: "",
    gender: "",
    mobno: "",
    dob: "",
  };
  const { values, errors, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventRegister();
        action.resetForm();
      }
    })
  const eventRegister = async () => {

    try {
      const response = await UserAuthService.saveUser(values);
      console.log(response);
      const target = "Error";
      const target1 = "Email Already Exists !!";
      if (response.data === target) {
        throw target;
      } else if (response.data === target1) {
        throw target1;
      }
      else {
        setTimeout(() => {
          navigate("/sign-in");
        }, 3000);
      }
    }

    catch (error) {
      console.log(errors);
    }
  };

  return (
    <>
       <div className="register-main">
               <img src={admin} alt="profile"  className="register-bg" width="80%" height="80%" />
           </div>
      <div className="reg-main">
        <div className="registration-form-container">
          <h1>User Registration</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="regno">Register No:</label>
              <input type="text" id="regno" name="regno" value={values.regno} onChange={handleChange} placeholder='Enter a Register Number' />
              {errors.regno && <span className="error">{errors.regno}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={values.name} onChange={handleChange} placeholder='Enter a name' />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" name="dob" value={values.dob} onChange={handleChange} placeholder='Enter a date of birth' />
              {errors.dob && <span className="error">{errors.dob}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select id="gender" name="gender" value={values.gender} onChange={handleChange}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span className="error">{errors.gender}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="dep">Department:</label>
              <input type="text" id="dep" name="dep" value={values.dep} onChange={handleChange} placeholder='Enter a department' />
              {errors.dep && <span className="error">{errors.dep}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={values.email} onChange={handleChange} placeholder='Enter a email' />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={values.password} onChange={handleChange} placeholder='Enter a password' />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="mobno">Mobile Number:</label>
              <input
                type="text"
                id="mobno"
                name="mobno"
                value={values.mobno}
                onChange={handleChange}
                placeholder='Enter a mobile number'
              />
              {errors.mobno && <span className="error">{errors.mobno}</span>}
            </div>
            <span style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <Checkbox />
              <Typography sx={{ fontSize: "12px" }}>
                {" "}
                By agreeing to the Terms of Service and Privacy Policy
              </Typography>
            </span>


            <button type="submit">Register</button>
          </form>
          <div class="d-flex justify-content-center links" >
            <p style={{fontSize:"18px"}}>Already registered?</p>
            <Link to='/sign-in' style={{ fontSize: "15px", paddingLeft: "7px", paddingTop: "2px" }} >User Login</Link>

          </div>
        </div>
      </div>
      {/* </div> */}
    </>

  )
}