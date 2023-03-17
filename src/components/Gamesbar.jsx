import React from 'react'
import './Gamesbar.css'
import { useState } from 'react'
import Gamebox from './Gamebox'

const Gamesbar = () => {

    const [show, setShow] = useState(false)
    const [svg, setSvg] = useState('../imgs/seta.svg')
    const [scrollpos, setScrollpos] = useState(0)

    const teams = [{
      tag:'CHA',
      img: "https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg",
      score: 113,
    }, {
      tag: 'DET',
      img: 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg',
      score: 103
    },
    {
      tag: 'HOU',
      img: 'https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg',
      score: 125
    },
    {
      tag: 'IND',
      img: 'https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg',
      score: 134
    },{
      tag: 'GSW',
      img: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg',
      score: 125
    },
    {
      tag: 'UTA',
      img: 'https://cdn.nba.com/logos/nba/1610612762/global/L/logo.svg',
      score: 131
    },
    {
      tag: 'ORL',
      img: 'https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg',
      score: 124
    },{
      tag: 'BKN',
      img: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg',
      score: 113
    },
    {
      tag: 'MIL',
      img: 'https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg',
      score: 116
    },
    {
      tag: 'NYK',
      img: 'https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg',
      score: 117
    },
    {
      tag: 'SAC',
      img: 'https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg',
      score: 122
    },
    {
      tag: 'POR',
      img: "https://cdn.nba.com/logos/nba/1610612757/global/L/logo.svg",
      score: 98
    }]




    const gamesdiv = document.getElementsByClassName('gamesdiv')[0];
    console.log(gamesdiv)


    const handleScroll = (newpos) => {
      gamesdiv.scrollLeft += newpos
       setScrollpos(gamesdiv.scrollLeft)
       
    }


  return (
    <div className='containergamebar'>
        <div className='gameoptions'>
            <select name="" id="">
                <option value="">Sat, Mar 04</option>
                <option value="">Sun, Mar 05</option>
                <option value="">Mon, Mar 06</option>
                <option value="">Tue, Mar 07</option>
                <option value="">Wed, Mar 08</option>
                <option selected value="">Thu, Mar 09</option>
            </select>
            <div className='containercheck'>
              
            <label className='divhide'>
              <span>Hide Scores</span>
            <div className={show ? 'divactive' : 'divinative'} onClick={() => setShow(!show)}>    <p className={show ? 'active' : 'inative'} ></p>  </div>  
            </label>
            </div> 
            
        </div>
        <div className='gamesdiv'>
        {scrollpos > 0 && <button className='pos0' onClick={() => handleScroll(-700)} onMouseLeave={() => setSvg('../imgs/seta.svg')} onMouseOver={() => setSvg('../imgs/svgazul.svg')}> <img src={svg} alt="" /> </button>}
          <Gamebox showscore={!show ? true : false} team1={teams[8]} team2={teams[4]}></Gamebox>
          <Gamebox showscore={!show ? true : false} team1={teams[2]} team2={teams[3]}></Gamebox>
          <Gamebox showscore={!show ? true : false} team1={teams[3]} team2={teams[4]}></Gamebox>
          <Gamebox showscore={!show ? true : false} team1={teams[5]} team2={teams[6]}></Gamebox>
          <Gamebox showscore={!show ? true : false} team1={teams[7]} team2={teams[8]}></Gamebox>
          <Gamebox showscore={!show ? true : false} team1={teams[9]} team2={teams[10]}></Gamebox>
          <Gamebox showscore={!show ? true : false} team1={teams[11]} team2={teams[0]}></Gamebox>
          <Gamebox showscore={!show ? true : false} team1={teams[1]} team2={teams[10]}></Gamebox>
          <Gamebox showscore={!show ? true : false} team1={teams[2]} team2={teams[9]}></Gamebox>
          <Gamebox showscore={!show ? true : false} team1={teams[3]} team2={teams[8]}></Gamebox>
          <Gamebox showscore={!show ? true : false} team1={teams[4]} team2={teams[7]}></Gamebox>
          <Gamebox showscore={!show ? true : false} team1={teams[5]} team2={teams[6]}></Gamebox>
          <Gamebox showscore={!show ? true : false} team1={teams[1]} team2={teams[2]}></Gamebox>
          <button className='pos700' onClick={() => handleScroll(700)} onMouseLeave={() => setSvg('../imgs/seta.svg')} onMouseOver={() => setSvg('../imgs/svgazul.svg')}> <img src={svg} alt="" /> </button>
        </div>

    </div>
  )
}

export default Gamesbar