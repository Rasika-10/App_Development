import React from 'react';
import Sidebar from '../sidebar';
import admin from "../images/adminPage.avif";
function AdminHome() {
   
    return ( 
        <>
        <Sidebar>
        <img src={admin} alt="profile"  width="68%" height="80%" />
        </Sidebar>
        </>
     );
}

export default AdminHome;