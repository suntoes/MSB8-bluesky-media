import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'

import Chakra from './components/chakra'
import Fonts from './components/fonts'

import HeroBackground from './components/background'
import NavBar from './components/navbar'
import Footer from './compositions/footer'

const App = () => (
  <Chakra>
    <Fonts />
    <HeroBackground />
    <Router>
      <NavBar />
      <Routes />
      <Footer />
    </Router>
  </Chakra>
)

export default App
