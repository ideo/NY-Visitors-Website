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

/**
 * Cubic Pulse.
 *
 * @param  {number} c - Edge 1.
 * @param  {number} w - Edge 2.
 * @param  {number} x - Source value for interpolation.
 * @return {number} Cubic pulse.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */

function cubicPulse (c, w, x) {
  x = Math.abs(x - c)
  if (x > w) return 0
  x /= w
  return 1 - x * x * (3 - 2 * x)
}

export default function Home() {

  const [isFoamBoardReleased, setFoamBoardReleased] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const [lineCount, setLineCount] = useState(0)
  const [lineHeight, setLineHeight] = useState(0)
  const [curtainHeight, setCurtainHeight] = useState(0)
  const curtainEl = createRef(null)
  const [linesMatrix, setLinesMatrix] = useState([])
  let loop = null

  useEffect(() => {
    const { lineCount, lineHeight } = getLineInfo(curtainEl.current) 
    setLineCount(lineCount)
    setLineHeight(lineHeight)
    setCurtainHeight(curtainEl.current.offsetHeight)
  }, [curtainEl])

  useEffect(() => {
    setLinesMatrix(new Array(lineCount).fill(0))
    console.log('lineCount changed ', lineCount)
  }, [lineCount])

  useEffect(() => {
    console.log('linesMatrix changed ', linesMatrix.length)
  }, [linesMatrix])
  
  useScrollPosition(({ currPos }) => {
    if (isFoamBoardReleased) { console.log('end!'); return }
    const scrolledPx = Math.abs(currPos.y)
    const coefficient  = 0.8 + cubicPulse(1, 300, scrolledPx)
    const scrolledPct = ((scrolledPx * 100) / (curtainHeight - window.innerHeight)) * coefficient
    const scrolledLines = (scrolledPct * lineCount) / 100
    const currentLineNumber = Math.floor(scrolledLines)
    const currentLinePct = Number((scrolledLines - currentLineNumber).toFixed(3))
    if (currentLine !== currentLineNumber) {
      setCurrentLine(currentLineNumber)
    } 
    const updatedLinesMatrix = [...linesMatrix]
    // console.log(`line ${currentLineNumber} – pct ${Number((currentLinePct * 100).toFixed(2))} – total ${lineCount}`)
    if (currentLine <= (lineCount - 2)) {
      updatedLinesMatrix.forEach((_, idx) => {          
        if (idx < currentLineNumber) {
          updatedLinesMatrix[idx] = 1
        } else {
          updatedLinesMatrix[idx] = 0
        }
      })
      updatedLinesMatrix[currentLineNumber] = currentLinePct
      setLinesMatrix(updatedLinesMatrix)
    } else {
      // console.log('Not updating the matrix')
    }
  })

  useEffect(() => {
    loop = window.requestAnimationFrame(() => {
      
    })
  }, [])

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
              <div 
                key={idx} 
                className={`${line} w-100 pv1`} 
                style={{ transform: `scaleX(${1 - progress})`, height: `${lineHeight}px`}}>
              </div>
            )
          })}
        </div>
        
        <p className="mb0 mt0">
          And suddenly you’re a patient. And nothing makes sense. And what’s this test, and what will it cost, and what was that thing you said just then. You’re in the healthcare machine for real, tumbling and turning: which way is which and which way is out. Skills, experiences, status—little of that helps. At every turn, overstretched nurses and doctors are doing their level best to see you, to really see you, and to look after you; doing their level best to work systems that seem to care less for how you’re feeling, and more for how you’re paying. navigate insurance why can’t you see me what is this bill a face beneath gauze well-documented disparities I am more than an outcome squeeze the tube dry give me death trying their level best to help it won’t go away on its own my family has it hardest proximal left anterior ventilators breathing searing pain in my heart and now I am a doctor spiked another fever low tolerance the body battles cold cotton gowns indecipherable pain drugs that sound like roman gods burnt out by the conversations scrubs of invisible suffering acute systemic distress a thousand different pills to take limbs so heavy everyone talking about solutions I am scared medical distancing isn’t new surge and persevere don and doff and don and doff emotion is evidence clinical care is messy hug my family forever navigate insurance why can’t you see me what is this bill a face beneath gauze well-documented disparities I am more than an outcome squeeze the tube dry give me death trying their level best to help it won’t go away on its own my family has it hardest proximal left anterior ventilators breathing searing pain in my heart and now I am a doctor spiked another fever low tolerance the body battles cold cotton gowns indecipherable pain drugs that sound like roman gods burnt out by the conversations scrubs of invisible suffering acute systemic distress a thousand different pills to take limbs so heavy everyone talking about solutions I am scared medical distancing isn’t new surge and persevere don and doff and don and doff emotion is evidence clinical care is messy hug my family forever.

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
