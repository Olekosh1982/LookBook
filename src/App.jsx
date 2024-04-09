import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import BooksList from "./components/BooksList/BooksList";
import Button from "./components/Button/Button";
import {useState} from 'react'



export default function App() {
const  [contentType,setContentType]=useState('Content')


  function handleClick(type) {
    setContentType(type)

  }
  return (
    <div className="wrapper">
      <Header />
      <BooksList />
      <Footer />
    </div>
  );
}
