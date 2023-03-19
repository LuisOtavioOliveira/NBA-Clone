import React, { useEffect, useState } from 'react'
import './Standings.css'

const Standings = () => {

    const [conference, setConference] = useState([])
    const [indentifier, setIndentifier] = useState('east')

    const EastTeams = [{
        name: 'MIL',
        wins: 50,
        loses: 20,
        last10: '8-2',
        img: 'https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg'
    },
    {
        name: 'CLE',
        wins: 45,
        loses: 28,
        last10: '6-4',
        img: 'https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg'
    },
    {
        name: 'BOS',
        wins: 49,
        loses: 22,
        last10: '5-5',
        img: 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg'
    },
    {
        name: 'PHI',
        wins: 47,
        loses: 22,
        last10: '7-3',
        img: 'https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg'
    },
    {
        name: 'NYK',
        wins: 41,
        loses: 30,
        last10: '7-3',
        img: 'https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg'
    },
    {
        name: 'BKN',
        wins: 39,
        loses: 31,
        last10: '5-5',
        img: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg'
    },
    {
        name: 'MIA',
        wins: 38,
        loses: 33,
        last10: '6-4',
        img: 'https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg'
    },
    {
        name: 'ATL',
        wins: 35,
        loses: 35,  
        last10: '5-5',
        img: 'https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg'
    },
    {
        name: 'TOR',
        wins: 34,
        loses: 36,
        last10: '5-5',
        img: 'https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg'
    },
    {
        name: 'WAS',
        wins: 32,
        loses: 38,
        last10: '4-6',
        img: 'https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg'
    },
    {
        name: 'CHI',
        wins: 32,
        loses: 37,
        last10: '5-5',
        img: 'https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg'
    },
    {
        name: 'IND',
        wins: 32,
        loses: 38,
        last10: '6-4',
        img: 'https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg'
    },
    {
        name: 'ORL',
        wins: 28,
        loses: 42,
        last10: '4-6',
        img: 'https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg'
    },
    {
        name: 'CHA',
        wins: 22,
        loses: 50,
        last10: '4-6',
        img: 'https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg'
    },
    {
        name: 'DET',
        wins: 16,
        loses: 55,
        last10: '1-9',
        img: 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg'
    }
]

    const WestTeams = [{
        name: 'DEN',
        wins: 47,
        loses: 23,
        last10: '5-5',
        img: 'https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg'
    },
    {
        name: 'SAC',
        wins: 42,
        loses: 27,
        last10: '8-2',
        img: 'https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg'
    },
    {
        name: 'MEM',
        wins: 42,
        loses: 27,
        last10: '6-4',
        img: 'https://cdn.nba.com/logos/nba/1610612763/global/L/logo.svg'
    },
    {
        name: 'PHX',
        wins: 38,
        loses: 32,
        last10: '6-4',
        img: 'https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg'
    },
    {
        name: 'LAC',
        wins: 37,
        loses: 33,
        last10: '5-5',
        img: 'https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg'
    },
    {
        name: 'GSW',
        wins: 36,
        loses: 35,
        last10: '6-4',
        img: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg'
    },  
    {
        name: 'MIN',
        wins: 35,
        loses: 36,
        last10: '4-6',
        img: 'https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg'
    },
    {
        name: 'DAL',
        wins: 36,
        loses: 35,
        last10: '4-6',
        img: 'https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg'
    },
    {
        name: 'LAL',
        wins: 34,
        loses: 37,
        last10: '6-4',
        img: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg'
    },
    {
        name: 'OKC',
        wins: 34,
        loses: 36,
        last10: '6-4',
        img: 'https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg'
    },
    {
        name: 'UTA',
        wins: 33,
        loses: 36,
        last10: '4-6',
        img: 'https://cdn.nba.com/logos/nba/1610612762/global/L/logo.svg'
    },
    {
        name: 'NOP',
        wins: 33,
        loses: 37,
        last10: '3-7',
        img: 'https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg'
    },
    {
        name: 'POR',
        wins: 31,
        loses: 39,
        last10: '3-7',
        img: 'https://cdn.nba.com/logos/nba/1610612757/global/L/logo.svg'
    },
    {
        name: 'SAS',
        wins: 18,
        loses: 52,
        last10: '4-6',
        img: 'https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg'
    },
    {
        name: 'HOU',
        wins: 18,
        loses: 52,
        last10: '4-6',
        img: 'https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg'
    }]



    const EastOrder = EastTeams.sort((a, b) => {
            if (a.loses < b.loses) {
              return -1
            }
            if (b.loses > b.loses) {
              return 1
            }
            return 0
    })

    const WestOrder =  WestTeams.sort((a, b) => {
        if (a.loses < b.loses) {
          return -1
        }
        if (b.loses > b.loses) {
          return 1
        } else if (a.loses == b.loses) {
            if (a.wins > b.loses) {
                return -1
            } else if (a.wins < b.loses) {
                return 1
            } else return 0
        }
        return 0
})

const handleConference = (conf) => {

    if (conf == 'west') {
        setConference(WestOrder)
        setIndentifier('west')
    } else {
        setConference(EastOrder)
        setIndentifier('east')
    }

}

useEffect(() => {
  setConference(EastOrder)

}, [])


  return (
    <div className='containerstandings'>
        <div className='standingtitle'>
        <h2>2022-23 standings</h2>
        <a className='linkstand' href=""> Go to Standings</a>
        </div>
        <div className='standingbuttons'>
            <button onClick={() => handleConference('east')} className={indentifier == 'east' ? 'activebutton' : ''}>Eastern</button>
            <button onClick={() => handleConference('west')} className={indentifier == 'west' ? 'activebutton' : ''}>Western</button>
        </div>
        <table>
            <thead>
            <tr>
                <th className='firstth' field="team_id" > Team </th>
                <th field="wins"> W </th>
                <th field="loses"> L </th>
                <th field="l10"> Last 10</th>
            </tr>
            </thead>
            <tbody>
            {conference.map((x) => {
                return (
                <tr>
                    <td className='firsttd'>
                        <a className='a' href=""> <span className='firstspan'> {conference.indexOf(x) + 1} </span> <div> <img className='imageteam' src={x.img} alt="" /> </div> <span className='thirdspan'> {x.name} </span>  </a>
                    </td> 
                    <td> {x.wins} </td>
                    <td> {x.loses} </td>
                    <td className='thisone'> 
                        <div className={`last10 ${x.last10 == '10-0' ? 'dez' : ''} ${x.last10 == '9-1' ? 'nove' : ''} ${x.last10 == '8-2' ? 'oito' : ''} ${x.last10 == '7-3' ? 'sete' : ''} ${x.last10 == '6-4' ? 'seis' : ''} ${x.last10 == '5-5' ? 'cinco' : ''} ${x.last10 == '4-6' ? 'quatro' : ''} ${x.last10 == '3-7' ? 'tres' : ''} ${x.last10 == '2-8' ? 'dois' : ''} ${x.last10 == '1-9' ? 'um' : ''} ${x.last10 == '0-10' ? 'zero' : ''}`}>
                            {x.last10}
                        </div> 
                    </td>
                </tr>
                )
            })}
            </tbody>
        </table>
        
    </div>
  )
}

export default Standings
