/* 3rd party */
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

/* 1st party */
import GlobalHeader from './components/GlobalHeader'
import GlobalFooter from './components/GlobalFooter'
import WelcomeSection from './components/WelcomeSection'
import FaqSection from './components/FaqSection'
import PlacesSection from './components/PlacesSection'
import StudioSection from './components/StudioSection'
import Authenticated from './components/Authenticated'
import { hydrate, ENDPOINTS } from './utils'

const Root = () => {

  // hydrate `faq` and `info` items from endpoint
  const [faqs, setfaqs] = useState([])
  const [info, setInfo] = useState([])
  useEffect(() => {
    async function hydrateApp() {
      const faqs = await hydrate(ENDPOINTS.FAQS, 'id:ASC')
      setfaqs(faqs)
      // We only need 1 item here: the 1st item
      const [info] = await hydrate(ENDPOINTS.INFOS, 'id:ASC')
      setInfo(info)
    }
    hydrateApp()
  }, [])

  return (
    <>
      <GlobalHeader />
      <WelcomeSection data={info} />
      <FaqSection data={faqs} />
      <PlacesSection />
      <StudioSection />
      <GlobalFooter data={info} />
    </>
  )

}

export default function App({ data}) {
  return (
    <Router>
      <Route path='/' exact component={ () => <Root data={data} /> } />
      <Route path='/authenticated' exact component={ Authenticated } />
    </Router>    
  )
}
