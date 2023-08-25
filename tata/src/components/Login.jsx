import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
const Login = ({ logged, setLogged, show, setShow }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useNavigate();
  const { login, logout ,state} = useContext(AuthContext);

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }
  const handleSubmit =async (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
        const response = await axios.post("http://localhost:8004/login", { userData });
        if (response.data.success) {
            setUserData({ email: "", password: "" })
            setLogged(!logged)
            toast.success(response.data.message)
            localStorage.setItem("Token4",JSON.stringify(response.data.token))
            login(response.data.user)
        } else {
            toast.error(response.data.message)
        }
        console.log(response,"working")
    } else {
        toast.error("All fields are mandtory.")
    }
  };
  useEffect(()=>{
    if(state?.user?.name){
    router("/")
    }
    },[state])
  return (
    <div>
      <div className="opacity"></div>
      <div className="form">
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Welcome to Tata <br />
          CLiQ
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={userData.email}
            className="input"
            placeholder="Enter your email"
          />
          <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={userData.password}
            className="input"
            placeholder="Enter your Password"
          />
          <br />
          <input type="submit" value="Login" />
          <p style={{ fontSize: "15px", marginTop: "5px", fontWeight: 600 }}>
            New member? <span onClick={() => setShow(!show)}>Register</span>
          </p>
        </form>
        <i
          class="fa-solid fa-xmark form-cross fa-xl"
          onClick={() => setLogged(!logged)}
        ></i>
      </div>
    </div>
  );
};

export default Login;
