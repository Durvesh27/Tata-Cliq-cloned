import React, { useContext, useState } from "react";
import "./Form.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from 'axios'
import { AuthContext } from "./AuthContext.js";
const Register = ({ show, setShow, logged, setLogged }) => {
const{state}=useContext(AuthContext)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
    role: "Buyer",
  });
  const router = useNavigate();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.role &&
      userData.password &&
      userData.confirmedPassword
    ) {
      if (userData.password === userData.confirmedPassword) {
      const response=await axios.post("http://localhost:8004/register",{userData})
      if(response.data.success){
        setUserData({
          name: "",
          email: "",
          role:"Buyer",
          password: "",
          confirmedPassword: "",
        });
        setShow(!show)
        toast.success(response.data.message);
      }else {
        toast.error(response.data.message);
      }
      }
      else {
        toast.error("Password & Confirm Password not matched");
      }
    }else{
      toast.error("All Fields are Compulsory")
    }
  };
  function selectRole(e){
  setUserData({...userData,role:e.target.value})
  }
  useEffect(()=>{
    if(state?.user?.name){
    router("/")
    }
    },[state])
  return (
    <>
      <div className="opacity"></div>
      <div className="form">
        {/* <h2 style={{ textAlign: "center" }}>Registeration</h2> */}
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Welcome to Tata <br />
          CLiQ
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={userData.name}
            className="input"
            placeholder="Enter your First Name"
          />
          <br />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={userData.email}
            className="input"
            placeholder="Enter your Email"
            style={{marginBottom:0}}
          />
          <br />
          <select
            onChange={selectRole}
            style={{ width: "100%", margin: "25px 0" }}
            placeholder="Select role"
            className="input"
          >
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
          <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={userData.password}
            className="input"
            placeholder="Create your Password"
          />
          <br />
          <input
            type="password"
            name="confirmedPassword"
            onChange={handleChange}
            value={userData.confirmedPassword}
            className="input"
            placeholder="Confirm your Password"
          />
          <br />
          <input type="submit" value="Register" />
          <p style={{ fontSize: "15px", marginTop: "5px", fontWeight: 600 }}>
            Already have an account?{" "}
            <span onClick={() => setShow(!show)}>Login</span>
          </p>
        </form>
        <i
          class="fa-solid fa-xmark form-cross fa-xl"
          onClick={() => setLogged(!logged)}
        ></i>
      </div>
    </>
  );
};

export default Register;
