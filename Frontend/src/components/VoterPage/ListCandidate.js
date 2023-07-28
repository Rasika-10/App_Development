import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SidebarVoter from '../sidebarVoter';
import axios from 'axios'; 

export default function ListCandidate() {
  const [empdata, empchange] = useState(null);
  const navigation = useNavigate();

  const loadcontent = (id) => {
    navigation('/empdata/' + id);
  };

  

  useEffect(() => {
    axios
      .get('http://localhost:8080/candidate/get')
      .then((res) => {
        empchange(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SidebarVoter>
      <div>
        <div className='row'>
          <div className='container-data'>
            <div className='card'>
              <div className='card-title'>
                <h1 style={{ fontSize: '40px', fontFamily: 'VT323' }}>Candidate List</h1>
              </div>

              <div className='card-body'>
               
                <table className='table table-bordered'>
                  <thead className='bg-primary text-white'>
                    <tr>
                    
                      <td style={{ backgroundColor: 'cadetblue' }}>Name</td>
             
                      <td style={{ backgroundColor: 'cadetblue' }}>Register No</td>
                      <td style={{ backgroundColor: 'cadetblue' }}>Department</td>
                      <td style={{ backgroundColor: 'cadetblue' }}>Party Name</td>
                    
                     
                    </tr>
                  </thead>
                  <tbody>
                    {empdata &&
                      empdata.map((item) => (
                        <tr key={item.id}>
                         
                          <td>{item.name}</td>
                       
                          <td>{item.regno}</td>
                          <td>{item.dep}</td>
                          <td>{item.partyname}</td>
                        
                        
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarVoter>
  );
}
