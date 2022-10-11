import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <NavBar>
        <h2>EARTHLY WONDER</h2>
        <List>
            <li><a href ="#home">Home</a></li>
            <li><a href="#destinations">Destination</a></li>
            <li><a href="#Expidetion">Expidetion</a></li>
            <li><a href="#ContactUs">ContactUs</a></li>
        </List>
        <Start>Get Started</Start>
    </NavBar>
  )
}

const NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:black;
    color:white;
    padding-left: 2rem;
    padding-right: 2rem;
    max-height: 10vh;
    box-shadow: rgba(29, 28, 28, 0.5) 2px 2px;
    position: fixed;
    width: 100%;
    z-index:5;
    opacity: 0.7;
   
`
const List = styled.div`
    display: flex;
    list-style: none;

    li{
        margin-right: 6rem;
        font-size: 14px;
        a{
          text-decoration: none;
          color: white;
        }
    }
    li:hover{
        text-decoration: underline;
        font-weight: 700;
    }
`
const Start = styled.button`
  color:white;
  font-weight: bold;
  padding: 0.7rem 1rem 0.7rem 1rem;
  background-color: #107c10;
  border-radius: 7px;
  cursor: pointer;
button:hover{
  background-color: #289328;
}
`

export default Navbar