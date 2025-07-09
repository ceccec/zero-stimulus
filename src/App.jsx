import React, { useState, useEffect } from 'react'
import './App.css'
import FocusTimer from './components/FocusTimer'
import EnvironmentControl from './components/EnvironmentControl'

function App() {
  const [isActive, setIsActive] = useState(false)
  const [environment, setEnvironment] = useState('minimal')

  useEffect(() => {
    // Prevent screen sleep when app is active
    if (isActive) {
      navigator.wakeLock?.request('screen')
    }
  }, [isActive])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Zero Stimulus</h1>
        <p>Minimal distraction environment</p>
      </header>
      
      <main className="app-main">
        <FocusTimer 
          isActive={isActive} 
          setIsActive={setIsActive}
        />
        
        <EnvironmentControl 
          environment={environment}
          setEnvironment={setEnvironment}
        />
      </main>
    </div>
  )
}

export default App 