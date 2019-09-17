/* 3rd party */
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Rellax from 'react-rellax'
import classNames from 'classnames'
import isEmpty from 'lodash.isempty'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'

/* 1st party */
import Loading from './Loading'
import StudioItem from './StudioItem'
import { isAuthenticated, hydrate, logout, ENDPOINTS, LOCAL_STORAGE_AUTH_KEY, BASE_API_URL } from '../utils'
import Printer from '../styles/images/printer.png'
import FunkyBlob from '../styles/images/funky-blob.png'
import YellowBlob from '../styles/images/yellow-blob.png'
import YellowBlobDesktop from '../styles/images/yellow-blob-desktop.png'
import MiniPrinter from '../styles/images/mini-printer.png'
import MiniPrinterDesktop from '../styles/images/mini-printer-desktop.png'
import PolkaBlobBottom from '../styles/images/polka-blob-bottom.png'
import OceanBlobBottom from '../styles/images/ocean-blob-bottom.png'

const Tips = ({ items }) => {
  let ret = null
  if (isAuthenticated()) {
    ret = (
      <>
        {items.map(({ question, response }, index) => (
          <StudioItem key={index} data={{ question, response}} />
        ))}
      </>
      )
    }
  return ret
}

export default withRouter(function StudioSection({ history }) {

  // hydrate `tips` from endpoint
  const [tips, setTips] = useState([])
  useEffect(() => {
    async function hydrateTips() {
      let data = []
      const response = await hydrate(ENDPOINTS.TIPS, 'id:ASC')
      if (response.statusCode && response.statusCode === 403) {
        console.log('We are not logged in, it seems.')
      } else if (Array.isArray(response)) {
        data = response
      }
      setTips(data)
    }
    hydrateTips()
  }, [])

  const isLoading = isEmpty(tips)

  return (
    <section
      id="in-studio"
      className="_section-studio flex flex-column w-100 items-center">        
      
      <Rellax className="_image-printer" as="div" speed={2.1} >
        <img src={Printer} />
      </Rellax>
      
      <Rellax className="_image-funky-blob" as="div" speed={2.1} >
        <img src={FunkyBlob} />
      </Rellax>
      
      <Rellax className="_image-yellow-blob" as="div" speed={1.1} >
        <img src={YellowBlob} />
      </Rellax>
      
      <Rellax className="_image-yellow-blob-desktop" as="div" speed={1.1} >
        <img src={YellowBlobDesktop} />
      </Rellax>
      
      <Rellax className="_image-mini-printer" as="div" speed={1.1} >
        <img src={MiniPrinter} />
      </Rellax>

      <Rellax className="_image-mini-printer-desktop" as="div" speed={1.1} >
        <img src={MiniPrinterDesktop} />
      </Rellax>
      
      <Rellax className="_image-polka-blob-bottom" as="div" speed={1.1} >
        <img src={PolkaBlobBottom} />
      </Rellax>
      
      <Rellax className="_image-ocean-blob-bottom" as="div" speed={1.3} >
        <img src={OceanBlobBottom} />
      </Rellax>

      <div className="flex flex-column items-end w-80 w-70">
        <div className="_inner-studio outline flex flex-column w-100 w-75-l">

          <header className={classNames('_header-studio', 'bb', 'w-100', 'flex', 'flex-row', 'items-center', {'_unlocked': isAuthenticated()})}>
            <h3 className="f3 fw5 serif ma0 w-80">
              03/ In the Studio
            </h3>
          </header>

          <div className="_content-studio w-100 flex flex-column overflow-y-scroll">
            <ReactPlaceholder className='pa3' type='text' rows={18} ready={isAuthenticated()}>
              {isLoading && <Loading />}
              <Tips items={tips} />
            </ReactPlaceholder>
          </div>

          <footer className="_footer-studio bt w-100 pa4 flex flex-column">
            {isAuthenticated() &&
              <>
                <h4 className="ma0 fw6 mb1 sans-serif">
                  Hi { JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)).user.email }! 
                  Welcome to your home away from home.
                </h4>
                <div className="_button-group-login flex flex-row w-100 mt3">
                  <a 
                    onClick={logout}
                    href="#"
                    className="sans-serif f7 link underline black pa0">Logout</a>
                </div>
              </>
            }
            {!isAuthenticated() && 
              <>
                <h4 className="ma0 fw6 mb1 sans-serif">
                  Hi IDEOers! Welcome to your home away from home.
                </h4>
                <p className="sans-serif f6 fw4 ma0">Please sign in to view the content.</p>
                <div className="_button-group-login outline flex flex-row w-100 mt4">
                  <div className="_title-google outline flex w-10"></div>
                  <button 
                    className="_button-login _ideo flex w-50"
                    onClick={() => { window.location = `${BASE_API_URL}/connect/google` }}>IDEO</button>
                  <button 
                    className="_button-login _ideoorg flex w-50"
                    onClick={() => { window.location = `${BASE_API_URL}/connect/google` }}>IDEO.ORG</button>
                </div>
              </>
            }
            
          </footer>
       
        </div>
      </div>
      
    </section>
  )
})
