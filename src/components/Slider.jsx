import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from 'styled-components';

function Slider(props) {

    function toggle(id){
        console.log(id)
    }

    const mapped = props.destinations.map(function(destination){
        return(
            <SplideSlide>
                <Image onClick={()=>toggle(destination.id)}>
                    <img src={destination.image}></img>
                    <Gradient><div className='place'>{destination.place}</div><div className='country'>{destination.country}</div></Gradient>
                </Image>
            </SplideSlide>
        )
    })


  return (
    <Wrapper>
        <Splide options={{
        perPage:3,
        pagination:false,
        drag:"free",
        gap:'1rem',
        height: "33vh"
        }}>
            {mapped}
        </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`
const Image = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position:center;
    }
`
const Gradient = styled.div`
  position: absolute;
  color: white;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
  opacity:0;
  .place{
        font-size: 2.5rem;
        letter-spacing: 2px;
    }
    .country{
        font-size: 1.4rem;
        letter-spacing: 1px;
    }
  &:hover{
    opacity: 1;
  }
`

export default Slider