# SVG Banner Art Style Guide

## 1. Style Overview
This visual language is intended for background SVG banners on the portfolio site:

- Dark, premium, minimal tech aesthetic
- Abstract and schematic (never literal iconography)
- Designed to sit behind content with low distraction and high readability
- Calm and restrained: decorative support, not focal illustration

## 2. Visual Rules
- **Stroke weight must be thick**: target **3px to 6px** depending on banner scale
- Use rounded line endings and joins (`stroke-linecap="round"`, `stroke-linejoin="round"`)
- Keep geometry sparse and intentionally spaced
- Do not place text labels inside SVG artwork
- Avoid realism, skeuomorphic detail, and high-frequency texture

## 3. Color System
- Base tones: deep navy and indigo
- Accent tones: soft blue and muted violet
- Optional accent: soft green, used very sparingly
- Prefer subtle gradients over flat high-contrast color blocks
- Keep contrast controlled so foreground text remains comfortably readable

### Recommended palette
- `#0b1220`, `#101a2f`, `#121b33` (base fills)
- `#7aa7ff`, `#85b7ff` (blue accents)
- `#8a7adf`, `#9a8ff2` (violet accents)
- `#7fd8b7` (optional green accent)

## 4. Composition Guidelines
- Use wide horizontal banner proportions (about `1600x400` to `1600x500`)
- Favor center-weighted layouts or gentle left-to-right flow
- Choose symmetry or balanced asymmetry; avoid chaotic distribution
- Build with nodes, connectors, arcs, and modular geometry
- Keep corners rounded unless a sharp corner is intentionally meaningful

## 5. Animation Principles
- Motion must remain subtle, slow, and ambient
- Use looping timelines in the **2s to 6s** range
- Prevent distracting movement amplitude or abrupt easing
- Preferred motifs:
  - Flowing dashed connectors
  - Soft pulsing nodes
  - Low-intensity glow breathing
  - Slow arc rotation

## 6. Technical Rules
- Use SVG format only
- Keep backgrounds transparent
- Group SVG structure semantically (`<g>` per system area)
- Prefer CSS-driven animation classes over heavy inline animation blocks
- Use reusable class hooks:
  - `.flow` for connector movement
  - `.pulse` for node pulsing
  - `.glow` for breathing glow/halo

## Reuse Checklist
When creating new banners, verify:

1. Strokes are within 3px–6px and rounded
2. Composition remains sparse and readable behind content
3. Palette stays within dark base + soft accents
4. Motion is ambient and non-distracting
5. SVG includes reusable animation class hooks (`flow`, `pulse`, `glow`)
