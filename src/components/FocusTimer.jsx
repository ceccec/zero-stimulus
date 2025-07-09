import React, { useState, useEffect } from 'react'
import './FocusTimer.css'

const FocusTimer = ({ isActive, setIsActive }) => {
  const [time, setTime] = useState(25 * 60) // 25 minutes default
  const [isRunning, setIsRunning] = useState(false)
  const [mode, setMode] = useState('focus') // focus, break, long-break

  useEffect(() => {
    let interval = null
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1)
      }, 1000)
    } else if (time === 0) {
      setIsRunning(false)
      // Play subtle notification
      new Audio('/notification.mp3').play().catch(() => {})
    }
    return () => clearInterval(interval)
  }, [isRunning, time])

  const startTimer = () => {
    setIsRunning(true)
    setIsActive(true)
  }

  const pauseTimer = () => {
    setIsRunning(false)
    setIsActive(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setIsActive(false)
    setTime(25 * 60)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="focus-timer">
      <div className="timer-display">
        <div className="time">{formatTime(time)}</div>
        <div className="mode">{mode}</div>
      </div>
      
      <div className="timer-controls">
        {!isRunning ? (
          <button onClick={startTimer} className="start-btn">
            Start Focus
          </button>
        ) : (
          <button onClick={pauseTimer} className="pause-btn">
            Pause
          </button>
        )}
        <button onClick={resetTimer} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  )
}

export default FocusTimer 