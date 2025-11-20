# RootWork Framework - Layout & Spacing System

## Overview
This document describes the layout and spacing system implemented in the RootWork Framework K-12 Curriculum website.

## Spacing Scale

All spacing in the design system follows a consistent scale based on multiples of 4 pixels:

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `--space-1` | 0.25rem | 4px | Tight icon gaps |
| `--space-2` | 0.5rem | 8px | Badges, label spacing |
| `--space-3` | 0.75rem | 12px | Inside small buttons |
| `--space-4` | 1rem | 16px | Basic padding |
| `--space-6` | 1.5rem | 24px | Card padding, section gaps |
| `--space-8` | 2rem | 32px | Vertical section spacing |
| `--space-12` | 3rem | 48px | Hero top/bottom padding |

### Usage Example
```css
.my-element {
    padding: var(--space-6);
    margin-bottom: var(--space-8);
}
```

## Container

The `.rw-container` class provides a centered content container with responsive padding:

```css
.rw-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--space-6) var(--space-4); /* Mobile */
}

@media (min-width: 768px) {
    .rw-container {
        padding: var(--space-6) var(--space-8); /* Desktop */
    }
}
```

### Specifications
- **Max Width**: 1200px
- **Mobile Padding**: 1.5rem vertical, 1rem horizontal
- **Desktop Padding**: 1.5rem vertical, 2rem horizontal
- **Breakpoint**: 768px

### Usage Example
```html
<div class="rw-container">
    <h1>Page Content</h1>
    <p>Your content here...</p>
</div>
```

## 12-Column Grid System

The grid system allows flexible layouts using a 12-column structure:

```css
.rw-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--space-4);
}
```

### Column Classes
- `.rw-col-1` through `.rw-col-12` - Span 1-12 columns on desktop
- On mobile (< 768px), all columns automatically span full width
- Grid gap: 1rem (16px)

### Usage Examples

**Three Equal Columns**
```html
<div class="rw-container">
    <div class="rw-grid">
        <div class="rw-col-4">Column 1</div>
        <div class="rw-col-4">Column 2</div>
        <div class="rw-col-4">Column 3</div>
    </div>
</div>
```

**Main Content + Sidebar**
```html
<div class="rw-container">
    <div class="rw-grid">
        <main class="rw-col-8">Main content</main>
        <aside class="rw-col-4">Sidebar</aside>
    </div>
</div>
```

**Four Equal Columns**
```html
<div class="rw-container">
    <div class="rw-grid">
        <div class="rw-col-3">Column 1</div>
        <div class="rw-col-3">Column 2</div>
        <div class="rw-col-3">Column 3</div>
        <div class="rw-col-3">Column 4</div>
    </div>
</div>
```

## Demo Page

View `layout-demo.html` for a comprehensive demonstration of:
- Container usage
- All grid layouts (2, 3, 4 columns, mixed layouts)
- Spacing scale visualizations
- Code examples

## Responsive Behavior

### Mobile (< 768px)
- Container uses 1rem horizontal padding
- All grid columns stack vertically (full width)
- Spacing tokens remain the same

### Desktop (≥ 768px)
- Container uses 2rem horizontal padding
- Grid columns use specified column spans
- Maximum container width of 1200px applies

## Design Philosophy

1. **Consistency**: All spacing uses predefined tokens
2. **Simplicity**: Easy-to-understand class names
3. **Flexibility**: Mix and match column spans as needed
4. **Responsive**: Mobile-first approach with desktop enhancements
5. **Minimal**: Small addition to existing codebase

## Future Enhancements

Potential additions to consider:
- Additional breakpoints (tablet-specific)
- Offset classes for grid positioning
- Nested grid support
- Container variants (e.g., `.rw-container-narrow`, `.rw-container-wide`)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- All modern mobile browsers

## Implementation Date

November 2025

---

For questions or suggestions, contact Dr. Shawn Hearn at hearn.sa@gmail.com
