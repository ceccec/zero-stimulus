import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["display", "startButton", "pauseButton", "resetButton", "progress"]
  static values = { 
    duration: { type: Number, default: 1500 }, // 25 minutes in seconds
    isRunning: { type: Boolean, default: false },
    timeRemaining: { type: Number, default: 1500 }
  }

  connect() {
    this.updateDisplay()
    this.updateProgress()
  }

  start() {
    if (!this.isRunningValue) {
      this.isRunningValue = true
      this.startButtonTarget.classList.add("hidden")
      this.pauseButtonTarget.classList.remove("hidden")
      this.timer = setInterval(() => {
        this.timeRemainingValue--
        this.updateDisplay()
        this.updateProgress()
        
        if (this.timeRemainingValue <= 0) {
          this.complete()
        }
      }, 1000)
    }
  }

  pause() {
    if (this.isRunningValue) {
      this.isRunningValue = false
      this.startButtonTarget.classList.remove("hidden")
      this.pauseButtonTarget.classList.add("hidden")
      clearInterval(this.timer)
    }
  }

  reset() {
    this.pause()
    this.timeRemainingValue = this.durationValue
    this.updateDisplay()
    this.updateProgress()
  }

  complete() {
    this.pause()
    this.timeRemainingValue = 0
    this.updateDisplay()
    this.updateProgress()
    
    // Show completion notification
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Focus Session Complete!", {
        body: "Great job! Take a break.",
        icon: "/icon-192x192.png"
      })
    }
    
    // Play completion sound if available
    this.playCompletionSound()
  }

  updateDisplay() {
    const minutes = Math.floor(this.timeRemainingValue / 60)
    const seconds = this.timeRemainingValue % 60
    this.displayTarget.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  updateProgress() {
    const progress = ((this.durationValue - this.timeRemainingValue) / this.durationValue) * 100
    this.progressTarget.style.width = `${progress}%`
  }

  playCompletionSound() {
    // Simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1)
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.2)
  }

  requestNotificationPermission() {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission()
    }
  }
} 