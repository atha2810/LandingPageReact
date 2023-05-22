import React from 'react'
import List from '../List/List'
import "./Featured.css"

const Featured = ({type}) => {
  return (
    <div className='featured'>
        <div className='heading'>  
      <h2>{type} Products</h2>
      </div>
      <List/>
      <div className='view'>
        <button>VIEW ALL</button>
      </div>
    </div>
  )
}

export default Featured
