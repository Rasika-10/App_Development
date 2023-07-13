import React, { useState } from 'react';
import {
    FaRegArrowAltCircleRight
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import admin from "./images/adminHp.png";

const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"Logout",
            icon:< FaRegArrowAltCircleRight/>
        }
    ]
    
    return (
        <div className="container">
           <div  className="sidebar">
               <div className="top_section">
               <div className='admin-image'>
                     <img src={admin} alt="profile" className="admin-img"/>
                     <p style={{paddingLeft:"30px",color:"white"}}>Admin</p>
                   </div>
               
               </div>
                       <p style={{fontSize:"16px",backgroundColor:"grey",padding:"8px",paddingLeft:"19px"}}>REPORTS</p>
                       <NavLink to="/dashboard"  className="link" activeclassName="active">
                           <div className="link_text">Dashboard</div>
                       </NavLink>
                   
                       <NavLink to="/votes"  className="link" activeclassName="active">
                           <div className="link_text">Votes</div>
                       </NavLink>

                        <p style={{fontSize:"16px",backgroundColor:"grey",padding:"8px",paddingLeft:"21px"}}>MANAGE</p>
                       <NavLink to="/candidate"  className="link" activeclassName="active">
                           <div className="link_text">Candidate</div>
                       </NavLink>
                   
                       <NavLink to="/voter"  className="link" activeclassName="active">
                           <div className="link_text">Voter</div>
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