import React from "react";
import logo from "../../assets/logo.png";
import bgImg from "../../assets/bgImg.jpeg";

import styles from "./Login.module.css";
import { MdLogin } from "react-icons/md";
import { Icon } from "@iconify/react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={styles.main} style={{backgroundImage:`url(${bgImg})`}}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.outerBox}>
        <div className={styles.innerBox}>
          <h3>Account Details</h3>
          <form style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px"}}>
            <div  style={{display:"flex",alignItems:"center",gap:"6px"}} >
              <span style={{display:"flex",alignItems:"center",gap:"2px"}}><Icon icon="healthicons:ui-user-profile"  className={styles.ipIcon}/> Login ID</span>
              <input className={styles.input} type="text" placeholder="" />
            </div>
            <div  style={{display:"flex",alignItems:"center",gap:"6px"}}>
              <span  style={{display:"flex",alignItems:"center",gap:"2px"}}><Icon icon="carbon:password" className={styles.ipIcon} /> Password</span>
              <input className={styles.input} type="password" placeholder="" />
            </div>

          </form>
          <button type="submit" style={{cursor:"pointer",backgroundColor:"#D99B1D",borderRadius:"0.3rem", border:"none", width:"40%",display:"flex",alignItems:"center",justifyContent:"center", color:"white",gap:"4px"}}>
              Login <MdLogin />
            </button>
          <span style={{fontWeight:"400"}} >OR</span>
          <span>Not a member? <span style={{cursor:"pointer",color:"#FF791A", marginTop:"-10px"}}>Register</span></span>

          <div style={{display:"flex",alignItems:"center",gap:"20px"}} >
            <div>
              <Icon icon="logos:google-icon" className={styles.lgIcon} />
            </div>
            <div>
              <Icon icon="devicon:facebook"  className={styles.lgIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
