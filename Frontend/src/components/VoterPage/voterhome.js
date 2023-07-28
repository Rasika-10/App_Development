import React from 'react';
import SidebarVoter from '../sidebarVoter';
import UserService from '../service/userService';
import { addUserDetails } from '../store/masterSlice';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import admin from "../images/voting.webp";
function VoterHome() {
    const dispatch = useDispatch();
    const { Emails } = useSelector((state) => state.master);
    const { Token } = useSelector((state) => state.master);
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      try {
        const response = await UserService.getUserByEmail(Emails, Token);
        console.log("response", " ", response.data);
        dispatch(addUserDetails(response.data));
      }
      catch (error) {
        console.log(error);
      }
    }
    const {user} = useSelector(state => state.master)
    return ( 
        <>
        <SidebarVoter>
        <img src={admin} alt="profile"  width="85%" height="80%" />
        </SidebarVoter>
        </>
     );
}

export default VoterHome;