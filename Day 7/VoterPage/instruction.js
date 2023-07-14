import React from "react";
import './instruction.css';
function Instruction() {
    return (  
        <div className="main-instruct">
            <br></br>
          <center><h1>Instruction For  Voters</h1></center>
        <div className="l-instruct">
        <div className="border-instruct">
           <ul class="list-unstyled">
                <li class="mb-1"><i class="fas fa-long-arrow-alt-right me-2 text-info"></i>Before participating in the college-level election, ensure that you are eligible to vote. </li>
                <li class="mb-1"><i class="fas fa-long-arrow-alt-right me-2 text-info"></i> Take the time to research the candidates running for various positions in the election. Read their profiles, understand their platforms, and familiarize yourself with their qualifications. Attend candidate debates, forums, or presentations to gain a better understanding of their perspectives.</li>
                <li class="mb-1"><i class="fas fa-long-arrow-alt-right me-2 text-info"></i>Be aware of the voting process specific to your college. Determine whether the election will be held in person or online. Find out the designated voting location and the voting hours, or if an online platform will be used, ensure you have the necessary access and information to cast your vote. </li>
                <li class="mb-1"><i class="fas fa-long-arrow-alt-right me-2 text-info"></i>Evaluate the candidates' positions, goals, and past experiences to make an informed decision. Consider their stance on issues that matter to you and align with your values. Take note of their qualifications, leadership abilities, and potential impact on the college community. </li>
                <li class="mb-1"><i class="fas fa-long-arrow-alt-right me-2 text-info"></i> On the day of the election or during the designated voting period, follow the instructions provided by your college. If voting in person, go to the designated location and present any required identification or documentation. If voting online, log in to the designated platform and follow the instructions to cast your vote securely.</li>
                <li class="mb-1"><i class="fas fa-long-arrow-alt-right me-2 text-info"></i>Adhere to any guidelines set by your college for the voting process. Respect the rules, procedures, and deadlines established by the election organizers. Ensure that you are casting a single vote per position, unless the election allows for multiple selections  </li>
                <li class="mb-1"><i class="fas fa-long-arrow-alt-right me-2 text-info"></i>Respect the privacy and confidentiality of your vote. Avoid discussing or sharing your voting choices with others, as it may influence their decisions or compromise the integrity of the election process </li>
                <li class="mb-1"><i class="fas fa-long-arrow-alt-right me-2 text-info"></i>Once the voting period concludes, stay informed about the election results.   </li>
               
           </ul>
        </div>    
        </div>
        </div>
    );
}

export default Instruction;