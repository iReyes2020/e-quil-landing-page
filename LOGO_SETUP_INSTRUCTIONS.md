# Logo Setup Instructions

Your landing page is now configured to use PNG logo files. To complete the setup, you need to add your logo PNG files to the public folder:

## Files Needed

1. **Logo Icon (for navigation bar)** - `public/logo-icon.png`
   - This is the logo WITHOUT text
   - Recommended size: 200x200px or larger
   - Will be displayed at 40x40px in the header
   - Should have transparent background

2. **Logo with Text (for hero section)** - `public/logo-with-text.png`
   - This is the logo WITH "E-QUIL" and "BEAT BURNOUT." text
   - Recommended size: 600x600px or larger
   - Will be displayed at ~300x300px in hero section
   - Should have transparent background

## How to Add the Files

### Option 1: Using File Explorer (Easiest)
1. Open File Explorer
2. Navigate to: `C:\Windsurf Projects\ISM4421 E-quil\fenago21\public\`
3. Copy your PNG files into this folder:
   - Rename the logo without text to: `logo-icon.png`
   - Rename the logo with text to: `logo-with-text.png`

### Option 2: Using Command Line
```bash
# Copy your logo files to the public folder
copy "path\to\your\logo-icon.png" "C:\Windsurf Projects\ISM4421 E-quil\fenago21\public\logo-icon.png"
copy "path\to\your\logo-with-text.png" "C:\Windsurf Projects\ISM4421 E-quil\fenago21\public\logo-with-text.png"
```

## After Adding Files

1. Run: `npm run build`
2. Run: `netlify deploy --prod --dir=.next`
3. Visit: https://e-quil.netlify.app/ to see your logos in action

## File Structure

```
public/
├── logo-icon.png          (40x40 in header, no text)
├── logo-with-text.png     (300x300 in hero, with text)
├── icon.png               (existing favicon)
└── ... (other files)
```

## Notes

- Both files should have transparent backgrounds (PNG format)
- The logo-icon.png will be used in the navigation bar and mobile menu
- The logo-with-text.png will be prominently featured in the hero section
- Images will be automatically optimized by Next.js

Once you've added the files, the landing page will display your professional logos!
