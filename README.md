# R2M Brands Website

> **Predict. Execute. Win.**

A modern, interactive website for R2M Brands - Kenya's premier route-to-market agency specializing in last-mile distribution and General Trade domination.

![R2M Brands](https://img.shields.io/badge/Version-1.0.0-teal)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Production-green)

## 🌟 Features

### Core Functionality
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Interactive Animations** - Smooth scroll animations, reveal effects, and micro-interactions
- **Mobile Navigation** - Touch-friendly mobile menu with smooth transitions
- **Contact Form** - Interactive form with validation and success notifications
- **Stats Counter** - Animated statistics with count-up effects
- **Back to Top Button** - Convenient navigation for long pages
- **Active Nav Highlighting** - Section-based navigation highlighting

### Technical Features
- **Modern CSS3** - Utilizes Tailwind CSS for utility-first styling
- **Vanilla JavaScript** - No heavy frameworks, pure performance
- **SEO Optimized** - Semantic HTML5 and meta tags
- **Performance Focused** - Lazy loading images, debounced scroll events
- **Accessibility** - ARIA labels, keyboard navigation support
- **Cross-Browser Compatible** - Works on all modern browsers

### Design Elements
- **Custom Typography** - Outfit font family for modern aesthetics
- **Gradient Backgrounds** - Dynamic gradients with animated floating elements
- **Card Hover Effects** - Interactive cards with transform animations
- **Loading States** - Visual feedback for user actions
- **Notification System** - Toast notifications for user feedback

## 📁 Project Structure

```
r2m-brands-website/
│
├── index.html              # Main homepage
├── services-detail.html    # Last-Mile Distribution service page
├── styles.css              # Custom styles and animations
├── script.js               # Interactive JavaScript functionality
├── README.md               # Project documentation
│
└── assets/                 # (Optional) Local assets folder
    ├── images/
    └── fonts/
```

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A web server (optional, for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/r2m-brands-website.git
   cd r2m-brands-website
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access the website**
   - Navigate to `http://localhost:8000` in your browser

## 💻 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Tailwind CSS CDN
- **JavaScript (ES6+)** - Vanilla JS for interactivity
- **Font Awesome 6** - Icon library
- **Google Fonts** - Outfit and Space Mono fonts

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Palette

```css
/* Primary Colors */
--brand-teal: #0d9488;
--brand-dark: #0a0e27;
--brand-accent: #0f766e;
--brand-cyan: #06b6d4;
--brand-light: #f0fdfa;

/* Neutral Colors */
--white: #ffffff;
--gray-50: #f9fafb;
--gray-900: #111827;
```

## 🔧 Customization

### Changing Colors
Edit the Tailwind configuration in the `<script>` tag:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    teal: '#YOUR_COLOR',
                    // ... more colors
                }
            }
        }
    }
}
```

### Modifying Content
- **Homepage**: Edit `index.html`
- **Service Pages**: Edit `services-detail.html`
- **Styles**: Edit `styles.css`
- **Interactions**: Edit `script.js`

### Adding New Pages
1. Create a new HTML file
2. Copy the header/footer structure from `index.html`
3. Add your custom content
4. Update navigation links

## 📄 Pages

### Homepage (`index.html`)
- Hero section with animated stats
- Market reality section
- About R2M Brands
- Services overview
- Kaizen + DWM methodology
- Testimonials
- Contact form

### Services Detail (`services-detail.html`)
- Last-Mile Distribution overview
- Challenge and solution
- Kaizen + DWM system
- Technology platform
- Results and impact
- Call-to-action

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## ⚡ Performance Optimization

- Lazy loading for images
- Debounced scroll events
- CSS animations using GPU acceleration
- Minimal external dependencies
- CDN-hosted resources

## 🔒 Security

- No external form submissions (prevent CSRF)
- Content Security Policy ready
- XSS protection through content validation
- HTTPS recommended for production

## 📊 Analytics Integration

To add Google Analytics:

```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 📧 Contact Form Setup

The contact form currently uses JavaScript for client-side validation. To connect it to a backend:

1. **Using Formspree:**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using custom backend:**
   - Modify the form submission handler in `script.js`
   - Add your API endpoint
   - Handle server-side validation

## 🚢 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings
3. Enable GitHub Pages from the main branch
4. Access at `https://yourusername.github.io/r2m-brands-website`

### Netlify
1. Connect your GitHub repository
2. Configure build settings (none needed for static site)
3. Deploy automatically on push

### Vercel
1. Import your GitHub repository
2. Configure project (default settings work)
3. Deploy with one click

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**R2M Brands Limited**
- Website: [www.r2mbrands.com](http://www.r2mbrands.com)
- Email: info@r2mbrands.com
- Phone: +254 704 051 777 | +254 717 736 343
- Location: Nairobi, Kenya

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Web fonts
- [Unsplash](https://unsplash.com/) - Stock images

## 📞 Support

For support, email info@r2mbrands.com or create an issue in the GitHub repository.

## 🗺️ Roadmap

- [ ] Add blog section
- [ ] Implement case studies page
- [ ] Create team members page
- [ ] Add multilingual support (Swahili)
- [ ] Integrate CMS for easy content management
- [ ] Add client portal login
- [ ] Implement live chat support
- [ ] Create downloadable resources section

## 📈 Version History

* **1.0.0** (2024-01-28)
    * Initial release
    * Homepage with all sections
    * Last-Mile Distribution service page
    * Fully responsive design
    * Interactive animations and effects

---

**Built with ❤️ by R2M Brands** | *Connecting Brands to the Market*
