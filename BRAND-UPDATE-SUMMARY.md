# RootWork Framework Brand Update Summary

## What Was Updated

This brand update successfully implements the official RootWork Framework brand snapshot across the entire website.

## Changes at a Glance

### 1. New Color Palette
- **Forest Green** (#084c3a) - Primary brand color
- **Metallic Gold** (#c89a2b) - Accent color for CTAs
- **Warm Cream** (#f5f0e6) - Light background
- **Charcoal** (#222325) - Text and dark sections

### 2. Design System
- Centralized CSS custom properties for all colors
- Design tokens for border radius, shadows, and typography
- Backward-compatible with existing code

### 3. Documentation
- Updated README.md with brand information
- Created comprehensive BRAND-GUIDE.md
- Included accessibility guidelines

## Files Changed
- `styles.css` - Core design system update
- `README.md` - Brand documentation added
- `BRAND-GUIDE.md` - Complete brand guide (NEW)

## Accessibility ✅
All primary color combinations meet WCAG AA or AAA standards:
- Charcoal on Cream: 13.85:1 (AAA)
- White on Forest: 9.98:1 (AAA)
- Cream on Forest: 8.78:1 (AAA)

## How to Use

### Using Brand Colors in Code
```css
/* Use CSS custom properties */
color: var(--rw-color-forest);
background: var(--rw-color-cream);
border: 1px solid var(--rw-color-gold);
```

### Design Tokens
```css
/* Border radius */
border-radius: var(--rw-radius-lg);  /* cards */
border-radius: var(--rw-radius-md);  /* buttons */
border-radius: var(--rw-radius-sm);  /* badges */

/* Shadows */
box-shadow: var(--rw-shadow-soft);    /* elevated elements */
box-shadow: var(--rw-shadow-subtle);  /* subtle depth */

/* Typography */
font-family: var(--rw-font-sans);   /* body text */
font-family: var(--rw-font-serif);  /* quotes */
```

## Important Guidelines

### ✅ DO:
- Use Charcoal (#222325) for body text on Cream backgrounds
- Use White or Cream for text on Forest Green backgrounds
- Use Gold for accents, borders, and decorative elements
- Follow the design tokens for consistent styling

### ❌ DON'T:
- Don't use Gold text on Cream backgrounds for body copy (poor contrast)
- Don't use Stone (#9a9183) for body text on Cream (poor contrast)
- Don't override the CSS custom properties directly

## Brand Essence
"Scholarly, Afro-Indigenous, grounded in nature, calm but powerful, community-centered"

Think: "Black/Indigenous professor meets regenerative garden" – not cute ed-tech, not sterile corporate.

## Next Steps
1. Review the BRAND-GUIDE.md for complete brand guidelines
2. Use the new CSS variables in any future updates
3. Follow accessibility guidelines when adding new colors
4. Maintain the calm, scholarly, nature-grounded aesthetic

## Questions?
Refer to BRAND-GUIDE.md for comprehensive documentation on:
- Color usage patterns
- Typography guidelines
- Layout principles
- Brand voice and tone
- Implementation checklist

---

**Updated:** November 2025  
**Version:** 1.0  
**Status:** Production Ready ✅
