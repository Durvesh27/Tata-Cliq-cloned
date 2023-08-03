import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = ({logged,setLogged,show,setShow}) => {
    const[data,setData]=useState({name:"",email:"",password:""})
    const router=useNavigate();
    const{login,logout}=useContext(AuthContext)
    
    function handleChange(event){
    setData({...data,[event.target.name]:event.target.value}) 
    }
    function handleSubmit(event){
    event.preventDefault();
    
    if(data.email && data.password){
        let getData=JSON.parse(localStorage.getItem("Users"))
        let flag=false;
        for(let i=0;i<getData.length;i++){
         if(getData[i].name===data.name &&getData[i].email===data.email && getData[i].password===data.password){
    // login(getData[i])
            flag=true;
            break;
         }
    }
    if(flag===false){
    alert("Please enter valid Credentials")
    setData({name:"",email:"",password:""})
    }
    else{
    // localStorage.setItem("Current",JSON.stringify(data))
    login(data)
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
        
        <input type="text" name="name" onChange={handleChange} value={data.name} className="input" placeholder='Enter your Name'/><br/>

        <input type="email" name="email" onChange={handleChange} value={data.email} className="input" placeholder='Enter your email'/><br/>
      
        <input type="password" name="password" onChange={handleChange} value={data.password} className="input" placeholder='Enter your Password'/><br/>
        <input type="submit" value="Login"/>
        <p style={{fontSize:"15px",marginTop:"5px",fontWeight:600}}>New member? <span onClick={()=>setShow(!show)}>Register</span></p>
    </form>
    <i class="fa-solid fa-xmark form-cross fa-xl" onClick={()=>setLogged(!logged)}></i>
</div>
</div>

  )
}

export default Login
