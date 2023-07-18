import React, { useState,useEffect} from 'react'
import  { Link,useNavigate,useParams} from 'react-router-dom';
import Sidebar from '../sidebar';
export default function Empedit(){
    const {empid} = useParams();
    const[id,idchange] =useState("");
    const[name,namechange] =useState("");
    // const[photo,photochange] =useState("");
    const[email,emailchange] =useState("");
    const[position,positionchange] =useState("");
    const[partyname,partynamechange] =useState("");
    const[phone,phonechange] =useState("");
    const navigation = useNavigate();
    useEffect(()=>{
        fetch('http://localhost:8000/cruddata/'+empid).then((res)=>{
        return res.json(); 
        }).then((res)=>{
            idchange(res.id);
            namechange(res.name);
            // photochange(res.photo);

            emailchange(res.email);
            positionchange(res.position);
            partynamechange(res.partyname);
            phonechange(res.phone);
        }).catch((err)=>{
            console.log(err);
        })
   
    },[])
        const handleSubmit=(e)=>{
        e.preventDefault();
        const empdata = {id,name,email,position,partyname,phone}
       
            fetch('http://localhost:8000/cruddata/'+empid,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
            }).then((res)=>{
                alert('Record inserted');
                navigation('/curd');
            }).catch((err)=>{
                console.log(err);
            })
           }
  return (
        <Sidebar>
    <div>
      <div className='row'>
        <div className='container-ce'>
            <div className='card'>
                <div className='card-title'>
                    <h2 style={{fontSize:"30px",fontFamily:"cursive"}}>Edit Candidate!!</h2>
                </div>
                <div className='card-body'>
                <div className='offset-lg-3 col-lg-6'>
                <form onSubmit={handleSubmit}>
                    <div className='row' style={{'textAlign':'left'}}>
                    <div className='container'>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label style={{fontSize:"17px",fontFamily:"cursive"}}>Name:</label>
                                    <input style={{fontSize:"15px"}} type='text' value={name} onChange={e=>namechange(e.target.value)} className='form-control' required></input>
                                </div>
                            </div>
                            {/* <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label style={{fontSize:"17px",fontFamily:"cursive"}}>Photo</label>
                                    <input style={{fontSize:"15px"}}   value={photo} onChange={e=>photochange(e.target.value) } className='form-control' required></input>
                                </div>
                            </div> */}
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label style={{fontSize:"17px",fontFamily:"cursive"}}>Email:</label>
                                    <input style={{fontSize:"15px"}} type='email' value={email} onChange={e=>emailchange(e.target.value) } className='form-control' required></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label style={{fontSize:"17px",fontFamily:"cursive"}}>Position:</label>
                                    <input style={{fontSize:"15px"}} type='type' value={position} onChange={e=>positionchange(e.target.value) } className='form-control' required></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label style={{fontSize:"17px",fontFamily:"cursive"}}>Party Name:</label>
                                    <input style={{fontSize:"15px"}} type='type' value={partyname} onChange={e=>partynamechange(e.target.value) } className='form-control' required></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label style={{fontSize:"17px",fontFamily:"cursive"}}>Phone Number:</label>
                                    <input style={{fontSize:"15px"}}  type='number' value={phone} onChange={e=>phonechange(e.target.value)} className='form-control' required></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group' style={{'textAlign':'center'}}>
                               <button type='submit' to="/curd" className='btn btn-success m-2' style={{fontSize:"15px",height:"20%"}}>Submit</button>
                                    <Link to="/curd" className='btn btn-danger' style={{fontSize:"15px",height:"50%",width:"50%"}}>Back</Link>
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
  )
}