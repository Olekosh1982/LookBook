import React, { useState } from "react";
import logo from '../img/logo.png'

export default function Header() {
  const [now,setNow]=useState(new Date())
 setInterval(()=>setNow(new Date()),1000)
  
  return (
    <header>
      <div>
        <img src={logo} alt={'Result'}/>

        <ul className="nav">
          <li> <button className="button active">Меню</button></li>
          <li><button className="button active">Кабинет</button></li>
          <li><button className="button active">Контакты</button></li>
          
        </ul>
        <span>Время: {now.toLocaleTimeString()}</span>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
