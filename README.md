# 📰 Bangla News 24

A modern, responsive Bangla news web application built with **Next.js, React, TypeScript, and Tailwind CSS**.

Bangla News 24 provides users with a clean and responsive interface for browsing the latest news, exploring news categories, reading individual articles, and discovering the most-read stories.

The project consumes data from a REST API and demonstrates practical implementation of **Next.js App Router, dynamic routing, server-side data fetching, reusable components, TypeScript interfaces, responsive UI design, and modern frontend architecture**.

---

## ✨ Overview

Bangla News 24 is designed as a modern digital news platform with a focus on simplicity, readability, and responsive user experience.

The application includes:

- A featured news section
- Latest news ticker/marquee
- Category-based news browsing
- Most-read news section
- Detailed article pages
- Responsive layouts for mobile, tablet, and desktop
- Dynamic routing for categories and articles
- Bengali date and time formatting
- Reusable React components
- API-driven content

---

## 🚀 Features

### 🏠 Home Page

The homepage provides an overview of the latest news and includes:

- Featured/main news
- Additional news stories
- News sections based on categories
- Most-read news
- Latest news marquee

---

### 📰 News Cards

News articles are displayed using a reusable `NewsCard` component.

Each card contains:

- News image
- Category
- Headline
- Description
- Publication date
- Link to the full article

---

### 🔥 Most Read News

A dedicated section displays the most-read articles.

Each item includes:

- Ranking number
- Article title
- Link to the article details page

---

### 📢 Latest News Marquee

The latest news API is used to display a continuously scrolling headline ticker.

Users can click any headline to navigate directly to the corresponding article.

---

### 📂 Category Pages

Users can browse news by category.

Dynamic routing is implemented using:

```text
/category/[categoryId]
```
