# Samiksha Soni - React Developer Portfolio

A modern, animated, fully responsive portfolio website built with **React + Vite**. It is ready for GitHub Pages hosting and designed to look strong in frontend interviews.

## Features

- Modern glassmorphism + aurora background UI
- Fully responsive mobile-first layout
- Sticky navbar with mobile menu
- Dark / light theme toggle
- Scroll progress bar
- Framer Motion animations
- Interactive skill category panel
- Project showcase cards
- Professional experience timeline
- Education, certification, and contact sections
- Print resume button
- GitHub Pages deployment workflow included

## Tech Stack

- React
- Vite
- JavaScript / JSX
- CSS3
- Framer Motion
- Lucide React Icons

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## GitHub Pages Hosting

This project already includes:

```txt
vite.config.js
.github/workflows/deploy.yml
public/.nojekyll
```

### Deployment Steps

1. Create a new GitHub repository, for example:

```txt
samiksha-portfolio
```

2. Push this project to GitHub:

```bash
git init
git add .
git commit -m "Create Samiksha portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/samiksha-portfolio.git
git push -u origin main
```

3. Open your GitHub repository.

4. Go to:

```txt
Settings → Pages
```

5. Under **Build and deployment**, choose:

```txt
Source: GitHub Actions
```

6. Push to the `main` branch. GitHub Actions will build and deploy the site.

Your site will be available like:

```txt
https://YOUR_USERNAME.github.io/samiksha-portfolio/
```

## Important GitHub Pages Note

The Vite config uses:

```js
base: './'
```

This helps the production build work correctly when hosted inside a GitHub Pages repository path.

## Where to Edit Content

Most portfolio content is inside:

```txt
src/data/portfolioData.js
```

Update this file to change name, contact details, skills, projects, experience, education, and certifications.

## Suggested Interview Talking Point

> I built this as a React + Vite portfolio using reusable sections, responsive CSS, component-driven data rendering, theme switching, animation, and GitHub Pages deployment setup.
