import React from 'react'
import "./Trending.css"
import List from '../List/List'

const Trending = () => {
  return (
    <div className='trending'>
      <div className='heading'>  
      <h2>Trending T-shirts</h2>
      </div>
      <List/>
      <List/>
      <div className='view'>
        <button>VIEW ALL</button>
      </div>
    </div>
  )
}

export default Trending
