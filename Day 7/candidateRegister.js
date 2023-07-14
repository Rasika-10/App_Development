import React, { useState } from 'react';
import './candidate.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const CandidateRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    password: '',
    department: '',
    registerNo: '',
    dateOfBirth: '',
    mobileNumber: '',
    partySymbol: '',
    partyName: '',
    position: '',
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
        mobileNumber: '',
        partySymbol: '',
        partyName: '',
        position: '',
      });
      setErrors({});
    }
  };

  const validateForm = () => {
    const { name, gender, email, password, department, registerNo, dateOfBirth, mobileNumber, partySymbol, partyName, position } = formData;
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

    // Mobile number validation
    if (!mobileNumber) {
      errors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(mobileNumber)) {
      errors.mobileNumber = 'Invalid mobile number format';
    }

    // Party symbol validation
    if (!partySymbol) {
      errors.partySymbol = 'Party symbol is required';
    }

    // Party name validation
    if (!partyName) {
      errors.partyName = 'Party name is required';
    }

    // Position validation
    if (!position) {
      errors.position = 'Position is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  return (
    <div className="reg-main">
    <div className="registration-form-container">
      <h1>Candidate Registration for Nomination</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder='Enter a name' />
          {errors.name && <span className="error">{errors.name}</span>}
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
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter a email id'/>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter a password'/>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} placeholder='Enter a department' />
          {errors.department && <span className="error">{errors.department}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="registerNo">Register No:</label>
          <input type="text" id="registerNo" name="registerNo" value={formData.registerNo} onChange={handleChange} placeholder='Enter a register number'/>
          {errors.registerNo && <span className="error">{errors.registerNo}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder='Enter a mobile number'
          />
          {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
        </div>


        <div className="form-group">
          <label htmlFor="partyName">Party Name:</label>
          <input
            type="text"
            id="partyName"
            name="partyName"
            value={formData.partyName}
            onChange={handleChange}
            placeholder='Enter a party name'
          />
          {errors.partyName && <span className="error">{errors.partyName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="partySymbol">Party Symbol:</label>
          <input
            type="file"
            id="partySymbol"
            name="partySymbol"
            value={formData.partySymbol}
            onChange={handleChange}
            
          />
          {errors.partySymbol && <span className="error">{errors.partySymbol}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="position">Position for the Post:</label>
          <select id="position" name="position" value={formData.position} onChange={handleChange}>
            <option value="">Select position</option>
            <option value="president">President</option>
            <option value="vice president">Vice President</option>
            <option value="other">Other</option>
          </select>
          {errors.position && <span className="error">{errors.position}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
      <div class="d-flex justify-content-center links" >
                  <p>Back to </p>
                    <Link to='/signIn' style={{fontSize:"15px",paddingLeft:"7px",paddingTop:"2px"}} >Candidate Login</Link>
              
		 </div>
    </div>
    </div>
  );
};

export default CandidateRegistration;
