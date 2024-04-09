import React, { useState } from "react";
import logo from '../img/logo.png'
import icon from '../img/icon cart.png'

export default function Header() {
  const [now,setNow]=useState(new Date())
 setInterval(()=>setNow(new Date()),1000)
  
  return (
    <header>
      <div>
        <img src={logo} alt={'Result'}/>

        <ul className="nav">
          <li> <button className="button active">войти </button></li>
          <li><button className="button active">регистрация </button></li>
          <li><button className="button active icon"><img src={icon} alt={'Result'}/></button></li>
          
        </ul>
        
      </div>
     
    </header>
  );
}
