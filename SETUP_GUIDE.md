# R2M Brands Website - Setup & Deployment Guide

This guide will help you set up and deploy the R2M Brands website.

## 📋 Table of Contents

1. [Local Development Setup](#local-development-setup)
2. [GitHub Repository Setup](#github-repository-setup)
3. [Deployment Options](#deployment-options)
4. [Configuration](#configuration)
5. [Troubleshooting](#troubleshooting)

---

## 🖥️ Local Development Setup

### Option 1: Direct File Opening
The simplest way to view the website:

1. Download all files to your computer
2. Open `index.html` in your web browser
3. Navigate through the site

**Note:** Some features may not work due to CORS restrictions when opening files directly.

### Option 2: Using Python (Recommended)

```bash
# Navigate to the project directory
cd r2m-brands-website

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

### Option 3: Using Node.js

```bash
# Install serve globally (one-time only)
npm install -g serve

# Start the server
serve -s . -p 8000
```

Then open: `http://localhost:8000`

### Option 4: Using PHP

```bash
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Option 5: Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 📦 GitHub Repository Setup

### Step 1: Create a New Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it: `r2m-brands-website`
4. Add description: "R2M Brands - Route-to-Market Agency Website"
5. Choose "Public" or "Private"
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### Step 2: Upload Files to GitHub

#### Method A: Using GitHub Web Interface

1. On your new repository page, click "uploading an existing file"
2. Drag and drop all files:
   - index.html
   - services-detail.html
   - styles.css
   - script.js
   - README.md
   - LICENSE
   - .gitignore
   - Original_Logo.png
3. Add commit message: "Initial commit - R2M Brands website"
4. Click "Commit changes"

#### Method B: Using Git Command Line

```bash
# Navigate to your project directory
cd r2m-brands-website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - R2M Brands website"

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/r2m-brands-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Easiest & Free)

#### Steps:

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://YOUR_USERNAME.github.io/r2m-brands-website`

#### Custom Domain (Optional):

1. In GitHub Pages settings, enter your custom domain
2. Add a CNAME file to your repository with your domain
3. Configure DNS records with your domain provider:
   ```
   Type: CNAME
   Name: www (or @)
   Value: YOUR_USERNAME.github.io
   ```

### Option 2: Netlify (Recommended for Production)

#### Steps:

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up / Log in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account
5. Select your repository
6. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or put ".")
7. Click "Deploy site"
8. Your site will be live at: `https://random-name.netlify.app`

#### Custom Domain on Netlify:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

### Option 3: Vercel

#### Steps:

1. Go to [Vercel](https://vercel.com/)
2. Sign up / Log in with GitHub
3. Click "New Project"
4. Import your repository
5. Configure:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
6. Click "Deploy"
7. Your site will be live at: `https://r2m-brands-website.vercel.app`

### Option 4: Traditional Web Hosting

#### For cPanel/FTP Hosting:

1. Connect via FTP client (FileZilla, etc.)
2. Upload all files to `public_html` or `www` folder
3. Ensure `index.html` is in the root directory
4. Visit your domain

---

## ⚙️ Configuration

### Updating Contact Information

Edit these files to update contact details:

**index.html** (Line ~278-288):
```html
<p class="font-semibold text-gray-900">+254 704 051 777</p>
<p class="font-semibold text-gray-900">+254 717 736 343</p>
<p class="font-semibold text-gray-900">info@r2mbrands.com</p>
```

**services-detail.html** (Similar sections in footer)

### Changing Colors

Edit the Tailwind config in both HTML files:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    teal: '#0d9488',    // Change this
                    dark: '#0a0e27',    // Change this
                    accent: '#0f766e',  // Change this
                    cyan: '#06b6d4',    // Change this
                }
            }
        }
    }
}
```

### Adding Google Analytics

Add before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Setting Up Contact Form Backend

#### Option A: Formspree (Easy)

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Copy your form ID
4. Update the form in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Option B: Custom Backend

Modify `script.js` form handler (line ~177):

```javascript
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    try {
        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            showNotification('Message sent successfully!', 'success');
        }
    } catch (error) {
        showNotification('Failed to send message', 'error');
    }
});
```

---

## 🔧 Troubleshooting

### Issue: Images Not Loading

**Solution:**
- Check image URLs in the HTML files
- Ensure you have internet connection (images are from Unsplash)
- For local images, create an `assets/images/` folder and update URLs

### Issue: Animations Not Working

**Solution:**
- Clear browser cache
- Check browser console for JavaScript errors
- Ensure JavaScript is enabled in browser

### Issue: Mobile Menu Not Opening

**Solution:**
- Check that `script.js` is loaded
- Open browser console and check for errors
- Ensure Font Awesome is loading properly

### Issue: Form Submission Not Working

**Solution:**
- The form currently uses JavaScript simulation
- Follow the "Setting Up Contact Form Backend" section
- Check browser console for errors

### Issue: Styles Not Applied

**Solution:**
- Check that Tailwind CSS CDN is loading
- Verify internet connection
- Check `styles.css` is linked properly

### Issue: GitHub Pages Not Deploying

**Solution:**
- Wait 5-10 minutes (initial deployment takes time)
- Check repository is public
- Ensure `index.html` is in the root directory
- Check GitHub Actions tab for deployment status

---

## 📞 Support

For additional support:

- **Email:** info@r2mbrands.com
- **Phone:** +254 704 051 777
- **GitHub Issues:** Create an issue in the repository

---

## 🎯 Quick Checklist

Before going live, ensure:

- [ ] All contact information is correct
- [ ] Logo/images are optimized
- [ ] Contact form is connected to backend
- [ ] Google Analytics is set up
- [ ] Social media links are updated
- [ ] All pages are tested on mobile
- [ ] SEO meta tags are added
- [ ] Site is tested in multiple browsers
- [ ] Custom domain is configured (if applicable)
- [ ] SSL certificate is active (HTTPS)

---

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [GitHub Pages Guide](https://pages.github.com/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated:** January 28, 2024

**Version:** 1.0.0

---

*Built with ❤️ by R2M Brands | Connecting Brands to the Market*
