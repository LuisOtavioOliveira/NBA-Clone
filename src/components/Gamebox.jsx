import React from 'react'
import './Gamebox.css'

const Gamebox = ({team1, team2, showscore}) => {

  
  return (
    <div className='containergamebox'>
        <div className='finallp'> <span>FINAL</span> <span className='spanlp' >LP</span></div>
       <div>
       <div className='team1'> <span className='teamtag'> <img className='imgteam' src={team1.img} alt="" /> {team1.tag} </span> <span className='spanscore'> {showscore == true ? team1.score  : '-'} <img src={showscore == true && `../imgs/${team1.score > team2.score ? 'winner.svg' : 'loser.svg'}`} alt="" /> </span> </div>
        <div className='team2'> <span className='teamtag'> <img className='imgteam' src={team2.img} alt="" /> {team2.tag} </span> <span className='spanscore'> {showscore == true ? team2.score : '-'} <img src={showscore == true && `../imgs/${team2.score > team1.score ? 'winner.svg' : 'loser.svg'}`} alt="" /> </span></div> 
       </div>
    </div>
  )
}

export default Gamebox