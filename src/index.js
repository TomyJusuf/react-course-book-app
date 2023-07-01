import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((oneBook, index) => {
          return <Book {...oneBook} key={oneBook.id} number={index} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
