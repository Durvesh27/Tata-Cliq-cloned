
import React, { useState } from 'react'
import './Form.css'
import { Link, useNavigate } from 'react-router-dom'

const Register = ({show,setShow,logged,setLogged}) => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            const array = JSON.parse(localStorage.getItem("Users")) || [];
            let data = { name: userData.name, email: userData.email, password: userData.password, cart: [] }
            for (let i = 0; i < array.length; i++) {
                if (array[i].name === userData.name) {
                    setUserData({ name: "", email: "", password: "" })
                    return alert(`Account already exists`)
                }
            }
            array.push(data)
            localStorage.setItem("Users", JSON.stringify(array))
            setUserData({ name: "", email: "", password: "" })
            router("/login")
            alert("Account created Successfully")
        } else {
            alert("Please fill all details")
        }

    }
    //     function selectRole(event) {
    //       setUserData({ ...userData, ["role"]: event.target.value })
    //       console.log(userData,"usee")
    //   }


    return (
        <>
         <div className='opacity'></div>
            <div className='form' >
                {/* <h2 style={{ textAlign: "center" }}>Registeration</h2> */}
                <h1 style={{textAlign:"center",marginBottom:"30px"}}>Welcome to Tata <br/>CLiQ</h1>
                <form onSubmit={handleSubmit}>
                    
                    <input type="text" name="name" onChange={handleChange} value={userData.name} className='input' placeholder='Enter your Name'/><br />
                    {/* <label>Select Role :</label><br /> */}
                    {/* <select onChange={selectRole}  style={{padding:"5px 0",width:"100%"}}>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
        </select><br /> */}
                    
                    <input type="email" name="email" onChange={handleChange} value={userData.email} className='input' placeholder='Enter your Email' /><br />
                    <input type="password" name="password" onChange={handleChange} value={userData.password} className='input' placeholder='Create your Password'/><br />
                    <input type='submit' value="Register" />
                    <p style={{ fontSize: "15px", marginTop: "5px", fontWeight: 600 }}>Already have an account? <span onClick={()=>setShow(!show)}>Login</span></p>
                </form>
                <i class="fa-solid fa-xmark form-cross fa-xl" onClick={()=>setLogged(!logged)}></i>
            </div>
        </>

    )
}

export default Register
