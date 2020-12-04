import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function BooksApi() {
  const [book, setBook] = useState('')
  const [result, setResult] = useState([])
  const [apiKey, setApiKey] = useState(
    'AIzaSyCnNZoJRVKldJLWrQ4A5DFRBtRud30H4jw'
  )

  function handleChange(e) {
    const book = e.target.value

    setBook(book)
  }

  function handleSubmit(e) {
    e.preventDefault()

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=20`
      )
      .then((data) => {
        setResult(data.data.items)
        console.log(data.data.items)
      })
  }

  return (
    <>
      <h1>google books api</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          className='searchbar'
          placeholder='Search for books'
          autoComplete='off'
        />
        <button type='submit' className=''>
          Submit
        </button>
      </form>
      <div>
        {result.map((book) => (
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.title}
            key={book.id}
          />
        ))}
      </div>
    </>
  )
}
