import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Gamesbar from './components/Gamesbar'
import Slides from './components/Slides'
import Announcement from './components/Announcement'
import TrendingNow from './components/TrendingNow'
import LpMid from './components/LpMid'
import Standings from './components/Standings'
import Teste from './components/Teste'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
     <div className='fixedcontent'>
     <Navbar></Navbar>
     <Gamesbar></Gamesbar>
     </div>
     <div className='mainpage'>
     <div className='middle'>
     <Slides></Slides>
     <TrendingNow></TrendingNow>
     <LpMid></LpMid>
     </div >
     <div className='side'>
     <Announcement></Announcement>
     <Standings></Standings>
     </div>
     </div>
     
     
    
    </div>
  )
}

export default App
