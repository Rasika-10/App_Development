import React, { useState } from 'react';
import './userRegistration.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    password: '',
    department: '',
    registerNo: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, perform registration or submit data
      console.log('Form data:', formData);
      // Reset form fields
      setFormData({
        name: '',
        gender: '',
        email: '',
        password: '',
        department: '',
        registerNo: '',
        dateOfBirth: '',
        
      });
      setErrors({});
    }
  };

  const validateForm = () => {
    const { name, gender, email, password, department, registerNo, dateOfBirth } = formData;
    const errors = {};

    // Name validation
    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    // Gender validation
    if (!gender) {
      errors.gender = 'Gender is required';
    }

    // Email validation
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }

    // Password validation
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    }

    // Department validation
    if (!department) {
      errors.department = 'Department is required';
    }

    // Register number validation
    if (!registerNo) {
      errors.registerNo = 'Register number is required';
    }

    // Date of birth validation
    if (!dateOfBirth) {
      errors.dateOfBirth = 'Date of birth is required';
    }
    

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  return (
    <div className="reg-main">
    <div className="registration-form-container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="registerNo">Register No:</label>
          <input type="text" id="registerNo" name="registerNo" value={formData.registerNo} onChange={handleChange} />
          {errors.registerNo && <span className="error">{errors.registerNo}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
          {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} />
          {errors.department && <span className="error">{errors.department}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>




        <button type="submit">Register</button>
      </form>
       <div class="d-flex justify-content-center links" >
                  <p>Back to </p>
                    <Link to='/sign-in' style={{fontSize:"15px",paddingLeft:"7px",paddingTop:"2px"}} >User Login</Link>
              
		 </div>
    </div>
    </div>
  );
};

export default UserRegistration;
