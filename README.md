# Donley Etgard Merlien — Portfolio

A responsive bilingual developer portfolio built with React, TypeScript and Vite.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Before publishing
1. Update `src/data/content.ts` with your confirmed email and profile links.
2. Add your CV as `public/cv.pdf` (or change the CV link in the content file).
3. Replace project screenshots with real screenshots from HAITIBIZ and KARIBA.
4. Review project descriptions so they accurately reflect what is implemented and deployed.
5. Push to GitHub and import the repository into Vercel.

## Deploy to Vercel
- Create a GitHub repository and push this project.
- In Vercel, choose **Add New → Project** and import the repository.
- Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
- Deploy.

## Notes
- Contact links are placeholders until you add your real professional email and LinkedIn URL.
- The CV button expects `public/cv.pdf`.
- Project links point to the known GitHub repositories; add verified live-demo URLs when ready.
