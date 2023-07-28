// import React,{useState} from 'react'
// import { Link , useNavigate} from 'react-router-dom'
// import Sidebar from '../sidebar';

// export default function Empcreate() {
//     const[id,idchange] =useState("");
//     const[name,namechange] =useState("");
   
//     const[regno,regnochange] =useState("");
//     const[position,positionchange] =useState("");
//     const[partyname,partynamechange] =useState("");
  
//     const navigation = useNavigate();
        // const handleSubmit=(e)=>{
        // e.preventDefault();
        // const empdata = {id,name,regno,position,partyname}
       
        //     fetch('http://localhost:8000/cruddata',{
        //     method:"POST",
        //     headers:{"content-type":"application/json"},
        //     body:JSON.stringify(empdata)
        //     }).then((res)=>{
        //     return res.json(); 
        //     })
        //     .then((res)=>{
        //         alert('Record inserted');
        //         navigation('/curd');
        //     }).catch((err)=>{
        //         console.log(err);
        //     })
        //    }
//   return (
//     <Sidebar>
//     <div>
//       <div className='row'>
//         <div className='container-ce'>
//             <div className='card'>
//                 <div className='card-title'>
//                     <h2 style={{fontSize:"30px",fontFamily:"cursive"}}>New Candidate!!</h2>
//                 </div>
//                 <div className='card-body'>
//                 <div className='offset-lg-3 col-lg-6'>
//                 <form onSubmit={handleSubmit}>
//                     <div className='row' style={{'textAlign':'left'}}>
//                     <div className='container'>
//                             <div className='col-lg-12'>
//                                 <div className='form-group'>
//                                     <label style={{fontSize:"17px",fontFamily:"cursive"}}>Register No:</label>
//                                     <input  style={{fontSize:"15px"}} type='text' value={regno} onChange={e=>regnochange(e.target.value)} className='form-control' required></input>
//                                 </div>
//                             </div>
//                             <div className='col-lg-12'>
//                                 <div className='form-group'>
//                                     <label style={{fontSize:"17px",fontFamily:"cursive"}}>Name:</label>
//                                     <input  style={{fontSize:"15px"}} type='text' value={name} onChange={e=>namechange(e.target.value)} className='form-control' required></input>
//                                 </div>
//                             </div>
                           
//                             <div className='col-lg-12'>
//                                 <div className='form-group'>
//                                     <label style={{fontSize:"17px",fontFamily:"cursive"}}>Position:</label>
//                                     <input  style={{fontSize:"15px"}} type='type' value={position} onChange={e=>positionchange(e.target.value)} className='form-control' required></input>
//                                 </div>
//                             </div>
//                             <div className='col-lg-12'>
//                                 <div className='form-group'>
//                                     <label style={{fontSize:"17px",fontFamily:"cursive"}}>Party Name:</label>
//                                     <input  style={{fontSize:"15px"}} type='type' value={partyname} onChange={e=>partynamechange(e.target.value)} className='form-control' required></input>
//                                 </div>
//                             </div>
                            
//                             <div className='col-lg-12'>
//                                 <div className='form-group' style={{'textAlign':'center'}}>
//                                <button type='submit' className='btn btn-success m-2' style={{fontSize:"15px",height:"20%"}}>Submit</button>
//                                     <Link to="/curd" className='btn btn-danger' style={{fontSize:"15px",height:"50%",width:"50%"}}>Back</Link>
//                                 </div>
//                             </div>
//                     </div>
//                 </div>
//              </form>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </Sidebar>
//   )
// }

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar';
import axios from 'axios'; // Import axios library

export default function Empcreate() {
  const [id, idchange] = useState('');
  const [name, namechange] = useState('');
  const [regno, regnochange] = useState('');
  const [file, photochange] = useState(null);
  const [dep, depchange] = useState('');
  const [position, positionchange] = useState('');
  const [partyname, partynamechange] = useState('');
  const navigation = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('regno', regno);
   
    formData.append('dep', dep);
    formData.append('position', position);
    formData.append('partyname', partyname);

    axios
      .post('http://localhost:8080/candidate/save', formData,  {
        headers: {
         
          "content-type":"application/json"
        },
      })
      .then((res) => {
        alert('Record inserted');
        navigation('/curd');
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <Sidebar>
      <div>
        <div className='row'>
          <div className='container-ce'>
            <div className='card'>
              <div className='card-title'>
                <h2 style={{ fontSize: '30px', fontFamily: 'cursive' }}>New Candidate!!</h2>
              </div>
              <div className='card-body'>
                <div className='offset-lg-3 col-lg-6'>
                  <form onSubmit={handleSubmit}>
                    <div className='row' style={{ textAlign: 'left' }}>
                      <div className='container'>
                        <div className='col-lg-12'>
                          <div className='form-group'>
                            <label style={{ fontSize: '17px', fontFamily: 'cursive' }}>Register No:</label>
                            <input style={{ fontSize: '15px' }} type='text' value={regno} onChange={(e) => regnochange(e.target.value)} className='form-control' placeholder='Enter register number' required></input>
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='form-group'>
                            <label style={{ fontSize: '17px', fontFamily: 'cursive' }}>Name:</label>
                            <input style={{ fontSize: '15px' }} type='text' value={name} onChange={(e) => namechange(e.target.value)} className='form-control' placeholder='Enter name' required></input>
                          </div>
                        </div>
                        {/* <div className='col-lg-12'>
                          <div className='form-group'>
                            <label style={{ fontSize: '17px', fontFamily: 'cursive' }}>Photo:</label>
                            <input style={{ fontSize: '15px' }} type='file'  onChange={(e) => photochange(e.target.value)} className='form-control' required></input>
                          </div>
                        </div> */}
                        <div className='col-lg-12'>
                          <div className='form-group'>
                            <label style={{ fontSize: '17px', fontFamily: 'cursive' }}>Department:</label>
                            <input style={{ fontSize: '15px' }} type='text' value={dep} onChange={(e) => depchange(e.target.value)} className='form-control' placeholder='Enter department' required></input>
                          </div>
                        </div>

                        {/* <div className='col-lg-12'>
                          <div className='form-group'>
                            <label style={{ fontSize: '17px', fontFamily: 'cursive' }}>Position:</label>
                            <input style={{ fontSize: '15px' }} type='text' value={position} onChange={(e) => positionchange(e.target.value)} className='form-control' placeholder='/president' required></input>
                          </div>
                        </div> */}
                        <div className='col-lg-12'>
                          <div className='form-group'>
                            <label style={{ fontSize: '17px', fontFamily: 'cursive' }}>Party Name:</label>
                            <input style={{ fontSize: '15px' }} type='text' value={partyname} onChange={(e) => partynamechange(e.target.value)} placeholder='Enter party name' className='form-control' required></input>
                          </div>
                        </div>

                        <div className='col-lg-12'>
                          <div className='form-group' style={{ textAlign: 'center' }}>
                            <button type='submit' className='btn btn-success m-2' style={{ fontSize: '15px', height: '20%' }}>
                              Submit
                            </button>
                            <Link to='/curd' className='btn btn-danger' style={{ fontSize: '15px', height: '50%', width: '50%' }}>
                              Back
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
