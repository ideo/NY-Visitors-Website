/* 3rd party */
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

/* 1st party */
import { LOCAL_STORAGE_AUTH_KEY } from '../utils'

export default withRouter(function Authenticated({ history }) {
  
  function checkAuthParams () {
    if (window.location.search.length && window.location.search.indexOf('id_token') >= 0) {
      let authParms = window.location.search.split('')
      authParms = authParms.splice(1).join('')
      console.log('got jwt back from google: ' , authParms)
      fetch(`http://localhost:1337/auth/google/callback?${authParms}`)
      .then(response => response.json())
      .then(parsedResponse => {
        console.log('parsed token is: ', parsedResponse)
        console.log('history is: ', history)
        window.localStorage && window.localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(parsedResponse))
        history.push('/')
      })
      .catch(e => console.log('Failed - ', e))
    } else {
      console.log('redirect home. why are you even here.')
    }
  }

  checkAuthParams()

  return (
    <div className="w-100"> 
      <h1 className="serif self-center">
        Logging you in ...
      </h1>
    </div>
  )
})