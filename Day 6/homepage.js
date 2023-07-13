import React from "react";
import './homepage.css'
function HomePage() {
    return ( 
        <div className="home-main" >
         <h1>Online Voting <br></br>And <br></br>Polling System</h1>
         <div className="quote">

            <ul class="list-unstyled">
                <li class="mb-1"><i class="fas fa-check-circle me-2 text-success"></i> “It's not enough to just want change .You have to go and make a change by voting."</li>
                <li class="mb-1"><i class="fas fa-check-circle me-2 text-success"></i>"We have the power to make a difference. But we need to VOTE." </li>
                <li class="mb-1" style={{paddingRight:"39%"}}><i class="fas fa-check-circle me-2 text-success"></i>Voting is your right. Try to do it right.</li>
            </ul>
        </div>
        </div>
     );
}

export default HomePage;