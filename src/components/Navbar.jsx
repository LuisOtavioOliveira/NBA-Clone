import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='containernav'>
        <img className='img' src="../imgs/logo-nba.svg" alt="" /> 
        <ul className='ul1'>
            
            <li> Games </li>
            <li> Schedule </li>
            <li>Watch</li>
            <li>News</li>
            <li>Stats</li>
            <li>Standings</li>
            <li>Teams</li>
            <li>Players</li>
            <li>Fantasy</li>
            <li>NBABet</li>
        </ul>
        <ul className='ul2'>
            <li>League Pass</li>
            <li>Store</li>
            <li>Tickets</li>
            <li> <img src="../imgs/menu.svg" alt="" /> </li>
            <li><p> Sign In</p> </li>
        </ul>
    </div>
  )
}

export default Navbar