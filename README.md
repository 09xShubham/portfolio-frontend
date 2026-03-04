# Shubham Yadav – Portfolio

A modern, dark-themed portfolio website built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**.

## ✨ Features

- **Custom cursor** with spring physics and hover states
- **Animated particle field** with connection lines
- **Typewriter hero** with multiple role cycling
- **Framer Motion** scroll-triggered animations throughout
- **Glassmorphism** UI cards with hover effects
- **Responsive** – works on all screen sizes
- **Skill bars** with animated progress
- **Timeline** experience layout
- **Contact form** with visual feedback
- **Grid background** with noise overlay

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles, fonts, utility classes
│   ├── layout.js         # Root layout with metadata
│   └── page.js           # Main page composition
├── components/
│   ├── CustomCursor.jsx  # Spring-animated cursor + ring
│   ├── ParticleField.jsx # Canvas particle network
│   ├── Navbar.jsx        # Sticky nav with mobile menu
│   ├── Hero.jsx          # Hero with typewriter + stats
│   ├── About.jsx         # About section with code block
│   ├── Experience.jsx    # Timeline experience cards
│   ├── Projects.jsx      # Project cards with metrics
│   ├── Skills.jsx        # Animated skill bars + tag cloud
│   └── Contact.jsx       # Contact form + social links
├── public/               # Static assets
├── tailwind.config.js    # Tailwind with custom colors/fonts
├── next.config.js
└── package.json
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `app/globals.css` (`--cyan`, `--neon`, `--purple`)
- **Content**: Update data arrays in each component file
- **Fonts**: Change Google Fonts imports in `globals.css`
- **Social links**: Update `href` values in `Hero.jsx` and `Contact.jsx`

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Animations**: Framer Motion 11
- **Styling**: Tailwind CSS 3
- **Fonts**: Syne, JetBrains Mono, DM Sans (Google Fonts)
- **Canvas**: HTML5 Canvas (particle field)

## 📦 Deployment

Deploy to [Vercel](https://vercel.com) in one click:

```bash
npx vercel
```
