import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({logged,setLogged}) => {
    const[data,setData]=useState({email:"",password:""})
    const router=useNavigate();
    
    function handleChange(event){
    setData({...data,[event.target.name]:event.target.value}) 
    }
    function handleSubmit(event){
    event.preventDefault();
    
    if(data.email && data.password){
        let getData=JSON.parse(localStorage.getItem("Users"))
        let flag=false;
        for(let i=0;i<getData.length;i++){
         if(getData[i].email===data.email && getData[i].password===data.password){
    // login(getData[i])
            flag=true;
            break;
         }
    }
    if(flag===false){
    alert("Please enter valid Credentials")
    setData({email:"",password:""})
    }
    else{
    localStorage.setItem("Current",JSON.stringify(data))
    alert("logged in Successfully")
    router('/')
    }
    
    }else{
    alert("Please fill all the details")
    }
    }
    
  return (
    <div>
       <div className='opacity'></div>
    <div className="form" >
     
      <h1 style={{textAlign:"center",marginBottom:"30px"}}>Welcome to Tata <br/>CLiQ</h1>
    <form onSubmit={handleSubmit}>
        
        <input type="email" name="email" onChange={handleChange} value={data.email} className="input" placeholder='Enter your email'/><br/>
      
        <input type="password" name="password" onChange={handleChange} value={data.password} className="input" placeholder='Enter your Password'/><br/>
        <input type="submit" value="Login"/>
        <p style={{fontSize:"15px",marginTop:"5px",fontWeight:600}}>New member <Link to="/register">Register</Link></p>
    </form>
    <i class="fa-solid fa-xmark form-cross fa-xl" onClick={()=>setLogged(!logged)}></i>
</div>
</div>

  )
}

export default Login
