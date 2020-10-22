import { useCallback, useState } from 'react'
import Head from 'next/head'
import { Waypoint } from 'react-waypoint'

import {
  container, curtain, behind, lifted, released
} from '../styles/Home.module.css'


export default function Home() {
  
  const [isFoamBoardReleased, setFoamBoardReleased] = useState(false)

  return (
    <div className={`${container}`}>
      <Head>
        <title>IDEO Healthfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${curtain} ${isFoamBoardReleased ? lifted : ''} lh-copy f1 tj white pa4`}>
        <p className="mb2 mt0">
          One Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam. 
          </p>
          <p className="mb2">
          Two Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam. 
          </p>
          <p className="mb2">
          Three Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam. 
          </p>
          <p className="mb2">
          Four Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam. 
          </p>
          <p className="mb2">
          Five Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam. 
          </p>
          <p className="mb2">
          Six Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam. 
          </p>
      </div>

      <Waypoint
        onLeave={({ currentPosition, previousPosition }) => { 
          if (currentPosition === 'below') {
            setFoamBoardReleased(false)  
          }
          if (currentPosition === 'above') {
            setFoamBoardReleased(true)  
          }
        }}
        onEnter={({ previousPosition }) => { 
          if (previousPosition === 'above') {
            setFoamBoardReleased(false)  
          }
          if (previousPosition === 'below') {
            setFoamBoardReleased(true)  
          }
        }}
      />

      <div className={`${behind} ${isFoamBoardReleased ? released : ''} pa4 lh-copy f2 tj black`}>
        <p className="mb2">
        One Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam. 
        </p>
        <p className="mb2">
        Two Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam. 
        </p>
        <p className="mb2">
        Three Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam. 
        </p>
        <p className="mb2">
        Four Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam. 
        </p>
        <p className="mb2">
        Five Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam. 
        </p>
        <p className="mb2">
        Six Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam. 
        </p>
      </div>
    </div>
  )
}
