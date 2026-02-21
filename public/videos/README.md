# Videos Directory

This directory is for your custom videos.

## 📁 Recommended Structure

```
public/videos/
├── backgrounds/       # Background videos
├── demos/            # Product/service demos
└── testimonials/     # Video testimonials
```

## 🎥 Current Video Usage

Currently, the hero background video is loaded from **Pixabay CDN**:
- No local storage required
- Fast CDN delivery
- Free for commercial use

## 🔄 Adding Your Own Videos

1. **Add your video** to this directory:
   ```
   public/videos/hero-background.mp4
   ```

2. **Update the component** to use your video:
   ```tsx
   // Before (CDN)
   <video src="https://cdn.pixabay.com/video/..." />
   
   // After (Local)
   <video src="/videos/hero-background.mp4" />
   ```

## 🎬 Video Guidelines

### Recommended Formats
- **MP4** (H.264 codec) - Best browser support
- **WebM** - Modern browsers, excellent compression
- **Provide both** for maximum compatibility:
  ```tsx
  <video>
    <source src="/videos/bg.webm" type="video/webm" />
    <source src="/videos/bg.mp4" type="video/mp4" />
  </video>
  ```

### Recommended Specifications

#### Background Videos
- **Resolution**: 1920x1080px (Full HD)
- **Duration**: 10-30 seconds (looped)
- **Frame Rate**: 24-30 fps
- **Bitrate**: 2-5 Mbps
- **File Size**: Keep under 5MB
- **Format**: MP4 (H.264)

#### Feature Videos
- **Resolution**: 1280x720px (HD)
- **Duration**: As needed
- **Frame Rate**: 30 fps
- **Bitrate**: 1.5-3 Mbps
- **Format**: MP4

### Optimization Tips

1. **Compress your videos**:
   - HandBrake (free): https://handbrake.fr
   - FFmpeg: https://ffmpeg.org
   - Online tools: CloudConvert, etc.

2. **Example FFmpeg command**:
   ```bash
   ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 -b:v 2M output.mp4
   ```

3. **Remove audio** for background videos:
   ```bash
   ffmpeg -i input.mp4 -vcodec h264 -an output.mp4
   ```

4. **Convert to WebM**:
   ```bash
   ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 2M output.webm
   ```

## 🎯 Best Practices

### For Background Videos
- Keep file size small (under 5MB)
- Remove audio track
- Use muted, autoplay, and loop attributes
- Provide a fallback image
- Consider not auto-playing on mobile

### Example Implementation
```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  poster="/images/video-poster.jpg"
  className="w-full h-full object-cover"
>
  <source src="/videos/background.webm" type="video/webm" />
  <source src="/videos/background.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## 🌐 Current CDN Videos

Current hero video from:
- **Pixabay**: Free stock videos
- **License**: Free for commercial use
- **Benefits**:
  - Fast CDN delivery
  - No bandwidth costs
  - No storage needed

## ⚠️ Important Notes

- Videos significantly impact page load time
- Always compress before uploading
- Consider lazy loading for videos not above the fold
- Provide poster images as fallback
- Test on mobile devices (cellular connections)
- Don't auto-play videos with sound
- Respect user's data and battery

## 📱 Mobile Considerations

- Consider serving smaller videos to mobile users
- Many mobile browsers pause autoplay videos
- Use the `playsInline` attribute
- Provide a poster image

## 📖 Related Documentation

- [IMAGE_SOURCES.md](../../IMAGE_SOURCES.md) - Current CDN sources
- [README.md](../../README.md) - Main project documentation
