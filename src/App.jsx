import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Expidetion from './pages/Expidetion'
import Contactus from './pages/Contactus'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Navbar/>
      <Home/>
      <Destinations/>
      <Expidetion/>
      <Contactus/>
    </Container>

  )
}

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`

export default App