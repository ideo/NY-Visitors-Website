/* 3rd party */
import React from 'react'
import { withRouter} from 'react-router-dom'

/* 1st party */
import { LOCAL_STORAGE_AUTH_KEY, BASE_API_URL, AUTHORIZED_DOMAIN} from '../utils'

export default withRouter(function Authenticated({ history }) {
  
  function checkAuthParams () {
    if (window.location.search.length && window.location.search.indexOf('id_token') >= 0) {
      let authParms = window.location.search.split('')
      authParms = authParms.splice(1).join('')
      // here
      fetch(`${BASE_API_URL}/auth/google/callback?${authParms}`)
      .then(response => response.json())
      .then(parsedResponse => {
        const  { user: { email } } = parsedResponse 
        const domain = email.split('@')[1]
        if (domain.includes(AUTHORIZED_DOMAIN)) {
          window.localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(parsedResponse))
        } else {
          window.localStorage.clear()
          alert('Not an authorized domain. sorry')
        }
      })
      .catch(e => console.log('Failed - ', e))
    } else {
      console.log('Redirecting home. Why are you even here?')
    }
    history.push('/')
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