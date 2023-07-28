import React, { useState } from 'react';
import {
    FaRegArrowAltCircleRight
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import admin from "./images/voterPro.jpeg";

const SidebarVoter = ({children}) => {
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
                     <img src={admin} alt="profile" width="20px" className="admin-img"/>
                     <p style={{paddingLeft:"5px",color:"white"}}>Voter</p>
                   </div>
               
               </div>
                       
                       <NavLink to="/profile"  className="link" activeclassName="active">
                          
                           <div className="link_text-voter">Profile</div>
                       </NavLink>
                   
                       <NavLink to="/listCandidate"  className="link" activeclassName="active">
                           <div className="link_text-voter">Candidate List</div>
                       </NavLink> 

                    
                       <NavLink to="/instruction"  className="link" activeclassName="active">
                           <div className="link_text-voter">Instruction</div>
                       </NavLink>
                       <NavLink to="/ballot" className="link" activeclassName="active">
                           <div className="link_text-voter">Ballot Position</div>
                       </NavLink>
                       <NavLink to="/feedback" className="link" activeclassName="active">
                           <div className="link_text-voter">FeedBack</div>
                       </NavLink>
                    
                      
            <div className="logout">
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon-voter">{item.icon}</div>
                           <div className="link_text-voter">{item.name}</div>
                       </NavLink>
                   ))
               }
            </div>          
               
           </div>
           <main>{children}</main>
        </div>
    );
};

export default SidebarVoter;