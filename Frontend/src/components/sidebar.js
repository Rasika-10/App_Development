import React, { useState } from 'react';
import {
    FaRegArrowAltCircleRight
}from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import admin from "./images/adminProfile.png";

const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"Logout",
            icon:< FaRegArrowAltCircleRight/>
        }
    ]
    
    return (
        <div className="container-sidebar">
           <div  className="sidebar">
               <div className="top_section">
               <div className='admin-image'>
                     <img src={admin} alt="profile" className="admin-img"/>
                     <p style={{paddingLeft:"5px",color:"white"}}>Admin</p>
                   </div>
               
               </div>
                       <p style={{fontSize:"16px",backgroundColor:"grey",padding:"8px"}}>REPORTS</p>
                       <NavLink to="/dashboard"  className="link" activeclassName="active">
                          
                        <div className="link_text">Dashboard</div>
                       </NavLink>
                   
                       {/* <NavLink to="/votes"  className="link" activeclassName="active">
                           <div className="link_text">View Results</div>
                       </NavLink> */}

                        <p style={{fontSize:"16px",backgroundColor:"grey",padding:"8px"}}>MANAGE</p>
                       <NavLink to="/curd"  className="link" activeclassName="active">
                           <div className="link_text">Add Candidate</div>
                       </NavLink>
                   
                       <NavLink to="/voter"  className="link" activeclassName="active">
                           <div className="link_text">View Voters</div>
                       </NavLink>
            <div className="logout">
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
            </div>          
               
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;