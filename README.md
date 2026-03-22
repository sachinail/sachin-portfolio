# Sachin C — Portfolio

A personal portfolio website built with **React 18** + **Vite**.

## Tech Stack

- React 18 (with `createRoot`)
- Vite 5
- Plain CSS Modules (no Tailwind, no styled-components)
- Google Fonts — Fraunces + Outfit

## Project Structure

```
sachin-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx            # React 18 entry — createRoot
    ├── App.jsx             # Root component
    ├── index.css           # Global styles & CSS variables
    ├── data.js             # All content (skills, projects, achievements)
    ├── hooks/
    │   └── useReveal.js    # Custom hook — scroll reveal
    └── components/
        ├── Nav.jsx / Nav.css
        ├── Hero.jsx / Hero.css
        ├── About.jsx / About.css
        ├── Skills.jsx / Skills.css
        ├── Projects.jsx / Projects.css
        ├── Experience.jsx / Experience.css
        ├── Contact.jsx / Contact.css
        └── Footer.jsx / Footer.css
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Customisation

All content lives in `src/data.js` — update your skills, projects,
achievements, and contact links there without touching any JSX.
