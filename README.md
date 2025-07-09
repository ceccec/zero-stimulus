# Zero-Stimulus PWA

A Progressive Web App built with **Stimulus.js** for creating zero-stimulus environments to help you focus and be more productive.

## 🚀 Installation

```bash
npm install zero-stimulus-pwa
```

## 📦 Usage

### Quick Start

```bash
# Clone the repository
git clone https://github.com/ceccec/zero-stimulus.git
cd zero-stimulus

# Install dependencies
npm install

# Start development server
npm run dev
```

### Using the Published Package

```bash
# Install globally
npm install -g zero-stimulus-pwa

# Or use as a template
npx create-react-app my-focus-app --template zero-stimulus-pwa
```

## 🎯 Features

- **Focus Timer**: Customizable Pomodoro-style timer with Stimulus controllers
- **Environment Control**: Manage your workspace for optimal focus
- **PWA Ready**: Install as a native app on any device
- **Offline Support**: Works without internet connection
- **Zero Distractions**: Designed for maximum productivity
- **Stimulus.js**: Lightweight, modern JavaScript framework

## 🛠️ Technology Stack

- **Stimulus.js**: Lightweight JavaScript framework for adding behavior to HTML
- **Vite**: Fast build tool and development server
- **PWA**: Progressive Web App capabilities
- **CSS Custom Properties**: Dynamic theming and environment switching

## 🎨 Architecture

This app uses **Stimulus.js** controllers for clean, maintainable JavaScript:

### Controllers

- **FocusTimerController**: Handles timer functionality, progress tracking, and notifications
- **EnvironmentController**: Manages environment switching and screen wake lock

### Key Features

- **Declarative HTML**: All behavior defined through data attributes
- **Lightweight**: No virtual DOM, minimal JavaScript footprint
- **Progressive Enhancement**: Works without JavaScript, enhanced with Stimulus
- **Modular**: Each controller handles a specific concern

## 🛠️ Development

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Serve production build
npm run serve
```

## 📱 PWA Features

- **Installable**: Add to home screen on mobile/desktop
- **Offline First**: Works without internet connection
- **Fast Loading**: Optimized with Vite build system
- **Responsive**: Works on all device sizes

## 🎨 Customization

The app includes several customizable components:

- **FocusTimer**: Adjustable work/break intervals with Stimulus values
- **EnvironmentControl**: Manage your physical workspace with dynamic CSS
- **Theme System**: CSS custom properties for easy theming

### Adding New Controllers

```javascript
// Create a new controller
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["element"]
  static values = { setting: String }
  
  connect() {
    // Controller initialization
  }
  
  action() {
    // Controller action
  }
}
```

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

- **GitHub**: https://github.com/ceccec/zero-stimulus
- **NPM**: https://www.npmjs.com/package/zero-stimulus-pwa
- **Issues**: https://github.com/ceccec/zero-stimulus/issues

---

**Built with Stimulus.js, Vite, and ❤️ for productivity** 