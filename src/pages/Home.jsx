import React, { useEffect } from 'react'
import styled from 'styled-components'
import Backgroundimage from '../Data/Background'
import {useState} from 'react'

function Home() {
    const [background, Setbackground] = useState([])

    function changeBackground(){
        const number = Math.floor(Math.random()*3)
        Setbackground( Backgroundimage[number])
        console.log(number)
    }

    useEffect(function(){
        changeBackground()
    },[])

  return (
    <Page id='home' className='section'>
        <img className='image' src={background.image}></img>
        <Gradient/>
        <h1>Do you love Travel and Nature?</h1>
        <p>Well, then you have come to the right place at Earthly Wonders. <br></br>We post the most stunning pictures of great places in our world. 
           Come and check us out. </p>
        <Connect><a href= "https://t.me/earthlywonders" target="_blank">Join Us on Telegram <img className='logo' src="telegram-logo.jpg"/></a></Connect>
        <Location><h4>{background.place}</h4> <p>{background.country}</p></Location>
    </Page>
  )
}

const Page = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    scroll-snap-align: start;
    .image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    h1{
        position: absolute;
        color: white;
        z-index: 100;
        position:absolute;
        top:30%;
        font-size: 2.5rem;
        text-shadow: 1px 1px black;
        letter-spacing: 2px;
        font-weight: 600;
    }
    p{
        position: absolute;
        color: white;
        z-index: 10;
        top:43%;
        text-align: center;
        font-size: 1.3rem;
        letter-spacing: 1px;
    }
    
    .logo{
        height: 50px;
        width: 50px;
        object-fit: cover;
        border-radius: 10px;
        margin: 20px;
    }
    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
    }

    a:hover{
        color: #b7a0a0;
    }
`
const Connect = styled.div`
    position: absolute;
    color: white;
    z-index: 10;
    top:65%;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 1px;
    display: flex;
    align-items: center;

`
const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width:100%;
  height:100vh;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))
`
const Location = styled.div`
    position: absolute;
    color: white;
    z-index: 10;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 1px;
    align-self: flex-end;
    right: 10px;
`
export default Home