# Runora Converter

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Status: Maintained](https://img.shields.io/badge/status-maintained-success)

A modern, high-performance web application for real-time text conversion between the standard alphabet and the mystical Runora script. Built with cutting-edge web technologies and Apple-inspired glassmorphic design principles.

**[Live Demo →](https://klobay.github.io/Runora-Converter/)**

---

## 🎯 Overview

Runora Converter is a sophisticated text transformation tool that bridges the gap between the Latin alphabet and the fictional Runora symbol system. Designed with a focus on user experience, performance, and visual excellence, it delivers instant bidirectional conversion with a premium, polished interface that rivals native applications.

The application features a contemporary glassmorphic design inspired by Apple's design language, with frosted glass effects, dynamic gradients, and smooth animations that create an immersive and delightful user experience.

---

## ✨ Key Features

### Core Functionality
- **Instant Real-Time Conversion:** Characters are transformed as you type with zero latency
- **Bidirectional Translation:** Seamlessly switch between Alphabet → Runora and Runora → Alphabet modes
- **Smart History Management:** Automatically saves completed conversions (not every keystroke) when you clear the input
- **One-Click Reuse:** Click any history item to instantly load it back into the converter
- **Clipboard Integration:** Copy converted text with a single click and instant visual feedback

### User Experience
- **Glassmorphic UI Design:** Apple-inspired frosted glass aesthetic with backdrop blur and vibrancy effects
- **Adaptive Dark Mode:** Beautifully crafted dark theme with optimized contrast and colors that persist across sessions
- **Smooth Animations:** Thoughtful micro-interactions and transitions throughout the interface
- **Toast Notifications:** Non-intrusive feedback for user actions
- **Character Counter:** Real-time display of input text length
- **Responsive Design:** Fluid layouts that adapt seamlessly from mobile to desktop

### Technical Excellence
- **Zero Dependencies:** Pure vanilla JavaScript, HTML5, and CSS3—no frameworks or libraries
- **Optimized Performance:** Efficient DOM manipulation and minimal reflows
- **Modern CSS:** Utilizes backdrop-filter, CSS Grid, Flexbox, and custom properties
- **Cross-Browser Compatible:** Fully tested across modern browsers including Safari (with webkit prefixes)
- **Accessibility First:** Semantic HTML and ARIA labels for screen reader support

---

## 🚀 Technology Stack

### Frontend Architecture
- **HTML5:** Semantic markup with proper document structure and accessibility attributes
- **CSS3:** Advanced styling with:
  - Glassmorphism effects using `backdrop-filter` and layered transparency
  - CSS custom properties for theme management
  - Flexbox and CSS Grid for responsive layouts
  - Hardware-accelerated animations with `transform` and `opacity`
  - Custom scrollbar styling
- **JavaScript ES6+:** Modern vanilla JavaScript featuring:
  - Event-driven architecture
  - DOM manipulation with efficient selectors
  - LocalStorage API for persistent user preferences
  - Clipboard API for seamless copy functionality
  - Template literals for dynamic HTML generation

### Design System
- **Typography:** Inter for UI text, JetBrains Mono for code/symbols
- **Color Palette:** Gradient-based design with purple/violet primary colors
- **Spacing System:** Consistent 4px/8px base unit scale
- **Component Library:** Reusable card, button, and input components

---

## 🛠️ Installation & Setup

This is a static single-page application requiring no build process, dependencies, or server configuration.

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/klobay/Runora-Converter.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Runora-Converter
   ```

3. **Open in browser:**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   # or
   start index.html
   # or double-click the file
   ```

### Development

For local development with live reload, you can use any static server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

---

## 📖 User Guide

### Basic Usage

1. **Input Text**
   - Type or paste text into the input area
   - Conversion happens instantly as you type
   - A clear button (×) appears when text is present

2. **Switch Conversion Mode**
   - Click the toggle buttons at the top to switch between:
     - **Alphabet → Runora:** Converts standard text to Runora symbols
     - **Runora → Alphabet:** Converts Runora symbols back to standard text
   - The mode indicator smoothly animates to show the active mode

3. **Copy Output**
   - Click the "Copy" button in the output section
   - Visual feedback confirms successful copy
   - The button temporarily changes to "Copied!" for 2 seconds

4. **Use Conversion History**
   - History saves when you clear the input (not during typing)
   - Click any history item to load it back into the converter
   - History displays your last 5 conversions
   - Use "Clear All" to reset your history

5. **Toggle Theme**
   - Click the "Dark"/"Light" button in the top-right corner
   - Theme preference is automatically saved to localStorage
   - Smooth transition animation between modes

### Keyboard Shortcuts

- **Ctrl/Cmd + A:** Select all text in the input area
- **Ctrl/Cmd + C:** Copy selected text
- **Ctrl/Cmd + V:** Paste text into input

---

## 🎨 Design Philosophy

Runora Converter embraces modern web design principles:

- **Glassmorphism:** Frosted glass effects with backdrop blur create depth and visual hierarchy
- **Micro-interactions:** Subtle animations provide feedback and enhance perceived performance
- **Progressive Enhancement:** Core functionality works without JavaScript, enhanced features layer on top
- **Mobile-First:** Designed for touch interfaces first, scaled up for desktop
- **Accessibility:** Proper contrast ratios, semantic HTML, and keyboard navigation support

---

## 🔧 Customization

### Modifying the Symbol Map

Edit the `symbolMap` object in the JavaScript section to customize character mappings:

```javascript
const symbolMap = {
    'A': '∣',
    'B': '‒',
    'C': 'ˁ',
    // Add or modify mappings here
};
```

### Theming

Colors are managed through CSS custom properties for easy theme customization. Modify the gradient and color values in the `<style>` section:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Font Customization

Change the Google Fonts import in the `<head>` section:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

---

## 🤝 Contributing

Contributions are welcome and greatly appreciated! Whether you're fixing bugs, improving documentation, or proposing new features, your input helps make Runora Converter better for everyone.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/YourAmazingFeature
   ```
3. **Make your changes**
   - Write clean, commented code
   - Follow the existing code style
   - Test across multiple browsers
4. **Commit your changes**
   ```bash
   git commit -m 'Add: Your amazing feature description'
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/YourAmazingFeature
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- Maintain the vanilla JavaScript approach (no frameworks)
- Ensure responsive design works on mobile and desktop
- Test dark mode compatibility
- Update documentation for new features
- Keep accessibility in mind

### Reporting Issues

Found a bug? Have a feature request? Please open an issue with:
- A clear, descriptive title
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Browser and OS information
- Screenshots if applicable

---

## 📊 Browser Support

Runora Converter supports all modern browsers:

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Opera | Latest 2 versions |

**Note:** Internet Explorer is not supported due to its lack of modern CSS and JavaScript features.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for full details.

```
MIT License - Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 🙏 Acknowledgments

- Design inspired by Apple's Human Interface Guidelines and glassmorphic design trends
- Typography powered by Google Fonts (Inter & JetBrains Mono)
- Icon concepts from modern material design principles
- Community feedback and contributions from open-source developers

---

## 📞 Contact & Support

- **Issues:** [GitHub Issues](https://github.com/klobay/Runora-Converter/issues)
- **Discussions:** [GitHub Discussions](https://github.com/klobay/Runora-Converter/discussions)
- **Website:** [Live Demo](https://klobay.github.io/Runora-Converter/)

---

<div align="center">

**Made with ❤️ and modern web technologies**

[⬆ Back to Top](#runora-converter)

</div>
