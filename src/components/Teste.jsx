import React from 'react'

const Teste = () => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f78fcc44e5msh15d625dcb975dcbp141b88jsn372369ee3c55',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://api-nba-v1.p.rapidapi.com/seasons', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


  return (
    <div>Teste</div>
  )
}

export default Teste