# Carvohub

Independent vehicle inspection reports for used car buyers in India.

## Overview

Carvohub provides comprehensive, transparent vehicle inspection reports that help buyers make informed decisions when purchasing used cars. Our standardized inspection process includes photo and video documentation, mechanical assessments, and clear risk disclosure.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Fonts**: Inter (body), Tilt Warp (logo)
- **Deployment**: Static export for GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Project Structure

```
├── components/
│   └── ui/           # Reusable UI components
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── HowItWorks.jsx
│       └── FooterCTA.jsx
├── pages/
│   ├── index.js              # Homepage
│   ├── blog/                 # Blog section
│   └── vehicle-reports/      # Individual inspection reports
├── public/
│   └── images/               # Static assets
└── styles/
    └── globals.css           # Global styles
```

## Features

- Responsive design with dark mode support
- Scroll-triggered animations using IntersectionObserver
- SEO optimized with meta tags and structured data
- Mobile-first approach with Tailwind CSS
- Static site generation for fast loading

## License

Proprietary - All rights reserved.
