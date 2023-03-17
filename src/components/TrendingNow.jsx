import React from 'react'
import News from './News'
import './TrendingNow.css'

const TrendingNow = () => {

const news = [{
    title: 'Playoff scenarios: denver can clinch division title',
    img: 'https://cdn.nba.com/manage/2023/03/USATSI_10807867-scaled-e1678903176686.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
},
{
    title: 'film study: how ad has adjusted his game',
    img: 'https://cdn.nba.com/manage/2023/03/GettyImages-1248111988-scaled-e1678981699827.jpg?w=384&h=224'
}]

  return (
    <div className='containertrending'>
        <div className='titlenews'>
            <h2> Trending now </h2>
        </div>
        <div className='news'>
             {news.map((x) => <News news={x}></News>) }
        </div>
    </div>
  )
}

export default TrendingNow