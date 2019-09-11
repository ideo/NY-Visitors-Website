/* 3rd party */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/* 1st party */
import * as serviceWorker from './serviceWorker'

/* css styles */
import 'tachyons'
import './styles/fonts.css'
import './styles/main.css'

// read and import env variables fron `.env`
require('dotenv').config()

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
