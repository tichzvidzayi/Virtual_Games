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

├── public/               # Public static assets e.g images, fonts etc
├── src/
│   ├── components/       # Header.tsx, Footer.tsx, GamePreview.tsx, Reviews.tsx, ui etc.)       
│   ├          
│   ├── App.tsx            # Main App component
│   ├── App.css         
│   ├── index.css        
│   ├── main.tsx          
│   
├── package.json          # Project packages/dependencies
├── postcss.config.js     # PostCSS config
├── tailwind.config.js    # TailwindCSS config
├── tsconfig.app.json    # TypeScript config
├── tsconfig.app.tsbuildinfo   
├── tsconfig.node.json
├── vite.config.ts
├── index.html
├── eslint.config.js
├── .gitignore            # Ignore files (node_modules/)
└── README.md             # Project documentation
```

## Future Considerations

- Add animations
- Fetch data from API or database (use Hooks for optimisation)
- Consider server server-side -rendering (SSR) 
-  Allow searching for a Game and Categories
 
 

## Notes




  ```bash
Author : Tich Zvidzayi 
Date : 01/10/2024
```
