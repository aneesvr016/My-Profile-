# Muhammad Anees — Portfolio

Static site for GitHub Pages: https://aneesvr016.github.io/My-Profile-/

## Files
- `index.html` — Home (two tracks: XR jobs / PhD research, featured AI + XR projects)
- `projects.html` — All projects with filters + video portfolio link
- `research.html` — Research interests, research questions, publications, thesis results
- `about.html` — Education, experience, awards, contact
- `skills.html` — Grouped skills
- `assets/style.css` — Shared design for every page
- `assets/main.js` — Menu, filters and the **project list**
- `assets/profile.png` — Profile photo
- `assets/Muhammad_Anees_CV.pdf` — CV served by every "Download CV" button

## How to add a new project
Open `assets/main.js`, copy one block inside `PROJECTS`, and edit title, description, link and tags.
Categories (`cats`): `ai`, `vr`, `webxr`, `mobile`, `research`, `holo`. Filters and counts update automatically.

## How to update the CV
Replace `assets/Muhammad_Anees_CV.pdf` with the new PDF (keep the same file name).

## Interactive features
- Project cards open a popup with full details (extra detail lives in `DETAILS` in `assets/main.js`).
- Featured AI + XR carousel on the home page (auto-plays, arrows, dots, swipe on mobile).
- "Let’s talk" opens a contact popup with copy-email, WhatsApp, LinkedIn and CV.
- Scroll animations, animated counters, typing role line, scroll progress bar, back-to-top button.
- Animations switch off automatically for visitors who prefer reduced motion.
