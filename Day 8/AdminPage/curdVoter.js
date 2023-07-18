import React, { useState,useEffect } from 'react'
import  { Link,useNavigate} from 'react-router-dom';
import Sidebar from '../sidebar';

export default function CrudVoter() {
     const [voterdata,voterchange] = useState(null);
     const navigation = useNavigate();
     const loadcontent = (id)=>{
        navigation('/voterdata/'+id);
     }
     const deletecontent = (id)=>{
        if(window.confirm("Do you want to delete")){
            fetch('http://localhost:8001/crudvoter/'+id,{
            method:"DELETE"
            }).then((res)=>{
                alert('Record Deleted');
                navigation('/voter');
                window.location.reload(false)
            }).catch((err)=>{
                console.log(err);
            })
           }
        }
     useEffect(()=>{
        fetch('http://localhost:8001/crudvoter').then((res)=>{
        return res.json(); 
        })
        .then((res)=>{
            voterchange(res);
            console.log(voterdata);
        }).catch((err)=>{
            console.log(err);
        })
   
    },[])
  return (
    <Sidebar>
    <div>
      <div className='row'>
       
        <div className='container-data'>
            <div className='card'>
                <div className='card-title'>
                    <h1 style={{fontSize:"40px",fontFamily:"VT323"}}>Voter List</h1>
                </div>
                
                <div className='card-body'>
                <Link to="/voteradd" className='btn btn-success mb-3' style={{fontSize:"15px",height:"100%",width:"10%"}}>Add New</Link>
                <table className='table table-bordered'>
                    <thead className='bg-primary text-white'>
                        <tr >
                            <td style={{backgroundColor:"cadetblue"}}>Id</td>
                            <td style={{backgroundColor:"cadetblue"}}>Name</td>
                            {/* <td style={{backgroundColor:"cadetblue"}}>Photo</td> */}
                            <td style={{backgroundColor:"cadetblue"}}>Email</td>
                           
                            <td style={{backgroundColor:"cadetblue"}}>Phone Number</td>
                            <td style={{backgroundColor:"cadetblue"}}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {voterdata &&
                        voterdata.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                {/* <td><img src={item.photo} width="90px" height="80px"/></td> */}
                                <td>{item.email}</td>
                               
                                <td>{item.phone}</td>
                                <td><a onClick={()=>loadcontent(item.id)} className='btn btn-secondary m-1'style={{fontSize:"15px",height:"70%",width:"30%"}}>Edit</a>
                                <a onClick={()=>deletecontent(item.id)} className='btn btn-danger' style={{fontSize:"15px",height:"70%",width:"40%"}}>Delete</a>
                                </td>
                            </tr>
                        )) 
                    }
                    </tbody>
                </table>
                </div>
            </div>
          
        </div>
      </div>
    </div>
    </Sidebar>
  )
}