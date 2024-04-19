import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";
import bgImg from "../../assets/bgImg.jpeg";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import styles from "./Login.module.css";
import { MdLogin } from "react-icons/md";
import { Icon } from "@iconify/react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate=useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4000/src/components/login", {
        username,
        password,
      });
      console.log(response.data);
      if(response.data.message){
        alert("Login successfull");
        Navigate("/");
      }
      else{
        alert("Login failed");
        Navigate("/");
      }
      // Handle successful login, redirect user or perform other actions
    } catch (error) {
      console.error("Error:", error.response.data);
      setError(error.response.data.message);
    }
  };

  return (
    <div className={styles.main} style={{ backgroundImage: `url(${bgImg})` }}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.outerBox}>
        <div className={styles.innerBox}>
          <h3>Account Details</h3>
          <form style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }} >
              <span style={{ display: "flex", alignItems: "center", gap: "2px" }}><Icon icon="healthicons:ui-user-profile" className={styles.ipIcon} /> Login ID</span>
              <input className={styles.input} type="text" placeholder="" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "2px" }}><Icon icon="carbon:password" className={styles.ipIcon} /> Password</span>
              <input className={styles.input} type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

          </form>
          <button type="button" onClick={handleLogin} style={{ cursor: "pointer", backgroundColor: "#D99B1D", borderRadius: "0.3rem", border: "none", width: "40%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", gap: "4px" }}>
            Login <MdLogin />
          </button>
          <span style={{ fontWeight: "400" }} >OR</span>
          <span>Not a member? <span style={{ cursor: "pointer", color: "#FF791A", marginTop: "-10px" }}>Register</span></span>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }} >
            <div>
              <Icon icon="logos:google-icon" className={styles.lgIcon} />
            </div>
            <div>
              <Icon icon="devicon:facebook" className={styles.lgIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lft}>
        <Link className={styles.arrow} to={"/"}><IoArrowBackCircleSharp size={50} /></Link>
      </div>
    </div>
  );
};

export default Login;


