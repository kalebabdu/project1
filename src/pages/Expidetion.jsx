import React from 'react'
import styled from 'styled-components'
import Videos from '../Data/Videos'

function Expidetion() {
  return (
    <Page className='section' id='Expidetion'>
      <h1>Expidetions</h1>
      <VideoComp>
        {Videos.map((video)=>{
          return(
            <div>
              <video loop src= {video.video} height='500px' width ='300px' muted autoplay='true'/>
              <Des>
                <h1>{video.place}</h1>
                <h2>{video.country}</h2>
              </Des>
            </div>
          )
        })} 
      </VideoComp> 
    </Page>
  )
}

const Page = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  scroll-snap-align: start;

  h1{
    color:white;
    padding-top: 6vh;
  }
`
const VideoComp = styled.div`
  display: flex;
  justify-content: space-around;

  div{
    text-align: center;
  }
  video{
    border-radius: 50px;
  }
`
const Des = styled.div`
    h1{
    margin: 0;
    color: white;
    letter-spacing: 2px;
    padding: 10px;
  }
  h2{
    margin: 0;
    color: white;
    letter-spacing: 1px;
  }
`


export default Expidetion