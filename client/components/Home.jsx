import React from 'react'
import { Link } from 'react-router-dom'

export class Home extends React.Component {
  render () {
    return (
      <section className='container body'>
        <div className='columns'>
          <div className='column is-full'>
            <Link to='/booklist'>
              <button className='button button-size button-center button-font button-style is-rounded book-button'>BOOKS</button>
            </Link>
          </div>
        </div>
        <div className='columns'>
          <div className='column is-full'>
            <Link to='/filmlist'>
              <button className='button button-size button-center button-font button-style is-rounded film-button'>FILM</button>
            </Link>
          </div>
        </div>
        <div className='columns'>
          <div className='column is-full'>
            <Link to='/musiclist'>
              <button className='button button-size button-center button-font button-style is-rounded music-button'>MUSIC</button>
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
