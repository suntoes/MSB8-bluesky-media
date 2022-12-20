import { Route, Routes, useLocation } from 'react-router-dom'

import { Box } from '@chakra-ui/react'

import Hero from './compositions/hero'
import WhyBluesky from './compositions/why-bluesky'
import WorkExpectation from './compositions/work-expectation'
import WorkWithTheBest from './compositions/work-with-the-best'
import ViewWorks from './compositions/view-works'
import DiscoverCapabilities from './compositions/discover-capabilities'
import OurPrecess from './compositions/our-process'
import Client from './compositions/client'

import Privacy from './compositions/privacy'
import Terms from './compositions/terms'

const App = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route
        path="*"
        element={
          <>
            <Hero />
            <WhyBluesky />
            <WorkExpectation />
            <WorkWithTheBest />
            <ViewWorks />
            <Box
              overflow="hidden"
              position="relative"
              zIndex={-1}
              bgImage="url(images/background-asset-02.png)"
            >
              <DiscoverCapabilities />
              <OurPrecess />
            </Box>
            <Client />
          </>
        }
      />
    </Routes>
  )
}

export default App
