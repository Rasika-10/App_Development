
import React, { useState, useEffect } from 'react';
import SidebarVoter from '../sidebarVoter';

import profile from '../images/adminHp.png';
import axios from 'axios';
import '../VoterPage/Ballot.css';
import { useNavigate } from 'react-router-dom';
export default function Ballot() {
  const navigate = useNavigate();
  const [voterdata, voterchange] = useState([]);



  const [candidates, setCandidates] = useState([]);
  const [selectedCandidateId, setSelectedCandidateId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://localhost:8080/candidate/get', {
        
      });
      setCandidates(response.data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  const handleCandidateSelection = (candidateId) => {
    setSelectedCandidateId(candidateId);
  };

  const handleSubmitVote = async () => {
    if (selectedCandidateId === null) {
      alert("Please select a candidate before submitting your vote.");
      return;
    }

    try {
      // Submit the vote to the backend here using the selectedCandidateId
      // ...
      // After successful vote submission, set the isSubmitted flag to true
      setIsSubmitted(true);
      alert("Vote submitted successfully!");
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  const handleReturnToHomePage = () => {
    navigate('/'); // Use navigate function instead of history.push
  };


  return (
    <SidebarVoter>
      <div>
        <div className='row'>
          <div className='container-data'>
            <div className='card'>
              <div className='card-title'>
                <h1 style={{ fontSize: '40px', fontFamily: 'VT323' }}>Election for President</h1>
              </div>

              <div className='card-body'>
              {candidates.length > 0 && (
                <table className='table table-bordered'>
                  <thead className='bg-primary text-white'>
                    <tr>
                    
                      <td style={{ backgroundColor: 'cadetblue' }}>Register Number</td>
                     
                
                     
                      <td style={{ backgroundColor: 'cadetblue' }}>Photo</td>
                      <td style={{ backgroundColor: 'cadetblue' }}>Name</td>
                      <td style={{ backgroundColor: 'cadetblue' }}>Party Name</td>

                     
                      <td style={{ backgroundColor: 'cadetblue' }}>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                  {candidates.map((candidate, index) => (
                         <tr key={index}>
                        
                          <td>{candidate.regno}</td>
                           <td><img src={profile} width="75px" height="80px"/></td> 
                          <td>{candidate.name}</td>
                          <td>{candidate.partyname}</td>

                          <td>
                          
                          <button onClick={() => handleCandidateSelection(candidate.id)}
                      disabled={isSubmitted}  className='btn btn-primary m-1'style={{fontSize:"15px",height:"70%",width:"40%"}}>Vote</button>
                            
                          
                          
                            
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
               {isSubmitted && (
          <div>
            <button disabled>Vote Submitted</button>
          </div>
        )}
         {!isSubmitted && selectedCandidateId && (
          <div className='button-ballot'>
            <button onClick={handleSubmitVote}  style={{fontSize:"15px",height:"70%", backgroundColor: 'Green '}}>Submit Vote</button>
          </div>
        )}
         <div>
          <button onClick={handleReturnToHomePage}  style={{fontSize:"15px",height:"70%", backgroundColor: 'DarkGray  ',color:"black"}}>Return to Home Page</button>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarVoter>
  );
}


