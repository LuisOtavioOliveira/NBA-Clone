import React from 'react'
import './Announcement.css'

const Announcement = () => {
  return (
    <div className='containerlp'>
        <div className='lplm'>
            <h2> League Pass </h2>
            <a href=""> Learn More</a>
        </div>
        <div className='imageall'>
            <div>
            <img className='titleimage' src="https://cdn.nba.com/manage/2023/02/NBA_League_Pass_horiz_onDkBkgd-2.png" alt="" />
            </div>
            <h3> The Playoffs race is on </h3>
            <p>Get NBA League Pass to watch more epic matchups and moments</p>
            <div className='buttonslp'>
                <button className='button1'>Try Free</button>
                <button className='button2'>Sign In</button>
            </div>
            <small>Terms apply</small>

        </div>
    </div>
  )
}

export default Announcement