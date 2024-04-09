import React, { useEffect, useState } from "react";
import 

export default function BooksList() {
  const [books, setBooks] = useState([]);
  async function loadBooks() {
    const res = await fetch('/api/book/forusername/active');
    const obj = await res.json();
    setBooks(obj);
  }
  useEffect(() => {
    loadBooks();
  }, []);
  return (
    <div>
      {books.map((book) => (
        
        <div id={book.id}><img src="tri-tovarischa-erih.jpg" alt={'Result'}/> {book.name},   {book.author},   {book.price},  {book.id} </div>
      ))}
    </div>
  );
}
