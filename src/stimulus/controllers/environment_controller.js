import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["body", "environmentButton"]
  static values = { 
    currentEnvironment: { type: String, default: "minimal" }
  }

  connect() {
    this.applyEnvironment(this.currentEnvironmentValue)
  }

  switchEnvironment(event) {
    const environment = event.currentTarget.dataset.environment
    this.currentEnvironmentValue = environment
    this.applyEnvironment(environment)
    this.updateActiveButton(event.currentTarget)
  }

  applyEnvironment(environment) {
    const body = this.bodyTarget
    
    // Remove all environment classes
    body.classList.remove("environment-minimal", "environment-dark", "environment-nature", "environment-silent")
    
    // Add the selected environment class
    body.classList.add(`environment-${environment}`)
    
    // Apply specific environment settings
    switch (environment) {
      case "minimal":
        this.applyMinimalEnvironment()
        break
      case "dark":
        this.applyDarkEnvironment()
        break
      case "nature":
        this.applyNatureEnvironment()
        break
      case "silent":
        this.applySilentEnvironment()
        break
    }
  }

  applyMinimalEnvironment() {
    // Pure white background, minimal distractions
    document.documentElement.style.setProperty("--bg-color", "#ffffff")
    document.documentElement.style.setProperty("--text-color", "#000000")
    document.documentElement.style.setProperty("--accent-color", "#f0f0f0")
  }

  applyDarkEnvironment() {
    // Dark mode for eye comfort
    document.documentElement.style.setProperty("--bg-color", "#1a1a1a")
    document.documentElement.style.setProperty("--text-color", "#ffffff")
    document.documentElement.style.setProperty("--accent-color", "#2d2d2d")
  }

  applyNatureEnvironment() {
    // Subtle nature-inspired colors
    document.documentElement.style.setProperty("--bg-color", "#f5f5f0")
    document.documentElement.style.setProperty("--text-color", "#2c5530")
    document.documentElement.style.setProperty("--accent-color", "#e8f5e8")
  }

  applySilentEnvironment() {
    // Muted, calming colors
    document.documentElement.style.setProperty("--bg-color", "#fafafa")
    document.documentElement.style.setProperty("--text-color", "#666666")
    document.documentElement.style.setProperty("--accent-color", "#f0f0f0")
  }

  updateActiveButton(activeButton) {
    // Remove active class from all buttons
    this.environmentButtonTargets.forEach(button => {
      button.classList.remove("active")
    })
    
    // Add active class to clicked button
    activeButton.classList.add("active")
  }

  requestScreenWakeLock() {
    if ("wakeLock" in navigator) {
      navigator.wakeLock.request("screen")
        .then(lock => {
          console.log("Screen wake lock active")
        })
        .catch(err => {
          console.log("Wake lock request failed:", err)
        })
    }
  }

  releaseScreenWakeLock() {
    if (this.wakeLock) {
      this.wakeLock.release()
      this.wakeLock = null
    }
  }
} 