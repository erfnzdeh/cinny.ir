# cinny.ir

A resilience-focused Persian mirror of the [Cinny](https://cinny.in) landing page, forked from [cinnyapp/cinny-site](https://github.com/cinnyapp/cinny-site).

Deployed in Iran so that Iranian users can discover and access Cinny even when international internet connectivity is severed. The companion app instance at `app.cinny.ir` runs the official Cinny Docker image on the same infrastructure.

## Why this exists

Iran's government routinely imposes full internet blackouts to suppress protests and control information flow. The [2026 Internet blackout](https://en.wikipedia.org/wiki/2026_Internet_blackout_in_Iran), beginning January 8, cut the country to as low as 1% of normal connectivity for weeks, costing the economy $35.7 million per day and leaving tens of millions without access to communication tools.

During these shutdowns, websites hosted outside Iran become completely unreachable, and people are forced to rely on state-owned messaging platforms that are controlled by the Islamic Republic and have no regard for user privacy. This has pushed more Iranians to seek out decentralized, self-hosted alternatives. Matrix in particular is gaining traction in Iran as people learn that no single government can shut it down or read their messages.

This project exists to make that discovery easier for non-technical users. A Persian-language landing page hosted inside Iran means someone can learn what Matrix is, understand the Cinny client, and start using it -- all without needing a VPN or any access to the international internet. By hosting both the landing page and a Cinny app instance on Iranian servers, this project ensures that users inside Iran can still find and use a Matrix client when they need it most.

## What changed from the original

### Language and direction
- All UI text translated to Persian.
- HTML `lang` set to `fa`, `dir` set to `rtl`.
- CSS `direction: rtl` and `text-align: right` on `body`.
- Every directional CSS property (margins, paddings, borders, grid columns, absolute positions, transform origins and translate values) mirrored for RTL layout.

### Typography
- Replaced Supreme and Roboto with self-hosted [Vazirmatn](https://github.com/rastikerdar/vazirmatn) (woff2, weights 400/500/600/700) in `assets/fonts/`. Fonts are self-hosted rather than loaded from Google CDN because Google services are unreachable during blackouts.
- Font weights bumped up one step (400->500, 500->600, etc.) for better readability with Persian connected script.
- Negative letter-spacing values reset to zero (negative spacing breaks Persian ligatures).
- Line heights slightly increased for Persian text proportions.

### Links
- All app links (`https://app.cinny.in`) changed to `https://app.cinny.ir`.
- External links (GitHub, Matrix, Open Collective, etc.) left unchanged.

### Simplified support section
- Removed the Organizations and Individuals supporter lists and the JavaScript that loaded them from the Open Collective API. The three donation links (Open Collective, GitHub Sponsors, Liberapay) remain.

### Footer
- Removed Netlify deployment badge.
- Added English-language disclaimer explaining the project's purpose.
- Added credit line for the Persian version alongside the original author credit.

### About section
- Added a second "Source code" button linking to this repository, alongside the original Cinny source code button.

### Meta and head
- Page title set to `Cinny | فارسی`.
- Open Graph URL updated to `https://cinny.ir`.
- Meta description translated to Persian.
- Favicon switched from PNG references to the existing SVG.

## Files

| File | What changed |
|---|---|
| `index.html` | Language/dir attributes, all text to Persian, link updates, support section trim, footer rewrite, meta tags, favicon |
| `css/base.css` | Vazirmatn `@font-face`, removed external font imports, RTL direction, font-family, letter-spacing resets, font-weight bumps |
| `css/index.css` | All directional CSS mirrored, support list styles removed, footer disclaimer styles added |
| `css/components.css` | Branding border/padding direction swapped |
| `main.js` | Supporter loading code removed, theme status text updated to Persian |
| `assets/fonts/` | Self-hosted Vazirmatn woff2 files (Regular, Medium, SemiBold, Bold) |

## Deployment

Static files served by nginx. No build step required. See the [original repository](https://github.com/cinnyapp/cinny-site) for upstream changes.

## Credits

- Original project by [Ajay Bura (ajbura)](https://github.com/ajbura) - [cinnyapp/cinny-site](https://github.com/cinnyapp/cinny-site)
- Persian version by [Pourya Erfanzadeh](https://github.com/erfnzdeh)
- Font: [Vazirmatn](https://github.com/rastikerdar/vazirmatn) by Saber Rastikerdar (OFL-1.1)
