<<<<<<< HEAD
# Shaik Shaikshavalli - Portfolio (React + Vite)

## Quick look (no setup)
Open `dist/index.html` in your browser. It is a single self-contained file.

## Run and edit
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # rebuilds dist/index.html
```

## Deploy
Upload `dist/index.html` plus `dist/Shaik-Shaikshavalli-Resume.pdf` to Netlify Drop,
or push the project to GitHub and import it in Vercel or Netlify
(build command `npm run build`, output directory `dist`).

## Edit your content
All text, numbers, links and the API endpoints live in `src/data/content.js`.
Section colours are the `data-tone` pairs near the bottom of `src/index.css`.
3D pieces: `Tilt.jsx` (card tilt), `Reveal.jsx` (scroll swing-in), `ShapesCanvas.jsx` (three.js shapes), orbit ring in `Hero.jsx`.

## Structure
```
src/
  App.jsx                 page order
  data/content.js         all content
  hooks/hooks.js          theme, count-up, in-view, copy helpers
  components/             Nav, Hero, About, Experience,
                          Projects, ApiExplorer, Skills, Education, Contact
  index.css               design tokens, dark and light themes
public/                   resume PDF
```
=======
# Shaiksha-Portfolio
Developer portfolio website built with React and Vite.
>>>>>>> c9a1ff19d74dbfa6f30150ef752a0de0c12a57bf
