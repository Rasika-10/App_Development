import React from 'react';
import { connect } from 'react-redux';
import { setUser } from './actions'
import './profile.css';
import { Link } from 'react-router-dom';

class UserProfilePage extends React.Component {
  componentDidMount() {
    // Simulating fetching user data from an API
    const user = {
      username: 'Rasika',
      email: 'rasika@gmail.com',
      rno:"7277721euit126",
      dob:'07.10.2002',
      dept:'IT',
      num:'9843751984'
    };

    this.props.setUser(user);
  }

  render() {
    const { username, email,rno,dob,dept,num } = this.props.user;

    return (
      <div className='profile-details'>
        <div className='head1'>
        <h1>User Profile</h1>
        </div>
       
        <div className='head3'>
            <ul class="list-unstyled">
            <li>Username :  {username}</li>
            <li>Email :  {email}</li>
            <li>Register Number:  {rno}</li>
            <li>Date of Birth :  {dob}</li>
            <li>Department :  {dept}</li>
            <li>Mobile Number :  {num}</li>
            <Link to='/update' style={{textAlign:'center'}}>Update profile</Link>
            </ul> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
