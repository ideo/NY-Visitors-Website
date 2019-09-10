/* 3rd party */
import React, { useState, useEffect } from 'react'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

/* 1st party */
import StudioItem from './StudioItem'
import { isAuthenticated, hydrate, logout, ENDPOINTS, LOCAL_STORAGE_AUTH_KEY, BASE_API_URL } from '../utils'

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

  // hydrate `place` categories from endpoint
  const [tips, setTips] = useState([])
  useEffect(() => {
    async function hydrateTip() {
      let data = []
      const response = await hydrate(ENDPOINTS.TIPS, 'id:ASC')
      if (response.statusCode && response.statusCode === 403) {
        console.log('We are not logged in, it seems.')
      } else if (Array.isArray(response)) {
        data = response
      }
      setTips(data)
    }
    hydrateTip()
  }, [])

  return (
    <section className="_section-studio flex flex-column w-100 items-center">        
      <div className="flex flex-column items-end w-70">
        <div className="_inner-studio outline flex flex-column w-75">

          <header className="_header-studio bb w-100 flex flex-row items-center">
            <h3 className="f3 fw5 serif ma0 w-100">
              03/ In the Studio
            </h3>
          </header>

          <div className="_content-studio w-100 flex flex-column overflow-y-scroll">
            <ReactPlaceholder className='pa3' type='text' rows={18} ready={isAuthenticated()}>
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
                <div className="_button-group-login flex flex-row w-100 mt3">
                  <div className="_title-google outline w-20">Google</div>
                  <button 
                    className="outline w-40"
                    onClick={() => { window.location = `${BASE_API_URL}/connect/google` }}>IDEO</button>
                  <button className="outline w-40">IDEO.ORG</button>
                </div>
              </>
            }
            
            
          </footer>
        
        </div>
      </div>
      
    </section>
  )
})
