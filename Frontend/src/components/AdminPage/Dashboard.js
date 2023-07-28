import React from 'react';
import Sidebar from '../sidebar';
import "./dashboard.css";
const  Dashboard= () => {
    return (
        <Sidebar>
       
       <div className="dashboard-container">
 
    <main className='ah'>
    <div className="main-content" style={{color:"black"}}>
      <h1 style={{color:"black"}}>Welcome, Admin!</h1>
      <p>
        This is the dashboard page for the admin in the college level online voting website. You have access to various functionalities to manage the voting process and view the results.
      </p>
      
     
             <div className="additional-content">
            <h3 style={{color:"Black",textAlign:"left"}}>Recent Activities:</h3>
          
            <ul className="list-unstyled" style={{fontSize:"large",textAlign:"left"}}>
                <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i> “Reviewed and approved candidate applications."</li>
                <li className="mb-1"><i className="fas fa-check-circle me-2 text-success"></i>"Monitored voting process during the election day."</li>
                <li className="mb-1" ><i className="fas fa-check-circle me-2 text-success"></i>Generated and analyzed election result reports.</li>
                <li className="mb-1" ><i className="fas fa-check-circle me-2 text-success"></i>Conducted a meeting with election officials.</li>
           
           
            </ul>
            <h3 style={{color:"black",textAlign:"left"}}>Next Steps:</h3>
            <p style={{color:"black",textAlign:"left",width:"50%"}}>
              Prepare for the upcoming elections, coordinate with the IT team to ensure the voting website's stability, and promote the voting process among the college community.
            </p>
          </div>
      </div>
      </main>
    </div>
           
             
       
       
        </Sidebar>
    );
};

export default Dashboard;