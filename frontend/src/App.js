/* 3rd party */
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

/* 1st party */
import GlobalHeader from './components/GlobalHeader'
import WelcomeSection from './components/WelcomeSection'
import TipsSection from './components/TipsSection'
import PlacesSection from './components/PlacesSection'
import StudioSection from './components/StudioSection'
import Authenticated from './components/Authenticated'
import GlobalFooter from './components/GlobalFooter'

const Root = ({ data: { essentials, tips }}) => (
  <>
    <GlobalHeader />
    <WelcomeSection data={essentials} />
    <TipsSection data={tips} />
    <PlacesSection />
    <StudioSection />
    <GlobalFooter />
  </>
)


export default function App({ data}) {
  return (
    <Router>
      <Route path='/' exact component={ () => <Root data={data} /> } />
      <Route path='/authenticated' exact component={ Authenticated } />
    </Router>    
  )
}
