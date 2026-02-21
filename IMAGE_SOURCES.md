# Image and Video Sources

This document lists all the images and videos used in the website, sourced from Unsplash and Pixabay (free stock media platforms).

## 🎥 Videos

### Home Page - Hero Section
- **Source**: Pixabay
- **URL**: https://cdn.pixabay.com/video/2022/11/07/138591-770051034_large.mp4
- **Description**: Technology/Digital background video
- **Usage**: Background video in main hero section with 20% opacity

## 📸 Images

### Home Page

#### Hero Background (via Services Component)
All service cards feature high-quality images:

1. **IT Services Card**
   - **Source**: Unsplash
   - **URL**: https://images.unsplash.com/photo-1517694712202-14dd9538aa97
   - **Description**: Coding/Development workspace
   - **Photographer**: Christopher Gower

2. **Digital Marketing Card**
   - **Source**: Unsplash
   - **URL**: https://images.unsplash.com/photo-1460925895917-afdab827c52f
   - **Description**: Marketing analytics and charts
   - **Photographer**: Carlos Muza

3. **Brand Growth Card**
   - **Source**: Unsplash
   - **URL**: https://images.unsplash.com/photo-1557804506-669a67965ba0
   - **Description**: Team collaboration and success
   - **Photographer**: You X Ventures

4. **Media Buying Card**
   - **Source**: Unsplash
   - **URL**: https://images.unsplash.com/photo-1533750349088-cd871a92f312
   - **Description**: Social media and advertising
   - **Photographer**: Merakist

#### About Section
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1522071820081-009f0129c71c
- **Description**: Team collaboration and teamwork
- **Photographer**: Marvin Meyer

#### Testimonials
1. **John Smith (CEO)**
   - **Source**: Unsplash
   - **URL**: https://images.unsplash.com/photo-1472099645785-5658abf4ff4e
   - **Description**: Professional headshot
   - **Photographer**: Ayo Ogunseinde

2. **Sarah Johnson (Marketing Director)**
   - **Source**: Unsplash
   - **URL**: https://images.unsplash.com/photo-1438761681033-6461ffad8d80
   - **Description**: Professional portrait
   - **Photographer**: Christopher Campbell

3. **Michael Brown (CTO)**
   - **Source**: Unsplash
   - **URL**: https://images.unsplash.com/photo-1500648767791-00dcc994a43e
   - **Description**: Professional headshot
   - **Photographer**: Ayo Ogunseinde

---

### IT Services Page

#### Hero Background
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1451187580459-43490279c0fa
- **Description**: Digital technology and network visualization
- **Photographer**: NASA
- **Opacity**: 5%

#### Benefits Section
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1498050108023-c5249f4df085
- **Description**: Coding workspace
- **Photographer**: Ilya Pavlov

---

### Digital Marketing Page

#### Hero Background
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1460925895917-afdab827c52f
- **Description**: Marketing analytics dashboard
- **Photographer**: Carlos Muza
- **Opacity**: 5%

#### Benefits Section
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1557838923-2985c318be48
- **Description**: Digital marketing strategy session
- **Photographer**: Campaign Creators

---

### Brand Growth Page

#### Hero Background
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1557804506-669a67965ba0
- **Description**: Team collaboration and success
- **Photographer**: You X Ventures
- **Opacity**: 5%

#### Benefits Section
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1552664730-d307ca884978
- **Description**: Team strategy meeting
- **Photographer**: You X Ventures

---

### Media Buying Page

#### Hero Background
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1533750349088-cd871a92f312
- **Description**: Social media marketing
- **Photographer**: Merakist
- **Opacity**: 5%

#### Benefits Section
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0
- **Description**: Digital advertising campaigns
- **Photographer**: Firmbee.com

---

### Contact Page

#### Hero Background
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1423666639041-f56000c27a9a
- **Description**: Contact/Communication concept
- **Photographer**: Quino Al
- **Opacity**: 5%

---

## 📝 Usage Rights

All images are from **Unsplash** and **Pixabay**, which provide:
- ✅ Free to use for commercial and non-commercial purposes
- ✅ No attribution required (but appreciated)
- ✅ Can be modified and adapted
- ✅ High-quality, professionally shot images

### Unsplash License
https://unsplash.com/license

### Pixabay License
https://pixabay.com/service/license/

---

## 🔄 Replacing Images

To replace any image with your own:

1. **Add your image** to the `public/images/` directory
2. **Update the src** in the relevant component file
3. Example:
   ```tsx
   // Before (CDN)
   src="https://images.unsplash.com/photo-xxxxx"
   
   // After (Local)
   src="/images/your-image.jpg"
   ```

### Recommended Image Sizes

- **Hero Backgrounds**: 1920x1080px (Full HD)
- **Service Cards**: 800x600px
- **Feature Images**: 800x600px
- **Testimonial Avatars**: 400x400px (Square)
- **About Image**: 1200x900px

### Optimization Tips

1. Compress images before uploading (use TinyPNG or similar)
2. Use WebP format when possible for better performance
3. Provide appropriate alt text for accessibility
4. Use Next.js Image component for automatic optimization:
   ```tsx
   import Image from 'next/image'
   <Image src="/images/photo.jpg" alt="Description" width={800} height={600} />
   ```

---

## 🎨 Color Coordination

Images were selected to match the site's color scheme:
- **Blue tones** for IT Services
- **Green tones** for Digital Marketing
- **Purple tones** for Brand Growth
- **Orange tones** for Media Buying
- **Neutral/Professional** for About and Testimonials

---

Last Updated: February 20, 2026
