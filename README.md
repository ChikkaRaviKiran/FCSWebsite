# FCS Website

A modern, highly interactive Next.js website featuring **advanced animations**, **custom cursor effects**, and **particle systems**. Inspired by professional agency sites with a focus on creating an engaging user experience.

## 🚀 Features

### 🎯 Interactive Effects
- **Interactive Particle Background**: Canvas-based particle network that connects particles to each other
- **Click Ripple Effects**: Expanding ripple animations on every click
- **Scroll Progress Bar**: Visual indicator showing page scroll position with back-to-top button
- **Page Loading Animation**: Beautiful animated loader with rotating spinners and floating particles

### 🎭 Animations
- **Framer Motion**: Professional animations throughout all pages with scroll-triggered effects
- **Staggered Entrance**: Service cards and elements animate in sequence for visual appeal
- **Hover Interactions**: Scale, rotate, and lift effects on cards and interactive elements
- **Fade & Slide**: Smooth entrance animations triggered as you scroll
- **Background Gradients**: Animated gradient backgrounds on all pages
- **Floating Elements**: Pulsing and floating decorative elements in hero sections
- **Icon Rotations**: 360° rotation on hover for service card icons

### 📄 Pages
1. **Home**: Full animated landing page with hero, services, stats, testimonials
2. **IT Services**: Comprehensive technology solutions
3. **Digital Marketing**: SEO, social media, and online marketing services
4. **Brand Growth**: Brand strategy and development services
5. **Media Buying**: Advertising and media planning services
6. **Contact**: Contact form and information

### 💻 Technical Features
- ⚡ Next.js 14 with App Router
- ⚛️ React 18 & TypeScript
- 🎨 Tailwind CSS for styling
- 🎭 Framer Motion for smooth animations
- 🎪 Canvas API for particle systems
- 📱 Fully responsive design
- 🎯 Custom CSS animations and keyframes
- ♿ Accessibility considerations
- 🚀 Optimized performance (60fps animations)
- 🎨 Custom scrollbar styling

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will auto-reload when you make changes.

## 🎨 Images & Videos

All images and videos are loaded from **CDN sources** (Unsplash & Pixabay):
- ✅ No download required - loads directly from CDN
- ✅ High-quality professional stock media  
- ✅ Free to use for commercial projects
- ✅ Optimized delivery and caching

### Current Media Usage

- **Home Hero**: Background video from Pixabay
- **Service Cards**: High-quality images from Unsplash
- **About Section**: Team collaboration image
- **Testimonials**: Professional headshots
- **All Service Pages**: Hero backgrounds and feature images

📄 **See [IMAGE_SOURCES.md](IMAGE_SOURCES.md) for complete image/video attribution and sources.**

### Using Your Own Media

To replace with your own images/videos:
1. Add files to `public/images/` or `public/videos/`
2. Update the `src` attributes in components
3. Example: Change `https://images.unsplash.com/...` to `/images/your-photo.jpg`

**Recommended sizes:**
- Hero backgrounds: 1920x1080px
- Service cards: 800x600px  
- Avatars: 400x400px (square)
- Feature images: 800x600px

## Project Structure

```
FCS/
├── app/                        # Next.js app directory
│   ├── layout.tsx             # Root layout with all global components
│   ├── page.tsx               # Home page
│   ├── globals.css            # Global styles & animations
│   ├── it-services/           # IT Services page
│   ├── digital-marketing/     # Digital Marketing page
│   ├── brand-growth/          # Brand Growth page
│   ├── media-buying/          # Media Buying page
│   └── contact/               # Contact page
├── components/                # React components
│   ├── Navbar.tsx            # Navigation bar with glassmorphism
│   ├── Footer.tsx            # Footer section
│   ├── Hero.tsx              # Hero with typewriter, particles, gradients
│   ├── Services.tsx          # Services grid with animations
│   ├── About.tsx             # About section
│   ├── Stats.tsx             # Statistics section
│   ├── Testimonials.tsx      # Testimonials carousel
│   ├── CTA.tsx               # Call-to-action section
│   ├── ContactForm.tsx       # Contact form
│   ├── CustomCursor.tsx      # Custom cursor system
│   ├── MouseFollower.tsx     # Gradient mouse follower
│   ├── InteractiveBackground.tsx  # Particle network canvas
│   ├── RippleEffect.tsx      # Click ripple animations
│   ├── ScrollProgress.tsx    # Scroll progress bar
│   ├── PageLoader.tsx        # Page loading animation
│   ├── Typewriter.tsx        # Auto-typing text effect
│   ├── MagneticButton.tsx    # Magnetic button component
│   └── WaveAnimation.tsx     # SVG wave animations
├── public/                    # Static files
│   ├── images/               # Place your custom images here
│   └── videos/               # Place your custom videos here
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.ts        # Tailwind CSS config
└── next.config.js            # Next.js config
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#eff6ff',
    // ... your custom colors
  }
}
```

### Animations

Customize animations in `app/globals.css`:
- **Keyframe animations**: shimmer, wave, glow, float, gradient, fadeInUp, slideInLeft
- **Gradient text effects**: `.gradient-text` class
- **Custom scrollbar**: Webkit scrollbar styling with gradients

### Interactive Components

#### Particle Background
Edit `components/InteractiveBackground.tsx`:
- Particle count (default: 50)
- Connection distances
- Movement speed
- Colors and opacity

#### Page Animations
All pages now include:
- Hero section fade-in animations
- Staggered service card entrances
- Scroll-triggered animations
- Hover effects on all interactive elements
- Floating background decorations

### Content

- **Homepage**: Edit `app/page.tsx` and component files in `components/`
- **Hero Section**: Modify `components/Hero.tsx` for typewriter words, particles, gradients
- **Service Pages**: Edit files in `app/[service-name]/page.tsx`
- **Contact Page**: Edit `app/contact/page.tsx` and `components/ContactForm.tsx`
- **Navigation**: Update links in `components/Navbar.tsx`
- **Footer**: Modify `components/Footer.tsx`

### Metadata & SEO

Update metadata in each page's `metadata` export:

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 10** - Animation library for smooth interactions
- **React Icons 5** - Icon library
- **Canvas API** - For particle systems and interactive backgrounds
- **AOS** - Animate On Scroll library

## 📱 Browser Support

- ✅ Chrome (latest) - **Recommended for best experience**
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- 📱 Mobile browsers - Fully responsive with touch-friendly interactions

## ⚡ Performance

- Canvas animations use `requestAnimationFrame` for 60fps
- Spring physics optimized for smooth motion
- GPU-accelerated CSS transforms
- Lazy loading for components
- Optimized particle count for performance
- Efficient event listeners with debouncing

## 📄 License

This project is licensed for client use.

## 🤝 Support

For questions, issues, or feature requests, please contact the development team.

---

Built with ❤️ using Next.js, React, TypeScript, Tailwind CSS, and Framer Motion
