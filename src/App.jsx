import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WayToTeach from "./components/WayToTeach";
import BooksList from "./components/BooksList/BooksList";
import Button from "./components/Button/Button";
import {useState} from 'react'
import {ways,differences} from './data'


export default function App() {
const  [contentType,setContentType]=useState('Content')


  function handleClick(type) {
    setContentType(type)

  }
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section>
          <h3> Каталог книг</h3>
          <ul>
            {ways.map((way)=>( <WayToTeach key={way.title} {...way}/>))}
        
          </ul>
        </section>
        <section>
          <h3>Популярные авторы</h3>
         
          <Button isActive={contentType==='way'} onClick={()=>handleClick('way')}>Описание книги</Button>
          <Button isActive={contentType==='easy'} onClick={()=>handleClick('easy')} >год выпуска</Button>
          <Button  isActive={contentType==='program'} onClick={()=>handleClick('program')}>цена</Button>
         
          {!contentType ?<p>Нажмите на кнопку</p>:null}
          {contentType ? <p>{differences[contentType]}</p>:null}
        

        </section>
      </main>
      <BooksList />
      <Footer />
    </div>
  );
}
