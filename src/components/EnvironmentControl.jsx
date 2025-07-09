import React from 'react'
import './EnvironmentControl.css'

const EnvironmentControl = ({ environment, setEnvironment }) => {
  const environments = [
    { id: 'minimal', name: 'Minimal', description: 'Pure white background' },
    { id: 'dark', name: 'Dark', description: 'Dark mode for eye comfort' },
    { id: 'nature', name: 'Nature', description: 'Subtle nature sounds' },
    { id: 'silent', name: 'Silent', description: 'Complete silence' }
  ]

  const handleEnvironmentChange = (envId) => {
    setEnvironment(envId)
    
    // Apply environment-specific settings
    switch (envId) {
      case 'dark':
        document.body.classList.add('dark-mode')
        break
      case 'minimal':
        document.body.classList.remove('dark-mode')
        break
      case 'nature':
        // Could add nature sound loop here
        break
      case 'silent':
        // Ensure all audio is muted
        break
    }
  }

  return (
    <div className="environment-control">
      <h3>Environment</h3>
      <div className="environment-options">
        {environments.map((env) => (
          <button
            key={env.id}
            className={`env-option ${environment === env.id ? 'active' : ''}`}
            onClick={() => handleEnvironmentChange(env.id)}
          >
            <div className="env-name">{env.name}</div>
            <div className="env-description">{env.description}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default EnvironmentControl 