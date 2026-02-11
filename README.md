# Maldives School Archive (MV Assets)

A premium digital archive preserving the visual identities of Maldivian educational institutions. 

## Features
- **Central Repository**: High-resolution vector logos (SVG) for schools across all atolls.
- **Brand Kits**: Verified color palettes and official school body logos (Clubs, Councils, Boards).
- **Responsive Design**: Modern, clean UI built with Next.js, Tailwind CSS, and Framer Motion.
- **Refined Aesthetic**: Styled with a professional orange brand identity and semi-bold typography.

## Tech Stack
- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Optimized for Cloudflare Pages (Static Export)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/nooryoosuf/maldives-school-archive.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment on Cloudflare Pages

This project is configured for **Static Export**. When deploying on Cloudflare Pages:

1. Connect your GitHub repository.
2. Build Settings:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `out`
3. Click Deploy!

## Contribution
Missing a logo or want to update an identity? Use the **Request Logo** feature on the platform or submit a PR with the relevant SVG assets in the `public/logos` directory.
