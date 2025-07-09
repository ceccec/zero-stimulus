# Zero-Stimulus PWA

A Progressive Web App focused on creating environments and tools with minimal external stimuli for enhanced focus and productivity.

## About

This project explores the concept of zero-stimulus environments and their applications in learning, focus, and cognitive performance. The PWA provides a distraction-free environment with customizable settings for optimal concentration.

## Features

- **Focus Timer**: Pomodoro-style timer with minimal visual stimuli
- **Environment Controls**: Switch between different stimulus environments
  - Minimal: Pure white background
  - Dark: Dark mode for eye comfort
  - Nature: Subtle nature sounds (coming soon)
  - Silent: Complete silence
- **PWA Support**: Installable on any device
- **Screen Wake Lock**: Prevents screen sleep during focus sessions
- **Responsive Design**: Works on desktop, tablet, and mobile

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ceccec/zero-stimulus.git
cd zero-stimulus
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Usage

1. **Start a Focus Session**: Click "Start Focus" to begin a 25-minute timer
2. **Choose Environment**: Select your preferred stimulus environment
3. **Stay Focused**: The app will prevent screen sleep and minimize distractions
4. **Take Breaks**: Use the pause and reset functions as needed

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 