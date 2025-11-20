# RootWork Framework Brand Guide

## 1. Brand Snapshot

### Brand Identity

**Brand name**: RootWork Framework (RWFW)

**Ecosystem**: From Garden to Growth, Living Learning Labs, dual-purpose pedagogy (STEAM + ACEs-informed)

**Core feel**: Scholarly, Afro-Indigenous, grounded in nature, calm but powerful, community-centered, anti-gimmicky, professional

**Brand essence**: "Black/Indigenous professor meets regenerative garden" – not cute ed-tech, not sterile corporate.

---

## 2. Core Visual System

### 2.1 Color Palette (Web Hex + CSS Tokens)

These values are definitional for the web brand. All CSS implementations should use these exact hex codes and token names.

#### Primary Palette

| Role | Name | Hex | CSS Variable |
|------|------|-----|--------------|
| Primary | Forest Green | `#084c3a` | `--rw-color-forest` |
| Accent | Metallic Gold | `#c89a2b` | `--rw-color-gold` |
| Light Base | Warm Cream | `#f5f0e6` | `--rw-color-cream` |
| Dark Base | Charcoal | `#222325` | `--rw-color-charcoal` |

#### Support / Utility Colors

| Role | Name | Hex | CSS Variable |
|------|------|-----|--------------|
| Neutral Light | Mist | `#e2ddd3` | `--rw-color-mist` |
| Neutral Medium | Stone | `#9a9183` | `--rw-color-stone` |
| Success | Sap Green | `#2f7c4a` | `--rw-color-success` |
| Warning | Amber | `#e6a019` | `--rw-color-warning` |
| Error | Brick | `#b04a3a` | `--rw-color-error` |
| Info | Deep Teal | `#156f6a` | `--rw-color-info` |

#### Base CSS Implementation

```css
:root {
  --rw-color-forest:   #084c3a;
  --rw-color-gold:     #c89a2b;
  --rw-color-cream:    #f5f0e6;
  --rw-color-charcoal: #222325;

  --rw-color-mist:     #e2ddd3;
  --rw-color-stone:    #9a9183;

  --rw-color-success:  #2f7c4a;
  --rw-color-warning:  #e6a019;
  --rw-color-error:    #b04a3a;
  --rw-color-info:     #156f6a;

  --rw-radius-lg: 1.25rem;   /* cards */
  --rw-radius-md: 0.75rem;   /* buttons, inputs */
  --rw-radius-sm: 0.5rem;    /* pills, tags */

  --rw-shadow-soft: 0 10px 25px rgba(0, 0, 0, 0.09);
  --rw-shadow-subtle: 0 4px 12px rgba(0, 0, 0, 0.05);

  --rw-font-sans: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
                  "Segoe UI", sans-serif;
  --rw-font-serif: "Libre Baskerville", "Georgia", "Times New Roman", serif;
}
```

### 2.2 Accessibility Guidance

#### Color Contrast Requirements

- **Default text on cream backgrounds**: Always use `--rw-color-charcoal` (#222325)
  - Ensures WCAG AA compliance with sufficient contrast ratio
  
- **Text on forest backgrounds**: Use white (`#ffffff`) or `--rw-color-cream` (#f5f0e6)
  - Both provide sufficient contrast on dark forest green
  
- **Gold usage restrictions**: 
  - ⚠️ **Avoid gold text on cream for body copy** (insufficient contrast)
  - ✅ Use gold for: accents, labels, borders, icons, decorative elements
  - ✅ Gold text acceptable on dark backgrounds (forest, charcoal)

#### Contrast Ratio Reference

- **Charcoal on Cream**: ~13.5:1 (AAA compliant)
- **White on Forest**: ~7.2:1 (AAA compliant)
- **Gold on Cream**: ~3.8:1 (AA compliant for large text only)
- **Gold on Charcoal**: ~4.5:1 (AA compliant)

### 2.3 Typography System

#### Font Families

```css
--rw-font-sans: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
                "Segoe UI", sans-serif;
--rw-font-serif: "Libre Baskerville", "Georgia", "Times New Roman", serif;
```

#### Font Usage Guidelines

- **Headings**: Use `--rw-font-sans` (Inter) for all headings
  - Modern, clean, professional appearance
  - Excellent readability at various sizes
  
- **Body Text**: Use `--rw-font-sans` (Inter) for all body content
  - Optimized for screen reading
  - Consistent with heading hierarchy
  
- **Quotes & Emphasis**: Use `--rw-font-serif` (Libre Baskerville) for:
  - Block quotes
  - Pull quotes
  - Testimonials
  - Emphatic statements requiring gravitas

### 2.4 Design Tokens

#### Border Radius

```css
--rw-radius-lg: 1.25rem;   /* 20px - cards, modals */
--rw-radius-md: 0.75rem;   /* 12px - buttons, inputs, form controls */
--rw-radius-sm: 0.5rem;    /* 8px - pills, tags, badges */
```

**Usage**:
- Large radius: Major containers, cards, modal dialogs
- Medium radius: Interactive elements like buttons, inputs
- Small radius: Inline elements like tags and badges

#### Shadows

```css
--rw-shadow-soft: 0 10px 25px rgba(0, 0, 0, 0.09);
--rw-shadow-subtle: 0 4px 12px rgba(0, 0, 0, 0.05);
```

**Usage**:
- Soft shadow: Hover states, elevated cards, prominent elements
- Subtle shadow: Default state for cards, light elevation

---

## 3. Application Guidelines

### 3.1 Color Application Patterns

#### Primary Backgrounds
- **Main content areas**: Warm Cream (`--rw-color-cream`)
- **Headers/Hero sections**: Forest Green (`--rw-color-forest`)
- **Footer sections**: Charcoal (`--rw-color-charcoal`)

#### Interactive Elements
- **Primary CTA buttons**: Metallic Gold background with white text
- **Secondary buttons**: Forest Green background with cream text
- **Links**: Forest Green color, Gold on hover
- **Form inputs**: White/Cream background with Charcoal text, Stone border

#### Status & Feedback
- **Success messages**: Sap Green (`--rw-color-success`)
- **Warning messages**: Amber (`--rw-color-warning`)
- **Error messages**: Brick (`--rw-color-error`)
- **Info messages**: Deep Teal (`--rw-color-info`)

### 3.2 Layout Principles

- **Generous whitespace**: Reflect the "calm but powerful" brand essence
- **Natural flow**: Content should breathe, not feel cramped
- **Scholarly organization**: Clear hierarchy, structured information
- **Organic shapes**: Rounded corners over sharp edges (see border radius tokens)

### 3.3 Imagery & Iconography

- **Photography style**: Natural, garden-focused, community-centered
- **Icon style**: Clean, minimal, nature-inspired
- **Avoid**: Overly polished stock photos, corporate imagery
- **Embrace**: Authentic classroom moments, real garden work, diverse communities

---

## 4. Brand Voice & Tone

### Voice Characteristics
- **Scholarly**: Informed by research, grounded in expertise
- **Accessible**: Complex ideas communicated clearly
- **Empowering**: Focus on growth, healing, and potential
- **Grounded**: Practical, actionable, real-world applicable
- **Inclusive**: Culturally responsive, trauma-informed

### Writing Guidelines
- Use active voice
- Lead with benefits and outcomes
- Balance professional terminology with accessibility
- Honor cultural knowledge systems (Afro-Indigenous perspectives)
- Avoid edu-jargon and marketing speak

---

## 5. Implementation Checklist

When implementing RootWork Framework branding:

- [ ] Use exact hex values from this guide
- [ ] Implement CSS custom properties (CSS variables)
- [ ] Verify color contrast ratios meet WCAG AA standards
- [ ] Apply appropriate font families (Inter for body, Libre Baskerville for quotes)
- [ ] Use border radius tokens consistently
- [ ] Apply shadow tokens for elevation
- [ ] Test on multiple devices and screen sizes
- [ ] Validate accessibility with automated tools
- [ ] Review against brand essence: "scholarly, Afro-Indigenous, grounded in nature"

---

## 6. Version History

**Version 1.0** - November 2025
- Initial brand guide establishing core visual system
- Color palette, typography, and design tokens defined
- Accessibility guidelines established

---

© 2025 Dr. Shawn Hearn / Community Exceptional Children's Services  
All rights reserved.
