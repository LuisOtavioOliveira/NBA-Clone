import React from 'react'
import './News.css'

const News = ({news}) => {
  return (
    <div className='containernews'>
        <img src={news.img} alt="" />
        <h3> {news.title} </h3>
    </div>
  )
}

export default News