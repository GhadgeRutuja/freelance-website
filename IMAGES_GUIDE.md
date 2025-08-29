# 🖼️ How to Add Images to Your Freelancing Website

## Method 1: Add Your Own Images

1. **Add images to the assets folder:**
   - Place your images in: `src/assets/`
   - Supported formats: `.jpg`, `.png`, `.svg`, `.webp`

2. **Use them in components:**
   ```tsx
   import myImage from "@/assets/my-image.jpg";
   
   <img src={myImage} alt="Description" className="w-full h-auto" />
   ```

## Method 2: Use High-Quality Free Images (Current Setup)

The website currently uses Unsplash for high-quality demo images:
- Restaurant: `https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop`
- Fitness: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop`
- E-commerce: `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop`

## Method 3: Add Images to Public Folder

1. Add images to: `public/images/`
2. Use them directly: `src="/images/my-image.jpg"`

## Recommended Image Sizes:

- **Hero Background**: 1920x1080px or larger
- **Portfolio Cards**: 600x400px
- **Service Icons**: 64x64px or 128x128px
- **Team Photos**: 300x300px (square)
- **Logo**: SVG format preferred

## Quick Commands to Add Images:

```bash
# Create images directory in public folder
mkdir public\images

# Create team photos directory
mkdir public\images\team

# Create portfolio directory
mkdir public\images\portfolio
```
