# Images Directory

This directory is for your custom images.

## 📁 Recommended Structure

```
public/images/
├── hero/              # Hero section images
├── services/          # Service-related images
├── team/              # Team photos
├── testimonials/      # Client testimonials avatars
└── general/           # Other images
```

## 📸 Current Image Usage

Currently, all images are loaded from **Unsplash CDN** for quick setup. No images are stored locally.

## 🔄 Adding Your Own Images

1. **Add your image** to this directory:
   ```
   public/images/your-image.jpg
   ```

2. **Update the component** to use your image:
   ```tsx
   // Before (CDN)
   <img src="https://images.unsplash.com/photo-xxxxx" alt="Description" />
   
   // After (Local)
   <img src="/images/your-image.jpg" alt="Description" />
   ```

## 🎨 Image Guidelines

### Recommended Sizes
- **Hero Backgrounds**: 1920x1080px (16:9 ratio)
- **Service Card Images**: 800x600px (4:3 ratio)
- **Feature Images**: 800x600px
- **Team/Testimonial Photos**: 400x400px (1:1 square)
- **Icons/Logos**: 256x256px or SVG

### Format Recommendations
- **Photos**: JPG (compressed, 70-85% quality)
- **Graphics with transparency**: PNG
- **Modern browsers**: WebP (best compression)
- **Logos/Icons**: SVG (scalable, crisp)

### Optimization Tips
1. **Compress before uploading**: Use tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (Mac)

2. **Use appropriate dimensions**: Don't upload 4K images if you only need 800px wide

3. **Use Next.js Image component** for automatic optimization:
   ```tsx
   import Image from 'next/image'
   
   <Image 
     src="/images/photo.jpg" 
     alt="Description"
     width={800}
     height={600}
     priority // for above-fold images
   />
   ```

## 🌐 Current CDN Images

All images currently come from:
- **Unsplash**: High-quality free stock photos
- **License**: Free for commercial use
- **Benefits**: 
  - Fast CDN delivery
  - No storage needed
  - Automatic optimization
  - Responsive image sizes

## 📝 Image Attribution

While using Unsplash images (no attribution required), it's good practice to credit photographers. See [IMAGE_SOURCES.md](../../IMAGE_SOURCES.md) for current image sources.

## ⚠️ Important Notes

- Don't upload copyrighted images without permission
- Compress images before uploading
- Use descriptive file names (e.g., `hero-technology-bg.jpg` not `IMG_1234.jpg`)
- Always provide `alt` text for accessibility
- Consider mobile users - smaller images for mobile viewports

## 📖 Related Documentation

- [IMAGE_SOURCES.md](../../IMAGE_SOURCES.md) - Current CDN image sources
- [README.md](../../README.md) - Main project documentation
