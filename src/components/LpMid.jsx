import React from 'react'
import './LpMid.css'

const LpMid = () => {
  return (
    <div>
         <div className='containerlplarge'>
        <div className='lplm adjusts'>
            <h2> League Pass </h2>
            <a href=""> Learn More</a>
        </div>
        <div className='contentlp'>
            <div>
            <img className='titleimage' src="https://cdn.nba.com/manage/2023/02/NBA_League_Pass_horiz_onDkBkgd-2.png" alt="" />
            </div>
            <h3> The Playoffs race is on </h3>
            <p>Get NBA League Pass to watch more epic matchups and moments</p>
            <div className='buttonslp mid'>
                <button className='button1'>Try Free</button>
                <button className='button2'>Sign In</button>
            </div>
            <small>Terms apply</small>
<br />
        </div>
    </div>
    </div>
  )
}

export default LpMid