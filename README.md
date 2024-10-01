# Game_Board

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Debouncing for Search](#debouncing-for-search)
- [Installation and Setup](#installation-and-setup)
- [License](#license)

## Project Overview
This project shows a single page Gaming site showing the Banner, Favourite Games, VR Games, Top Games and Latest Games etc. :


## Tech Stack
- **Frontend:** React, TypeScript
- **Build Tool:**   Vite, npm
- **State Management:** React Hooks (`useState`)
- **Styling:** Tailwind CSS for UI development
- **Other Tools:**  Prettier

# Installation and Setup

### Clone repo
 ```bash
   git clone https://github.com/tichzvidzayi/gaming_site.git
```
### Navigate to folder
 ```bash
cd gaming_site
```
### Install dependencies and run logistics_site App
  ```bash
npm install
```
  ```bash
npm run dev
```

## Folder Structure

```bash
├── public/               # Public static assets (e.g., images, fonts, etc.)
├── src/
│   ├── components/       # Reusable components (Header, Footer, GamePreview, Reviews, UI elements, etc.)
│   │   ├── ui/           # New folder for UI elements
│   │   │   ├── Footer.tsx        # Footer component
│   │   │   ├── GamePreview.tsx   # Game preview component
│   │   │   ├── GamesGallery.tsx  # Games gallery component
│   │   │   ├── Header.tsx        # Header component
│   │   │   ├── Reviews.tsx       # Reviews component
│   │   │   ├── VirtualR.tsx      # Virtual reality-related component
│   ├── App.tsx           # Main App component
│   ├── App.css           # Global styles for the app
│   ├── index.css         # Tailwind CSS imports and global styles
│   ├── main.tsx          # Entry point of the app
│   
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration for Tailwind CSS
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.app.json     # TypeScript configuration for the app
├── tsconfig.app.tsbuildinfo  # TypeScript build info
├── tsconfig.node.json    # TypeScript config for Node.js
├── vite.config.ts        # Vite configuration
├── index.html            # Root HTML file
├── eslint.config.js      # ESLint configuration for linting
├── .gitignore            # Specifies files to ignore in Git (e.g., node_modules)
└── README.md             # Project documentation (this file)


```

## Future Considerations

- Add animations
- Fetch data from API or database (use Hooks for optimisation)
- Consider server server-side -rendering (SSR) 
-  Allow searching for a Game and Categories
 
 
## Notes

The project also has screenshots folder attached 

  ```bash
Author : Tich Zvidzayi 
Date : 01/10/2024
```
