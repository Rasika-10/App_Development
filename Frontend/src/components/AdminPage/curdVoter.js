
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../sidebar';

export default function CrudVoter() {
  const [voterdata, voterchange] = useState([]);



  useEffect(() => {
    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLGFkaGlAZ21haWwuY29tIiwiaXNzIjoicmFzaWthIiwiaWF0IjoxNjkwMTczNTI4LCJleHAiOjE2OTAxOTE1Mjh9.oc-Oz79e8TFW0oKcuTaMztwe47HTiFnBpfDHhEkEJlDEj_KipyNN51U8YWniRqjvX-QKY92CSDt89LXicqdcFA";
    axios
      .get('http://localhost:8080/api/v4/user/get', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        voterchange(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Sidebar>
      <div>
        <div className='row'>
          <div className='container-data'>
            <div className='card'>
              <div className='card-title'>
                <h1 style={{ fontSize: '40px', fontFamily: 'VT323' }}>Voter List</h1>
              </div>

              <div className='card-body'>
              
                <table className='table table-bordered'>
                  <thead className='bg-primary text-white'>
                    <tr>
                      <td style={{ backgroundColor: 'cadetblue' }}>Id</td>
                      <td style={{ backgroundColor: 'cadetblue' }}>Name</td>
                     
                      <td style={{ backgroundColor: 'cadetblue' }}>Register No</td>
                     
                      <td style={{ backgroundColor: 'cadetblue' }}>Date of birth</td>

                      <td style={{ backgroundColor: 'cadetblue' }}>Gender</td>
                      <td style={{ backgroundColor: 'cadetblue' }}>Department</td>
                      <td style={{ backgroundColor: 'cadetblue' }}>Contact</td>
                 
                    </tr>
                  </thead>
                  <tbody>
                    {voterdata &&
                      voterdata.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.regno}</td>
                          <td>{item.dob}</td>
                          <td>{item.gender}</td>
                          <td>{item.dep}</td>
                          <td>{item.mobno}</td>
                       
                        
                          
                            
                        
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
