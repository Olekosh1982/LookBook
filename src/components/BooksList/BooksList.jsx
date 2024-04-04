import React, { useEffect, useState } from "react";

export default function BooksList() {
  const [books, setBooks] = useState([]);
  async function loadBooks() {
    const res = await fetch("/book");
    const obj = await res.json();
    setBooks(obj);
  }
  useEffect(() => {
    loadBooks();
  }, []);
  return (
    <div>
      {books.map((book) => (
        <div id={book.id}>{book.name}</div>
      ))}
    </div>
  );
}
