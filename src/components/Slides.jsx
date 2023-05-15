import React, { useEffect, useState } from 'react'
import './Slides.css'
import img1 from '../../imgs/img1.webp'
import img2 from '../../imgs/img2.avif'
import img3 from '../../imgs/img3.avif'
import img4 from '../../imgs/img4.avif'
import img5 from '../../imgs/img5.avif'

const Slides = () => {

    const slides = [{
title: 'A MASTERCLASS FROM STEPHEN CURRY TO WARRIORS WIN GAME 7 IN SAC',
paragraph: 'Stephen Curry shined with 43 points to warriors advance to the next round.',
buttontext: 'watch',
links: ['Warriors 118, Kings 112.', 'NBA History: Curry drops 37 on Kings in 2022.', 'What expect about Lakers vs Warriors.'],
buttontitle: 'highlights',
buttondescription: 'A MASTERCLASS FROM STEPHEN CURRY TO WARRIORS WIN GAME 7 IN SAC',
image: img1
    }, 
    {
        title: 'KINGS SNAG BIG WIN OVER SUNS AMID WEST PLAYOFF RACE',
        paragraph: 'Matt Winer, Dennis Scott and Brendan Haywood take a closer look at how far they believe the Kings can go in the upcoming playoffs.',
        buttontext: 'watch',
        links: ['Standings: Kings keep pace with Grizzlies', 'What is the ceiling for talented, surging Kings?', 'Kia MVP Ladder: Embiid rises as Giannis, Tatum slip'],
        buttontitle: 'final',
        buttondescription: 'kings snag big win over suns amid west playoff race',
        image: img2
    },
    {
        title: 'KIA MVP LADDER: EMBIID CLIMBS IN TIGHT RACE',
        paragraph: 'As the season enters its final 30 days, we take stock of the top contenders to watch down the stretch in the Kia MVP chase.',
        buttontext: 'read',
        links: ["Full Focus: Embiid's game-winner caps 76ers' comeback", "How Jokic cranks Nuggets' offense into overdrive", "Who are Top 5 contenders for Kia MVP?"],
        buttontitle: 'mvp ladder',
        buttondescription: 'kia mvp ladder: embiid cimbs in tight race',
        image: img3
    },
    {
        title: 'FULL FOCUS: KAWHI LEADS CLIPPERS TO 3RD STRAIGHT WIN',
        paragraph: 'Kawhi Leonard led the Clippers with 38 points as LA picks up their 3rd straight win.',
        buttontext: 'watch',
        links: ['Game Recap: Clippers 106, Knicks 95', "If healthy, Clippers 'have the pieces' to win title", 'Will AD or Kawhi produce the bigger postseason?'],
        buttontitle: 'feature',
        buttondescription: 'full focus: kawhi leads clippers to the 3rd straight win',
        image: img4
    },
    {
        title: 'WHAT IS PLAYOFF CEILING FOR SURGING KINGS?',
        paragraph: 'Matt Winer, Dennis Scott and Brendan Haywood take a closer look at how far they believe the Kings can go in the upcoming playoffs.',
        buttontext: 'watch',
        links: ['On League Pass: Kings vs. Suns (LIVE)', "Kings' defense will have to be top notch in playoffs", "Defining Chris Paul's role on the new-look Suns"],
        buttontitle: 'analysis',
        buttondescription: 'WHAT IS PLAYOFF CEILING FOR SURGING KINGS?',
        image: img5
    }]

    const [slide, setSlide] = useState(slides[0])
    const [slidePos, setSlidePos] = useState(0)
    const [stopSlide, setStopSlide] = useState(false)
    const [fixedSlide, setFixedSlide] = useState(slides[0])
    const [fixedPos, setFixedPos] = useState(0)

    const styles = {
        width: '63.4rem',
        height: '54.4rem',
        background: 'url("../../imgs/curry.jpg") center / cover no-repeat multiply',
        boxShadow: 'inset 12rem 0px 7rem -20px rgba(0,0,0,0.9), inset 0px -10rem 3rem -40px rgba(0, 0, 0,0.8)',
        backgroundImage: `url(${slide.image})`,

      };

    const fixedStyles = {
      width: '63.4rem',
        height: '54.4rem',
        background: 'url("../../imgs/curry.jpg") center / cover no-repeat multiply',
        boxShadow: 'inset 12rem 0px 7rem -20px rgba(0,0,0,0.9), inset 0px -10rem 3rem -40px rgba(0, 0, 0,0.8)',
        backgroundImage: `url(${fixedSlide.image})`,
    }
   

    const handleSlideAuto = (pos) => {
      setTimeout(() => {
        if (pos < (slides.length - 1)) {
          setSlide(slides[pos + 1]);
          setSlidePos(pos + 1);
          handleSlideAuto(pos + 1);
          console.log('teste')
        } else if (pos == (slides.length - 1)) {
          setSlide(slides[0]);
          setSlidePos(0);
          handleSlideAuto(0);
        }      
      }, 7000);
    }
          

    const handleSlide = (pos) => {
          setFixedSlide(slides[pos])
          setFixedPos(pos)
          setStopSlide(true)
    }

    useEffect(() => {
handleSlideAuto(0)
    }, [])

  return (
    <div className='containerslide'>
      <img className='leaguepass' src="https://cdn.nba.com/manage/2023/01/nba_website_startofseason_1210x50-3.jpg" alt="" />
        {!stopSlide && <div className='containerslide'>
          <div className='topdiv'>
        <div className='textdiv'>
        <h2> {slide.title} </h2>
            <p> {slide.paragraph} </p>
            <button> {slide.buttontext} </button>
            <h3> RELATED CONTENT </h3>
            <a href=""> {slide.links[0]} </a>
            <a href=""> {slide.links[1]} </a>
            <a href="">{slide.links[2]} </a>
        </div>
        <div style={styles}>
        </div>
            
        </div>

        <div  className='buttonsdiv'>
            <div onClick={() => handleSlide(0)} className={`setslidebutton ${slidePos == 0 ? 'actualslide' : ''}`}>
            <div className='timebar'>
            <div className='realtimebar'></div>
            </div>
            <h4> {slides[0].buttontitle} </h4>
            <h5> {slides[0].buttondescription} </h5>
            </div>
            <div onClick={() => handleSlide(1)} className={`setslidebutton ${slidePos == 1 ? 'actualslide' : ''}`}>
            <div className='timebar'>
            <div className='realtimebar'></div>
            </div>
            <h4> {slides[1].buttontitle} </h4>
            <h5> {slides[1].buttondescription} </h5>
            </div>
            <div onClick={() => handleSlide(2)} className={`setslidebutton ${slidePos == 2 ? 'actualslide' : ''}`}>
            <div className='timebar'>
            <div className='realtimebar'></div>
            </div>
            <h4> {slides[2].buttontitle} </h4>
            <h5> {slides[2].buttondescription} </h5>
            </div>
            <div onClick={() => handleSlide(3)} className={`setslidebutton ${slidePos == 3 ? 'actualslide' : ''}`}>
            <div className='timebar'>
            <div className='realtimebar'></div>
            </div>
            <h4> {slides[3].buttontitle} </h4>
            <h5> {slides[3].buttondescription} </h5>
            </div>
            <div onClick={() => handleSlide(4)} className={`setslidebutton ${slidePos == 4 ? 'actualslide' : ''}`}>
            <div className='timebar'>
            <div className='realtimebar'></div>
            </div>
            <h4> {slides[4].buttontitle} </h4>
            <h5> {slides[4].buttondescription} </h5>
            </div>  
        </div>
          </div>}

          {stopSlide && <div className='containerslide'>
            <div className='topdiv'>
        <div className='textdiv'>
        <h2> {fixedSlide.title} </h2>
            <p> {fixedSlide.paragraph} </p>
            <button> {fixedSlide.buttontext} </button>
            <h3> RELATED CONTENT </h3>
            <a href=""> {fixedSlide.links[0]}</a>
            <a href=""> {fixedSlide.links[1]} </a>
            <a href="">{fixedSlide.links[2]} </a>
        </div>
        <div style={fixedStyles}>
        </div>
            
        </div>

        <div  className='buttonsdiv'>
            <div onClick={() => handleSlide(0)} className={`setslidebutton ${fixedPos == 0 ? 'actualslide' : ''}`}>
            <div className='timebar'>
            <div className='fixedtimebar'></div>
            </div>
            <h4> {slides[0].buttontitle} </h4>
            <h5> {slides[0].buttondescription} </h5>
            </div>
            <div onClick={() => handleSlide(1)} className={`setslidebutton ${fixedPos == 1 ? 'actualslide' : ''}`}>
            <div className='timebar'>
            <div className='fixedtimebar'></div>
            </div>
            <h4> {slides[1].buttontitle} </h4>
            <h5> {slides[1].buttondescription} </h5>
            </div>
            <div onClick={() => handleSlide(2)} className={`setslidebutton ${fixedPos == 2 ? 'actualslide' : ''}`}>
            <div className='timebar'>
            <div className='fixedtimebar'></div>
            </div>
            <h4> {slides[2].buttontitle} </h4>
            <h5> {slides[2].buttondescription} </h5>
            </div>
            <div onClick={() => handleSlide(3)} className={`setslidebutton ${fixedPos == 3 ? 'actualslide' : ''}`}>
            <div className='timebar'>
            <div className='fixedtimebar'></div>
            </div>
            <h4> {slides[3].buttontitle} </h4>
            <h5> {slides[3].buttondescription} </h5>
            </div>
            <div onClick={() => handleSlide(4)} className={`setslidebutton ${fixedPos == 4 ? 'actualslide' : ''}`}>
            <div className='timebar'>
            <div className='fixedtimebar'></div>
            </div>
            <h4> {slides[4].buttontitle} </h4>
            <h5> {slides[4].buttondescription} </h5>
            </div>
        </div> </div>}
        
    </div>
  )
}

export default Slides