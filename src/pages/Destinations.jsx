import React from 'react'
import styled from 'styled-components'
import Slider from '../components/Slider'
import Des from '../Data/Destinations'

function Destinations() {
  return (
    <Page className='section' id = 'destinations'>
        <div style={{marginTop:"10vh"}}>
            <h2>Popular Destinations</h2>
            <Slider destinations = {Des}/>
        </div>
        <div>
            <h2>Wonderful Landscapes</h2>
            <Slider destinations = {Des}/>
        </div>    
    </Page>
  )
}

const Page = styled.div`
    height: 100vh;
    width: 100%;
    margin: 0;  
    overflow: hidden;
    scroll-snap-align: start;
    
    h2{
        color: white;
        padding: 0;
    }
`

export default Destinations