import { useEffect, useState, createRef } from 'react'
import Head from 'next/head'
import { Waypoint } from 'react-waypoint'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import {
  container, curtain, behind, lifted, released, linescontainer, line
} from '../styles/Home.module.css'

function getLineInfo(el) {
  const elHeight = el.offsetHeight
  const computedStyles = window.getComputedStyle(el)
  const lineHeight = parseInt(computedStyles.lineHeight)
  const lineCount = Math.floor(elHeight / lineHeight);
  return { lineCount, lineHeight }
}

export default function Home() {

  const [isFoamBoardReleased, setFoamBoardReleased] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const [lineCount, setLineCount] = useState(0)
  const [lineHeight, setLineHeight] = useState(0)
  const [curtainHeight, setCurtainHeight] = useState(0)
  const curtainEl = createRef(null)
  const [linesMatrix, setLinesMatrix] = useState(new Array(100).fill(0))
  
  useEffect(() => {
    const { lineCount, lineHeight } = getLineInfo(curtainEl.current) 
    setLineCount(lineCount)
    setLineHeight(lineHeight)
    setCurtainHeight(curtainEl.current.offsetHeight)
  }, [curtainEl])

  useEffect(() => {
    setLinesMatrix(new Array(lineCount).fill(0))
  }, [lineCount])

  useEffect(() => {
    console.log('line matrix ', linesMatrix)
    console.log('line count ', lineCount)
    console.log('line height ', lineHeight)
  }, [linesMatrix])

  useScrollPosition(({ currPos }) => {
    const scrolledPx = Math.abs(currPos.y)
    if (scrolledPx > curtainHeight) { return }
    const scrolledPct = (scrolledPx * 100) / curtainHeight
    const scrolledLines = scrolledPct % lineCount
    const currentLineNumber = Math.floor(scrolledLines)
    const currentLinePct = Number((scrolledLines - currentLineNumber).toFixed(3))
    console.log(currentLineNumber, currentLinePct)
    if (currentLine !== currentLineNumber) {
      setCurrentLine(currentLineNumber)
    }
    const updatedLinesMatrix = [...linesMatrix]
    updatedLinesMatrix.forEach((_, idx) => {
      if (idx < currentLineNumber) {
        updatedLinesMatrix[idx] = 1
      }
    })
    updatedLinesMatrix[currentLineNumber] = currentLinePct
    setLinesMatrix(updatedLinesMatrix)
  })

  return (
    <div className={`${container}`}>
      <Head>
        <title>IDEO Healthfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${curtain} ${isFoamBoardReleased ? lifted : ''} lh-copy relative f1 tj white pa4`} ref={curtainEl}>
        
        <div className={`${linescontainer} absolute flex flex-column`}>
          {linesMatrix.map((progress, idx) => {
            return (
              <div key={idx} className={`${line} w-100`} style={{ transform: `scaleX(${progress})`, height: `${lineHeight}px` }}>
              </div>
            )
          })}
        </div>
        
        <p className="mb0 mt0">
          One Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam.
          </p>
        <p className="mb0 mt0">
          Two Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam.
          </p>
        <p className="mb0 mt0">
          Three Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam.
          </p>
        <p className="mb0 mt0">
          Four Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam.
          </p>
        <p className="mb0 mt0">
          Five Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam.
          </p>
        <p className="mb0 mt0">
          Six Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac condimentum justo. Nulla quis turpis a enim dapibus fermentum vitae vel justo. Curabitur non sollicitudin ex. Integer ut lectus scelerisque, pharetra est at, accumsan dolor. Suspendisse potenti. Nullam non lorem non nulla varius accumsan quis vel ligula. Maecenas eget quam at ante rutrum commodo vel a massa. Mauris placerat consectetur est, in eleifend est molestie viverra. Ut mattis lectus in dui blandit, quis cursus nulla laoreet. Sed nec scelerisque ante, eget vulputate turpis. Mauris ac cursus ante. Praesent non elit non ex sodales iaculis congue sed turpis. Aenean sed aliquet nulla, at tristique quam.
          </p>
      </div>

      <Waypoint
        onLeave={({ currentPosition }) => {
          if (currentPosition === 'below') {
            setFoamBoardReleased(false)
          }
          if (currentPosition === 'above') {
            setFoamBoardReleased(true)
          }
        }}
        onEnter={({ previousPosition }) => {
          if (previousPosition === 'below') {
            setFoamBoardReleased(true)
          }
          if (previousPosition === 'above') {
            setFoamBoardReleased(false)
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
