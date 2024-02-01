import React from 'react';
import logo from "../../assets/logo.png"
import styles from "./form.module.css"
import bgImg from "../../assets/bgImg.jpeg";

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function Form() {
  return (
    <section className={styles.formSection} style={{backgroundImage:`url(${bgImg})`}}>
    
        <div className={styles.topHeader}> <span>Menu</span></div>

        <div  className={styles.register}>
            <div className={styles.col1}>
                <div className={styles.formLogo}>
                <img src={logo} alt="logo"  />
                </div>
                <form id='form' className='flex flex-col'>
                    <button className='btn bt'><Link className="td" to="/question_bank">Question Bank</Link></button>
                    <button className='btn bt'><Link className="td" to="/send_papers">Send Papers</Link></button>
                    <button className='btn bt'><Link className="td" to="/templates">Templates</Link></button>
                    <div className='formbtngap'></div>
                    <button className='btn bt'><Link className="td" to="/buy_now">Buy Now</Link></button>
                    <button className='btn bt'><Link className="td" to="/activate_licence">Activate Licence</Link></button>
                    <button className='btn bt'><Link className="td" to="/about">About</Link></button>
                </form>
            </div>
        </div>
    </section>
  )
}
