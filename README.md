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
The **Game Board** project is a single-page gaming site showcasing various sections, including Banner, Favorite Games, VR Games, Top Games, and Latest Games. It provides users with an immersive experience as they explore the most exciting and recent game titles.


## Tech Stack
- **Frontend:** React, TypeScript
- **Build Tool:**   Vite, npm
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
The app will now be running locally, and you can access it in your browser at http://localhost:5173/
(Port :5173 is the default port and can be different)

## Folder Structure

```bash
├── public/               # Public static assets (e.g., images, fonts, etc.)
├── screenshots/          # Project Screenshots
├──  node_modules/        # Project dependencies (downloaded after running npm install)
├── src/
│   ├── components/       # Reusable components (Header, Footer, GamePreview, Reviews, UI elements, etc.)
│   │   ├── ui/           # New folder for UI elements
│   │   │   ├── Footer.tsx        # Footer component
│   │   │   ├── GamePreview.tsx   # Game preview component
│   │   │   ├── GamesGallery.tsx  # Games gallery component
│   │   │   ├── Header.tsx        # Header component
│   │   │   ├── Reviews.tsx       # Reviews component
│   │   │   ├── VirtualR.tsx      # Virtual reality-related component
│   ├── assets/          # Assets (fonts: Ondo, Lato)
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

 In future iterations of the project, the following features will be considered:

- Animations: Add interactive animations to enhance user experience.
- Fetch data from API or database (use Hooks for optimisation)
- Search Functionality: Implement a fully functional search bar with category filters and debouncing.
- Dynamic Data: Integrate APIs to fetch real-time data for games and reviews.
- Server-Side Rendering (SSR): Implement SSR for better performance and SEO.
- Advanced Filtering: Add options for filtering games by category, genre, and release date.


 ## 
 ```
 Live on -> : https://tichvr.netlify.app/
 ```
## Notes

The project also has screenshots folder attached 

  ```bash
Author : Tich Zvidzayi 
Edited_Date : 01/10/2024
```
