# Bangla News 24

A responsive Bangla news website built with Next.js, TypeScript, Tailwind CSS, and a news API.

## Live Project

The project is ready to be deployed on Vercel.

## Features

- Latest Bangla news
- News category pages
- News details page
- Most-read news section
- Scrolling latest-news marquee
- Responsive design for mobile, tablet, and desktop
- Skeleton loading state
- Styled 404 page
- Error handling
- Article not-found handling
- Optimized images with Next.js Image
- Bengali date formatting
- TypeScript interfaces for API data

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- DaisyUI
- React Fast Marquee
- Next.js Image Optimization

## Project Structure

```text
src/
├── app/
│   ├── category/
│   │   └── [categoryId]/
│   │       └── page.tsx
│   ├── news/
│   │   └── [newsId]/
│   │       └── page.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
└── components/
    ├── Footer.tsx
    ├── Header.tsx
    ├── MainNews.tsx
    ├── Marquee.tsx
    ├── MostRead.tsx
    ├── NaveLinks.tsx
    └── NewsCard.tsx
```
