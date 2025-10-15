# Adding Images to Experience Snapshots

## How to Add Your Images

1. **Place your images** in the `experiences_assets` folder:
   ```
   src/pages/about/experiences_assets/
   ├── cert1.jpg
   ├── cert2.jpg
   ├── event1.jpg
   ├── event2.jpg
   ├── pres1.jpg
   └── pres2.jpg
   ```

2. **Import them** in `experiences_snapshots.jsx`:
   ```javascript
   import cert1 from './experiences_assets/cert1.jpg';
   import cert2 from './experiences_assets/cert2.jpg';
   import event1 from './experiences_assets/event1.jpg';
   // ... and so on
   ```

3. **Update the imageData object**:
   ```javascript
   const imageData = {
       Certifications: [
           { id: 1, src: cert1, alt: 'CS50 Certificate' },
           { id: 2, src: cert2, alt: 'Hackathon Certificate' },
       ],
       Events: [
           { id: 1, src: event1, alt: 'GDSC Event' },
           { id: 2, src: event2, alt: 'Hackathon 2024' },
       ],
       Presentation: [
           { id: 1, src: pres1, alt: 'UI/UX Presentation' },
           { id: 2, src: pres2, alt: 'Project Demo' },
       ]
   };
   ```

## Features Implemented

✅ **Button States:**
- Default: Secondary color (green)
- Clicked/Active: Primary color (dark green)
- Hover: Slight elevation effect

✅ **Image Grid:**
- 2 images per row on desktop
- 1 image per row on mobile (responsive)
- Smooth hover effects

✅ **Interactive Filtering:**
- Click any button to show that category's images
- Only one category active at a time
- Smooth transitions

## Example Usage

The component will display "Certifications" images by default. When you click "Events" or "Presentation", it will switch to show those images instead.
