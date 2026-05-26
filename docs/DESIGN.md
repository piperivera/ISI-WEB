---
name: ISI Intelligent Engineering Design System
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#859399'
  outline-variant: '#3c494e'
  surface-tint: '#4cd6ff'
  primary: '#a4e6ff'
  on-primary: '#003543'
  primary-container: '#00d1ff'
  on-primary-container: '#00566a'
  inverse-primary: '#00677f'
  secondary: '#b6c4ff'
  on-secondary: '#00277f'
  secondary-container: '#0056fd'
  on-secondary-container: '#e4e7ff'
  tertiary: '#d5dbfb'
  on-tertiary: '#292f48'
  tertiary-container: '#b9bfde'
  on-tertiary-container: '#474d67'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b7eaff'
  primary-fixed-dim: '#4cd6ff'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e60'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#001550'
  on-secondary-fixed-variant: '#003ab2'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#bfc5e4'
  on-tertiary-fixed: '#141a32'
  on-tertiary-fixed-variant: '#3f465f'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  max-width: 1280px
---

## Brand & Style
The design system is engineered to project **innovation, precision, and architectural intelligence**. It targets enterprise stakeholders and technical decision-makers who value reliability alongside cutting-edge technological advancement.

The visual style is **Corporate Modern with a High-Tech edge**. It draws heavily from the geometric precision of the logo, utilizing a dark-mode first approach that allows vibrant cyan gradients and glowing accents to signify "connectivity" and "flow." The interface should feel like a sophisticated control center—sleek, responsive, and data-driven—using subtle glassmorphism and thin structural lines to define spaces without clutter.

## Colors
The palette is built on a "Deep Space" foundation to create maximum contrast for digital light.

- **Primary (Cyan):** Used for interactive elements, key iconography, and the "start" point of gradients. It represents energy and connectivity.
- **Secondary (Deep Blue):** Used for depth, secondary actions, and the "end" point of gradients.
- **Tertiary/Background:** A very dark navy (#0A1128) serves as the canvas, providing a more professional and sophisticated base than pure black.
- **Surface Tints:** Use lower-opacity versions of the primary cyan (2% - 8%) over dark surfaces to create "glow" effects and container differentiation.

## Typography
The typography strategy prioritizes legibility and technical clarity. **Hanken Grotesk** is used for headlines to provide a sharp, contemporary "engineered" feel. **Inter** is used for all functional text and body copy due to its exceptional readability on screens and neutral character. 

For display text, utilize a "Gradient Text" effect moving from Primary Cyan to Secondary Blue to mirror the brand logo's visual language.

## Layout & Spacing
This design system utilizes a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. 

- **The Rhythm:** An 8px linear scale governs all spacing.
- **Sectioning:** Large vertical padding (80px - 120px) should be used between major landing page sections to reinforce a premium, uncluttered aesthetic.
- **Structural Lines:** Use 1px borders with 10% opacity white/cyan to create subtle grid-like partitions, echoing the geometric nature of the company’s logo.

## Elevation & Depth
Depth is created through **Tonal Layering** rather than traditional heavy shadows. 

1. **Base:** The primary background (#0A1128).
2. **Floor:** Slightly lighter navy surfaces for section differentiation.
3. **Floating:** Glassmorphic cards using a `backdrop-filter: blur(12px)` and a thin 1px border.
4. **Glow:** For high-priority elements, use a "Cyan Bloom"—an extremely diffused, low-opacity (#00D1FF at 15%) outer glow to simulate a light-emitting technical interface.

## Shapes
The shape language is **Soft-Geometric**. While the logo is built on 60-degree angles and hexagons, the UI components utilize a small 4px (Soft) radius to maintain a professional, modern feel that isn't overly aggressive.

- **Hexagonal Accents:** Use the hexagon as a recurring motif for icon containers or background masks.
- **Connectors:** Use 1px paths with circular terminals (mimicking circuit board traces) to visually connect related pieces of information or cards.

## Components

### Buttons
- **Primary:** Solid gradient (Primary to Secondary) with white text. High-contrast and vibrant.
- **Secondary:** Transparent background with a 1px Primary color border. 
- **Interaction:** On hover, buttons should exhibit a subtle "Cyan Bloom" glow.

### Cards
- **Style:** Semi-transparent dark navy background with a subtle 1px border. 
- **Header:** Always accompanied by a geometric icon in Primary Cyan.

### Input Fields
- **Style:** Darker than the background surface, 1px border that turns Primary Cyan on focus. 
- **Typography:** Use `label-sm` for field titles to maintain a technical, "form-filler" aesthetic.

### Data Visualization
- **Line Charts:** Use the primary gradient for the data lines with a soft glow effect.
- **Connectivity Nodes:** Use small circular dots connected by thin 1px lines to represent "Intelligent Solutions" and network flow.

### Chips & Tags
- **Style:** Small, pill-shaped with 10% Primary color fill and 100% Primary color text. Used for categories like "Software," "Hardware," or "Consultancy."
