# Personal Portfolio

A full-stack developer's personal portfolio website built with Next.js 14 App Router. Features a fixed left sidebar with scrolling right panel layout, supporting dual-language (English/Chinese) and light/dark theme switching. Perfect for showcasing professional experience and projects.

## Key Features

- Built with Next.js 14 + TypeScript + Tailwind CSS
- Dual-language support with route switching: `en` / `zh`
- Light/dark theme toggle (dark theme by default)
- Single-page scrollable architecture optimized for showcasing experience and projects
- Centralized content management via `messages/*.json`
- SEO optimization with Next.js Metadata API
- Ready for direct deployment to Vercel

## Page Sections

The website includes the following content sections:

- About
- Skills
- Experience
- Projects
- Education
- Contact

Desktop layout: fixed left sidebar + scrolling right panel. Mobile layout: top navigation + single-column scroll.

## Tech Stack

| Category             | Solution                |
| -------------------- | ----------------------- |
| Framework            | Next.js 14 (App Router) |
| Language             | TypeScript              |
| Styling              | Tailwind CSS            |
| Internationalization | next-intl               |
| Theme Management     | next-themes             |
| Icons                | lucide-react            |
| SEO                  | Next.js Metadata API    |
| Deployment           | Vercel                  |

## Local Development

### Requirements

- Node.js >= 18.17
- npm

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The development server runs on port `3200`:

```text
http://localhost:3200
```

### Available Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Project Structure

```text
portfolio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── i18n/
├── lib/
├── messages/
├── public/
├── middleware.ts
├── tailwind.config.ts
└── package.json
```

### Directory Descriptions

- `app/[locale]/`: Internationalized page entry point (maps to `/en` and `/zh`)
- `components/layout/`: Layout and structural components
- `components/sections/`: Content section components
- `components/ui/`: Reusable UI components
- `messages/`: English and Chinese content and copy (data source)
- `i18n/`: i18n routing and request configuration
- `lib/`: TypeScript type definitions and utility functions
- `public/images/`: Project images and static assets

## Content Management

This project has no CMS or database dependency. All content is maintained directly in JSON files.

### Content Files

- English content: `messages/en.json`
- Chinese content: `messages/zh.json`

These files serve multiple purposes:

- UI text translations
- Personal profile information
- Skills categorization and tags
- Work experience timeline
- Project listings
- Education background
- Contact information
- SEO metadata copy

After modifying content, simply rebuild or redeploy for changes to take effect.

## Internationalization

- Supported languages: `en`, `zh`
- Default language: `en`
- Route format: `/en`, `/zh`
- Server Components: use `getTranslations()`
- Client Components: use `useTranslations()`
- For objects/arrays: use `t.raw("key")`

## Theme System

- Theme management via `next-themes`
- `darkMode: "class"` configuration
- Dark theme enabled by default (system preference not followed)
- Accent color: violet palette

## SEO

The project includes the following SEO features:

- Dynamic metadata generation
- Open Graph support
- `sitemap.ts` auto-generation
- `robots.txt` configuration
- Multi-language alternates

To enhance social sharing cards, add OG image assets to the `public/` directory.
